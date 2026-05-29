
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/ResourceManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvUmVzb3VyY2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQXdEO0FBQ3hELHdEQUFtRDtBQUNuRCxpREFBZ0Q7QUFDaEQsNkNBQXdDO0FBQ3hDLDZDQUF3QztBQUV4QztJQUFBO1FBRVcsWUFBTyxHQUFHLEVBQUUsQ0FBQTtRQUVaLGNBQVMsR0FBRyxFQUFFLENBQUE7UUFFZCxZQUFPLEdBQUcsRUFBRSxDQUFBO0lBcUZ2QixDQUFDO0lBakZVLDJCQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVELHNCQUFXLDJCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFtQixDQUFBO1FBQzlDLENBQUM7OztPQUFBO0lBRVksaUNBQU8sR0FBcEIsVUFBcUIsUUFBYSxFQUFFLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7Ozs7Z0JBQ2pELHNCQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ3JDLElBQU0sSUFBSSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQTt3QkFDN0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQUMsUUFBZ0IsRUFBRSxLQUFhOzRCQUNsRixTQUFTOzRCQUNULElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0NBQ3BCLFNBQVM7Z0NBQ1QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUss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Q0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbEZjLHlCQUFTLEdBQVEsSUFBSSxDQUFBO0lBbUZ4QyxzQkFBQztDQTNGRCxBQTJGQyxJQUFBO2tCQTNGb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBzZXR0aW5nRGF0YSB9IGZyb20gJy4uL2RhdGFjZW50ZXIvU2V0dGluZ0RhdGEnO1xyXG5pbXBvcnQgTmF0aXZlVXRpbHMgZnJvbSAnLi4vZnJhbWV3b3JrL05hdGl2ZVV0aWxzJztcclxuaW1wb3J0IHsgaTE4bk1hbmFnZSB9IGZyb20gJy4uL2kxOG4vaTE4bk1hbmFnZSc7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tICcuL0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IFBvb2xNYW5hZ2VyIGZyb20gJy4vUG9vbE1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb3VyY2VNYW5hZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgY2xpcE1hcCA9IHt9XHJcblxyXG4gICAgcHVibGljIHNwcml0ZU1hcCA9IHt9XHJcblxyXG4gICAgcHVibGljIGpzb25NYXAgPSB7fVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlPFJlc291cmNlTWFuYWdlcj4oKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBsb2FkUmVzKHJlc291cmNlOiBhbnksIHJhdGlvOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmF0ZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlXHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkRGlyKHJlc291cmNlLnBhdGgsIHJlc291cmNlLmNvbnRlbnQsIChmaW5pc2hlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDotYTmupDliqDovb3ov5vluqZcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZS5yYXRpbyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDkv53nlZnkuKTkvY3lsI/mlbBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nUmF0ZSA9IE1hdGguZmxvb3IoKHJhdGUgKyByZXNvdXJjZS5yYXRpbyAqIGZpbmlzaGVkIC8gdG90YWwpICogMTAwKSAvIDEwMFxyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlID0gTWF0aC5tYXgobG9hZGluZ1JhdGUsIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAoZXJyLCBhc3NldHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0ICYmIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICBsZXQgYXNzZXQ6IGFueVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT0gJ2F1ZGlvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXVkaW8gYXNzZXRzXCIsYXNzZXRzKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldCA9IGFzc2V0c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsaXBNYXBbYXNzZXQubmFtZV0pIHRoaXMuY2xpcE1hcFthc3NldC5uYW1lXSA9IGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc291cmNlLnR5cGUgPT0gJ3ByZWZhYicpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZWZhYiBhc3NldHNcIixhc3NldHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb29sTWFuYWdlci5pbnN0YW5jZS5zZXRQcmVmYWIoYXNzZXQuZGF0YS5uYW1lLCBhc3NldClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb3VyY2UudHlwZSA9PSAnc3ByaXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3ByaXRlTWFwW2Fzc2V0Lm5hbWVdKSB0aGlzLnNwcml0ZU1hcFthc3NldC5uYW1lXSA9IGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZS50eXBlID09ICdpMThuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFzZXR0aW5nRGF0YS5sb2NrTGFuZ3VhZ2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuTWFuYWdlLnNldExhbmd1YWdlKE5hdGl2ZVV0aWxzLmdldEN1cnJlbnRMYW5ndWFnZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ0RhdGEuY3Vyckxhbmd1YWdlPU5hdGl2ZVV0aWxzLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuTWFuYWdlLnNldExhbmd1YWdlKHNldHRpbmdEYXRhLmN1cnJMYW5ndWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZS50eXBlID09ICdqc29uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0ID0gYXNzZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuanNvbk1hcFthc3NldC5uYW1lXSkgdGhpcy5qc29uTWFwW2Fzc2V0Lm5hbWVdID0gYXNzZXQuanNvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDbGlwKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaXBNYXBbbmFtZV1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3ByaXRlKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZU1hcFtuYW1lXVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRKc29uKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmpzb25NYXBbbmFtZV07XHJcbiAgICB9XHJcbn1cclxuIl19