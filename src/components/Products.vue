<template>
    <div className="product">

      <div className="product__info">

          <h5 class="grids header">{{ title }}</h5>

          <section class="grids rating"> <i v-for="rate in rating" :key="rate" class="fas fa-star"> </i> </section>

          <div class="grids img">
            <img class="product-img" :src='image' alt="" />
          </div>

          <p class="grids">
            <strong> ${{ price }} </strong>
          </p>

          <button class="btn-basket" @click="addTobasket">Add to Basket</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Productitems',
  props: {
    title: String,
    price: Number,
    image: String,
    rating: Number
  },

  data () {
    return {

    }
  },

  methods: {
    addTobasket () {
      const basketItem = {
        title: this.title,
        price: this.price,
        image: this.image
      }

      this.$emit('add-to-basket', basketItem)
    }
  }
}
</script>

<style scoped>
.product {
  font-size: 18px;
}

.rating {
  color: #f0c14b;
}

.product-img {
  width: 130px;
  height: auto;
  margin: auto;
  align-self: center;
  justify-items: center;
}

.btn-basket {
  background: rgb(61, 151, 187);
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  color: #fff;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 13px
}

.btn-basket:focus {
  transform: scale(.9);
}

.btn-basket:active {
  background: rgb(10, 221, 203);
  transform: scale(1.1);
}

.btn-basket:hover {
  background: rgb(10, 221, 203);
}

.product__info {
  display: grid;
  gap: 1rem;
  grid-template-rows: auto auto auto auto;
  align-self: center;
}

.grids {
  margin: auto;
  align-self: center;
}

.product__info > h5 {
  margin: 0
}

.img {
  height: 210px;
  align-self: center;
}

.header {
  height: 80px;
}

</style>
