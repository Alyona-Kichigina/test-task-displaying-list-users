import styled from "styled-components";

export const StatisticBlock = styled.div`
  padding: 24px;
  border-radius: var(--border-radius);
  background: var(--black-light-2);
  width: 332px;
  height: 100%;
`

export const Line = styled.div`
    width: 100%;
  height: 1px;
  background: var(--black-light-3);
  margin-top: 24px;
  margin-bottom: 24px;
`

export const StatisticGrid = styled.div`
  display: grid;
  grid-template-columns: 44px auto;
  grid-column-gap: 12px;
  grid-row-gap: 16px;
  font-weight: 500;
`
