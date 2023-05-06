"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const yaml = require("yaml");
const fs = require("fs");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Skeleton')
        .setDescription('Nestjs boilerplate project')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    fs.writeFileSync((0, path_1.join)(__dirname, '../../docs/swagger.yaml'), yaml.stringify(document));
    swagger_1.SwaggerModule.setup('/', app, document);
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map