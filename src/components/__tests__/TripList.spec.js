import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TripList from '../TripList.vue'

describe('TripList', () => {
  const trips = [
    {
      id: 1,
      startTime: '12:33',
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
  ];

  it('renders properly', () => {
    const wrapper = mount(TripList, { props: { trips } })
    expect(wrapper.exists()).toBe(true)
  })

  it('should render correct number of rows', () => {
    const wrapper = mount(TripList, { props: { trips } })
    const rows = wrapper.findAll('tbody tr')
    expect(rows.length).toBe(trips.length)
  })

  it('should render trip correctly', () => {
    const wrapper = mount(TripList, { props: { trips } })
    const firstRowCells = wrapper.findAll('tbody tr').at(0).findAll('td');

    expect(firstRowCells.at(0).text()).toContain('12:33 - 28/06/2024');
    expect(firstRowCells.at(0).text()).toContain('Avenida Las Tranqueras 1571');
    expect(firstRowCells.at(1).text()).toContain('12:52 - 28/06/2024');
    expect(firstRowCells.at(1).text()).toContain('Calle Miraflores 222');
    expect(firstRowCells.at(2).text()).toContain('12.16 kms');
    expect(firstRowCells.at(2).text()).toContain('18 minutos');
  })
})
