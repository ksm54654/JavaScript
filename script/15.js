document.addEventListener("DOMContentLoaded", () =>{

    const bts = document.querySelectorAll('button')
    console.log(bts);

    for(let [k, v] of bts.entries()){
                console.log(k, v.textContent);
        }
    

    //document.querySelector('#h2id').textContent = bts.textContent;

    //case1  배열 안에 있는 것을 한개씩 가져오는 방법 ... 
    // for(let i = 0; i < bts.length; i++) {
    //     console.log(bts[i].textContent);
    // }

    //case2
    // bts.forEach((item) => {
    //     console.log(item.textContent);
    // });
    
    // bts.forEach((item, idx) => {
    //     console.log(idx, item.textContent);
    // });

    //case3   for in 은 파이썬에서는 추천하지 자바스크립트에서는 별로 추천 ㄴㄴ
    // for(let idx in bts){
    //     console.log(bts[idx].textContent)
    // }

    //case4   for of ㅊㅊ
    // for(let item of bts){
    //     console.log(item.textContent);
    // }

    // for(let [k, v] of bts.entries()){
    //         console.log(k, v.textContent);
    // }
});