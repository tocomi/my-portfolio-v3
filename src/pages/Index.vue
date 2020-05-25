<template>
  <div class="index">
    <h2>main</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
.index {
  max-width: 512px;
}
</style>
