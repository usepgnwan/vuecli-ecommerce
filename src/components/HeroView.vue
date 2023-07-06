<template>
  <div>
    <div class="d-none d-md-block">
      <div class="row">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Menu</strong> , <br> In your Gadget
                <p>Ayo Segera Pilih Sekarang</p>
                <router-link to="/foods" class="btn btn-success">Yuk Beli <b-icon icon="arrow-right" aria-hidden="true"></b-icon>  </router-link>
              </h2>
            </div>
          </div>
        </div>
        <div class="col">
          <img :src="'../assets/images/ilustrasi.png'" alt="" width="100%">
        </div>
      </div>  
    </div> 
    <!-- MOBILE-->
    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 mb-4">
          <img :src="'../assets/images/ilustrasi.png'" alt="" width="100%">
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Delicious Menu</strong> , <br> In your Gadget 
              </h2>
              <p>Ayo Segera Pilih Sekarang</p>
              <router-link to="/" class="btn btn-success">Yuk Beli <b-icon icon="arrow-right" aria-hidden="true"></b-icon>  </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--xx-->
  </div>
</template>

<script>

export default {
name : "HeroView"
}
</script>

<style>

</style>