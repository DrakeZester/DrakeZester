<template>
  <div class="about">

    <h1> Need Support? </h1>
    <p> check our <a href="#"> Faq </a> </p>
    <p> Still need answers? Contact our <a href="#"> Support </a> or <a href="#"> Live Chat </a> now! </p>

    <div class="about-container">

      <form class="about-row">

        <section id="sec-1">
          From: <br>
          <input type="text">
        </section>

        <section id="sec-2">
          To: <br>
          <input type="text">
        </section>  

        <section id="sec-3">
          Mail: <br>
          <input clas="mailBody" type="text">
        </section>

        <section id="sec-4">
          <input type="submit" value="Submit">
        </section>

      </form>

    </div>

    <div class="about-container">

      <div class="chatBox">
        <div class="header">
          Christopher Ronaldo
        </div>

        <div class="chatBody">
          <h3> Start Texting! <br> <hr> </h3>
        </div>

        <div class="chatField">
          <input type="text">
          <button> Send </button>
        </div>
      </div>

    </div>


    <div class="textUs">
    </div>  
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style>

.about {
  margin: auto;
  background: #ffffff;
  min-height: 1080px;
  max-width: 1280px;
  padding: 5px;
  min-width: auto;
}

.about-container {
  padding: 20px;
  min-width: 40%;
}

.about-image {
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: 100%;

}

.about-row {
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr;
  grid-auto-rows: auto;
  text-align: start;
  z-index: 1;
  gap: 1rem;
  padding: 0;
  margin: 20px
}

input {
  width: 320px;
  min-width: auto;
  padding: 5px;
  border: 1px solid skyblue;
}

#sec-3 > input {
  height: 200px
}

input[type="submit" i] {
  border: none;
  outline: none;
  background-color: rgb(61, 151, 187);
  color: #fff;
  padding: 15px
}

.chatBox {
  display: grid;
  grid-template-rows: 1fr 400px 1fr;
  gap: 1rem;
  border: 1px solid skyblue;
  padding: 10px;
  width: 30%;
  border-radius: 12px;
}

.chatBox > .chatBody {
  border: 1px solid skyblue;
  border-radius: 10px;
  margin: 0px;
}

.chatBox > .chatBody > h3 {
  margin: 12px;
  text-align: center;
}

.chatBox > .chatField {
  margin: 0px;
}

.chatBox > .chatField > button {
  background: skyblue;
  color: #fff;
  outline: none;
  border: none;
  width: 15%;
  margin: 2px;
  height: 27px;
}
.chatBox > .chatField > input {
  width: 80%
}
</style>
