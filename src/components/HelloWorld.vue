<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="content">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    console.log(1112,process.env.NODE_ENV)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.hello {
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
}
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100px; 
  gap: 10px;
}
.content div {
  background: pink;
  text-align: center;
  line-height: 100px;
}
</style>
