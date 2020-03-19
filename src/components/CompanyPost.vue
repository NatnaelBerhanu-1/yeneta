<template>
  <!-- eslint-disable -->
  <div class="pt-4">
    <div class="row">
      <div class="col-md-auto offset-md-1">
        <Post></Post>
        <Post></Post>
      </div>
      <div class="col">
        <div class="row">
          <div class="col offset-md-2 pl-2">
            <p class="font-weight-bold text-left text-accent">
              Recent Posts
            </p>
          </div>
        </div>
        <RecentPost></RecentPost>
        <RecentPost></RecentPost>
        <RecentPost></RecentPost>
      </div>
    </div>
    
  </div>
</template>

<script>
/* eslint-disable */
import Post from "../components/Post";
import RecentPost from "../components/RecentPost";
export default {
  name: "CompanyPost",
  components: {
    Post,
    RecentPost
  }
};
</script>

<style>
</style>