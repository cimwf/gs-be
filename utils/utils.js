const url = require('url')
const formatDate = ()=>{
    let d = new Date()
    let yy = isEven(d.getFullYear());
    let mm = isEven(d.getMonth()+1);
    let rr = isEven(d.getDate());
    let hh = isEven(d.getHours());
    let dd = isEven(d.getMinutes());
    let ss = isEven(d.getSeconds());


    let str = `${yy}-${mm}-${rr} ${hh}:${dd}:${ss}`
    return str
}

const isEven = (num)=>{
    let str = ''
    if(num  < 10){
        str = '0'+ num
    }else{
        str = num
    }
    return str
}

const fullUrl = (req)=>{
    return  url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      })
}

module.exports = {
    formatDate,
    fullUrl
}