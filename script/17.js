// 함수
// 섭씨온도 화씨온도 변환
const cTof = (ctemp) => {
    ftemp = (ctemp * 1.8) + 32;
    return ftemp;
}

// 화씨온도 섭씨온도 변환
const fToc = (ftemp) => {
    ctemp = (ftemp - 32) / 1.8;
    return ctemp;
}

// select 토글 
const selToggle = (s1, s2, t1, t2) => {
    t1.value = '';
    t2.value = '';

     // 하나 change 되면 다른 하나도 바뀌게 하는 법
    if (s1.value == '℃') {
        s2.value = '℉';
    }
    else if (s1.value == '℉') {
        s2.value = '℃';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const se1 = document.querySelector('#se1');
    const se2 = document.querySelector('#se2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    // 단위 표시
    d1.textContent = se1.value;
    d2.textContent = se2.value;

    // select 값이 변경이 될 때
    se1.addEventListener('change', (event) => {
        selToggle(se1, se2, t1, t2);
        d1.textContent = se1.value;
        d2.textContent = se2.value;

    });
    se2.addEventListener('change', () => {
        selToggle(se2, se1, t1, t2);
        d1.textContent = se1.value;
        d2.textContent = se2.value;

    });

    // input에 값이 입력되었을 때 
    t1.addEventListener('input', (event) => {
        if (se1.value == se2.value) {
            t2.value = t1.value;
        }
        else if (se1.value == '℃') {
            // 섭씨온도 -> 화씨온도
            t2.value = cTof(t1.value);
        }
        else if (se1.value == '℉' && se2.value == '℃') {
            // 화씨온도 -> 섭씨온도
            t2.value = fToc(t1.value);
        }
        //console.log(event.target.value);  //숫자가 입력 될 때 마다 이벤트가 발생함
    });

    // (화씨 - 32도) / 1.8 = 섭씨 
    // 섭씨 * 1.8 + 32도 = 화씨
});