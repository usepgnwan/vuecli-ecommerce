<template>
    <div class="home">
        <MyNavbar />
        <div class="container">
            <HeroView />

            <div class="row mt-3">
                <div class="col">
                    <h2 class="xxx">Best <strong>Foods</strong></h2>
                </div>
                <div class="col">
                <div class="float-right">
                    <router-link to="/foods" class="btn btn-success">Lihat Semua <b-icon icon="eye" aria-hidden="true"></b-icon></router-link>
                    </div> 
                </div> 
            </div>

            <div class="row mt-3">
                <div class="col-md-4 col-sm-12 mt-2" v-for="product in products" :key="product.id">
                    <CardProduct :product="product"/>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import HeroView from "@/components/HeroView.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default ((await import('vue')).defineComponent({
    name: 'HomeView',
    components: {
        MyNavbar,
        HeroView,
        CardProduct,
    },
    data(){
        return {
            products: []
        }
    },
    methods: {
       setProduct(data){
            this.products = data;
            // console.log(this.product);
        }
    },
    mounted() {
        // let x = document.querySelector('.xxx').innerHTML;
        // alert(x)
        axios
        .get("http://localhost:3000/best-products")
        .then((response) => {
           this.setProduct(response.data) 
           console.log(typeof(response))
        })
        .catch((err) => {
            console.log(err)
        })

    }
}));
</script>