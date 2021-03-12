<template>
  <div id="app">
    <amplify-authenticator>
      <!-- The rest of your app code -->
      <Nav />
      <div class="d-flex justify-content-between">
        <SideMenu />
        <Dashboard class="col-md-9 ml-sm-auto col-lg-10 px-md-4" />
      </div>
    </amplify-authenticator>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import MyButton from "@/components/MyButton.vue";
import Nav from "@/components/Nav.vue";
import SideMenu from "@/components/SideMenu.vue";
import Dashboard from "@/components/Dashboard.vue";

@Component({
  components: {
    //MyButton,
    Nav,
    SideMenu,
    Dashboard,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  font-size: 0.875rem;
}
</style>
