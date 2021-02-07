import React from "react";
import {useGlobalContext} from "../../../store/global";

export const Bottom = () => {

    const {state, startHandler, nextHandler, btnText1, state2} = useGlobalContext()

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



    return (<div>

        <div
            style={{
                textAlign: 'center',
            }}
        >
            Неправильно: {state.wrong} Правильно: {state.right} Осталось: {state.text2.length}
        </div>


        <div
            style={{
                textAlign: 'center',
            }}
        >
            <button onClick={startHandler}>сначало</button>
            <button onClick={nextHandler}>next (ctrl + z)</button>
            <button onClick={btnText1}>Text</button>
        </div>
        <br/>
        <div style={{
            backgroundColor: '#ececec',
            fontSize: '25px',
            textAlign: 'center',
            minHeight: '50px'

        }}
        >{state.text1}</div>


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
