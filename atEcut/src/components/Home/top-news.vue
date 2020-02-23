<template>
  <div class="top-news">
   <div class="title item bg-white">
    <div class="cu-bar bg-white item">
    <div class="action">
      <text class="cuIcon-titles text-purple"></text>
      <text class="text-xl text-bold">校内新闻</text>
       <span class="icon">
        <van-icon name="https://i.loli.net/2020/02/21/AsxVDcaMj4STKGX.png" size="25"/>
      </span>
    </div>
    </div>
      <div class="button">
      <div class="cu-tag round line-purple">查看全部</div>
    </div>
    </div>
    <div class="content">
     <div class="cu-card article no-card">
      <div class="cu-item shadow ">
        <div class="title">
          <div class="text-cut text-gray">校内大新闻</div>
        </div>
        <div class="content">
          <image src="https://i.loli.net/2020/02/21/CBrNX8dzamDTceo.png"  mode="aspectFill"></image>
          <div class="desc">
            <div class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</div>
          </div>
        </div>
      </div>
</div>
 <div class="cu-card article no-card">
      <div class="cu-item shadow ">
        <div class="title">
          <div class="text-cut text-gray">校内大新闻</div>
        </div>
        <div class="content">
          <image src="https://i.loli.net/2020/02/21/CBrNX8dzamDTceo.png"  mode="aspectFill"></image>
          <div class="desc">
            <div class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</div>
          </div>
        </div>
      </div>
</div>
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
.top-news
  margin-top 12px
  display flex
  flex-direction column
  .item
    border-bottom 1px solid #e5e5e5
  .title
    display flex
    justify-content space-between
    .icon
      margin-left 10px
      margin-top 4px
    .button
      padding 15px
</style>
