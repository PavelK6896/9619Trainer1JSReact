import React, {useEffect, useReducer} from 'react';

const content1 = [
    "background-color: transparent; = фон-цвет: прозрачный;",
    "display: block;",
    "display: flex;",
    "flex-direction: column;",
    "padding-left: 0;",
    "margin-bottom: 0;",
    "list-style: none;"
]

const initialState = {
    it: 0,
    text2: content1[0],
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
            return {
                it: 0,
                text2: content1[0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0
            }

        case 'nextHandler':
            console.log("nextHandler ", state.it)
            return {
                it: state.it + 1,
                text2: content1[state.it + 1],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0
            }
        case 'key':
            if (state.text2[0] === action.key) {
                if (state.text2.length === 1) {
                    return {
                        it: state.it + 1,
                        text2: content1[state.it + 1],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0
                    }
                } else {
                    return {
                        it: state.it,
                        text2: state.text2.substr(1),
                        textInput: state.textInput + action.key,
                        data: action.data,
                        data2: action.data2,
                        time1: action.time1,
                        right: state.right + 1,
                        wrong: state.wrong
                    }
                }

            } else {
                return {
                    it: state.it,
                    text2: state.text2,
                    textInput: state.textInput,
                    data: action.data,
                    data2: action.data2,
                    time1: action.time1,
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
                    key: event.key,
                    data: new Date().getTime(),
                    data2: 0,
                    time1: 0
                })
            } else {
                const betweenData = new Date().getTime() - state.data
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: state.data,
                    data2: betweenData,
                    time1: Math.round(betweenData / state.right)
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
            <div>{content1.length}/{state.it + 1}</div>
            <pre style={{
                display: "inline-block",
                backgroundColor: '#888',
                fontSize: '35px'
            }}>{state.text2}</pre>

            <div> Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2.length} </div>
            <div>Time {state.time1} ms</div>

            <p style={{
                fontSize: '35px'
            }}>Text: {state.textInput} </p>

            <button onClick={startHandler}>сначало</button>
            <button onClick={nextHandler}>next</button>

            {
                content1.map((number) =>
                    <p key={number.toString()} value={number}> {number}</p>)
            }
            {/*<div>EEEEEEE {    Array.from(result, r => r.join("==")) }</div>*/}
            {/**/}
            {
                // Array.from(content1 , r => r.join("==")).map(o => {
                //     return (<p key={o.toString()} value={o}> {o}</p>)
                // })
            }
            <p>EEEEEEEEEeeee</p>

            {
                Object.keys(state).map((number) =>
                    <p key={number.toString()} value={number}> {number}</p>)
            }
        </div>
    );
}
