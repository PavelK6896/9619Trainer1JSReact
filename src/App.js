import React, {useEffect, useReducer} from 'react';

const initialState = {count: 0, text: "1", data: 0, data2: 0, time1: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1, text: state.text};
        case 'decrement':
            return {count: state.count - 1, text: state.text};
        case 'key':

            return {
                count: action.count,
                text: state.text + action.key,
                data: action.data,
                data2: action.data2,
                time1: action.time1
            };
        default:
            throw new Error();
    }
}
export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const handleEsc = (event) => {
            if (state.data === 0){
                dispatch({type: 'key',count: state.count + 1,  key: event.key, data: new Date().getTime(), data2: 0, time1: 0 })
            }else{
                const dt = new Date().getTime() - state.data
                dispatch({type: 'key', count: state.count + 1, key: event.key, data: state.data, data2: dt, time1: dt/state.count})
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [state]);

    return (
        <>
            <p>Count: {state.count} this is time {Math.round(state.time1) } ms between pressing </p>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <p>Text: {state.text}</p>
        </>
    );
}
