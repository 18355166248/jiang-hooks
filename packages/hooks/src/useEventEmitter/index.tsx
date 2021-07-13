import { useRef, useEffect } from 'react';

interface Subscription<T> {
  (val: T): void;
}

export class EventEmitter<T> {
  private subscriptions = new Set<Subscription<T>>();

  useOn = (callback: Subscription<T>) => {
    const callbackRef = useRef<Subscription<T>>();
    callbackRef.current = callback;

    useEffect(() => {
      function substcription(val: T) {
        if (callbackRef.current) {
          callbackRef.current(val);
        }
      }

      this.subscriptions.add(substcription);
      return () => {
        this.subscriptions.delete(substcription);
      };
    }, []);
  };

  emit(val: T) {
    for (const subscrip of this.subscriptions) {
      subscrip(val);
    }
  }
}

export default function useEventEmitter<T = void>() {
  const ref = useRef<EventEmitter<T>>();

  if (!ref.current) {
    ref.current = new EventEmitter();
  }

  return ref.current;
}
