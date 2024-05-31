import Reaction from "./reaction";

function deepProxy(target, handler) {
  if (typeof target !== 'object') return target;
  for(let key in target) {
    target[key] = deepProxy(target[key], handler)
  }
  return new Proxy(target, handler());
}

function createObservable(target) {
  let handler = () => {
    let reaction = new Reaction();
    return {
      get(target, key) {
        // return target[key]
        reaction.collect(key);
        return Reflect.get(target, key);
      },
      set(target, key, value) {
        // return target[key] = value
        const res = Reflect.set(target, key, value);
        // 需要先设置新值，再执行监听方法
        reaction.run(key);
        return res;
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