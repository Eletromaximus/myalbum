import { css, FlattenSimpleInterpolation } from 'styled-components'
import breakpoints from './breakpoints'

export default function breakpointsMedia (
  cssByBreakpoint: Record<string, FlattenSimpleInterpolation>
) {
  const breakpointName = Object.keys(breakpoints)

  return breakpointName
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      (breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    )
}
