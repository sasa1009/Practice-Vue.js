<template>
  <div>
    <p v-border:solid.round="{width: '5px', color: 'yellow'}">Home</p>
    <p>{{ title | upperCase }}</p>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <button @click="output">output</button>
    <hr color="green">
    <CountNumber></CountNumber>
    <hr color="green">
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  components: {
    CountNumber,
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
    } 
  }
}
</script>