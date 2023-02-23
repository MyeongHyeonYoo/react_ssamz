import React from 'react'
import { CountryType } from './App';
import CountryItem from './CountryItem'; 

// type CountryType = {
//     no: number;
//     country: string;
//     visited: boolean;
// };

type CountryListPropsType = {
    countries: Array<CountryType>
};

// const CountryList = () => {
//     let list: Array<CountryType> = [
//         { no: 1, country: "이집트", visited: false },
//         { no: 2, country: "일본", visited: true },
//         { no: 3, country: "피지", visited: false },
//         { no: 4, country: "콜롬비아", visited: false },
//     ];

const CountryList = (props:CountryListPropsType) => {
    const list = props.countries;
    let countries = list.map((item, index) => {
        // return (
        //     <li key={item.no}
        //     className={item.visited ? "list-group-item active" : "list-group-item"}>
        //         {item.country}
        //     </li>
        // );
        return <CountryItem key={item.no} countryitem={item} />
    
    // cf) [삼항 연산식]을 작성하지 않고 코드를 장황하게 작성하였을 때
    // 실질적으로 JSX에서는 if문 사용 x
    // let countryClass: string = "";
    // if (item.visited) {
    //     countryClass = 'list-group-item active'; 
    // } else {
    //     countryClass = 'list-group-item';
    // }

    // return (
    //     <li key={item.no} className={countryClass}>
    //         {item.country}
    //     </li>
    // )

    });

    return <ul className="list-group">{countries}</ul>
};

export default CountryList;