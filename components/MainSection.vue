<template>
  <div>
    <div>
      <h2>{{ props.title }}</h2>
    </div>
    <div v-if="loading">
      <span>loading</span>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
})

</script>