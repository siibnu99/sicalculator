<template>
  <div class="windows dark:bg-gray-700">
    <div class="__screen">
      <Calculator />
    </div>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator,
  },
};
</script>

<style lang="scss"></style>
