import axios from 'axios';


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
    var arr, reg = new RegExp(name);
    if (arr = document.cookie(name))
        return (arr);
    else
        return null;
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
