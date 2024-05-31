// import { observable, autorun } from 'mobx';
import { observable, autorun } from './mobx';



const o = observable({ name: 'x' });

/**
 * 关于autorun
 * 创建时会立即执行方法 并且会收集依赖
 * 后续在依赖变化时会再次执行方法
 */
autorun(() => {
  console.log(o.name)
})

o.name = 'y'


// const o2 = observable({ name: 'x', hobby: { active: 'run' } });
// console.log(o2)