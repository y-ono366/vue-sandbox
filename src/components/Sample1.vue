<template>
  <p :class="$style.message">こんにちは!</p>
</template>

<script>
export default {
  name: "Sample1",
  created() {
    console.log("css modules: $style", this.$style);
  }
};
</script>

<style module>
.message {
  color: red;
}
</style>
