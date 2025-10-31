import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const publicDir = resolve(root, 'public')

async function generate() {
  const sources = [
    { svg: 'logo-bw-light.svg', outputs: [
      { name: 'logo-light.png', size: 128 },
      { name: 'favicon-32.png', size: 32 },
      { name: 'icon-192.png', size: 192 },
      { name: 'icon-512.png', size: 512 },
    ]},
    { svg: 'logo-bw-dark.svg', outputs: [
      { name: 'logo-dark.png', size: 128 },
      { name: 'favicon-32-dark.png', size: 32 },
      { name: 'icon-192-dark.png', size: 192 },
      { name: 'icon-512-dark.png', size: 512 },
    ]},
  ]

  for (const src of sources) {
    const svgBuf = await readFile(resolve(publicDir, src.svg))
    await Promise.all(
      src.outputs.map(({ name, size }) =>
        sharp(svgBuf)
          .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .png()
          .toFile(resolve(publicDir, name))
      )
    )
  }
  // eslint-disable-next-line no-console
  console.log('Generated PNGs for light/dark logos')
}

generate().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to generate PNGs:', err)
  process.exit(1)
})


