<template>
  <!-- eslint-disable -->
  <div>
    <div class="container text-left">
      <h4 class="pt-4">FAQ's</h4>
      <div class="row mt-4">
        <div class="col-md-6">
          <button class="faq-question text-accent font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <span></span> Sample Question
          </button>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <button class="faq-question text-accent font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
            Sample Question
          </button>
          <div class="collapse" id="collapseExample2">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CompanyFaq"
};
</script>

<style>
.faq-question {
  background-color: transparent;
  border: none;
}

.faq-question:hover {
  background-color: transparent!important;
  opacity: 0.8;
}

.faq-question:focus, .faq-question:active {
  box-shadow: none!important;
  border:none!important;
  border-style: hidden;
  outline: none;
}
</style>