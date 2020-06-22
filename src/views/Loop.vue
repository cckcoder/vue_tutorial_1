<template>
  <div id="loop">
    <h1>Loop V-for</h1>
    <ul>
      <li v-for="(item, index) in ['Vue', 'React', 'Angular']" :key="index">
        {{ item }}
      </li>
      <hr>
      <li v-for="(item, index) in objCourse" :key="index">
        {{ item.title }} | Price {{ item.price }}
      </li>
    </ul>
    <hr>
    <h3>Destructuring</h3>
    <ul>
      <li v-for="({title, price}, index) in objCourse" :key="index">
        {{ title }}: Price {{ price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Loop',
  data() {
    return {
      mCourse: ['iOS', 'Android', 'Flutter'],
      objCourse: [
        { title: 'iOS', price: 11},
        { title: 'Android', price: 19},
        { title: 'Flutter', price: 9},
      ]
    }
  }
}
</script>

<style>
ul {
  list-style: none;  
}
</style>
