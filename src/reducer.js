


export function reducer(state, action) {
    switch (action.type) {
        case 'check1':
            console.log("check1", state.check1)

            return {
                ...state,
                check1: !state.check1,
            }

        case 'check2':
            console.log("check2", state.check2)

            return {
                ...state,
                check2: !state.check2,
            }

        case 'startHandler':
            console.log("startHandler")
            return {
                it: 0,
                text1: action.arr1[0][1],
                text2: action.arr1[0][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                check1: state.check1,
                time99: [],
                check2: state.check2,
            }

        case 'nextHandler':
            console.log("nextHandler ", state.it)
            if (state.it + 1 >= action.arr1.length) {
                return {
                    it: 0,
                    text1: action.arr1[0][1],
                    text2: action.arr1[0][0],
                    textInput: "",
                    data: 0,
                    data2: 0,
                    time1: 0,
                    right: 0,
                    wrong: 0,
                    check1: state.check1,
                    time99: [],
                    check2: state.check2,
                }
            }
            return {
                it: state.it + 1,
                text1: action.arr1[state.it + 1][1],
                text2: action.arr1[state.it + 1][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                check1: state.check1,
                time99: [],
                check2: state.check2,
            }
        case 'key':
            if (state.text2[0] === action.key) {

                if (state.text2.length === 1) {

                    if (action.res.get(state.it + 1) !== undefined) { // set new record
                        if (action.res.get(state.it + 1)[1] > state.time1) {
                            action.res.set(state.it + 1, [state.time1 + "ms](" + Math.round(60000 / state.time1) + "in minute)", state.time1])
                        }
                    } else {
                        action.res.set(state.it + 1, [state.time1 + "ms](" + Math.round(60000 / state.time1) + "in minute)", state.time1])
                    }

                    if (state.check1) { // cycle
                        state.time99.push(state.time1)
                        return {
                            it: state.it,
                            text1: action.arr1[state.it][1],
                            text2: action.arr1[state.it][0],
                            textInput: "",
                            data: 0,
                            data2: 0,
                            time1: 0,
                            right: 0,
                            wrong: 0,
                            check1: state.check1,
                            time99: state.time99,
                            check2: state.check2,
                        }
                    }

                    if (state.it + 1 >= action.arr1.length) {
                        return { // end
                            it: 0,
                            text1: action.arr1[0][1],
                            text2: action.arr1[0][0],
                            textInput: "",
                            data: 0,
                            data2: 0,
                            time1: 0,
                            right: 0,
                            wrong: 0,
                            check1: state.check1,
                            time99: [],
                            check2: state.check2,
                        }
                    }


                    return { // next
                        it: state.it + 1,
                        text1: action.arr1[state.it + 1][1],
                        text2: action.arr1[state.it + 1][0],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        check1: state.check1,
                        time99: [],
                        check2: state.check2,
                    }


                } else {


                    return {
                        it: state.it,
                        text1: state.text1,
                        text2: state.text2.substr(1),
                        textInput: state.textInput + action.key,
                        data: action.data,
                        data2: action.data2,
                        time1: action.time1,
                        right: state.right + 1,
                        wrong: state.wrong,
                        check1: state.check1,
                        time99: state.time99,
                        check2: state.check2,
                    }
                }

            } else {

                if (state.check2) { // error // start
                    return {
                        it: state.it,
                        text1: action.arr1[state.it][1],
                        text2: action.arr1[state.it][0],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        check1: state.check1,
                        time99: state.time99,
                        check2: state.check2,
                    }
                }else {

                    return { // error
                        it: state.it,
                        text1: state.text1,
                        text2: state.text2,
                        textInput: state.textInput,
                        data: action.data,
                        data2: action.data2,
                        time1: action.time1,
                        right: state.right,
                        wrong: state.wrong + 1,
                        check1: state.check1,
                        time99: state.time99,
                        check2: state.check2,
                    }
                }
            }
        default:
            throw new Error();
    }
}