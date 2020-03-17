<template>
  <!-- eslint-disable -->
  <div class="border-bottom container-fluid">
    <div class="row p-3">
      <div class="col-md-auto">
        <img src="../assets/coca-img.png" alt="coca img" width="200px" srcset="" />
      </div>
      <div class="col text-left">
        <p class="title m-0 mb-1">Title</p>
        <div class="row">
          <div class="col-md-auto pr-0 mr-1">
            <img src="../assets/icons/star2.svg" alt="rating" width="20" srcset="">
          </div>
          <div class="col pl-0">
            <p class="rating m-0 mb-1 mt-1 text-left"><span class="text-accent">4.5</span>(10)</p>
          </div>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat rerum quidem ipsam, temporibus earum quo obcaecati exercitationem cum ab consectetur vel quia tempore nostrum dignissimos praesentium ea maxime dolor hic?</p>
        </div>
        <div class="row">
          <div class="col-md-auto pr-1">
            <a href="http://www.facebook.com" target="_blanck">
              <img src="../assets/icons/facebook-icon.svg" width="30" alt="facebook" srcset="">
            </a>
          </div>
          <div class="col-md-auto p-0 pr-1">
            <a href="http://mail.google.com" target="_blanck">
              <img src="../assets/icons/gmail-icon.svg" width="30" alt="facebook" srcset="">
            </a>
          </div>
          <div class="col-md-auto p-0 pr-1">
            <a href="http://www.twitter.com" target="_blanck">
              <img src="../assets/icons/twitter-icon.svg" width="30" alt="facebook" srcset="">
            </a>
          </div>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyItem"
};
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
}

.description {
  font-size: 14px;
}

.rating {
  font-size: 14px;
}
</style>
