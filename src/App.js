import React, {useEffect, useReducer} from 'react';

const initialState = {count: 0, text: ""};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1, text: state.text};
        case 'decrement':
            return {count: state.count - 1, text: state.text};
        case 'key':
            return {count: state.count, text: state.text + action.key};
        default:
            throw new Error();
    }
}

export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const handleEsc = (event) => {
            dispatch({type: 'key', key: event.key})
            console.log(event.keyCode)
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <p>Text: {state.text}</p>
        </>
    );
}



