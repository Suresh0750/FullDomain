import {createSlice} from '@reduxjs/toolkit'


const CountSlice = createSlice({
    name : 'suresh',
    initialState : {
        count :0
    },
    reducers :{
        increament : (state,action)=>{
            state.count+=1
        },
        decrement : (state,action)=>{
            state.count-=1
        }

    }
})


export const {increament,decrement} = CountSlice.actions

export default CountSlice.reducer
