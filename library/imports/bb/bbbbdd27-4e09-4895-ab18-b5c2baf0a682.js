"use strict";
cc._RF.push(module, 'bbbbd0nTglIlasYtcK68KaC', 'AddHeartDialog');
// scripts/layer/AddHeartDialog.ts

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
exports.AddHeartDialogModel = void 0;
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var SdkManager_1 = require("../manager/SdkManager");
var DataManager_1 = require("../manager/DataManager");
var HeaderDialog_1 = require("./HeaderDialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AddHeartDialogModel = /** @class */ (function () {
    function AddHeartDialogModel(onCallBack) {
        this.onCallBack = onCallBack;
    }
    return AddHeartDialogModel;
}());
exports.AddHeartDialogModel = AddHeartDialogModel;
var AddHeartDialog = /** @class */ (function (_super) {
    __extends(AddHeartDialog, _super);
    function AddHeartDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.panel = null;
        _this.btnReward = null;
        _this.btnClose = null;
        _this.heartNumLabel = null;
        _this.m_callback = null;
        _this.addNums = 1;
        return _this;
    }
    AddHeartDialog.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.panel = cc.find('style/panel', this.node);
        this.btnReward = cc.find('btn_reward', this.panel);
        this.btnReward.on('click', this.onRewardClick, this);
        this.heartNumLabel = cc.find('iconNode/nums', this.panel).getComponent(cc.Label);
        this.btnClose = cc.find('btn_close', this.panel);
        this.btnClose.on('click', this.onCloseClick, this);
        this.timerHeart = cc.find('iconNode/timeLabel', this.panel);
    };
    AddHeartDialog.prototype.onShown = function (params) {
        this.heartNumLabel.string = "" + DataManager_1.default.instance.hearts;
        if (params) {
            this.m_callback = params.onCallBack;
        }
    };
    AddHeartDialog.prototype.onDestroy = function () {
        this.btnReward.off('click', this.onRewardClick, this);
        this.btnClose.off('click', this.onCloseClick, this);
    };
    AddHeartDialog.prototype.onEnable = function () {
        SdkManager_1.default.instance.toggleBannerAd(true);
        this.rendorHeartTimer();
    };
    AddHeartDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    AddHeartDialog.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ADDHEART, false);
        this.m_callback && this.m_callback(0);
    };
    AddHeartDialog.prototype.onRewardClick = function () {
        var _this = this;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.showVideoAd(function (msg) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.COLLECT);
                DataManager_1.default.instance.hearts += DataManager_1.default.instance.heartCollectByVideo;
                DataManager_1.default.instance.save();
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ADDHEART, false);
                if (this.m_callback) {
                    console.log("onRewardClick");
                    this.m_callback(1);
                }
                return [2 /*return*/];
            });
        }); }, function (msg) {
            // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) })
        });
    };
    AddHeartDialog = __decorate([
        ccclass
    ], AddHeartDialog);
    return AddHeartDialog;
}(HeaderDialog_1.default));
exports.default = AddHeartDialog;

cc._RF.pop();