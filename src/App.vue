<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import TripList from './components/TripList.vue'
</script>

<template>
  <header>
    
  </header>

  <main>
    <TripList :trips="tripsData"/>
  </main>
</template>

<script>
import TripList from './components/TripList.vue';
export default {
  components: {
    TripList
  },
  data() {
    return {
      tripsData: [
        {
          id: 1,
          startTime: '12:34',
          startDate: '28/06/2024',
          startAddress: 'Avenida Las Tranqueras 1571, 7630000 Vitacura, Región Metropolitana de Santiago, Chile',
          endTime: '12:52',
          endDate: '28/06/2024',
          endAddress: 'Calle Miraflores 222, 8320000 Santiago, Región Metropolitana de Santiago, Chile',
          distance: 12.16,
          duration: 18
        },
        {
          id: 2,
          startTime: '07:13',
          startDate: '27/06/2024',
          startAddress: 'Avenida El Peral, 8150000 Puente Alto, Región Metropolitana de Santiago, Chile',
          endTime: '07:38',
          endDate: '27/06/2024',
          endAddress: 'Pasaje Loma Alta 1 3611, 8150000 Puente Alto, Región Metropolitana de Santiago, Chile',
          distance: 10.26,
          duration: 24
        },
        {
          id: 3,
          startTime: '20:54',
          startDate: '26/06/2024',
          startAddress: 'Avenida El Peñón 02051, 8150000 Puente Alto, Región Metropolitana de Santiago, Chile',
          endTime: '21:03',
          endDate: '26/06/2024',
          endAddress: 'Pasaje Loma Alta 1 3611, 8150000 Puente Alto, Región Metropolitana de Santiago, Chile',
          distance: 3.38,
          duration: 9
        }
      ]
    };
  }
}
</script>
