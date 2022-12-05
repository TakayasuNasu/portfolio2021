import { defaultBreakpoints, generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  ...defaultBreakpoints,
  laptop: '1320px',
  large: '1024px',
})

export default customMedia
