<template>
    <div class="mainBg">
        <div class="topBar">
            <p>Level Up Shop</p>
        </div>
        <div class="mainbody">
            <div class="first-row">
                <div class="user">
                    <i class="fa-solid fa-user-tie"></i>
                    <div class="userInfo">
                        <p>Admin</p>
                        <p>Name: SK niloy</p>
                        <p>Phone: 0191924039</p>
                        <p>Mail: skniloy@levelUp.com</p>
                    </div>
                </div>

                <div class="status">
                    <section>
                        <p>Total Invested: 192,423$</p>
                        <p>Profit: 200, 123$</p>
                        <p></p>
                    </section>
                    <section>
                        <p>Warehouse: 6</p>
                        <p>Warehouse Working: 6</p>
                        <p>Warehouse Shutdown: 0</p>
                        <p>Stock: 92130</p>
                        <p>Shipments: 4</p>
                        <p>Shipments Pending: 2</p>
                    </section>
                </div>
            </div>

            <div class="manageProduct">
                <div class="products">
                    <img src="./../assets/Ipaf.jpg">
                    <img src="./../assets/Ipaf.jpg">
                    <img src="./../assets/Ipaf.jpg">
                    <img src="./../assets/Ipaf.jpg">
                    <img src="./../assets/Ipaf.jpg">
                    <img src="./../assets/Ipaf.jpg">
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
:root {
    --card-background: #ffff;
    --main-background: rgb(166, 166, 166);
}

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

/*topbar paragraph margin*/
.topBar > p {
    margin-top: 0px;
}

/*user card*/
.user {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 300px; 
    height: 150px;
    font-size: 15px;
    background: var(--card-background);
    margin-left: 10px;
}

.user > i {
    font-size: 45px;
}

.first-row {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1em;
}

.status {
    display: flex;
    flex-direction: column;
}

.status > section {
    display: flex;
    flex-direction: row;
}
</style>