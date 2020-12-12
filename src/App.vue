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
    <div>
      <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle>
      <p>{{ eventData.title }}</p>
      <label for="maxNumber">最大人数</label>
      <input
        id="title"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ typeof eventData.maxNumber }}</p>
      <p>参加条件</p>
      <input
        type="checkbox"
        id="10"
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>
      <input
        type="checkbox"
        id="20"
        value="20代"
        v-model="eventData.target"
      >
      <label for="20">20代</label>
      <input
        type="checkbox"
        id="30"
        value="30代"
        v-model="eventData.target"
      >
      <label for="30">30代</label>
      <p>{{ eventData.target }}</p>
      <p>参加費</p>
      <input 
        type="radio"
        id="free"
        value="無料"
        v-model="eventData.price"
      >
      <label for="free">無料</label>
      <input 
        type="radio"
        id="paid"
        value="有料"
        v-model="eventData.price"
      >
      <label for="paid">有料</label>
      <p>{{ eventData.price }}</p>
      <p>開催場所</p>
      <select v-model="eventData.location">
        <option
          v-for="location in locations"
          :key="location"
        >
          {{ location }}
        </option>
      </select>
      <p>{{ eventData.location }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      number: 10,
      currentComponent: "Home",
      locations: ["東京", "大阪", "名古屋"], 
      eventData: {
        title: "タイトル",
        maxNumber: 0,
        target: [],
        price: "有料",
        location: "東京",
      }
    };
  },
  components: {
    LikeHeader,
    LikeNumber,
    Home,
    About,
    EventTitle,
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>