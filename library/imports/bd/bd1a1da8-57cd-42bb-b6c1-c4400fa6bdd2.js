"use strict";
cc._RF.push(module, 'bd1a12oV81Cu7bBxEAPpr3S', 'Index');
// scripts/Index.ts

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
var StaticInstance_1 = require("./StaticInstance");
var Enum_1 = require("./Enum");
var AudioManager_1 = require("./manager/AudioManager");
var DataManager_1 = require("./manager/DataManager");
var ResourceManager_1 = require("./manager/ResourceManager");
var SdkManager_1 = require("./manager/SdkManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.onLoad = function () {
        var _this = this;
        this.node.getChildByName('UI').opacity = 255;
        cc.view.setResizeCallback(function () { return _this.responsive(); });
        this.responsive();
        DataManager_1.default.instance.loadingRate = 0;
    };
    Index.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _i, index, resource;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = [];
                        for (_b in Enum_1.ENUM_RESOURCE_TYPE)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        index = _a[_i];
                        resource = Enum_1.ENUM_RESOURCE_TYPE[index];
                        return [4 /*yield*/, ResourceManager_1.default.instance.loadRes(resource)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        // 加载ui
                        StaticInstance_1.StaticInstance.uiManager.init();
                        // 读档
                        DataManager_1.default.instance.restore();
                        // 播放音乐
                        AudioManager_1.default.instance.playMusic();
                        // 加载sdk
                        SdkManager_1.default.instance.initBannerAd();
                        SdkManager_1.default.instance.initInterstitialAd();
                        SdkManager_1.default.instance.initVideoAd();
                        // 离开后体力恢复逻辑
                        this.onHeartIncrease();
                        // 操作ui,显示首页
                        //新手直接进新手引导
                        if (DataManager_1.default.instance.levelData.level == 1) {
                            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, false);
                            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MAIN, true, null, function () {
                                DataManager_1.default.instance.loadingRate = 1;
                            });
                            StaticInstance_1.StaticInstance.gameManager.onGameStart();
                        }
                        else {
                            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU, true, null, function () {
                                console.log("loadingRate");
                                DataManager_1.default.instance.loadingRate = 1;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // 屏幕响应式
    Index.prototype.responsive = function () {
        var designSize = cc.view.getDesignResolutionSize();
        var viewSize = cc.view.getFrameSize();
        var setFitWidth = function () {
            cc.Canvas.instance.fitHeight = false;
            cc.Canvas.instance.fitWidth = true;
        };
        var setFitHeight = function () {
            cc.Canvas.instance.fitHeight = true;
            cc.Canvas.instance.fitWidth = false;
        };
        var setFitBoth = function () {
            cc.Canvas.instance.fitHeight = true;
            cc.Canvas.instance.fitWidth = true;
        };
        var designRatio = designSize.width / designSize.height;
        var viewRatio = viewSize.width / viewSize.height;
        if (designRatio < 1) {
            // console.error('--竖屏游戏')
            if (viewRatio < 1) {
                if (viewRatio > designRatio) {
                    setFitBoth();
                }
                else {
                    setFitWidth();
                }
            }
            else {
                setFitBoth();
            }
        }
        else {
            // console.error('--宽屏游戏')
            if (viewRatio > 1) {
                if (viewRatio < designRatio) {
                    setFitBoth();
                }
                else {
                    setFitHeight();
                }
            }
            else {
                setFitBoth();
            }
        }
    };
    Index.prototype.onHeartIncrease = function () {
        // 体力小于5的时候需要补充
        if (DataManager_1.default.instance.hearts < 5) {
            var now = new Date().getTime();
            var seconds = Math.floor((now - DataManager_1.default.instance.lastHeartUpdateTime) / 1000);
            var hearts = Math.floor(seconds / DataManager_1.default.instance.heartRefreshTime);
            if (DataManager_1.default.instance.hearts + hearts >= 5) {
                DataManager_1.default.instance.hearts = 5;
                DataManager_1.default.instance.lastHeartRefreshTime = 0;
            }
            else {
                DataManager_1.default.instance.hearts += hearts;
            }
            DataManager_1.default.instance.save();
        }
    };
    Index = __decorate([
        ccclass
    ], Index);
    return Index;
}(cc.Component));
exports.default = Index;

cc._RF.pop();