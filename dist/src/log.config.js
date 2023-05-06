"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const appRoot = require("app-root-path");
const dotenv = require("dotenv");
dotenv.config();
const logDirectory = path.resolve(`${appRoot}`, process.env.LOGGING_DIR);
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}
const options = {
    infoFile: {
        level: 'info',
        filename: path.resolve(logDirectory, process.env.INFO_LOG_PATH),
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
    },
    errorFile: {
        level: 'error',
        filename: path.resolve(logDirectory, process.env.ERROR_LOG_PATH),
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
    },
};
exports.default = options;
//# sourceMappingURL=log.config.js.map