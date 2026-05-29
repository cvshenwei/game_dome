
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Index.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG1EQUFrRDtBQUNsRCwrQkFBMEQ7QUFDMUQsdURBQWtEO0FBQ2xELHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DOztJQTBHQSxDQUFDO0lBeEdHLHNCQUFNLEdBQU47UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUE7UUFDNUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLHFCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVLLHFCQUFLLEdBQVg7Ozs7Ozs7bUNBRXdCLHlCQUFrQjs7Ozs7Ozt3QkFDNUIsUUFBUSxHQUFHLHlCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQyxxQkFBTSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUFoRCxTQUFnRCxDQUFBOzs7Ozs7d0JBRXBELE9BQU87d0JBQ1AsK0JBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2hDLEtBQUs7d0JBQ0wscUJBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQy9CLE9BQU87d0JBQ1As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QUFBO2lCQUNmO3FCQUFNO29CQUNILFlBQVksRUFBRSxDQUFBO2lCQUNqQjthQUNKO2lCQUFNO2dCQUNILFVBQVUsRUFBRSxDQUFBO2FBQ2Y7U0FDSjtJQUNMLENBQUM7SUFFRCwrQkFBZSxHQUFmO1FBQ0ksZUFBZTtRQUNmLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQyxJQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcscUJBQVcsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtZQUNuRixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQzFFLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNDLHFCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7Z0JBQy9CLHFCQUFXLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQTthQUNoRDtpQkFBTTtnQkFDSCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFBO2FBQ3hDO1lBQ0QscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDOUI7SUFDTCxDQUFDO0lBekdnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMEd6QjtJQUFELFlBQUM7Q0ExR0QsQUEwR0MsQ0ExR2tDLEVBQUUsQ0FBQyxTQUFTLEdBMEc5QztrQkExR29CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi9TdGF0aWNJbnN0YW5jZSc7XHJcbmltcG9ydCB7IEVOVU1fUkVTT1VSQ0VfVFlQRSwgRU5VTV9VSV9UWVBFIH0gZnJvbSAnLi9FbnVtJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyJztcclxuaW1wb3J0IFJlc291cmNlTWFuYWdlciBmcm9tIFwiLi9tYW5hZ2VyL1Jlc291cmNlTWFuYWdlclwiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tICcuL21hbmFnZXIvU2RrTWFuYWdlcic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ1VJJykub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgIGNjLnZpZXcuc2V0UmVzaXplQ2FsbGJhY2soKCkgPT4gdGhpcy5yZXNwb25zaXZlKCkpXHJcbiAgICAgICAgdGhpcy5yZXNwb25zaXZlKClcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IDBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdGFydCgpIHtcclxuICAgICAgICAvLyDliqDovb3otYTmupBcclxuICAgICAgICBmb3IgKGNvbnN0IGluZGV4IGluIEVOVU1fUkVTT1VSQ0VfVFlQRSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IEVOVU1fUkVTT1VSQ0VfVFlQRVtpbmRleF07XHJcbiAgICAgICAgICAgIGF3YWl0IFJlc291cmNlTWFuYWdlci5pbnN0YW5jZS5sb2FkUmVzKHJlc291cmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDliqDovb11aVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5pbml0KCk7XHJcbiAgICAgICAgLy8g6K+75qGjXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVzdG9yZSgpO1xyXG4gICAgICAgIC8vIOaSreaUvumfs+S5kFxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5TXVzaWMoKTtcclxuICAgICAgICAvLyDliqDovb1zZGtcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLmluaXRCYW5uZXJBZCgpO1xyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UuaW5pdEludGVyc3RpdGlhbEFkKCk7XHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5pbml0VmlkZW9BZCgpO1xyXG4gICAgICAgIC8vIOemu+W8gOWQjuS9k+WKm+aBouWkjemAu+i+kVxyXG4gICAgICAgIHRoaXMub25IZWFydEluY3JlYXNlKClcclxuICAgICAgICAvLyDmk43kvZx1aSzmmL7npLrpppbpobVcclxuICAgICAgICAvL+aWsOaJi+ebtOaOpei/m+aWsOaJi+W8leWvvFxyXG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbD09MSl7XHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk1FTlUsIGZhbHNlKVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NQUlOLCB0cnVlLG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlID0gMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5vbkdhbWVTdGFydCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VLCB0cnVlLG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZ1JhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sb2FkaW5nUmF0ZSA9IDFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWxj+W5leWTjeW6lOW8j1xyXG4gICAgcmVzcG9uc2l2ZSgpIHtcclxuICAgICAgICBjb25zdCBkZXNpZ25TaXplID0gY2Mudmlldy5nZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXdTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2V0Rml0V2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdFdpZHRoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNldEZpdEhlaWdodCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0Rml0Qm90aCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLkNhbnZhcy5pbnN0YW5jZS5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkZXNpZ25SYXRpbyA9IGRlc2lnblNpemUud2lkdGggLyBkZXNpZ25TaXplLmhlaWdodFxyXG4gICAgICAgIGNvbnN0IHZpZXdSYXRpbyA9IHZpZXdTaXplLndpZHRoIC8gdmlld1NpemUuaGVpZ2h0XHJcbiAgICAgICAgaWYgKGRlc2lnblJhdGlvIDwgMSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCctLeerluWxj+a4uOaIjycpXHJcbiAgICAgICAgICAgIGlmICh2aWV3UmF0aW8gPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1JhdGlvID4gZGVzaWduUmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXRCb3RoKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rml0V2lkdGgoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0Rml0Qm90aCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCctLeWuveWxj+a4uOaIjycpXHJcbiAgICAgICAgICAgIGlmICh2aWV3UmF0aW8gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmlld1JhdGlvIDwgZGVzaWduUmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXRCb3RoKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Rml0SGVpZ2h0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldEZpdEJvdGgoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGVhcnRJbmNyZWFzZSgpIHtcclxuICAgICAgICAvLyDkvZPlipvlsI/kuo4155qE5pe25YCZ6ZyA6KaB6KGl5YWFXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0cyA8IDUpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKG5vdyAtIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxhc3RIZWFydFVwZGF0ZVRpbWUpIC8gMTAwMClcclxuICAgICAgICAgICAgY29uc3QgaGVhcnRzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gRGF0YU1hbmFnZXIuaW5zdGFuY2UuaGVhcnRSZWZyZXNoVGltZSlcclxuICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0cyArIGhlYXJ0cyA+PSA1KSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5oZWFydHMgPSA1XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sYXN0SGVhcnRSZWZyZXNoVGltZSA9IDBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0cyArPSBoZWFydHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zYXZlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=