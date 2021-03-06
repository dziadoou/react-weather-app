import styled from 'styled-components'

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: calc(50% - 25px);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-top-color: rgba(0, 0, 0, 1);
  animation: rotate 0.7s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`

export default Loader
