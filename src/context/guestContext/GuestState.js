import React, { useReducer } from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'


const GuestState = (props) => {
    const initialState ={
        guests:[
            {
                id:1,
                name:"abhi",
                phone:"1234555",
                dietary:"veg",
                isConfirmed:false
            },
            {
                id:2,
                name:"abhi",
                phone:"1234555",
                dietary:"veg",
                isConfirmed:true
            },{
                id:3,
                name:"abhi",
                phone:"1234999225",
                dietary:"veg",
                isConfirmed:false
            },{
                id:4,
                name:"abhi",
                phone:"1234555",
                dietary:"non-veg",
                isConfirmed:true
            }
        ]
    }
    const [state, dispacth]=useReducer(guestReducer,initialState)
    return (
    <GuestContext.Provider
    value={{
        guests: state.guests
    }}
    >{props.children}</GuestContext.Provider>
    )
}
 export default GuestState