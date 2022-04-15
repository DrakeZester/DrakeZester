<template>
    <div class="mainBg">
        <div class="topBar">
            <p>Level Up Shop</p>
        </div>
        <div class="mainbody">
            <div class="first-row">
                <!--user detail-->
                <div class="user">
                    <i class="fa-solid fa-user-tie"></i>
                    <div class="userInfo">
                        <h3 style="text-align: center">Admin</h3>
                        <p><b>Name:</b> SK niloy</p>
                        <p><b>Phone:</b> 0191924039</p>
                        <p><b>Mail:</b> skniloy@levelUp.com</p>
                    </div>
                </div>
                <!--first row payment details -->
                <div class="status">
                    <section>
                        <p><b>Total Invested:</b>192,423$</p>
                        <p><b>Profit:</b>200,123$</p>
                        <p><b>Percentage:</b>20%</p>
                    </section>
                    <section>
                        <p><b>Warehouse:</b> 6</p>
                        <p><b>Warehouse Working:</b> 6</p>
                        <p><b>Warehouse Shutdown:</b> 0</p>
                        <p><b>Stock:</b> 92130</p>
                        <p><b>Shipments:</b> 4</p>
                        <p><b>Shipments Pending:</b> 2</p>
                    </section>
                </div>
            </div>
            <!--product detaiol -->
            <div class="manageProduct">
                <h3 style="margin-left:10px;">Instock: </h3>
                <div class="products">
                    <!--product cards -->
                    <div class="card">
                        <img src="./../assets/Ipaf.jpg">
                        <div class="details">
                            <p><b>Iphone</b><br><sub>by Apple</sub></p>
                            <p><b>Ram: </b> 2gb</p>
                            <p><b>Rom: </b> 16gb</p>
                            <p><b>Price: </b> 1650$</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="./../assets/Ipaf.jpg">
                        <div class="details">
                            <p><b>Iphone</b><br><sub>by Apple</sub></p>
                            <p><b>Ram: </b> 2gb</p>
                            <p><b>Rom: </b> 16gb</p>
                            <p><b>Price: </b> 1650$</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="./../assets/Ipaf.jpg">
                        <div class="details">
                            <p><b>Iphone</b><br><sub>by Apple</sub></p>
                            <p><b>Ram: </b> 2gb</p>
                            <p><b>Rom: </b> 16gb</p>
                            <p><b>Price: </b> 1650$</p>
                        </div>
                    </div>

                    <div class="card">
                        <img src="./../assets/Ipaf.jpg">
                        <div class="details">
                            <p><b>Iphone</b><br><sub>by Apple</sub></p>
                            <p><b>Ram: </b> 2gb</p>
                            <p><b>Rom: </b> 16gb</p>
                            <p><b>Price: </b> 1650$</p>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button>Add Product</button>
                    <button>Edit Product</button>
                </div>
            </div>

            <!--shipment detail -->
            <div class="manageProduct" style="margin-top: 10px;">
                <h3 style="text-align: center"> Shipments </h3>
                <div class="shipmentList">
                    <div class="shipmentDetail">
                        <ul>
                            <h3>Arrived</h3>
                            <li>1023 unit Iphone</li>
                            <li>249 speaker</li>
                            <li>1250 watch</li>
                            <li>1235 mixer</li>
                        </ul>
                        <div class="btn">
                            <button>Warehouse</button>
                            <button>Re-analyze</button>
                        </div>
                    </div>

                    <div class="shipmentDetail">
                        <ul>
                            <h3>Pending</h3>
                            <li>1023 unit Iphone</li>
                            <li>249 speaker</li>
                            <li>1250 watch</li>
                            <li>1235 mixer</li>
                        </ul>
                        <div class="btn">
                            <button>Request Shipment</button>
                            <button>Cancel Shipment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*background*/ 
.mainBg {
    background: var(--main-background);
}

/*top*/
.topBar {
    background: skyblue;
    color: white;
    text-align: center;
    font-size: 21px;
    margin: auto;
    padding: 10px 0px;
}

/* First row */
.first-row {
    margin: 10px 0px;
}

/*topbar paragraph margin*/
.topBar > p {
    margin-top: 0px;
}

/*user card*/
.user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%; 
    height: 150px;
    font-size: 15px;
    background: var(--card-background);
}

.user > i {
    font-size: 45px;
}

/* First row */
.first-row {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1em;
}
/* First row status card */
.status {
    display: flex;
    flex-direction: column;
    background: var(--card-background);
    height: 100%;
    width: 100%;
}
/* First row section*/
.status > section {
    display: flex;
    flex-direction: row;
}


.manageProduct {
    background: var(--card-background);
    padding: 10px 0px;
}

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
}

.products > .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px 0px 0px 0px;
    border-left: 1px solid #efefef;
}

.products > .card > img {
    width: 150px;
}

.btn {
    margin: 10px;
}

.shipmentList {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

ul > h3 {
    width: 100%;
    margin: 10px;
    height: 45px;
    text-align: left;
}

ul > li {
    width: 100%;
    margin: 10px;
    height: 45px;
    text-align: left;

}

button {

    margin: 10px;
    margin-left: auto;
    min-height: 45px;
    color: white;
    outline: none;
    width: 140px;
    background: skyblue;
    border: 1px solid #efefef;
    border-radius: 5px;
}
</style>