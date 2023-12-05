function resultJsFunc4() {
    jsFunc4(23, 11, 13);
    jsFunc4(24, 4, 25);
}

function jsFunc4(num1, num2, num3){
                // 23  , 11  ,  13 
    var result = num1 + num2 + num3;
    var p4Tag = document.querySelector("#p4");
    p4Tag.innerHTML = p4Tag.innerHTML + result + "<br>";

}
function callFuncTenTimes(num) {
    //alert("callFuncTenTimes");
    // num = 10;
    // num = calleeFunc;
    //console.log(num);
}
// calleeFunc는 콜백함수라고 함. 매개변수로 넘겨지는 함수롤 
// 콜백함수라고 함.
// ★결론 : 함수의 매개변수는 함수도 받을 수 있고 그 함수를 콜백함수라 부른다.
function jsReturnFunc() {
    var nameTag = document.querySelector("#name");
    var p7Tag = document.querySelector("#p7")
    return function() {
        p7Tag.innerHTML = nameTag.value;
    }();
}



function callFuncTenTimes(otherFunc){
for(var i = 0; i < 10; i++){
    // calleeFunc(i);   <- 머리속으로 생각해야 하는 것
    // jsFunc6(i);
    otherFunc(i);
}
}
function jsFunc6(num) {
    console.log((num+1)+"번째 함수 호출 완료");
}
callFuncTenTimes(jsFunc6){
    calleeFunc(0);
}


function jsFunc6(num) {

}
function calleeFunc(num){
    var p6Tag = document.querySelector("#p6");
    p6Tag.innerHTML
    p6Tag.innerHTML = (num+1) + "번째 함수 호출 완료 <br>";
    
}
function callFuncTenTimes(){
    
}

callFuncTenTimes(10);


// 함수 매개변수와 리턴 복습
function calculator(num1, num2, operator) {
    var result = 0;
    switch(operator) {
        case '+' : result = num1+num2; break;
        case '-' : result = num1+num2; break;
        case '*' : result = num1+num2; break;
        case '/' : result = num1+num2; break;
    }
    return result;
}

function resultJsFunc5() {
    //alert("resultJsFunc5!!");
    var p5Tag = document.querySelector("#p5");
    p5Tag.innerHTML = p5Tag.innerHTML + jsFunc5() + "<br>";
    console.log(jsFunc5());
}
function jsFunc5() {
    return Math.floor(Math.random()*10+1);
}

// 익명함수
var jsFunc2 = function()
{         
    //alert("test")
    var p2Tag = document.querySelector("#p2");
    p2Tag.innerHTML = "jsfunc2() 함수 실행완료!";
}
    // 선언적 함수 
function jsFunc1()           // ★ function 함수명() { 소스코드 작성 }
{
    var p1Tag= document.querySelector("h1");
    p1Tag.innerHTML = "jsfunc1() 함수 실행 완료";
    //var h1Tag= document.querySelector("h1");
    //h1Tag.innerHTML = "선언적 펑션";
}
//jsfunc1(); 