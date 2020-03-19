<template>
  <!-- eslint-disable -->
  <div class="border-bottom container-fluid company-item">
    <div class="row p-3">
      <div class="col-md-auto">
        <img src="../assets/coca-img.png" alt="coca img" width="200px" srcset="" />
      </div>
      <div class="col text-left">
        <p class="title m-0 mb-1"><router-link to="/explore/2/home"  class="text-normal">Title</router-link> </p>
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
/* eslint-disable */
.title {
  font-size: 16px;
  font-weight: bold;
}

.title > a:hover {
  opacity: 80%;
}

.description {
  font-size: 14px;
}

.rating {
  font-size: 14px;
}

.company-item:hover {
  cursor: pointer;
  background-color: #ecf6fa50;
}
</style>
