function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }, 100);
}

function debounce(method, context) {
  if(!method.tId){
    method.tId = setTimeout(function () {
      method.call(context);
      clearTimeout(method.tId);
    }, 1000);
  }
}