"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    httpService;
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return '张建留，您好';
    }
    async getNameScoring(name = '张三') {
        const url = 'https://api.yuanfenju.com/index.php/v1/Dafen/xingming';
        const apiKey = 'sXFpwpk5qCwWSA8fU0i5IW4ic';
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                params: {
                    api_key: apiKey,
                    name: name,
                },
            }));
            return response.data;
        }
        catch (error) {
            console.error('Error fetching name score:', error);
            throw error;
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
//# sourceMappingURL=app.service.js.map