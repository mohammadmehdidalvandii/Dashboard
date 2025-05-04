const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Dashboard Admin',
        version: '1.0.0',
        description: 'API documentation for the Dashboard Management App',
      },
      servers: [
        {
          url: 'https://dashboard-admin-api.chbk.app',
          description: 'Development server',
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: [
      path.join(__dirname, '../routes/auth/*.js'),
      path.join(__dirname, '../routes/product/*.js'),
      path.join(__dirname, '../routes/customers/*.js'),
      path.join(__dirname, '../routes/orders/*.js'),
      path.join(__dirname, '../routes/inventory/*.js')
    ],
  };
  
  const swaggerSpec = swaggerJsdoc(options);
  
  // Log the generated spec to see if it's working
  console.log('Swagger spec generated:', JSON.stringify(swaggerSpec, null, 2));
  
  module.exports = swaggerSpec; 