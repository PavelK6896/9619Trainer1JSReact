import React from "react";

export const Menu1 = ({arr99, startHandler, setData}) => {
    const word99 =  Object.keys(arr99);

    return (<div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '10vw',
            width: '10vw',
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
        }}>

            {
                Object.values(arr99).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            startHandler( "" ,word99[index], o, index);
                        }}> {word99[index]} </button>)}
                )
            }
        </div>
    )

}


