/**
 * 函数作用：在url后面添加参数
 * 函数参数说明：
 * @param:url为需要添加参数的url
 * @param:name为需要url的key
 * @param:value为需要url的value
 */
function addURLParam(url, name, value) {
  url += (url.indexOf('?') == -1 ? '?' : '&');
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
  return url;
}


/**
 * 函数作用：获取地址栏后面的参数
 */
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]); return null;
}