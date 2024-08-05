import React from 'react'
const Button4 = (props) => {
    return (
        <>
            <button className='bg-blue-500 px-2 py-3 my-2 ml-2 rounded-tl-[0.5rem]' >
                {props.name}
            </button>
            <ul>
                {props?.data?.map((data,index )=>{
                    return <li key={index}>{data}</li>
                })}
            </ul>
        </>

    )
}
export default Button4
/*
* [2,3,4,5,6]
* array.map((value, index)=>{
*   return  I am ${value} at index ${index};
* })
* */
