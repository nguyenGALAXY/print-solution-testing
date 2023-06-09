import getEnv from '~/utils/getEnv';

const corsConfig = {
  // Configures the Access-Control-Allow-Origin
  origin: getEnv('CORS_ORIGIN') || '*',

  // Configures the Access-Control-Allow-Methods
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',

  //Configures the Access-Control-Allow-Headers
  allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization',

  // Configures the Access-Control-Allow-Credentials
  credentials: true,

  //Configures the Access-Control-Expose-Headers
  exposedHeaders: 'Content-Range,X-Content-Range,Authorization',

  // Provides a status code to use for successful OPTIONS requests
  optionsSuccessStatus: 200
};

export default corsConfig;
