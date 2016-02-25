//修改插值表达式
avalon.config({
    interpolate: ["[%","%]"]
});

// $.getJSON("home/index/more",function(data){
// 		let xx = JSON.stringify(data);
//     alert(xx);
// });

// $.getJSON("home/index/pp",function(data){
// 		let xx = JSON.stringify(data);
//     alert(xx);
// });

// $.getJSON("home/index/add",function(data){
// 		let xx = JSON.stringify(data);
//     alert(xx);
// });

// $.ajax("home/index/add", { data:'$.toJSON(data)'},function(data){
//   let xx = JSON.stringify(data);
//   alert(xx);
// });

$.ajax({
    url: "home/index/add",    //请求的url地址
    dataType: "json",   //返回格式为json
    async: true, //请求是否异步，默认为异步，这也是ajax重要特性
    data: { "id": 88 },    //参数值
    type: "POST",   //请求方式
    beforeSend: function() {
        //请求前的处理
    },
    success: function(req) {
        alert("OK");
        //请求成功时处理
    },
    complete: function() {
        //请求完成的处理
    },
    error: function() {
        //请求出错处理
    }
});

//avalon定义变量
var vm = avalon.define({
  $id:"home",
  name:"1111",
});
