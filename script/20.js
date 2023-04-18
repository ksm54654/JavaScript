document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1');

    // 초기 배열 : 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    // 클릭 확인
    let flag = true; // true가 눌러진 상태 (클릭 확인을 위함) 
    // 하트 갯수
    let cnt = 0;
    // 눌러진 순서 
    let selarr = []; // 몇번 눌렀는지 

    // 폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5); // 자바에서는 sort를 이용해서 셔플을 해줌. 
            console.log(arr);
            flag = false; // 폭탄이 한번 섞이면 찾을때 까지 섞을수 없게 하기 위함. 
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = '';
            for (let box of boxs) box.innerHTML = box.getAttribute('id').replace('b', '');

        }
    });

    // div박스 제어
    for (let box of boxs) {
        // 박스 번호 넣기
        box.innerHTML = box.getAttribute('id').slice(-1);
        //box.innerHTML = box.getAttribute('id').replace('b','');

        // 박스 클릭이벤트 처리
        box.addEventListener('click', () => {
            // let n = parseInt(box.getAttribute('id').replace('b',''));
            let n = parseInt(box.textContent);

            // 기존에 하트나 폭탄이 들어있는 경우
            if (isNaN(n)) return;

            //폭탄이 눌러지지 않은 경우
            if (!flag) { // 폭탄을 누르면 
                // 선택 항목 추가
                selarr.push(n);
                console.log('n = ', n, 'selarr = ', selarr);
                cnt++;

                // 폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    //하트
                    box.innerHTML = '<img src ="./images/hart.png">';
                    if (cnt == 8) {
                        flag = true;
                        document.querySelector('h2').innerHTML = "성공!!!";
                        
                        // 차집합 이용
                        let lastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !selarr.includes(item));
                        console.log(lastArr[0]);
                        boxs[lastArr[0] - 1].innerHTML = '<img src ="./images/hart.png">';
                        
                        // 1이 있는 위치 찾기
                        // let lastn = arr.findIndex((item) => item == 1);
                        // console.log('find = ', lastn);
                        // box[lastn].innerHTML = '<img src ="./images/hart.png">';
                    }
                }
                else {
                    //폭탄
                    box.innerHTML = '<img src ="./images/boom.png">';
                    flag = true;
                    document.querySelector('h2').innerHTML = "실패!!!";
                }
            }
        });
    }



});