import {InternalObservable} from '../InternalObservable';

export function filter(observable, predicate) {
  return new InternalObservable((observer) => {
    const filterObserver = {
      next: (x, idx) => {
        if (predicate(x, idx)) observer.next(x, idx)
      },
      error: (err) => observer.error(err),
      completed: () => observer.completed()
    };
    return observable.subscribe(filterObserver);
  });
}