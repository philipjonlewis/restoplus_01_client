export const config = {
//   environment: import.meta.env.ENVIRONMENT,
  backendURL:
    import.meta.env.ENVIRONMENT == 'production'
      ? 'https://restoplusmongodb.herokuapp.com/'
      : 'http://192.168.0.25:4000/',
};
