<template>
  <button
    class="rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white hover:shadow-blue"
    @click="handleClick"
  >
    Sign in
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  methods: {
    handleClick(event) {
      console.log(event);
    },
  },
};
</script>
