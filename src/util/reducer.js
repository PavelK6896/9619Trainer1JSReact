import {voiceEn} from "../util/voice";

export function reducer(state, action) {

    function voice(en ,ru ) {
        if (state.en && state.ru){
            voiceEn( true, en, ru)
        }else if (!state.en && state.ru){
            voiceEn( true, null, ru)
        }else if (state.en && !state.ru){
            voiceEn( true, en, null)
        }
    }

    function endDictionary() {
        if (state.it + 1 >= action.arr1.length) {


            return {
                ...state,
                it: 0,
                text1: action.arr1[0][1],
                text2: action.arr1[0][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                time99: [],
                count1: state.count0
            }

        } else {


            voice(action.arr1[state.it + 1][0], action.arr1[state.it + 1][1])

            return {
                ...state,
                it: state.it + 1,
                text1: action.arr1[state.it + 1][1],
                text2: action.arr1[state.it + 1][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                time99: [],
                count1: state.count0,
            }
        }
    }




    switch (action.type) {
        case 'count1':
            return {
                ...state,
                count1: action.count,
                count0: action.count
            }

        case 'ru1':
            return {
                ...state,
                ru: !state.ru,
            }

        case 'en1':
            return {
                ...state,
                en: !state.en,
            }



        case 'check1':

            return {
                ...state,
                check1: !state.check1,
            }

        case 'check2':


            return {
                ...state,
                check2: !state.check2,
            }

        case 'startHandler':

            return {
                ...state,
                it: 0,
                text1: action.arr1[0][1],
                text2: action.arr1[0][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                time99: [],
                count1: state.count0
            }

        case 'nextHandler':
            if (state.it + 1 >= action.arr1.length) {
                return {
                    ...state,
                    it: 0,
                    text1: action.arr1[0][1],
                    text2: action.arr1[0][0],
                    textInput: "",
                    data: 0,
                    data2: 0,
                    time1: 0,
                    right: 0,
                    wrong: 0,
                    time99: [],
                    count1: state.count0
                }
            }


            return {
                ...state,
                it: state.it + 1,
                text1: action.arr1[state.it + 1][1],
                text2: action.arr1[state.it + 1][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                time99: [],
                count1: state.count0
            }

        case 'key':
            if (state.text2[0] === action.key) { // right
                let avgTime = Math.round(action.data2 / (state.right + 1))


                if (state.text2.length === 1) { // end lines

                    if (action.res.get(state.it + 1) !== undefined) { // set new record

                        if (action.res.get(state.it + 1)[1] > avgTime) { // new record
                            action.res.set(state.it + 1, [avgTime + "ms](" +
                            Math.round(60000 / avgTime) + "in minute)allTime-" + action.data2, avgTime])
                        }


                    } else {

                        action.res.set(state.it + 1, [avgTime + "ms](" +
                        Math.round(60000 / avgTime) + "in minute)allTime-" + action.data2, avgTime])

                    }


                    if (state.check1) { // cycle active


                        if (state.count1 <= 1){ // cycle end
                            return endDictionary();
                        }else {
                            state.time99.push(avgTime)

                            voice( action.arr1[state.it][0], action.arr1[state.it ][1])

                            return { // cycle count next
                                ...state,
                                text1: action.arr1[state.it][1],
                                text2: action.arr1[state.it][0],
                                textInput: "",
                                data: 0,
                                data2: 0,
                                time1: 0,
                                right: 0,
                                wrong: 0,
                                count1: state.count1 - 1,
                            }
                        }
                    }

                    return endDictionary();

                } else { // no end lines



                    return { //right next
                        ...state,
                        text2: state.text2.substr(1),
                        textInput: state.textInput + action.key,
                        right: state.right + 1,
                        data: action.data,
                        data2: action.data2,
                        wrong2: false

                    }
                }

            } else {//error



                if (state.check2) { // error // start
                    return {
                        ...state,
                        text1: action.arr1[state.it][1],
                        text2: action.arr1[state.it][0],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        wrong2: true
                    }
                }else {

                    return { // error
                        ...state,
                        wrong: state.wrong + 1,
                        data: action.data,
                        data2: action.data2,

                    }
                }
            }

        default:
            throw new Error();
    }
}