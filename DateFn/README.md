# Format方法

时间的格式在页面上显示一般都需要转换成固定的各式例如1998/09／01，1998-09-01等
。这个方法就是把时间类型转换成固定的格式。

## 原理

根据匹配的内容替换内容

## 调用方法

```
var time1 = new Date().format("yyyy-MM-dd HH:mm:ss"); 
var time2 = new Date().format("yyyy-MM-dd");  
```