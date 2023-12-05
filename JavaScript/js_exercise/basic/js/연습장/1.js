





var name = prompt("이름을 입력하세요.");
document.write("<b><big>" + name + "</big></b>님, 환영합니다.");
console.log(name+"님, 환영합니다.");
    

var heading = document.querySelector('#heading');
heading.onclick = function () {
    heading.style.color = "red";
}
