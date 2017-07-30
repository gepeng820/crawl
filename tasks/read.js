let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
module.exports = function (url, callback) {
 request({url,encoding:null},function (err, response,body) {
     let movies = [];
     if(!err && response.statusCode == 200){
         body = iconv.decode(body,'gbk');
         let $ = cheerio.load(body);
         $('.keyword a.list-title').each(function (index, item) {
             let $this = $(item);
             let movie = {
                 name:$this.text(),
                 url:$this.attr('href')
             };
             console.log('爬取到:'+movie.name);
             movies.push(movie)
         })
         callback(null,movies)
     }else {
         callback(err,movies)
     }
 })
};
/*
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function (err, movies) {
    console.log(movies);
});*/
