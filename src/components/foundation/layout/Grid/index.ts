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
  marginLeft?: string | object | number;
  marginRight?: string | object;
  marginTop?: string | object;
  width?: string | object;
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
  Container,
  Row: styled.div<IProps>`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
    ${propToStyle('flex')}
    ${propToStyle('marginLeft')}
    ${propToStyle('paddingLeft')}
    ${propToStyle('marginRight')}
    ${propToStyle('justifyContent')}
    ${propToStyle('marginTop')}
    ${propToStyle('width')}
  `
}
