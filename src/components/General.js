import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem;
`

export const Content = styled.div`
  margin-left: 20rem;
  margin-right: 2rem;
`

export const Form = styled.div`
  margin-top: 2rem;
`

export const FormRow = styled.div`
  @media(min-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -.625rem;
  }

  &:last-child {
    .form-item {
      margin-bottom: 0;
    }
  }
`

export const FormCol = styled.div`
  @media(min-width: 800px) {
    flex-basis: 50%;
    width: 50%;
    padding: 0 .625rem;
  }
`

export const FormLabel = styled.div`
  width: calc(100% - 1.25rem);
`
