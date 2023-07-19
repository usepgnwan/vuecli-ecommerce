<template>
    <div class="about">
        <MyNavbar />
        <div class="container mt-3"> 
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/foods" class="text-dark">Home</router-link></li>
                <li class="breadcrumb-item"><router-link to="/foods" class="text-dark"> Foods </router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Food Order</li>
              </ol>
            </nav>
            <div class="text-center not-found" v-if="!checkProduct"></div> 
            <div v-if="checkProduct"> 
              <div class="row">
                <div class="col-md-6">
                  <img class="card-img-top" :src="'../assets/images/' + product.gambar" alt="Card image cap">
                </div>
                <div class="col-md-6">
                  <h2><strong>  {{ product.nama }} </strong></h2>
                  <hr>
                  <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
                  <form @submit.prevent>
                    <div class="form-goup">
                      <label for="jumlah_pesanan">Jumlah Pesanan</label>
                      <input type="number" class="form-control" v-model="pesanan.jumlah_pesanan" value="0"/>
                    </div>
                    <div class="form-goup">
                      <label for="keterangan">Keterangan</label>
                      <textarea class="form-control" placeholder="keterangannya apa aja deh : ....." v-model="pesanan.keterangan"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success mt-4" @click="pemesanan"><b-icon icon="cart" aria-hidden="true"></b-icon> &nbsp; Pesan</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        <FooterView />
    </div>
  </template>
  
<script>
 
import MyNavbar from "@/components/MyNavbar.vue";
import FooterView from "@/components/FooterView.vue";
 
export default  {
    name: "FoodsDetailView", 
    components : {
      MyNavbar,
      FooterView
    },
    data(){
        return {
          product: [],
          search : '',
          checkProduct : false,
          pesanan : {}
        }
    },
    methods: {
       setProduct(data){
            this.checkProduct = true; 
            this.product = data;
        },
        pemesanan(){
          if(this.pesanan.jumlah_pesanan && this.pesanan.jumlah_pesanan > 0){
            this.pesanan.products = this.product;
            this.$axios
            .post('http://localhost:3000/keranjangs/', this.pesanan)
            .then(() =>{
              this.$router.push({ path : "/keranjang"});
              this.$toast.open({
                message: "Sukses simpan data",
                type: "success",
                duration: 1000 * 10,
                dismissible: true
              })
            }).catch((err) => {
              console.log(err.message)
            })
          }else{
            this.$toast.open({
                message: "Gagal periksa jumlah pesanan",
                type: "error",
                duration: 1000 * 10,
                dismissible: true
              })
          }
         
        }
    },
    created() { 
        this.$axios
        .get("http://localhost:3000/products/" + this.$route.params.id)
        .then((response) => {
           this.setProduct(response.data) 
        //    console.log(typeof(response))
        })
        .catch((err) => {
            this.checkProduct = false;
            this.$jQuery('.not-found').html('Product Not Found !!');
            console.log(err.message)
        })

    }
}
</script>
  
  <style>
  
  </style>   