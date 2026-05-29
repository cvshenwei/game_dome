"use strict";
cc._RF.push(module, '9c7699w+UNN3qlpbq5KSDp0', 'IceLayer');
// scripts/layer/IceLayer.ts

"use strict";
/*
 * @Author: carolsail
 * @Date: 2023-08-18 14:15:06
 * @Last Modified by: carolsail
 * @Last Modified time: 2023-08-18 14:20:03
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseDialog_1 = require("./BaseDialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IceLayer = /** @class */ (function (_super) {
    __extends(IceLayer, _super);
    function IceLayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IceLayer.prototype.onLoad = function () { };
    IceLayer.prototype.onDestroy = function () { };
    IceLayer.prototype.onEnable = function () { };
    IceLayer.prototype.onDisable = function () { };
    IceLayer = __decorate([
        ccclass
    ], IceLayer);
    return IceLayer;
}(BaseDialog_1.default));
exports.default = IceLayer;

cc._RF.pop();