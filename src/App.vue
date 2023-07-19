<template>
  <div id="app"> 
      <router-view></router-view> 
      <!-- <FooterView /> -->
      <!-- <div class="loader-div" v-if="!isLoading">
        <span class="loader">
          <span></span>
          <span></span>
        </span>
      </div> -->
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      isLoading : false,
    }
  },
  mounted() {
    document.onreadystatechange = () =>{
      console.log(document.readyState)
      if(document.readyState == 'complete'){
        this.isLoading = true;
      }
    }
  },
}
</script> -->
<!-- <script>
// import FooterView from "@/components/FooterView.vue";
export default ((await import('vue')).defineComponent({
  components: {
    FooterView
  },
  // global data
  // data() {
  //   return {
  //     checkFooter : true
  //   }
  // },
  // provide() {
  //   return {
  //     checkFooter: this.checkFooter
  //   };
  // },
  // mounted() {
  //   console.log(this.checkFooter)
  // }
}));
</script> -->