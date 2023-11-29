import styled from 'styled-components'

export const WorkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #392e4a;
  margin: 30px 0;
  width: 600px;
  text-align: center;
`

export const WorkText = styled.span`
  color: #fff;
`

export const WorkTitle = styled(WorkText)`
  font-family: 'bold';
  font-size: 20px;
  margin-bottom: 10px;
`

export const WorkAuthors = styled(WorkText)`
  font-family: 'regular';
  font-size: 16px;
`