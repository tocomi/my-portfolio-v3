<template>
  <div class="artifacts">
    <div class="artifact">
      <div class="header black">
        <span class="header__title">kabuker</span>
        <span class="header__description">あつもりのやつだよーーーーーん</span>
      </div>
      <div class="thumbnails row">
        <div class="thumbnail column white">
          <img class="image" src="../assets/images/artifact/kabuker.jpg" />
        </div>
        <div class="thumbnail column white">
          <img class="image" src="../assets/images/artifact/kabuker.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/global.scss';

.header {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 18vw;
  justify-content: center;

  &__title {
    font-size: 4.4vw;
    font-weight: bold;
  }

  &__description {
    font-size: 3.6vw;
  }
}
</style>
