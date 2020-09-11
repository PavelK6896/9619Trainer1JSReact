import React from "react";
import {useGlobalContext} from "../../global";

export const Middle = () => {

    const {state } = useGlobalContext()


    let styleMain1;

    if (state.wrong2 === false) {
        styleMain1 = {}
    } else {
        styleMain1 = {
            color: 'red'
        }
    }

    return (<div>


        <div style={{
            backgroundColor: '#ececec',
            fontSize: '25px',
            marginTop: '25px'
        }}
        >{state.text1}</div>

        <pre style={{

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


    </div>)


}
