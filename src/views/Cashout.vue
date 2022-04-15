<template>
  <div id="cashOutPage" class="cashOutPage"> <!-- #f0c14b -->

    <div class="cash-head" >
      <h1 class="hd"> Basket Items </h1>
    </div>

    <div class="cash-body">
      <p v-if="!items1.length"> Sorry, no item to show <span class="sedEmo"> :( </span></p>

      <ul v-if="items1.length">
        <li v-for="(item, index) in items1" :key="index">
          <div class="cashOutProducts">
            <img :src="item.image">
            <ul>
              <li>
                <h3> Product Details: </h3> {{ item.title }}
              </li>
              <li> 
                <h3> Price: </h3> ${{ item.price }}
              </li>
              <button class="btn-basket" @click="removeItem(index)"> Remove from basket </button>
            </ul>
          </div>
          <hr> 
        </li>
      </ul>

      <div class="proceedCheckout" v-if="items1.length">
        <h3 class="proceedCheckoutHeader"> Total </h3>
        <h3> ${{ price }} </h3> 
      </div>
    </div>

  </div>    
</template>

<script>
export default {
  name: 'CashOutPage',
  props: {
    display: {
      type: Boolean,
    },
    items: {
      type: Array
    }
  },
  data () {
    return {
      display1: this.display,
      items1: this.items,
      itemsPrice: 0
    }
  },
  methods: {
    removeItem(index) {
      this.items1.pop()
      console.log(index)
    }
  },
  computed: {
    price() {
      let total = 0

      for(var item in this.items1) {
        total += this.items[item].price
      }

      return total
    }
  }
}
</script>

<style scoped>

.cashOutPage {
  min-height: 1080px;
  margin-top: 20px;
  max-width: 1440px;
  min-width: auto;
  margin: auto;
  padding: 5px;
  padding: auto;
  width: 1440px;
}

.cash-head {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  padding: 10px 0px;
  opacity: .9;
  min-width: auto;
}

.hd {
  text-align: center;
  flex: 70%;
}

.closeWindow {
  flex: 30%;
  text-align: center;
  color: red;
  font-size: 18px;
}

button {
  outline: none;
  border: 0;
  margin: 0px 30px;
  cursor: pointer;
}

ul {
  list-style: none;
}

li {
  padding: 10px
}

.cash-body {
  padding: 10px;
  color: #111;
}

.cashOutProducts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: snow;
  text-align: center;
  padding: auto
}

.cashOutProducts img {
  height: auto;
  max-width: 200px;
  margin: auto;
  align-self: center;
  justify-items: center;
  min-width: auto;
}

.btn-basket {
  padding: 23px;
  font-size: 18px;
  background: #f0c14b;
  color: #111;
  margin: 20px
}

.hd {
  border-bottom: 1px solid #111;
  width: 50%;
  min-width: auto
}

.proceedCheckout {
  display: grid; 
  grid-template-columns: 1fr 1fr;
}

hr {
  width: 80%;
  min-width: auto;
}
</style>