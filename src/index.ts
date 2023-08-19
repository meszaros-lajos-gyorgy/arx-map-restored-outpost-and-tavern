import { ArxPolygonFlags } from 'arx-convert/types'
import { ArxMap, Color, Settings, Vector3 } from 'arx-level-generator'
import { createZone } from 'arx-level-generator/tools'
import { compile } from 'arx-level-generator/utils'
import { Box3 } from 'three'

const settings = new Settings({
  levelIdx: parseInt(process.env.levelIdx ?? '1'),
  outputDir: process.env.outputDir,
  seed: process.env.seed,
  version: process.env.version === 'premium' ? 'premium' : 'normal',
  calculateLighting: process.env.calculateLighting === 'false' ? false : true,
  mode: process.env.mode === 'development' ? 'development' : 'production',
  originalLevelFiles: process.env.originalLevelFiles,
})

const map = await ArxMap.fromOriginalLevel(12, settings)
map.meta.mapName = 'Outpost and Tavern'

// -----------------------------------

map.removePortals()

const texturesToBeRemoved = [
  // ...
  '[wood]_blacksmith_ceiling1',
  '[wood]_blacksmith_ceiling2',
]

const blocksToBeRevoved = [
  // ...
  new Box3(new Vector3(9700, 850, 12920), new Vector3(9900, 1110, 13400)),
]

const numberOfPolygons = map.polygons.length
for (let i = numberOfPolygons - 1; i > 0; i--) {
  const polygon = map.polygons[i]

  let shouldBeRemoved = false

  if (typeof polygon.texture !== 'undefined') {
    const textureName = polygon.texture.filename.toLowerCase()
    for (let match of texturesToBeRemoved) {
      if (textureName.includes(match)) {
        shouldBeRemoved = true
        break
      }
    }
  }

  if (!shouldBeRemoved) {
    for (let box of blocksToBeRevoved) {
      if (polygon.isWithin(box)) {
        shouldBeRemoved = true
        break
      }
    }
  }

  if (shouldBeRemoved) {
    map.polygons.splice(i, 1)
  } else {
    polygon.flags = polygon.flags | ArxPolygonFlags.DoubleSided
  }
}

const skyChanger = createZone({
  name: 'sky_changer',
  position: map.player.position.clone(),
  size: new Vector3(100, Infinity, 100),
  backgroundColor: Color.fromCSS('lightblue').darken(50),
})

map.zones.push(skyChanger)

// -----------------------------------

map.finalize()
await map.saveToDisk(settings)

await compile(settings)

console.log('done')
