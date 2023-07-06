<template>
  <div class="about">
    <MyNavbar />
    <h1>This is an about page</h1>
  </div>
</template>

<script>

import MyNavbar from "@/components/MyNavbar.vue";

export default {
  name: "AboutView",
  components : {
    MyNavbar
  }
}
</script>