import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/counter";
import { increase, decrease, setDiff } from "./../modules/counter";

function CounterContainer() {
  const { number, diff } = useSelector(
    (store) => ({
      number: store.counter.number,
      diff: store.counter.diff,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
