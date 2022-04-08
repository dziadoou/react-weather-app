import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 85vh;
  padding: 2rem 0rem;
  display: grid;
  row-gap: 3rem;

  h2 {
    text-align: center;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error {
    display: grid;
    justify-content: center;
    align-items: center;

    h2 {
      text-align: center;
      word-break: break-word;
    }
  }
`
