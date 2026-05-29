"use strict";
cc._RF.push(module, '0d076ynxVpJ6Ys/SGfhiZtJ', 'LoadingLayer');
// scripts/layer/LoadingLayer.ts

"use strict";
// Created by carolsail 
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
var DataManager_1 = require("../manager/DataManager");
var BaseDialog_1 = require("./BaseDialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingLayer = /** @class */ (function (_super) {
    __extends(LoadingLayer, _super);
    function LoadingLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadfill = null;
        return _this;
    }
    LoadingLayer.prototype.onEnable = function () { };
    LoadingLayer.prototype.onDisable = function () { };
    LoadingLayer.prototype.update = function (dt) {
        if (this.loadfill && this.node.active) {
            this.loadfill.fillRange = DataManager_1.default.instance.loadingRate;
            if (DataManager_1.default.instance.loadingRate >= 1) {
                // menu已加载完毕
                // if(StaticInstance.uiManager.isActive(ENUM_UI_TYPE.MENU)){
                this.hide();
                // }
            }
        }
    };
    __decorate([
        property(cc.Sprite)
    ], LoadingLayer.prototype, "loadfill", void 0);
    LoadingLayer = __decorate([
        ccclass
    ], LoadingLayer);
    return LoadingLayer;
}(BaseDialog_1.default));
exports.default = LoadingLayer;

cc._RF.pop();