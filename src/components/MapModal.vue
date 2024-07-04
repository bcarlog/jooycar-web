<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded-md w-full max-w-lg">
      <h2 class="text-xl font-bold mb-4">Mapa del Viaje</h2>
      <div id="map" class="w-full h-248"></div>
      <button @click="closeModal" class="mt-4 p-2 bg-blue-500 text-white rounded-md">Cerrar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import L from 'leaflet'

const props = defineProps({
  isVisible: Boolean,
  onClose: Function,
  trip: {
    type: Object,
    required: true
  }
})

const map = ref(null)

const initializeMap = async () => {
  await nextTick()

  map.value = L.map('map').setView([props.trip.start.lat, props.trip.start.lon], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map.value)

  // Start and End
  L.marker([props.trip.start.lat, props.trip.start.lon]).addTo(map.value).bindPopup('Inicio').openPopup()
  L.marker([props.trip.end.lat, props.trip.end.lon]).addTo(map.value).bindPopup('Fin').openPopup()

  // Bounding Box
  const bounds = L.latLngBounds([props.trip.boundingBox[0].lat, props.trip.boundingBox[0].lon], [props.trip.boundingBox[2].lat, props.trip.boundingBox[2].lon])
  L.rectangle(bounds, { color: "#1398E9", weight: 1 }).addTo(map.value)
  map.value.fitBounds(bounds)
};

const destroyMap = () => {
  if (map.value) {
    map.value.remove()
  }
};

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    initializeMap()
  } else {
    destroyMap()
  }
})

const closeModal = () => {
  props.onClose()
}

</script>

<style scoped>
#map {
  width: 100%;
  height: 320px;
}
</style>
