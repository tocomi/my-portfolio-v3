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
}

.artifacts {
  margin-top: $section-margin;
}

.sns {
  margin-top: $section-margin;
}
</style>
