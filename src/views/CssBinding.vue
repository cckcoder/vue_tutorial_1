<template>
  <div id="CssBinding">
    <h1>Css Binding</h1>
    <img :src="imgUrl" alt="vuemastery">
    <br>
    <div :class="[false ? error : '', textSize]">
      CodWiz
    </div>
    <div :style="{color, fontSize}">Binding Style</div>
    <div :style="isActive ? styleObj : ''">Binding style Obj</div>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: 'CssBinding',
  data() {
    return {
      imgUrl: 'https://www.vuemastery.com/images/vuemastery-white.svg',
      error: 'errorClass',
      textSize: 'textSize',
      color: 'coral',
      fontSize: '50px',
      isActive: false,
      styleObj: {
        backgroundColor: 'yellow'
      }
    }
  }

}
</script>

<style>
.errorClass {
  background-color: tomato;
}

.textSize {
  font-size: 20px;
  font-weight: 900;
}
</style>
