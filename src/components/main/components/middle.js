import React from "react";
import {useGlobalContext} from "../../../store/global";
import {Keyboard} from "./keyboard";

export const Middle = () => {

    const {state, btnKeyboard1} = useGlobalContext()

    let styleMain1;
    if (state.wrong2 === false) {
        styleMain1 = {}
    } else {
        styleMain1 = {
            color: 'red'
        }
    }

    let styleKeyboard1;
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

        <div style={{
            ...styleMain1,
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: "center",
            backgroundColor: 'rgba(136,136,136,0.64)',
            fontSize: '35px',
            marginTop: '25px',
            height: '50px',
            lineHeight: "45px",
            fontFamily: "Helvetica",
            letterSpacing: "0.07em",
        }}>{state.text2}</div>


        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end'
        }}>
            <button onClick={btnKeyboard1}>Keyboard</button>
        </div>

        {
            styleKeyboard1.display === 'block' ? <Keyboard style1={styleKeyboard1}/> : ''
        }

        <div style={{ // не за кроя экрана как
            display: 'flex',
            justifyContent: "center",
            fontSize: '35px',
            backgroundColor: 'rgba(136,136,136,0.64)',
            height: '50px'
        }}>
            {state.textInput}
        </div>




    </div>)


}
