/**
 * Created by Mine-wu on 2017/11/3.
 */
/* 配置API接口地址 */
var root = 'http://oa.xgyuanda.com/api.php';
/* 引用axios */
var axios = require('axios');
/* 引用qs*/
var qs = require('qs');
/* 自定义判断元素类型JS */
function toTytpe (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-z]+)/)[1].toLowerCase()
}

/* 参数过滤函数 */
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

/***
 * api接口处理函数
 * */

function apiAxios (method, url, params, success, error) {
  axios({
    method: method,
    url:url,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    timeout: 10000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: false
  })
    .then(function (res) {
      if (res.status === 200) {
        if (success) {
          success(res.data)
        }
      } else {
        if (error) {
          error(res.data)
        }
      }
    })
    .catch(function (err) {
      if (err) {
        error(err)
      }
    })
}

/* 返回在vue模板中调用接口 */
export default {
  get: function (url, params, success, error) {
    return apiAxios('GET', url, params, success, error)
  },
  post: function (url, params, success, error) {
    return apiAxios('POST', url, params, success, error)
  },
  put: function (url, params, success, error) {
    return apiAxios('PUT', url, params, success, error)
  },
  delete: function (url, params, success, error) {
    return apiAxios('DELETE', url, params, success, error)
  }
}
