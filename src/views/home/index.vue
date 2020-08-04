<template>
  <div>
    home页面
    <!-- <input type="file"
           @change="getFile($event)" />
    <img :src='imgShow[0]'> -->
    <button @click="debounce(testApi)">test Api</button>
  </div>
</template>
<script>
import debounce from '@/mixins/debounce'
export default {
  name: 'Home',
  components: {},
  mixins: [debounce],
  data () {
    return {
      inputImg: '',
      imgArr: [],
      imgShow: []
    }
  },
  mounted () {
    // console.log(debounce)
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
    testApi () {
      this.$axios.get('http://jsonplaceholder.typicode.com/todos').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
