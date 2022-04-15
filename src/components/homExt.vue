<template>
    <div class="ext">
        <ul class="extended-list">
            <li v-for="(item, index) in itemLi" :key="index"> {{ item }} <br> <hr> </li>
        </ul>

        <ProductSlider class="extImg" />    
    </div>
</template>

<script>
import ProductSlider from '@/components/ProductSlider.vue'

export default {
    name: "Ext",
    components: {
        ProductSlider
    },
    data () {
        return {
            itemLi: [
                'Smart TV & Android TV','Speaker','Desktop','Motor Bike','Split AC','Freezer','Refrigerator','Smart Phone','Laptop','Microwave Oven'
            ]
        }
    }
}
</script>

<style scoped>
   .ext {
     display: grid;
     grid-template-columns: 1fr 5fr;
     background: #ffffff;
     gap: 10px;
   }
   .extended-list {
       text-align: start;
       margin: 0px 0px;
   }
   .extended-list > ul {
       text-align: start;
       padding: 4px 24px;
       margin: 0px 0px;
   }
   li {
      list-style: none;
      padding: 24px 8px;
      margin: 0px 0px;
   }
   .extImg {
       margin: 10px
   }
</style>