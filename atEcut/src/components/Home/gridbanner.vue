<template>
  <div class="gridbanner">
  <van-grid column-num="5" :border="false">
  <van-grid-item use-slot v-for="(item,index) in gridbannerList" :key="index" @click="Select(item.path)">
    <van-image :src="item.url" width="38" height="38"></van-image>
    <p class="text text-gray">{{item.text}}</p>
  </van-grid-item>
</van-grid>
  </div>
</template>

<script>
  export default {
    name: '',
    props: [''],
    data () {
      return {
        gridbannerList: [
          {
            'url': '/static/icon/课程表.png',
            'text': '课表查询',
            'path': 'kb'
          },
          {
            'url': '/static/icon/成绩.png',
            'text': '成绩查询',
            'path': 'cj'
          },
          {
            'url': '/static/icon/一键评教.png',
            'text': '一键评教',
            'path': 'pj'
          },
          {
            'url': '/static/icon/院系简介.png',
            'text': '院系简介',
            'path': 'yx'
          },
          {
            'url': '/static/icon/校历.png',
            'text': '学校校历',
            'path': 'xl'
          },
          {
            'url': '/static/icon/考试倒计时.png',
            'text': '考试倒计时',
            'path': 'djs'
          },
          {
            'url': '/static/icon/学生查询.png',
            'text': '学生查询',
            'path': 'xs'
          },
          {
            'url': '/static/icon/图书检索.png',
            'text': '馆藏图书',
            'path': 'ts'
          },
          {
            'url': '/static/icon/四六级.png',
            'text': '四六级',
            'path': 'cet'
          },
          {
            'url': '/static/icon/更多.png',
            'text': '更多',
            'path': 'more'
          }

        ]

      }
    },

    components: {},
    created () {},

    computed: {},

    beforeMount () {},

    mounted () {},

    methods: {
      Select (item) {
        this.$router.push({
          path: `/pages/${item}/main`
        })
      }
    },

    watch: {}

  }
</script>
<style lang='stylus' scoped>
.gridbanner
  width 100%
  height 200px
  max-height:200px
  .text
    text-align center
    margin-top 10px
    white-space nowrap
    font-size 13px
</style>
