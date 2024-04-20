import React, {FC, useState} from 'react';
import {AddressText, BtnBasket, CardBlock, List, UserImg} from './styles'
import {ICard} from "../../Page/UserList/useUserListStore";


const Card = (props: { data: ICard, onDelete: (id: string) => void }) => {
    const {
        email,
        phone,
        name: {first, last},
        picture: {medium},
        registered: {date},
        location: {city, state, country},
        cell
    } = props.data
    const [active, setActive] = useState(false)
    const deleteCard = () => {
        props.onDelete(cell)
    }
    return (
        <CardBlock
            className='bg-black-light font-medium'
            active={active}
            onClick={() => setActive(true)}
        >
            <div className='pb-4'>
                <div className="flex">
                    <div className="user-img pr-4">
                        <UserImg img={medium}/>
                    </div>
                    <div>
                        <div className='fz-20 font-semibold color-grey-light leading-6'>
                            {first} {last}
                        </div>
                        <div className='font-medium color-grey-light pt-2'>
                            {email}
                        </div>
                    </div>
                    {/*{active && (<img src="./img/basket-icon.png" alt=""/>)}*/}
                    {active && (<BtnBasket
                            onClick={deleteCard}
                        ></BtnBasket>
                    )}
                </div>
            </div>
            <List>
                <div className="color-grey  fz-12">
                    Phone No
                </div>
                <div className="color-grey-light fz-14">{phone}</div>

                <div className="color-grey ">
                    Birthday
                </div>
                <div className="color-grey-light">{date}</div>

                <div className="color-grey ">
                    Address
                </div>
                <AddressText className="color-grey-light">{city} {state} {country}</AddressText>
            </List>
        </CardBlock>
    );
};

export default Card;
