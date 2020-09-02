import css1 from "../data1/css1.json";

import dictionary1 from "../data1/dictionary1.json";
import dictionary2 from "../data1/dictionary2.json";

import * as j1 from "../data1/j1";
import * as sql from "../data1/sql";
import * as wordf from "../data1/word";
import React from "react";


export const Menu1 = ({startHandler, setData}) => {


    const sqlz =  Object.keys(sql);
    const j1z =  Object.keys(j1);
    const word =  Object.keys(wordf);


    return (<div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '10vw',
            width: '10vw',
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
        }}>

            {
                Object.values(wordf).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            setData(o);
                            startHandler( "" ,word[index]);
                        }}> {word[index]} </button>)}
                )
            }

            {
                Object.values(j1).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            setData(o);
                            startHandler("", j1z[index]);
                        }}> {j1z[index]} </button>)}
                )
            }


            <button onClick={() => {
                setData(css1);
                startHandler("", "css1");
            }}>css
            </button>


            <button onClick={() => {
                setData(dictionary1);
                startHandler("", "dictionary1");
            }}>dictionary1
            </button>

            <button onClick={() => {
                setData(dictionary2);
                startHandler("", "dictionary2");
            }}>dictionary2
            </button>


            {
                Object.values(sql).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            setData(o);
                            startHandler("", sqlz[index]);
                        }}> {sqlz[index]} </button>)}
                )
            }


        </div>
    )

}


