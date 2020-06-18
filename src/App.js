import React, {useEffect, useReducer, useState} from 'react';
import spring1 from './data1/spring1.json';
import css1 from './data1/css1.json';
import css2 from './data1/css2.json';
import css3 from './data1/css3.json';
import css4 from './data1/css4.json';
import css5 from './data1/css5.json';

import word1 from './data1/word1.json';
import words1 from './data1/words1.json';
import setColor1 from "./f1";
import {html1, java1, js1, bootsrap1} from './data1/d1'

let next2 = false;
let arr1 = java1;
const res = new Map()

export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 17) {
                if (next2) {
                    next2 = false
                } else {
                    next2 = true
                }
            } else {
                if (event.keyCode === 90 && next2) {
                    dispatch({type: 'nextHandler'})
                    next2 = false
                    return;
                } else if (event.keyCode === 88 && next2) {
                    dispatch({type: 'check1'});
                    next2 = false
                    return;
                } else {
                    next2 = false
                }
            }

            if (event.keyCode === 16 || event.keyCode === 8 || event.keyCode === 18 || event.keyCode === 17) {
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
        res.clear();
        dispatch({type: 'startHandler'})
        refBtnStart.current.focus();
        refBtnStart.current.blur()

    }

    function nextHandler() {
        dispatch({type: 'nextHandler'})
        refBtnNext.current.blur()
    }

    function check1Handler() {
        dispatch({type: 'check1'});
        refCheck.current.blur()
    }


    const refBtnStart = React.createRef();
    const refBtnNext = React.createRef();
    const refCheck = React.createRef();


    const [state2, setState2] = useState(
        {
            vis: false,
        })

    let styleText1;
    if (state2.vis) {
        styleText1 = {
            border: '2px solid #555',
            display: 'block',
            height: '40vh',
            maxHeight: '40vh',
            overflow: "auto",
        }
    } else {
        styleText1 = {
            border: '2px solid #555',
            display: 'none',

        }
    }

    function btnText1() {
        setState2({
            vis: !state2.vis,
            check1: state2.check1
        })
    }


    return (

        <div style={{
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            maxHeight: '100vh',
            height: '100vh',
            display: "flex",
            flexDirection: "column",

        }}>

            {/*wrapper*/}
            <div style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>


                <div style={{
                    paddingLeft: '2px',
                    border: '2px solid #777',
                    maxWidth: '10vw',
                    width: '10vw',
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                }}>


                    <button onClick={() => {
                        arr1 = css1;
                        startHandler();
                    }}>css1
                    </button>
                    <button onClick={() => {
                        arr1 = css2;
                        startHandler();
                    }}>css2
                    </button>
                    <button onClick={() => {
                        arr1 = css3;
                        startHandler();
                    }}>css3
                    </button>
                    <button onClick={() => {
                        arr1 = css4;
                        startHandler();
                    }}>css4
                    </button>
                    <button onClick={() => {
                        arr1 = css5;
                        startHandler();
                    }}>css5
                    </button>


                    <button onClick={() => {
                        arr1 = spring1;
                        startHandler();
                    }}>spring1
                    </button>

                    <button onClick={() => {
                        arr1 = word1;
                        startHandler();
                    }}>word1
                    </button>

                    <button onClick={() => {
                        arr1 = words1;
                        startHandler();
                    }}>words1
                    </button>

                    <button onClick={() => {
                        arr1 = html1;
                        startHandler();
                    }}>html1
                    </button>
                    <button onClick={() => {
                        arr1 = js1;
                        startHandler();
                    }}>js1
                    </button>
                    <button onClick={() => {
                        arr1 = java1;
                        startHandler();
                    }}>java1
                    </button>
                    <button onClick={() => {
                        arr1 = bootsrap1;
                        startHandler();
                    }}>bootsrap1
                    </button>

                </div>


                <div style={{
                    paddingLeft: '2px',
                    border: '2px solid #777',
                    maxWidth: '40vw',
                    width: '40vw',
                    overflow: "auto",
                }}>
                    <div>
                        Trainer
                    </div>
                    <div>{arr1.length}/{state.it + 1}
                        <label><input
                            type="checkbox"
                            onChange={check1Handler}
                            ref={refCheck}
                            checked={state.check1}

                        /> cycle (ctrl + x)</label>
                    </div>


                    <pre style={{
                        display: "inline-block",
                        backgroundColor: '#888',
                        fontSize: '35px'
                    }}>{state.text2}</pre>
                    <div style={{
                        backgroundColor: '#ececec',
                        fontSize: '25px',
                        marginTop: '-30px'
                    }}
                    >{state.text1}</div>


                    <div> Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2.length} </div>
                    <div>Time {state.time1} ms</div>

                    <p style={{
                        fontSize: '30px'
                    }}>Text: {state.textInput} </p>
                    <div>
                        <button onClick={startHandler} ref={refBtnStart}>сначало</button>
                        <button onClick={nextHandler} ref={refBtnNext}>next (ctrl + z)</button>
                        <button onClick={btnText1}>Text</button>
                    </div>

                    <br/>
                    {/*// локальное время*/}
                    <div style={{
                        maxWidth: '400px',
                    }}>
                        {state.time99.map((text, index) =>
                            <i key={index} value={text} style={setColor1(text)}> {text} | </i>)
                        }
                    </div>

                    <div style={styleText1}>
                        {
                            arr1.map((text, index) =>
                                <p key={index} value={text}> {index + 1} = {text}</p>)
                        }
                    </div>
                </div>


                <div style={{
                    paddingLeft: '2px',
                    border: '2px solid #777',
                    maxWidth: '30vw',
                    width: '30vw',
                }}>
                    <div style={{
                        border: '2px solid #777',
                        maxHeight: '20vh',
                        height: '20vh',
                        overflow: 'scroll',
                    }}>
                        <b><p><i>360 знаков в минуту норма для копирайтера. 166ms</i></p></b>
                        <b><p><i>940 символов в минуту рекорд. 63ms</i></p></b>
                        <b>Средний интервал между нажатиями клавишь:</b>
                        <p>1000ms это 1 нажатие в секунду это 60 знаков в минуту.</p>
                        <p>500ms это 2 нажатий в секунду это 120 знаков в минуту.</p>
                        <p>250ms это 4 нажатий в секунду это 240 знаков в минуту.</p>
                        <p>100ms это 10 нажатий в секунду это 600 знаков в минуту.</p>

                    </div>

                    <div style={{//3 bloc 2
                        border: '2px solid #777',
                        maxHeight: '50vh',
                        height: '50vh',
                        overflow: 'scroll'
                    }}>

                        {Array
                            .from(res)
                            .map(function (o, index) {
                                return <i key={index} value={o}
                                          style={setColor1(o[1][1])}>\{arr1[o[0] - 1][0].slice(0, 4)} [{o[1][0]}
                                    <br/></i>
                            })}

                    </div>
                </div>


            </div>


            <div style={{}}>
                <div style={{
                    textAlign: "center",
                }}>&reg;&nbsp;&copy;&nbsp;2020&nbsp;Все прова защещены.
                </div>
            </div>

        </div>
    );
}

const initialState = {
    it: 0,
    text1: arr1[0][1],
    text2: arr1[0][0],
    textInput: "",
    data: 0,
    data2: 0,
    time1: 0,
    right: 0,
    wrong: 0,
    check1: false,
    time99: [],
};


function reducer(state, action) {
    switch (action.type) {
        case 'check1':
            console.log("check1", state.check1)
            return {
                it: state.it,
                text1: state.text1,
                text2: state.text2,
                textInput: state.textInput,
                data: state.data,
                data2: state.data2,
                time1: state.time1,
                right: state.right,
                wrong: state.wrong,
                check1: !state.check1,
                time99: state.time99,
            }

        case 'startHandler':
            console.log("startHandler")
            return {
                it: 0,
                text1: arr1[0][1],
                text2: arr1[0][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                check1: state.check1,
                time99: [],
            }

        case 'nextHandler':
            console.log("nextHandler ", state.it)
            if (state.it + 1 >= arr1.length) {
                return {
                    it: 0,
                    text1: arr1[0][1],
                    text2: arr1[0][0],
                    textInput: "",
                    data: 0,
                    data2: 0,
                    time1: 0,
                    right: 0,
                    wrong: 0,
                    check1: state.check1,
                    time99: [],
                }
            }
            return {
                it: state.it + 1,
                text1: arr1[state.it + 1][1],
                text2: arr1[state.it + 1][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                check1: state.check1,
                time99: [],
            }
        case 'key':
            if (state.text2[0] === action.key) {


                if (state.text2.length === 1) {

                    if (res.get(state.it + 1) !== undefined) { // set new record
                        if (res.get(state.it + 1)[1] > state.time1) {
                            res.set(state.it + 1, [state.time1 + "ms](" + Math.round(60000 / state.time1) + "in minute)", state.time1])
                        }
                    } else {
                        res.set(state.it + 1, [state.time1 + "ms](" + Math.round(60000 / state.time1) + "in minute)", state.time1])
                    }

                    if (state.check1) { // cycle
                        state.time99.push(state.time1)
                        return {
                            it: state.it,
                            text1: arr1[state.it][1],
                            text2: arr1[state.it][0],
                            textInput: "",
                            data: 0,
                            data2: 0,
                            time1: 0,
                            right: 0,
                            wrong: 0,
                            check1: state.check1,
                            time99: state.time99,
                        }
                    }

                    if (state.it + 1 >= arr1.length) {
                        return { // end
                            it: 0,
                            text1: arr1[0][1],
                            text2: arr1[0][0],
                            textInput: "",
                            data: 0,
                            data2: 0,
                            time1: 0,
                            right: 0,
                            wrong: 0,
                            check1: state.check1,
                            time99: [],
                        }
                    }


                    return { // next
                        it: state.it + 1,
                        text1: arr1[state.it + 1][1],
                        text2: arr1[state.it + 1][0],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        check1: state.check1,
                        time99: [],
                    }


                } else {
                    return {
                        it: state.it,
                        text1: state.text1,
                        text2: state.text2.substr(1),
                        textInput: state.textInput + action.key,
                        data: action.data,
                        data2: action.data2,
                        time1: action.time1,
                        right: state.right + 1,
                        wrong: state.wrong,
                        check1: state.check1,
                        time99: state.time99,
                    }
                }

            } else {
                return {
                    it: state.it,
                    text1: state.text1,
                    text2: state.text2,
                    textInput: state.textInput,
                    data: action.data,
                    data2: action.data2,
                    time1: action.time1,
                    right: state.right,
                    wrong: state.wrong + 1,
                    check1: state.check1,
                    time99: state.time99,
                }
            }
        default:
            throw new Error();
    }
}