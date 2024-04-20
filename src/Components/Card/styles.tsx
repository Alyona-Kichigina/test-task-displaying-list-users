import styled from "styled-components";

interface CardBlock {
    active: boolean;
}

export const CardBlock = styled.div<CardBlock>`
  padding: 20px;
  border-radius: var(--border-radius);
  height: 196px;
  width: 332px;
  border: 1px solid ${(props) => props.active ? '#CF7B5A33' : '#1A1C23'};
  cursor: pointer;
  position: relative;
`
interface UserImg {
    img: string;
}
export const UserImg = styled.div<UserImg>`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 57px auto;
  grid-column-gap: 12px;
  grid-row-gap: 16px;
`

export const AddressText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const BtnBasket = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 0;
  top: 0;
  border-width: 0px 0px 1px 1px;
  border-style: solid;
  border-color: #FF2C4733;
  border-radius: 0px 16px 0px 16px;
  padding: 10px;
`
