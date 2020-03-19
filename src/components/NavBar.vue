<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <router-link to="/" class="navbar-brand text-primary font-weight-bold">
        Yeneta
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" exact class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/books" class="nav-link">Books</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tutors" class="nav-link">Tutors</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/explore" class="nav-link">Eplore</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item ml-2">
            <router-link
              to="/login"
              class="btn btn-primary bg-accent border-0 nav-login-btn"
            >
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-login-btn {
  border-radius: 25px;
  width: 100px;
}

.navbar {
  height: 70px;
}

.router-link-exact-active {
  color: #00b6ff !important;
}
</style>
