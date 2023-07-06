<template>
  <div id="app"> 
      <router-view></router-view> 
      <FooterView />
  </div>
</template>

<script>
import FooterView from "@/components/FooterView.vue";
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
</script>