import React from 'react';

import {Menu1} from "../components/menu/menu";
import {Footer} from "../components/Footer";

import {GlobalProvider} from "../store/global";
import {Main} from "../components/main/main";
import {Info} from "../components/info/info";
import {Header} from "../components/Header";


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
                <Header/>
                {/*wrapper*/}
                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: "row",
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
