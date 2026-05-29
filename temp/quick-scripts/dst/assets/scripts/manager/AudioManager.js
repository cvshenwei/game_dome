
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec837HPHdhNmbkWqoAlSNAg', 'AudioManager');
// scripts/manager/AudioManager.ts

"use strict";
// Created by carolsail
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
var Enum_1 = require("./../Enum");
var DataManager_1 = require("./DataManager");
var ResourceManager_1 = require("./ResourceManager");
var AudioManager = /** @class */ (function () {
    function AudioManager() {
        this.audioSource = null;
    }
    AudioManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
            this._instance.init();
        }
        return this._instance;
    };
    Object.defineProperty(AudioManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    AudioManager.prototype.init = function () {
        this.audioSource = new cc.AudioSource();
        this.audioSource.loop = true;
        this.audioSource.volume = 0.3;
    };
    AudioManager.prototype.playMusic = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!DataManager_1.default.instance.settingData.isPlayBgm)
                            return [2 /*return*/];
                        if (this.audioSource.clip) {
                            this.audioSource.play();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, ResourceManager_1.default.instance.getClip(Enum_1.ENUM_AUDIO_CLIP.BGM)];
                    case 1:
                        clip = _a.sent();
                        this.audioSource.clip = clip;
                        this.audioSource.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    AudioManager.prototype.stopMusic = function () {
        this.audioSource.stop();
    };
    AudioManager.prototype.playSound = function (name, isLoop) {
        if (isLoop === void 0) { isLoop = false; }
        return __awaiter(this, void 0, void 0, function () {
            var clip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!DataManager_1.default.instance.settingData.isPlaySfx)
                            return [2 /*return*/];
                        return [4 /*yield*/, ResourceManager_1.default.instance.getClip(name)];
                    case 1:
                        clip = _a.sent();
                        return [2 /*return*/, cc.audioEngine.playEffect(clip, isLoop)];
                }
            });
        });
    };
    AudioManager.prototype.stopSound = function (audioId) {
        cc.audioEngine.stopEffect(audioId);
    };
    AudioManager._instance = null;
    return AudioManager;
}());
exports.default = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLGtDQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMscURBQStDO0FBRS9DO0lBQUE7UUFDWSxnQkFBVyxHQUFtQixJQUFJLENBQUE7SUE4QzlDLENBQUM7SUEzQ1Usd0JBQVcsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3hCO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxzQkFBVyx3QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBZ0IsQ0FBQTtRQUMzQyxDQUFDOzs7T0FBQTtJQUVELDJCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDakMsQ0FBQztJQUVLLGdDQUFTLEdBQWY7Ozs7Ozt3QkFDSSxJQUFHLENBQUMscUJBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVM7NEJBQUUsc0JBQU07d0JBQ3RELElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUM7NEJBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7NEJBQ3ZCLHNCQUFNO3lCQUNUO3dCQUNZLHFCQUFNLHlCQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxzQkFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFBOzt3QkFBbEUsSUFBSSxHQUFHLFNBQTJEO3dCQUN4RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7d0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7Ozs7O0tBQzFCO0lBRUQsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVLLGdDQUFTLEdBQWYsVUFBZ0IsSUFBOEIsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGNBQXVCOzs7Ozs7d0JBQ25FLElBQUcsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUzs0QkFBRSxzQkFBTTt3QkFDekMscUJBQU0seUJBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFBOzt3QkFBbkQsSUFBSSxHQUFHLFNBQTRDO3dCQUN6RCxzQkFBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUE7Ozs7S0FDakQ7SUFFRCxnQ0FBUyxHQUFULFVBQVUsT0FBZTtRQUNyQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBNUNjLHNCQUFTLEdBQVEsSUFBSSxDQUFBO0lBNkN4QyxtQkFBQztDQS9DRCxBQStDQyxJQUFBO2tCQS9Db0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAgfSBmcm9tICcuLy4uL0VudW0nO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9EYXRhTWFuYWdlcic7XHJcbmltcG9ydCBSZXNvdXJjZU1hbmFnZXIgZnJvbSBcIi4vUmVzb3VyY2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIGF1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGxcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmluaXQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZTxBdWRpb01hbmFnZXI+KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZSA9IG5ldyBjYy5BdWRpb1NvdXJjZSgpXHJcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5sb29wID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2Uudm9sdW1lID0gMC4zXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheU11c2ljKCl7XHJcbiAgICAgICAgaWYoIURhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzUGxheUJnbSkgcmV0dXJuXHJcbiAgICAgICAgaWYodGhpcy5hdWRpb1NvdXJjZS5jbGlwKXtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBhd2FpdCBSZXNvdXJjZU1hbmFnZXIuaW5zdGFuY2UuZ2V0Q2xpcChFTlVNX0FVRElPX0NMSVAuQkdNKVxyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UuY2xpcCA9IGNsaXBcclxuICAgICAgICB0aGlzLmF1ZGlvU291cmNlLnBsYXkoKVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BNdXNpYygpe1xyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2Uuc3RvcCgpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGxheVNvdW5kKG5hbWU6IEVOVU1fQVVESU9fQ0xJUCB8IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gZmFsc2Upe1xyXG4gICAgICAgIGlmKCFEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5pc1BsYXlTZngpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IGNsaXAgPSBhd2FpdCBSZXNvdXJjZU1hbmFnZXIuaW5zdGFuY2UuZ2V0Q2xpcChuYW1lKVxyXG4gICAgICAgIHJldHVybiBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzTG9vcClcclxuICAgIH1cclxuXHJcbiAgICBzdG9wU291bmQoYXVkaW9JZDogbnVtYmVyKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGF1ZGlvSWQpXHJcbiAgICB9XHJcbn1cclxuIl19