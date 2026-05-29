
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/LoseDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0xvc2VEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsZ0NBQStGO0FBQy9GLG9EQUFtRDtBQUNuRCx3REFBbUQ7QUFDbkQsb0RBQStDO0FBQy9DLCtDQUEwQztBQUMxQyxzREFBaUQ7QUFDakQsaURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBb0hDO1FBbEhHLFVBQUksR0FBWSxJQUFJLENBQUE7UUFDcEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUN2QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLGtCQUFZLEdBQVksSUFBSSxDQUFBO1FBQzVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBVSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixNQUFNO1FBQ0UsY0FBUSxHQUFDLDBCQUFtQixDQUFDLElBQUksQ0FBQztRQUUxQyxvQkFBYyxHQUFVLElBQUksQ0FBQztRQUU3QixPQUFPO1FBQ0MsVUFBSSxHQUFDLENBQUMsQ0FBQzs7SUFnR25CLENBQUM7SUE5RkcsMkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUks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SSxDQUFDLENBQUE7Z0JBQzNDLCtCQUFjLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNoRCxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUUsMEJBQW1CLENBQUMsSUFBSSxFQUFDO29CQUN2QyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO2lCQUNoRjtxQkFBSTtvQkFDRCwrQkFBYyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztpQkFDL0M7Z0JBQ0QsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7YUFDN0QsRUFBRSxVQUFDLEdBQVc7WUFDWixnR0FBZ0c7UUFDbkcsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBbkhnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBb0g5QjtJQUFELGlCQUFDO0NBcEhELEFBb0hDLENBcEh1QyxzQkFBWSxHQW9IbkQ7a0JBcEhvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9MT1NFX1RZUEUsIEVOVU1fR0FNRV9TVEFUVVMsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi4vU3RhdGljSW5zdGFuY2UnO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9TZGtNYW5hZ2VyXCI7XHJcbmltcG9ydCBIZWFkZXJEaWFsb2cgZnJvbSBcIi4vSGVhZGVyRGlhbG9nXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBpMThuTWFuYWdlIH0gZnJvbSBcIi4uL2kxOG4vaTE4bk1hbmFnZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvc2VEaWFsb2cgZXh0ZW5kcyBIZWFkZXJEaWFsb2cge1xyXG5cclxuICAgIG1haW46IGNjLk5vZGUgPSBudWxsXHJcbiAgICBidG5FeGl0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuUmV3YXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgcG93ZXJDb2xsZWN0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHRpdGxlTGFiZWw6Y2MuTGFiZWw9bnVsbDtcclxuXHJcbiAgICBub3RlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICB0aW1lTG9zZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcmVtb3ZlTG9zZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8v5aSx6LSl57G75Z6LXHJcbiAgICBwcml2YXRlIGxvc2VUeXBlPUVOVU1fR0FNRV9MT1NFX1RZUEUuVElNRTtcclxuXHJcbiAgICBzdGFyQ291bnRMYWJlbDpjYy5MYWJlbD1udWxsO1xyXG5cclxuICAgIC8v5oC75YWx5pyJMuatpVxyXG4gICAgcHJpdmF0ZSBzdGVwPTE7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHN1cGVyLm9uTG9hZCgpXHJcbiAgICAgICAgdGhpcy5tYWluID0gY2MuZmluZCgnc3R5bGUvbWFpbicsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub3RlTm9kZSA9IGNjLmZpbmQoJ3N0eWxlL21haW4vbm90ZU5vZGUnLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuc3RhckNvdW50TGFiZWwgPSBjYy5maW5kKCdpdGVtTm9kZTIvdGlwJywgdGhpcy5ub3RlTm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnJlbW92ZUxvc2VOb2RlID0gY2MuZmluZCgnc3R5bGUvbWFpbi9yZW1vdmVMb3NlTm9kZScsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy50aW1lTG9zZU5vZGUgPSBjYy5maW5kKCdzdHlsZS9tYWluL3RpbWVMb3NlTm9kZScsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy50aXRsZUxhYmVsID0gY2MuZmluZCgnc3R5bGUvbWFpbi90aXRsZU5vZGUvdGl0bGUnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5idG5FeGl0ID0gY2MuZmluZCgnYnV0dG9ucy9idG5fZXhpdCcsIHRoaXMubWFpbilcclxuICAgICAgICB0aGlzLmJ0bkV4aXQub24oJ2NsaWNrJywgdGhpcy5vbkNsb3NlQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5SZXdhcmQgPSBjYy5maW5kKCdidXR0b25zL2J0bl9yZXdhcmQnLCB0aGlzLm1haW4pXHJcbiAgICAgICAgdGhpcy5idG5SZXdhcmQub24oJ2NsaWNrJywgdGhpcy5vblJld2FyZENsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMucG93ZXJDb2xsZWN0ID0gY2MuZmluZCgnbnVtJywgdGhpcy5tYWluKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSBjYy5maW5kKCdidG5fY2xvc2UnLCB0aGlzLm1haW4pO1xyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub24oJ2NsaWNrJywgdGhpcy5vbkNsb3NlQ2xpY2ssIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24obG9zZVR5cGU6RU5VTV9HQU1FX0xPU0VfVFlQRSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm90ZU5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RlcD0xO1xyXG4gICAgICAgIHRoaXMubG9zZVR5cGU9bG9zZVR5cGU7XHJcbiAgICAgICAgIGlmKGxvc2VUeXBlPT1FTlVNX0dBTUVfTE9TRV9UWVBFLlRJTUUpe1xyXG4gICAgICAgICAgICAgdGhpcy50aXRsZUxhYmVsLnN0cmluZz1pMThuTWFuYWdlLl9nZXRMYWJlbCgndHh0X3RpbWV1cCcsW10pO1xyXG4gICAgICAgICAgICAgdGhpcy50aW1lTG9zZU5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICB0aGlzLnJlbW92ZUxvc2VOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGVMYWJlbC5zdHJpbmc9aTE4bk1hbmFnZS5fZ2V0TGFiZWwoJ3R4dF9mYWlsJyxbXSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxvc2VOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9zZU5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5zdGFyQ291bnRMYWJlbC5zdHJpbmc9RGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmN1cnJlbnRTdGFyU2NvcmUrXCJcIjtcclxuICAgICAgICAgdGhpcy5zdGVwPTE7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuYnRuRXhpdC5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsb3NlQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5SZXdhcmQub2ZmKCdjbGljaycsIHRoaXMub25SZXdhcmRDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9mZignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnJlbmRvckhlYXJ0KClcclxuICAgICAgICB0aGlzLnJlbmRvclN0YXIoKVxyXG4gICAgICAgIHRoaXMucmVuZG9ySGVhcnRUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuem9vbUluKHRoaXMubWFpbilcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnRvZ2dsZUJhbm5lckFkKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudG9nZ2xlQmFubmVyQWQoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25SZXN0YXJ0Q2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgYXdhaXQgU3RhdGljSW5zdGFuY2UuZmFkZU1hbmFnZXIuZmFkZUluKClcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5MT1NFLCBmYWxzZSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5vbkdhbWVTdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZUNsaWNrKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc3RlcD09MSl7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZU5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUxvc2VOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVMb3NlTm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcD0yO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9IEVOVU1fR0FNRV9TVEFUVVMuTE9TRTtcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NQUlOLCBmYWxzZSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5JQ0UsIGZhbHNlKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkxPU0UsIGZhbHNlKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk1FTlUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmV3YXJkQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5zaG93VmlkZW9BZChhc3luYyAobXNnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkc7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5pc1Jldml2ZXc9dHJ1ZTtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnJldml2ZXdDb3VudCsrO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEuc2F2ZUN1cnJEYXRhKCk7XHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXIodHJ1ZSlcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lclNvdW5kKHRydWUpXHJcbiAgICAgICAgICAgIGlmKHRoaXMubG9zZVR5cGU9PUVOVU1fR0FNRV9MT1NFX1RZUEUuVElNRSl7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXI9RGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnRpbWVyKzYwOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5vblNraWxsU2h1ZmZsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkxPU0UsIGZhbHNlKTtcclxuICAgICAgICB9LCAobXNnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAvLyBUb2FzdE1hbmFnZXIuaW5zdGFuY2Uuc2hvdyhtc2csIHsgZ3Jhdml0eTogJ0JPVFRPTScsIGJnX2NvbG9yOiBjYy5jb2xvcigyMjYsIDY5LCAxMDksIDI1NSkgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==