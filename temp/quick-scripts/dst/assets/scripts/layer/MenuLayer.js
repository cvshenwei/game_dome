
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/MenuLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL01lbnVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnQ0FBd0Q7QUFDeEQsc0RBQXFEO0FBQ3JELHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFDakQsK0NBQTBDO0FBQzFDLGlEQUFnRDtBQUNoRCwwQ0FBcUM7QUFDckMsc0RBQWlEO0FBRWpELG1EQUF1RDtBQUN2RCxrRUFBNkQ7QUFFdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUEyRkM7UUF6RkcsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixhQUFPLEdBQVksSUFBSSxDQUFBO1FBQ3ZCLGdCQUFVLEdBQVksSUFBSSxDQUFBO1FBRTFCLGdCQUFVLEdBQWEsSUFBSSxDQUFBOztJQXFGL0IsQ0FBQztJQW5GRywwQkFBTSxHQUFOO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUE7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUs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QUFDO0NBM0ZELEFBMkZDLENBM0ZzQyxzQkFBWSxHQTJGbEQ7a0JBM0ZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSAnLi8uLi9TdGF0aWNJbnN0YW5jZSc7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgSGVhZGVyRGlhbG9nIGZyb20gXCIuL0hlYWRlckRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBpMThuTWFuYWdlIH0gZnJvbSBcIi4uL2kxOG4vaTE4bk1hbmFnZVwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFBvb2xNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Bvb2xNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHRvWFkgfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQWRkSGVhcnREaWFsb2dNb2RlbCB9IGZyb20gXCIuL0FkZEhlYXJ0RGlhbG9nXCI7XHJcbmltcG9ydCBFZmZlY3RGbHlNYW5hZ2VyIGZyb20gXCIuLi9mcmFtZXdvcmsvRWZmZWN0Rmx5TWFuYWdlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVMYXllciBleHRlbmRzIEhlYWRlckRpYWxvZyB7XHJcblxyXG4gICAgYnRuU3RhcnQ6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBidG5SYW5rOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuU2V0dGluZzogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBsZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKClcclxuICAgICAgICB0aGlzLmJ0blN0YXJ0ID0gY2MuZmluZCgnYnRuX3N0YXJ0JywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuUmFuayA9IGNjLmZpbmQoJ3JpZ2h0Tm9kZS9idG5fcmFuaycsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0blNldHRpbmcgPSBjYy5maW5kKCdsZWZ0Tm9kZS9idG5fc2V0dGluZycsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLmJ0blN0YXJ0Lm9uKCdjbGljaycsIHRoaXMub25TdGFydENsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxldmVsTGFiZWw9Y2MuZmluZCgnbGFiZWwnLCB0aGlzLmJ0blN0YXJ0KS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYnRuUmFuay5vbignY2xpY2snLCB0aGlzLm9uUmFua0NsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuU2V0dGluZy5vbignY2xpY2snLCB0aGlzLm9uU2V0dGluZ0NsaWNrLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGV2ZWxMYWJlbC5zdHJpbmc9aTE4bk1hbmFnZS5fZ2V0TGFiZWwoJ3R4dF9zaG93bGV2ZWwnLFtEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWwrXCJcIl0pO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmJ0blN0YXJ0Lm9mZignY2xpY2snLCB0aGlzLm9uU3RhcnRDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmJ0blJhbmsub2ZmKCdjbGljaycsIHRoaXMub25SYW5rQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5idG5TZXR0aW5nLm9mZignY2xpY2snLCB0aGlzLm9uU2V0dGluZ0NsaWNrLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMucmVuZG9ySGVhcnQoKVxyXG4gICAgICAgIHRoaXMucmVuZG9yU3RhcigpXHJcbiAgICAgICAgdGhpcy5yZW5kb3JIZWFydFRpbWVyKClcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7IH1cclxuXHJcbiAgICBhc3luYyBvblN0YXJ0Q2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0cyA8PSAwKSB7XHJcbiAgICAgICAgICAgLy8gVG9hc3RNYW5hZ2VyLmluc3RhbmNlLnNob3coJ+e6ouW/g+W3sueUqOWujCwg6K+35YWI6KGl5YWF57qi5b+DJywgeyBncmF2aXR5OiAnVE9QJywgYmdfY29sb3I6IGNjLmNvbG9yKDIyNiwgNjksIDEwOSwgMjU1KSB9KVxyXG4gICAgICAgICAgICAvL3JldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbD4xKXtcclxuICAgICAgICAgIC8vICBhd2FpdCBTdGF0aWNJbnN0YW5jZS5mYWRlTWFuYWdlci5mYWRlSW4oKVxyXG4gICAgICAgICAgIC8vIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLk1FTlUsIGZhbHNlKVxyXG4gICAgICAgLy8gICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLlNUQVJUKVxyXG4gICAgICAvLyAgfWVsc2V7XHJcbiAgICAgICAgICAgIGF3YWl0IFN0YXRpY0luc3RhbmNlLmZhZGVNYW5hZ2VyLmZhZGVJbigpXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0cyAtPSAxXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmUoKVxyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VLCBmYWxzZSlcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUFJTix0cnVlKTtcclxuICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIub25HYW1lU3RhcnQoKTtcclxuICAgICAgLy8gIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvbkhlYXJ0RGlhbG9nQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuQURESEVBUlQsdHJ1ZSxuZXcgQWRkSGVhcnREaWFsb2dNb2RlbChcclxuICAgICAgICAgICAgKG51bSk9PnRoaXMub25BZGRIZWFydENhbGxCYWNrKG51bSlcclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBvbkFkZEhlYXJ0Q2FsbEJhY2sobnVtOm51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkFkZEhlYXJ0Q2FsbEJhY2tcIixudW0pO1xyXG4gICAgICAgIGNvbnN0IGhlYXJ0ID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnSGVhcnQnLCAgdGhpcy5ub2RlLCBjYy52MygwLCAwKSlcclxuICAgICAgICBoZWFydC5zY2FsZT0xLjU7XHJcbiAgICAgICAgRWZmZWN0Rmx5TWFuYWdlci5JbnN0YW5jZS5qdW1wT3V0QW5kRmx5KHRoaXMubm9kZSxoZWFydCx0aGlzLmJhckhlYXJ0LmdldENoaWxkQnlOYW1lKCdudW1zJyksKCk9PntcclxuICAgICAgICAgICAgaGVhcnQucmVtb3ZlRnJvbVBhcmVudCgpXHJcbiAgICAgICAgICAgIHRoaXMucmVuZG9ySGVhcnQoKTtcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG4gICAgb25SYW5rQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAvLyBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VLCBmYWxzZSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5SQU5LLHRydWUsQ29uc3RhbnRzLlJhbmtUeXBlLldFRUspXHJcbiAgICB9XHJcblxyXG4gICAgb25TZXR0aW5nQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAvLyBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5NRU5VLCBmYWxzZSlcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5TRVRUSU5HLHRydWUsQ29uc3RhbnRzLkdBTUVfU0NFTkNFLkhPTUUpXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==