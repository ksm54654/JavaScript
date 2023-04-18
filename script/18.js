// 회문 체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value;

    // 입력내용이 없는 경우
    if(s.length == 0){
        document.querySelector("h2").textContent = '단어가 입력되지 않았습니다.'

        return;
    } 

    // 입력내용이 있는 경우
    let rs = '';

    // 방법1
    // for(let i = s.length - 1; i >= 0; i--){
    //     rs = rs + s[i];
    // }

    // 방법2 : 배열
    s = s.split('');    // 문자열.split(): 문자열을 분리자로 분리해서 배열을 만듦
    s = s.reverse();    // 배열.reverse(): 배열의 요소를 뒤집어줌
    rs = s.join('');    // 배열.join(): 배열의 요소를 문자열로 묵어줌
    // if(t1.value == rs)으로 판별해줘야함. (s안에 값을 바꿔서.)
    console.log("s = ", s, ",rs =", rs);

    // 결과 확인
    if(t1.value == rs){
        t2.value = '회문입니다.';
    }
    else{
        t2.value = '회문이 아닙니다.'; 
    }

}

// 숫자 합계 함수 
const numSum = (t1, t2) => {
    let s = t1.value;
    let sum = 0;
    
    // 문자열 순회
    for(let ch of s){
        console.log(ch, isNaN(ch)); // 문자열에서 하나씩 가져와서 숫자를 구분함.

        if(isNaN(ch) == false){ // if(!isNaN(ch))일케해도됨.
            sum = sum + parseInt(ch);   
        }
    }
    t2.value = sum;
    
    
   
}


document.addEventListener("DOMContentLoaded", () => { // dom이 다 만들어진 후에 콜백 함수 실행하겟다~ 라는 의미
    // DOM요소 가져오기 (제어할 것을들 잡아오기) 
    const t1 = document.querySelector("#t1");
    const t2 = document.querySelector("#t2");
    //const ts = document.querySelectorAll("input[type=text]"); // input타입의 텍스트를 가져온다는말.

    const bts = document.querySelectorAll(".bt"); // 버튼으로 가져오면 reset까지 가져오게 대서 class로 가져옴ㅇ.ㅇ 그리고 all이라 배열


    // 버튼 배열에 클릭이벤트 작성
    for (let bt of bts) {
        bt.addEventListener('click', (event) => {
            event.preventDefault();
            let gubun = bt.getAttribute('id').slice(-1); // -1는 맨 마지막거 ...
                        // bt.innerHTML; 
            if(gubun == 1) palindrome(t1, t2);  // if(gubun === '1') palindrome(); 데이터 타입까지 구분해서 
            else numSum(t1, t2);

        });
    }
});  