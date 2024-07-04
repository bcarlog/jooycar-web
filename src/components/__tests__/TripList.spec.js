import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TripList from '../TripList.vue'

describe('TripList', () => {
  const trips = [
    {
      "start": {
        "time": 1642500498000,
        "lat": -33.580053,
        "lon": -70.568502,
        "address": "Avenida Las Tranqueras 1571"
      },
      "end": {
        "time": 1642500462000,
        "lat": -33.580158,
        "lon": -70.567227,
        "address": "Calle Miraflores 222"
      },
      "_id": "66870492a8d2202ef574da94",
      "duration": 36000,
      "distance": 0.27396274638080403,
      "overspeedsCount": 0,
      "boundingBox": [
        {
          "lat": -33.580158,
          "lon": -70.568502,
        },
        {
          "lat": -33.580005,
          "lon": -70.568502,
      },
        {
          "lat": -33.580005,
          "lon": -70.566408,
        },
        {
          "lat": -33.580158,
          "lon": -70.566408,
        }
      ]
    },
    {
      "start": {
        "time": 1642500498000,
        "lat": -33.580053,
        "lon": -70.568502,
        "address": "-"
      },
      "end": {
        "time": 1642500462000,
        "lat": -33.580158,
        "lon": -70.567227,
        "address": "-"
      },
      "_id": "66870493a8d2202ef574da9a",
      "duration": 36000,
      "distance": 0.27396274638080403,
      "overspeedsCount": 0,
      "boundingBox": [
        {
          "lat": -33.580158,
          "lon": -70.568502,
        },
        {
          "lat": -33.580005,
          "lon": -70.568502,
        },
        {
          "lat": -33.580005,
          "lon": -70.566408,
        },
        {
          "lat": -33.580158,
          "lon": -70.566408,
        }
      ],
    },
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

    expect(firstRowCells.at(0).text()).toContain('05:08 - 18/01/2022');
    expect(firstRowCells.at(0).text()).toContain('Avenida Las Tranqueras 1571');
    expect(firstRowCells.at(1).text()).toContain('05:07 - 18/01/2022');
    expect(firstRowCells.at(1).text()).toContain('Calle Miraflores 222');
    expect(firstRowCells.at(2).text()).toContain('0.27 kms');
    expect(firstRowCells.at(2).text()).toContain('0.6 minutos');
  })
})
