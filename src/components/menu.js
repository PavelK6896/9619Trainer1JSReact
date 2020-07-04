import css1 from "../data1/css1.json";
import spring1 from "../data1/spring1.json";
import word1 from "../data1/word1.json";
import words1 from "../data1/words1.json";
import dictionary1 from "../data1/dictionary1.json";
import dictionary2 from "../data1/dictionary2.json";

import {bootsrap1, html1, html5, kotlin1, java1, js1} from "../data1/d1";
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

                setData(java1);
                startHandler();
            }}>java
            </button>


            <button onClick={() => {

                setData(kotlin1);
                startHandler();
            }}>kotlin
            </button>

            <button onClick={() => {

                setData(js1);
                startHandler();
            }}>java script
            </button>




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

                setData(html1);
                startHandler();
            }}>html
            </button>
            <button onClick={() => {

                setData(html5);
                startHandler();
            }}>html5
            </button>

            <button onClick={() => {
                setData(css1);
                startHandler();
            }}>css
            </button>



            <button onClick={() => {
                setData(bootsrap1);
                startHandler();
            }}>boot s rap
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

        </div>
    )

}


