import React from "react";
import {Keyboard} from "./keyboard";
import {useGlobalContext} from "../../../store/global";

export const Bottom = () => {

    const {state, startHandler, nextHandler, btnText1, btnKeyboard1, state2} = useGlobalContext()

    let styleKeyboard1;
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


    if (state.styleKeyboard2) {
        styleKeyboard1 = {
            display: 'block',
        }
    } else {
        styleKeyboard1 = {
            display: 'none',
        }
    }

    return (<div>

        <div>
            <div>allTime {state.data2} ms</div>
            Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2.length}
        </div>


        <div>
            <button onClick={startHandler}>сначало</button>
            <button onClick={nextHandler}>next (ctrl + z)</button>
            <button onClick={btnText1}>Text</button>
            <button onClick={btnKeyboard1}>Keyboard</button>
        </div>
        <br/>

        {
            styleKeyboard1.display === 'block' ? <Keyboard style1={styleKeyboard1}/> : ''
        }


        <div style={styleText1}>
            {
                state.arr1.map((text, index) => {
                    return (<p key={index} value={text}><i>({index + 1})</i> <b>{text[0]}</b>&nbsp;-&nbsp;{text[1]}</p>)
                    }
                )
            }
        </div>


    </div>)


}
