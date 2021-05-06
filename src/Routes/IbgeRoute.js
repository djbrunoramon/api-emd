const IbgeController = require('../Controllers/IbgeController');

module.exports = (app) => { 
   app.get('/estados', IbgeController.getEstados); 
   app.get('/estados/:id', IbgeController.getEstadosById); 

   app.get('/municipios', IbgeController.getMunicipios); 
   app.get('/municipios/:id', IbgeController.getMunicipiosById); 
}