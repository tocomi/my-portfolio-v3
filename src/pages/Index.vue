<template>
  <div class="index-wrapper">
    <div class="index">
      <div class="name-picture row">
        <div class="name column black">
          <span>Kenta</span>
          <span>TSUNEMI</span>
          <span>@tocomi</span>
        </div>
        <div class="picture column white">
          <img class="picture__image" src="../assets/images/fatman.jpg" />
        </div>
      </div>

      <div class="sns row">
        <div class="text column white">
          <span>Kenta TSUNEMI</span>
        </div>
        <div class="link column black">
          <span>Kenta TSUNEMI</span>
        </div>
      </div>

      <div class="artifacts">
        <div class="artifact row">
          <div class="text column white">
            <span>Kenta TSUNEMI</span>
          </div>
          <div class="link column black">
            <span>Kenta TSUNEMI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';

@Component({})
export default class Index extends Vue {
  // lifecycle
  created() {
    ScrollReveal().reveal('.row', {
      delay: 500,
    });
  }
}
</script>

<style lang="scss" scoped>
.index-wrapper {
  display: flex;
  justify-content: center;
}

.index {
  background-color: #f8f8f8;
  border: solid 5px black;
  max-width: 512px;
  width: 512px;
}

.row {
  display: flex;
  height: 47vw;
  margin-top: 192px;
  max-height: 256px;
}

.column {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 47vw;
}

.black {
  background-color: black;
  color: white;
}

.white {
  background-color: white;
}

.name-picture {
  .picture {
    &__image {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
