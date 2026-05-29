"use strict";
cc._RF.push(module, '94d9eW2z5xN9KXMq6SiqvtZ', 'MenuLayer');
// scripts/layer/MenuLayer.ts

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
var StaticInstance_1 = require("./../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var HeaderDialog_1 = require("./HeaderDialog");
var i18nManage_1 = require("../i18n/i18nManage");
var Constants_1 = require("../Constants");
var PoolManager_1 = require("../manager/PoolManager");
var AddHeartDialog_1 = require("./AddHeartDialog");
var EffectFlyManager_1 = require("../framework/EffectFlyManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuLayer = /** @class */ (function (_super) {
    __extends(MenuLayer, _super);
    function MenuLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnStart = null;
        _this.btnRank = null;
        _this.btnSetting = null;
        _this.levelLabel = null;
        return _this;
    }
    MenuLayer.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.btnStart = cc.find('btn_start', this.node);
        this.btnRank = cc.find('rightNode/btn_rank', this.node);
        this.btnSetting = cc.find('leftNode/btn_setting', this.node);
        this.btnStart.on('click', this.onStartClick, this);
        this.levelLabel = cc.find('label', this.btnStart).getComponent(cc.Label);
        this.btnRank.on('click', this.onRankClick, this);
        this.btnSetting.on('click', this.onSettingClick, this);
    };
    MenuLayer.prototype.onShown = function () {
        this.levelLabel.string = i18nManage_1.i18nManage._getLabel('txt_showlevel', [DataManager_1.default.instance.levelData.level + ""]);
    };
    MenuLayer.prototype.onDestroy = function () {
        this.btnStart.off('click', this.onStartClick, this);
        this.btnRank.off('click', this.onRankClick, this);
        this.btnSetting.off('click', this.onSettingClick, this);
    };
    MenuLayer.prototype.onEnable = function () {
        this.rendorHeart();
        this.rendorStar();
        this.rendorHeartTimer();
    };
    MenuLayer.prototype.onDisable = function () { };
    MenuLayer.prototype.onStartClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
                        if (DataManager_1.default.instance.hearts <= 0) {
                            // ToastManager.instance.show('红心已用完, 请先补充红心', { gravity: 'TOP', bg_color: cc.color(226, 69, 109, 255) })
                            //return
                        }
                        //if(DataManager.instance.levelData.level>1){
                        //  await StaticInstance.fadeManager.fadeIn()
                        // StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
                        //     StaticInstance.uiManager.toggle(ENUM_UI_TYPE.START)
                        //  }else{
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeIn()];
                    case 1:
                        //if(DataManager.instance.levelData.level>1){
                        //  await StaticInstance.fadeManager.fadeIn()
                        // StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
                        //     StaticInstance.uiManager.toggle(ENUM_UI_TYPE.START)
                        //  }else{
                        _a.sent();
                        DataManager_1.default.instance.hearts -= 1;
                        DataManager_1.default.instance.save();
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, false);
                        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, true);
                        StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuLayer.prototype.onHeartDialogClick = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ADDHEART, true, new AddHeartDialog_1.AddHeartDialogModel(function (num) { return _this.onAddHeartCallBack(num); }));
    };
    MenuLayer.prototype.onAddHeartCallBack = function (num) {
        var _this = this;
        console.log("onAddHeartCallBack", num);
        var heart = PoolManager_1.default.instance.getNode('Heart', this.node, cc.v3(0, 0));
        heart.scale = 1.5;
        EffectFlyManager_1.default.Instance.jumpOutAndFly(this.node, heart, this.barHeart.getChildByName('nums'), function () {
            heart.removeFromParent();
            _this.rendorHeart();
        });
    };
    MenuLayer.prototype.onRankClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.RANK, true, Constants_1.default.RankType.WEEK);
    };
    MenuLayer.prototype.onSettingClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        // StaticInstance.uiManager.toggle(ENUM_UI_TYPE.MENU, false)
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, true, Constants_1.default.GAME_SCENCE.HOME);
    };
    MenuLayer = __decorate([
        ccclass
    ], MenuLayer);
    return MenuLayer;
}(HeaderDialog_1.default));
exports.default = MenuLayer;

cc._RF.pop();