"use strict";
cc._RF.push(module, 'd8b44067ShG7IzfSj2CqGMD', 'UIManager');
// scripts/manager/UIManager.ts

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
var Enum_1 = require("./../Enum");
var StaticInstance_1 = require("./../StaticInstance");
var PoolManager_1 = require("./PoolManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    function UIManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uiMap = new Map();
        return _this;
    }
    UIManager.prototype.onLoad = function () {
        StaticInstance_1.StaticInstance.setUIManager(this);
    };
    UIManager.prototype.init = function () {
        for (var type in Enum_1.ENUM_UI_TYPE) {
            var node = PoolManager_1.default.instance.getNode(Enum_1.ENUM_UI_TYPE[type], this.node);
            if (node && !this.uiMap.has(Enum_1.ENUM_UI_TYPE[type])) {
                node.active = false;
                node.addComponent(Enum_1.ENUM_UI_TYPE[type]);
                this.uiMap.set(Enum_1.ENUM_UI_TYPE[type], node.getComponent(Enum_1.ENUM_UI_TYPE[type]));
            }
        }
    };
    //切换页面
    UIManager.prototype.toggle = function (key, status, param, callback) {
        if (status === void 0) { status = true; }
        if (this.uiMap.has(key)) {
            var layer = this.uiMap.get(key);
            status ? layer.show(param) : layer.hide();
            callback && callback();
        }
    };
    UIManager.prototype.isActive = function (key) {
        if (this.uiMap.has(key)) {
            return this.uiMap.get(key).node.active;
        }
        return false;
    };
    UIManager.prototype.getActiveTypes = function () {
        var _this = this;
        var types = [];
        this.uiMap.forEach(function (layer, type) {
            if (_this.isActive(type))
                types.push(type);
        });
        return types;
    };
    UIManager.prototype.setMainLevel = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.rendorLevel();
    };
    UIManager.prototype.setMainTimer = function (status) {
        if (status === void 0) { status = true; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        if (status) {
            layer === null || layer === void 0 ? void 0 : layer.onTimerStart();
        }
        else {
            layer === null || layer === void 0 ? void 0 : layer.onTimerStop();
        }
    };
    UIManager.prototype.setMainPauseTimer = function (time) {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.onTimerPause(time);
    };
    UIManager.prototype.setMainTimerSound = function (status) {
        if (status === void 0) { status = true; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        if (status) {
            layer === null || layer === void 0 ? void 0 : layer.onTimerSoundStart();
        }
        else {
            layer === null || layer === void 0 ? void 0 : layer.onTimerSoundStop();
        }
    };
    UIManager.prototype.setMainProgress = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.onProgressStart(isInit);
    };
    UIManager.prototype.setMainPowerCollect = function (isInit) {
        if (isInit === void 0) { isInit = false; }
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        layer === null || layer === void 0 ? void 0 : layer.rendorStarCollect();
    };
    UIManager.prototype.getMainLayer = function () {
        var layer = this.uiMap.get(Enum_1.ENUM_UI_TYPE.MAIN);
        return layer;
    };
    UIManager = __decorate([
        ccclass
    ], UIManager);
    return UIManager;
}(cc.Component));
exports.default = UIManager;

cc._RF.pop();