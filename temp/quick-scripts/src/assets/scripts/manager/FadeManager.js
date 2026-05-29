"use strict";
cc._RF.push(module, '00872TxwjFFprih9XF/Yufu', 'FadeManager');
// scripts/manager/FadeManager.ts

"use strict";
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
var StaticInstance_1 = require("../StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FadeManager = /** @class */ (function (_super) {
    __extends(FadeManager, _super);
    function FadeManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeManager.prototype.onLoad = function () {
        this.node.active = false;
        StaticInstance_1.StaticInstance.setFadeManager(this);
    };
    FadeManager.prototype.fadeIn = function (seconds) {
        var _this = this;
        if (seconds === void 0) { seconds = 0.2; }
        return new Promise(function (resolve) {
            _this.node.active = true;
            _this.node.opacity = 0;
            cc.tween(_this.node).to(seconds, { opacity: 255 }).call(function () {
                resolve(null);
            }).start();
        });
    };
    FadeManager.prototype.fadeOut = function (seconds) {
        var _this = this;
        if (seconds === void 0) { seconds = 0.2; }
        return new Promise(function (resolve) {
            _this.node.active = true;
            _this.node.opacity = 255;
            cc.tween(_this.node).to(seconds, { opacity: 0 }).call(function () {
                _this.node.active = false;
                resolve(null);
            }).start();
        });
    };
    FadeManager = __decorate([
        ccclass
    ], FadeManager);
    return FadeManager;
}(cc.Component));
exports.default = FadeManager;

cc._RF.pop();