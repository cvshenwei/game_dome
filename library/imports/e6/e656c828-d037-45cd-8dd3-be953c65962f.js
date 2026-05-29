"use strict";
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