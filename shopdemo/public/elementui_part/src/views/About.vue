<template>
  <div class="about">
    <div id="container" class="flex_row">
      <div id="item1">1</div>
      <div id="item2">2</div>
      <div id="item3">3</div>
      <div id="item4">4</div>
      <div id="item5">5</div>
      <div id="item6">6</div>
    </div>
  </div>
</template>
<style scoped>
.flex_row {
 display: flex !important;
 flex-direction: row !important;  
 /* flex-wrap: wrap; */
/* flex: 1; */
  justify-content:center;
  align-items: center;
}

/* flex 纵向排列 */
.flex_column {
 display: flex !important;
 flex-direction: column !important;
}

/* 均为分布 */
.flex_between {
   display: flex !important;
 justify-content: space-between !important;
}
#container>div{
  margin:0 10px;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  width: 400px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
  width: 400px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
  width: 400px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
  width: 400px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
  width: 400px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  width: 400px;
}

</style>
