let Movie = require('../model');
function write(movies,callback) {
    Movie.create(movies,callback)
}
module.exports = write;

write([{}],function (err, doc) {
   console.log(doc)
});