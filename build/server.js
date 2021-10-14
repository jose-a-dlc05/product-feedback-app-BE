"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("./lib/env");
const application = express_1.default();
application.use(express_1.default.json());
application.use(routes_1.default);
application.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
exports.default = application;
