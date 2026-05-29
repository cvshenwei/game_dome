
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/HeaderDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc13bpmF9ZNsaBcCtovZrdL', 'HeaderDialog');
// scripts/layer/HeaderDialog.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("../Enum");
var Utils_1 = require("../Utils");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var SdkManager_1 = require("../manager/SdkManager");
var BaseDialog_1 = require("./BaseDialog");
var StaticInstance_1 = require("../StaticInstance");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HeaderDialog = /** @class */ (function (_super) {
    __extends(HeaderDialog, _super);
    function HeaderDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.barHeart = null;
        _this.barStar = null;
        _this.timerHeart = null;
        return _this;
    }
    HeaderDialog.prototype.onLoad = function () {
        this.barHeart = cc.find('bar/heart', this.node);
        this.barStar = cc.find('bar/star', this.node);
        this.timerHeart = cc.find('timer', this.barHeart);
    };
    HeaderDialog.prototype.rendorHeart = function () {
        var _this = this;
        if (!this.barHeart)
            return;
        var num = this.barHeart.getChildByName('nums');
        var btn = this.barHeart.getChildByName('btn_add');
        if (num)
            num.getComponent(cc.Label).string = "" + DataManager_1.default.instance.hearts;
        if (btn && DataManager_1.default.instance.hearts > 0) {
            btn.active = false;
        }
        else {
            btn.active = true;
        }
        if (btn && !btn.hasEventListener('click')) {
            btn.on('click', function () {
                _this.onHeartDialogClick();
            });
        }
    };
    HeaderDialog.prototype.rendorStar = function () {
        if (!this.barStar)
            return;
        var num = this.barStar.getChildByName('nums');
        if (num) {
            num.getComponent(cc.Label).string = "" + DataManager_1.default.instance.collectStarCount;
        }
    };
    HeaderDialog.prototype.onHeartDialogClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ADDHEART);
    };
    HeaderDialog.prototype.getRewardByVideo = function (type) {
        var _this = this;
        if (type === void 0) { type = 'hearts'; }
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        SdkManager_1.default.instance.showVideoAd(function (msg) {
            if (!SdkManager_1.default.instance.getPlatform()) {
                // ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(102, 202, 28, 255) })
            }
            if (type == 'hearts') {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.COLLECT);
                DataManager_1.default.instance.hearts += DataManager_1.default.instance.heartCollectByVideo;
                DataManager_1.default.instance.save();
            }
            else {
                AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.COLLECT);
                DataManager_1.default.instance.collectStarCount += DataManager_1.default.instance.powerCollectByVideo;
                DataManager_1.default.instance.save();
                _this.rendorStar();
            }
        }, function (msg) {
            //ToastManager.instance.show(msg, { gravity: 'BOTTOM', bg_color: cc.color(226, 69, 109, 255) })
        });
    };
    HeaderDialog.prototype.rendorHeartTimer = function () {
        var _this = this;
        if (this.barHeart) {
            this.barHeart.getChildByName('nums').x = 0;
        }
        if (!this.timerHeart)
            return;
        this.unscheduleAllCallbacks();
        var isSchedule = true;
        if (DataManager_1.default.instance.hearts >= 5) {
            isSchedule = false;
            this.timerHeart.active = false;
        }
        if (DataManager_1.default.instance.lastHeartRefreshTime > 0) {
            isSchedule = true;
        }
        if (isSchedule) {
            var time_1 = DataManager_1.default.instance.heartRefreshTime - DataManager_1.default.instance.lastHeartRefreshTime;
            this.timerHeart.getComponent(cc.Label).string = Utils_1.formatSeconds(time_1, 'i:s');
            if (this.barHeart) {
                this.barHeart.getChildByName('nums').x = -30;
            }
            var callback_1 = function () {
                time_1 -= 1;
                if (time_1 <= 0) {
                    DataManager_1.default.instance.hearts += 1;
                    _this.rendorHeart();
                    if (DataManager_1.default.instance.hearts >= 5) {
                        _this.unschedule(callback_1);
                        _this.timerHeart.getComponent(cc.Label).string = '';
                        DataManager_1.default.instance.lastHeartRefreshTime = 0;
                    }
                    else {
                        time_1 = DataManager_1.default.instance.heartRefreshTime;
                        DataManager_1.default.instance.lastHeartRefreshTime = 0;
                        _this.timerHeart.getComponent(cc.Label).string = Utils_1.formatSeconds(time_1, 'i:s');
                    }
                }
                else {
                    _this.timerHeart.getComponent(cc.Label).string = Utils_1.formatSeconds(time_1, 'i:s');
                    DataManager_1.default.instance.lastHeartRefreshTime = DataManager_1.default.instance.heartRefreshTime - time_1;
                }
                DataManager_1.default.instance.lastHeartUpdateTime = new Date().getTime();
                DataManager_1.default.instance.save();
            };
            this.schedule(callback_1, 1);
        }
    };
    HeaderDialog = __decorate([
        ccclass
    ], HeaderDialog);
    return HeaderDialog;
}(BaseDialog_1.default));
exports.default = HeaderDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0hlYWRlckRpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsZ0NBQXdEO0FBQ3hELGtDQUF5QztBQUN6Qyx3REFBbUQ7QUFDbkQsc0RBQWlEO0FBQ2pELG9EQUErQztBQUUvQywyQ0FBc0M7QUFDdEMsb0RBQW1EO0FBRTdDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFVO0lBQXBEO1FBQUEscUVBNEdDO1FBMUdHLGNBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsYUFBTyxHQUFZLElBQUksQ0FBQTtRQUN2QixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUF3Ry9CLENBQUM7SUF0R0csNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFNO1FBQzFCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELElB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O3dCQUNsRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUE7cUJBQ2hEO3lCQUFNO3dCQUNILE1BQUksR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQTt3QkFDNUMscUJBQVcsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFBO3dCQUM3QyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLHFCQUFhLENBQUMsTUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO3FCQUM3RTtpQkFDSjtxQkFBTTtvQkFDSCxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLHFCQUFhLENBQUMsTUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO29CQUMxRSxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxNQUFJLENBQUE7aUJBQzNGO2dCQUNELHFCQUFXLENBQUMsUUFBUSxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQy9ELHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1lBQy9CLENBQUMsQ0FBQTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzdCO0lBQ0wsQ0FBQztJQTNHZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTRHaEM7SUFBRCxtQkFBQztDQTVHRCxBQTRHQyxDQTVHeUMsb0JBQVUsR0E0R25EO2tCQTVHb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgY2Fyb2xzYWlsXHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCB7IGZvcm1hdFNlY29uZHMgfSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IERhdGFNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL0RhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCBTZGtNYW5hZ2VyIGZyb20gXCIuLi9tYW5hZ2VyL1Nka01hbmFnZXJcIjtcclxuaW1wb3J0IFRvYXN0TWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Ub2FzdE1hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSBcIi4vQmFzZURpYWxvZ1wiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gXCIuLi9TdGF0aWNJbnN0YW5jZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckRpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xyXG5cclxuICAgIGJhckhlYXJ0OiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgYmFyU3RhcjogY2MuTm9kZSA9IG51bGxcclxuICAgIHRpbWVySGVhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJhckhlYXJ0ID0gY2MuZmluZCgnYmFyL2hlYXJ0JywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYmFyU3RhciA9IGNjLmZpbmQoJ2Jhci9zdGFyJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMudGltZXJIZWFydCA9IGNjLmZpbmQoJ3RpbWVyJywgdGhpcy5iYXJIZWFydClcclxuICAgIH1cclxuXHJcbiAgICByZW5kb3JIZWFydCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmFySGVhcnQpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IG51bSA9IHRoaXMuYmFySGVhcnQuZ2V0Q2hpbGRCeU5hbWUoJ251bXMnKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMuYmFySGVhcnQuZ2V0Q2hpbGRCeU5hbWUoJ2J0bl9hZGQnKVxyXG4gICAgICAgIGlmIChudW0pIG51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGAke0RhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0c31gO1xyXG4gICAgICAgIGlmKGJ0biYmRGF0YU1hbmFnZXIuaW5zdGFuY2UuaGVhcnRzPjApe1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG4gJiYgIWJ0bi5oYXNFdmVudExpc3RlbmVyKCdjbGljaycpKSB7XHJcbiAgICAgICAgICAgIGJ0bi5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSGVhcnREaWFsb2dDbGljaygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRvclN0YXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJhclN0YXIpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IG51bSA9IHRoaXMuYmFyU3Rhci5nZXRDaGlsZEJ5TmFtZSgnbnVtcycpXHJcbiAgICAgICAgaWYgKG51bSkge1xyXG4gICAgICAgICAgICBudW0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgJHtEYXRhTWFuYWdlci5pbnN0YW5jZS5jb2xsZWN0U3RhckNvdW50fWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGVhcnREaWFsb2dDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5BRERIRUFSVCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmV3YXJkQnlWaWRlbyh0eXBlOiBzdHJpbmcgPSAnaGVhcnRzJykge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMSUNLKVxyXG4gICAgICAgIFNka01hbmFnZXIuaW5zdGFuY2Uuc2hvd1ZpZGVvQWQoKG1zZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghU2RrTWFuYWdlci5pbnN0YW5jZS5nZXRQbGF0Zm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgIC8vIFRvYXN0TWFuYWdlci5pbnN0YW5jZS5zaG93KG1zZywgeyBncmF2aXR5OiAnQk9UVE9NJywgYmdfY29sb3I6IGNjLmNvbG9yKDEwMiwgMjAyLCAyOCwgMjU1KSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdoZWFydHMnKSB7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DT0xMRUNUKVxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaGVhcnRzICs9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0Q29sbGVjdEJ5VmlkZW9cclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNPTExFQ1QpXHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5jb2xsZWN0U3RhckNvdW50ICs9IERhdGFNYW5hZ2VyLmluc3RhbmNlLnBvd2VyQ29sbGVjdEJ5VmlkZW9cclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kb3JTdGFyKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIChtc2c6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAvL1RvYXN0TWFuYWdlci5pbnN0YW5jZS5zaG93KG1zZywgeyBncmF2aXR5OiAnQk9UVE9NJywgYmdfY29sb3I6IGNjLmNvbG9yKDIyNiwgNjksIDEwOSwgMjU1KSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZG9ySGVhcnRUaW1lcigpIHtcclxuICAgICAgICBpZih0aGlzLmJhckhlYXJ0KXtcclxuICAgICAgICAgICAgdGhpcy5iYXJIZWFydC5nZXRDaGlsZEJ5TmFtZSgnbnVtcycpLng9MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0aGlzLnRpbWVySGVhcnQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgIGxldCBpc1NjaGVkdWxlOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5oZWFydHMgPj0gNSkge1xyXG4gICAgICAgICAgICBpc1NjaGVkdWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJIZWFydC5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5sYXN0SGVhcnRSZWZyZXNoVGltZSA+IDApIHtcclxuICAgICAgICAgICAgaXNTY2hlZHVsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NjaGVkdWxlKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuaGVhcnRSZWZyZXNoVGltZS0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGFzdEhlYXJ0UmVmcmVzaFRpbWVcclxuICAgICAgICAgICAgdGhpcy50aW1lckhlYXJ0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0U2Vjb25kcyh0aW1lLCAnaTpzJyk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYmFySGVhcnQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYXJIZWFydC5nZXRDaGlsZEJ5TmFtZSgnbnVtcycpLng9LTMwO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lIC09IDFcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5oZWFydHMgKz0gMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZG9ySGVhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5oZWFydHMgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXJIZWFydC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxhc3RIZWFydFJlZnJlc2hUaW1lID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5oZWFydFJlZnJlc2hUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxhc3RIZWFydFJlZnJlc2hUaW1lID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVySGVhcnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBmb3JtYXRTZWNvbmRzKHRpbWUsICdpOnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lckhlYXJ0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZm9ybWF0U2Vjb25kcyh0aW1lLCAnaTpzJylcclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sYXN0SGVhcnRSZWZyZXNoVGltZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmhlYXJ0UmVmcmVzaFRpbWUgLSB0aW1lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sYXN0SGVhcnRVcGRhdGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNhdmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoY2FsbGJhY2ssIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==