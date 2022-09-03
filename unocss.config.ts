import {
  defineConfig,
  Preset,
  presetAttributify,
  presetIcons,
  presetUno,
  SourceCodeTransformer,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
  transformerAttributify,
} from 'unocss-applet'

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (process.env.UNI_PLATFORM === 'h5') {
  presets.push(presetUno())
  presets.push(presetAttributify())
} else {
  presets.push(presetApplet())
  presets.push(presetRemToRpx())

  // don't change the order
  transformers.push(transformerAttributify())
  transformers.push(transformerApplet())
}

export default defineConfig({
  presets: [presetIcons(), ...presets],
  transformers: [transformerDirectives(), transformerVariantGroup(), ...transformers],
})
