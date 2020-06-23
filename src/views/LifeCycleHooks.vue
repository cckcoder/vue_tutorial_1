<template>
  <div id="LifeCycleHooks">
    <h1>LifeCycleHooks</h1>
    <p>{{ counter }}</p>
    <button @click="increase">Update</button>
  </div>
</template>

<script>
export default {
  name: "LifeCycleHooks",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increase() {
      this.counter ++
    }
  },
  beforeCreate() {
    console.log('Before Create')
  },
  created() {
    console.log('Create')
  },
  mounted() {
    console.log('Mount')
  },
  beforeUpdate() {
    console.log('Before Update')
  },
  updated() {
    console.log('Update')
  },
  beforeDestroy() {
    console.log('Before Destroy')
  },
  destroyed() {
    console.log('Destroy')
  },

}
</script>

<style>

</style>
