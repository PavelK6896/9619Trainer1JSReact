const message1 = new SpeechSynthesisUtterance();
message1.lang = "en-US";
message1.volume = 1
message1.rate = 10;

const message2 = new SpeechSynthesisUtterance();
message2.lang = "ru";
message2.volume = 1
message2.rate = 10;

export const voiceEn = (TwoSpeech, textEN, textRU) => {

    if (textEN != null) {
        message1.text = textEN
        window.speechSynthesis.speak(message1);

        console.log("voiceEn ", textEN)
    }
    if (textRU != null) {
        message2.text = textRU
        window.speechSynthesis.speak(message2);
        console.log("voiceRu ", textRU)
    }

    message1.addEventListener('end', () => {
        if (TwoSpeech) {
          //  voiceEn(false, textEN, textRU);
            TwoSpeech = false;
        }
        console.log("end")
    })
}
