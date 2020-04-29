window.onload = function () {
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // 1. 取消之前的selected
            // 2. 点哪个a 就加selected 
            event.preventDefault();
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
        },false)
    })
    //先拿到swiper的数据
    //拿到bannerList 的数据
    fetch('http://localhost:3000/banner').then(date => date.json()).then(date => {
        console.log(date);
    })
}