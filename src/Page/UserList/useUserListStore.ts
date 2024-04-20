import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import axios from "axios";

export interface ICard {
    email: string;
    phone: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
    };
    registered: {
        date: string;
    },
    cell: string,
    gender: string,
    dob: {
        age: number
    }
}

interface IUseUserListStore {
    data: ICard[],
    getData: () => void;
    deleteCard: (id: string) => void
}

export const useUserListStore = create<IUseUserListStore>()(
    immer((set, get) => ({
        data: [],
        getData: async () => {
            try {
                const {data: {results}} =  await axios.get('https://randomuser.me/api/?results=100')
                set({data: results})
            } catch (e) {
                console.error(e)
            }
        },
        deleteCard: (id) => {
            set({data: get().data.filter(({cell}) => cell !== id)})
        }
    }))
)
