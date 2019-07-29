
const rating = require('../schema/rating');

module.exports = {
    /**
     * @apiGroup resolvers
     * @api Query 
     * @apiDescription Faz a busca de todos os documentos no banco de dados
     */
    Query: {
        ratings: () =>rating.find(),
        rating: (_,{ _id }) => rating.findById(_id)
    },
    /**
     * @apiGroup resolvers
     * @api Mutation
     * @apiDescription Cria um novo registro com os dados passados na requisição
     * @apiParamExample {json} Exemplo_de_request:
     *          {
     *              "term":"Um termo qualquer",
     *              "url": a url deve está no formato http://site.com ou http://site.com.br,
     *              "type":o tipo  deve ser somente 'like' ou 'dislike'
     *           }
     */
    Mutation: {
        createRating: (_, { term, url,type}) => get_es_body(term,url,type,(error,success)=>{
            if(error){
                console.log(error);
            }else{
                rating.create(success);
            }
        })
    }
}
/**
 * @apiGroup resolvers 
 * @api get_es_body 
 * @apiParam {String} termo recebe o term para ser tratada 
 * @apiParam {String} urls recebe a url para ser tratada
 * @apiParam {string} tipo recebe  type para ser tratada
 * @apiDescription Analisa os dados recebidos para verificar se estão válidos ou não,caso esteja tudo ok,retorna um objeto que será inserido no banco de dados,senão ,retorna o erro
 */

get_es_body = async (termo,urls,tipo,callback)=>{
    let term,url,type;
    let success;
    //Verifica se recebeu uma string vazia
    term = termo  === ""?undefined:termo;
    //Verifica se a url está no formato válido
    url  = urls.match(/http\:\/\/w{3}\.\w{1,}\.com$|http\:\/\/w{3}\.\w{1,}\.com\.br$/)?urls:undefined;
    //Verifica se o type é like ou dislike
    type = tipo.match(/like|dislike/)?tipo:undefined;;
    //Verifica se algo não foi informado
    if(term == undefined || url == undefined || type == undefined){
        let error ;
        if(term == undefined) error = "Term está indefinido";

        if(url == undefined) error = "Url está indefinida";

        if(type == undefined) error = "Type está indefinida";
        
        callback(error,false);
    }else{
       success = {
           term,
           url,
           type
       };

       
      await callback(false,success);
      console.log('Inserido com sucesso');
    }
    
}