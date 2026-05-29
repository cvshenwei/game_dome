
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/MainLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '995d75Ra29EXY7A+cLQ/Mrd', 'MainLayer');
// scripts/layer/MainLayer.ts

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
var Constants_1 = require("../Constants");
var ItemData_1 = require("../datacenter/ItemData");
var Enum_1 = require("../Enum");
var CommonTool_1 = require("../framework/utils/CommonTool");
var i18nManage_1 = require("../i18n/i18nManage");
var AudioManager_1 = require("../manager/AudioManager");
var DataManager_1 = require("../manager/DataManager");
var PoolManager_1 = require("../manager/PoolManager");
var StaticInstance_1 = require("../StaticInstance");
var Utils_1 = require("../Utils");
var BaseDialog_1 = require("./BaseDialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainLayer = /** @class */ (function (_super) {
    __extends(MainLayer, _super);
    function MainLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnPause = null;
        _this.levelLabel = null;
        _this.timerLabel = null;
        _this.timerIndex = -1;
        _this.combo = null;
        _this.comboTip = null;
        _this.comboProgress = null;
        _this.comboTime = 0;
        _this.comboTimeCurrent = 0;
        _this.starCollect = null;
        _this.starIcon = null;
        _this.tipsNode = null;
        _this.guideMaskNode = null;
        _this.guideNode = null;
        _this.bottomNode = null;
        _this.headerNode = null;
        //检测道具引导
        _this.m_curGuideIdx = -1;
        //冰冻定时器
        _this.iceScheduler = null;
        _this.iceTime = 15;
        return _this;
    }
    MainLayer.prototype.onLoad = function () {
        var _this = this;
        this.btnPause = cc.find('header/btn_pause', this.node);
        this.btnPause.on('click', this.onPauseClick, this);
        this.levelLabel = cc.find('header/level', this.node);
        var timerNum = cc.find('header/timer/num', this.node);
        this.headerNode = cc.find('header', this.node);
        this.bottomNode = cc.find('bottom', this.node);
        this.timerLabel = timerNum.getComponent(cc.Label);
        var _loop_1 = function (index) {
            var skill = this_1.bottomNode.getChildByName('skill' + index);
            var effNode = skill.getChildByName("effSprite");
            effNode.active = false;
            skill.on('click', function () {
                _this.onSkillClick(index);
            });
        };
        var this_1 = this;
        for (var index = 0; index < 4; index++) {
            _loop_1(index);
        }
        this.combo = cc.find('combo', this.bottomNode);
        var ctip = this.combo.getChildByName('tip');
        this.comboTip = ctip.getComponent(cc.Label);
        var cprogress = this.combo.getChildByName('progress');
        this.comboProgress = cprogress.getComponent(cc.ProgressBar);
        this.starIcon = cc.find('header/star/icon', this.node);
        this.starCollect = cc.find('header/star/num', this.node);
        this.tipsNode = cc.find('tipsSprite', this.node);
        this.tipsNode.getChildByName("btn_close").on('click', this.onCloseTipsClick, this);
        this.tipsNode.active = false;
        this.guideMaskNode = cc.find('guideMaskNode', this.node);
        this.guideMaskNode.active = false;
        this.guideNode = cc.find('guideSprite', this.node);
        this.guideNode.active = false;
        console.log("winSizePixels.height", cc.winSize.height);
        var winSizePixels = cc.winSize;
        var num = winSizePixels.height / winSizePixels.width;
        if (!CommonTool_1.default.isFullScreen()) {
            //非全面屏手机做适配
            //适配分辨率
            this.headerNode.y = this.headerNode.y - 50;
            //15:9
            if (num < 1.7) {
                this.bottomNode.y = this.bottomNode.y + 80;
                this.tipsNode.y = this.tipsNode.y + 30;
            }
            else {
                this.bottomNode.y = this.bottomNode.y + 60;
                this.tipsNode.y = this.tipsNode.y + 30;
            }
        }
        else {
            if (num > 2.2) {
                /// this.tabNode.y=this.tabNode.y-10;
            }
            else if (num < 2.1 && num > 2) {
                // this.tabNode.y=this.tabNode.y+40;
            }
            else {
                // this.tabNode.y=this.tabNode.y+80;
            }
        }
    };
    MainLayer.prototype.onShown = function () {
        if (DataManager_1.default.instance.levelData.level == 1) {
            this.bottomNode.active = false;
            this.headerNode.active = false;
        }
        else {
            this.bottomNode.active = true;
            this.headerNode.active = true;
            this.checkItemUnlock();
            this.checkItemGuide();
            this.updateItem();
        }
    };
    MainLayer.prototype.onHide = function () {
        this.unscheduleAllCallbacks();
        this.hideTips();
        this.hideItemGuide(false);
    };
    //掉落飞的效果
    MainLayer.prototype.showDropEffect = function (dropInfo) {
        var _this = this;
        var flyTarget = this.bottomNode.getChildByName('skill' + dropInfo.index);
        var _loop_2 = function (index) {
            var drop = cc.instantiate(dropInfo.item);
            drop.parent = this_2.node;
            drop.position = cc.v3(dropInfo.pos);
            drop.setContentSize(80, 80);
            drop.opacity = 255;
            this_2.fly(index, drop, flyTarget, function () {
                drop.removeFromParent();
                DataManager_1.default.instance.itemData.unlockItemData(dropInfo.index);
                _this.updateItem();
                var action = cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
                    _this.checkItemGuide();
                }));
                cc.tween(_this.node).then(action).start();
            });
        };
        var this_2 = this;
        for (var index = 0; index < 3; index++) {
            _loop_2(index);
        }
    };
    //飞的效果
    MainLayer.prototype.fly = function (flyIdx, dropNode, flyTarget, callBack) {
        var targetWPos = flyTarget.convertToWorldSpaceAR(cc.v2(0, 0));
        var targetNPos = dropNode.parent.convertToNodeSpaceAR(targetWPos);
        dropNode.stopAllActions();
        var action = cc.sequence(cc.delayTime(0.1 * flyIdx), cc.spawn(cc.sequence(cc.scaleTo(0.2, 1), cc.scaleTo(0.2, 0.5)), cc.moveTo(0.5, targetNPos).easing(cc.easeIn(1))), cc.fadeOut(0.1), cc.callFunc(callBack));
        cc.tween(dropNode).then(action).start();
    };
    //检测道具解锁
    MainLayer.prototype.checkItemUnlock = function () {
        var _this = this;
        var data = DataManager_1.default.instance.itemData.getItemData();
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (!element.isUnlock && DataManager_1.default.instance.levelData.level == ItemData_1.ItemUnlockLevel[index]) {
                console.log("解锁新道具", element, ItemData_1.ItemUnlockLevel[index]);
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ITEMUNLOCK, true, {
                    index: index,
                    callback: function (dropInfo) {
                        console.log("效果参数：", dropInfo);
                        _this.showDropEffect(dropInfo);
                    }
                });
                break;
            }
        }
    };
    MainLayer.prototype.checkItemGuide = function () {
        var data = DataManager_1.default.instance.itemData.getItemData();
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            if (element.isUnlock && !element.isGuide && DataManager_1.default.instance.levelData.level == ItemData_1.ItemUnlockLevel[index]) {
                this.m_curGuideIdx = index;
                this.showItemGuide();
                break;
            }
        }
    };
    //显示道具引导
    MainLayer.prototype.showItemGuide = function () {
        this.guideMaskNode.active = true;
        this.guideNode.active = true;
        this.tipsNode.active = true;
        this.tipsNode.getChildByName("Label").getComponent(cc.Label).string = ItemData_1.ItemDesc[this.m_curGuideIdx];
        this.tipsNode.getChildByName("btn_close").active = false;
        for (var i = 0; i < 4; i++) {
            var skill = this.bottomNode.getChildByName('skill' + i);
            if (i === this.m_curGuideIdx) {
                skill.zIndex = this.guideMaskNode.zIndex + 1;
                var effNode = skill.getChildByName("effSprite");
                effNode.active = true;
                effNode.stopAllActions();
                var act = cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 1.08), cc.scaleTo(0.3, 1), cc.delayTime(0.2)));
                cc.tween(effNode).then(act).start();
                var y = -426;
                var x = skill.position.x;
                console.log("箭头位置：", x, y);
                this.guideNode.setPosition(x, y);
                this.guideNode.stopAllActions();
                var act2 = cc.repeatForever(cc.sequence(cc.moveTo(0.3, cc.v2(x, y)), cc.moveTo(0.3, cc.v2(x, y + 50)), cc.delayTime(0.2)));
                cc.tween(this.guideNode).then(act2).start();
            }
            else {
                skill.zIndex = this.guideMaskNode.zIndex - 1;
            }
        }
    };
    //隐藏道具引导
    MainLayer.prototype.hideItemGuide = function (bGuide) {
        this.guideMaskNode.active = false;
        this.guideNode.active = false;
        this.guideNode.stopAllActions();
        this.tipsNode.active = false;
        this.tipsNode.getChildByName("btn_close").active = true;
        for (var i = 0; i < 4; i++) {
            var skill = this.bottomNode.getChildByName('skill' + i);
            skill.zIndex = this.guideMaskNode.zIndex + 1;
            var effNode = skill.getChildByName("effSprite");
            effNode.active = false;
            effNode.stopAllActions();
        }
        if (bGuide && this.m_curGuideIdx != -1) {
            DataManager_1.default.instance.itemData.guideItemData(this.m_curGuideIdx);
            this.m_curGuideIdx = -1;
        }
    };
    //显示tips
    MainLayer.prototype.showTips = function () {
        var s = [];
        var order = 0;
        var data = DataManager_1.default.instance.itemData.getItemData();
        for (var index = 0; index < data.length; index++) {
            var e = data[index];
            if (e.isUnlock && index !== 2) {
                if (DataManager_1.default.instance.levelData.level == ItemData_1.ItemUnlockLevel[index]) {
                    s.unshift({
                        order: 999,
                        index: index,
                        cnt: e.itemNum
                    });
                }
                else {
                    s.push({
                        order: order++,
                        index: index,
                        cnt: e.itemNum
                    });
                }
            }
        }
        if (s.length <= 0) {
            return;
        }
        s.sort(function (a, b) {
            return b.order - a.order;
        });
        s.sort(function (a, b) {
            return b.cnt - a.cnt;
        });
        console.log(s);
        var temp = s.filter(function (e) {
            if (e.cnt <= 0) {
                return e;
            }
        });
        console.log(temp);
        var tipSkill = null;
        if (s.length === temp.length) {
            temp = Utils_1.shuffle(s);
            tipSkill = temp[0];
        }
        else {
            tipSkill = s[0];
        }
        console.log(tipSkill);
        this.tipsNode.active = true;
        this.tipsNode.stopAllActions();
        this.tipsNode.getChildByName("Label").getComponent(cc.Label).string = ItemData_1.ItemDesc[tipSkill.index];
        var skill = this.bottomNode.getChildByName('skill' + tipSkill.index);
        var effNode = skill.getChildByName("effSprite");
        effNode.active = true;
        effNode.stopAllActions();
        var act = cc.repeatForever(cc.sequence(cc.scaleTo(0.3, 1.08), cc.scaleTo(0.3, 1), cc.delayTime(0.2)));
        cc.tween(effNode).then(act).start();
    };
    //隐藏tips
    MainLayer.prototype.hideTips = function () {
        this.tipsNode.active = false;
        this.tipsNode.stopAllActions();
        for (var index = 0; index < 4; index++) {
            var skill = this.bottomNode.getChildByName('skill' + index);
            var effNode = skill.getChildByName("effSprite");
            effNode.active = false;
            effNode.stopAllActions();
        }
    };
    //更新技能图标状态
    MainLayer.prototype.updateItem = function () {
        var data = DataManager_1.default.instance.itemData.getItemData();
        for (var index = 0; index < data.length; index++) {
            var e = data[index];
            var skill = this.bottomNode.getChildByName('skill' + index);
            skill.getChildByName("icon").active = e.isUnlock;
            skill.getChildByName("lock").active = !e.isUnlock;
            if (!e.isUnlock) {
                skill.getChildByName("labelBg").active = false;
                skill.getChildByName("label").getComponent(cc.Label).string = "Lv." + ItemData_1.ItemUnlockLevel[index];
            }
            else {
                skill.getChildByName("labelBg").active = true;
                skill.getChildByName("label").getComponent(cc.Label).string = e.itemNum > 0 ? "" + e.itemNum : '+';
            }
        }
        ;
    };
    MainLayer.prototype.onDestroy = function () {
        this.btnPause.off('click', this.onPauseClick, this);
        this.tipsNode.getChildByName("btn_close").off('click', this.onCloseTipsClick, this);
        this.unscheduleAllCallbacks();
        this.hideTips();
    };
    MainLayer.prototype.onEnable = function () { };
    MainLayer.prototype.onDisable = function () { };
    MainLayer.prototype.rendorLevel = function () {
        this.levelLabel.getComponent(cc.Label).string = i18nManage_1.i18nManage._getLabel('txt_showlevel', [DataManager_1.default.instance.levelData.level + ""]);
        this.checkItemUnlock();
    };
    MainLayer.prototype.rendorStarCollect = function () {
        this.starCollect.getComponent(cc.Label).string = "" + DataManager_1.default.instance.levelData.currentStarScore;
    };
    MainLayer.prototype.onPauseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.setMainTimer(false);
        StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.SETTING, true, Constants_1.default.GAME_SCENCE.MAIN);
    };
    MainLayer.prototype.onTimerStart = function () {
        var _this = this;
        this.onTimerStop();
        this.timerLabel.string = Utils_1.formatSeconds("" + DataManager_1.default.instance.levelData.timer, 'i:s');
        this.timerLabel.schedule(function () {
            if (DataManager_1.default.instance.levelData.timer <= 1)
                _this.timerLabel.unscheduleAllCallbacks();
            if (DataManager_1.default.instance.isSchedule) {
                DataManager_1.default.instance.levelData.timer--;
                if (DataManager_1.default.instance.levelData.timer < 0)
                    DataManager_1.default.instance.levelData.timer = 0;
                _this.timerLabel.string = Utils_1.formatSeconds("" + DataManager_1.default.instance.levelData.timer, 'i:s');
                _this.onTimerSoundStart();
                if (DataManager_1.default.instance.levelData.timer <= 0) {
                    StaticInstance_1.StaticInstance.gameManager.onGameOver(false, Enum_1.ENUM_GAME_LOSE_TYPE.TIME);
                }
            }
            //检测道具提示
            if (DataManager_1.default.instance.isTip && DataManager_1.default.instance.levelData.level > 2) {
                DataManager_1.default.instance.tipTime--;
                if (DataManager_1.default.instance.tipTime <= 0) {
                    _this.showTips();
                    DataManager_1.default.instance.isTip = false;
                }
            }
        }, 1);
    };
    MainLayer.prototype.onTimerPause = function (time) {
        var _this = this;
        this.onTimerStop();
        this.iceTime = time;
        this.timerLabel.string = Utils_1.formatSeconds("" + DataManager_1.default.instance.levelData.timer, 'i:s');
        this.iceScheduler = function () {
            _this.iceTime--;
            if (_this.iceTime <= 0) {
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
                _this.stopIceCountDown();
                _this.onTimerStart();
            }
        };
        this.schedule(this.iceScheduler, 1);
    };
    MainLayer.prototype.stopIceCountDown = function () {
        if (this.iceScheduler) {
            this.unschedule(this.iceScheduler);
            this.iceScheduler = null;
        }
    };
    MainLayer.prototype.onTimerStop = function () {
        this.timerLabel.unscheduleAllCallbacks();
    };
    MainLayer.prototype.onTimerSoundStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(DataManager_1.default.instance.levelData.timer <= 10 && DataManager_1.default.instance.levelData.timer > 0 && this.timerIndex < 0)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.TIMER, true)];
                    case 1:
                        _a.timerIndex = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MainLayer.prototype.onTimerSoundStop = function () {
        AudioManager_1.default.instance.stopSound(this.timerIndex);
        this.timerIndex = -1;
    };
    MainLayer.prototype.onProgressStart = function (isInit) {
        var _this = this;
        if (isInit) {
            this.combo.opacity = 0;
            return;
        }
        this.combo.opacity = 255;
        DataManager_1.default.instance.levelData.combo += 1;
        // 收集星星
        var endPos = Utils_1.toXY(this.starIcon, StaticInstance_1.StaticInstance.gameManager.stage);
        DataManager_1.default.instance.starStartPosArr.forEach(function (startPos) {
            var star = PoolManager_1.default.instance.getNode('Star', StaticInstance_1.StaticInstance.gameManager.stage, cc.v3(startPos.x, startPos.y));
            var act = cc.spawn(cc.moveTo(0.5, cc.v2(endPos.x, endPos.y)), cc.scaleTo(0.5, 0.1));
            cc.tween(star).then(act).call(function () {
                star.removeFromParent();
                DataManager_1.default.instance.levelData.currentStarScore += DataManager_1.default.instance.levelData.combo;
                _this.rendorStarCollect();
            }).start();
        });
        DataManager_1.default.instance.starStartPosArr = [];
        // 连击
        this.comboTip.string = "Combox" + DataManager_1.default.instance.levelData.combo;
        this.comboTime = DataManager_1.default.instance.levelData.comboTimer / DataManager_1.default.instance.levelData.combo;
        this.comboTimeCurrent = this.comboTime;
    };
    MainLayer.prototype.onCloseTipsClick = function () {
        this.hideTips();
    };
    MainLayer.prototype.onSkillClick = function (index) {
        var _this = this;
        if (DataManager_1.default.instance.status == Enum_1.ENUM_GAME_STATUS.UNRUNING)
            return;
        var data = DataManager_1.default.instance.itemData.getItemData();
        if (!data[index].isUnlock) {
            return;
        }
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.setMainTimer(false);
        StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(false);
        if (data[index].itemNum <= 0) {
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ITEM, true, {
                index: index,
                callback: function () {
                    _this.updateItem();
                }
            });
            return;
        }
        var act = cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
            if (!StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE)) {
                StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
            }
        }));
        this.node.stopAllActions();
        cc.tween(this.node).then(act).start();
        // 触发技能
        switch (index) {
            case 0:
                {
                    StaticInstance_1.StaticInstance.gameManager.onSkillDelete();
                }
                break;
            case 1:
                {
                    StaticInstance_1.StaticInstance.gameManager.onSkillMagic();
                }
                break;
            case 2:
                {
                    StaticInstance_1.StaticInstance.gameManager.onSkillTime();
                }
                break;
            case 3:
                {
                    StaticInstance_1.StaticInstance.gameManager.onSkillShuffle();
                }
                break;
        }
        if (this.m_curGuideIdx != -1) {
            this.hideItemGuide(true);
        }
        else {
            DataManager_1.default.instance.itemData.useItemData(index);
        }
        this.onCloseTipsClick();
        this.updateItem();
    };
    MainLayer.prototype.update = function (dt) {
        if (this.comboTimeCurrent > 0) {
            this.comboTimeCurrent -= dt;
            this.comboProgress.progress = this.comboTimeCurrent / this.comboTime;
        }
        else {
            if (this.combo.opacity == 255) {
                this.comboTime = 0;
                this.comboTimeCurrent = 0;
                this.combo.opacity = 0;
                DataManager_1.default.instance.levelData.combo = 0;
            }
        }
    };
    MainLayer = __decorate([
        ccclass
    ], MainLayer);
    return MainLayer;
}(BaseDialog_1.default));
exports.default = MainLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL01haW5MYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwQ0FBcUM7QUFDckMsbURBQW1FO0FBQ25FLGdDQUErRjtBQUMvRiw0REFBdUQ7QUFDdkQsaURBQWdEO0FBQ2hELHdEQUFtRDtBQUNuRCxzREFBaUQ7QUFDakQsc0RBQWlEO0FBQ2pELG9EQUFtRDtBQUNuRCxrQ0FBd0Q7QUFDeEQsMkNBQXNDO0FBRWhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFVO0lBQWpEO1FBQUEscUVBOGhCQztRQTVoQkcsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixnQkFBVSxHQUFhLElBQUksQ0FBQTtRQUMzQixnQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFBO1FBQ3ZCLFdBQUssR0FBWSxJQUFJLENBQUE7UUFDckIsY0FBUSxHQUFhLElBQUksQ0FBQTtRQUN6QixtQkFBYSxHQUFtQixJQUFJLENBQUE7UUFDcEMsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixzQkFBZ0IsR0FBVyxDQUFDLENBQUE7UUFDNUIsaUJBQVcsR0FBWSxJQUFJLENBQUE7UUFDM0IsY0FBUSxHQUFZLElBQUksQ0FBQTtRQUN4QixjQUFRLEdBQVksSUFBSSxDQUFBO1FBQ3hCLG1CQUFhLEdBQVksSUFBSSxDQUFBO1FBQzdCLGVBQVMsR0FBWSxJQUFJLENBQUE7UUFDekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFDMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFtSjFCLFFBQVE7UUFDQSxtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBaU8zQixPQUFPO1FBQ0Msa0JB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QUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUE7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFDdEIscUJBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7YUFDM0M7U0FDSjtJQUNMLENBQUM7SUE3aEJnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBOGhCN0I7SUFBRCxnQkFBQztDQTloQkQsQUE4aEJDLENBOWhCc0Msb0JBQVUsR0E4aEJoRDtrQkE5aEJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSXRlbURlc2MsIEl0ZW1VbmxvY2tMZXZlbCB9IGZyb20gXCIuLi9kYXRhY2VudGVyL0l0ZW1EYXRhXCI7XHJcbmltcG9ydCB7IEVOVU1fQVVESU9fQ0xJUCwgRU5VTV9HQU1FX0xPU0VfVFlQRSwgRU5VTV9HQU1FX1NUQVRVUywgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IENvbW1vblRvb2wgZnJvbSBcIi4uL2ZyYW1ld29yay91dGlscy9Db21tb25Ub29sXCI7XHJcbmltcG9ydCB7IGkxOG5NYW5hZ2UgfSBmcm9tIFwiLi4vaTE4bi9pMThuTWFuYWdlXCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgUG9vbE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvUG9vbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tIFwiLi4vU3RhdGljSW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgZm9ybWF0U2Vjb25kcywgc2h1ZmZsZSwgdG9YWSB9IGZyb20gXCIuLi9VdGlsc1wiO1xyXG5pbXBvcnQgQmFzZURpYWxvZyBmcm9tIFwiLi9CYXNlRGlhbG9nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkxheWVyIGV4dGVuZHMgQmFzZURpYWxvZyB7XHJcblxyXG4gICAgYnRuUGF1c2U6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBsZXZlbExhYmVsOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgdGltZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsXHJcbiAgICB0aW1lckluZGV4OiBudW1iZXIgPSAtMVxyXG4gICAgY29tYm86IGNjLk5vZGUgPSBudWxsXHJcbiAgICBjb21ib1RpcDogY2MuTGFiZWwgPSBudWxsXHJcbiAgICBjb21ib1Byb2dyZXNzOiBjYy5Qcm9ncmVzc0JhciA9IG51bGxcclxuICAgIGNvbWJvVGltZTogbnVtYmVyID0gMFxyXG4gICAgY29tYm9UaW1lQ3VycmVudDogbnVtYmVyID0gMFxyXG4gICAgc3RhckNvbGxlY3Q6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBzdGFySWNvbjogY2MuTm9kZSA9IG51bGxcclxuICAgIHRpcHNOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgZ3VpZGVNYXNrTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGd1aWRlTm9kZTogY2MuTm9kZSA9IG51bGxcclxuICAgIGJvdHRvbU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBoZWFkZXJOb2RlOiBjYy5Ob2RlID0gbnVsbFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYnRuUGF1c2UgPSBjYy5maW5kKCdoZWFkZXIvYnRuX3BhdXNlJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYnRuUGF1c2Uub24oJ2NsaWNrJywgdGhpcy5vblBhdXNlQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5sZXZlbExhYmVsID0gY2MuZmluZCgnaGVhZGVyL2xldmVsJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIGNvbnN0IHRpbWVyTnVtID0gY2MuZmluZCgnaGVhZGVyL3RpbWVyL251bScsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJOb2RlID0gY2MuZmluZCgnaGVhZGVyJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuYm90dG9tTm9kZSA9IGNjLmZpbmQoJ2JvdHRvbScsIHRoaXMubm9kZSlcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwgPSB0aW1lck51bS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSB0aGlzLmJvdHRvbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NraWxsJyArIGluZGV4KVxyXG4gICAgICAgICAgICBjb25zdCBlZmZOb2RlID0gc2tpbGwuZ2V0Q2hpbGRCeU5hbWUoXCJlZmZTcHJpdGVcIik7XHJcbiAgICAgICAgICAgIGVmZk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNraWxsLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Ta2lsbENsaWNrKGluZGV4KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbWJvID0gY2MuZmluZCgnY29tYm8nLCB0aGlzLmJvdHRvbU5vZGUpXHJcbiAgICAgICAgY29uc3QgY3RpcCA9IHRoaXMuY29tYm8uZ2V0Q2hpbGRCeU5hbWUoJ3RpcCcpXHJcbiAgICAgICAgdGhpcy5jb21ib1RpcCA9IGN0aXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxyXG4gICAgICAgIGNvbnN0IGNwcm9ncmVzcyA9IHRoaXMuY29tYm8uZ2V0Q2hpbGRCeU5hbWUoJ3Byb2dyZXNzJylcclxuICAgICAgICB0aGlzLmNvbWJvUHJvZ3Jlc3MgPSBjcHJvZ3Jlc3MuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgICAgIHRoaXMuc3Rhckljb24gPSBjYy5maW5kKCdoZWFkZXIvc3Rhci9pY29uJywgdGhpcy5ub2RlKVxyXG4gICAgICAgIHRoaXMuc3RhckNvbGxlY3QgPSBjYy5maW5kKCdoZWFkZXIvc3Rhci9udW0nLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy50aXBzTm9kZSA9IGNjLmZpbmQoJ3RpcHNTcHJpdGUnLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKS5vbignY2xpY2snLCB0aGlzLm9uQ2xvc2VUaXBzQ2xpY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGlwc05vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZ3VpZGVNYXNrTm9kZSA9IGNjLmZpbmQoJ2d1aWRlTWFza05vZGUnLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5ndWlkZU1hc2tOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVOb2RlID0gY2MuZmluZCgnZ3VpZGVTcHJpdGUnLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgdGhpcy5ndWlkZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwid2luU2l6ZVBpeGVscy5oZWlnaHRcIixjYy53aW5TaXplLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCB3aW5TaXplUGl4ZWxzPWNjLndpblNpemU7XHJcbiAgICAgICAgbGV0IG51bT13aW5TaXplUGl4ZWxzLmhlaWdodC93aW5TaXplUGl4ZWxzLndpZHRoO1xyXG5cclxuICAgICAgICBpZighQ29tbW9uVG9vbC5pc0Z1bGxTY3JlZW4oKSl7XHJcbiAgICAgICAgICAgIC8v6Z2e5YWo6Z2i5bGP5omL5py65YGa6YCC6YWNXHJcbiAgICAgICAgICAvL+mAgumFjeWIhui+qOeOh1xyXG4gICAgICAgICBcclxuICAgICAgICAgIHRoaXMuaGVhZGVyTm9kZS55PXRoaXMuaGVhZGVyTm9kZS55LTUwO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLzE1OjlcclxuICAgICAgICAgIGlmKG51bTwxLjcpe1xyXG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tTm9kZS55PXRoaXMuYm90dG9tTm9kZS55KzgwO1xyXG4gICAgICAgICAgICAgIHRoaXMudGlwc05vZGUueT10aGlzLnRpcHNOb2RlLnkrMzA7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLmJvdHRvbU5vZGUueT10aGlzLmJvdHRvbU5vZGUueSs2MDtcclxuICAgICAgICAgICAgICB0aGlzLnRpcHNOb2RlLnk9dGhpcy50aXBzTm9kZS55KzMwO1xyXG4gICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKG51bT4yLjIpe1xyXG4gICAgICAgICAgICAgICAvLy8gdGhpcy50YWJOb2RlLnk9dGhpcy50YWJOb2RlLnktMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihudW08Mi4xJiZudW0+Mil7XHJcbiAgICAgICAgICAgICAgIC8vIHRoaXMudGFiTm9kZS55PXRoaXMudGFiTm9kZS55KzQwO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgLy8gdGhpcy50YWJOb2RlLnk9dGhpcy50YWJOb2RlLnkrODA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93bigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbD09MSl7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tTm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyTm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbU5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyTm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0l0ZW1VbmxvY2soKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0l0ZW1HdWlkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCl7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlVGlwcygpO1xyXG4gICAgICAgIHRoaXMuaGlkZUl0ZW1HdWlkZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvL+aOieiQvemjnueahOaViOaenFxyXG4gICAgcHVibGljIHNob3dEcm9wRWZmZWN0KGRyb3BJbmZvKXtcclxuICAgICAgICBjb25zdCBmbHlUYXJnZXQgPSB0aGlzLmJvdHRvbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NraWxsJyArIGRyb3BJbmZvLmluZGV4KVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkcm9wOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoZHJvcEluZm8uaXRlbSk7XHJcbiAgICAgICAgICAgIGRyb3AucGFyZW50ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBkcm9wLnBvc2l0aW9uID0gY2MudjMoZHJvcEluZm8ucG9zKTtcclxuICAgICAgICAgICAgZHJvcC5zZXRDb250ZW50U2l6ZSg4MCwgODApO1xyXG4gICAgICAgICAgICBkcm9wLm9wYWNpdHkgPSAyNTU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZseShpbmRleCwgZHJvcCwgZmx5VGFyZ2V0LCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgZHJvcC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pdGVtRGF0YS51bmxvY2tJdGVtRGF0YShkcm9wSW5mby5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0l0ZW1HdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGFjdGlvbikuc3RhcnQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/po57nmoTmlYjmnpxcclxuICAgIHByaXZhdGUgZmx5KGZseUlkeDpudW1iZXIsIGRyb3BOb2RlOmNjLk5vZGUsIGZseVRhcmdldDpjYy5Ob2RlLCAgY2FsbEJhY2s6RnVuY3Rpb24pIHtcclxuICAgICAgICBsZXQgdGFyZ2V0V1BvcyA9IGZseVRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgIGxldCB0YXJnZXROUG9zID0gZHJvcE5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFdQb3MpO1xyXG4gICAgICAgIGRyb3BOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKmZseUlkeCksXHJcbiAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjIsIDEpLCBcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMC41KSksIFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIHRhcmdldE5Qb3MpLmVhc2luZyhjYy5lYXNlSW4oMSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MuZmFkZU91dCgwLjEpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYyhjYWxsQmFjaylcclxuICAgICAgICApO1xyXG4gICAgICAgIGNjLnR3ZWVuKGRyb3BOb2RlKS50aGVuKGFjdGlvbikuc3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8v5qOA5rWL6YGT5YW36Kej6ZSBXHJcbiAgICBwcml2YXRlIGNoZWNrSXRlbVVubG9jaygpe1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5pdGVtRGF0YS5nZXRJdGVtRGF0YSgpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGF0YVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5pc1VubG9jayAmJiBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWwgPT0gSXRlbVVubG9ja0xldmVsW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLop6PplIHmlrDpgZPlhbdcIiwgZWxlbWVudCwgSXRlbVVubG9ja0xldmVsW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5JVEVNVU5MT0NLLCB0cnVlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoZHJvcEluZm8pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pWI5p6c5Y+C5pWw77yaXCIsIGRyb3BJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RHJvcEVmZmVjdChkcm9wSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5qOA5rWL6YGT5YW35byV5a+8XHJcbiAgICBwcml2YXRlIG1fY3VyR3VpZGVJZHggPSAtMTtcclxuICAgIHByaXZhdGUgY2hlY2tJdGVtR3VpZGUoKXtcclxuICAgICAgICBjb25zdCBkYXRhID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXRlbURhdGEuZ2V0SXRlbURhdGEoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pc1VubG9jayAmJiAhZWxlbWVudC5pc0d1aWRlICYmIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCA9PSBJdGVtVW5sb2NrTGV2ZWxbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fY3VyR3VpZGVJZHggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW1HdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+aYvuekuumBk+WFt+W8leWvvFxyXG4gICAgcHJpdmF0ZSBzaG93SXRlbUd1aWRlKCl7XHJcbiAgICAgICAgdGhpcy5ndWlkZU1hc2tOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ndWlkZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gSXRlbURlc2NbdGhpcy5tX2N1ckd1aWRlSWR4XTtcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX2Nsb3NlXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBza2lsbCA9IHRoaXMuYm90dG9tTm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2tpbGwnICsgaSlcclxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMubV9jdXJHdWlkZUlkeCkge1xyXG4gICAgICAgICAgICAgICAgc2tpbGwuekluZGV4ID0gdGhpcy5ndWlkZU1hc2tOb2RlLnpJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZmZOb2RlID0gc2tpbGwuZ2V0Q2hpbGRCeU5hbWUoXCJlZmZTcHJpdGVcIik7XHJcbiAgICAgICAgICAgICAgICBlZmZOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlZmZOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3QgPSBjYy5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgMS4wOCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4zLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZWZmTm9kZSkudGhlbihhY3QpLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IC00MjY7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gc2tpbGwucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi566t5aS05L2N572u77yaXCIsIHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZU5vZGUuc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0MiA9IGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjMsIGNjLnYyKHgsIHkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMywgY2MudjIoeCwgeSArIDUwKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZ3VpZGVOb2RlKS50aGVuKGFjdDIpLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBza2lsbC56SW5kZXggPSB0aGlzLmd1aWRlTWFza05vZGUuekluZGV4IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6ZqQ6JeP6YGT5YW35byV5a+8XHJcbiAgICBwcml2YXRlIGhpZGVJdGVtR3VpZGUoYkd1aWRlOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLmd1aWRlTWFza05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ndWlkZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ndWlkZU5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGlwc05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fY2xvc2VcIikuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSB0aGlzLmJvdHRvbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NraWxsJyArIGkpXHJcbiAgICAgICAgICAgIHNraWxsLnpJbmRleCA9IHRoaXMuZ3VpZGVNYXNrTm9kZS56SW5kZXggKyAxO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWZmTm9kZSA9IHNraWxsLmdldENoaWxkQnlOYW1lKFwiZWZmU3ByaXRlXCIpO1xyXG4gICAgICAgICAgICBlZmZOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlZmZOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYkd1aWRlICYmIHRoaXMubV9jdXJHdWlkZUlkeCAhPSAtMSkge1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pdGVtRGF0YS5ndWlkZUl0ZW1EYXRhKHRoaXMubV9jdXJHdWlkZUlkeCk7XHJcbiAgICAgICAgICAgIHRoaXMubV9jdXJHdWlkZUlkeCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+aYvuekunRpcHNcclxuICAgIHByaXZhdGUgc2hvd1RpcHMoKXtcclxuICAgICAgICBjb25zdCBzID0gW107XHJcbiAgICAgICAgbGV0IG9yZGVyID0gMDtcclxuICAgICAgICBjb25zdCBkYXRhID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXRlbURhdGEuZ2V0SXRlbURhdGEoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZSA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZS5pc1VubG9jayAmJiBpbmRleCAhPT0gMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCA9PSBJdGVtVW5sb2NrTGV2ZWxbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDk5OSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbnQ6IGUuaXRlbU51bVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXIrKyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbnQ6IGUuaXRlbU51bVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcy5zb3J0KChhLCBiKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gYi5vcmRlciAtIGEub3JkZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzLnNvcnQoKGEsIGIpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBiLmNudCAtIGEuY250O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHMpO1xyXG4gICAgICAgIGxldCB0ZW1wID0gcy5maWx0ZXIoKGUpPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5jbnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wKTtcclxuICAgICAgICBsZXQgdGlwU2tpbGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChzLmxlbmd0aCA9PT0gdGVtcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGVtcCA9IHNodWZmbGUocyk7XHJcbiAgICAgICAgICAgIHRpcFNraWxsID0gdGVtcFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXBTa2lsbCA9IHNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRpcFNraWxsKTtcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudGlwc05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEl0ZW1EZXNjW3RpcFNraWxsLmluZGV4XTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2tpbGwgPSB0aGlzLmJvdHRvbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NraWxsJyArIHRpcFNraWxsLmluZGV4KVxyXG4gICAgICAgIGNvbnN0IGVmZk5vZGUgPSBza2lsbC5nZXRDaGlsZEJ5TmFtZShcImVmZlNwcml0ZVwiKTtcclxuICAgICAgICBlZmZOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgZWZmTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGNvbnN0IGFjdCA9IGNjLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjMsIDEuMDgpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjMsIDEpLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMiksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgICAgY2MudHdlZW4oZWZmTm9kZSkudGhlbihhY3QpLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pmpDol490aXBzXHJcbiAgICBwcml2YXRlIGhpZGVUaXBzKCl7XHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpcHNOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2tpbGwgPSB0aGlzLmJvdHRvbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NraWxsJyArIGluZGV4KVxyXG4gICAgICAgICAgICBjb25zdCBlZmZOb2RlID0gc2tpbGwuZ2V0Q2hpbGRCeU5hbWUoXCJlZmZTcHJpdGVcIik7XHJcbiAgICAgICAgICAgIGVmZk5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGVmZk5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mm7TmlrDmioDog73lm77moIfnirbmgIFcclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbSgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXRlbURhdGEuZ2V0SXRlbURhdGEoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZSA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCBza2lsbCA9IHRoaXMuYm90dG9tTm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2tpbGwnICsgaW5kZXgpXHJcbiAgICAgICAgICAgIHNraWxsLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSBlLmlzVW5sb2NrO1xyXG4gICAgICAgICAgICBza2lsbC5nZXRDaGlsZEJ5TmFtZShcImxvY2tcIikuYWN0aXZlID0gIWUuaXNVbmxvY2s7XHJcbiAgICAgICAgICAgIGlmICghZS5pc1VubG9jaykge1xyXG4gICAgICAgICAgICAgICAgc2tpbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbEJnXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHNraWxsLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBgTHYuJHtJdGVtVW5sb2NrTGV2ZWxbaW5kZXhdfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBza2lsbC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsQmdcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICBza2lsbC5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZS5pdGVtTnVtID4gMCA/IGAke2UuaXRlbU51bX1gIDogJysnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5idG5QYXVzZS5vZmYoJ2NsaWNrJywgdGhpcy5vblBhdXNlQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy50aXBzTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsb3NlVGlwc0NsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICB0aGlzLmhpZGVUaXBzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7IH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7IH1cclxuXHJcbiAgICByZW5kb3JMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmxldmVsTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpMThuTWFuYWdlLl9nZXRMYWJlbCgndHh0X3Nob3dsZXZlbCcsW0RhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCtcIlwiXSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0l0ZW1VbmxvY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kb3JTdGFyQ29sbGVjdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXJDb2xsZWN0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmN1cnJlbnRTdGFyU2NvcmV9YFxyXG4gICAgfVxyXG5cclxuICAgIG9uUGF1c2VDbGljaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblRpbWVyKGZhbHNlKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZChmYWxzZSk7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuU0VUVElORyx0cnVlLENvbnN0YW50cy5HQU1FX1NDRU5DRS5NQUlOKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVyU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vblRpbWVyU3RvcCgpXHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGZvcm1hdFNlY29uZHMoYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnRpbWVyfWAsICdpOnMnKVxyXG4gICAgICAgIHRoaXMudGltZXJMYWJlbC5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXIgPD0gMSkgdGhpcy50aW1lckxhYmVsLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzU2NoZWR1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXItLVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXIgPCAwKSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXIgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGZvcm1hdFNlY29uZHMoYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnRpbWVyfWAsICdpOnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25UaW1lclNvdW5kU3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnRpbWVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UuZ2FtZU1hbmFnZXIub25HYW1lT3ZlcihmYWxzZSxFTlVNX0dBTUVfTE9TRV9UWVBFLlRJTUUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL+ajgOa1i+mBk+WFt+aPkOekulxyXG4gICAgICAgICAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzVGlwJiZEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWw+Mikge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnRpcFRpbWUtLTtcclxuICAgICAgICAgICAgICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS50aXBUaW1lPD0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pc1RpcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgLy/lhrDlhrvlrprml7blmahcclxuICAgIHByaXZhdGUgaWNlU2NoZWR1bGVyOiBGdW5jdGlvbiA9IG51bGw7ICAgXHJcbiAgICBwcml2YXRlIGljZVRpbWU9MTU7XHJcbiAgICBvblRpbWVyUGF1c2UodGltZTpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm9uVGltZXJTdG9wKCk7XHJcbiAgICAgICAgdGhpcy5pY2VUaW1lPXRpbWU7XHJcbiAgICAgICAgdGhpcy50aW1lckxhYmVsLnN0cmluZyA9IGZvcm1hdFNlY29uZHMoYCR7RGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnRpbWVyfWAsICdpOnMnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaWNlU2NoZWR1bGVyID0gKCk9PntcclxuICAgICAgICAgICAgICB0aGlzLmljZVRpbWUtLTtcclxuICAgICAgICAgICAgICBpZih0aGlzLmljZVRpbWU8PTApe1xyXG4gICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5JQ0UsZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0b3BJY2VDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5vblRpbWVyU3RhcnQoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5pY2VTY2hlZHVsZXIsIDEpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BJY2VDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5pY2VTY2hlZHVsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaWNlU2NoZWR1bGVyKTtcclxuICAgICAgICAgICAgdGhpcy5pY2VTY2hlZHVsZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRpbWVyU3RvcCgpIHtcclxuICAgICAgICB0aGlzLnRpbWVyTGFiZWwudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25UaW1lclNvdW5kU3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS50aW1lciA8PSAxMCAmJiBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudGltZXIgPiAwICYmIHRoaXMudGltZXJJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lckluZGV4ID0gYXdhaXQgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuVElNRVIsIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGltZXJTb3VuZFN0b3AoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnN0b3BTb3VuZCh0aGlzLnRpbWVySW5kZXgpXHJcbiAgICAgICAgdGhpcy50aW1lckluZGV4ID0gLTFcclxuICAgIH1cclxuXHJcbiAgICBvblByb2dyZXNzU3RhcnQoaXNJbml0OiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGlmIChpc0luaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21iby5vcGFjaXR5ID0gMFxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21iby5vcGFjaXR5ID0gMjU1XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmNvbWJvICs9IDFcclxuICAgICAgICAvLyDmlLbpm4bmmJ/mmJ9cclxuICAgICAgICBjb25zdCBlbmRQb3MgPSB0b1hZKHRoaXMuc3Rhckljb24sIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLnN0YWdlKVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXJTdGFydFBvc0Fyci5mb3JFYWNoKHN0YXJ0UG9zID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhciA9IFBvb2xNYW5hZ2VyLmluc3RhbmNlLmdldE5vZGUoJ1N0YXInLCBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5zdGFnZSwgY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSkpXHJcbiAgICAgICAgICAgIGNvbnN0IGFjdCA9IGNjLnNwYXduKGNjLm1vdmVUbygwLjUsIGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSkpLCBjYy5zY2FsZVRvKDAuNSwgMC4xKSlcclxuICAgICAgICAgICAgY2MudHdlZW4oc3RhcikudGhlbihhY3QpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3Rhci5yZW1vdmVGcm9tUGFyZW50KClcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlICs9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jb21ib1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kb3JTdGFyQ29sbGVjdCgpXHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcclxuICAgICAgICB9KVxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXJTdGFydFBvc0FyciA9IFtdXHJcbiAgICAgICAgLy8g6L+e5Ye7XHJcbiAgICAgICAgdGhpcy5jb21ib1RpcC5zdHJpbmcgPSBgQ29tYm94JHtEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEuY29tYm99YFxyXG4gICAgICAgIHRoaXMuY29tYm9UaW1lID0gRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmNvbWJvVGltZXIgLyBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEuY29tYm9cclxuICAgICAgICB0aGlzLmNvbWJvVGltZUN1cnJlbnQgPSB0aGlzLmNvbWJvVGltZVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbG9zZVRpcHNDbGljaygpe1xyXG4gICAgICAgIHRoaXMuaGlkZVRpcHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNraWxsQ2xpY2soaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPT0gRU5VTV9HQU1FX1NUQVRVUy5VTlJVTklORykgcmV0dXJuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLml0ZW1EYXRhLmdldEl0ZW1EYXRhKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhW2luZGV4XS5pc1VubG9jaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5DTElDSylcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblRpbWVyKGZhbHNlKTtcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblRpbWVyU291bmQoZmFsc2UpO1xyXG4gICAgICBcclxuICAgICAgICBpZiAoZGF0YVtpbmRleF0uaXRlbU51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLklURU0sIHRydWUsIHtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGFjdCA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4yKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIGlmICghU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLmlzQWN0aXZlKEVOVU1fVUlfVFlQRS5JQ0UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGFjdCkuc3RhcnQoKTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIOinpuWPkeaKgOiDvVxyXG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLm9uU2tpbGxEZWxldGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLm9uU2tpbGxNYWdpYygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLm9uU2tpbGxUaW1lKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5vblNraWxsU2h1ZmZsZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubV9jdXJHdWlkZUlkeCAhPSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVJdGVtR3VpZGUodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXRlbURhdGEudXNlSXRlbURhdGEoaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2xvc2VUaXBzQ2xpY2soKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jb21ib1RpbWVDdXJyZW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJvVGltZUN1cnJlbnQgLT0gZHRcclxuICAgICAgICAgICAgdGhpcy5jb21ib1Byb2dyZXNzLnByb2dyZXNzID0gdGhpcy5jb21ib1RpbWVDdXJyZW50IC8gdGhpcy5jb21ib1RpbWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21iby5vcGFjaXR5ID09IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21ib1RpbWUgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvVGltZUN1cnJlbnQgPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEuY29tYm8gPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19