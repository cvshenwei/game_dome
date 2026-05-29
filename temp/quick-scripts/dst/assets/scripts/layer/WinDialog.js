
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/WinDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c6b40lgJJFZYQ6XSOn8Mso', 'WinDialog');
// scripts/layer/WinDialog.ts

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
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var SdkManager_1 = require("../manager/SdkManager");
var HeaderDialog_1 = require("./HeaderDialog");
var DataManager_1 = require("../manager/DataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinDialog = /** @class */ (function (_super) {
    __extends(WinDialog, _super);
    function WinDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.btnNext = null;
        _this.btnDouble = null;
        _this.powerCollect = null;
        return _this;
    }
    WinDialog.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.panel = cc.find('style/panel', this.node);
        this.btnNext = cc.find('buttons/btn_next', this.panel);
        this.btnDouble = cc.find('buttons/btn_double', this.panel);
        this.btnNext.on('click', this.onNextClick, this);
        this.btnDouble.on('click', this.onDoubleClick, this);
        this.powerCollect = cc.find('num', this.panel);
    };
    WinDialog.prototype.onDestroy = function () {
        this.btnNext.off('click', this.onNextClick, this);
        this.btnDouble.off('click', this.onDoubleClick, this);
    };
    WinDialog.prototype.onEnable = function () {
        this.rendorHeart();
        this.rendorStar();
        this.rendorHeartTimer();
        this.rendorPowerCollect();
        this.zoomIn(this.panel);
        SdkManager_1.default.instance.toggleBannerAd(true);
    };
    WinDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    WinDialog.prototype.rendorPowerCollect = function () {
        this.powerCollect.getComponent(cc.Label).string = "x " + DataManager_1.default.instance.levelData.currentStarScore;
    };
    WinDialog.prototype.onNextClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
                        DataManager_1.default.instance.collectStarCount += DataManager_1.default.instance.levelData.currentStarScore;
                        DataManager_1.default.instance.save();
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeIn()];
                    case 1:
                        _a.sent();
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN, false);
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, true);
                        StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        return [2 /*return*/];
                }
            });
        });
    };
    WinDialog.prototype.onDoubleClick = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.showVideoAd(function (msg) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!SdkManager_1.default.instance.getPlatform()) {
                            // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(102, 202, 28, 255) })
                        }
                        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.MONEY);
                        DataManager_1.default.instance.collectStarCount += DataManager_1.default.instance.levelData.currentStarScore * 2;
                        DataManager_1.default.instance.save();
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeIn()];
                    case 1:
                        _a.sent();
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN, false);
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, true);
                        StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        return [2 /*return*/];
                }
            });
        }); }, function (msg) {
            // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) })
        });
    };
    WinDialog = __decorate([
        ccclass
    ], WinDialog);
    return WinDialog;
}(HeaderDialog_1.default));
exports.default = WinDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL1dpbkRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsZ0NBQXdEO0FBQ3hELG9EQUFtRDtBQUNuRCx3REFBbUQ7QUFDbkQsb0RBQStDO0FBRS9DLCtDQUEwQztBQUMxQyxzREFBaUQ7QUFFM0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFrRUM7UUFoRUcsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUNyQixhQUFPLEdBQVksSUFBSSxDQUFBO1FBQ3ZCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFDekIsa0JBQVksR0FBWSxJQUFJLENBQUE7O0lBNkRoQyxDQUFDO0lBM0RHLDBCQUFNLEdBQU47UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEs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LEtBQUssQ0FBQyxDQUFDO3dCQUN6RCwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3hELCtCQUFjLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFBOzs7O2FBQzNDLEVBQUUsVUFBQyxHQUFXO1lBQ1osZ0dBQWdHO1FBQ25HLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQWpFZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWtFN0I7SUFBRCxnQkFBQztDQWxFRCxBQWtFQyxDQWxFc0Msc0JBQVksR0FrRWxEO2tCQWxFb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9TZGtNYW5hZ2VyXCI7XHJcbmltcG9ydCBUb2FzdE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCBIZWFkZXJEaWFsb2cgZnJvbSBcIi4vSGVhZGVyRGlhbG9nXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbkRpYWxvZyBleHRlbmRzIEhlYWRlckRpYWxvZyB7XHJcblxyXG4gICAgcGFuZWw6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBidG5OZXh0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuRG91YmxlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcG93ZXJDb2xsZWN0OiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKVxyXG4gICAgICAgIHRoaXMucGFuZWwgPSBjYy5maW5kKCdzdHlsZS9wYW5lbCcsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0bk5leHQgPSBjYy5maW5kKCdidXR0b25zL2J0bl9uZXh0JywgdGhpcy5wYW5lbClcclxuICAgICAgICB0aGlzLmJ0bkRvdWJsZSA9IGNjLmZpbmQoJ2J1dHRvbnMvYnRuX2RvdWJsZScsIHRoaXMucGFuZWwpXHJcbiAgICAgICAgdGhpcy5idG5OZXh0Lm9uKCdjbGljaycsIHRoaXMub25OZXh0Q2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5Eb3VibGUub24oJ2NsaWNrJywgdGhpcy5vbkRvdWJsZUNsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMucG93ZXJDb2xsZWN0ID0gY2MuZmluZCgnbnVtJywgdGhpcy5wYW5lbClcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5idG5OZXh0Lm9mZignY2xpY2snLCB0aGlzLm9uTmV4dENsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuRG91YmxlLm9mZignY2xpY2snLCB0aGlzLm9uRG91YmxlQ2xpY2ssIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kb3JIZWFydCgpXHJcbiAgICAgICAgdGhpcy5yZW5kb3JTdGFyKClcclxuICAgICAgICB0aGlzLnJlbmRvckhlYXJ0VGltZXIoKVxyXG4gICAgICAgIHRoaXMucmVuZG9yUG93ZXJDb2xsZWN0KClcclxuICAgICAgICB0aGlzLnpvb21Jbih0aGlzLnBhbmVsKVxyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudG9nZ2xlQmFubmVyQWQodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS50b2dnbGVCYW5uZXJBZChmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kb3JQb3dlckNvbGxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wb3dlckNvbGxlY3QuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgeCAke0RhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlfWBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbk5leHRDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5jb2xsZWN0U3RhckNvdW50ICs9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZSgpO1xyXG4gICAgICAgIGF3YWl0IFN0YXRpY0luc3RhbmNlLmZhZGVNYW5hZ2VyLmZhZGVJbigpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuV0lOLGZhbHNlKTtcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NQUlOLHRydWUpO1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLm9uR2FtZVN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Eb3VibGVDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnNob3dWaWRlb0FkKGFzeW5jIChtc2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVNka01hbmFnZXIuaW5zdGFuY2UuZ2V0UGxhdGZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAvLyBUb2FzdE1hbmFnZXIuaW5zdGFuY2Uuc2hvdyhtc2csIHsgZ3Jhdml0eTogJ0JPVFRPTScsIGJnX2NvbG9yOiBjYy5jb2xvcigxMDIsIDIwMiwgMjgsIDI1NSkgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5NT05FWSlcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuY29sbGVjdFN0YXJDb3VudCArPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEuY3VycmVudFN0YXJTY29yZSAqIDJcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZSgpXHJcbiAgICAgICAgICAgIGF3YWl0IFN0YXRpY0luc3RhbmNlLmZhZGVNYW5hZ2VyLmZhZGVJbigpXHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLldJTiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NQUlOLHRydWUpO1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5vbkdhbWVTdGFydCgpXHJcbiAgICAgICAgfSwgKG1zZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgLy8gVG9hc3RNYW5hZ2VyLmluc3RhbmNlLnNob3cobXNnLCB7IGdyYXZpdHk6ICdCT1RUT00nLCBiZ19jb2xvcjogY2MuY29sb3IoMjI2LCA2OSwgMTA5LCAyNTUpIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=