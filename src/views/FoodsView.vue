<template>
    <div>  
        <MyNavbar />
        <div class="container">
            <div class="row mt-4">
                <div class="col">
                    <h2>Daftar <strong>Makanan</strong></h2>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col">
                    <div class="input-group mb-3"> 
                        <input v-model="search" @keyup="searchFood" type="text" class="form-control" placeholder="Cari makanan kesukaan anda" aria-label="Username" aria-describedby="basic-addon1">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><b-icon icon="search" aria-hidden="true"></b-icon></span>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-4 col-sm-12 mt-2" v-for="product in products" :key="product.id">
                    <CardProduct :product="product"/>
                </div>
                <div class="col md-12 text-center" v-if="checkProduct">
                    <p>Maaf Menunya gada :((</p>
                </div>
            </div>
        </div>
        <FooterView />
    </div>
</template>

<script>
import MyNavbar from '@/components/MyNavbar.vue';
import FooterView from "@/components/FooterView.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
// Start NProgress before each request
axios.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// Finish NProgress after each response
axios.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});
export default {
    name: "FoodsView",
    components : {
        MyNavbar,
        CardProduct,
        FooterView
    },
    data(){
        return {
            products: [],
            search : '',
            checkProduct : false
        }
    },
    methods: {
       setProduct(data){
            this.products = data;
            if(data.length > 0){
                this.checkProduct = false;
            }else{
                this.checkProduct = true;
            }
        },
        searchFood () {
            axios
            .get("http://localhost:3000/products?q=" + this.search)
            .then((response) => {
                this.setProduct(response.data)  
            })
            .catch((err) => {
                console.log('error')
                console.log(err)
            })
        }
    },
    mounted() {
        // let x = document.querySelector('.xxx').innerHTML;
        // alert(x)
        axios
        .get("http://localhost:3000/products")
        .then((response) => {
           this.setProduct(response.data) 
        //    console.log(typeof(response))
        })
        .catch((err) => {
            console.log('error')
            console.log(err)
        })

    }
}
</script>

<style>

</style>