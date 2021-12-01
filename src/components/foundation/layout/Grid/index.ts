import styled, { css } from 'styled-components'
import breakpointsMedia from '../../utils/breakpointsMedia'
import propToStyle from '../../utils/propToStyle'

interface IProps {
  offset?: number | object;
  value?: number | object;
  flex?: number | object;
  display?: string | object;
  flexDirection?: string | object;
  alignItems?: string | object;
  justifyContent?: string | object;
  marginLeft?: string | object;
  marginRight?: string | object;
  marginTop?: string | object;
  marginBottom?: string | object;
  paddingRight?: string | object;
  paddingLeft?: string | object;
}

export const Container = styled.div<IProps>`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  max-width: initial; 

  ${breakpointsMedia({
    sm: css`
      max-width: 576px;
    `,
    md: css`
        max-width: 768px;
        padding-right: 16px;
        padding-left: 16px
      `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `
  })}
  ${propToStyle('display')}
  ${propToStyle('marginTop')}
  ${propToStyle('flex')}
  ${propToStyle('justifyContent')}
`

export const Grid = {
  Container
  // Col: styled.div<IProps>`
  //   padding-right: 16px;
  //   padding-left: 16px;
  //   flex-basis: 0;
  //   flex-grow: 1;
  //   max-width: 100%;

  //   ${({ value }: number | any) => {
  //     if (typeof value === 'number') {
  //       return css`
  //         flex-grow: 0;
  //         flex-shrink: 0;
  //         flex-basis: ${(100 * value) / 12}%;
  //         max-width: ${(100 * value) / 12}%;
  //       `
  //     }

  //     return breakpointsMedia({
  //       ...(value.xs && {
  //         xs: css`
  //           flex-grow: 0;
  //           flex-shrink: 0;
  //           flex-basis: ${(100 * value.xs) / 12}%;
  //           max-width: ${(100 * value.xs) / 12}%;
  //         `
  //       }),
  //       ...(value.sm && {
  //         sm: css`
  //           flex-grow: 0;
  //           flex-shrink: 0;
  //           flex-basis: ${(100 * value.sm) / 12}%;
  //           max-width: ${(100 * value.sm) / 12}%;
  //         `
  //       }),
  //       ...(value.md && {
  //         md: css`
  //           flex-grow: 0;
  //           flex-shrink: 0;
  //           flex-basis: ${(100 * value.md) / 12}%;
  //           max-width: ${(100 * value.md) / 12}%;
  //         `
  //       }),
  //       ...(value.lg && {
  //         lg: css`
  //           flex-grow: 0;
  //           flex-shrink: 0;
  //           flex-basis: ${(100 * value.lg) / 12}%;
  //           max-width: ${(100 * value.lg) / 12}%;
  //         `
  //       }),
  //       ...(value.xl && {
  //         xl: css`
  //           flex-grow: 0;
  //           flex-shrink: 0;
  //           flex-basis: ${(100 * value.xl) / 12}%;
  //           max-width: ${(100 * value.xl) / 12}%;
  //         `
  //       })
  //     })
  //   }}

  //   ${({ offset }: number |any) => {
  //     if (offset === undefined) {
  //       return css``
  //     }

  //     if (typeof offset === 'number') {
  //       return css`
  //         margin-left: ${(100 * offset) / 12}%
  //       `
  //     }

  //     return breakpointsMedia({
  //       ...(offset.xs && {
  //         xs: css`
  //           margin-left: ${(100 * offset.xs) / 12}%;
  //         `
  //       }),
  //       ...(offset.sm && {
  //         sm: css`
  //           margin-left: ${(100 * offset.sm) / 12}%;
  //         `
  //       }),
  //       ...(offset.md && {
  //         md: css`
  //           margin-left: ${(100 * offset.md) / 12}%;
  //         `
  //       }),
  //       ...(offset.lg && {
  //         lg: css`
  //           margin-left: ${(100 * offset.lg) / 12}%;
  //         `
  //       }),
  //       ...(offset.xl && {
  //         xl: css`
  //           max-width: ${(100 * offset.xl) / 12}%;
  //         `
  //       })
  //     })
  //   }}

  //   ${propToStyle('display')}
  //   ${propToStyle('alignItems')}
  //   ${propToStyle('justifyContent')}
  //   ${propToStyle('flexDirection')}
  //   ${propToStyle('paddingRight')}

  // `
}
