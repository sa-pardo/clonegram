import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(8px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `
}
