<template>
  <div id="formInput">
    <h1>Form Input</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="first_name">FirstName: </label>
        <input type="text" name="first_name" v-model="applicant.first_name">
      </div> 
      <div>
        <label for="last_name">LastName: </label>
        <input type="text" name="last_name" v-model="applicant.last_name">
      </div> 
      <!-- Sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex">
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex">
      </div> 

      <!-- Course -->
      <div>
        <select name="course" v-model="applicant.course">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
      </div> 
      <button type="button" @click="clear">Clear</button>
      <button type="submit">Submit</button>
    </form>
    <div style="margin-top:15px; color:red;">
      #Spy {{ JSON.stringify(applicant) }}
    </div>
  </div>
  
</template>

<script>
export default {
  name: "formInput",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        course: "react"
      }
    }
  },
  methods: {
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        course: "react"
      }
    },
    submit() {
      alert(JSON.stringify(this.applicant))
    }
  }

}
</script>

<style>

</style>
