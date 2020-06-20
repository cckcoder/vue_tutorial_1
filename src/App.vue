<template>
  <div id="app">
    <Header />
    <Content />
    <Footer @onClock="onClock" title="PoweredBy CodeWiz" color="hotpink"/>
    <span>{{ time }}</span>
  </div>
</template>

<script>
import Header from "@/components/layout/Header"
import Content from "@/components/layout/Content"
import Footer from "@/components/layout/Footer"
import moment from 'moment'

export default {
  name: "app",
  components: {
    Header,
    Content,
    Footer
  },
  methods: {
    onClock(value) {
      this.time = moment(new Date(value)).format('DD/MM/YYYY hh:mm:ss')
    }
  },
  data() {
    return {
      time: ''
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
}
</style>
