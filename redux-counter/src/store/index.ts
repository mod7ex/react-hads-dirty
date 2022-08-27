import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export type CounterState = typeof initialState;

export const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    increment: (state) => { state.value += 1 },

    decrement: (state) => { state.value -= 1 },

    incrementBy: (state, action) => { state.value += action.payload },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementBy, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

export const store = configureStore({ reducer: { counter: counterSlice.reducer } })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// ***************************************************

// import { configureStore, createSlice } from '@reduxjs/toolkit'

// const initialState = {counter: 0}

// const counterSlice = createSlice({
//     name: 'counter',

//     initialState,

//     reducers: {
//         increment(state, action) {
//             state.counter++
//         },
//         decrement(state, action) {
//             state.counter--
//         }
//     }
// })

// export const actions = counterSlice.actions

// const store = configureStore({ reducer: counterSlice.reducer })

// export default store