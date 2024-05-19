import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../store/counter/counterSlice";
import { Link } from "react-router-dom";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Link to="/">Homepage</Link>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment By Amount</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment Async</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;