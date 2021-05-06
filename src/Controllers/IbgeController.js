 
var getJSON = require('get-json')

let url_estados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

//lista todos os estados
exports.getEstados = (req, res, next) => {
    getJSON(url_estados, function(error, response){
        res.status(200).send(response);
    })    
 };
//lista o estado por id
 exports.getEstadosById = (req, res, next) => {
    let id = req.params.id;
    getJSON(url_estados+'/'+id, function(error, response){
        res.status(200).send(response);
    })    
 };

 //lista todos os municipios
exports.getMunicipios = (req, res, next) => {
    getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/municipios', function(error, response){
        res.status(200).send(response);
    })    
 };
//lista os municipios pelo id do estado
 exports.getMunicipiosById = (req, res, next) => {
    let id = req.params.id;
 
    getJSON('https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+id+'/municipios', function(error, response){
        res.status(200).send(response);
    })  
     
 };