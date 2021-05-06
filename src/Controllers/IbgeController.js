 
var getJSON = require('get-json')

let url_estados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'


exports.getEstados = (req, res, next) => {
    
    getJSON(url_estados, function(error, response){
        res.status(200).send(response);
    })    

 };

 exports.getEstadosById = (req, res, next) => {
    let id = req.params.id;

    getJSON(url_estados+'/'+id, function(error, response){
        res.status(200).send(response);
    })    

 };