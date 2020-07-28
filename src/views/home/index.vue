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
  },
  methods: {
    testApi () {
      this.$axios.get('fing/fads').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
