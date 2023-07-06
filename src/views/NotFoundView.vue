<template>
    <div class="item">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  </template>
  
  <script>
  export default {
    name:"NotFound",
    // inject: ['checkFooter'], //inject data from global data
  }
  </script>

<style>
  .item
  {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 80%;
    background-color: #ccc;
    border-radius: 3px;
    text-align: center;
    padding-top: 31vh;
  }
</style>