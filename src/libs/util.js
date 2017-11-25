// import axios from 'axios';

let util = {

};

util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

//创建的ajax实例，做了基础的的配置
// const ajaxUrl = env === 'development' ?
//     'http://127.0.0.1:8888' :
//     env === 'production' ?
//     'https://www.url.com' :
//     'https://debug.url.com';
// util.ajax = axios.create({
//     baseURL: ajaxUrl,
//     timeout: 30000
// });


//获取cookie方法
/*
 * 参数 cookie的键值
 */

util.getCookie=(name)=>{
  var arr=document.cookie.split('; '); //多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
  for(var i=0;i<arr[i].length;i++) //历遍数组
  {
    var arr2=arr[i].split('='); //原来割好的数组是：user=simon，再用split('=')分割成：user simon 这样可以通过arr2[0] arr2[1]来分别获取user和simon
    if(arr2[0]==name) //如果数组的属性名等于传进来的name
    {
      return arr2[1]; //就返回属性名对应的值
    }
    return ''; //没找到就返回空
  }
};

/*
 * 设置cookie
 * 参数说明
 * c_name： cookie的键
 * value： cookie的值
 * expiredays：保存的天数
 */

util.setCookie=(c_name,value,expiredays)=>{
    var exdate = new Date();
    value=JSON.stringify(value);
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + encodeURI(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

/*
 * 删除cookie
 * 参数说明
 * c_name： cookie的键
 */

util.delCookie=(c_name)=>{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(c_name);
    if (cval != null)
        document.cookie = c_name + "=" + cval + ";expires=" + exp.toGMTString();
};


export default util;
