<template>
  <div class="signInPage">

        <h2>
            Logo_Logo
        </h2>

        <form>
          <h3>
             Sign In
          </h3>

          <label  class="ulText" for="signIn"><p> Sign in with email or phone </p></label>
          <input type="text" for="signIn">

          <label class="ulText" for="passWord"><p> Passwords </p></label>
          <input type="password" for="passWord">

          <input type="submit" value="Continue" id="btn-sbmit" class="btn-sbmit">
        </form>

  </div>
</template>

<script>
export default {
  name: 'SignInPage',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

.signInPage {
  text-align: center;
  font-size: 20px;
  width: 20%;
  margin: auto;
}

form {
    display: block;
    border: 1px solid rgb(128, 175, 57);
    margin: auto;
    padding: 30px;
    text-align: start;
    border-radius: 8px;
}

input[type="text" i], input[type="password" i] {
    display: block;
    font-size: 17px;
    padding: 3px;
    border: 1px solid rgb(128, 175, 57);
    width: 100%;
    margin-right: 3px;
}

input[type="submit" i] {
    background:  rgb(128, 175, 57);
    font-size: 17px;
    outline: none;
    border: none;
    color: white;
    padding: 15px;
    margin: 10px 0px;
    width: 100%;
}

form > h3 {
    margin-top: 0px;
}

form > label > p {
    margin: 5px 0px;
}

</style>
