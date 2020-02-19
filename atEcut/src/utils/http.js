const errorTip = {
  // 错误码提示
  1: '请求失败',
  400: '获取数据失败'
}

function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}

// 未封装版
export function _get (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then((response) => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export function _post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then((response) => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

// 封装版 get请求
export function get (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then((response) => {
        if (response && response.data && response.data.ret === 200 && response.data.status === 200) {
          resolve(response)
        } else {
          let code = response.data.status
          _showerror_(code)
          reject(response)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export function post (url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then((response) => {
        if (response && response.data && response.data.ret === 200 && response.data.status === 200) {
          resolve(response)
        } else {
          let code = response.data.status
          _showerror_(code)
          reject(response)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

function _showerror_ (_errcode) {
  // 默认展示请求失败内容
  if (!_errcode) {
    _errcode = 1
  }
  mpvue.showToast({
    title: errorTip[_errcode],
    icon: 'none',
    duration: 2000
  })
}
