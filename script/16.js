const show = () => {
    event.preventDefault();

    // 랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;

    // 사용자 입력 수 : 라디오의 체크값을 찾음
    let user;
    const radios = document.querySelectorAll('input[type = radio]'); //타입 속성을 찾아서 가져옴
    for(let item of radios) {
        console.log(item);
        if(item.checked) {
            user = item.value;
            break;
        }
    }

    // 랜덤수와 사용자입력수 같은지 검사
    if(n === parseInt(user)) { // 문자를 숫자로 바꿔주는 함수 
        document.querySelector('article h1').textContent = '주사위게임 : 승'
    }
    else {
        document.querySelector('article h1').textContent = '주사위게임 : 패'
    }

    // if (user == n) 주사위 게임: 맞춤(승)
    // else 주사위 게임: 틀림(패)

// 결과 출력
document.querySelector(".h2Class").innerHTML = `<img src = "./images/${n}.png">`;
}