<template>
  <div>
    home页面
    <!-- <input type="file"
           @change="getFile($event)" />
    <img :src='imgShow[0]'> -->
    <button @click="$debounce(testApi,1,2,3,4)()">test Api</button>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      inputImg: '',
      imgArr: [],
      imgShow: []
    }
  },
  mounted () {
    // this.testApi()
    // this.$debounce(this.dThis, this.testApi, 1, 2, 3, 4)()
  },
  methods: {
    getFile (event) {
      var file = event.target.files
      const reader = new FileReader()
      reader.readAsDataURL(file[0])
      const _this = this
      reader.onload = (e) => {
        _this.imgShow.push(e.target.result)
      }
    },
    getFiles (e) {
      this.inputImg = e.target.value
    },
    testApi (a, b, c, d) {
      console.log(a, b, c, d)
      this.$axios.get('http://jsonplaceholder.typicode.com/todos').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
