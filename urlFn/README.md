# addURLParam

我们经常需要在get请求的url后面加上请求的参数，但是请求的参数的key和value值要经过encodeURIComponent()进行编码，然后放到url的后面。并且key和value之间需要用=号，参数用&分割，参数和url用？号分割。下面的函数就是在url后面加上正确的param。

## 代码

```
function addURLParam(url,name,value){  
  url += (url.indexOf('?')==-1 ? '?' : '&');  
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value);  
  return url;  
} 
```

很简单，也没啥说的，满足上面的需求。重要的是编码正确。



# GetQueryString

我们经常获取在get请求的url的参数，这个和我们上面的addUrlParam函数是相反的用法。看到这个就感觉程序员是个多么累的职业。刚才还在url加参数，现在就要解析对应的参数value值。

## 代码

```
 function GetQueryString(name){
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  decodeURI(r[2]); return null;
  }

```

很简单，也没啥说的，满足上面的需求。重要的是编码的解析用到了decodeURI。和上面的addUrlParam函数用到的encodeURIComponent相反。