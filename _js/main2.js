import { Jan,Feb,Mar,Apr } from './data.js'

const janEls = document.querySelectorAll('.january')
const febEls = document.querySelectorAll('.february')
const marEls = document.querySelectorAll('.marchEl')
const aprEls = document.querySelectorAll('.april')

window.onload = function () {
    janEls.forEach(function (janEl, index) {
        janEl.onclick = function () {
            janEl.style.color = "#A287DD"
            Swal.fire({
                title: "❤️",
                text: Jan[index].text,
                width: 600,
                fontweight: '100px',
                padding: '3em',
                color: '#F2EAF0',
                imageUrl: Jan[index].img,
                background: '#F2EAF0 url() no-repeat center center',
                // alert 창 옆에 이미지를 띄우고 싶다면, backdrop 속성 안에 url(${Jan[index].img})라고 입력하기
                backdrop: `
                  rgba(0,0,123,0.4)
                  url()
                  left center
                  no-repeat
                `
            })
        }
    })

    febEls.forEach(function (febEl, index) {
        febEl.onclick = function () {
            febEl.style.color = "#A287DD"
            Swal.fire({
                title: "❤️",
                text: Feb[index].text,
                width: 600,
                fontweight: '100px',
                padding: '3em',
                color: '#F2EAF0',
                imageUrl: Feb[index].img,
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

    marEls.forEach(function (marEl, index) {
        marEl.onclick = function () {
            marEl.style.color = "#A287DD"
            Swal.fire({
                title: "❤️",
                text: Mar[index].text,
                width: 600,
                fontweight: '100px',
                padding: '3em',
                color: '#F2EAF0',
                imageUrl: Mar[index].img,
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
    
    aprEls.forEach(function (aprEl, index) {
        aprEl.onclick = function () {
            aprEl.style.color = "#A287DD"
            Swal.fire({
                title: "❤️",
                text: Apr[index].text,
                width: 600,
                fontweight: '100px',
                padding: '3em',
                color: '#F2EAF0',
                imageUrl: Apr[index].img,
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
