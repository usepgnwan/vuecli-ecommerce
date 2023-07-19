<template>
    <div class="about">
      <MyNavbar />
      <div class="container">
        <row class="justify-content-center mt-5">
            <div class="col text-center">
                <h2><strong>Sukses</strong></h2>
                <img :src="'../assets/images/menunggu.png'" alt="" width="300">
                <h4>Pesanan segera diproses <strong>selamat menunggu..</strong></h4>
            </div>
        </row>
      </div>
      <FooterView />
    </div>
  </template>
  
  <script>
  
  import MyNavbar from "@/components/MyNavbar.vue";
  import FooterView from "@/components/FooterView.vue";
  export default {
    name: "PesananSuksesView",
    components : {
      MyNavbar,
      FooterView
    }
  }
  </script>