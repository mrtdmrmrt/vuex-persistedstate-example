<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.a.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('a/increment');
    },
    decrement() {
      this.$store.commit('a/decrement');
    }
  },
  created(){
    console.log('state=>',this.$store.state.a.count)
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
