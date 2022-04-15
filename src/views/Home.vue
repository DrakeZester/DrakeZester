<template>
  <div class="appBody">
    <!--Top nav-->
    <div class="nav">
      <div class="logoImg">
        <p> Welcome To Our Shop </p>
      </div>

      <form>
        <input class="searchIn" type="text" placeholder="Search">
        <button class="searchSub"> <i class="fas fa-search"> </i> </button>
      </form>  

      <div class="links">
        <router-link class="link" to="/" >
          <p> <i class="fas fa-shopping-bag"></i> </p>
        </router-link>

        <router-link class="link" to="/about">
          <p> <i class="fas fa-comment-alt"></i> </p>
        </router-link>

        <router-link class="link" to="/signIn">
          <p> <i class="fas fa-user"></i> </p>
        </router-link>

        <router-link class="link" to="/cart">
          <p> <i class="fas fa-shopping-basket"></i>  {{ basketItemsNumbers }} </p>
        </router-link>
      </div>
    </div>
    <!--Bottom nav-->
    <Navbar /> 
    <router-view @item-to-parent="addtoBasket" :items="items"/>
  </div>

  <div class='home' id="home">

      <div className="home__container">

        <div class="extended">
          <Ext />
        </div>
         
        <div class="hme"> 
        <h2> All Items </h2>  
        <div className="home__row">

          <Productitems
          @add-to-basket='addingToBasket'
          v-for='product in allProducts'
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.image"
          :rating="product.rating"/>

        </div>
        </div>
      </div>

  </div>
</template>

<script>
import Ext from '@/components/homExt.vue'
import Productitems from '@/components/Products.vue'


export default {
  name: 'Home',
  components: {
    Productitems,
    Ext,
  },
  methods: {
    addingToBasket (item) {
      const itemToParent = {
        title: item.title,
        price: item.price,
        image: item.image
      }

      this.$emit('item-to-parent', itemToParent)
    }
  },
  
}
</script>

<style scoped>

.home {
  margin: auto;
  max-width: 1440px;
  width: 1440px;
  background: snow;
  min-height: 1080px;
  min-width: auto;
}

.home__container {
  width: auto;
}

.home__image {
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: 100%;
}

.home__row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  text-align: center;
  z-index: 1;
  gap: 1rem;
 
}

.hme {
    padding: 10px;
    margin: 15px 0px;
    background: #ffffff;
}

.hme > h2 {
  margin: 30px
}
</style>
