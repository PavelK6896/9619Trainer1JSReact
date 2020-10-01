import React from "react";
import setColor1 from "../../util/color";
import {useGlobalContext} from "../../store/global";

export const Info = () => {

    const {state} = useGlobalContext()

    return (<div>

        <div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '30vw',
            width: '30vw',
        }}>
            <div style={{
                border: '2px solid #777',
                maxHeight: '20vh',
                height: '20vh',
                overflow: 'scroll',
            }}>
                <b><p><i>360 знаков в минуту норма для копирайтера. 166ms</i></p></b>
                <b><p><i>940 символов в минуту рекорд. 63ms</i></p></b>
                <b>Средний интервал между нажатиями клавишь:</b>
                <p>1000ms это 1 нажатие в секунду это 60 знаков в минуту.</p>
                <p>500ms это 2 нажатий в секунду это 120 знаков в минуту.</p>
                <p>250ms это 4 нажатий в секунду это 240 знаков в минуту.</p>
                <p>100ms это 10 нажатий в секунду это 600 знаков в минуту.</p>

            </div>

            <div style={{//3 bloc 2
                border: '2px solid #777',
                maxHeight: '50vh',
                height: '50vh',
                overflow: 'scroll'
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

                {Array
                    .from(state.res).reverse()//результат
                    .map(function (o, index) {

                        if (state.arr1[(o[0] - 1)] === undefined){
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

    </div>)

}
