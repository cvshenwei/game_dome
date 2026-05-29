
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/SettingDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL1NldHRpbmdEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLGdDQUEwRTtBQUMxRSxvREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELDJDQUFzQztBQUN0QyxzREFBaUQ7QUFFakQsMENBQXFDO0FBQ3JDLGlEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBVTtJQUFyRDtRQUFBLHFFQStNQztRQTdNRyxjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVUsSUFBSSxDQUFDO1FBRXpCLHNCQUFnQixHQUFVLElBQUksQ0FBQztRQUkvQixZQUFZO1FBQ0osVUFBSSxHQUFDLENBQUMsQ0FBQztRQUVmLGNBQWM7UUFDTixlQUFTLEdBQUMsS0FBSyxDQUFDOztJQWtMNUIsQ0FB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WDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFBO1FBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUE7SUFDNUYsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQTtRQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFBO0lBQzVGLENBQUM7SUFDRCxzQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQTtRQUNoRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUE7SUFDdEcsQ0FBQztJQTlNZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQStNakM7SUFBRCxvQkFBQztDQS9NRCxBQStNQyxDQS9NMEMsb0JBQVUsR0ErTXBEO2tCQS9Nb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9TVEFUVVMsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQmFzZURpYWxvZyBmcm9tIFwiLi9CYXNlRGlhbG9nXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9TZGtNYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBpMThuTWFuYWdlIH0gZnJvbSBcIi4uL2kxOG4vaTE4bk1hbmFnZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdEaWFsb2cgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcclxuXHJcbiAgICBtYWluTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGJ0bk11c2ljOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuU291bmQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBidG5WYWxpYmF0ZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGJ0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuSG9tZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGJ0blJlcGxheTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5Db250aW51ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5Qcml2YWN5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0blF1aXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuQ29udGludWUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGhvbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBnYW1lTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBzZXR0aW5nTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBleGl0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdGl0bGVMYWJlbDpjYy5MYWJlbD1udWxsO1xyXG5cclxuICAgIGN1cnJlbnRTdGFyTGFiZWw6Y2MuTGFiZWw9bnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVTY2VuY2U7XHJcblxyXG4gICAgLy/muLjmiI/ov4fnqIvkuK3mgLvlhbHmnIky5q2lXHJcbiAgICBwcml2YXRlIHN0ZXA9MTtcclxuXHJcbiAgICAvL+aYr+WQpueCueWHu+S6hnJlc3RhcnRcclxuICAgIHByaXZhdGUgaXNSZXN0YXJ0PWZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm1haW5Ob2RlID0gY2MuZmluZCgnc3R5bGUvbWFpbk5vZGUnLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5ob21lTm9kZSA9IGNjLmZpbmQoJ2hvbWVOb2RlJywgdGhpcy5tYWluTm9kZSlcclxuICAgICAgICB0aGlzLmdhbWVOb2RlID0gY2MuZmluZCgnZ2FtZU5vZGUnLCB0aGlzLm1haW5Ob2RlKVxyXG4gICAgICAgIHRoaXMuc2V0dGluZ05vZGUgPSBjYy5maW5kKCdzZXR0aW5nTm9kZScsIHRoaXMubWFpbk5vZGUpXHJcbiAgICAgICAgdGhpcy5leGl0Tm9kZSA9IGNjLmZpbmQoJ2V4aXROb2RlJywgdGhpcy5tYWluTm9kZSlcclxuICAgICAgICB0aGlzLmJ0bk11c2ljID0gY2MuZmluZCgnc2V0dGluZ05vZGUvYnRuX211c2ljJywgdGhpcy5tYWluTm9kZSlcclxuICAgICAgICB0aGlzLmJ0blNvdW5kID0gY2MuZmluZCgnc2V0dGluZ05vZGUvYnRuX3NvdW5kJywgdGhpcy5tYWluTm9kZSlcclxuICAgICAgICB0aGlzLmJ0blZhbGliYXRlID0gY2MuZmluZCgnc2V0dGluZ05vZGUvYnRuX3ZhbGliYXRlJywgdGhpcy5tYWluTm9kZSlcclxuICAgICAgICB0aGlzLmJ0blByaXZhY3kgPSBjYy5maW5kKCdidG5fcHJpdmFjeScsIHRoaXMuaG9tZU5vZGUpXHJcbiAgICAgICAgdGhpcy5idG5Ib21lID0gY2MuZmluZCgnYnRuX2hvbWUnLCB0aGlzLmdhbWVOb2RlKVxyXG4gICAgICAgIHRoaXMuYnRuQ29udGludWUgPSBjYy5maW5kKCdidG5fY29udGludWUnLCB0aGlzLmdhbWVOb2RlKVxyXG4gICAgICAgIHRoaXMuYnRuUmVwbGF5ID0gY2MuZmluZCgnYnRuX3JlcGxheScsIHRoaXMuZ2FtZU5vZGUpXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZSA9IGNjLmZpbmQoJ3RpdGxlTm9kZS9idG5fY2xvc2UnLCB0aGlzLm1haW5Ob2RlKVxyXG5cclxuICAgICAgICB0aGlzLmJ0blF1aXQgPSBjYy5maW5kKCdidG5fcXVpdCcsIHRoaXMuZXhpdE5vZGUpXHJcbiAgICAgICAgdGhpcy5idG5Db250aW51ZTIgPSBjYy5maW5kKCdidG5fY29udGludWUnLCB0aGlzLmV4aXROb2RlKVxyXG5cclxuICAgICAgICB0aGlzLnRpdGxlTGFiZWwgPSBjYy5maW5kKCd0aXRsZU5vZGUvdGl0bGUnLCB0aGlzLm1haW5Ob2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXJMYWJlbCA9IGNjLmZpbmQoJ2l0ZW1Ob2RlMi90aXAnLCB0aGlzLmV4aXROb2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bk11c2ljLm9uKCdjbGljaycsIHRoaXMub25NdXNpY0NsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuU291bmQub24oJ2NsaWNrJywgdGhpcy5vblNvdW5kQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5WYWxpYmF0ZS5vbignY2xpY2snLCB0aGlzLm9uVmFsaWJhdGVDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0bkhvbWUub24oJ2NsaWNrJywgdGhpcy5vbkhvbWVDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0blJlcGxheS5vbignY2xpY2snLCB0aGlzLm9uUmVzdGFydENsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuQ29udGludWUub24oJ2NsaWNrJywgdGhpcy5vbkNsb3NlQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5Qcml2YWN5Lm9uKCdjbGljaycsIHRoaXMub25Qcml2YWN5Q2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vbignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0blF1aXQub24oJ2NsaWNrJywgdGhpcy5vblF1aXRDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0bkNvbnRpbnVlMi5vbignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKGdhbWVTY2VuY2U6c3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVwPTE7XHJcbiAgICAgICAgdGhpcy5pc1Jlc3RhcnQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aXRsZUxhYmVsLnN0cmluZz1pMThuTWFuYWdlLl9nZXRMYWJlbCgndGl0bGVfc2V0dGluZycsW10pO1xyXG4gICAgICAgIHRoaXMuZ2FtZVNjZW5jZT1nYW1lU2NlbmNlO1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZVNjZW5jZSE9bnVsbCYmdGhpcy5nYW1lU2NlbmNlPT1Db25zdGFudHMuR0FNRV9TQ0VOQ0UuTUFJTil7XHJcbiAgICAgICAgICAgIHRoaXMuaG9tZU5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVOb2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdOb2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmV4aXROb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ob21lTm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ05vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZXhpdE5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGFyTGFiZWwuc3RyaW5nPURhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlK1wiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYnRuTXVzaWMub2ZmKCdjbGljaycsIHRoaXMub25NdXNpY0NsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuU291bmQub2ZmKCdjbGljaycsIHRoaXMub25Tb3VuZENsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuVmFsaWJhdGUub2ZmKCdjbGljaycsIHRoaXMub25WYWxpYmF0ZUNsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuSG9tZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkhvbWVDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0blJlcGxheS5vZmYoJ2NsaWNrJywgdGhpcy5vblJlc3RhcnRDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0bkNvbnRpbnVlLm9mZignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9mZignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0blByaXZhY3kub2ZmKCdjbGljaycsIHRoaXMub25Qcml2YWN5Q2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5RdWl0Lm9mZignY2xpY2snLCB0aGlzLm9uUXVpdENsaWNrLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuem9vbUluKHRoaXMubWFpbk5vZGUpXHJcbiAgICAgICAgdGhpcy5yZW5kb3JNdXNpYygpXHJcbiAgICAgICAgdGhpcy5yZW5kb3JTb3VuZCgpO1xyXG4gICAgICAgIHRoaXMucmVuZG9yVmFsaWJhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBvbkRpc2FibGUoKSB7IH1cclxuXHJcbiAgICBvblByaXZhY3lDbGljaygpIHsgXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spO1xyXG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKCdodHRwczovL3NpdGVzLmdvb2dsZS5jb20vdmlldy9qZXdlbGxvZnRwcml2YWN5cG9saWN5LycpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBpZih0aGlzLmdhbWVTY2VuY2UhPW51bGwmJnRoaXMuZ2FtZVNjZW5jZT09Q29uc3RhbnRzLkdBTUVfU0NFTkNFLk1BSU4pe1xyXG4gICAgICAgICAgICBpZiAoIVN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5pc0FjdGl2ZShFTlVNX1VJX1RZUEUuSUNFKSkge1xyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lclNvdW5kKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU0VUVElORywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUXVpdENsaWNrKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzUmVzdGFydCl7XHJcbiAgICAgICAgICAgIHRoaXMub25SZXN0YXJ0Q2xpY2soKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5vbkhvbWVDbGljaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIG9uUmVzdGFydENsaWNrKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKTtcclxuICAgICAgICB0aGlzLmlzUmVzdGFydD10cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuc3RlcD09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcD0yO1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlTGFiZWwuc3RyaW5nPWkxOG5NYW5hZ2UuX2dldExhYmVsKCd0eHRfZXhpdF9sZXZlbCcsW10pO1xyXG4gICAgICAgICAgICB0aGlzLmhvbWVOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ05vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmV4aXROb2RlLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IFN0YXRpY0luc3RhbmNlLmZhZGVNYW5hZ2VyLmZhZGVJbigpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU0VUVElORywgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIub25HYW1lU3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhvbWVDbGljaygpIHtcclxuICAgICAgICBpZih0aGlzLnN0ZXA9PTEpe1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXA9MjtcclxuICAgICAgICAgICAgdGhpcy50aXRsZUxhYmVsLnN0cmluZz1pMThuTWFuYWdlLl9nZXRMYWJlbCgndHh0X2V4aXRfbGV2ZWwnLFtdKTtcclxuICAgICAgICAgICAgdGhpcy5ob21lTm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5leGl0Tm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLlVOUlVOSU5HXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUFJTiwgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU0VUVElORywgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuSUNFLCBmYWxzZSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VKVxyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsaWJhdGVDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5pc1ZpYnJhdGVFbmFibGVkID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzVmlicmF0ZUVuYWJsZWRcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5zYXZlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMucmVuZG9yVmFsaWJhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNvdW5kQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2V0dGluZ0RhdGEuaXNQbGF5U2Z4ID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzUGxheVNmeFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLnNhdmVEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kb3JTb3VuZCgpXHJcbiAgICB9XHJcblxyXG4gICAgb25NdXNpY0NsaWNrKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzUGxheUJnbSA9ICFEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5pc1BsYXlCZ21cclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5zYXZlRGF0YSgpO1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5pc1BsYXlCZ20pIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlNdXNpYygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BNdXNpYygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZG9yTXVzaWMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRvck11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuYnRuTXVzaWMuZ2V0Q2hpbGRCeU5hbWUoJ29uJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2V0dGluZ0RhdGEuaXNQbGF5QmdtXHJcbiAgICAgICAgdGhpcy5idG5NdXNpYy5nZXRDaGlsZEJ5TmFtZSgnb2ZmJykuYWN0aXZlID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzUGxheUJnbVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRvclNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuYnRuU291bmQuZ2V0Q2hpbGRCeU5hbWUoJ29uJykuYWN0aXZlID0gRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2V0dGluZ0RhdGEuaXNQbGF5U2Z4XHJcbiAgICAgICAgdGhpcy5idG5Tb3VuZC5nZXRDaGlsZEJ5TmFtZSgnb2ZmJykuYWN0aXZlID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzUGxheVNmeFxyXG4gICAgfVxyXG4gICAgcmVuZG9yVmFsaWJhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5idG5WYWxpYmF0ZS5nZXRDaGlsZEJ5TmFtZSgnb24nKS5hY3RpdmUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5zZXR0aW5nRGF0YS5pc1ZpYnJhdGVFbmFibGVkXHJcbiAgICAgICAgdGhpcy5idG5WYWxpYmF0ZS5nZXRDaGlsZEJ5TmFtZSgnb2ZmJykuYWN0aXZlID0gIURhdGFNYW5hZ2VyLmluc3RhbmNlLnNldHRpbmdEYXRhLmlzVmlicmF0ZUVuYWJsZWRcclxuICAgIH1cclxufVxyXG4iXX0=