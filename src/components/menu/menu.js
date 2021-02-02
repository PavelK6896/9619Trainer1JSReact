import React, {useEffect, useState} from "react";
import {useGlobalContext} from "../../store/global";

export const Menu1 = () => {
    const {state, startHandler, word99} = useGlobalContext()
    const buttonArr = [];

    const [menuState1, setMenuState1] = useState(
        {
            dic: false,
            widthDynamic: 200,
            heightDynamic: 400,
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


    let styleDictionary;

    if (menuState1.dic) {
        styleDictionary = {
            display: 'block',
        }
    } else {
        styleDictionary = {
            display: 'none',
        }
    }


    let button1W = menuState1.widthDynamic / 1.5;
    // document.documentElement.clientWidth

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
                    {//делает кнопки

                        Object.values(state.arr99)
                            .map((o, index, arr) => {
                                if (word99[index].substr(0, 5) == 'dicti') {
                                    if (menuState1.dic) {
                                        buttonArr.push(<button
                                            key={index}
                                            style={{
                                                width: button1W + "px"
                                            }}
                                            onClick={() => {
                                                startHandler("", word99[index], o, index);
                                            }}
                                        > {word99[index]} </button>)
                                    }

                                    return
                                }

                                return (<button
                                    key={index}
                                    onClick={() => {
                                        startHandler("", word99[index], o, index);
                                    }}
                                > {word99[index]} </button>)
                            })
            }
            <button
                onClick={() => {
                    setMenuState1({dic: !menuState1.dic})
                }}
            >dictionary
                {
                    menuState1.dic? <>&#9650;</> : <>&#9660;</>
                }
            </button>
            <div
                style={{...styleDictionary}}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                }}>
                    {
                        buttonArr.map(m => {
                            return m
                        })
                    }
                </div>
            </div>
                </div>

            </div>

        </div>
    )
}
