import React, {useEffect, useReducer, useState} from 'react';
import setColor1 from "../util/f1";
import {reducer} from "../util/reducer";
import {java1, kotlin1} from '../data1/d1'
import {Menu1} from "../components/menu";
import {Keyboard} from "../components/keyboard";

let next2 = false;
let arr1 = kotlin1;
const res = new Map()

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
    check1: true,
    check2: true,
    time99: [],
    count1: 5,
    count0: 5
};

export function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [state2, setState2] = useState(
        {
            vis: false,
            key1: "a"
        })
    let styleText1;


    useEffect(() => {
        const handle = (event) => {

            setState2({...state2, key1: event.key});


            if (event.keyCode === 17) {
                if (next2) {
                    next2 = false
                } else {
                    next2 = true
                }
            } else {
                if (event.keyCode === 90 && next2) {
                    dispatch({type: 'nextHandler', arr1: arr1})
                    next2 = false
                    return;
                } else if (event.keyCode === 88 && next2) {
                    dispatch({type: 'check1'});
                    next2 = false
                    return;

                } else if (event.keyCode === 67 && next2) {
                    dispatch({type: 'check2'});
                    next2 = false
                    return;

                } else {
                    next2 = false
                }
            }

            if (event.keyCode === 16 || event.keyCode === 8 ||
                event.keyCode === 18 || event.keyCode === 17) {
                return
            }
            if (state.data === 0) {
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: new Date().getTime(),
                    data2: 0,
                    time1: 0,
                    arr1: arr1,
                    res
                })
            } else {
                const betweenData = new Date().getTime() - state.data
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: state.data,
                    data2: betweenData,
                    time1: Math.round(betweenData / state.right),
                    arr1: arr1,
                    res

                })
            }
        };

        window.addEventListener('keydown', handle);
        return () => {
            window.removeEventListener('keydown', handle);
        };
    }, [state]);

    function setData(d) {
        arr1 = d;
    }

    function startHandler() {
        res.clear();
        dispatch({type: 'startHandler', arr1})
        refBtnStart.current.focus();
        refBtnStart.current.blur()

    }

    function nextHandler() {
        dispatch({type: 'nextHandler', arr1})
        refBtnNext.current.blur()
    }

    function check1Handler() {
        dispatch({type: 'check1'});
        refCheck.current.blur()
    }

    function check2Handler() {
        dispatch({type: 'check2'});
        refBtnStart.current.focus();
        refBtnStart.current.blur()
    }


    const refBtnStart = React.createRef();
    const refBtnNext = React.createRef();
    const refCheck = React.createRef();


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
    
    function count1Handler(e) {

        console.log(e.target.value)
        dispatch({type: 'count1', count: e.target.value})
        refBtnStart.current.focus();
        refBtnStart.current.blur()

    }

////////////////////////render/////////////////////////////////////////////////////////////
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


                <Menu1 startHandler={startHandler} setData={setData}/>


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
                        <label style={{
                            margin: '0 25px'
                        }}
                        >
                            {state.count1}
                            <input
                                type="checkbox"
                                onChange={check1Handler}
                                ref={refCheck}
                                checked={state.check1}
                            />
                            cycle (ctrl + x)
                            <input
                                style={{
                                    width: '50px'
                                }}

                                type="number"
                                defaultValue={state.count1}
                                onChange={count1Handler}
                            />

                        </label>


                        <label><input
                            type="checkbox"
                            onChange={check2Handler}
                            checked={state.check2}
                        /> error (ctrl + с)</label>
                    </div>

                    <div style={{
                        backgroundColor: '#ececec',
                        fontSize: '25px',
                        marginTop: '25px'
                    }}
                    >{state.text1}</div>

                    <pre style={{
                        display: 'flex',
                        backgroundColor: 'rgba(136,136,136,0.64)',
                        fontSize: '35px',

                        justifyContent: "center"



                    }}>{state.text2}</pre>



                    <div style={{
                        backgroundColor: '#ececec',
                        fontSize: '25px',
                        marginTop: '-30px'
                    }}
                    >{state.text1}</div>

                    <p style={{
                        display: 'flex',
                        justifyContent: "center",
                        fontSize: '35px',
                        backgroundColor: 'rgba(136,136,136,0.64)',
                        height: '50px'
                    }}>{state.textInput} </p>


                    <div>  <div>Time {state.time1} ms</div> Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2.length} </div>





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

                    <Keyboard key1={state2.key1}></Keyboard>

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
                                          style={setColor1(o[1][1])}>{arr1[o[0] - 1][0].slice(0, 14)} [{o[1][0]}
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