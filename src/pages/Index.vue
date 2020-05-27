<template>
  <div class="index-wrapper">
    <div class="index">
      <div class="name-picture row">
        <div class="name column black">
          <span class="name__first">Kenta</span>
          <span class="name__last">TSUNEMI</span>
          <span class="name__handle">@tocomi</span>
        </div>
        <div class="picture column white">
          <img class="image" src="../assets/images/portrait/fatman.jpg" />
        </div>
      </div>

      <artifacts />

      <div class="sns row">
        <div class="text column white">
          <span>Kenta TSUNEMI</span>
        </div>
        <div class="link column black">
          <span>Kenta TSUNEMI</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScrollReveal from 'scrollreveal';
import Artifacts from '../components/Artifacts.vue';

@Component({
  components: {
    Artifacts,
  },
})
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
@import '../assets/styles/global.scss';

.index-wrapper {
  display: flex;
  justify-content: center;
}

.index {
  background-color: #f8f8f8;
  border: solid 5px $grey;
  max-width: $max-width;
}

.name-picture {
  margin-top: $section-margin;

  .name {
    align-items: flex-start;
    font-size: 4.8vw;

    &__first,
    &__last {
      margin-left: 4vw;
    }

    &__handle {
      font-size: 4vw;
      margin: 8px 0 0 25vw;
    }
  }
}

.artifacts {
  margin-top: $section-margin;
}

.sns {
  margin-top: $section-margin;
}
</style>
