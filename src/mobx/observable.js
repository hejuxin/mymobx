function deepProxy(target, handler) {
  if (typeof target !== 'object') return target;
  for(let key in target) {
    target[key] = deepProxy(target[key], handler)
  }
  return new Proxy(target, handler());
}

function createObservable(target) {
  let handler = () => {
    return {
      get(target, key) {
        // return target[key]

        return Reflect.get(target, key);
      },
      set(target, key, value) {
        // return target[key] = value

        return Reflect.set(target, key, value);
      }
    }
  }

  return deepProxy(target, handler);
}

function observable(target) {
  // 需要将这个目标对象 进行代理操作 创建成可观察对象
  return createObservable(target);
}

export default observable;