<template>
  <!-- eslint-disable -->
  <div class="bg-gray pb-4">
    <div class="text-center pt-3 pb-3 text-white company-header align-middle d-flex justify-content-center">
        <h2 class="m-0 align-self-center">CocaCola company</h2>
    </div>
    <div class="bg-primary shadow-sm company-nav sticky-top p-2">
        <ul class="nav m-auto">
          <li class="nav-item">
            <router-link to="home" class="nav-link text-white">Info</router-link>
          </li>
          <li class="nav-item">
            <router-link to="posts" class="nav-link text-white">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="faq" class="nav-link text-white">FAQ</router-link>
          </li>
          <li class="nav-item">
            <router-link to="other" class="nav-link text-white">Others</router-link>
          </li>
        </ul>
      </div>
    <div class="container bg-white mt-4 company-info-content pb-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Company",
  data: function() {
    return {
      name: this.$route.params.id
    }
  }
};
</script>

<style>
.company-header {
  height: 150px;
  background-image: url('../assets/imgs/company-header-bg.jpg');
  background-size: cover;
}

.router-link-active {
  color: #00B6FF!important;
}

.company-nav ul li .router-link-exact-active{
  /* border: 1px solid red; */
  color: #222222!important;
}
</style>