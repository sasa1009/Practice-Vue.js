<template>
  <div>
    <LikeHeader>
      <h3>初めまして</h3>
      <hr>
    </LikeHeader>
    <LikeNumber v-bind:totalNumber="number"
                testProps="ぷろっぷす"
                v-on:my-click="incrementNumber"
    >
    </LikeNumber>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <!--<Home v-if="currentComponent === 'Home'"></Home> -->
    <!--<About v-if="currentComponent === 'About'"></About>-->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
    };
  },
  components: {
    LikeHeader,
    LikeNumber,
    Home,
    About,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>