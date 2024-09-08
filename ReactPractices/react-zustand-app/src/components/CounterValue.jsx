import countStore from "../store/countStore";

const CounterValue = () => {
    const count = countStore(state => state.count);

    return <div>CounterValue: {count}</div>;
};

export default CounterValue;
