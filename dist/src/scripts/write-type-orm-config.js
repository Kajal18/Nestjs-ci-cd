"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ormconfig_service_1 = require("../ormconfig.service");
const fs = require("fs");
fs.writeFileSync('ormconfig.json', JSON.stringify(ormconfig_service_1.default.getTypeOrmConfig(), null, 2));
//# sourceMappingURL=write-type-orm-config.js.map