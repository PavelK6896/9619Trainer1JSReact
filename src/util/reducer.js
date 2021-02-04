import {voiceEn, voiceName} from "./voice";


export function reducer(state, action) {

    function voice(en, ru) {
        if (state.en && state.ru) {
            voiceEn(true, en, ru, state.rateVoice)
        } else if (!state.en && state.ru) {
            voiceEn(true, null, ru, state.rateVoice)
        } else if (state.en && !state.ru) {
            voiceEn(true, en, null, state.rateVoice)
        }
    }

    function endDictionary() {
        if (state.it + 1 >= state.arr1.length) {//конец словаря
            if (state.allDictionary) {//
                if (state.arr99.length > state.currentArr) {//следующий словарь
                    voice(state.arr99[state.currentArr + 1][0][0], state.arr99[state.currentArr + 1][0][1])
                    return {
                        ...state,
                        it: 0,
                        text1: state.arr99[state.currentArr + 1][0][1],
                        text2: state.arr99[state.currentArr + 1][0][0],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        arr1: state.arr99[state.currentArr + 1],
                        //  time99: [],
                        count1: 0,
                        currentArr: state.currentArr + 1,
                        nameData: state.word99[state.currentArr + 1],
                        res: new Map()
                    }

                } else {//первый словарь


                    voice(state.arr99[state.currentArr][0][0], state.arr99[state.currentArr][0][1])
                    return {
                        ...state,
                        it: 0,
                        text1: state.arr99[state.currentArr][0][1],
                        text2: state.arr99[state.currentArr][0][0],
                        arr1: state.arr99[state.currentArr],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        //  time99: [],
                        count1: 0,
                        currentArr: state.currentArr,
                        res: new Map()
                    }
                }


            } else {
                voice(state.arr1[0][0], state.arr1[0][1])
                return {
                    ...state,
                    it: 0,
                    text1: state.arr1[0][1],
                    text2: state.arr1[0][0],
                    textInput: "",
                    data: 0,
                    data2: 0,
                    time1: 0,
                    right: 0,
                    wrong: 0,
                    //  time99: [],
                    count1: state.count0
                }
            }


        } else {

            voice(state.arr1[state.it + 1][0], state.arr1[state.it + 1][1])
            return {
                ...state,
                it: state.it + 1,
                text1: state.arr1[state.it + 1][1],
                text2: state.arr1[state.it + 1][0],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                //   time99: [],
                count1: state.count0,
            }
        }

    }//--

    switch (action.type) {

        case 'info1':
            return {
                ...state,
                info1: action.info1
            }

        case 'styleVisibleInfo2':
            return {
                ...state,
                styleVisibleInfo2: !state.styleVisibleInfo2,
            }

        case 'styleSetting2':
            return {
                ...state,
                styleSetting2: !state.styleSetting2,
            }

        case 'styleKeyboard2':
            return {
                ...state,
                styleKeyboard2: !state.styleKeyboard2,
            }

        case 'rateVoice1':
            return {
                ...state,
                rateVoice: action.rateVoice
            }

        case 'voiceCycle1':
            return {
                ...state,
                voiceCycle: !state.voiceCycle,
            }


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

        case 'allDictionary1':
            return {
                ...state,
                allDictionary: !state.allDictionary,
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

            voiceName()
            let i = state.currentArr
            if (action.index !== undefined) {
                i = action.index
                state.nameData = action.nameData
            }


            voice(state.arr99[i][0][0], state.arr99[i][0][1])
            return {
                ...state,
                it: 0,
                text1: state.arr99[i][0][1],
                text2: state.arr99[i][0][0],
                arr1: state.arr99[i],
                textInput: "",
                data: 0,
                data2: 0,
                time1: 0,
                right: 0,
                wrong: 0,
                time99: [],
                count1: state.count0,
                nameData: state.nameData,
                currentArr: i,
            }

        case 'nextHandler':
            if (state.it + 1 >= state.arr1.length) {
                return {
                    ...state,
                    it: 0,
                    text1: state.arr1[0][1],
                    text2: state.arr1[0][0],
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

            voice(state.arr1[state.it + 1][0], state.arr1[state.it + 1][1])
            return {
                ...state,
                it: state.it + 1,
                text1: state.arr1[state.it + 1][1],
                text2: state.arr1[state.it + 1][0],
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

                // end lines
                if (state.text2.length === 1) {

                    let inMinute = Math.round(60000 / avgTime);
                    state.avg1.push(avgTime)

                    if (state.res.get(state.it + 1) !== undefined) { // set new record
                        if (state.res.get(state.it + 1)[1] > avgTime) { // new record

                            state.res.set(state.it + 1, [avgTime + "ms](" +
                            inMinute + "in minute)allTime-" + action.data2, avgTime])
                        }
                    } else {

                        state.res.set(state.it + 1, [avgTime + "ms](" +
                        inMinute + "in minute)allTime-" + action.data2, avgTime])

                    }

                    // cycle active
                    if (state.check1) {
                        if (state.count1 === state.count0) {
                            state.time99 = []
                        }

                        state.time99.push(avgTime)


                        if (state.count1 <= 1) { // cycle end

                            return endDictionary();
                        } else {


                            if (state.voiceCycle) {
                                voice(state.arr1[state.it][0], state.arr1[state.it][1])
                            }

                            return { // cycle count next
                                ...state,
                                text1: state.arr1[state.it][1],
                                text2: state.arr1[state.it][0],
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

                //error
            } else {


                if (state.check2) { // error // start
                    return {
                        ...state,
                        text1: state.arr1[state.it][1],
                        text2: state.arr1[state.it][0],
                        textInput: "",
                        data: 0,
                        data2: 0,
                        time1: 0,
                        right: 0,
                        wrong: 0,
                        wrong2: true
                    }
                } else {

                    return { // error
                        ...state,
                        wrong: state.wrong + 1,
                        data: action.data,
                        data2: action.data2,

                    }
                }
            }//--

        default:
            throw new Error();
    }
}
