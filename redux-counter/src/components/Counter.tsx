// import { useStoreDispatch, useStoreSelector } from '../store/old_store'
import type {RootState } from '../store'
import { decrement, increment, incrementBy } from '../store'
import { useDispatch, useSelector, } from 'react-redux'

/*

function Counter() {

  const counter = useStoreSelector<number>(s => s.counter)

  const {dispatch, ActionType, proxiedDispatch} = useStoreDispatch()

  return (
    <>
      <h3>the counter</h3>
      <h4>{ counter }</h4>
      <button onClick={() => proxiedDispatch.increment({payload: 3})} >increment</button>
      <button onClick={() => dispatch({type: ActionType.DECREMENT})} >decremement</button>
    </>
  );
}

*/

function Counter() {

  const counter = useSelector<RootState, number>(s => s.counter.value)

  const dispatch = useDispatch()

  return (
    <>
      <h3>the counter</h3>
      <h4>{ counter }</h4>
      <button aria-label="Increment value" onClick={() => dispatch(increment())} >increment</button>
      <button aria-label="Increment value" onClick={() => dispatch(incrementBy(3))} >increment 3</button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())} >decremement</button>
    </>
  );
}

export default Counter;
