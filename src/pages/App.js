import React from 'react';

import {Menu1} from "../components/menu/menu";
import {Footer} from "../components/footer";

import {GlobalProvider} from "../components/global";
import {Main} from "../components/main/main";
import {Info} from "../components/info/info";


export function App() {

    return (

        <GlobalProvider>
            <div style={{
                margin: 0,
                padding: 0,
                minHeight: '100vh',
                maxHeight: '100vh',
                height: '100vh',
                display: "flex",
                flexDirection: "column",
            }}>
                {/*wrapper*/}
                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                }}>
                    <Menu1/>
                    <Main/>
                    <Info/>

                </div>
                <Footer/>
            </div>
        </GlobalProvider>
    );
}
