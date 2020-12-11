import React, {useState} from "react";
import {Top} from "./componynts/top";
import {Middle} from "./componynts/middle";
import {Bottom} from "./componynts/bottom";

export const Main = () => {

    const [state5, setState5] = useState({widthMain: 800})
    const setWidth = (size) => {
        setState5(prevState => {
            return ({...prevState, widthMain: size})
        })
    }

    //мов ап курсор ввиде стрелок
    //мов давн курсор обычьный блокировка тру
    //клик блокировка фалсе 
    //просто мов координаты

    // let style2 = {
    //     width: 50
    // }
    // function dicSize(e) {
    //     console.log(e)
    //     let change = curr_width + (e.clientX - curr_width);
    //     if (unlock) {
    //         style1 = {width: change}
    //         style2 = {marginLeft: change}
    //     }
    // }

    return (<div>

        <button onClick={() => setWidth(400)}>400</button>
        <button onClick={() => setWidth(600)}>600</button>
        <button onClick={() => setWidth(800)}>800</button>
        <button onClick={() => setWidth(1000)}>1000</button>
        <div
            style={{
                width: state5.widthMain,
                paddingLeft: '2px',
                border: '2px solid #777',
                overflow: "auto",
            }}
        >
            <Top></Top>
            <Middle></Middle>
            <Bottom></Bottom>

        </div>

    </div>)
}
