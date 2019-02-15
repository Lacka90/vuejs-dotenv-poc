<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ config }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { convict } from './config/convict';

@Component({})
export default class App extends Vue {
  config = convict;
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
