<template>
  <!-- eslint-disable -->
  <div class="container-fluid">
    <div class="row pt-3">
      <div class="col-md-auto">
        <img src="../assets/imgs/sample-company-img.jpg" alt="" width="400"/>
      </div>
      <div class="col">
        <div class="company-about text-left">
          <p class="text-primary font-weight-bold">
            About
          </p>
          <p class="font-weight-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ipsa voluptates deserunt eligendi pariatur debitis est ab rerum sed quo atque maxime quidem nisi, vero eaque perferendis placeat nulla sequi.
          </p>
          <div>
            <CompanyContact></CompanyContact>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 text-left">
      <p class="text-primary font-weight-bold">
        Mission
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quis voluptatem dolorem commodi nobis unde, in officiis aut assumenda omnis ullam possimus necessitatibus accusantium, facilis iusto autem! Labore, id?
        Quos consequuntur, nemo, iure nulla nobis repellendus nesciunt numquam illo dolorum odit, praesentium dignissimos eligendi dolor fugit! Repudiandae maiores eius autem expedita quisquam iste dolor iure, aspernatur nemo minus nisi.
        Odit suscipit quas dolorem vitae, aut velit porro, dolore, in impedit aliquam aspernatur cupiditate culpa distinctio quibusdam ratione optio consequatur dolorum unde eos dicta. Molestias pariatur dolorem sed. Quia, repudiandae!
        Nihil ipsam fugit quo in, rerum molestiae, necessitatibus, aliquid sunt at debitis maxime! Ipsa tempora delectus iste, atque quos, adipisci tempore cum dolorum sint asperiores impedit suscipit minus eum omnis.
      </p>
    </div>
    <div class="pt-3 text-left">
      <p class="text-primary font-weight-bold">
        Service
      </p>
      <p class="mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quis voluptatem dolorem commodi nobis unde, in officiis aut assumenda omnis ullam possimus necessitatibus accusantium, facilis iusto autem! Labore, id?
        Quos consequuntur, nemo, iure nulla nobis repellendus nesciunt numquam illo dolorum odit, praesentium dignissimos eligendi dolor fugit! Repudiandae maiores eius autem expedita quisquam iste dolor iure, aspernatur nemo minus nisi.
        Odit suscipit quas dolorem vitae, aut velit porro, dolore, in impedit aliquam aspernatur cupiditate culpa distinctio quibusdam ratione optio consequatur dolorum unde eos dicta. Molestias pariatur dolorem sed. Quia, repudiandae!
        Nihil ipsam fugit quo in, rerum molestiae, necessitatibus, aliquid sunt at debitis maxime! Ipsa tempora delectus iste, atque quos, adipisci tempore cum dolorum sint asperiores impedit suscipit minus eum omnis.
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import CompanyContact from "../components/CompanyContact";
export default {
  name: "CompanyHome",
  components: {
    CompanyContact
  }
};
</script>

<style>
</style>