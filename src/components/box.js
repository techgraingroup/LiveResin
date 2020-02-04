import styled from "styled-components"

export const Box = styled.div`
  padding-left: ${ props => props.left ? `${props.left}px` : '135px' };
  padding-right: ${ props => props.right ? `${props.right}px` : '135px' };
  padding-top: ${ props => props.top ? `${props.top}px` : '120px' };
  padding-bottom: ${ props => props.bottom ? `${props.bottom}px` : '120px' };
  ${ props => props.bgColor && `
    background-color: ${props.bgColor};
  ` }
  ${props => props.bgImage && `
    background-image: url(${props.bgImage});
  `}
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`
