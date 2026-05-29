
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/StartDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06e55SuhDBBBLVY+HSKgRNH', 'StartDialog');
// scripts/layer/StartDialog.ts

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
var i18nManage_1 = require("../i18n/i18nManage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartDialog = /** @class */ (function (_super) {
    __extends(StartDialog, _super);
    function StartDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = null;
        _this.btnStart = null;
        _this.btnReward = null;
        _this.powerCollect = null;
        _this.btnClose = null;
        _this.titleLabel = null;
        _this.noteNode = null;
        return _this;
    }
    StartDialog.prototype.onLoad = function () {
        console.log("onLoad");
        _super.prototype.onLoad.call(this);
        this.main = cc.find('style/main', this.node);
        this.noteNode = cc.find('style/main/noteNode', this.node);
        this.titleLabel = cc.find('style/main/titleNode/title', this.node).getComponent(cc.Label);
        this.btnStart = cc.find('buttons/btn_start', this.main);
        this.btnStart.on('click', this.onCloseClick, this);
        this.btnReward = cc.find('buttons/btn_reward', this.main);
        this.btnReward.on('click', this.onRewardClick, this);
        this.powerCollect = cc.find('num', this.main);
        this.btnClose = cc.find('btn_close', this.main);
        this.btnClose.on('click', this.onCloseClick, this);
        console.log("onLoadw");
    };
    StartDialog.prototype.onShown = function () {
        this.titleLabel.string = i18nManage_1.i18nManage._getLabel('txt_showlevel', [DataManager_1.default.instance.levelData.level + ""]);
        console.log("onShown");
    };
    StartDialog.prototype.onDestroy = function () {
        this.btnStart.off('click', this.onCloseClick, this);
        this.btnReward.off('click', this.onRewardClick, this);
        this.btnClose.off('click', this.onCloseClick, this);
    };
    StartDialog.prototype.onEnable = function () {
        this.rendorHeart();
        this.rendorStar();
        this.rendorHeartTimer();
        this.zoomIn(this.main);
        SdkManager_1.default.instance.toggleBannerAd(false);
        console.log("onEnable");
    };
    StartDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    StartDialog.prototype.onStartClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
                        if (DataManager_1.default.instance.hearts <= 0) {
                            // ToastManager.instance.show('红心已用完, 请先补充红心', { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeIn()];
                    case 1:
                        _a.sent();
                        DataManager_1.default.instance.hearts -= 1;
                        DataManager_1.default.instance.save();
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, false);
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.START, false);
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN);
                        StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        return [2 /*return*/];
                }
            });
        });
    };
    StartDialog.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.START, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU);
    };
    StartDialog.prototype.onRewardClick = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.showVideoAd(function (msg) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
                DataManager_1.default.instance.levelData.isRevivew = true;
                DataManager_1.default.instance.levelData.revivewCount++;
                DataManager_1.default.instance.levelData.saveCurrData();
                StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
                return [2 /*return*/];
            });
        }); }, function (msg) {
            // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) })
        });
    };
    StartDialog = __decorate([
        ccclass
    ], StartDialog);
    return StartDialog;
}(HeaderDialog_1.default));
exports.default = StartDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL1N0YXJ0RGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGdDQUEwRTtBQUMxRSxvREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELG9EQUErQztBQUMvQywrQ0FBMEM7QUFDMUMsc0RBQWlEO0FBQ2pELGlEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTRGQztRQTFGRyxVQUFJLEdBQVksSUFBSSxDQUFBO1FBQ3BCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsZUFBUyxHQUFZLElBQUksQ0FBQTtRQUN6QixrQkFBWSxHQUFZLElBQUksQ0FBQTtRQUM1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBa0Y3QixDQUFDO0lBL0VHLDRCQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMs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UyxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM5QyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlDLCtCQUFjLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDM0MsK0JBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2hELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7O2FBQzdELEVBQUUsVUFBQyxHQUFXO1lBQ1osZ0dBQWdHO1FBQ25HLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTNGZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRGL0I7SUFBRCxrQkFBQztDQTVGRCxBQTRGQyxDQTVGd0Msc0JBQVksR0E0RnBEO2tCQTVGb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX0dBTUVfU1RBVFVTLCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4uL1N0YXRpY0luc3RhbmNlJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IFNka01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU2RrTWFuYWdlclwiO1xyXG5pbXBvcnQgSGVhZGVyRGlhbG9nIGZyb20gXCIuL0hlYWRlckRpYWxvZ1wiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgaTE4bk1hbmFnZSB9IGZyb20gXCIuLi9pMThuL2kxOG5NYW5hZ2VcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydERpYWxvZyBleHRlbmRzIEhlYWRlckRpYWxvZyB7XHJcblxyXG4gICAgbWFpbjogY2MuTm9kZSA9IG51bGxcclxuICAgIGJ0blN0YXJ0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuUmV3YXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcG93ZXJDb2xsZWN0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHRpdGxlTGFiZWw6Y2MuTGFiZWw9bnVsbDtcclxuXHJcbiAgICBub3RlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTG9hZFwiKTtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKVxyXG4gICAgICAgIHRoaXMubWFpbiA9IGNjLmZpbmQoJ3N0eWxlL21haW4nLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMubm90ZU5vZGUgPSBjYy5maW5kKCdzdHlsZS9tYWluL25vdGVOb2RlJywgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnRpdGxlTGFiZWwgPSBjYy5maW5kKCdzdHlsZS9tYWluL3RpdGxlTm9kZS90aXRsZScsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gY2MuZmluZCgnYnV0dG9ucy9idG5fc3RhcnQnLCB0aGlzLm1haW4pXHJcbiAgICAgICAgdGhpcy5idG5TdGFydC5vbignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0blJld2FyZCA9IGNjLmZpbmQoJ2J1dHRvbnMvYnRuX3Jld2FyZCcsIHRoaXMubWFpbilcclxuICAgICAgICB0aGlzLmJ0blJld2FyZC5vbignY2xpY2snLCB0aGlzLm9uUmV3YXJkQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5wb3dlckNvbGxlY3QgPSBjYy5maW5kKCdudW0nLCB0aGlzLm1haW4pXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZSA9IGNjLmZpbmQoJ2J0bl9jbG9zZScsIHRoaXMubWFpbik7XHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vbignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkxvYWR3XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24oKTogdm9pZCB7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nPWkxOG5NYW5hZ2UuX2dldExhYmVsKCd0eHRfc2hvd2xldmVsJyxbRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmxldmVsK1wiXCJdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uU2hvd25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYnRuU3RhcnQub2ZmKCdjbGljaycsIHRoaXMub25DbG9zZUNsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuUmV3YXJkLm9mZignY2xpY2snLCB0aGlzLm9uUmV3YXJkQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsb3NlQ2xpY2ssIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kb3JIZWFydCgpXHJcbiAgICAgICAgdGhpcy5yZW5kb3JTdGFyKClcclxuICAgICAgICB0aGlzLnJlbmRvckhlYXJ0VGltZXIoKTtcclxuICAgICAgICB0aGlzLnpvb21Jbih0aGlzLm1haW4pXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS50b2dnbGVCYW5uZXJBZChmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uRW5hYmxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnRvZ2dsZUJhbm5lckFkKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uU3RhcnRDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UuaGVhcnRzIDw9IDApIHtcclxuICAgICAgICAgICAvLyBUb2FzdE1hbmFnZXIuaW5zdGFuY2Uuc2hvdygn57qi5b+D5bey55So5a6MLCDor7flhYjooaXlhYXnuqLlv4MnLCB7IGdyYXZpdHk6ICdUT1AnLCBiZ19jb2xvcjogY2MuY29sb3IoMjI2LCA2OSwgMTA5LCAyNTUpIH0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBTdGF0aWNJbnN0YW5jZS5mYWRlTWFuYWdlci5mYWRlSW4oKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0cyAtPSAxXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZSgpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUVOVSwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU1RBUlQsIGZhbHNlKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk1BSU4pXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIub25HYW1lU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNsb3NlQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUFJTiwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuSUNFLCBmYWxzZSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TVEFSVCwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUVOVSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXdhcmRDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnNob3dWaWRlb0FkKGFzeW5jIChtc2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLlJVTklORztcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmlzUmV2aXZldz10cnVlO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEucmV2aXZld0NvdW50Kys7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5zYXZlQ3VyckRhdGEoKTtcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lcih0cnVlKVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblRpbWVyU291bmQodHJ1ZSlcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTE9TRSwgZmFsc2UpO1xyXG4gICAgICAgIH0sIChtc2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgIC8vIFRvYXN0TWFuYWdlci5pbnN0YW5jZS5zaG93KG1zZywgeyBncmF2aXR5OiAnQk9UVE9NJywgYmdfY29sb3I6IGNjLmNvbG9yKDIyNiwgNjksIDEwOSwgMjU1KSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIl19