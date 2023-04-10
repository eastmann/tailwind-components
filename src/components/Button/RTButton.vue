<template>
  <button
    type="button"
    class="
      p-3
      rounded-sm
      bg-pink-600
      text-pink-50
      hover:bg-pink-500
      hover: shadow-md
      hover: shadow-grey-400
      transition-colors
      transition-shadows
      duration-500
      ease-linear
    "
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'RTButton',
  }
</script>

<style>

</style>