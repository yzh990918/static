<template>
  <div>
<cu-custom bgColor="bg-blue" :isBack="true">
	<block slot="backText">返回</block>
	<block slot="content">更多</block>
</cu-custom>
<view class="cu-bar justify-center ">
    <view class="action border-title">
      <text class="text-xl text-bold text-blue">成绩查询</text>
      <text class="bg-gradual-blue" style="width:3rem"></text>
    </view>
  </view>
  <div class="menu-infor bg-white">
      <div class="content">
       <van-grid column-num="4" :border="false">
        <van-grid-item use-slot v-for="(item,index) in ExamSearchList" :key="index" @click="Select(item.path)">
          <van-image :src="item.url" width="38" height="38"></van-image>
          <p class="text text-black">{{item.text}}</p>
        </van-grid-item>
      </van-grid>
    </div>
    </div>

    <view class="cu-bar justify-center ">
    <view class="action border-title">
      <text class="text-xl text-bold text-cyan">便捷服务</text>
      <text class="bg-cyan" style="width:3rem"></text>
    </view>
  </view>
  <div class="menu-infor bg-white">
      <div class="content">
       <van-grid column-num="4" :border="false">
        <van-grid-item use-slot v-for="(item,index) in SchoolInfoList" :key="index" @click="Select(item.path)">
          <van-image :src="item.url" width="38" height="38"></van-image>
          <p class="text text-black">{{item.text}}</p>
        </van-grid-item>
      </van-grid>
    </div>
    </div>

    <view class="cu-bar justify-center ">
    <view class="action border-title">
      <text class="text-xl text-bold text-orange">校园生活</text>
      <text class="bg-orange" style="width:3rem"></text>
    </view>
  </view>
  <div class="menu-infor bg-white">
      <div class="content">
       <van-grid column-num="4" :border="false">
        <van-grid-item use-slot v-for="(item,index) in SchoolLifeList" :key="index" @click="Select(item.path)">
          <van-image :src="item.url" width="38" height="38"></van-image>
          <p class="text text-black">{{item.text}}</p>
        </van-grid-item>
      </van-grid>
    </div>
    </div>
    <div class="bottom">
      <van-image src="https://i.loli.net/2020/02/22/IuW8fgmsbAx4j5O.png" fit="cover" width="70" height="70"></van-image>
      <div class="title">已经到底啦</div>
      <div class="desc text-gray">"还有更多的功能正在探索哟"</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: [''],
    data () {
      return {
        SchoolInfoList: [
          {
            'url': '/static/icon/课程表.png',
            'text': '课程表',
            'path': 'kb'
          },
          {
            'url': '/static/icon/一键评教.png',
            'text': '一键评教',
            'path': 'pj'
          },
          {
            'url': '/static/icon/学生查询.png',
            'text': '学生查询',
            'path': 'student'
          },
          {
            'url': '/static/icon/一卡通.png',
            'text': '一卡通余额',
            'path': 'card'
          },
          {
            'url': '/static/icon/密码.png',
            'text': '密码操作',
            'path': 'password'
          },
          {
            'url': '/static/icon/考试倒计时.png',
            'text': '考试倒计时',
            'path': 'djs'
          },
          {
            'url': '/static/icon/空教室.png',
            'text': '空教室',
            'path': 'room'
          },
          {
            'url': '/static/icon/校历.png',
            'text': '学校校历',
            'path': 'xl'}
  
        ],
        SchoolLifeList: [
          {
            'url': '/static/icon/院系简介.png',
            'text': '院系简介',
            'path': 'yx'
          },
          {
            'url': '/static/icon/社团.png',
            'text': '社团',
            'path': 'st'
          },
          {
            'url': '/static/icon/地图.png',
            'text': '地图导航',
            'path': 'map'
          },
          {
            'url': '/static/icon/小卖部.png',
            'text': '小卖部',
            'path': 'sell'
          }
        ],
        ExamSearchList: [
          {
            'url': '/static/icon/成绩.png',
            'text': '成绩查询',
            'path': 'cj'
          },
          {
            'url': '/static/icon/四六级.png',
            'text': '四六级成绩',
            'path': 'cet'
          },
          {
            'url': '/static/icon/计算机.png',
            'text': '计算机二级',
            'path': 'computer'},
          {
            'url': '/static/icon/教资.png',
            'text': '教资成绩',
            'path': 'jz'
          },
          {
            'url': '/static/icon/口语.png',
            'text': '四六级口语',
            'path': 'cetTalk'
          }
        ]

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
.menu-infor
  margin 8px
  border-radius 20px
  margin-top -7px
  max-height 200px
  padding 10px
  .content
    .text
      margin-top 8px
      font-size 13px
      text-align center
      white-space nowrap
.bottom
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  height 200px
  .title
    font-size 15px
    margin-top 8px
  .desc
    font-size 13px
    margin-top 4px

</style>
