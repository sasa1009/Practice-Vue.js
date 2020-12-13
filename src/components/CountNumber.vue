<template>
  <div>
    <p>{{ title | upperCase }}</p>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <button @click="output">output</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
}
</script>