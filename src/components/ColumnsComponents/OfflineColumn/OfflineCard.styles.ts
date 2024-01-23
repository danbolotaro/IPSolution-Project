import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme['--light-red']};
  border: 2px solid ${(props) => props.theme['--light-red']};
  color: black;
  border-radius: 8px;
  margin-top: 1.25rem;
  margin-left: 1rem;
  margin-right: 1rem;

  p {
    line-height: 1.6;
  }
`
export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IconDiv = styled.div`
  color: black;

  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: white;
  }
`
