<script setup>
  import { ref } from "vue";
  import card from "@/components/card.vue";
  import { routines } from "@/utils/constants.js";
  const routinesLocal = ref([...routines]);
</script>

<template>
  <div class="containerPage">
    <div class="title">
      <h1>HI <span class="name">FABIAN!</span></h1>
      <img
        src="https://elcomercio.pe/resizer/c1GDOc4ggQ2j-3kD_uguZOXDhNI=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VYSDRMIUP5CRZCE26M5YM7PTVQ.jpg"
        alt="Fabian"
      />
    </div>
    <div class="routineContainer">
      <div><span>My Routine</span></div>
      <div class="routineBtns scroll">
        <card
          v-for="routine in routinesLocal"
          :key="routine.num"
          :routine="routine"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .containerPage {
    display: grid;
    grid-template-rows: 60px 1fr;
    padding: 20px;
    width: 100vw;
    height: 100vh;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h1 {
    color: var(--bg-2);
    font-size: 32px;
    line-height: 32px;
  }
  .title h1 span {
    color: var(--bg-3);
  }
  .title img {
    color: var(--bg-3);
    width: 50px;
    height: 50px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid var(--bg-3);
  }
  .routineContainer {
    display: grid;
    grid-template-rows: 40px 1fr;
  }
  .routineBtns {
    height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 115px;
  }
</style>
