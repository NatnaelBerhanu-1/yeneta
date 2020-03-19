<template>
  <!-- eslint-disable -->
  <div class="bg-gray pt-4">
    <div class="container pb-4">
    <div class="row">
      <div class="col-md-3 text-left">
        <div class="filter bg-white shadow-sm p-3 sticky-top">
          <p class="font-weight-bold text-accent"> Categories </p>
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
        <dir class="row">
          <div class="sort col-md-3 offset-md-9">
            <div class="input-group">
              <select name="sort" id="sort-by" class="custom-select rounded-0 text-accent border-accent">
                <option value="">Sort by</option>
                <option value="newest" class="pt-1">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </dir>
        
        <div class="items">
          <CompanyItem></CompanyItem>
          <CompanyItem></CompanyItem>
          <CompanyItem></CompanyItem>
          <CompanyItem></CompanyItem>
        </div>
        <div class="text-center mt-3 mb-3 load-more-btn">
          <div>
            <img  width="20px" src="../assets/icons/loadmore-icon.svg" alt="" srcset="">
          </div>
          <span class="text-accent font-weight-bold  mt-3">load more </span>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
/* eslint-disable */
import CompanyItem from "../components/CompanyItem";
// import Footer from "../components/Footer";

export default {
  name: "Explore",
  components: {
    CompanyItem,
    // Footer
  }
};
</script>
<style scoped>
.load-more-btn:hover{
  cursor: pointer;
}

.filter {
  top: 20px;
}

.sort {
  width: 150px;
}

#sort-by:focus {
  box-shadow: none;
}

#sort-by{
  background-image: url('../assets/icons/select-arrow.svg');
  background-size: 15px;
  cursor: pointer;
}
</style>
