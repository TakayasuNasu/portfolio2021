export const vw = (distance: number) => (distance / 375) * 100 + 'vw'
export const pseudo = (w: String, h: String) => `
  content: '';
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: ${w};
  height: ${h};
`

export const contentsSizeSmall = () => `
  width: calc(100% - 20px);
`

export const contentsSizeMedium = () => `
  padding-left: 25px;
  padding-right: 25px;
  width: calc(100% - 50px);
`

export const contentsSizeLarge = () => `
  padding-left: 25px;
  padding-right: 25px;
  max-width: 930px;
`

export const shadow = () => `
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);
`