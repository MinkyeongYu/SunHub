var inputF = document.getElementById('inputField');
        
    inputF.addEventListener('change', function(event){
        var field = event.target.value;
        const anniversary = "221123"
        if(field === anniversary){
            // <a href="./main.html" class="startBtn">
            //     Explore the universe
            // </a>
            console.log("1")
            var ref = document.createElement('a')
            ref.href = './main.html'
            ref.innerText = 'Explore the universe'
            ref.style.color = "rgb(64, 56, 179)"
            ref.style.textDecoration = "none"
            ref.style.fontSize = "18px"
            ref.addEventListener('mouseover', function () {
                ref.style.color = "darkred"
            })
            ref.addEventListener('mouseout', function () {
                ref.style.color = "rgb(64, 56, 179)"
            })

            var container = document.getElementById('container')
            container.appendChild(ref)
            container.appendChild(document.createElement('br'))
            container.style.margin = "10% 32%"
            container.style.padding = "8px"
            container.style.textAlign = "center"
            container.style.backgroundColor = "rgb(218, 232, 248)"
            container.style.border = "4px solid black"
            container.style.boxShadow = "2px 4px 25px lightgrey"
            container.style.borderRadius = "10px"
            container.className = "container"
            
            // media query를 이용하여 화면 크기가 1024px 이상이면 버튼의 margin을 변경하는 코드
            const mediaQuery = window.matchMedia("(min-width: 1024px)");
            
            function handleMediaQuery(e) {
              if (e.matches) {
                container.style.margin = "6% 42%";
              } 
              else {
                container.style.margin = "6% 32%";
              }
            }
            
            handleMediaQuery(mediaQuery); // 페이지 로딩 시 media query 적용
            
            mediaQuery.addListener(handleMediaQuery); // 화면 크기 변경 시 media query 적용
        }
    });
