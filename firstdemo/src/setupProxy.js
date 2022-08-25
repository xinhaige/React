//这是跨域的
const proxy=require("http-proxy-middleware")
module.exports=function(app){
  app.use(
    proxy('/server1',{//带有server1 的请求地址，本地没有的 发送到下面的5000地址去
        target:"http://localahost:5000",
        changeOrigin:true,//false 请求地址还是本地的3000，true则变成上面的5000
        pathRewrite:{"^/server1":""}//将地址中的  /server1 变成空字符
    })
  )
}