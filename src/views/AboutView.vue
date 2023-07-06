<template>
  <div class="about">
    <MyNavbar />
    <h1>This is an about page</h1>
    <FooterView />
  </div>
</template>

<script>

import MyNavbar from "@/components/MyNavbar.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  name: "AboutView",
  components : {
    MyNavbar,
    FooterView
  }
}
</script>