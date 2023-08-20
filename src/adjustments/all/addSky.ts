import { ArxMap, Color, Vector3 } from 'arx-level-generator'
import { createZone } from 'arx-level-generator/tools'

export const addSky = (map: ArxMap) => {
  const skyChanger = createZone({
    name: 'sky_changer',
    position: map.player.position.clone().add(new Vector3(0, 700, 0)),
    size: new Vector3(100, Infinity, 100),
    backgroundColor: Color.fromCSS('lightblue').darken(50),
  })

  map.zones.push(skyChanger)
}
