import {_get, post, _post} from '../utils/http'

const appIdHOST = 'https://test.youbaobao.xyz:18081'
const appid = 'wxdcb143e3cf5afacd'
const appsecret = '8a75dfade75690295ab94f82fc25c292'
const HOST = 'https://atecut.cn/api/public/?service='

// 第一种方法获取appID 具体方法在wechat.js
export function getOpen (code) {
  const url = appIdHOST + '/openId/get'
  return _get(url, {
    appId: appid,
    code: code,
    secret: appsecret
  })
}

// 在东理api获取appId
export function _getOpen (code) {
  mpvue.login({
    success (res) {
      if (res.code) {
        const url = HOST + 'App.Wx.GetUserWxInfo'
        return _post(url, {
          js_code: res.code
        })
      }
    }
  }, {
    fail (res) {
      console.log(res + '获取失败')
    }
  })
}

// 获取广告数据
export function getAdvertisement (params) {
  const url = HOST + 'App.Advertisement.GetAdvertisement'
  return post(url, params)
}

// 获取蹭课结果
export function getAuditing (params) {
  const url = HOST + 'App.Auditing.GetAuditing'
  return post(url, params)
}
// 蹭课课程详情
export function getCourseDtail (params) {
  const url = HOST + 'App.Auditing.GetCourseDeatil'
  return post(url, params)
}

// 获取校历
export function getCalendar (params) {
  const url = HOST + 'App.Calendar.SetCalendar'
  return post(url, params)
}

// 一卡通余额
export function getCardBalance (params) {
  const url = HOST + 'App.Card.GetCardBalance'
  return post(url, params)
}

// 四六级成绩
export function getCetScore (params) {
  const url = HOST + 'App.Cet.GetCetScore'
  return post(url, params)
}

// 获取四六级查询验证码接口
export function getVerifyCode (params) {
  const url = HOST + 'App.Cet.GetVerifyCode'
  return post(url, params)
}

// 获取学院简介
export function getIntroduce (params) {
  const url = HOST + 'App.Department.GetIntroduce'
  return post(url, params)
}

// 删除成绩单
export function DeleteDownScore (params) {
  const url = HOST + 'App.DownloadScore.DeleteDownloadedScore'
  return post(url, params)
}

// 下载成绩单
export function DownloadScore (params) {
  const url = HOST + 'App.DownloadScore.DownloadScore'
  return post(url, params)
}

// 获取空教室信息
export function getEmptyClassroom (params) {
  const url = HOST + 'App.EmptyClassroom.GetEmptyClassroom'
  return post(url, params)
}

// 获取首页轮播
export function getBanner () {
  const url = HOST + 'App.IndexImg.SetIndexImg'
  return post(url)
}

// 反馈信息
export function SendIssue (params) {
  const url = HOST + 'App.Issues.SendIssues'
  return post(url, params)
}

// 获取图书详情接口
export function getBookDetail (params) {
  const url = HOST + 'App.Library.GetBookDetail'
  return post(url, params)
}

// 获取馆藏信息接口
export function getBookInfo (params) {
  const url = HOST + 'App.Library.GetBookInfo'
  return post(url, params)
}

// 获取借阅信息接口
export function getBorrowInfo (params) {
  const url = HOST + 'App.Library.GetBorrowInfo'
  return post(url, params)
}

// 计算机考试成绩口
export function getNcreScore (params) {
  const url = HOST + 'App.Ncre.GetNcreScore'
  return post(url, params)
}

// 获取计算机考试时间
export function getNcreTime (params) {
  const url = HOST + 'App.Ncre.GetNcreTime'
  return post(url, params)
}

// 新鲜事模块

// 评论
export function Comment (params) {
  const url = HOST + 'App.NewThings.Comment'
  return post(url, params)
}
// 删除评论
export function DeleteComment (params) {
  const url = HOST + 'App.NewThings.DeleteComment'
  return post(url, params)
}

// 发表新鲜事
export function CreateThings (params) {
  const url = HOST + 'App.NewThings.CreateNewThing'
  return post(url, params)
}
// 删除新鲜事
export function DeleteThings (params) {
  const url = HOST + 'App.NewThings.DeleteNewThing'
  return post(url, params)
}
// 查看新鲜事评论
export function getComment (params) {
  const url = HOST + 'App.NewThings.GetComment'
  return post(url, params)
}
// 查看新鲜事点赞接口
export function getLike (params) {
  const url = HOST + 'App.NewThings.GetLike'
  return post(url, params)
}
// 查看新鲜事点赞和评论
export function getLikeAndComment (params) {
  const url = HOST + 'App.NewThings.GetLikeAndComment'
  return post(url, params)
}
// 查看所有新鲜事
export function getNewThing (params) {
  const url = HOST + 'App.NewThings.GetNewThing'
  return post(url, params)
}

// 点赞
export function LikeThings (params) {
  const url = HOST + 'App.NewThings.LikeNewThing'
  return post(url, params)
}
// 取消点赞
export function removeLike (params) {
  const url = HOST + 'App.NewThings.UnlikeNewThing'
  return post(url, params)
}

// 获取公告栏数据
export function getNotice (params) {
  const url = HOST + 'App.Notice.GetNotice'
  return post(url, params)
}

// 修改密码
export function ChangePassword (params) {
  const url = HOST + 'App.Password.ChangePassword'
  return post(url, params)
}
// 找回密码
export function FindPassword (params) {
  const url = HOST + 'App.Password.FindPassword'
  return post(url, params)
}
// 获取密保问题
export function GetPassQuestion (params) {
  const url = HOST + 'App.Password.GetQuestion'
  return post(url, params)
}

// 获取赞赏记录
export function getPaylist (params) {
  const url = HOST + 'App.Pay.GetPayList'
  return post(url, params)
}

// get普通话成绩
export function getPuTongScore (params) {
  const url = HOST + 'App.Putonghua.GetPutonghuaScore'
  return post(url, params)
}

// 成绩查询
export function searchScore (params) {
  const url = HOST + 'App.Score.GetScore'
  return post(url, params)
}

// 搜索学生信息
export function SearchStudent (params) {
  const url = HOST + 'App.SearchStudent.SearchStudent'
  return post(url, params)
}

// 获取当前版本和时间
export function index () {
  const url = HOST + 'App.Site.Index'
  return post(url)
}

// 学生信息相关

// 获取学生成绩
export function getStudentScore (params) {
  const url = HOST + 'App.Student.GetScore'
  return post(url, params)
}
// 获取学生相关信息
export function getStudentInfo (params) {
  const url = HOST + 'App.Student.GetUserInfo'
  return post(url, params)
}
// 获取当前用户数量
export function getUserNums (params) {
  const url = HOST + 'App.Student.GetUserNumber'
  return post(url, params)
}

// 一键评教
export function Evaluate (params) {
  const url = HOST + 'App.Teaching.Evaluation'
  return post(url, params)
}

// 获取课表
export function getTimetable (params) {
  const url = HOST + 'App.Timetable.GetTimetable'
  return post(url, params)
}

// 上传图片
export function UploadImage (params) {
  const url = HOST + 'App.Upload.UploadImg'
  return post(url, params)
}
// 删除图片
export function DeleteImage (params) {
  const url = HOST + 'App.Upload.DeleteImage'
  return post(url, params)
}

export function CheckTextSec (params) {
  const url = HOST + 'App.Wx.MsgSecCheck'
  return post(url, params)
}
