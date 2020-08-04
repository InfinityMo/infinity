/*
function：防抖函数
anthor：Infinity
time：2020-08-24

func：函数引用
args：剩余参数
默认200ms
*/
export default function (func, ...args) {
  let timer = null
  return (function () {
    const _this = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(_this, args)
    }, 200)
  }())
}
