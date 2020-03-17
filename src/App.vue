<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{ name }}</p>
    <button @click="update">更新数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="show" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: 'welcome to vue',
      show: true
    }
  },
  // 生命周期函数
  beforeCreate() {
    console.log('beforeCreate')
    console.log(this.$el)
    console.log(this.$data)
  },
  created() {
    console.log('create')
    console.log(this.$el)
    console.log(this.$data)
  },
  beforeMount() {
    console.log('beforeMount')
    console.log(this.$el)
    console.log(this.$data)
  },
  mounted() {
    console.log('mounted')
    console.log(this.$el)
    console.log(this.$data)
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
  methods: {
    update() {
      this.name = 'jack'
      this.show = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
