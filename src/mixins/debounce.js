
const mixins = {
  data () {
    return {}
  },
  methods: {
    debounce (fn, delay) {
      let timer
      delay = delay || 200
      return (function () {
        const _this = this
        const args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(_this, args)
        }, delay)
      }())
    }
  }
}
export default mixins
