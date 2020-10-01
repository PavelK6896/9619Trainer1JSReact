import React from "react";
import {useGlobalContext} from "../../../store/global";

export const Top = () => {

    const {
        state, check1Handler, count1Handler, check2Handler,
        en1Handler, ru1Handler, voiceCycle1Handler, allDictionaryHandler, rateVoice1Handler
    } = useGlobalContext()


    return (<div>

        <div>
            Trainer {state.nameData} {state.userLang} {state.arr1.length}/{state.it + 1}
        </div>
        <div>
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
                />cycle (ctrl + x)

            </label>


            <label><input
                type="checkbox"
                onChange={check2Handler}
                checked={state.check2}
                title="error start"
            /> error (ctrl + с)</label>

            <label><input
                type="checkbox"
                onChange={en1Handler}
                checked={state.en}
                title="voice en"
            />en</label>

            <label><input
                type="checkbox"
                onChange={ru1Handler}
                checked={state.ru}
                title="voice ru"
            />ru</label>

            <label><input
                type="checkbox"
                onChange={voiceCycle1Handler}
                checked={state.voiceCycle}
                title="voice cycle"
            />cycle</label>

            <label><input
                type="checkbox"
                onChange={allDictionaryHandler}
                checked={state.allDictionary}
                title="all dictionary"
            />all dictionary</label>

            <br/>
            <input
                style={{width: '30px'}}
                type="number"
                defaultValue={state.rateVoice}
                onChange={rateVoice1Handler}
            /> rate v

            {/*добавить громкость*/}

            <button onClick={() => window.speechSynthesis.cancel()}>cancel</button>

        </div>

    </div>)


}
