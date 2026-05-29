"use strict";
cc._RF.push(module, 'ab2a6CEvxhMQ77c3CMn4zMe', 'ResourceManager');
// scripts/manager/ResourceManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SettingData_1 = require("../datacenter/SettingData");
var NativeUtils_1 = require("../framework/NativeUtils");
var i18nManage_1 = require("../i18n/i18nManage");
var DataManager_1 = require("./DataManager");
var PoolManager_1 = require("./PoolManager");
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.clipMap = {};
        this.spriteMap = {};
        this.jsonMap = {};
    }
    ResourceManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(ResourceManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    ResourceManager.prototype.loadRes = function (resource, ratio) {
        if (ratio === void 0) { ratio = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var rate = DataManager_1.default.instance.loadingRate;
                        cc.resources.loadDir(resource.path, resource.content, function (finished, total) {
                            // 资源加载进度
                            if (resource.ratio > 0) {
                                // 保留两位小数
                                var loadingRate = Math.floor((rate + resource.ratio * finished / total) * 100) / 100;
                                DataManager_1.default.instance.loadingRate = Math.max(loadingRate, DataManager_1.default.instance.loadingRate);
                            }
                        }, function (err, assets) {
                            if (err)
                                reject && reject();
                            var asset;
                            if (resource.type == 'audio') {
                                console.log("audio assets", assets);
                                for (var i = 0; i < assets.length; i++) {
                                    asset = assets[i];
                                    if (!_this.clipMap[asset.name])
                                        _this.clipMap[asset.name] = asset;
                                }
                            }
                            if (resource.type == 'prefab') {
                                console.log("prefab assets", assets);
                                for (var i = 0; i < assets.length; i++) {
                                    asset = assets[i];
                                    PoolManager_1.default.instance.setPrefab(asset.data.name, asset);
                                }
                            }
                            if (resource.type == 'sprite') {
                                for (var i = 0; i < assets.length; i++) {
                                    asset = assets[i];
                                    if (!_this.spriteMap[asset.name])
                                        _this.spriteMap[asset.name] = asset;
                                }
                            }
                            if (resource.type == 'i18n') {
                                if (!SettingData_1.settingData.lockLanguage) {
                                    i18nManage_1.i18nManage.setLanguage(NativeUtils_1.default.getCurrentLanguage());
                                    SettingData_1.settingData.currLanguage = NativeUtils_1.default.getCurrentLanguage();
                                }
                                else {
                                    i18nManage_1.i18nManage.setLanguage(SettingData_1.settingData.currLanguage);
                                }
                            }
                            /*
                            if (resource.type == 'json') {
                                for (let i = 0; i < assets.length; i++) {
                                    asset = assets[i];
                                    if (!this.jsonMap[asset.name]) this.jsonMap[asset.name] = asset.json
                                }
                            }*/
                            resolve && resolve();
                        });
                    })];
            });
        });
    };
    ResourceManager.prototype.getClip = function (name) {
        return this.clipMap[name];
    };
    ResourceManager.prototype.getSprite = function (name) {
        return this.spriteMap[name];
    };
    ResourceManager.prototype.getJson = function (name) {
        return this.jsonMap[name];
    };
    ResourceManager._instance = null;
    return ResourceManager;
}());
exports.default = ResourceManager;

cc._RF.pop();