<template>
  <div>
    <div class="bg-wrapper">
    </div>
    <avatar  :showSearch="false" avatarSrc="https://i.loli.net/2020/02/21/CBrNX8dzamDTceo.png"></avatar>
    <div class="banner">
    	<swiper class="card-swiper square-dot" :circular="true"  :indicator-dots="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index"  :class="cardCur==index?'cur':''">
				<div class="swiper-item">
					<image :src="item" mode="aspectFill" ></image>
				</div>
			</swiper-item>
		</swiper>
    </div>
    <div class="grid-banner">
      <gridBanner></gridBanner>
    </div>
    <timetable></timetable>
    <attention></attention>
    <weather></weather>
    <news></news>
     <div class="bottom">
      <van-image src="https://i.loli.net/2020/02/22/SXBkp8EzcCGM9PZ.png" fit="cover" width="40" height="40"></van-image>
      <div class="title">已经到底啦</div>
      <div class="desc text-gray">"感谢你们的支持"</div>
    </div>
  </div>
</template>

<script>
import avatar from '../../components/base/avatar-custom'
import {getBanner} from '../../api/api'
import gridBanner from '../../components/Home/gridbanner'
import timetable from '../../components/Home/timetable'
import attention from '../../components/Home/attention'
import weather from '../../components/Home/weather'
import news from '../../components/Home/top-news'
export default {
  name: '',
  props: [''],
  data () {
    return {
      swiperList: [],
      cardCur: 0

    }
  },

  components: {avatar, gridBanner, timetable, attention, weather, news},
  created () {},

  computed: {},

  beforeMount () {},

  mounted () {
    this.getbanner()
  },

  methods: {
    getbanner () {
      getBanner().then((res) => {
        if (res.data.data.status === '200') {
          this.swiperList = res.data.data.imgUrlList
        }
      })
    },
    TowerSwiper (name) {
      let list = this[name]
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
        list[i].mLeft = i - parseInt(list.length / 2)
      }
      this.swiperList = list
    },
    cardSwiper (e) {
      this.cardCur = e.mp.detail.current
    }
  },

  watch: {}
  // finished: 1.封装api 2.轮播图 3.宫格导航 4.页面宫格导航 5.公告 6.课表 7.天气 8.校园头条
  // todo: 新鲜事界面基本搭建(仿超级课程表) 抽屉动画搭建  3.完善个人中心页面 微信登陆授权 登陆界面 各种查询界面参考构思
}
</script>
<style lang='stylus' scoped>
.bg-wrapper
  background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280373/1570687034669-assets/web-upload/a97bae62-3157-46bf-934e-72f629548f70.png);
  background-size: 100% 100%;
  background-repeat no-repeat
  height: 90px;
  z-index -1
.banner
  margin-top -94px
.grid-banner
  margin-top -5px
.bottom
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  height 100px
  .title
    font-size 15px
    margin-top 8px
  .desc
    font-size 13px
    margin-top 4px
</style>
