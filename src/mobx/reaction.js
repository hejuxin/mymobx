let nowFn; // 用于存autorun方法

class Reaction {
  constructor() {
    this.store = {};
  }
  static start(handler) {
    nowFn = handler;
  }

  static end() {
    nowFn = null;
  }

  collect(key) {
    if(nowFn) {
      this.store[key] = this.store[key] || [];
      this.store[key].push(nowFn);
    }
  }

  run(key) {
    if(this.store[key]) {
      this.store[key].forEach(w => {
        w();
      })
    }
  }
}

export default Reaction;