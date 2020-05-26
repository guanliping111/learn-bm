//服务端
const http = require('http');
http.createServer((req, res) => {
  res.end('okok');
})
.listen(8088, ()=> {
  console.log(8088);
})