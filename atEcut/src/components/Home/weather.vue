<template>
  <div class="weather">
    <div class="title bg-white">
  <div class="cu-bar bg-white item">
    <div class="action">
      <text class="cuIcon-titles text-orange"></text>
      <text class="text-xl text-bold">天气小报</text>
        <span class="icon">
        <van-icon name="https://i.loli.net/2020/02/21/WlhEudv3eVMSAX6.png" size="25"/>
      </span>
    </div>
    </div>
    
      <div class="button">
      <div class="cu-tag round line-orange">具体天气</div>
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
.weather
  margin-top 12px
  display flex
  flex-direction column
  border-radius 20px
  .title
    display flex
    justify-content space-between
    .icon
      margin-left 10px
      margin-top 4px
    .button
      padding 15px
</style>
