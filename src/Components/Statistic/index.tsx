import React, {useEffect, useState} from 'react';
import {Line, StatisticBlock, StatisticGrid} from "./styles";
import {useUserListStore} from "../../Page/UserList/useUserListStore";

const Statistic = (props: {className: string}) => {
    const {className} = props
    const data = useUserListStore((state) => state.data)
    const [dataStatistic, setDataStatistic] = useState({
        male: 0,
        female: 0,
        fromElevenToTwenty: 0,
        fromTwentyOneToThirty: 0,
        fromThirtyOneToForty: 0,
        fromFortyOneToFifty: 0,
        fromFiftyOnePlus: 0
    })

    const {
        male,
        female,
        fromFiftyOnePlus,
        fromFortyOneToFifty,
        fromThirtyOneToForty,
        fromTwentyOneToThirty,
        fromElevenToTwenty
    } = dataStatistic

    useEffect(() => {
        // console.log(data)
        if (data.length > 0) {
            setDataStatistic(data.reduce((acc, {registered, gender, dob: {age}}) => {
                 if (gender === 'female') {
                     acc.female = acc.female+1
                 }
                 if (gender === 'male') {
                     acc.male = acc.male+1
                 }
                 if (age >= 11 && age <= 20) {
                     acc.fromElevenToTwenty = acc.fromElevenToTwenty+1
                 }
                 if (age >= 21 && age <= 30) {
                     acc.fromTwentyOneToThirty = acc.fromTwentyOneToThirty+1
                 }
                if (age >= 31 && age <= 40) {
                    acc.fromThirtyOneToForty = acc.fromThirtyOneToForty+1
                }
                if (age >= 41 && age <= 50) {
                    acc.fromFortyOneToFifty = acc.fromFortyOneToFifty+1
                }
                if (age >= 51) {
                    acc.fromFiftyOnePlus = acc.fromFiftyOnePlus+1
                }
                 return acc
             }, dataStatistic))
        }
    }, [data])

    return (
        <StatisticBlock className={className}>
            <div className='font-semibold fz-20'>{data.length} Users</div>
            <Line/>
            <div>
                <div className='font-semibold fz-16 mb-4'>
                    Age Groups
                </div>
                <StatisticGrid>
                    <div className="color-grey-light fz-12">11 to 20</div>
                    <div className="color-grey fz-14">{fromElevenToTwenty} users</div>

                    <div className="color-grey-light fz-12">21 to 30</div>
                    <div className="color-grey fz-14">{fromTwentyOneToThirty} users</div>

                    <div className="color-grey-light fz-12">31 to 40</div>
                    <div className="color-grey fz-14">{fromThirtyOneToForty} users</div>

                    <div className="color-grey-light fz-12">41 to 50</div>
                    <div className="color-grey fz-14">{fromFortyOneToFifty} users</div>

                    <div className="color-grey-light fz-12">51+</div>
                    <div className="color-grey fz-14">{fromFiftyOnePlus} users</div>
                </StatisticGrid>
            </div>
            <Line/>
            <div>
                <div className='font-semibold fz-16 mb-4'>
                    Gender Groups
                </div>
                <StatisticGrid>
                    <div className="color-grey-light fz-12">Male</div>
                    <div className="color-grey fz-14">{male} users</div>

                    <div className="color-grey-light fz-12">Female</div>
                    <div className="color-grey fz-14">{female} users</div>
                </StatisticGrid>
            </div>
        </StatisticBlock>
    );
};

export default Statistic;
