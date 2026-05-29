
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/RankListDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e656cgo0DdFzY3TvpU8ZZYv', 'RankListDialog');
// scripts/layer/RankListDialog.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var AudioManager_1 = require("../manager/AudioManager");
var BaseDialog_1 = require("./BaseDialog");
var SdkManager_1 = require("../manager/SdkManager");
var RankInfo_1 = require("../datacenter/RankInfo");
var Constants_1 = require("../Constants");
var PoolManager_1 = require("../manager/PoolManager");
var RankItem_1 = require("../rank/RankItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankListDialog = /** @class */ (function (_super) {
    __extends(RankListDialog, _super);
    function RankListDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnClose = null;
        _this.rankScroll = null;
        _this.scrollContentNode = null;
        _this.loadNode = null;
        _this.rankNode = null;
        _this.levelBtn = null;
        _this.scoreBtn = null;
        _this.weekBtn = null;
        _this.monthBtn = null;
        _this.allBtn = null;
        _this.noMeNode = null;
        _this.percent = 0;
        _this.rankType = null;
        return _this;
    }
    RankListDialog.prototype.onLoad = function () {
        this.rankNode = cc.find('rankNode', this.node);
        this.rankScroll = cc.find('ScrollView', this.rankNode).getComponent(cc.ScrollView);
        this.scrollContentNode = cc.find('view/content', this.rankScroll.node);
        this.levelBtn = cc.find('btnNode/levelBtn', this.rankNode);
        this.scoreBtn = cc.find('btnNode/scoreBtn', this.rankNode);
        this.weekBtn = cc.find('btnNode/levelChildBtn/weekBtn', this.rankNode);
        this.monthBtn = cc.find('btnNode/levelChildBtn/monthBtn', this.rankNode);
        this.allBtn = cc.find('btnNode/levelChildBtn/bestBtn', this.rankNode);
        this.noMeNode = cc.find('noMeNode', this.rankNode);
        this.btnClose = cc.find('titleNode/btn_close', this.rankNode);
        this.btnClose.on('click', this.onCloseClick, this);
        this.levelBtn.on('click', this.onClickLevel, this);
        this.scoreBtn.on('click', this.onClickWeek, this);
        this.weekBtn.on('click', this.onClickWeek, this);
        this.monthBtn.on('click', this.onClickMonth, this);
        this.allBtn.on('click', this.onClickBest, this);
    };
    RankListDialog.prototype.onDestroy = function () {
        this.btnClose.off('click', this.onCloseClick, this);
        this.levelBtn.off('click', this.onClickLevel, this);
        this.scoreBtn.off('click', this.onClickWeek, this);
        this.weekBtn.off('click', this.onClickWeek, this);
        this.monthBtn.off('click', this.onClickMonth, this);
        this.allBtn.off('click', this.onClickBest, this);
    };
    RankListDialog.prototype.onEnable = function () {
        this.zoomIn(this.rankNode);
        SdkManager_1.default.instance.toggleBannerAd(true);
    };
    RankListDialog.prototype.onDisable = function () {
        SdkManager_1.default.instance.toggleBannerAd(false);
    };
    RankListDialog.prototype.onClickLevel = function () {
        this.selectRank(Constants_1.default.RankType.LEVEL);
    };
    RankListDialog.prototype.onClickWeek = function () {
        this.selectRank(Constants_1.default.RankType.WEEK);
    };
    RankListDialog.prototype.onClickMonth = function () {
        this.selectRank(Constants_1.default.RankType.MONTH);
    };
    RankListDialog.prototype.onClickBest = function () {
        this.selectRank(Constants_1.default.RankType.ALL);
    };
    RankListDialog.prototype.selectRank = function (rankType) {
        this.rankType = rankType;
        this.startRank();
        var levelIndex = this.levelBtn.getSiblingIndex();
        var scoreIndex = this.scoreBtn.getSiblingIndex();
        if (rankType == Constants_1.default.RankType.LEVEL) {
            if (scoreIndex > levelIndex) {
                this.levelBtn.setSiblingIndex(scoreIndex);
                this.scoreBtn.setSiblingIndex(levelIndex);
            }
            this.levelBtn.active = true;
            this.levelBtn.getChildByName("Background").getChildByName("bgClicked").active = true;
            this.levelBtn.getChildByName("Background").getChildByName("bgNoClicked").active = false;
            this.scoreBtn.active = true;
            this.scoreBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
            this.scoreBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
            this.weekBtn.active = false;
            this.monthBtn.active = false;
            this.allBtn.active = false;
        }
        else {
            if (levelIndex > scoreIndex) {
                this.levelBtn.setSiblingIndex(scoreIndex);
                this.scoreBtn.setSiblingIndex(levelIndex);
            }
            this.levelBtn.active = true;
            this.levelBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
            this.levelBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
            this.scoreBtn.active = true;
            this.scoreBtn.getChildByName("Background").getChildByName("bgClicked").active = true;
            this.scoreBtn.getChildByName("Background").getChildByName("bgNoClicked").active = false;
            this.weekBtn.active = true;
            this.monthBtn.active = true;
            this.allBtn.active = true;
            if (rankType == Constants_1.default.RankType.WEEK) {
                this.weekBtn.getChildByName("Background").getChildByName("bgClicked").active = true;
                this.weekBtn.getChildByName("Background").getChildByName("bgNoClicked").active = false;
                this.monthBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
                this.monthBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
                this.allBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
                this.allBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
            }
            else if (rankType == Constants_1.default.RankType.MONTH) {
                this.weekBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
                this.weekBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
                this.monthBtn.getChildByName("Background").getChildByName("bgClicked").active = true;
                this.monthBtn.getChildByName("Background").getChildByName("bgNoClicked").active = false;
                this.allBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
                this.allBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
            }
            else {
                this.weekBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
                this.weekBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
                this.monthBtn.getChildByName("Background").getChildByName("bgClicked").active = false;
                this.monthBtn.getChildByName("Background").getChildByName("bgNoClicked").active = true;
                this.allBtn.getChildByName("Background").getChildByName("bgClicked").active = true;
                this.allBtn.getChildByName("Background").getChildByName("bgNoClicked").active = false;
            }
        }
    };
    RankListDialog.prototype.onShown = function (rankType) {
        this.noMeNode.active = false;
        this.rankType = rankType;
        this.selectRank(rankType);
    };
    RankListDialog.prototype.startRank = function () {
        this.initLeaderBoard();
        this.loadLeaderboard();
        /*this.scheduleOnce(_=>{
          //检查网络和广告填充。
         let isNet=CallAndroidCommon.isNetWorkEnable();
         this.loadNode.active=false;
         if(!isNet){
           this.showErrorDesc('label_net');
           return;
         }else{
           this.loadLeaderboard();
         }
        
       },1.2);*/
    };
    RankListDialog.prototype.loadLeaderboard = function () {
        RankInfo_1.rankInfoData.initRankInfo();
        var rankInfoList = RankInfo_1.rankInfoData.getRankData(this.rankType);
        if (rankInfoList == null || rankInfoList.rankList == null || rankInfoList.rankList.length == 0) {
            RankInfo_1.rankInfoData.isRankList = true;
            RankInfo_1.rankInfoData.initRankInfo();
            rankInfoList = RankInfo_1.rankInfoData.getRankData(this.rankType);
        }
        //this.currentScore=rankInfoList.currentRank.score;
        var count = rankInfoList.rankList.length;
        //是否已显示当前用户
        var showMe = false;
        var rankItemType = "level";
        if (this.rankType != Constants_1.default.RankType.LEVEL) {
            rankItemType = "score";
        }
        for (var i = 0; i < count; i++) {
            var rank = rankInfoList.rankList[i];
            if (rank.rankNumber > rankInfoList.currentRank.rankNumber && !showMe) {
                var f_1 = PoolManager_1.default.instance.getNode('RankItem', this.scrollContentNode);
                f_1.name = 'childRankMe';
                var item_1 = f_1.getComponent(RankItem_1.default);
                var name = "player";
                item_1.initItem(name, rankInfoList.currentRank.rankNumber, rankInfoList.currentRank.score, true, rankItemType);
                item_1.setArrow(rankInfoList.currentRank.rankUp);
                showMe = true;
                this.percent = i / count;
            }
            var f = PoolManager_1.default.instance.getNode('RankItem', this.scrollContentNode);
            f.name = 'childRank' + i;
            var item = f.getComponent(RankItem_1.default);
            item.initItem(rank.name, rank.rankNumber, rank.score, false, rankItemType);
            item.setArrow(rank.rankUp);
        }
        //如果没有显示当前用户的排名，代表不在排名表上
        if (!showMe) {
            this.noMeNode.active = true;
            var f = PoolManager_1.default.instance.getNode('RankItem', this.noMeNode);
            f.name = 'childRankMe';
            var item = f.getComponent(RankItem_1.default);
            var name = "player";
            item.initItem(name, rankInfoList.currentRank.rankNumber, rankInfoList.currentRank.score, true, rankItemType);
            item.setArrow(rankInfoList.currentRank.rankUp);
            if (this.rankType == Constants_1.default.RankType.LEVEL || this.rankType == Constants_1.default.RankType.ALL) {
                if (rankInfoList.currentRank.rankNumber > 500) {
                    item.noRank("500+");
                }
                else {
                    item.noRank(rankInfoList.currentRank.rankNumber.toString());
                }
            }
            else if (this.rankType == Constants_1.default.RankType.MONTH) {
                if (rankInfoList.currentRank.rankNumber > 300) {
                    item.noRank("300+");
                }
                else {
                    item.noRank(rankInfoList.currentRank.rankNumber.toString());
                }
            }
            else if (this.rankType == Constants_1.default.RankType.WEEK) {
                if (rankInfoList.currentRank.rankNumber > 200) {
                    item.noRank("200+");
                }
                else {
                    item.noRank(rankInfoList.currentRank.rankNumber.toString());
                }
            }
        }
        else {
            this.noMeNode.active = false;
        }
        //最后插入一个空的item
        var f2 = PoolManager_1.default.instance.getNode('RankItem', this.scrollContentNode);
        f2.name = 'childRankL';
        var item2 = f2.getComponent(RankItem_1.default);
        item2.node.opacity = 1;
        item2.node.scale = 0.5;
        this.scheduleOnce(this.scrollToCurrentRank);
    };
    RankListDialog.prototype.scrollToCurrentRank = function () {
        if (this.percent > 0) {
            this.rankScroll.scrollToPercentVertical(1 - this.percent);
        }
        else {
            this.rankScroll.scrollToPercentVertical(0.06);
        }
    };
    RankListDialog.prototype.initLeaderBoard = function () {
        if (this.scrollContentNode.children && this.scrollContentNode.children.length > 0) {
            for (var i = this.scrollContentNode.children.length - 1; i >= 0; i--) {
                if (this.scrollContentNode.children[i].name.indexOf('childRank') >= 0) {
                    this.scrollContentNode.children[i].removeFromParent();
                }
            }
        }
    };
    RankListDialog.prototype.onCloseClick = function () {
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLICK);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.RANK, false);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.MENU);
    };
    RankListDialog = __decorate([
        ccclass
    ], RankListDialog);
    return RankListDialog;
}(BaseDialog_1.default));
exports.default = RankListDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL1JhbmtMaXN0RGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGdDQUF3RDtBQUN4RCxvREFBbUQ7QUFDbkQsd0RBQW1EO0FBQ25ELDJDQUFzQztBQUN0QyxvREFBK0M7QUFFL0MsbURBQXNEO0FBQ3RELDBDQUFxQztBQUVyQyxzREFBaUQ7QUFDakQsNkNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFVO0lBQXREO1FBQUEscUVBNlJDO1FBM1JHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUVqQyxjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFXLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFXLElBQUksQ0FBQztRQUV4QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFFaEIsYUFBTyxHQUFRLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQVEsSUFBSSxDQUFDOztJQWtRakMsQ0FBQztJQWhRRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxV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QyxDQUFDLEVBQUUsQ0FBQyxJQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDOUQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUUsQ0FBQyxFQUFDO29CQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQ3pEO2FBRUo7U0FDSjtJQUNMLENBQUM7SUFHRCxxQ0FBWSxHQUFaO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHNCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdEQsK0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG1CQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3pELCtCQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUE1UmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E2UmxDO0lBQUQscUJBQUM7Q0E3UkQsQUE2UkMsQ0E3UjJDLG9CQUFVLEdBNlJyRDtrQkE3Um9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRU5VTV9BVURJT19DTElQLCBFTlVNX1VJX1RZUEUgfSBmcm9tIFwiLi4vRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0aWNJbnN0YW5jZSB9IGZyb20gJy4uL1N0YXRpY0luc3RhbmNlJztcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSBcIi4vQmFzZURpYWxvZ1wiO1xyXG5pbXBvcnQgU2RrTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9TZGtNYW5hZ2VyXCI7XHJcbmltcG9ydCBUb2FzdE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvVG9hc3RNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHJhbmtJbmZvRGF0YSB9IGZyb20gXCIuLi9kYXRhY2VudGVyL1JhbmtJbmZvXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgUmFua0xpc3RDbGFzcyBmcm9tIFwiLi4vcmFuay9SYW5rTGlzQ2xhc3N0XCI7XHJcbmltcG9ydCBQb29sTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9Qb29sTWFuYWdlclwiO1xyXG5pbXBvcnQgUmFua0l0ZW0gZnJvbSBcIi4uL3JhbmsvUmFua0l0ZW1cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rTGlzdERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xyXG5cclxuICAgIGJ0bkNsb3NlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcmFua1Njcm9sbDpjYy5TY3JvbGxWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBzY3JvbGxDb250ZW50Tm9kZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBsb2FkTm9kZTpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICByYW5rTm9kZTpjYy5Ob2RlID0gbnVsbDsgXHJcblxyXG4gICAgbGV2ZWxCdG46Y2MuTm9kZSA9IG51bGw7IFxyXG5cclxuICAgIHNjb3JlQnRuOmNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICB3ZWVrQnRuOmNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBtb250aEJ0bjpjYy5Ob2RlID0gbnVsbDsgXHJcblxyXG4gICAgYWxsQnRuOmNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBub01lTm9kZTpjYy5Ob2RlID0gbnVsbDsgXHJcblxyXG4gICAgcHJpdmF0ZSBwZXJjZW50Om51bWJlcj0wO1xyXG5cclxuICAgIHByaXZhdGUgcmFua1R5cGU6c3RyaW5nPW51bGw7XHJcbiAgICBcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJhbmtOb2RlID0gY2MuZmluZCgncmFua05vZGUnLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMucmFua1Njcm9sbCA9IGNjLmZpbmQoJ1Njcm9sbFZpZXcnLCB0aGlzLnJhbmtOb2RlKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxDb250ZW50Tm9kZSA9IGNjLmZpbmQoJ3ZpZXcvY29udGVudCcsIHRoaXMucmFua1Njcm9sbC5ub2RlKTtcclxuICAgICAgICB0aGlzLmxldmVsQnRuID0gY2MuZmluZCgnYnRuTm9kZS9sZXZlbEJ0bicsIHRoaXMucmFua05vZGUpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVCdG4gPSBjYy5maW5kKCdidG5Ob2RlL3Njb3JlQnRuJywgdGhpcy5yYW5rTm9kZSk7XHJcbiAgICAgICAgdGhpcy53ZWVrQnRuID0gY2MuZmluZCgnYnRuTm9kZS9sZXZlbENoaWxkQnRuL3dlZWtCdG4nLCB0aGlzLnJhbmtOb2RlKTtcclxuICAgICAgICB0aGlzLm1vbnRoQnRuID0gY2MuZmluZCgnYnRuTm9kZS9sZXZlbENoaWxkQnRuL21vbnRoQnRuJywgdGhpcy5yYW5rTm9kZSk7XHJcbiAgICAgICAgdGhpcy5hbGxCdG4gPSBjYy5maW5kKCdidG5Ob2RlL2xldmVsQ2hpbGRCdG4vYmVzdEJ0bicsIHRoaXMucmFua05vZGUpO1xyXG4gICAgICAgIHRoaXMubm9NZU5vZGUgPSBjYy5maW5kKCdub01lTm9kZScsIHRoaXMucmFua05vZGUpO1xyXG4gICAgICAgIHRoaXMuYnRuQ2xvc2UgPSBjYy5maW5kKCd0aXRsZU5vZGUvYnRuX2Nsb3NlJywgdGhpcy5yYW5rTm9kZSlcclxuICAgICAgICB0aGlzLmJ0bkNsb3NlLm9uKCdjbGljaycsIHRoaXMub25DbG9zZUNsaWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmxldmVsQnRuLm9uKCdjbGljaycsIHRoaXMub25DbGlja0xldmVsLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNjb3JlQnRuLm9uKCdjbGljaycsIHRoaXMub25DbGlja1dlZWssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMud2Vla0J0bi5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tXZWVrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm1vbnRoQnRuLm9uKCdjbGljaycsIHRoaXMub25DbGlja01vbnRoLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFsbEJ0bi5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2tCZXN0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5idG5DbG9zZS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsb3NlQ2xpY2ssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5sZXZlbEJ0bi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrTGV2ZWwsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5zY29yZUJ0bi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrV2VlaywgdGhpcylcclxuICAgICAgICB0aGlzLndlZWtCdG4ub2ZmKCdjbGljaycsIHRoaXMub25DbGlja1dlZWssIHRoaXMpXHJcbiAgICAgICAgdGhpcy5tb250aEJ0bi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrTW9udGgsIHRoaXMpXHJcbiAgICAgICAgdGhpcy5hbGxCdG4ub2ZmKCdjbGljaycsIHRoaXMub25DbGlja0Jlc3QsIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy56b29tSW4odGhpcy5yYW5rTm9kZSk7XHJcbiAgICAgICAgU2RrTWFuYWdlci5pbnN0YW5jZS50b2dnbGVCYW5uZXJBZCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBTZGtNYW5hZ2VyLmluc3RhbmNlLnRvZ2dsZUJhbm5lckFkKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UmFuayhDb25zdGFudHMuUmFua1R5cGUuTEVWRUwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2tXZWVrKCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSYW5rKENvbnN0YW50cy5SYW5rVHlwZS5XRUVLKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrTW9udGgoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdFJhbmsoQ29uc3RhbnRzLlJhbmtUeXBlLk1PTlRIKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrQmVzdCgpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UmFuayhDb25zdGFudHMuUmFua1R5cGUuQUxMKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RSYW5rKHJhbmtUeXBlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5yYW5rVHlwZT1yYW5rVHlwZTtcclxuICAgICAgICB0aGlzLnN0YXJ0UmFuaygpO1xyXG4gICAgICAgIGxldCBsZXZlbEluZGV4PSB0aGlzLmxldmVsQnRuLmdldFNpYmxpbmdJbmRleCgpO1xyXG4gICAgICAgIGxldCBzY29yZUluZGV4PXRoaXMuc2NvcmVCdG4uZ2V0U2libGluZ0luZGV4KCk7XHJcbiAgICAgICAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5MRVZFTCl7XHJcbiAgICAgICAgICAgIGlmKHNjb3JlSW5kZXg+bGV2ZWxJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbEJ0bi5zZXRTaWJsaW5nSW5kZXgoc2NvcmVJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zY29yZUJ0bi5zZXRTaWJsaW5nSW5kZXgobGV2ZWxJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sZXZlbEJ0bi5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbEJ0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ0NsaWNrZWRcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdOb0NsaWNrZWRcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQnRuLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnQ2xpY2tlZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdOb0NsaWNrZWRcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMud2Vla0J0bi5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGhCdG4uYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFsbEJ0bi5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGxldmVsSW5kZXg+c2NvcmVJbmRleCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsQnRuLnNldFNpYmxpbmdJbmRleChzY29yZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmVCdG4uc2V0U2libGluZ0luZGV4KGxldmVsSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxCdG4uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdDbGlja2VkXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbEJ0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ05vQ2xpY2tlZFwiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUJ0bi5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZUJ0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ0NsaWNrZWRcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdOb0NsaWNrZWRcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLndlZWtCdG4uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGhCdG4uYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQnRuLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLldFRUspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnQ2xpY2tlZFwiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vla0J0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ05vQ2xpY2tlZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnQ2xpY2tlZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnTm9DbGlja2VkXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdDbGlja2VkXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnTm9DbGlja2VkXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZSAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5NT05USCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdDbGlja2VkXCIpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vla0J0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ05vQ2xpY2tlZFwiKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdDbGlja2VkXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aEJ0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ05vQ2xpY2tlZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbEJ0bi5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJiZ0NsaWNrZWRcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdOb0NsaWNrZWRcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnQ2xpY2tlZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdOb0NsaWNrZWRcIikuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnQ2xpY2tlZFwiKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoQnRuLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDaGlsZEJ5TmFtZShcImJnTm9DbGlja2VkXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdDbGlja2VkXCIpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJCYWNrZ3JvdW5kXCIpLmdldENoaWxkQnlOYW1lKFwiYmdOb0NsaWNrZWRcIikuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICBvblNob3duKHJhbmtUeXBlOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMubm9NZU5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMucmFua1R5cGU9cmFua1R5cGU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RSYW5rKHJhbmtUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFJhbmsoKXtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5pdExlYWRlckJvYXJkKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkTGVhZGVyYm9hcmQoKTtcclxuICAgICAgICAgLyp0aGlzLnNjaGVkdWxlT25jZShfPT57XHJcbiAgICAgICAgICAgLy/mo4Dmn6XnvZHnu5zlkozlub/lkYrloavlhYXjgIJcclxuICAgICAgICAgIGxldCBpc05ldD1DYWxsQW5kcm9pZENvbW1vbi5pc05ldFdvcmtFbmFibGUoKTtcclxuICAgICAgICAgIHRoaXMubG9hZE5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgaWYoIWlzTmV0KXtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JEZXNjKCdsYWJlbF9uZXQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExlYWRlcmJvYXJkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sMS4yKTsqL1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMZWFkZXJib2FyZCgpe1xyXG4gICAgICAgIHJhbmtJbmZvRGF0YS5pbml0UmFua0luZm8oKTtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBsZXQgcmFua0luZm9MaXN0OlJhbmtMaXN0Q2xhc3M9IHJhbmtJbmZvRGF0YS5nZXRSYW5rRGF0YSggdGhpcy5yYW5rVHlwZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocmFua0luZm9MaXN0PT1udWxsfHxyYW5rSW5mb0xpc3QucmFua0xpc3Q9PW51bGx8fHJhbmtJbmZvTGlzdC5yYW5rTGlzdC5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICByYW5rSW5mb0RhdGEuaXNSYW5rTGlzdD10cnVlO1xyXG4gICAgICAgICAgICByYW5rSW5mb0RhdGEuaW5pdFJhbmtJbmZvKCk7XHJcbiAgICAgICAgICAgIHJhbmtJbmZvTGlzdD0gcmFua0luZm9EYXRhLmdldFJhbmtEYXRhKCB0aGlzLnJhbmtUeXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vdGhpcy5jdXJyZW50U2NvcmU9cmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnNjb3JlO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvdW50PXJhbmtJbmZvTGlzdC5yYW5rTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgLy/mmK/lkKblt7LmmL7npLrlvZPliY3nlKjmiLdcclxuICAgICAgICBsZXQgc2hvd01lPWZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcmFua0l0ZW1UeXBlPVwibGV2ZWxcIjtcclxuICAgICAgICBpZih0aGlzLnJhbmtUeXBlIT1Db25zdGFudHMuUmFua1R5cGUuTEVWRUwpe1xyXG4gICAgICAgICAgICByYW5rSXRlbVR5cGU9XCJzY29yZVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAgO2kgPGNvdW50OyBpICsrKXtcclxuICAgICAgICAgICAgbGV0IHJhbmsgPSByYW5rSW5mb0xpc3QucmFua0xpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKHJhbmsucmFua051bWJlcj5yYW5rSW5mb0xpc3QuY3VycmVudFJhbmsucmFua051bWJlciYmIXNob3dNZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZiA9UG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnUmFua0l0ZW0nLHRoaXMuc2Nyb2xsQ29udGVudE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgZi5uYW1lPSdjaGlsZFJhbmtNZSc7IFxyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBmLmdldENvbXBvbmVudChSYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZT1cInBsYXllclwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKG5hbWUscmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnJhbmtOdW1iZXIscmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnNjb3JlLHRydWUscmFua0l0ZW1UeXBlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXJyb3cocmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnJhbmtVcCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNob3dNZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjZW50PWkvY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGYgPSBQb29sTWFuYWdlci5pbnN0YW5jZS5nZXROb2RlKCdSYW5rSXRlbScsdGhpcy5zY3JvbGxDb250ZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIGYubmFtZT0nY2hpbGRSYW5rJytpOyBcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBmLmdldENvbXBvbmVudChSYW5rSXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0ocmFuay5uYW1lLHJhbmsucmFua051bWJlcixyYW5rLnNjb3JlLGZhbHNlLHJhbmtJdGVtVHlwZSk7XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0QXJyb3cocmFuay5yYW5rVXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lpoLmnpzmsqHmnInmmL7npLrlvZPliY3nlKjmiLfnmoTmjpLlkI3vvIzku6PooajkuI3lnKjmjpLlkI3ooajkuIpcclxuICAgICAgICBpZighc2hvd01lKXtcclxuICAgICAgICAgICAgdGhpcy5ub01lTm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGYgPVBvb2xNYW5hZ2VyLmluc3RhbmNlLmdldE5vZGUoJ1JhbmtJdGVtJyx0aGlzLm5vTWVOb2RlKTtcclxuICAgICAgICAgICAgZi5uYW1lPSdjaGlsZFJhbmtNZSc7IFxyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGYuZ2V0Q29tcG9uZW50KFJhbmtJdGVtKTtcclxuICAgICAgICAgICAgbGV0IG5hbWU9XCJwbGF5ZXJcIjsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLmluaXRJdGVtKG5hbWUscmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnJhbmtOdW1iZXIscmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnNjb3JlLHRydWUscmFua0l0ZW1UeXBlKTtcclxuICAgICAgICAgICAgaXRlbS5zZXRBcnJvdyhyYW5rSW5mb0xpc3QuY3VycmVudFJhbmsucmFua1VwKTtcclxuICAgICAgICAgICAgaWYodGhpcy5yYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkxFVkVMfHx0aGlzLnJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuQUxMKXtcclxuICAgICAgICAgICAgICAgIGlmKHJhbmtJbmZvTGlzdC5jdXJyZW50UmFuay5yYW5rTnVtYmVyPjUwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ub1JhbmsoXCI1MDArXCIpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5ub1JhbmsocmFua0luZm9MaXN0LmN1cnJlbnRSYW5rLnJhbmtOdW1iZXIudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMucmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5NT05USCl7XHJcbiAgICAgICAgICAgICAgICBpZihyYW5rSW5mb0xpc3QuY3VycmVudFJhbmsucmFua051bWJlcj4zMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9SYW5rKFwiMzAwK1wiKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9SYW5rKHJhbmtJbmZvTGlzdC5jdXJyZW50UmFuay5yYW5rTnVtYmVyLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuV0VFSyl7XHJcbiAgICAgICAgICAgICAgICBpZihyYW5rSW5mb0xpc3QuY3VycmVudFJhbmsucmFua051bWJlcj4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9SYW5rKFwiMjAwK1wiKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9SYW5rKHJhbmtJbmZvTGlzdC5jdXJyZW50UmFuay5yYW5rTnVtYmVyLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9NZU5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/mnIDlkI7mj5LlhaXkuIDkuKrnqbrnmoRpdGVtXHJcbiAgICAgICAgbGV0IGYyID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnUmFua0l0ZW0nLHRoaXMuc2Nyb2xsQ29udGVudE5vZGUpO1xyXG4gICAgICAgIGYyLm5hbWU9J2NoaWxkUmFua0wnOyBcclxuICAgICAgICBsZXQgaXRlbTIgPSBmMi5nZXRDb21wb25lbnQoUmFua0l0ZW0pO1xyXG4gICAgICAgIGl0ZW0yLm5vZGUub3BhY2l0eT0xO1xyXG4gICAgICAgIGl0ZW0yLm5vZGUuc2NhbGU9MC41O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2Nyb2xsVG9DdXJyZW50UmFuayk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9DdXJyZW50UmFuaygpe1xyXG4gICAgICAgIGlmKHRoaXMucGVyY2VudD4wKXtcclxuICAgICAgICAgICAgdGhpcy5yYW5rU2Nyb2xsLnNjcm9sbFRvUGVyY2VudFZlcnRpY2FsKDEtdGhpcy5wZXJjZW50KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yYW5rU2Nyb2xsLnNjcm9sbFRvUGVyY2VudFZlcnRpY2FsKDAuMDYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBpbml0TGVhZGVyQm9hcmQoKXtcclxuICAgICAgICBpZih0aGlzLnNjcm9sbENvbnRlbnROb2RlLmNoaWxkcmVuJiZ0aGlzLnNjcm9sbENvbnRlbnROb2RlLmNoaWxkcmVuLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuc2Nyb2xsQ29udGVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoLTEgO2kgPj0wOyBpLS0pe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zY3JvbGxDb250ZW50Tm9kZS5jaGlsZHJlbltpXS5uYW1lLmluZGV4T2YoJ2NoaWxkUmFuaycpPj0wKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbENvbnRlbnROb2RlLmNoaWxkcmVuW2ldLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICBvbkNsb3NlQ2xpY2soKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuQ0xJQ0spXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuUkFOSywgZmFsc2UpXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTUVOVSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==