<script setup>
defineProps({
  trips: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <table class="min-w-full border border-gray-200">
      <thead>
        <tr class="bg-gray-100 border-b">
          <th class="p-4 text-left font-medium text-gray-600">Inicio</th>
          <th class="p-4 text-left font-medium text-gray-600">Término</th>
          <th class="p-4 text-left font-medium text-gray-600">Distancia y tiempo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trip in trips" :key="trip.id" class="border-b hover:bg-gray-50">
          <td class="p-4">
            <p>{{ trip.startTime }} - {{ trip.startDate }}</p>
            <p>{{ trip.startAddress }}</p>
          </td>
          <td class="p-4">
            <p>{{ trip.endTime }} - {{ trip.endDate }}</p>
            <p>{{ trip.endAddress }}</p>
          </td>
          <td class="p-4">
            <p>{{ trip.distance }} kms</p>
            <p>{{ trip.duration }} minutos</p>
          </td>
        </tr>
      </tbody>
    </table>
</template>
