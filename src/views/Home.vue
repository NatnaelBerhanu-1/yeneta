<template>
  <!-- eslint-disable -->
  <div class="home">
    <div class="" id="home-banner">
      <div class="container text-left">
        <p class="text-white home-banner-header mb-1">
          Lorem ipsum dolor
          sit amet
        </p>
        <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <button class="btn text-white bg-primary home-banner-action-btn">
          contact us
        </button>
      </div>
      <div class="container-fluid" id="home-banner-floating-container">
        <div class="container ml-auto mr-auto" >
          <div class="row bg-white shadow pt-5 pb-5">
            <div class="col-md-4 text-center">
              <div class="display-flex home-banner-floating-item text-center border-right">
                <img src="../assets/imgs/sample-company-img.jpg" class="rounded-circle" width="80px" height="80px" alt="" srcset="">
                <p class="text-primary font-weight-bold p-2 mb-0">Books</p>
                <p class="home-banner-floating-item-desc ml-auto mr-auto">Lorem ipsum dolor sit amet,
                  consectetur adipiscing
                  elit, sed do eiusmod
                  tempor
                </p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="display-flex home-banner-floating-item text-center border-right">
                <img src="../assets/imgs/sample-company-img.jpg" class="rounded-circle" width="80px" height="80px" alt="" srcset="">
                <p class="text-primary font-weight-bold p-2 mb-0">Tutors</p>
                <p class="home-banner-floating-item-desc ml-auto mr-auto">Lorem ipsum dolor sit amet,
                  consectetur adipiscing
                  elit, sed do eiusmod
                  tempor
                </p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="display-flex home-banner-floating-item text-center">
                <img src="../assets/imgs/sample-company-img.jpg" class="rounded-circle" width="80px" height="80px" alt="" srcset="">
                <p class="text-primary font-weight-bold p-2 mb-0">Explore</p>
                <p class="home-banner-floating-item-desc ml-auto mr-auto">Lorem ipsum dolor sit amet,
                  consectetur adipiscing
                  elit, sed do eiusmod
                  tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="info-section">
      <div class="top-section text-left pb-5">
        <div class="row">
          <div class="col-md-auto"><p class="text-normal font-weight-bold">Top Books</p></div>
          <div class="col text-right pb-3">
            <router-link to="/tutors" class="text-white btn btn-primary bg-accent border-0 rounded-0"> see more >></router-link>
          </div>
        </div>
        <div class="top-items">
          <div class="row">
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
          </div>
        </div>
        
      </div>
      <div class="top-section text-left pb-5">
        <div class="row">
          <div class="col-md-auto"><p class="text-normal font-weight-bold">Top Tutors</p></div>
          <div class="col text-right pb-3">
            <router-link to="/tutors" class="text-white btn btn-primary bg-accent border-0 rounded-0"> see more >></router-link>
          </div>
        </div>
        <div class="top-items">
          <div class="row">
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
            <div class="col-sm-3">
              <img src="../assets/imgs/sample-book.jpg" alt="" width="220" height="300" class="border rounded" srcset="">
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div id="partners-section container-fluid p-0" class="bg-gray">
      <div class="container">
        <h2 class="text-normal mb-0">Our Partners</h2>
        
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  watch: {
    $route(){}
  }
};
</script>
<style scoped>
#home-banner {
  margin-top: -70px;
  min-height: 100vh;
  background-image: url('../assets/imgs/home-banner-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}



.home-banner-header {
  padding-top: 200px;
  font-size: 50px;
  width: 450px;
  line-height: 55px;
}

.home-banner-action-btn {
  padding: 10px 20px;
  border-radius: 50px;
}

.home-banner-floating-item-desc {
  width: 220px;
  font-size: 14px;
}

#home-banner-floating-container {
  position: absolute;
  bottom: -148.5px;
}

#info-section {
  padding-top: 250px;
  padding-bottom: 100px;
}

.partners{
  height: 200px;
}

</style>