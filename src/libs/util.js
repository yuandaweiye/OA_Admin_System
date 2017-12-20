//const Cookies=require('js-cookie');
const Base64 = require('js-base64').Base64;
let util = new Object();
util.title = function(title) {
  title = title ? title + ' - Home' : 'iView project';
  window.document.title = title;
};

//获取cookie方法
/*
 * 参数 cookie的键值
 */

util.getCookie= function (name){
  var cookDate=$.cookie(name);
  if(!!cookDate && cookDate!=null){
    return JSON.parse(Base64.decode(Base64.decode(cookDate)));
  }else{
    return false;
  }
};

/*
 * 设置cookie
 * 参数说明
 * c_name： cookie的键
 * value： cookie的值
 * expiredays：保存的天数
 */

util.setCookie= function (c_name,value,expiredays){
  var users=new Object();
  users.username=c_name;
  users.password=value;
  $.cookie("oa_userInfo",Base64.encode(Base64.encode(JSON.stringify(users))),{expires:expiredays,path:'/'});
  if(!!$.cookie("oa_userInfo")){
    return true;
  }else{
    return false;
  }
};

/*
 * 删除cookie
 * 参数说明
 * c_name： cookie的键
 */

util.delCookie= function (name){
  $.cookie(name,"",{ expires: -1 ,path: '/' });
  if(!!!$.cookie(name)){
    return true
  }else{
    return false
  }
};


export default util;
