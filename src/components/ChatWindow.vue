<template> </template>

<script>
import getCollection from "../composables/getCollection";
export default {
  setup() {
    const { error, documents } = getCollection("messages");

    return { error, documents };
  },
};
</script>

<style></style>
