<template>
  <div>
    <div class="wrapper">
    <avatar  :showSearch="false" avatarSrc="https://img.yzcdn.cn/vant/cat.jpeg"></avatar>
    </div>
  </div>
</template>

<script>
import avatar from '../../components/base/avatar-custom'
export default {
  name: '',
  props: [''],
  data () {
    return {

    }
  },

  components: {avatar},
  created () {},

  computed: {},

  beforeMount () {},

  mounted () {},

  methods: {},

  watch: {}
  // todo: 1.封装api 2.轮播图 3.宫格导航 4.页面宫格导航 5.公告 6.课表 7.天气 8.校园头条
}
</script>
<style lang='stylus' scoped>

</style>
