import React from "react";
import {useGlobalContext} from "../../../store/global";


export const Setting = (props) => {
    const {
        state, check1Handler, count1Handler, check2Handler,
        en1Handler, ru1Handler, voiceCycle1Handler, allDictionaryHandler, rateVoice1Handler
    } = useGlobalContext()

    return (
        <div

            style={{
                ...props.style1,
                border: '1px solid #555'
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <label style={{
                    margin: '2px'
                }}
                > <input
                    type="checkbox"
                    onChange={check1Handler}
                    checked={state.check1}
                />
                    <input
                        style={{width: '30px'}}
                        type="number"
                        defaultValue={state.count1}
                        onChange={count1Handler}
                    />повторы количество активировать cycle (ctrl + x)

                </label>


                <label><input
                    type="checkbox"
                    onChange={check2Handler}
                    checked={state.check2}
                    title="error start"
                /> сброс слова при ошибки активировать error (ctrl + с)</label>

                <label><input
                    type="checkbox"
                    onChange={allDictionaryHandler}
                    checked={state.allDictionary}
                    title="all dictionary"
                />начинать другой словарь при завершеннии текущего all dictionary</label>

                <div
                    style={{
                        border: '1px solid #555',
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <label><input
                        type="checkbox"
                        onChange={en1Handler}
                        checked={state.en}
                        title="voice en"
                    />озвучить английские слова</label>

                    <label><input
                        type="checkbox"
                        onChange={ru1Handler}
                        checked={state.ru}
                        title="voice ru"
                    />озвучить русские слова</label>

                    <label><input
                        type="checkbox"
                        onChange={voiceCycle1Handler}
                        checked={state.voiceCycle}
                        title="voice cycle"
                    />повторять озвучьку при активном cycle на каждом повторении</label>

                    <label><input
                        style={{width: '30px'}}
                        type="number"
                        defaultValue={state.rateVoice}
                        onChange={rateVoice1Handler}
                    /> скорость произношения слов</label>

                    <label>
                        <button
                            onClick={() => window.speechSynthesis.cancel()}
                        > cancel
                        </button>
                        остановить возпроизведение голоса </label>

                </div>
            </div>
        </div>)


}
