<template>
  <div class="time-table">
    <div class="title bg-white">
    <div class="cu-bar bg-white item">
    <div class="action">
      <text class="cuIcon-titles text-blue"></text>
      <text class="text-xl text-bold">本周课表</text>
       <span class="icon">
        <van-icon name="https://i.loli.net/2020/02/21/oXlxeUy4YC6OzcZ.png" size="25"/>
      </span>
    </div>
    </div>
      <div class="button">
      <div class="cu-tag round line-blue">全部课表</div>
    </div>
    </div>
    <div class="content">
      <div class="kb-info bg-white">
        <div class="kb">
          <div class="class text-lg  text-black">软件工程</div>
          <div class="time text-gray text-sm">1-2节(8:00~9:40)</div>
        </div>
        <div class="address text-gray">
        三教301
        </div>
      </div>
       <div class="kb-info bg-white">
        <div class="kb">
          <div class="class text-lg   text-black">软件工程</div>
          <div class="time text-gray text-sm">1-2节(8:00~9:40)</div>
        </div>
        <div class="address text-gray">
        三教301
        </div>
      </div>
      <!-- <van-cell-group>
        <van-cell  center title="软件工程" label="1-2节(8:00~9:40)" value="三教301"></van-cell>
       <van-cell  center title="软件工程" label="1-2节(8:00~9:40)" value="三教301"></van-cell>
      </van-cell-group> -->
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
.time-table
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
  .content
    background-image url('https://i.loli.net/2020/02/21/DeHEZbphLGR7wBA.png')
    background-size 100% 129px
    height 130px
    width 100%
    background-repeat no-repeat
    .kb-info
      display flex
      opacity .75
      justify-content space-between
      border-bottom 1px solid #e5e5e5
      height 65px
      .kb
        display flex
        flex-direction column
        padding 20px
        justify-content center
        .time
          margin-top 4px
      .address
        padding 25px
        max-width 60px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        &:last-child
          border none
   
</style>
