import React, {Component} from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            text: "class App extends React.Component {",
            text2: "class App extends React.Component {",
            colorText: "black",
            ch: 0
        }
    }

    render() {

        const text1 = (event) => {
            if (this.state.text.length !== 0) {
                if (event.target.value[event.target.value.length - 1] === this.state.text[0]) {

                    if (this.state.ch < event.target.value.length) {
                        console.log(this.state.ch, event.target.value.length)

                        this.setState(
                            {
                                text: this.state.text.substr(1),
                                colorText: "black",
                                ch: event.target.value.length
                            })
                    }else{
                        console.log(this.state.ch, event.target.value.length)
                        this.setState(
                            {
                                ch: event.target.value.length
                            })
                    }

                } else {
                    this.setState(
                        {
                            colorText: "red"
                        })
                }
            }
        }

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
                maxWidth: "80%",
            }}>
                <h1> <pre>
                   {this.state.text}</pre>
                </h1>
                <h1 style={{
                    color: this.state.colorText
                }}>{this.state.text2}</h1>
                <input type="text"   onChange={text1}/>
            </div>
        );
    }
}

export default App;
