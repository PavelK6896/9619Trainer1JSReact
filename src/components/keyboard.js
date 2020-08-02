import React from "react";

const keyboard = [
    "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}" +
    "{tab} q w e r t y u i o p [ ] \\" +
    "{lock} a s d f g h j k l ; ' {enter}" +
    "{shift} z x c v b n m , . / {shift}" +
    "{space}"
];

const keyShift = [
    "~ ! @ # $ % ^ & * ( ) _ + {bksp}" +
    "{tab} Q W E R T Y U I O P { } |" +
    '{lock} A S D F G H J K L : " {enter}' +
    "{shift} Z X C V B N M < > ? {shift}" +
    "{space}"
];


export const Keyboard = (key1) => {
    return (
        <div style={{
            height: '100px',
            border: '1px solid #555',
            fontSize: '50px'
        }}>

            <div style={{fontSize: '20px', height: '100px',}}>
                {
                    Array.from(keyShift[0]).map(function (o, index) {
                        if (key1.key1 === o) {
                            return <i key={index} style={{color: "red", backgroundColor: 'rgba(127,118,118,0.64)', }} value={o}>{o}</i>
                        }
                        return <i key={index} value={o}>{o}</i>
                    })
                }
            </div>

        </div>

    )
}
