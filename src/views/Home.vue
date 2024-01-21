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
        <button class="routineBtn" v-for="n in 10" :key="n">
          <div>
            <span>Monday</span>
            <h2>Triceps Y Biceps</h2>
            <div class="day">
              <span>{{ n < 10 ? "0" + n : n }}</span>
            </div>
          </div>
        </button>
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
    height: calc(100vh - 260px);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .routineBtn {
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }
  .routineBtn > div {
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .routineBtn > div h2 {
    font-size: 32px;
    line-height: 32px;
    color: var(--bg-3);
    text-transform: uppercase;
    text-align: start;
    font-style: italic;
  }
  .routineBtn > div span:not(.day span) {
    font-size: 14px;
    line-height: 14px;
    color: var(--bg-2);
    text-transform: uppercase;
    text-align: start;
  }
  .day {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .day span {
    font-size: 160px !important;
    line-height: 160px !important;
    color: var(--bg-3);
    opacity: 0.1;
    font-weight: 600;
    text-align: end;
  }
</style>
