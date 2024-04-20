import React, {useState} from 'react';
// @ts-ignore
import SearchInput, {createFilter} from 'react-search-input'
import {useUserListStore} from "../../Page/UserList/useUserListStore";
import './styles.scss'

const KEYS_TO_FILTERS = ['name.first', 'name.last', 'email', 'location.city', 'location.state', 'location.country']

// по полям: name, email, phone, birthday, address
const InputSearch = () => {
    const data = useUserListStore((state) => state.data)
    const [searchTerm, setSearchTerm] = useState('')
    const filteredData = data.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    console.log(filteredData)
    return (
        <>
            <SearchInput className="search-input" onChange={setSearchTerm} />
        </>
    );
};

export default InputSearch;
