import React, {useEffect, useReducer, useState} from 'react';
import setColor1 from "../util/color";
import {reducer} from "../util/reducer";
import {PostgreSQLKeyword} from '../data1/sql'
import {Menu1} from "../components/menu";
import {Keyboard} from "../components/keyboard";

let next2 = false;
let arr1 = PostgreSQLKeyword;
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
    check1: false,
    check2: false,
    time99: [],
    count1: 3,
    count0: 3,
    wrong2: false,
    en: true,
    ru: true,
    voiceCycle: false,
    nameData: "",
    rateVoice: 5,
    styleKeyboard2: false
};


export function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [state2, setState2] = useState(
        {
            vis: false,
            key1: "",
        })

    let styleKeyboard1;
    let styleText1;
    let styleMain1;

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

                    arr1: arr1,
                    res
                })
            } else {
                const allTime = new Date().getTime() - state.data
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: state.data, // time start
                    data2: allTime, // all time
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

    function startHandler(e, nameData = "") {
        res.clear();
        dispatch({type: 'startHandler', arr1, nameData})
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


    if (state.wrong2 === false) {
        styleMain1 = {}
    } else {
        styleMain1 = {
            color: 'red'
        }
    }


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


    if (state.styleKeyboard2) {
        styleKeyboard1 = {
            display: 'block',
        }
    } else {
        styleKeyboard1 = {
            display: 'none',
        }
    }

    function btnKeyboard1() {
        dispatch({type: 'styleKeyboard2'});
        noFocus();
    }

    function btnText1() {
        setState2({
            ...state2,
            vis: !state2.vis,
        })
        noFocus();
    }


    function count1Handler(e) {
        dispatch({type: 'count1', count: e.target.value})
        noFocus();
    }

    function en1Handler(e) {
        dispatch({type: 'en1'});
        noFocus();
    }

    function ru1Handler(e) {
        dispatch({type: 'ru1'});
        noFocus();
    }


    function voiceCycle1Handler(e) {
        dispatch({type: 'voiceCycle1'});
        noFocus();
    }

    function rateVoice1Handler(e) {
        dispatch({type: 'rateVoice1', rateVoice: e.target.value});
        noFocus();
    }

    function noFocus() {
        refBtnStart.current.focus()
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
                        Trainer {state.nameData}
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
                                style={{width: '30px'}}
                                type="number"
                                defaultValue={state.count1}
                                onChange={count1Handler}
                            />

                        </label>


                        <label><input
                            type="checkbox"
                            onChange={check2Handler}
                            checked={state.check2}
                            title="error start"
                        /> error (ctrl + с)</label>

                        <label><input
                            type="checkbox"
                            onChange={en1Handler}
                            checked={state.en}
                            title="voice en"
                        />en</label>

                        <label><input
                            type="checkbox"
                            onChange={ru1Handler}
                            checked={state.ru}
                            title="voice ru"
                        />ru</label>

                        <label><input
                            type="checkbox"
                            onChange={voiceCycle1Handler}
                            checked={state.voiceCycle}
                            title="voice cycle"
                        />cycle</label>

                        <br/>
                        <input
                            style={{width: '30px'}}
                            type="number"
                            defaultValue={state.rateVoice}
                            onChange={rateVoice1Handler}
                        /> rate v

                        {/*добавить громкость*/}

                        <button onClick={() => window.speechSynthesis.cancel()}>cancel</button>


                    </div>

                    <div style={{
                        backgroundColor: '#ececec',
                        fontSize: '25px',
                        marginTop: '25px'
                    }}
                    >{state.text1}</div>

                    <pre style={{ // main

                        ...styleMain1,
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

                    <p style={{ // не за кроя экрана как
                        display: 'flex',
                        justifyContent: "center",
                        fontSize: '35px',
                        backgroundColor: 'rgba(136,136,136,0.64)',
                        height: '50px'
                    }}>
                        {state.textInput}
                        {/*<input style={{fontSize: '35px',}} value={state.textInput}/>*/}
                    </p>


                    <div>
                        <div>allTime {state.data2} ms</div>
                        Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2.length}
                    </div>


                    <div>
                        <button onClick={startHandler} ref={refBtnStart}>сначало</button>
                        <button onClick={nextHandler} ref={refBtnNext}>next (ctrl + z)</button>
                        <button onClick={btnText1}>Text</button>
                        <button onClick={btnKeyboard1}>Keyboard</button>
                    </div>
                    <br/>

                    {
                        styleKeyboard1.display === 'block' ? <Keyboard style1={styleKeyboard1}/> : ''
                    }


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
                        {/*// локальное время*/}
                        <div style={{
                            maxWidth: '400px',
                        }}>
                            {state.time99.map((text, index) =>
                                <i key={index} value={text} style={setColor1(text)}>{text}ms</i>
                            )
                            }
                        </div>

                        {Array
                            .from(res).reverse()
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
