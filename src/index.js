// import { observable } from 'mobx';
import { observable } from './mobx';

const o = observable({ name: 'x' });
console.log(o)

const o2 = observable({ name: 'x', hobby: { active: 'run' } });
console.log(o2)