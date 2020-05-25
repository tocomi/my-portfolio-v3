<template>
  <div class="index-wrapper">
    <div class="index">
      <div class="name-picture row">
        <div class="name column black">
          <span>Kenta TSUNEMI</span>
        </div>
        <div class="picture column white">
          <span>Kenta TSUNEMI</span>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.index-wrapper {
  display: flex;
  justify-content: center;
}

.index {
  border: solid 5px black;
  height: 1024px;
  max-width: 512px;
  width: 512px;
}

.row {
  display: flex;
  height: 46vw;
  max-height: 256px;
}

.column {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 46vw;
}

.black {
  background-color: black;
  color: white;
}
</style>
