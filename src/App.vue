<template>
  <header>
    
  </header>

  <main>
    <TripList :trips="trips"/>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TripList from './components/TripList.vue'
import { getTrips } from './services/tripService'

const trips = ref([])

const fetchTrips = async () => {
  try {
    trips.value = await getTrips()
  } catch (error) {
    console.error('Error fetching trips:', error)
  }
}

onMounted(() => {
  fetchTrips()
})
</script>
