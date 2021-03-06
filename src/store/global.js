import React, {useContext, useEffect, useReducer, useState} from "react";
import {reducer} from "../util/reducer";

import * as css1 from "../data1/css1";
import * as dictionary1 from "../data1/dictionary1";
import * as dictionary2 from "../data1/dictionary2";
import * as dictionary3 from "../data1/dictionary3";
import * as j1 from "../data1/j1";
import * as sql from "../data1/sql";
import * as sqlPostgres1 from "../data1/sql1";
import * as sql2 from "../data1/sql2";
import * as word from "../data1/word";
import * as english from "../data1/english1";


let next2 = true

// чтение sql1 из файла
const sql0 = []
Object.values(sql).map((k, i) => {
    k.map((k1, i1) => {
        k1[0] = k1[0].toLowerCase()
    })
    sql0.push(...k)
})

const sql1 = []
Object.values(sqlPostgres1).map((k, i) => {
    k.map((k1, i1) => {
        k1[0] = k1[0].toLowerCase()
    })
    sql1.push(...k)
})

let arr98 = {...j1, ...css1, sql0, sql1, ...sql2, ...word, ...dictionary1, ...dictionary2, ...dictionary3, ...english}

let arr99 = Object
    .keys(arr98)
    .map((key, index) => {
        return (arr98[key]);
    });

const word99 = Object.keys(arr98);

const GlobalContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

let info1Ru = "Пожалуйста, смени раскладку клавиатуры на English."

const initialState = {
    it: 0,
    text1: arr99[3][0][1],
    text2: arr99[3][0][0],
    textInput: "",
    data: 0,
    data2: 0,
    time1: 0,
    right: 0,
    wrong: 0,
    check1: true,
    check2: true,
    time99: [],
    count1: 1,
    count0: 1,
    wrong2: false,
    en: true,
    ru: true,
    voiceCycle: true,
    nameData: "java",
    rateVoice: 10,
    styleKeyboard2: false,
    styleSetting2: false,
    styleVisibleInfo2: false,
    arr99,
    word99,
    allDictionary: true,
    currentArr: 3,
    arr1: arr99[3],
    res: new Map(),
    info1: "",
    avg1: []
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

    const getApiWords = (page) => {
        const url = new URL('http://18.156.192.31/api/read1/api/words')
        url.search = new URLSearchParams({
            page: page,
            size: 150,
        })
        fetch(url)
            .then((d) => {
                return d.json()
            })
            .then(d => {
                dispatch({type: 'startHandler2', d, page})
            })
    }

    function startHandler(e, nameData = "", d = null, index) {
        dispatch({type: 'startHandler', nameData, index})
        state.res.clear()
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

    function btnSetting1() {
        dispatch({type: 'styleSetting2'});
        noFocus();
    }

    function btnVisibleInfo1() {
        dispatch({type: 'styleVisibleInfo2'});
        noFocus();
    }


    useEffect(() => {
        const handle = (event) => {

            // const enL = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            // if (enL.includes(event.key)) {
            //     dispatch({type: 'info1', info1: "поменяйте раскладку на en"});
            // }
            const rusL = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'
            if (rusL.includes(event.key)) {
                if (state.info1 !== info1Ru) {
                    dispatch({type: 'info1', info1: info1Ru});
                }
            } else {
                if (state.info1 !== "") {
                    dispatch({type: 'info1', info1: ""});
                }
            }

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
                    data2: 0

                })
            } else {
                const allTime = new Date().getTime() - state.data
                dispatch({
                    type: 'key',
                    key: event.key,
                    data: state.data, // time start
                    data2: allTime, // all time

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
            getApiWords,
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
            btnSetting1,
            btnVisibleInfo1,
            state2

        }}>
            {children}
        </GlobalContext.Provider>
    )
}
