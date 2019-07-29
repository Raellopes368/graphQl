const mongoose      = require('mongoose');

/** 
 * @apiGroup Schema 
 * @api const_ratingSchema_=_new_mongoose.Schema
 * @apiDescription Cria um Schema para os dados do rating no banco de dados
*/

const ratingSchema = new mongoose.Schema({
    term:String,
    url:String,
    type:String
});

module.exports = mongoose.model('Rating',ratingSchema);