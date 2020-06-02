import React, {useEffect, useReducer} from 'react';

const content1 = [
    "display: flex; = дисплей: сгибать;",
    "display: block; = дисплей: блок;",
    "align-content: center; = выравнивать-содержание: центр;",
    "align-items: center; = выравнивать-предметы: центр;",
    "flex-direction: column; = сгибать-направление: колонка;",
    "background-color: transparent; = фон-цвет: прозрачный;",
    "padding-left: 0; = набивка-левый: 0;",
    "margin-bottom: 0; = прибыль-дно: 0;",
    "list-style: none; = список-стиль: никто;"
]

const res = new Map()
res.set(0, "start")

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
            if (state.it + 1 >= content1.length){
                return {
                    it: state.it + 1,
                    text2: "end finish stop win close last curtain",
                    textInput: "",
                    data: 0,
                    data2: 0,
                    time1: 0,
                    right: 0,
                    wrong: 0
                }
            }
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
                    res.set(state.it + 1, state.time1)
                    if (state.it + 1 >= content1.length){
                        return {
                            it: state.it + 1,
                            text2: "end finish stop win close last curtain",
                            textInput: "",
                            data: 0,
                            data2: 0,
                            time1: 0,
                            right: 0,
                            wrong: 0
                        }
                    }
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
        refBtnStart.current.blur()

    }

    function nextHandler() {
        dispatch({
            type: 'nextHandler'
        })
        refBtnNext.current.blur()


    }
    const refBtnStart  = React.createRef();
    const refBtnNext  = React.createRef();


    return (
        <div style={{

        }}>
            <div style={{
                paddingLeft: '1vw',
                margin: '2px',
                border: '2px solid #777',
                position: 'fixed'
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
                    fontSize: '30px'
                }}>Text: {state.textInput} </p>
                <button onClick={startHandler} ref={refBtnStart}>сначало</button>
                <button onClick={nextHandler} ref={refBtnNext}>next</button>
            </div>
            <div style={{
                float: 'right'
            }}>
                <b>Средний интервал между нажатиями клавишь.</b>
                <p> 600ms это 60 знаков в минуту.</p>
                <p>300ms это 120 знаков в минуту.</p>
                <p>200ms это 180 знаков в минуту.</p>
                <p>100ms это 6 нажатий в секунду это 360 в минуту.</p>
                <p>50ms это 12 нажатий в секунду это 720 в минуту.</p>
                <b><p><i>360 знаков в минуту норма для копирайтера.</i></p></b>
                <b><p><i>940 символов в минуту рекорд.</i></p></b>
                <hr/>
                <div style={{
                    border: '2px solid #555'
                }}>
                    {
                        Array.from(res , r => r.join("==")).map(o => {
                            return (<p key={o.toString()} value={o}> {o}</p>)
                        })
                    }
                </div>
                <b>Text</b>
                <div style={{
                    border: '2px solid #555'
                }}>
                    {
                        content1.map((text, index) =>
                            <p key={index} value={text}> {index + 1} = {text}</p>)
                    }
                </div>
            </div>
        </div>
    );
}
