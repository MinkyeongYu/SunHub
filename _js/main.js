import { Jan,Feb,Mar,Apr,Nov,Dec } from './data.js'

var outField = document.getElementById('output')
const novEls = document.querySelectorAll('.november')
const decEls = document.querySelectorAll('.december')
const janEls = document.querySelectorAll('.january')
var mData = document.querySelector(".mData")


/*
novEls.forEach(function(novEl, index) {
    novEl.addEventListener('click', () => {
        // click은 실행됨
        console.log(Nov[index].text)
        location.href='../_html/result.html'
        
        // 내용 바꾸는 코드가 실행이 안됨
        // mData.innerHTML = "123"
        // outField.appendChild(mData)
        // outField.createTextNode('my text')
        ind = true
    })
})
*/

window.onload = function () {
    novEls.forEach(function (novEl, index) {
        novEl.onclick = function () {
            novEl.style.color = "#A287DD"
            // var alertBox = alert(Nov[index].text)
            Swal.fire({
                title: "❤️",
                text: Nov[index].text,
                width: 600,
                fontweight: '100px',
                padding: '3em',
                color: '#F2EAF0',
                imageUrl: Nov[index].img,
                background: '#F2EAF0 url() no-repeat center center',
                backdrop: `
                  rgba(0,0,123,0.4)
                // 같이 찍은 사진 넣기
                  url("")
                  left center
                  no-repeat
                `
            })
        }
    })

    decEls.forEach(function (decEl, index) {
        decEl.onclick = function () {
            decEl.style.color = "#A287DD"
            Swal.fire({
                // title: Dec[index].number,
                title: "❤️",
                text: Dec[index].text, 
                width: 600,
                fontweight: '100px',
                padding: '3em',
                color: '#F2EAF0',
                imageUrl: Dec[index].img,
                background: '#F2EAF0 url() no-repeat center center',
                backdrop: `
                  rgba(0,0,123,0.4)
                // 같이 찍은 사진 넣기
                  url("")
                  left center
                  no-repeat
                `
            })
        }
    })
}
