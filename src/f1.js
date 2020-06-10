

export default function setColor1(t){

    let s = {backgroundColor: '#938e8e'};

    if (t > 100 && t <= 200) {
        s = {backgroundColor: 'rgba(231,126,82,0.8)'};
    } else if (t > 200 && t <= 300) {
        s = {backgroundColor: 'rgba(220,153,54,0.86)'};
    } else if (t > 300 && t <= 400) {
        s = {backgroundColor: 'rgba(166,217,41,0.82)'};
    } else if (t > 400 && t <= 500) {
        s = {backgroundColor: 'rgba(83,226,138,0.9)'};
    } else if (t > 500 && t <= 600) {
        s = {backgroundColor: '#50dff1'};
    } else if (t > 600 && t <= 700) {
        s = {backgroundColor: '#558dec'};
    } else if (t > 700 && t <= 800) {
        s = {backgroundColor: '#ab56f5'};
    } else if (t > 800 && t <= 900) {
        s = {backgroundColor: '#f33eea'};
    }

    return s;
}


export const setText2 = (s) => {
    console.log(s.slice(0,4), "slice")
    return s
}

