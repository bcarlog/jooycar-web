<template>
  <div class="flex space-x-4 mb-4">
    <input
      type="datetime-local"
      placeholder="Desde"
      class="p-2 border border-gray-300 rounded-md"
      v-model="from"
    />
    <input
      type="datetime-local"
      placeholder="Hasta"
      class="p-2 border border-gray-300 rounded-md"
      v-model="to"
    />
    <button @click="clearFilters" class="p-2 bg-blue-500 text-white rounded-md">Borrar Filtros</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  onFiltersChange: {
    type: Function,
    required: true
  }
})

const from = ref('')
const to = ref('')

const clearFilters = () => {
  from.value = ''
  to.value = ''
  triggerFiltersChange()
}

const triggerFiltersChange = () => {
  props.onFiltersChange({
    start_gte: from.value ? new Date(from.value).getTime() : '',
    start_lte: to.value ? new Date(to.value).getTime() : ''
  })
}

watch([from, to], () => {
  triggerFiltersChange()
})
</script>
