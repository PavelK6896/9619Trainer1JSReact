import React, {useEffect, useState} from "react";
import setColor1 from "../../util/color";
import {useGlobalContext} from "../../store/global";

export const Info = () => {

    const {state, btnVisibleInfo1} = useGlobalContext()

    const [menuState1, setMenuState1] = useState(
        {
            widthDynamic: 350,
            heightDynamic: 300,
            clickSizeX: false,
            posX: 0,
            clickSizeY: false,
            posY: 0
        })

    useEffect(() => {
        const mm = (event) => {
            if (menuState1.clickSizeX) {
                let xx = (event.clientX - menuState1.posX)
                if (menuState1.widthDynamic === undefined || menuState1.widthDynamic === NaN) {
                    menuState1.widthDynamic = menuState1.posX
                }
                setMenuState1({
                    ...menuState1,
                    widthDynamic: (menuState1.widthDynamic + xx),
                    posX: event.clientX
                })
            } else if (menuState1.clickSizeY) {
                let yy = (event.clientY - menuState1.posY)
                if (menuState1.heightDynamic === undefined || menuState1.heightDynamic === NaN) {
                    menuState1.heightDynamic = menuState1.posY
                }
                setMenuState1({
                    ...menuState1,
                    heightDynamic: (menuState1.heightDynamic + yy),
                    posY: event.clientY
                })
            }
        }

        const mu = (event) => {
            if (menuState1.clickSizeX) {
                setMenuState1({...menuState1, clickSizeX: false,})
            }

            if (menuState1.clickSizeY) {
                setMenuState1({...menuState1, clickSizeY: false,})

            }
        }

        window.addEventListener('mousemove', mm);
        window.addEventListener('mouseup', mu);

        return () => {
            window.removeEventListener('mousemove', mm);
            window.removeEventListener('mouseup', mu);
        };

    })


    let styleVisibleInfo1;
    if (state.styleVisibleInfo2) {
        styleVisibleInfo1 = {
            display: 'block',
        }
    } else {
        styleVisibleInfo1 = {
            display: 'none',
        }
    }


    return (

        <div
            style={{
                borderBottom: "5px solid #555",
                height: menuState1.heightDynamic + "px",
                cursor: "s-resize",
                zIndex: '2'
            }}
            onMouseDown={
                (e) => {
                    if (e.currentTarget === e.target) {
                        setMenuState1({...menuState1, clickSizeY: true, posY: e.clientY})
                    }
                }}
        >

            <div
                style={{

                    borderRight: "5px solid #555",
                    cursor: "e-resize",
                    width: menuState1.widthDynamic + "px",

                }}
                onMouseDown={
                    (e) => {
                        // console.log(e)
                        if (e.currentTarget === e.target) {
                            setMenuState1({...menuState1, clickSizeX: true, posX: e.clientX})
                        }
                    }}
            >

                <div style={{
                    border: "1px solid #777",
                    width: menuState1.widthDynamic - 2 + "px",
                    height: menuState1.heightDynamic - 2 + "px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                    cursor: "default",
                }}
                >


                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            Trainer
                        </div>
                        <button onClick={btnVisibleInfo1}
                        >Info
                        </button>
                    </div>

                    {
                        styleVisibleInfo1.display === 'block' ?
                            <div style={{
                                border: '1px solid #555',
                                overflow: 'auto',
                            }}>
                                <b><p><i>360 знаков в минуту норма для копирайтера. 166ms</i></p></b>
                                <b><p><i>940 символов в минуту рекорд. 63ms</i></p></b>
                                <b>Средний интервал между нажатиями клавишь:</b>
                                <p>1000ms это 1 нажатие в секунду это 60 знаков в минуту.</p>
                                <p>500ms это 2 нажатий в секунду это 120 знаков в минуту.</p>
                                <p>250ms это 4 нажатий в секунду это 240 знаков в минуту.</p>
                                <p>100ms это 10 нажатий в секунду это 600 знаков в минуту.</p>

                            </div>
                            : ''
                    }


                    <div style={{
                        overflow: 'auto'
                    }}>
                        {/*// локальное время*/}
                        <div style={{
                            maxWidth: '400px',
                        }}>
                            {state.time99.map((text, index) =>
                                <i key={index} value={text} style={setColor1(text)}>{text}ms</i>
                            )
                            }
                        </div>
                        {Array.from(state.res).reverse()//результат
                            .map(function (o, index) {
                                if (state.arr1[(o[0] - 1)] === undefined) {
                                    return
                                }
                                return <i key={index} value={o}
                                          style={setColor1(o[1][1])}>
                                    {state.arr1[(o[0] - 1)][0].slice(0, 14)}
                                    [{o[1][0]}
                                    <br/></i>
                            })}
                    </div>
                </div>
            </div>

        </div>

    )
}
