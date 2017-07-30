let read = require('./read');
let write = require('./write');
let async = require('async');
let Movie = require('../model');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
async.waterfall([
    function (callback) {
      Movie.remove({},callback);
    },
    function (data,callback) {
      read(url,callback);
    },
    function (movies,callback) {
      write(movies,callback)
    }
],function (err) {
    console.log('All Done');
});
