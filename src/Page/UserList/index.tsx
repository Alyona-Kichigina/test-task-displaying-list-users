import React, {useEffect, useState} from 'react';
import Card from "../../Components/Card/Card";
import {GridList} from "./styles";
import Statistic from "../../Components/Statistic";
import {useUserListStore} from "./useUserListStore";
import {ScrollBar} from "../../Components/ScrollBar/ScrollBar";
import InputSearch from "../../Components/InputSearch/InputSearch";

const UserList = () => {
    const data = useUserListStore((state) => state.data)
    const getData = useUserListStore((state) => state.getData)
    const deleteCard = useUserListStore((state) => state.deleteCard)
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="bg-black-dark flex-container p-8">
            <div className="flex mb-6 justify-between items-center">
                <InputSearch/>
                <div className='fz-14 color-red font-semibold cursor-pointer'>
                    Refresh Users
                </div>
            </div>
            <div className="flex h-full overflow-hidden relative">
                <ScrollBar>
                    <GridList>
                            {data.map((item) => (
                                <Card key={item.cell} data={item} onDelete={(id) => deleteCard(id)} />
                            ))}
                    </GridList>
                </ScrollBar>
                <Statistic className='ml-4'/>
            </div>
        </div>
    );
};

export default UserList;
