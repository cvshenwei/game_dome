"use strict";
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