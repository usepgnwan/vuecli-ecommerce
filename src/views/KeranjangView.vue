<template>
  <div class="keranjang">
    <MyNavbar :updateKeranjang="keranjangs" />
    <div class="container mt-3"> 
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/foods" class="text-dark">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/foods" class="text-dark"> Foods </router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Keranjang</li>
          </ol>
        </nav>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2> 
        <div class="table table-responsive">
          <table class="table">
            <thead>
              <tr>
                <td scope="col">#</td>
                <td scope="col">Foto</td>
                <td scope="col">Makanan</td>
                <td scope="col">Keterangan</td>
                <td scope="col">Jumlah</td>
                <td scope="col">Harga</td>
                <td scope="col">Total Harga</td>
                <td scope="col">Hapus</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id" >
                <th>{{ index+1 }}</th>
                <td scope="col"><img style="width:200px;" class="card-img-top" :src="'../assets/images/' +  keranjang.products.gambar" alt="Card image cap" width="30px"></td>
                <td scope="col"> {{ keranjang.products.nama }}</td>
                <td scope="col"> {{ keranjang.keterangan ?? "-" }}</td>
                <td scope="col"> {{ keranjang.jumlah_pesanan }}</td>
                <td scope="col">Rp. {{ keranjang.products.harga }}</td>
                <td scope="col">Rp. {{ keranjang.products.harga *  keranjang.jumlah_pesanan }}</td>
                <td align="center" class="text-danger">
                  <b-icon icon="trash" aria-hidden="true" @click="deleteKeranjang(keranjang.id)"></b-icon>
                </td>
              </tr>
              <tr>
                <td colspan="6" align="right">
                  <strong>Total Harga : </strong>
                </td>
                <td colspan="2" align="left"><strong>Rp. {{ totalHarga }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    <div class="row justify-content-end">
      <div class="col-md-6"> 
        <form @submit.prevent>
          <div class="form-goup">
            <label for="jumlah_pesanan">Nama Pemesanan</label>
            <input type="text" class="form-control" placeholder="Nama Pemesanan"  v-model="pesan.nama"/>
          </div>
          <div class="form-goup">
            <label for="keterangan">No Meja</label>
            <input type="text" class="form-control"  placeholder="no meja" v-model="pesan.noMeja" />
          </div>
          <button type="submit" class="btn btn-success mt-4 float-right" @click="checkOut"><b-icon icon="cart" aria-hidden="true" ></b-icon> &nbsp; Pesan</button>
        </form>
      </div>
    </div>
    </div>
    <footer-view />
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar.vue";
import FooterView from "@/components/FooterView.vue"; 
export default {
    name: "KeranjangView", 
    components: { MyNavbar,FooterView },
    data() {
      return {
        keranjangs : [],
        pesan : {} 
      }
    },
    methods:{
      setPesanan(){
        this.$axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => { 
          this.keranjangs = response.data; 
        })
        .catch((err) => {
            console.log(err)
        }); 
      }, 
      deleteKeranjang(id, check = null){  
        console.log(id)
        this.$axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          if(check == null){ 
            this.$toast.open({
                  message: "Berhasil hapus pesanan",
                  type: "error",
                  duration: 1000 * 10,
                  dismissible: true
                })
            this.setPesanan();
          }
        })
        .catch((err) => {
            console.log(err)
        });
      },
      checkOut(){
        if(this.pesan.nama !== "" && this.pesan.noMeja !== ""){
          this.pesan.keranjangs = this.keranjangs;
          if(this.keranjangs.length){
            this.$axios
              .post('http://localhost:3000/pesanans/', this.pesan)
              .then(() =>{
                this.$router.push({ path : "/pesanan/sukses"});
                this.keranjangs.map(function(item){
                  console.log(item.id)
                  this.deleteKeranjang(item.id,"sukses");
                }, this)
                this.$toast.open({
                  message: "Sukses memesan",
                  type: "success",
                  duration: 1000 * 10,
                  dismissible: true
                })
              }).catch((err) => {
                console.log(err.message)
              })
          }else{
            this.$toast.open({
            message: "Keranjang Masih kosong",
            type: "error",
            duration: 1000 * 10,
            dismissible: true
          })
          }
          
        }else{
          this.$toast.open({
            message: "gagal memesan",
            type: "error",
            duration: 1000 * 10,
            dismissible: true
          })
        }
      }
    },
    mounted() {
      document.title = 'Keranjang';
      this.setPesanan();
    },
    computed: {
      totalHarga(){
        return this.keranjangs.reduce(function(items,data){
          return items + (data.jumlah_pesanan * data.products.harga);
        },0);
      }
    }
}
</script>

<style>

</style>