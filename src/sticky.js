document.addEventListener('DOMContentLoaded',function(){
    var $window = window,
        $body = document.querySelector('body'),
        $header = document.querySelector('.page-header'),
        $headerClone = $header.innerHTML,
        $headerCloneContainer = document.createElement('div');

        $headerCloneContainer.classList.add('page-header-clone');

        $threshold = $header.offsetTop + $header.offsetHeight;

        $headerCloneContainer.innerHTML = $headerClone;

        $body.appendChild($headerCloneContainer);

        //var c = A.innerHTML; -> html형식의 내용을 c에 저장
        //A.innerHTML = B -> A요소의 내용으로 B를 지정(교체)
        //A.appendChild(B) -> A요소의 자식요소로 B를 추가한다.
.
       //offsetHeight -> border까지
        //clientHeight -> padding 까지

        //A.innerText; 내용가져오기(contents만)
        //A.innerHTML; 태그형식으로 반환
        //새 요소 생성
        //document.createElement('div');

        //scrollTop확인하기 
        //document.documentElement.scrollTop;
        //window.pageYOffSet;


        $window.addEventListener('scroll',function(){
            if(this.pageYOffset > $threshold){
                $headerCloneContainer.classList.add('visible');
            }else{
                $headerCloneContainer.classList.remove('visible');
            }
        })
});