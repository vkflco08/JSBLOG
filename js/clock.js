const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();

    //padStart : "5" -> "05" 
    //date 정보는 상수이기 때문에 String()을 통해 문자열로 전환. for padStart()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    //따옴표가 아니라 `를 사용해야 함
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //web 사이트라 load 되자마자 바로 보이도록
setInterval(getClock, 1000); //1초에 한번씩 getClock 함수 호출
