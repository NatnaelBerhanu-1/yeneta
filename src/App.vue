<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view :key="$route.path" />
    <Footer></Footer>
  </div>
</template>
<script>
/* eslint-disable */
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
