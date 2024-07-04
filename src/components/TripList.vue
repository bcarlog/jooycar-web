<script setup>
import moment from 'moment'
defineProps({
  trips: {
    type: Array,
    required: true
  }
})

const formatDate = (timestamp) => {
  return moment(timestamp).format('HH:mm - DD/MM/YYYY')
}

const fixPoints = (km) => {
  return km.toFixed(2)
}

const convertMillsToMin = (milliseconds) => {
  return (milliseconds / 60000).toFixed(1);
};

</script>

<template>
  <table class="min-w-full border border-gray-200">
      <thead>
        <tr class="bg-gray-100 border-b text-gray-600">
          <th class="p-4 text-left font-medium">Inicio</th>
          <th class="p-4 text-left font-medium">Término</th>
          <th class="p-4 text-left font-medium">Distancia y tiempo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trip in trips" :key="trip.id" class="border-b hover:bg-gray-50">
          <td class="p-4">
            <p>{{ formatDate(trip.start.time) }}</p>
            <p>{{ trip.start.address }}</p>
          </td>
          <td class="p-4">
            <p>{{ formatDate(trip.end.time) }}</p>
            <p>{{ trip.end.address }}</p>
          </td>
          <td class="p-4">
            <p>{{ fixPoints(trip.distance) }} kms</p>
            <p>{{ convertMillsToMin(trip.duration) }} minutos</p>
          </td>
        </tr>
      </tbody>
    </table>
</template>
