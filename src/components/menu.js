import css1 from "../data1/css1.json";
import css2 from "../data1/css2.json";
import css3 from "../data1/css3.json";
import css4 from "../data1/css4.json";
import css5 from "../data1/css5.json";
import spring1 from "../data1/spring1.json";
import word1 from "../data1/word1.json";
import words1 from "../data1/words1.json";
import {bootsrap1, html1, java1, js1} from "../data1/d1";
import React from "react";


export const Menu1 = ({startHandler, setData}) => {

    return (<div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '10vw',
            width: '10vw',
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
        }}>
            <button onClick={() => {
                setData(css1);
                startHandler();
            }}>css1
            </button>
            <button onClick={() => {

                setData(css2);
                startHandler();
            }}>css2
            </button>
            <button onClick={() => {
                setData(css3);
                startHandler();
            }}>css3
            </button>
            <button onClick={() => {

                setData(css4);
                startHandler();
            }}>css4
            </button>
            <button onClick={() => {

                setData(css5);
                startHandler();
            }}>css5
            </button>
            <button onClick={() => {

                setData(spring1);
                startHandler();
            }}>spring1
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

                setData(html1);
                startHandler();
            }}>html1
            </button>
            <button onClick={() => {

                setData(js1);
                startHandler();
            }}>js1
            </button>
            <button onClick={() => {

                setData(java1);
                startHandler();
            }}>java1
            </button>
            <button onClick={() => {

                setData(bootsrap1);
                startHandler();
            }}>bootsrap1
            </button>

        </div>
    )

}


