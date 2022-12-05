import { css } from 'styled-components'
import media from '@/styles/custom-styled-media-query'

export const fontSmall = css`
  font-size: clamp(10px, 16 / 426 * 100vw, 16px);
  ${media.greaterThan('medium')`
    font-size: clamp(10px, 18 / 1920 * 100vw, 18px);
  `}
`

export const fontMedium = css`
  font-size: clamp(10px, 18 / 426 * 100vw, 18px);
  ${media.greaterThan('medium')`
    font-size: clamp(12px, 20 / 1920 * 100vw, 20px);
  `}
`

export const fontLarge = css`
  font-size: clamp(10px, 20 / 426 * 100vw, 20px);
  ${media.greaterThan('medium')`
    font-size: clamp(12px, 24 / 1920 * 100vw, 24px);
  `}
`

export const contentsSizeSmall = () => `
  width: calc(100% - 20px);
`

export const vmin = (num: number, base = 426) => {
  const min = Math.floor((num / base) * 100)
  return `min(${min}vw, ${num}px)`
}

export const vmax = (num: number, base = 426) => {
  const min = Math.floor((num / base) * 100) / 100
  return `max(${min}vw, ${num}px)`
}

// toolbox
export const _util = {
  shadow: `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);`,
  pseudo: `
    content: '';
    position: absolute;
    display: block;
  `,
}
