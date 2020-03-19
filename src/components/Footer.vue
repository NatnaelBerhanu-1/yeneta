<template>
  <!-- eslint-disable -->
  <div class="text-center footer pt-4 pb-4 text-white">
    <ul class="nav m-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link text-white">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/books" class="nav-link text-white">Books</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/tutors" class="nav-link text-white">Tutors</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/explore" class="nav-link text-white">Explore</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link text-white">About</router-link>
      </li>
    </ul>
    <div class="mt-4">
      <router-link to="/contact" class="bg-accent text-white pl-4 pr-4 pt-2 pb-2 footer-contact-btn">contact</router-link>
    </div>
    <div class="mt-4">
      <p class="footer-content">powered by<br>GION INNOVATION AND TECHNOLOGIES</p>
      <p class="mb-0 footer-content">{{date}} <span>&copy;</span>copyright all rights reserved</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const d = new Date()
export default {
  name: "Footer",
  data: function() {
    return {
    date: d.getFullYear(),
    test: "test"
    }
   
  }
};
</script>

<style>
.footer-content {
  font-size: 13px;
}

.footer-contact-btn {
  border-radius: 30px;
}

.nav {
  width: fit-content;
}

.nav-link:hover {
  color:#ff7700!important;
}

.footer .nav-link.router-link-active{
  color: #ffffff!important;
}

.footer {
  background-color: #3E484C;
}

</style>