import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return '张建留，您好';
  }

  async getNameScoring(name: string = '张三'): Promise<any> {
    const url = 'https://api.yuanfenju.com/index.php/v1/Dafen/xingming';
    const apiKey = 'sXFpwpk5qCwWSA8fU0i5IW4ic';

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          params: {
            api_key: apiKey,
            name: name,
          },
        }),
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching name score:', error);
      throw error;
    }
  }
}
