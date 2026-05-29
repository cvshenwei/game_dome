"use strict";
cc._RF.push(module, 'bcc76NZbeJLJoz/xMEFMd7S', 'LoseDialog');
// scripts/layer/LoseDialog.ts

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
var LoseDialog = /** @class */ (function (_super) {
    __extends(LoseDialog, _super);
    function LoseDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = null;
        _this.btnExit = null;
        _this.btnReward = null;
        _this.powerCollect = null;
        _this.btnClose = null;
        _this.titleLabel = null;
        _this.noteNode = null;
        _this.timeLoseNode = null;
        _this.removeLoseNode = null;
        //失败类型
        _this.loseType = Enum_1.ENUM_GAME_LOSE_TYPE.TIME;
        _this.starCountLabel = null;
        //总共有2步
        _this.step = 1;
        return _this;
    }
    LoseDialog.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.main = cc.find('style/main', this.node);
        this.noteNode = cc.find('style/main/noteNode', this.node);
        this.starCountLabel = cc.find('itemNode2/tip', this.noteNode).getComponent(cc.Label);
        this.removeLoseNode = cc.find('style/main/removeLoseNode', this.node);
        this.timeLoseNode = cc.find('style/main/timeLoseNode', this.node);
        this.titleLabel = cc.find('style/main/titleNode/title', this.node).getComponent(cc.Label);
        this.btnExit = cc.find('buttons/btn_exit', this.main);
        this.btnExit.on('click', this.onCloseClick, this);
        this.btnReward = cc.find('buttons/btn_reward', this.main);
        this.btnReward.on('click', this.onRewardClick, this);
        this.powerCollect = cc.find('num', this.main);
        this.btnClose = cc.find('btn_close', this.main);
        this.btnClose.on('click', this.onCloseClick, this);
    };
    LoseDialog.prototype.onShown = function (loseType) {
        this.noteNode.active = false;
        this.step = 1;
        this.loseType = loseType;
        if (loseType == Enum_1.ENUM_GAME_LOSE_TYPE.TIME) {
            this.titleLabel.string = i18nManage_1.i18nManage._getLabel('txt_timeup', []);
            this.timeLoseNode.active = true;
            this.removeLoseNode.active = false;
        }
        else {
            this.titleLabel.string = i18nManage_1.i18nManage._getLabel('txt_fail', []);
            this.timeLoseNode.active = false;
            this.removeLoseNode.active = true;
        }
        this.starCountLabel.string = DataManager_1.default.instance.levelData.currentStarScore + "";
        this.step = 1;
    };
    LoseDialog.prototype.onDestroy = function () {
        this.btnExit.off('click', this.onCloseClick, this);
        this.btnReward.off('click', this.onRewardClick, this);
        this.btnClose.off('click', this.onCloseClick, this);
    };
    LoseDialog.prototype.onEnable = function () {
        this.rendorHeart();
        this.rendorStar();
        this.rendorHeartTimer();
        this.zoomIn(this.main);
        SdkManager_1.default.instance.toggleBannerAd(true);
    };
    LoseDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    LoseDialog.prototype.onRestartClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeIn()];
                    case 1:
                        _a.sent();
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
                        StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoseDialog.prototype.onCloseClick = function () {
        if (this.step == 1) {
            this.noteNode.active = true;
            this.timeLoseNode.active = false;
            this.removeLoseNode.active = false;
            this.step = 2;
            return;
        }
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.LOSE;
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU);
    };
    LoseDialog.prototype.onRewardClick = function () {
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
                if (this.loseType == Enum_1.ENUM_GAME_LOSE_TYPE.TIME) {
                    DataManager_1.default.instance.levelData.timer = DataManager_1.default.instance.levelData.timer + 60;
                }
                else {
                    StaticInstance_1.StaticInstance.gameManager.onSkillShuffle();
                }
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, false);
                return [2 /*return*/];
            });
        }); }, function (msg) {
            // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) })
        });
    };
    LoseDialog = __decorate([
        ccclass
    ], LoseDialog);
    return LoseDialog;
}(HeaderDialog_1.default));
exports.default = LoseDialog;

cc._RF.pop();