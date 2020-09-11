import React, {useContext, useReducer, useState, useEffect} from "react";
import {reducer} from "../util/reducer";

import * as css1 from "../data1/css1";
import * as dictionary1 from "../data1/dictionary1";
import * as dictionary2 from "../data1/dictionary2";
import * as j1 from "../data1/j1";
import * as sql from "../data1/sql";
import * as word from "../data1/word";



const res = new Map()
let next2 = true

let arr98 = {...j1, ...sql, ...word, ...css1, ...dictionary1, ...dictionary2}
let arr99 = Object
    .keys(arr98)
    .map((key, index) => {
        return (arr98[key]);
    });

const word99 =  Object.keys(arr98);

const GlobalContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}



const initialState = {
    it: 0,
    text1: arr99[16][0][1],
    text2: arr99[16][0][0],
    textInput: "",
    data: 0,
    data2: 0,
    time1: 0,
    right: 0,
    wrong: 0,
    check1: false,
    check2: true,
    time99: [],
    count1: 3,
    count0: 3,
    wrong2: false,
    en: true,
    ru: true,
    voiceCycle: false,
    nameData: "word1",
    rateVoice: 5,
    styleKeyboard2: true,
    arr99,
    word99,
    allDictionary: true,
    currentArr: 16,
    arr1: arr99[16],
};


export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const refBtnStart = React.createRef();
    const [state2, setState2] = useState(
        {
            vis: false,
            key1: "",
        })



    function noFocus() {
        refBtnStart.current.focus()
        refBtnStart.current.blur()
    }

    function startHandler(e, nameData = "", d = null, index) {
        res.clear()
        dispatch({type: 'startHandler', nameData, index})
        noFocus()
    }

    function check1Handler() {
        dispatch({type: 'check1'});
        noFocus()
    }

    function count1Handler(e) {
        dispatch({type: 'count1', count: e.target.value})
        noFocus();
    }

    function check2Handler() {
        dispatch({type: 'check2'});
        noFocus()
    }

    function en1Handler(e) {
        dispatch({type: 'en1'});
        noFocus();
    }

    function ru1Handler(e) {
        dispatch({type: 'ru1'});
        noFocus();
    }

    function voiceCycle1Handler(e) {
        dispatch({type: 'voiceCycle1'});
        noFocus();
    }

    function allDictionaryHandler(e) {
        dispatch({type: 'allDictionary1'});
        noFocus();
    }

    function rateVoice1Handler(e) {
        dispatch({type: 'rateVoice1', rateVoice: e.target.value});
        noFocus();
    }

    function nextHandler() {
        dispatch({type: 'nextHandler'})
        noFocus();

    }

    function btnText1() {
        setState2({
            ...state2,
            vis: !state2.vis,
        })
        noFocus();
    }

    function btnKeyboard1() {
        dispatch({type: 'styleKeyboard2'});
        noFocus();
    }



    useEffect(() => {
        const handle = (event) => {
            setState2({...state2, key1: event.key});

            if (event.keyCode === 17) {
                if (next2) {
                    next2 = false
                } else {
                    next2 = true
                }
            } else {
                if (event.keyCode === 90 && next2) {
                    dispatch({type: 'nextHandler'})
                    next2 = false
                    return;
                } else if (event.keyCode === 88 && next2) {
                    dispatch({type: 'check1'});
                    next2 = false
                    return;

                } else if (event.keyCode === 67 && next2) {
                    dispatch({type: 'check2'});
                    next2 = false
                    return;

                } else {
                    next2 = false
                }
            }

            if (event.keyCode === 16 || event.keyCode === 8 ||
                event.keyCode === 18 || event.keyCode === 17) {
                return
            }
            if (state.data === 0) {
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: new Date().getTime(),
                    data2: 0,
                    res
                })
            } else {
                const allTime = new Date().getTime() - state.data
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: state.data, // time start
                    data2: allTime, // all time

                    res

                })
            }
        };

        window.addEventListener('keydown', handle);
        return () => {
            window.removeEventListener('keydown', handle);
        };
    }, [state]);

    return (
        <GlobalContext.Provider value={{
            state,
            word99,
            startHandler,
            check1Handler,
            count1Handler,
            check2Handler,
            en1Handler,
            ru1Handler,
            voiceCycle1Handler,
            allDictionaryHandler,
            rateVoice1Handler,
            refBtnStart,
            nextHandler,
            btnText1,
            btnKeyboard1,
            state2,
            res

        }}>
            {children}
        </GlobalContext.Provider>
    )


}
