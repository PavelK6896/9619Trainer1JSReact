import React, {useState} from "react";
import {useGlobalContext} from "../../store/global";

export const Menu1 = () => {
    const {state, startHandler, word99} = useGlobalContext()
    const buttonArr = new Array();

    const [menuState1, setMenuState1] = useState(
        {
            dic: false
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

    return (<div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '10vw',
            width: '10vw',
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
        }}>

            {//делает кнопки
                Object.values(state.arr99)
                    .map((o, index, arr) => {
                        if (word99[index].substr(0, 5) == 'dicti') {
                            if (menuState1.dic) {
                                buttonArr.push(<button
                                    key={index}
                                    style={{
                                        minWidth: '8vw',
                                        maxWidth: '8vw',
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
    )
}
