<template>
	<div>
		<div class="cu-custom avatar-hea" :style="[{height:CustomBar + 'px'}]">
			<div class="cu-bar fixed "  :style="style" >
            <div class="cu-bar search add" :style="style">
              <div class="avatar-wrapper ">
                  <van-image width="35" height="35" fit="cover" round :src="avatarSrc"></van-image>
              </div>
          <div class="search-form radius" v-if="showSearch">
            <text class="cuIcon-search"></text>
            <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search"/>
          </div>
          <div class="title">
                  <div class="cu-bar" v-if="showtitle">
          <div class="action sub-title">
            <text class="text-xl text-bold text-white">atECUT</text>
            <text class="bg-gray" style="width:76px"></text>
            <!-- last-child选择器-->
          </div>
        </div>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      StatusBar: '',
      CustomBar: '',
      Custom: ''
	    }
	  },
	  name: 'cu-custom',
	  computed: {
	    style () {
      var CustomBar = this.CustomBar
      var StatusBar = 0.4 * this.StatusBar
	      var style = `height:${CustomBar}px; margin-top:${StatusBar}px;`
	      return style
	    }
	  },
	  props: {
    showSearch: {
      type: Boolean,
      default: true
    },
    avatarSrc: {
      type: String,
      default: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
    },
    showtitle: {
      type: Boolean,
      default: true
    }
  },
  onLoad () {
    mpvue.getSystemInfo({ success: e => {
      let custom = mpvue.getMenuButtonBoundingClientRect()
      this.StatusBar = e.statusBarHeight
      this.CustomBar = custom.bottom + custom.top - e.statusBarHeight
      this.Custom = custom
    }})
    console.log(this.StatusBar, this.CustomBar, this.Custom)
  },
	  methods: {
	    BackPage () {
	      mpvue.navigateBack({
	        delta: 1
	      })
	    }
	  }
}
</script>

<style>
.add{
  padding-right: 0px !important;
}
.avatar-wrapper{
  margin-left: 12px
}
.title{
    display: flex;
    justify-content: center;
}
</style>
