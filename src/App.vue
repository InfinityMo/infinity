<template>
  <a-config-provider :getPopupContainer="getPopupContainer"
                     :locale="locale">
    <div id="app">
      <router-view />
      <a-spin :spinning="$store.state.spinning"
              size="large"
              tip="拼命加载中...">
        <a-icon slot="indicator"
                type="loading"
                style="font-size: 28px"
                spin />
      </a-spin>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  data () {
    return {
      locale: zhCN
    }
  },
  computed: {

  },
  mounted () {
    function checkIE () {
      return (
        !!window.ActiveXObject || 'ActiveXObject' in window
      )
    }
    if (checkIE()) {
      window.addEventListener(
        'hashchange', () => {
          var currentPath = window.location.hash.slice(1)
          if (this.$route.path !== currentPath) {
            this.$router.push(currentPath)
          }
        }, false
      )
    }
  },
  methods: {
    getPopupContainer (el) {
      if (el) {
        return el.parentNode
      } else {
        return document.body
      }
    }
  }
}
</script>
<style lang="less">
</style>
