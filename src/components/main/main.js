import React from "react";
import {Top} from "./componynts/top";
import {Middle} from "./componynts/middle";
import {Bottom} from "./componynts/bottom";

export const Main = () => {


    return (<div>

        <div style={{
            paddingLeft: '2px',
            border: '2px solid #777',
            maxWidth: '40vw',
            width: '40vw',
            overflow: "auto",
        }}>
            <Top></Top>
            <Middle></Middle>
            <Bottom></Bottom>




        </div>

    </div>)


}
