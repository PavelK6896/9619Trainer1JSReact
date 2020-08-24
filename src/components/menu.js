import css1 from "../data1/css1.json";
import spring1 from "../data1/spring1.json";
import word1 from "../data1/word1.json";
import words1 from "../data1/words1.json";
import dictionary1 from "../data1/dictionary1.json";
import dictionary2 from "../data1/dictionary2.json";

import * as j1 from "../data1/j1";
import * as sql from "../data1/sql";
import * as word2 from "../data1/word2";
import React from "react";


export const Menu1 = ({startHandler, setData}) => {


    const sqlz =  Object.keys(sql);
    const j1z =  Object.keys(j1);
    const word =  Object.keys(word2);

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
                Object.values(word2).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            setData(o);
                            startHandler(word[index]);
                        }}> {word[index]} </button>)}
                )
            }

            {
                Object.values(j1).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            setData(o);
                            startHandler(j1z[index]);
                        }}> {j1z[index]} </button>)}
                )
            }

            <button onClick={() => {

                setData(spring1);
                startHandler();
            }}>spring
            </button>


            <button onClick={() => {

                setData(word1);
                startHandler();
            }}>word1
            </button>


            <button onClick={() => {

                setData(words1);
                startHandler();
            }}>words1
            </button>


            <button onClick={() => {
                setData(css1);
                startHandler();
            }}>css
            </button>


            <button onClick={() => {
                setData(dictionary1);
                startHandler();
            }}>dictionary1
            </button>

            <button onClick={() => {
                setData(dictionary2);
                startHandler();
            }}>dictionary2
            </button>


            {
                Object.values(sql).map(
                    function (o, index, arr) {
                        return (<button key={index} onClick={() => {
                            setData(o);
                            startHandler(sqlz[index]);
                        }}> {sqlz[index]} </button>)}
                )
            }


        </div>
    )

}


