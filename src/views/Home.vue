<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<router-link to="/home/Index">Index</router-link>
		 <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
