<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <LikeNumber v-bind:totalNumber="number"
                testProps="ぷろっぷす"
                v-on:my-click="incrementNumber"
    >
    </LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";

export default {
  data() {
    return {
      number: 10 
    };
  },
  components: {
    LikeHeader: LikeHeader,
    LikeNumber: LikeNumber
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>