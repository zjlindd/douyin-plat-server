import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 设置全局路由前缀，这样所有的 API 都会以 /api 开头
  // 例如：http://52tuhu.cn/api/users
  app.setGlobalPrefix('api');

  // 启用 CORS，允许跨域请求
  // 如果需要限制特定的域名，可以配置 origin 属性
  app.enableCors({
    origin: 'https://52crl.cn', // 在生产环境中建议修改为具体的域名，如 'http://52tuhu.cn'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
