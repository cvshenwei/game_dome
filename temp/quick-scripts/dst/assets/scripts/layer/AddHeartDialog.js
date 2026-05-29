
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/AddHeartDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0FkZEhlYXJ0RGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnQ0FBd0Q7QUFDeEQsb0RBQW1EO0FBQ25ELHdEQUFtRDtBQUNuRCxvREFBK0M7QUFDL0Msc0RBQWlEO0FBR2pELCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUNJLDZCQUNXLFVBQW9CO1FBQXBCLGVBQVUsR0FBVixVQUFVLENBQVU7SUFDM0IsQ0FBQztJQUNULDBCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxrREFBbUI7QUFPaEM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFnRUM7UUEvREcsV0FBSyxHQUFZLElBQUksQ0FBQTtRQUNyQixlQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsbUJBQWEsR0FBVSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFMUIsYUFBTyxHQUFRLENBQUMsQ0FBQzs7SUF3RHJCLENBQUM7SUF0REcsK0JBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENB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QyxzQkFBWSxHQWdFdkQ7a0JBaEVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tICcuLi9TdGF0aWNJbnN0YW5jZSc7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBCYXNlRGlhbG9nIGZyb20gXCIuL0Jhc2VEaWFsb2dcIjtcclxuaW1wb3J0IHsgSXRlbURlc2MgfSBmcm9tIFwiLi4vZGF0YWNlbnRlci9JdGVtRGF0YVwiO1xyXG5pbXBvcnQgSGVhZGVyRGlhbG9nIGZyb20gXCIuL0hlYWRlckRpYWxvZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkSGVhcnREaWFsb2dNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgb25DYWxsQmFjazogRnVuY3Rpb25cclxuICAgICkgeyB9XHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZEhlYXJ0RGlhbG9nIGV4dGVuZHMgSGVhZGVyRGlhbG9nIHtcclxuICAgIHBhbmVsOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuUmV3YXJkOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYnRuQ2xvc2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaGVhcnROdW1MYWJlbDpjYy5MYWJlbD1udWxsO1xyXG5cclxuICAgIHByaXZhdGUgbV9jYWxsYmFjayA9IG51bGw7XHJcblxyXG4gICAgYWRkTnVtczpudW1iZXI9MTtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbCA9IGNjLmZpbmQoJ3N0eWxlL3BhbmVsJywgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLmJ0blJld2FyZCA9IGNjLmZpbmQoJ2J0bl9yZXdhcmQnLCB0aGlzLnBhbmVsKVxyXG4gICAgICAgIHRoaXMuYnRuUmV3YXJkLm9uKCdjbGljaycsIHRoaXMub25SZXdhcmRDbGljaywgdGhpcylcclxuICAgICAgICB0aGlzLmhlYXJ0TnVtTGFiZWwgPSBjYy5maW5kKCdpY29uTm9kZS9udW1zJywgdGhpcy5wYW5lbCkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmJ0bkNsb3NlID0gY2MuZmluZCgnYnRuX2Nsb3NlJywgdGhpcy5wYW5lbCk7XHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vbignY2xpY2snLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50aW1lckhlYXJ0ID0gY2MuZmluZCgnaWNvbk5vZGUvdGltZUxhYmVsJywgdGhpcy5wYW5lbCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bihwYXJhbXM6QWRkSGVhcnREaWFsb2dNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhcnROdW1MYWJlbC5zdHJpbmcgPSBgJHtEYXRhTWFuYWdlci5pbnN0YW5jZS5oZWFydHN9YDtcclxuICAgICAgICBpZihwYXJhbXMpe1xyXG4gICAgICAgICAgICB0aGlzLm1fY2FsbGJhY2s9cGFyYW1zLm9uQ2FsbEJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmJ0blJld2FyZC5vZmYoJ2NsaWNrJywgdGhpcy5vblJld2FyZENsaWNrLCB0aGlzKVxyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub2ZmKCdjbGljaycsIHRoaXMub25DbG9zZUNsaWNrLCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudG9nZ2xlQmFubmVyQWQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kb3JIZWFydFRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2UudG9nZ2xlQmFubmVyQWQoZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZUNsaWNrKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkFEREhFQVJULCBmYWxzZSlcclxuICAgICAgICB0aGlzLm1fY2FsbGJhY2sgJiYgdGhpcy5tX2NhbGxiYWNrKDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmV3YXJkQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS5zaG93VmlkZW9BZChhc3luYyAobXNnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ09MTEVDVClcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaGVhcnRzICs9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0Q29sbGVjdEJ5VmlkZW9cclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2F2ZSgpO1xyXG4gICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5BRERIRUFSVCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1fY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvblJld2FyZENsaWNrXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tX2NhbGxiYWNrKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKG1zZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgLy8gVG9hc3RNYW5hZ2VyLmluc3RhbmNlLnNob3cobXNnLCB7IGdyYXZpdHk6ICdCT1RUT00nLCBiZ19jb2xvcjogY2MuY29sb3IoMjI2LCA2OSwgMTA5LCAyNTUpIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=