/*
function：防抖函数
anthor：Infinity
time：2020-08-24

func：函数引用
args：剩余参数
默认300ms
*/
export default function (func, ...args) {
  const immediate = true
  const self = this._self
  return () => {
    const context = self
    if (self.timeout) clearTimeout(self.timeout)
    if (immediate) {
      const callNow = !self.timeout
      self.timeout = setTimeout(() => {
        self.timeout = null
      }, 500)
      if (callNow) func.apply(context, args)
    } else {
      self.timeout = setTimeout(() => {
        func.apply(context, args)
      }, 500)
    }
  }
}
