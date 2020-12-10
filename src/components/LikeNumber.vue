<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <p>{{ testProps }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber", "testProps"],
  // data: function() {
  //   return {
  //     number: 5
  //   };
  // },
  computed: {
    halfNumber() {
      return this.totalNumber / 2
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.totalNumber + 1)
    }
  }
}
</script>

<style>
</style>
