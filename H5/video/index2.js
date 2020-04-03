const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

// console.log(video.offsetHeight)

function handleMove(e) {
  // console.log(e.pageY) //打印Y轴坐标
  const y = e.pageY - this.offsetTop; // offsetTop获取某个dom结构到浏览器顶部的距离
  const percent = y / this.offsetHeight; // offsetHeight用来获取某dom结构的自身高度
  const min = 0.4;
  const max = 4;//进度条最大最小值
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * ( max - min ) + min;

  // console.log(y, percent, height, playbackRate)
  bar.style.height = height
  bar.textContent = playbackRate.toFixed(2) + 'x'
  video.playbackRate = playbackRate//playbackRate:控制播放速率
}


speed.addEventListener('mousemove', handleMove)//监听鼠标移动事件