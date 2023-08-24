import { ArxMap, Color, Vector3 } from 'arx-level-generator'
import { createLight } from 'arx-level-generator/tools'

export const addUpstairsLighting = (map: ArxMap) => {
  const light1 = createLight({
    position: new Vector3(9000, 500, 13223).sub(map.config.offset),
    radius: 1000,
    color: Color.fromCSS('#efb987'),
  })

  const light2 = createLight({
    position: new Vector3(9600, 500, 12800).sub(map.config.offset),
    radius: 700,
    color: Color.fromCSS('#efb987'),
  })

  const light3 = createLight({
    position: new Vector3(10500, 500, 13223).sub(map.config.offset),
    radius: 1000,
    color: Color.fromCSS('#efb987'),
  })

  map.lights.push(light1, light2, light3)
}
