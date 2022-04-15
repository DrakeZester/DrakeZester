<template>
  <div id="productSlider">

    <div class="imageDis">
          
        <div class="btn prev">
            <button> <i class="fas fa-chevron-circle-left"></i> </button>
        </div>
         
        <img src="./../assets/slider2.jpg">

        <div class="btn next">
            <button> <i class="fas fa-chevron-circle-right"></i> </button>
        </div>

    </div>
    <br>
    <div class="miniDis">
        <div class="mdTxt">
            <h3> Discover More </h3>
        </div>
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
    </div>
    <br>
    <div class="miniDis">
        <div class="mdTxt" >
            <h3> Discover More </h3>
        </div>
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
        <img src="./../assets/Ipaf.jpg">
    </div>                

  </div>
</template>

<script>
export default {
    name: 'ProductSlider'
}
</script>

<style scoped>

.imageDis {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    
}

.iamgeCol {
    max-width: 1100px;
}

img {
    max-width: 1050px;
}

.btn {
    margin: 0px;
}

.btn > button {
    height: 100%;
    width: 100%;
    background-color: tomato;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 42px;
}

.miniDis {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    max-width: 1171px;
    margin: 0px;
    border: 9px solid rgb(4, 140, 194);
    border-radius: 4px;
    background: rgb(55, 160, 209);
}

.miniDis > img {
    width: 100px;
    height: auto;
    background-color: #fff;
    margin: 0px;
    padding: 20px
}

.miniDis > .mdTxt {
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
}

.miniDis > .mdTxt > h3 {

}
</style>