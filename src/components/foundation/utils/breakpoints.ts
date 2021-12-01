export interface IBreakpoints {
  [unit: string]: number
}
const breakpoints: IBreakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
}

export default breakpoints
