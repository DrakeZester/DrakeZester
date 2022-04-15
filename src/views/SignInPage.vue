<template>
  <div class="signInPage">
      <form @submit.prevent="register">

          <h2 style="margin: 10px;"> E-Commerce Website </h2>
          <h3 style="margin: 10px;"> Sign In </h3>
          <label style="margin: 10px;"> Sign in with email or phone </label>

          <input type="email" v-model="email" id="reg-mail">  
          <label style="margin: 10px;"> Password </label>

          <input type="password" id="reg-pass" v-model="password">
          <input type="submit" id="signInBtn" value="Sign In!">
          <br>
          <p> By continuing, you agree to Dummy Conditions of Use and Privacy Notice. </p>
      </form>

      <footer>
        <section>
          <p>  Conditions of Use  Privacy Notice  Help </p>
          <p> © 1996-2020, Dumm's, Inc. or its affiliates </p>
        </section>  
      </footer>  
  </div>
</template>

<script>

export default {
    name:"SignInPage",
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        console.log(this.email, this.password)
      }
    }
}
</script>

<style scoped>

 .signInPage {
   margin-top: 20px;
   background: white;
   max-width: 1440px;
   padding-top: 50px;
   margin: 10px auto;
   padding: 5px 0px;
   width: 1440px;
 }

 form {
   display: block;
   min-width: 40%;
   max-width: 40%;
   margin: auto;
   padding: 30px;
   border-bottom: 1px solid skyblue;
 }

 form > input {
   width: 90%;
   margin: 10px;
   height: 20px;
   padding: 5px;
   border: 1px solid skyblue;
 } 

input[type="submit" i] {
    display: block;
    background: rgb(61, 151, 187);
    outline: none;
    border: none;
    cursor: pointer;
    height: 50px;
    padding: 5px;
    align-items: center;
    width: 50%;
    margin: auto;
    color: #fff;
    font-size: 18px
 }

section {
  text-align: center;
}

</style>