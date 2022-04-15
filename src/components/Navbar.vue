<template>
  <div id="header">
      <div class="nav-sec">
          <nav>
              <ul class="links-sec">
                  <li v-for="(link, index) in links" :key="index" :class="['li' + index]"> <a :class="link.class" :href="link.lin"> {{ link.text }} </a> </li>
              </ul>
          </nav>
      </div>
  </div>
  <!-- background-color: #131921; -->
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    basketItems: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      header: 'amazon clone app',
      links: [
          {
              lin : "#",
              text : "Category",
              class : 'cat'
          },
          {
              lin : "#",
              text : "All Shops",
              class : ''
          },
          {
              lin : "#",
              text : "Gift Card",
              class : ''
          },
          {
              lin : "#",
              text : "Campaigns",
              class : ''
          },
          {
              lin : "#",
              text : "Express",
              class : ''
          },
          {
              lin : "#",
              text : "News Feed" 
          },
          {
              lin : "#",
              text : "Merchant Zone" 
          },
          {
              lin : "#",
              text : "Help" 
          }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
    background-color: rgb(51, 51, 51);
}

ul {
    display: flex;
}

.links-sec > li{
    list-style: none;
    display: inline-block;
}

.links-sec > .li0{
    flex-basis: 13%;
    background-color: tomato;
    padding: 20px;
    margin: 0px;
    text-align: center;
}

.links-sec > li > a {
    padding: 20px;
    text-decoration: none;
    color: #fff;
}

.links-sec > li > a:hover {
    color: #111;
    background: #fff;
}

.links-sec > li > .cat{
    background-color: tomato;
}
</style>