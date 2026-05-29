"use strict";
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