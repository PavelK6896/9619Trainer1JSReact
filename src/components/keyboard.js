import React, {useEffect, useReducer, useState} from "react";

const keyboard =
   ` \` 1 2 3 4 5 6 7 8 9 0 - = 
     q w e r t y u i o p [ ] \\
     a s d f g h j k l ; '  
     z x c v b n m , . / `


const keyShift =
    `~ ! @ # $ % ^ & * ( ) _ + 
     Q W E R T Y U I O P { } |
     A S D F G H J K L : " 
     Z X C V B N M < > ? `



const initialState3 = {
    downShift: false,
};

function reducer3(state, action) {
    switch (action.type) {
        case 'downShift':
            return {
                ...state,
                downShift: !state.downShift,
            }
        default:
            throw new Error();
    }
}


export const Keyboard = (props) => {
    const [state3, dispatch3] = useReducer(reducer3, initialState3);
    const [state4, setState4] = useState(
        {
            key11: "",
        })
    useEffect(() => {
        if (props.style1.display === 'block') {
            const handleDown = (event) => {
                // console.log("keydown keydown keydown", event)
                if (event.key === 'Shift') {
                    if (!state3.downShift) {
                        dispatch3({type: 'downShift'});
                    }
                }
                state4.key11 = event.key

            }
            const handleUp = (event) => {
                // console.log("keyup keyup keyup")
                if (event.key === 'Shift') {
                    if (state3.downShift) {
                        dispatch3({type: 'downShift'});
                    }
                }
            }

            window.addEventListener('keydown', handleDown);
            window.addEventListener('keyup', handleUp);

            return () => {
                window.removeEventListener('keydown', handleDown);
                window.removeEventListener('keyup', handleUp);
            };
        }
    })


    return (
        <div style={{
            ...props.style1,
            height: '100px',
            border: '1px solid #555',
            fontSize: '50px'
        }}>
            {state3.downShift
                ?
                <div style={{fontSize: '20px', height: '100px',}}>
                    {
                        Array.from(keyShift).map(function (o, index) {
                            if (state4.key11 === o) {
                                return <i key={index} style={{color: "red", backgroundColor: 'rgba(127,118,118,0.64)',}}
                                          value={o}>{o}</i>
                            }
                            return <i key={index} value={o}>{o}</i>
                        })
                    }
                </div>
                :
                <div style={{fontSize: '20px', height: '100px',}}>
                    {
                        Array.from(keyboard).map(function (o, index) {
                            if (state4.key11 === o) {
                                return <i key={index} style={{color: 'rgba(18,60,186,0.62)', backgroundColor: 'rgba(97,74,74,0.64)',}}
                                          value={o}>{o}</i>
                            }
                            return <i key={index} value={o}>{o}</i>
                        })
                    }
                </div>
            }
        </div>

    )
}
