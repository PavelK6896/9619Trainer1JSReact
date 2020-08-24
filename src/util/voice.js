const message1 = new SpeechSynthesisUtterance();
message1.lang = "en-US";

let voice1
const message2 = new SpeechSynthesisUtterance();
message2.lang = "ru";

export const voiceName = () => {
    const v1 = 'IVONA 2 Kimberly OEM'
    const v2 = 'IVONA 2 Tatyana OEM'

    voice1 = speechSynthesis.getVoices()

    voice1.forEach(o => {
        if (o.name === v2) {
            message2.voice = o
        }
        if (o.name === v1) {
            message1.voice = o
        }
    })

}

export const voiceEn = (TwoSpeech, textEN, textRU, rateVoice) => {
    //  добавить иф
    window.speechSynthesis.cancel()

    message1.volume = 0.5
    message1.rate = rateVoice;
    message2.volume = 0.5
    message2.rate = rateVoice

    if (textEN != null) {
        message1.text = textEN
        window.speechSynthesis.speak(message1);
        // console.log("voiceEn ", textEN)
    }
    if (textRU != null) {
        message2.text = textRU

        window.speechSynthesis.speak(message2);
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
