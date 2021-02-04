import React from "react";
import {useGlobalContext} from "../../../store/global";
import {Setting} from "./setting";

export const Top = () => {

    const {
        state, btnSetting1, refBtnStart
    } = useGlobalContext()

    let styleSetting1;

    if (state.styleSetting2) {
        styleSetting1 = {
            display: 'block',
        }
    } else {
        styleSetting1 = {
            display: 'none',
        }
    }

    return (<div>

        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <div>
                Trainer {state.nameData} {state.arr1.length}/{state.it + 1}
            </div>
            <div>
                {state.info1}
            </div>

            <button onClick={btnSetting1}
                    ref={refBtnStart}
            >Setting
            </button>
        </div>
        {
            styleSetting1.display === 'block' ? <Setting style1={styleSetting1}/> : ''
        }

    </div>)


}
