import { IConfigOptions } from '../types'

const config: IConfigOptions = {
  version: 'v2.9.0',
  serve: {
    port: (process.env.SERVE_PORT && parseInt(process.env.SERVE_PORT, 10)) || 8080,
    path: '/api',
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: process.env.MYSQL_URL ?? 'localhost',
    port: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT, 10)) || 3306,
    username: process.env.MYSQL_USERNAME ?? 'root',
    password: process.env.MYSQL_PASSWD ?? '',
    database: process.env.MYSQL_SCHEMA ?? 'RAP2_DELOS_APP',
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    logging: false,
    dialectOptions: {
      connectTimeout: 20000,
    },
  },
  redis: {
    host: process.env.REDIS_URL ?? 'localhost',
    port: (process.env.REDIS_PORT && parseInt(process.env.REDIS_PORT, 10)) || 6379,
    password: process.env.REDIS_PWD ?? '',
  },
  queueRedis: {
    host: process.env.QUEUE_REDIS_URL || 'localhost',
    port: (process.env.QUEUE_REDIS_PORT && parseInt(process.env.REDIS_PORT, 10)) || 6379,
    password: process.env.QUEUE_REDIS_PWD || undefined,
    maxRetriesPerRequest: null,
  },
  mail: {
    host: process.env.MAIL_HOST ?? 'smtp.aliyun.com',
    port: process.env.MAIL_PORT ?? 465,
    secure: process.env.MAIL_SECURE ?? true,
    auth: {
      user: process.env.MAIL_USER ?? 'rap2org@service.alibaba.com',
      pass: process.env.MAIL_PASS ?? '',
    },
  },
  mailSender: process.env.MAIL_SENDER ?? 'rap2org@service.alibaba.com',
}

export default config
