import React from "react";
import {useGlobalContext} from "../../store/global";

export const Menu1 = () => {
    const {state, startHandler, word99} = useGlobalContext()

    return (<div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '10vw',
            width: '10vw',
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
        }}>

            {//делает кнопки
                Object.values(state.arr99).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            startHandler( "" ,word99[index], o, index);
                        }}> {word99[index]} </button>)}
                )
            }
        </div>
    )

}


