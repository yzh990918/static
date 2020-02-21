<template>
  <div class="notice">
    <div class="title bg-white">
    <div class="cu-bar bg-white item">
    <div class="action">
      <text class="cuIcon-title text-green"></text>
      <text class="text-xl text-bold">公告通知</text>
       <span class="icon">
        <van-icon name="https://i.loli.net/2020/02/21/rw9I7ymnCThqRV4.png" size="25"/>
      </span>
    </div>
    </div>
      <div class="button">
      <div class="cu-tag round line-green">查看全部</div>
    </div>
    </div>
    <div class="content">
      <van-cell-group>
      <van-cell title="单元格" is-link value="2019-12-12" icon="volume-o" />
      <van-cell title="单元格" is-link value="2019-12-12" icon="volume-o" />
    </van-cell-group>
  </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: [''],
    data () {
      return {

      }
    },

    components: {},
    created () {},

    computed: {},

    beforeMount () {},

    mounted () {},

    methods: {},

    watch: {}

  }
</script>
<style lang='stylus' scoped>
.notice
  margin-top 12px
  display flex
  flex-direction column
  .title
    display flex
    justify-content space-between
    .icon
      margin-left 10px
      margin-top 4px
    .button
      padding 15px
</style>
