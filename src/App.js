import React, {useEffect, useReducer} from 'react';


const initialState = {
    it: 0,
    text2: [
        "background-color: transparent; = фон-цвет: прозрачный;",
        "display: block;",
        "display: flex;",
        "flex-direction: column;",
        "padding-left: 0;",
        "margin-bottom: 0;",
        "list-style: none;"
    ],
    textInput: "",

    data: 0,
    data2: 0,
    time1: 0,
    right: 0,
    wrong: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'startHandler':
            console.log("startHandler")
            return initialState

        case 'nextHandler':
            console.log("nextHandler")
            const ne = state
            ne.it += 1
            return ne

        case 'key':
            if (state.text2[state.it][0] === action.key) {
                const ke = state

                ke.text2[state.it] = state.text2[state.it].substr(1)
                ke.textInput = state.textInput + action.key
                ke.right += 1
                ke.time1 = action.time1

                return {
                    it: state.it,
                    textInput: state.textInput,
                    data: action.data,
                    data2: action.data2,





                }
            } else {
                return {
                    it: state.it,
                    count: action.count,
                    textInput: state.textInput,
                    data: action.data,
                    data2: action.data2,
                    time1: action.time1,
                    text2: state.text2,
                    right: state.right,
                    wrong: state.wrong + 1
                }
            }


        default:
            throw new Error();
    }
}

export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        const handleEsc = (event) => {


            if (event.keyCode === 16 || event.keyCode === 8 || event.keyCode === 18) {
                return
            }

            if (state.data === 0) {
                dispatch({
                    type: 'key',
                    count: state.count + 1,
                    key: event.key,
                    data: new Date().getTime(),
                    data2: 0,
                    time1: 0
                })
            } else {
                const dt = new Date().getTime() - state.data
                dispatch({
                    type: 'key',
                    count: state.count,
                    key: event.key,
                    data: state.data,
                    data2: dt,
                    time1: dt / state.count
                })
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [state]);


    function startHandler() {
        dispatch({
            type: 'startHandler'
        })
    }


    function nextHandler() {
        dispatch({
            type: 'nextHandler'
        })
    }


    return (
        <div style={{
            paddingLeft: '30vw',

        }}>
            <pre style={{
                display: "inline-block",
                backgroundColor: '#888',
                fontSize: '35px'
            }}>{state.text2[state.it]}</pre>
            <h3> Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2[state.it].length} </h3>
            <h3>Time {Math.round(state.time1)} ms</h3>
            <p style={{
                fontSize: '35px'
            }}>Text: {state.textInput} *</p>
            <button onClick={startHandler}>сначало</button>
            <button onClick={nextHandler}>next</button>
        </div>
    );
}
