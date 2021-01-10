export const AppConfigs ={
  port: process.env.PORT ,
  mongoURL: process.env.MONGOD_URL,
  JWT_secret: process.env.JWT_SECRET || 'lajdnks',
}
