<template>
  <div class="home">
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"> </el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"> </el-table-column>
    </el-table>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
//table 合并行
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    var tableData= [
        {
          id: "国家1",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "国家1",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "国家2",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "国家2",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "国家2",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ]; 
      
      debugger
      var re = [];
      tableData.forEach((item) => {
        if (re.length > 0) {
          if (re.filter((r) => r.id == item.id && r.name == item.name).length == 0) {
            var theitem = tableData.filter(
              (r) => r.id == item.id && r.name == item.name
            );
            re.push({
              id: item.id,
              name: item.name,
              data: theitem,
            });
          }
        } else {
          var theitem = tableData.filter(
            (r) => r.id == item.id && r.name == item.name
          );
          re.push({
            id: item.id,
            name: item.name,
            data: theitem,
          });
        }
      });

      var iarr=[];
      var result=[];
      re.forEach(item=>{
        var num=0;
       item.data.forEach(children=>{
         result.push(children)
        if(num==0){
         iarr.push(item.data.length)
        }else{
           iarr.push(0)
        }
        num++
       })
      })

    return {
     tableData:result,
      iarr:iarr
    };
  },
  computed: {
   
  },
  created() {},
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        if (this.iarr[rowIndex]!==0) {
          return {
            rowspan: this.iarr[rowIndex],
            colspan: 1,
          };
        }else{
           return {
            rowspan: 0,
            colspan: 1,
          };
        }
      }
    },
  },
};
</script>
