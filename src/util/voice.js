const engine1 = new SpeechSynthesisUtterance();
engine1.lang = "en-US";

let voice1
const engine2 = new SpeechSynthesisUtterance();
engine2.lang = "ru";

export const voiceName = () => {
    const v1 = 'IVONA 2 Kimberly OEM'
    const v2 = 'IVONA 2 Tatyana OEM'

    voice1 = speechSynthesis.getVoices()

    voice1.forEach(o => {
        if (o.name === v2) {
            engine2.voice = o
        }
        if (o.name === v1) {
            engine1.voice = o
        }
    })

}

export const voiceEn = (TwoSpeech, textEN, textRU, rateVoice) => {
    //  добавить иф
    window.speechSynthesis.cancel()

    engine1.volume = 0.5
    engine1.rate = rateVoice;
    engine2.volume = 0.5
    engine2.rate = rateVoice

    if (textEN != null) {
        engine1.text = textEN
        window.speechSynthesis.speak(engine1);
        // console.log("voiceEn ", textEN)
    }
    if (textRU != null) {
        engine2.text = textRU

        window.speechSynthesis.speak(engine2);
        // console.log("voiceRu ", textRU)
    }

    // message1.addEventListener('end', () => {
    //     if (TwoSpeech) {
    //       //  voiceEn(false, textEN, textRU);
    //         TwoSpeech = false;
    //     }
    //     // console.log("end")
    // })

}
