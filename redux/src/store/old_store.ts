import { createStore, Reducer } from 'redux'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { useSelector } from 'react-redux'

type Merge<A, B> = A extends object ? 
    (
        B extends object ? { [K in (keyof A | keyof B)]: K extends keyof B ? B[K] : (K extends keyof A ? A[K] : undefined) } : A
    ) :  ( B extends object ? B : {} )

function VOIDED (...args: any[]) {}

export interface State  { counter: number }

export enum ActionType  {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
}

const string_actions = ['increment', 'decrement'] as const

type ActionName = (typeof string_actions)[number]

// const isAction = (str: any): str is keyof typeof ActionType => string_actions.includes(str)

const reducer: Reducer<State, {type: ActionType}> = (state = {counter: 0}, action) => {

    console.log(action)

    if(action.type === ActionType.INCREMENT) { return {counter: state.counter + 1} }

    if(action.type === ActionType.DECREMENT) { return {counter: state.counter - 1} }

    return state
}

type DispatcherProxy = {[K in ActionName]: <T extends {}>(v?: T) => ReturnType<Dispatch<Merge<{type: ActionType}, T>>>};

export const useStoreDispatch = <T extends Dispatch<{type: ActionType}>>()=> {
    
    const dispatch = useDispatch<T>()

    // @ts-ignore
    const proxiedDispatch = new Proxy<DispatcherProxy>({}, {
        get(_, key: ActionName) {

            if(!string_actions.includes(key)) return VOIDED

            return (v = {}) => { return dispatch.call(null, {type: ActionType[key.toUpperCase() as keyof typeof ActionType], ...v}); }
        },
    })

    return {
        dispatch,
        ActionType,
        proxiedDispatch
    }
}

export const useStoreSelector = <T = unknown>(...args: Parameters<typeof useSelector<State, T>>) => {
    return useSelector<State, T>(...args)
}

const store = createStore(reducer)

export default store