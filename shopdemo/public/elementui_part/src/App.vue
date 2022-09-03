<template>
  <div id="app">
    <form id="sendForm">
      <span>输入内容按回车发送消息</span> <br />
      <input id="sendText" placeholder="Text to send" />
    </form>
    <pre id="incomming"></pre>

    <div id="nav">
      <el-button @click="show">{{ name }}</el-button>
      <el-button @click="send" type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <div :v-show="divshow" :ref="div">主题内容</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "anniu",
      btnStr: '<el-button type="danger">危险按钮</el-button>',
      divshow: false,
      ws:null,
    };
  },
  components: {},
  mounted() {
    var inc = document.getElementById("incomming");
    var form = document.getElementById("sendForm");
    var input = document.getElementById("sendText");

    var wsImpl = window.WebSocket || window.MozWebSocket;

    // 创建一个新的websocket并连接
   
    //let ws = new wsImpl("ws://192.168.3.55:50000/");
    //let ws = new wsImpl("wss://localhost:44368/api/WebSockets/GetWS");
    debugger;
    let str=new Date().toString();
    //let ws = new wsImpl("ws://localhost:54873/api/v1/WebSockets/GetSocket?send="+str);
    let ws = new wsImpl("wss://test.zzcint.com/api/v1/WebSockets/GetSocket");
    //let ws = new wsImpl("ws://118.31.53.211:5000/API/WebSockets/GetWS");
    this.ws=ws
    inc.innerHTML += "连接服务器..<br/>";

    // 当数据来自服务器时，将调用此方法
    ws.onmessage = function (evt) {
      debugger
      inc.innerHTML += "[来自服务器的消息] " + evt.data + "<br/>";
      console.log("[来自服务器的消息] " + evt.data);
    };

    // 当建立连接时，将调用此方法
    ws.onopen = function () {
      inc.innerHTML += "已建立连接.. <br/>";
      ws.send("已建立连接");
    };

    // 当连接关闭时，将调用此方法
    ws.onclose = function () {
      inc.innerHTML += "连接已关闭.. <br/>";
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = input.value;
      ws.send(val);
      input.value = "";
    });
  },
  methods: {
    show() {
      this.divshow = true;
      this.$message("这是一条消息提示");
    },
    send(){
      debugger
       var input = document.getElementById("sendText");
      this.ws.send(input.value)
    }
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
