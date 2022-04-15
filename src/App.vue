<template>
  <div id="app">
    <!--Top nav-->
    <div class="appBody">
      <router-view @item-to-parent="addtoBasket" :items="items"/>
    </div>
  </div>
</template>

<script>
import SignInPage from '@/components/SignInPage.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
    SignInPage
  },
  data () {
    return {
      logedIn: true,
      items: [],
      basketItemsNumbers: 0
    }
  },
  methods: {
    addtoBasket (addedItem) {
      this.items = [...this.items, addedItem]
      this.basketItemsNumbers++
    }
  }
}
</script>

<style>
@import url('@/assets/fontawesome/css/all.min.css');

:root {
    --card-background: #ffff;
    --main-background: #efefef;
}

* {
  margin: auto;
  padding: 0;
}

body, html {
  background: #efefef;
  scroll-behavior: smooth;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1440px;
  height: auto
}

.nav {
  display: grid;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background: rgb(4, 140, 194);
  color: white;
  font-size: 22px;
  grid-template-columns: 1fr 2.4fr 1fr;
  max-width: 1440px;
  min-width: auto;
  box-shadow: 0 6px 2px -2px rgba(0,0,0,.2);
  position: sticky;
  top: 0;
  width: 1440px;
  padding: 5px 0px;
  margin-bottom: 1em;
}

.nav a {
  font-weight: lighter;
  color: white;
  text-decoration: none;
  font-size: 22px;
  text-align: center;
  min-height: auto;
  min-width: auto;
  border-radius: 28.5px;
  min-width: 57px;
  min-height: 57px;
  max-width: 60px;
  max-height: 60px;
  box-shadow: 0.9px 3px 4px #111;
}

a:hover {
  background: #fff;
  color: #111;
}

.nav a.router-link-exact-active {
  color: skyblue;
  background: #111;
  box-shadow: none;
}

.home {
  background-color: white;
  width: 100%;
  margin: 5px;
}

.logoImg, p {
  margin: 10px
}

.links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: start;
  gap: 8px
}

.links > a > p {
  margin: 8px 0px;
  padding: 8px
}

.links > a.link {
  max-width: 120px;
  height: auto;
  margin: 0;
}

.links > p:hover {
  background: #111;
}

.contact {
  text-align: center;
  margin: 8px
}

.contactInfo {
  font-size: 26px;
  background: none;
  outline: none;
  border: none;
  margin: 7px 3px;
  cursor: pointer;
}

.btn-cont {
  text-align: center;
  padding: 16px 0px;
  margin: 0px
}

.nav > form {
  margin: auto 0px;
  text-align: end;
}  

.searchIn, .searchSub {
  padding: 10px;
  font-size: 17px;
  outline: none;
  border: none;
  cursor: pointer;
}

.searchIn {
  width: 84%;
}

.searchSub {
  width: 10%
}

.searchSub:hover {
  color: skyblue;
  background: #111;
}

.nav-second {
  max-width: 1440px;
  inline-size: 1440px;
  display: inline-block;
}
</style>
