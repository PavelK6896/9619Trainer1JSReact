import React, {useEffect, useReducer, useState} from "react";


let userLang = navigator.language
console.log(userLang);

const Russian = [ // Russian Standard Keyboard
    [["\u0451", "\u0401"], ["1", "!"], ["2", '"'], ["3", "\u2116"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]],
    [["Tab", "Tab"], ["\u0439", "\u0419"], ["\u0446", "\u0426"], ["\u0443", "\u0423"], ["\u043A", "\u041A"], ["\u0435", "\u0415"], ["\u043D", "\u041D"], ["\u0433", "\u0413"], ["\u0448", "\u0428"], ["\u0449", "\u0429"], ["\u0437", "\u0417"], ["\u0445", "\u0425"], ["\u044A", "\u042A"], ["Enter", "Enter"]],
    [["Caps", "Caps"], ["\u0444", "\u0424"], ["\u044B", "\u042B"], ["\u0432", "\u0412"], ["\u0430", "\u0410"], ["\u043F", "\u041F"], ["\u0440", "\u0420"], ["\u043E", "\u041E"], ["\u043B", "\u041B"], ["\u0434", "\u0414"], ["\u0436", "\u0416"], ["\u044D", "\u042D"], ["\\", "/"]],
    [["Shift", "Shift"], ["/", "|"], ["\u044F", "\u042F"], ["\u0447", "\u0427"], ["\u0441", "\u0421"], ["\u043C", "\u041C"], ["\u0438", "\u0418"], ["\u0442", "\u0422"], ["\u044C", "\u042C"], ["\u0431", "\u0411"], ["\u044E", "\u042E"], [".", ","], ["Shift", "Shift"]],
    [[" ", " "]]
];

const US = [ // US Standard Keyboard
    [["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Bksp", "Bksp"]],
    [["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], ["]", "}"], ["\\", "|"]],
    [["Caps", "Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", '"'], ["Enter", "Enter"]],
    [["Shift", "Shift"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]],
    [[" ", " "]]
];


const initialState3 = {
    downShift: false,
    downShiftN: 0,
    CapsLock: false
};

function reducer3(state, action) {
    switch (action.type) {
        case 'downShift':
            if (!state.downShift){
                state.downShiftN = 1
            }else {
                state.downShiftN = 0
            }
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
            CapsLock: false
        })


    useEffect(() => {
        if (props.style1.display === 'block') {
            const handleDown = (event) => {

                state4.CapsLock = event.getModifierState && event.getModifierState('CapsLock');

                if (state4.CapsLock){
                    if (!state3.downShift) {
                        dispatch3({type: 'downShift'});
                    }
                }

                // console.log(event)
                if (event.key === 'Shift' ) {
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
            height: '150px',
            border: '1px solid #555',
            fontSize: '50px'
        }}>

                <div style={{fontSize: '20px', height: '100px',}}>
                    {
                        US.map((value, index) => {
                            return <div style={{
                                display: "flex",
                                justifyContent: "space-around"
                            }} key={index}> {
                                value.map((value1, index1) => {

                                    let s = {
                                        border: "1px solid #555",


                                    }
                                    if (state4.key11 === value1[state3.downShiftN]){
                                        s = {
                                            border: "1px solid #555",
                                            backgroundColor: 'rgba(62,51,151,0.64)',
                                        }
                                    }

                                    if (" " === value1[state3.downShiftN]){
                                        s.width = '100px'
                                    }

                                    if ("Caps" === value1[state3.downShiftN] && state4.CapsLock){
                                        s = {
                                            border: "1px solid #555",
                                            backgroundColor: 'rgba(62,51,151,0.64)',
                                        }
                                    }



                                    let d = <span style={s} key={index1 +index} value={value1}>{value1[state3.downShiftN]}</span>
                                    if (index1 + 1 === value.length) {
                                        d = <span style={s} key={index1 +index} value={value1}>{value1[state3.downShiftN]}<br/></span>
                                    }
                                    return d
                                })
                            }</div>
                        })
                    }
                </div>
        </div>

    )
}
