<template>
  <header>
    <Filters @filtersChange="fetchTrips"/>
  </header>

  <main>
    <TripList :trips="trips" @showMap="onShowMap"/>
  </main>
  <MapModal :isVisible="isMapVisible" :trip="selectedTrip" @close="isMapVisible = false"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TripList from './components/TripList.vue'
import Filters from './components/Filters.vue'
import MapModal from './components/MapModal.vue'
import { getTrips } from './services/tripService'

const trips = ref([])
const isMapVisible = ref(false)
const selectedTrip = ref({})

const fetchTrips = async (filters) => {
  try {
    trips.value = await getTrips(filters)
  } catch (error) {
    console.error('Error fetching trips:', error)
  }
}

const onShowMap = (trip) => {
  isMapVisible.value = true
  selectedTrip.value = trip
}

onMounted(() => {
  fetchTrips()
})
</script>
