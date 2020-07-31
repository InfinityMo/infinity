<template>
  <div>
    home页面
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {

    }
  },
  mounted () {
    this.testApi()
    this.testApi()
  },
  methods: {
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
