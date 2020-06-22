<template>
  <div id="demo10">
    <input type="text" placeholder="Course title" v-model="course.title">
    <br><br>
    <input type="number" placeholder="Course price" v-model="course.price">
    <br><br>
    <button @click="addCourse">Submit</button>
    <hr>
    <ul>
      <li v-for="(course, index) in dynamicCourses" :key="index">
        {{ course.title }} : Price {{ course.price }} 
        <button @click="removeCourse(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DynamicAddRemove",
  data() {
    return {
      dynamicCourses: [],
      course: {title:"", price:0}
    }
  },
  methods: {
    addCourse() {
      this.dynamicCourses.push(this.course)
      this.resetForm()
    },
    resetForm() {
      this.course = { title: "", price: 0 }
    },
    removeCourse(index) {
      this.dynamicCourses.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
