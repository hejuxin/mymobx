import Reaction from "./reaction";

function autorun(handler) {
  Reaction.start(handler); // 先保存这个方法
  handler(); // 调用这个方法时会触发get，此时get就可以拿到这个方法
  Reaction.end();
}

export default autorun;