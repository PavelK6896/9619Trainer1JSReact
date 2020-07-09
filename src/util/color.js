
export default function setColor1(t){

    let color = 'rgba(173,165,165,0.89)';

    if (t > 1 && t <= 50) {
        color = 'rgba(55,253,0,0.8)';
    } else if (t > 50 && t <= 100) {
        color = 'rgba(0,239,97,0.8)';
    }else if (t > 100 && t <= 150) {
        color = 'rgba(0,248,255,0.8)';
    }else if (t > 150 && t <= 200) {
        color = 'rgba(0,136,246,0.94)';
    }else if (t > 200 && t <= 250) {
        color = 'rgb(245,235,0)';
    }else if (t > 250 && t <= 300) {
        color = 'rgba(252,130,6,0.94)';
    } else if (t > 300 && t <= 350) {
        color = 'rgba(255,0,0,0.92)';
    }

    return {backgroundColor: color};
}
