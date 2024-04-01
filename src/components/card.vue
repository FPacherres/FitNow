<script setup>
  import { defineProps, computed, ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const language = ref("english");

  const props = defineProps({
    routine: {
      type: Object,
      default: () => {},
    },
  });

  const fs = computed(() => {
    return props.routine.break ? 24 : 16;
  });

  const lh = computed(() => {
    return props.routine.break ? 24 : 16;
  });

  const num = computed(() => {
    return props.routine.num < 10 ? "0" + props.routine.num : props.routine.num;
  });

  const goToPage = () => {
    const path = `/${props.routine.path}`;
    router.push(path);
  };
</script>

<template>
  <div class="routineBtn">
    <div class="content">
      <div class="content_header">
        <div class="content_header-day">
          <span>{{ props.routine.day.abbr[language] }}</span>
        </div>
        <div class="content_header-title">
          <span>{{ props.routine.exercise.text[language] }}</span>
          <div class="tags" v-if="props.routine.exercise.groups.length">
            <span v-for="(tag, t) in props.routine.exercise.groups" :key="t">{{
              tag
            }}</span>
          </div>
        </div>
      </div>
      <div class="content_body">
        <div class="content_item">
          <div>{{ language === "spanish" ? "Avance" : "Progress" }}:</div>
          <div>
            <p>{{ props.routine.percentage }}%</p>
          </div>
        </div>
        <div class="content_item">
          <div>{{ language === "spanish" ? "Ejercicios" : "Exercises" }}:</div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem sint obcaecati vitae iste nobis corrupti, velit
              nihil repellat? Odio, ut corporis veritatis quae molestias
              repellendus aliquid nihil laboriosam non provident.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button @click="goToPage" :disabled="props.routine.disabled">
        <span>Iniciar</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .routineBtn {
    width: 100%;
    height: auto;
    border-radius: 4px;
    background-color: var(--bg-2);
    display: grid;
    grid-template-rows: 1fr 60px;
  }
  .content {
    display: grid;
    grid-template-rows: 50px minmax(50px, auto);
    padding: 20px;
    box-sizing: border-box;
  }
  .content_header {
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 15px;
  }
  .content_header-day {
    background-color: var(--bg-6);
    border-radius: 2px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content_header-day span {
    z-index: 1;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #fff;
  }
  .content_header-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
  .content_header-title span {
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    color: var(--bg-7);
    text-align: left;
  }
  .tags {
    display: flex;
    gap: 5px;
  }
  .tags span {
    font-size: 12px;
    line-height: 12px;
    background-color: var(--bg-3);
    padding: 4px 10px;
    border-radius: 2px;
    font-weight: 400;
    color: #fff;
  }
  .content_body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0 0;
  }
  .content_item {
    display: grid;
    grid-template-columns: 70px 1fr;
    grid-auto-rows: auto;
  }
  .content_item div:nth-child(1) {
    color: var(--bg-7);
    font-weight: 600;
    font-size: 12px;
    text-align: left;
  }
  .content_item div:nth-child(2) p {
    color: var(--bg-7);
    font-size: 12px;
    text-align: left;
    font-weight: 400;
  }
  .actions {
    height: 60px;
    background-color: var(--bg-4);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 4px 4px;
  }
  .actions button {
    background-color: var(--bg-3);
    height: 30px;
    width: 100px;
    border-radius: 2px;
  }
  .actions button span {
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
  }
</style>
