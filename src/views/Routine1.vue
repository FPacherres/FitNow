<script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import { routine1 } from "@/utils/constants.js";
  import card from "@/components/minCard.vue";
  import mainCard from "@/components/mainCard.vue";

  const router = useRouter();

  const language = ref("spanish");

  const content = ref({});

  const currentExercises = ref({});

  onMounted(() => {
    content.value = { ...routine1 };
    currentExercises.value = content.value.groups[3].exercise;
  });
</script>

<template>
  <div class="containerPage" v-if="Object.values(content).length">
    <div class="containerPage__header">
      <h2>{{ content.title[language] }}</h2>
      <RouterLink to="/">{{
        language === "spanish" ? "Volver" : "Back"
      }}</RouterLink>
    </div>
    <div class="containerPage__play">
      <mainCard :content="currentExercises" />
    </div>
    <div class="containerPage__content scroll">
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
    </div>
    <div class="containerPage__actions">
      <button>
        <span>{{ language === "spanish" ? "Terminar" : "End Routine" }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .containerPage {
    display: grid;
    grid-template-rows: 50px 182px 1fr 50px;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
  }
  .containerPage__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .containerPage__header a {
    color: var(--bg-1);
    font-size: 16px;
    line-height: 16px;
  }
  .containerPage__actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .containerPage__actions button {
    background-color: var(--bg-3);
    height: 50px;
    width: 180px;
    border-radius: 4px;
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .containerPage__actions button span {
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .containerPage__actions button:hover {
    background-color: var(--bg-8);
  }
  .containerPage__content {
    display: grid;
    grid-template-columns: repeat(2, calc(50vw - 30px));
    grid-auto-rows: calc(50vw - 30px);
    gap: 20px;
    padding-bottom: 40px;
  }
</style>
