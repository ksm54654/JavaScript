// function show() {
//     //alert("안녕하세요.");
//     event.preventDefault();
//     document.getElementById("h2id").innerHTML = "안녕하세요";
// }

//화살표 함수로 변경  
const show = () => {
    event.preventDefault();

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1;  //숫자가 계속 바뀌어야 하므로 const사용불가
    console.log(n);

    document.getElementById("h2id").innerHTML = `<img src='./images/${n}.png'>`;

    //document.getElementById("h2id").innerHTML = "<img src='./images/" + n + ".png'>";
    
    //if(n == 1) document.getElementById("h2id").innerHTML = "<img src='./images/1.png'>";//밖에 큰 따옴표라 안에는 작은 따옴표.

    //switch(n){
    //    case 1 : document.getElementById("h2id").innerHTML = "<img src='./images/1.png'>" ; break;
    //}

    // let imgArr = [ "<img src='./images/1.png'>",
    //                 "<img src='./images/1.png'>",
    //                 "<img src='./images/1.png'>",
    //                 "<img src='./images/1.png'>",
    //                 "<img src='./images/1.png'>",
    //                 "<img src='./images/1.png'>"
    // ]
    // document.getElementById("h2id").innerHTML = imgArr[n-1];

}

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2id").innerHTML = "시작입니다.";
// }); //인수안에 함수를 그대로 짜서집어 넣는다. (불러오는거 x)

document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("h2id").innerHTML = "시작입니다.";
    // document.querySelector('#h2id').innerHTML = "아이디선택자 : 시작입니다.";
    // const bt = document.createElement('button');
    // bt.textContent = "확인"
    // document.getElementById("hdiv").append(bt) //큰따옴표 작은따옴표 구분 안함. 맘대로 쓰면 됨.
}); 
