import React, {useEffect, useState} from "react";
import {Top} from "./components/top";
import {Middle} from "./components/middle";
import {Bottom} from "./components/bottom";

export const Main = () => {

    const [state5, setState5] = useState({

        widthDynamic: 950,
        heightDynamic: 550,
        clickSizeX: false,
        posX: 0,
        clickSizeY: false,
        posY: 0


    })

    useEffect(() => {
        const mm = (event) => {
            if (state5.clickSizeX) {
                let xx = (event.clientX - state5.posX)
                if (state5.widthDynamic === undefined || state5.widthDynamic === NaN) {
                    state5.widthDynamic = state5.posX
                }
                setState5({
                    ...state5,
                    widthDynamic: (state5.widthDynamic + xx),
                    posX: event.clientX
                })
            } else if (state5.clickSizeY) {
                let yy = (event.clientY - state5.posY)
                if (state5.heightDynamic === undefined || state5.heightDynamic === NaN) {
                    state5.heightDynamic = state5.posY
                }
                setState5({
                    ...state5,
                    heightDynamic: (state5.heightDynamic + yy),
                    posY: event.clientY
                })
            }
        }

        const mu = (event) => {
            if (state5.clickSizeX) {
                setState5({...state5, clickSizeX: false,})
            }

            if (state5.clickSizeY) {
                setState5({...state5, clickSizeY: false,})

            }
        }

        window.addEventListener('mousemove', mm);
        window.addEventListener('mouseup', mu);

        return () => {
            window.removeEventListener('mousemove', mm);
            window.removeEventListener('mouseup', mu);
        };

    })

    return (


        <div
            style={{
                borderBottom: "5px solid #555",
                height: state5.heightDynamic + "px",
                cursor: "s-resize",
                zIndex: '2'
            }}
            onMouseDown={
                (e) => {
                    if (e.currentTarget === e.target) {
                        setState5({...state5, clickSizeY: true, posY: e.clientY})
                    }
                }}
        >

            <div
                style={{
                    borderRight: "5px solid #555",
                    cursor: "e-resize",
                    width: state5.widthDynamic + "px",
                }}
                onMouseDown={
                    (e) => {
                        if (e.currentTarget === e.target) {
                            setState5({...state5, clickSizeX: true, posX: e.clientX})
                        }
                    }}
            >


                <div
                    style={{
                        border: "1px solid #777",
                        width: state5.widthDynamic - 2 + "px",
                        height: state5.heightDynamic - 2 + "px",
                        cursor: "default",
                        overflowY: "auto",
                    }}
                >
                    <Top/>
                    <Middle/>
                    <Bottom/>

                </div>
            </div>
        </div>

    )
}
