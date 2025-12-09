import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getHello(): string;
    getNameScoring(name?: string): Promise<any>;
}
