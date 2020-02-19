import {getOpen} from './api'
const _OPENIDKEY_ = 'openId'
const _jsCODEKEY_ = 'js_code'
// 检测用户是否授权
export function getsetting (auth, onSuccess, onFail) {
  mpvue.getSetting(
    {
      success (res) {
        // 判断是否具备权限 具备就回调onSuccess
        if (res.authSetting[`scope.${auth}`]) {
          onSuccess(res)
        } else {
          onFail(res)
        }
      }
    },
    {
      fail (res) {
        console.log(res)
      }
    }
  )
}

// 获取用户信息
export function getUserInformation (onSuccess, onFail) {
  mpvue.getUserInfo({
    success (res) {
      const {userInfo} = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    }
  }, {
    fail (res) {
      console.log(res)
    }
  }
  )
}

export function getOpenID (callback) {
  mpvue.login(
    {
      success (res) {
        if (res.code) {
          getOpen(res.code).then((response) => {
            const {data: {data: {openid}}} = response
            setStorageSync(_OPENIDKEY_, openid)
            setStorageSync(_jsCODEKEY_, res.code)
            callback && callback(openid)
          }).catch((error) => {
            console.log(error)
            mpvue.showToast({
              title: '获取openId失败',
              confirmtext: '确定',
              showCancle: false
            })
          })
        }
      }
    }, {
      fail (res) {
        console.log(res)
      }
    }
  )
}
// 设置本地储存用户信息
export function setStorageSync (key, data) {
  mpvue.setStorageSync(key, data)
}

// 获取本地用户信息
export function getStorageSync (key) {
  return mpvue.getStorageSync(key)
}
