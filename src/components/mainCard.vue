<script setup>
  import { defineProps, ref, onMounted } from "vue";

  const props = defineProps({
    content: {
      type: Object,
      default: () => {},
    },
  });

  const language = ref("spanish");
</script>

<template>
  <div class="card">
    <div
      class="card__img"
      :style="{ backgroundImage: `url(${props.content.images.main})` }"
    ></div>
    <div class="card__text">
      <div>
        <span class="title">{{ props.content.name }}</span>
      </div>
      <div>
        <span class="label">Peso:</span
        ><input type="text" v-model="props.content.peso" />
      </div>
      <div>
        <span class="label">Reps:</span>
        <span class="value">{{ props.content.reps }}</span>
      </div>
      <div>
        <button class="btn">
          <span>{{
            language === "spanish" ? "Finalizar" : "End Routine"
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    background-color: var(--bg-4);
    height: 182px;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 160px 1fr;
    padding: 10px 20px 10px 10px;
    gap: 20px;
  }
  .card__img {
    border-radius: 4px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }
  .card__text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
  }
  .card__text div {
    display: flex;
    gap: 10px;
  }
  .card__text div span.title {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #fff;
    padding: 5px 0;
    text-transform: uppercase;
  }
  .card__text div span.label {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: var(--bg-1);
  }
  .card__text div:nth-child(2) span.label {
    padding-top: 4px;
  }
  .card__text div span.value {
    font-size: 12px;
    line-height: 12px;
    font-weight: 600;
    color: #fff;
  }
  .card__text div input {
    width: 50px;
    border-bottom: 2px solid var(--bg-3);
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    line-height: 16px;
    color: #fff;
    padding: 0px;
    font-weight: 600;
  }
  .btn {
    border: 1px solid var(--bg-3);
    height: 30px;
    width: 100px;
    border-radius: 4px;
    color: var(--bg-3);
    margin-left: auto;
    margin-top: 10px;
  }
</style>
