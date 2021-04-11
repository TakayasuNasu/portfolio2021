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
  padding-left: 10px;
  padding-right: 10px;
  width: 100% - 20px;
`

export const contentsSizeMedium = () => `
  padding-left: 25px;
  padding-right: 25px;
  width: 100% - 50px;
`

export const contentsSizeLarge = () => `
  padding-left: 25px;
  padding-right: 25px;
  max-width: 930px;
`
