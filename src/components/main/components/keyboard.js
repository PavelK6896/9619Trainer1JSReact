import React, {useEffect, useReducer, useState} from "react";


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
    [["Shift ", "Shift "], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift", "Shift"]],
    [[" ", " "]]
];


const init = {
    uppercase: false,
    CapsLock: false,
    Shift: false
};

function reducer3(state, action) {
    switch (action.type) {
        case 'uppercase':

            return {
                ...state,
                uppercase: !state.uppercase,
            }

        case 'CapsLockFalse':
            return {
                ...state,
                uppercase: false,
                CapsLock: false,
            }

        case 'CapsLockTrue':
            return {
                ...state,
                uppercase: true,
                CapsLock: true,
            }


        case 'Shift':

            return {
                ...state,
                uppercase: !state.uppercase,
                Shift: !state.Shift
            }

        default:
            throw new Error();
    }
}

let shift = false;

// проверка языка
// const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// const rusUpper = rusLower.toUpperCase()
// const enLower = 'abcdefghijklmnopqrstuvwxyz'
// const enUpper = enLower.toUpperCase()
// const rus = rusLower + rusUpper
// const en = enLower + enUpper
//
// let lang = ""
// if (rus.includes(char)) {
//     lang = 'ru'
// } else if (en.includes(char)) {
//     lang = 'en'
// }
//

export const Keyboard = (props) => {
    const [uppercaseState, uppercaseDispatch] = useReducer(reducer3, init);
    const [state4, setState4] = useState(
        {
            key11: ""
        })



    useEffect(() => {

        if (props.style1.display === 'block') {
            const handleDown = (event) => {

                if (event.key === 'CapsLock') {
                    if ( event.getModifierState('CapsLock')){
                        if(!uppercaseState.CapsLock){
                            uppercaseDispatch({type: 'CapsLockTrue'});
                        }
                    }else{
                        uppercaseDispatch({type: 'CapsLockFalse'});
                    }
                }else if (event.key === 'Shift') {

                    if (shift)return

                    if (uppercaseState.CapsLock) {
                        if (uppercaseState.uppercase) {
                            uppercaseDispatch({type: 'Shift'});
                        }
                    } else {
                        if (!uppercaseState.uppercase) {
                            uppercaseDispatch({type: 'Shift'});
                        }
                    }
                    shift = true;
                }else{
                    setState4({key11: event.key })
                }

                if ( event.getModifierState('CapsLock')){
                    if(!uppercaseState.CapsLock){
                        uppercaseDispatch({type: 'CapsLockTrue'});
                    }
                }
            }
            const handleUp = (event) => {


                if (event.key === 'Shift') {
                    shift = false
                    if (uppercaseState.CapsLock) {

                        if (uppercaseState.Shift) {
                            uppercaseDispatch({type: 'Shift'});
                        }

                    } else {

                        if (uppercaseState.Shift) {
                            uppercaseDispatch({type: 'Shift'});
                        }
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

                                if (state4.key11 === value1[+uppercaseState.uppercase]) {
                                    s = {
                                        border: "1px solid #555",
                                        backgroundColor: 'rgba(62,51,151,0.64)',
                                    }
                                }

                                if (" " === value1[+uppercaseState.uppercase]) {
                                    s.width = '100px'
                                }

                                if ("Caps" === value1[0] && uppercaseState.CapsLock) {

                                    s = {
                                        border: "1px solid #555",
                                        backgroundColor: 'rgba(62,51,151,0.64)',
                                    }
                                }

                                if ("Shift " === value1[0] && uppercaseState.Shift) {

                                    s = {
                                        border: "1px solid #555",
                                        backgroundColor: 'rgba(62,51,151,0.64)',
                                    }
                                }

                                let d = <span style={s} key={index1 + index}
                                              value={value1}>{value1[+uppercaseState.uppercase]}</span>
                                if (index1 + 1 === value.length) {
                                    d = <span style={s} key={index1 + index}
                                              value={value1}>{value1[+uppercaseState.uppercase]}<br/></span>
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
