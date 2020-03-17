<template>
  <!-- eslint-disable -->
  <div class="bg-gray">
    <div class="container">
    <h1>Explore</h1>
    <div class="row">
      <div class="col-md-3 text-left">
        <div class="filter bg-white shadow-sm p-3">
          <p class="font-weight-bold"> Categories </p>
          <div
           class="filter-item mb-2">
            <div class="pretty p-default">
              <input type="checkbox" />
              <div class="state p-primary">
                  <label>check</label>
              </div>
            </div>
          </div>
          <div
           class="filter-item mb-2">
            <div class="pretty p-default">
              <input type="checkbox" />
              <div class="state p-primary">
                  <label>check</label>
              </div>
            </div>
          </div>
          <div
           class="filter-item mb-2">
            <div class="pretty p-default">
              <input type="checkbox" />
              <div class="state p-primary">
                  <label>check</label>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div class="col-md-9 bg-white shadow-sm">
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
        <CompanyItem></CompanyItem>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
/* eslint-disable */
import CompanyItem from "../components/CompanyItem";
export default {
  name: "Explore",
  components: {
    CompanyItem
  }
};
</script>
<style scoped>
</style>
