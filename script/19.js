// 배열 filter 구현
const myFilter = (item) => {

}

document.addEventListener("DOMContentLoaded", () => {
    const sbts = document.querySelectorAll(".sbt");
    const dbts = document.querySelectorAll(".dbt");
    const cbts = document.querySelectorAll(".cbt");
    const btReset = document.querySelector('#btReset');
    const t1 = document.querySelector('#t1');

    // 배열의 초기화
    let arr = [];

    // 모든 버튼 이벤트 추가
    // reset 기능 구현
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        // 만든 배열도 다 초기화 시켜주기 위함.
        t1.value = '';
        arr = [];
    });

    // 배열의 자료 추가
    for (let sbt of sbts) {
        sbt.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log(sbt.textContent);
            switch (sbt.textContent) {
                case '사과':
                    arr.push('🍎');
                    break;
                case '바나나':
                    arr.push('🍌');
                    break;
                case '오렌지':
                    arr.push('🍊');
                    break;
                case '수박':
                    arr.push('🍉');
                    break;

            }
            console.log(arr);
            // t1.value = arr.toString(); 
            t1.value = arr.join(''); // input타입은 value값 줘야한다. 

        });
    }

    // 배열에서 자료 삭제
    for (let dbt of dbts) {
        dbt.addEventListener('click', (e) => {
            e.preventDefault();
            let gubun = dbt.textContent.replace('삭제', ''); // 삭제 부분을 ... replace...? ㅇㅂㅇ ... 오!! ''으로 replace한거!!! 
            // console.log(gubun);

            // filter  
            // switch (gubun) {   
            //     case '사과 ':
            //         arr = arr.filter((item) => item != '🍎'); // 사과가 아닌것만 새 배열로 만듦.
            //         break;
            //     case '바나나 ':  // filter 안에 for of 기능이 존재함.() => 
            //         arr = arr.filter((item) => item != '🍌');
            //         break;
            //     case '오렌지 ':
            //         arr = arr.filter((item) => item != '🍊');
            //         break;
            //     case '수박 ':
            //         arr = arr.filter((item) => item != '🍉');
            //         break;
            // }

            // filter를 사용하지 않는 경우
            let temp = [];
            for (let item of arr) {
                switch (gubun) {
                    case '사과 ':
                        if (item != '🍎') temp.push(item);
                        break;
                    case '바나나 ':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지 ':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박 ':
                        if (item != '🍉') temp.push(item);
                        break;
                }
            }
            arr = temp;

            console.log(arr);
            t1.value = arr.join('');

        });
    }
    for (let cbt of cbts) {
        cbt.addEventListener('click', (e) => {
            e.preventDefault();

            let gubun = cbt.textContent.split(' -> ')[0].trim(); // split하면 ->를 기준으로 문자열이 나뉘어짐 . 그중 0번째
            console.log(gubun);                                  // trim은 앞뒤의 혹시모를 공백 제거 

            let temp = [];
            // for (let item of arr) {
            //     switch (gubun) {
            //         case '사과':
            //             if (item == '🍎') temp.push('🥕');
            //             else temp.push(item);
            //             break;
            //         case '바나나':
            //             if (item == '🍌') temp.push('🥒');
            //             else temp.push(item);
            //             break;
            //         case '오렌지':
            //             if (item == '🍊') temp.push('🥑');
            //             else temp.push(item);
            //             break;
            //         case '수박':
            //             if (item == '🍉') temp.push('🥦');
            //             else temp.push(item);
            //             break;
            //     }
            // }

            // map으로 풀기
            switch (gubun) {
                case '사과':
                    arr = arr.map((item) => item == '🍎' ? '🥕' : item);
                    break;
                case '바나나':
                    arr = arr.map((item) => item == '🍌' ? '🥒' : item);
                    break;
                case '오렌지':
                    arr = arr.map((item) => item == '🍊' ? '🥑' : item);
                    break;
                case '수박':
                    arr = arr.map((item) => item == '🍉' ? '🥦' : item);
                    break;
            }

            // 문자열로 풀기
            // temp = arr.join(',');
            // console.log(temp)
            // switch (gubun) {
            //     case '사과':
            //         temp = temp.replaceAll('🍎' , '🥕');
            //         break;
            //     case '바나나':
            //         temp = temp.replaceAll('🍌' , '🥒');
            //         break;
            //     case '오렌지':
            //         temp = temp.replaceAll('🍊' , '🥑');
            //         break;
            //     case '수박':
            //         temp = temp.replaceAll('🍉' , '🥦');
            //         break;
            // }
            // console.log(temp)
            // arr = temp.split(',');

            t1.value = arr.join('');
        });
    }
});