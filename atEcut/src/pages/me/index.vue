<template>
 <scroll-view scroll-y class="scrollPage">
  <view class="UCenter-bg">
    <image src="https://i.loli.net/2020/02/21/CBrNX8dzamDTceo.png" class="png" mode="widthFix"></image>
    <view class="text-xl title">atECUT
      <text class="text-df">v2.0.9</text>
    </view>
    <image src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif" mode="scaleToFill" class="gif-wave"></image>
  </view>
   <view class="cu-list menu margin-bottom-xl shadow-lg radius">
        <view class="cu-item">
          <view class="content user">
            <div class="cu-avatar radius lg avatar " ref="avatar" :style="{backgroundImage : 'url'+'('+userInformation.avatarUrl+')'}">
              <view class="cu-tag badge" :class="userInformation.gender===2 ? 'cuIcon-female bg-pink':'cuIcon-male bg-blue'" ></view>
            </div>
            <div class="userinfo">
              <div class="userName">努力中的杨先生</div>
              <div class="desc text-grey" >201720180727</div>
            </div>
            <div class="classtime">
              <div class="term text-gray">大三第二学期</div>
              <div class="weekday text-gray">第三周-星期一</div>
            </div>
            <div class="arrow-icon cuIcon-right">
            </div>
          </view>
        </view>
   </view>
   <div class="radius-top"></div>
   <div class="bar">
     <van-cell-group :border="false">
        <van-cell
          title="公告"
          icon="https://i.loli.net/2020/02/23/2fQT3IlzbA9GvR6.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="实时反馈"
          icon="https://i.loli.net/2020/02/23/NC5HqeAxdRb9fWz.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="赞赏"
          icon="https://i.loli.net/2020/02/22/c317dIRmU964jaB.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="开发日志"
          icon="https://i.loli.net/2020/02/23/H9wQD7sdA35cPMK.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="我的荣誉"
          icon="https://i.loli.net/2020/02/23/9cj518xn64GLyBI.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="关于在东理"
          icon="https://i.loli.net/2020/02/22/S4pBdubjl3yEFtr.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="友情链接"
          icon="https://i.loli.net/2020/02/23/X7gVcWurwYqmznj.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="联系开发者"
          icon="https://i.loli.net/2020/02/23/N5lWzQnBtH4M7Ag.png"
          is-link
          title-class="title_class"
    />
     <van-cell
          title="分享"
          icon="https://i.loli.net/2020/02/22/JelXr8gpDFGowVv.png"
          is-link
          title-class="title_class"
    />
     </van-cell-group>
   </div>
</scroll-view>
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

  computed: {
  },

  beforeMount () {},
  methods: {
  }

}
</script>
<style lang='stylus' scoped>
.UCenter-bg {
  background-image: url(https://cdn.nlark.com/yuque/0/2019/jpeg/223589/1551683250125-assets/web-upload/dc4db058-ea1e-4180-bcfe-f68a02a68859.jpeg);
  background-size: cover;
  height: 450rpx;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color:rgb(54, 131, 214);
  font-weight: 400;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.title
  margin-top 8px
.user
  display flex
  position relative
  padding 10px
  .avatar
    margin-top 5px
  .userinfo
    margin-left 18px
    display flex
    margin-top 13px
    vertical-align top
    flex-direction column
    .userName
      color #333
      font-weight 400
      font-size 15px
      line-height 16px
    .desc
      margin-top 4px
      font-size 12px
  .arrow-icon 
    position absolute
    right 1px;
    color #8799a3
    font-size 18px
    transform translateY(-50%)
    top 50%
  .classtime
    margin-left 50px
    display flex
    flex-direction column
    justify-content center
    align-items center
    .term
      font-size 13px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      margin-top 8px
    .weekday
      font-size 13px
      margin-top 3px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
.UCenter-bg text {
  margin-top 4px
  opacity: 0.8;
}

.UCenter-bg image {
  width: 180rpx;
  height: 180rpx;
  border-radius 50%
}

.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}
.radius-top {
  background #ffffff;
  height 30px;
  width 100%;
  border-radius 20px 20px 0px 0px ;
}
.bar{
  margin-top -5px;
}
  
</style>
<style >
.title_class{
  font-size: 14px;
  line-height: 18px;
  color:#8799a3;
  margin-top: 3px;
  margin-left: 10px;
}
.van-cell__left-icon-wrap,.van-cell__right-icon-wrap{
  height: 20px !important;
  font-size: 20px !important;
}
.van-cell__right-icon-wrap {
 font-size: 19px!important;
}

  
</style>
