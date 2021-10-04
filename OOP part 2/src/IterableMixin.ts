export class IterableMixin implements Iterable<Object> {
    *[Symbol.iterator]() {
      for (let page of (this as any)['pages'].pages) {
        yield this+', '+page;
      }
    }
  }