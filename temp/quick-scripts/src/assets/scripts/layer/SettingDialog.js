"use strict";
cc._RF.push(module, '9dec5jAXQRCo4wTFnS452bX', 'SettingDialog');
// scripts/layer/SettingDialog.ts

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
var BaseDialog_1 = require("./BaseDialog");
var DataManager_1 = require("../manager/DataManager");
var Constants_1 = require("../Constants");
var i18nManage_1 = require("../i18n/i18nManage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SettingDialog = /** @class */ (function (_super) {
    __extends(SettingDialog, _super);
    function SettingDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainNode = null;
        _this.btnMusic = null;
        _this.btnSound = null;
        _this.btnValibate = null;
        _this.btnClose = null;
        _this.btnHome = null;
        _this.btnReplay = null;
        _this.btnContinue = null;
        _this.btnPrivacy = null;
        _this.btnQuit = null;
        _this.btnContinue2 = null;
        _this.homeNode = null;
        _this.gameNode = null;
        _this.settingNode = null;
        _this.exitNode = null;
        _this.titleLabel = null;
        _this.currentStarLabel = null;
        //游戏过程中总共有2步
        _this.step = 1;
        //是否点击了restart
        _this.isRestart = false;
        return _this;
    }
    SettingDialog.prototype.onLoad = function () {
        this.mainNode = cc.find('style/mainNode', this.node);
        this.homeNode = cc.find('homeNode', this.mainNode);
        this.gameNode = cc.find('gameNode', this.mainNode);
        this.settingNode = cc.find('settingNode', this.mainNode);
        this.exitNode = cc.find('exitNode', this.mainNode);
        this.btnMusic = cc.find('settingNode/btn_music', this.mainNode);
        this.btnSound = cc.find('settingNode/btn_sound', this.mainNode);
        this.btnValibate = cc.find('settingNode/btn_valibate', this.mainNode);
        this.btnPrivacy = cc.find('btn_privacy', this.homeNode);
        this.btnHome = cc.find('btn_home', this.gameNode);
        this.btnContinue = cc.find('btn_continue', this.gameNode);
        this.btnReplay = cc.find('btn_replay', this.gameNode);
        this.btnClose = cc.find('titleNode/btn_close', this.mainNode);
        this.btnQuit = cc.find('btn_quit', this.exitNode);
        this.btnContinue2 = cc.find('btn_continue', this.exitNode);
        this.titleLabel = cc.find('titleNode/title', this.mainNode).getComponent(cc.Label);
        this.currentStarLabel = cc.find('itemNode2/tip', this.exitNode).getComponent(cc.Label);
        this.btnMusic.on('click', this.onMusicClick, this);
        this.btnSound.on('click', this.onSoundClick, this);
        this.btnValibate.on('click', this.onValibateClick, this);
        this.btnHome.on('click', this.onHomeClick, this);
        this.btnReplay.on('click', this.onRestartClick, this);
        this.btnContinue.on('click', this.onCloseClick, this);
        this.btnPrivacy.on('click', this.onPrivacyClick, this);
        this.btnClose.on('click', this.onCloseClick, this);
        this.btnQuit.on('click', this.onQuitClick, this);
        this.btnContinue2.on('click', this.onCloseClick, this);
    };
    SettingDialog.prototype.onShown = function (gameScence) {
        this.step = 1;
        this.isRestart = false;
        this.titleLabel.string = i18nManage_1.i18nManage._getLabel('title_setting', []);
        this.gameScence = gameScence;
        if (this.gameScence != null && this.gameScence == Constants_1.default.GAME_SCENCE.MAIN) {
            this.homeNode.active = false;
            this.gameNode.active = true;
            this.settingNode.active = true;
            this.exitNode.active = false;
        }
        else {
            this.homeNode.active = true;
            this.gameNode.active = false;
            this.settingNode.active = true;
            this.exitNode.active = false;
        }
        this.currentStarLabel.string = DataManager_1.default.instance.levelData.currentStarScore + "";
    };
    SettingDialog.prototype.onDestroy = function () {
        this.btnMusic.off('click', this.onMusicClick, this);
        this.btnSound.off('click', this.onSoundClick, this);
        this.btnValibate.off('click', this.onValibateClick, this);
        this.btnHome.off('click', this.onHomeClick, this);
        this.btnReplay.off('click', this.onRestartClick, this);
        this.btnContinue.off('click', this.onCloseClick, this);
        this.btnClose.off('click', this.onCloseClick, this);
        this.btnPrivacy.off('click', this.onPrivacyClick, this);
        this.btnQuit.off('click', this.onQuitClick, this);
    };
    SettingDialog.prototype.onEnable = function () {
        this.zoomIn(this.mainNode);
        this.rendorMusic();
        this.rendorSound();
        this.rendorValibate();
    };
    SettingDialog.prototype.onDisable = function () { };
    SettingDialog.prototype.onPrivacyClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        cc.sys.openURL('https://sites.google.com/view/jewelloftprivacypolicy/');
    };
    SettingDialog.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        if (this.gameScence != null && this.gameScence == Constants_1.default.GAME_SCENCE.MAIN) {
            if (!StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE)) {
                StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
            }
        }
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
    };
    SettingDialog.prototype.onQuitClick = function () {
        if (this.isRestart) {
            this.onRestartClick();
        }
        else {
            this.onHomeClick();
        }
    };
    SettingDialog.prototype.onRestartClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
                        this.isRestart = true;
                        if (this.step == 1) {
                            this.step = 2;
                            this.titleLabel.string = i18nManage_1.i18nManage._getLabel('txt_exit_level', []);
                            this.homeNode.active = false;
                            this.gameNode.active = false;
                            this.settingNode.active = false;
                            this.exitNode.active = true;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeIn()];
                    case 1:
                        _a.sent();
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
                        StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingDialog.prototype.onHomeClick = function () {
        if (this.step == 1) {
            this.step = 2;
            this.titleLabel.string = i18nManage_1.i18nManage._getLabel('txt_exit_level', []);
            this.homeNode.active = false;
            this.gameNode.active = false;
            this.settingNode.active = false;
            this.exitNode.active = true;
            return;
        }
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.UNRUNING;
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU);
    };
    SettingDialog.prototype.onValibateClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.settingData.isVibrateEnabled = !DataManager_1.default.instance.settingData.isVibrateEnabled;
        DataManager_1.default.instance.settingData.saveData();
        this.rendorValibate();
    };
    SettingDialog.prototype.onSoundClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.settingData.isPlaySfx = !DataManager_1.default.instance.settingData.isPlaySfx;
        DataManager_1.default.instance.settingData.saveData();
        this.rendorSound();
    };
    SettingDialog.prototype.onMusicClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        DataManager_1.default.instance.settingData.isPlayBgm = !DataManager_1.default.instance.settingData.isPlayBgm;
        DataManager_1.default.instance.settingData.saveData();
        if (DataManager_1.default.instance.settingData.isPlayBgm) {
            AudioManager_1.default.instance.playMusic();
        }
        else {
            AudioManager_1.default.instance.stopMusic();
        }
        this.rendorMusic();
    };
    SettingDialog.prototype.rendorMusic = function () {
        this.btnMusic.getChildByName('on').active = DataManager_1.default.instance.settingData.isPlayBgm;
        this.btnMusic.getChildByName('off').active = !DataManager_1.default.instance.settingData.isPlayBgm;
    };
    SettingDialog.prototype.rendorSound = function () {
        this.btnSound.getChildByName('on').active = DataManager_1.default.instance.settingData.isPlaySfx;
        this.btnSound.getChildByName('off').active = !DataManager_1.default.instance.settingData.isPlaySfx;
    };
    SettingDialog.prototype.rendorValibate = function () {
        this.btnValibate.getChildByName('on').active = DataManager_1.default.instance.settingData.isVibrateEnabled;
        this.btnValibate.getChildByName('off').active = !DataManager_1.default.instance.settingData.isVibrateEnabled;
    };
    SettingDialog = __decorate([
        ccclass
    ], SettingDialog);
    return SettingDialog;
}(BaseDialog_1.default));
exports.default = SettingDialog;

cc._RF.pop();