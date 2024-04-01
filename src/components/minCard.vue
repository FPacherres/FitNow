<script setup></script>

<template>
  <button class="card">
    <div>
      <span>Pecho Centro</span>
      <span>12x4 reps</span>
    </div>
  </button>
</template>

<style scoped>
  .card {
    background-image: url("https://i.blogs.es/52254f/istock-497259852/1366_2000.jpeg");
    border-radius: 4px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }
  .card div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 15px 10px 15px;
    width: calc(50vw - 30px);
    height: calc(50vw - 30px);
    background: linear-gradient(
      0deg,
      rgba(61, 63, 75, 1) 0%,
      rgba(61, 63, 75, 1) 25%,
      rgba(61, 63, 75, 0.7) 50%,
      rgba(61, 63, 75, 0.7) 100%
    );
  }
  .card div span:nth-child(1) {
    color: #fff;
    font-size: 16px;
    line-height: 16px;
  }
  .card div span:nth-child(2) {
    color: var(--bg-3);
    font-size: 10px;
    line-height: 10px;
  }
</style>
