export function browserRedirect() {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|android);?/i)) {
    // 判断useragent，当前设备为移动设备;
    // window.location.href = 'http://www.baidu.com';
    // console.log('welcome');
    return 'welcome';
  } else {
    return 'pc';
    // console.log('pc');
    // 判断useragent为桌面环境
    // window.location.href= "http://www.sina.com";
  }
}

// get url parameter
export function GetRequest() {
  var url = location.search;
  // 获取url中"?"符后的字串
  var theRequest = {};
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}
// launch client app
export function launchApp(val) {
  if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
    // 判断useragent，当前设备为ios设备
    var loadDateTime = new Date();
    // 设置时间阈值，在规定时间里面没有打开对应App的话，直接去App store进行下载。
    window.setTimeout(function() {
      var timeOutDateTime = new Date();
      if (timeOutDateTime - loadDateTime < 5000) {
        console.log(val);
        window.location = val;
      } else {
        window.close();
      }
    }, 25);
    // ios端URL Schema
  } else if (navigator.userAgent.match(/android/i)) {
    // 判断useragent，当前设备为andriod设备
    alert(1);
    // window.open('http://weixin.qq.com/r/RHU6NQjE1japhxlWnyBg', 'newwindow', '');
  } else {
    // 判断useragent为桌面环境
    // window.location= 'http://www.baidu.com';
    // alert("Are  You PC Browser ?!");
  }
}
