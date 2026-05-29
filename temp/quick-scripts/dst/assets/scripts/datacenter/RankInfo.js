
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/datacenter/RankInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '305aerN2G9J8qwUAglc9AEG', 'RankInfo');
// scripts/datacenter/RankInfo.ts

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
exports.rankInfoData = void 0;
var Constants_1 = require("../Constants");
var SystemData_1 = require("../framework/SystemData");
var CommonTool_1 = require("../framework/utils/CommonTool");
var DateUtil_1 = require("../framework/utils/DateUtil");
var DataManager_1 = require("../manager/DataManager");
var Rank_1 = require("../rank/Rank");
var RankLisClasst_1 = require("../rank/RankLisClasst");
var RankInfoData = /** @class */ (function (_super) {
    __extends(RankInfoData, _super);
    function RankInfoData() {
        var _this = _super.call(this) || this;
        //是否需要重新生成排名，通过一关重新生成排名
        _this.isRankList = false;
        //当天是否重新生成过排名
        _this.todayIsRank = false;
        //历史最高分第一名数据
        _this.firstRankInfo = '';
        //历史最高分第二名数据
        _this.secondRankInfo = '';
        //历史最高分第三名数据
        _this.thirdRankInfo = '';
        //用户级别排名数据
        _this.bestRankLevelInfo = '';
        //用户历史最高分的排名数据
        _this.bestRankInfo = '';
        //用户今天打到的最高分排名数据
        _this.todayRankInfo = '';
        //周排名数据
        _this.weekRankInfo = '';
        //月排名数据
        _this.monthRankInfo = '';
        //年排名数据
        _this.yearRankInfo = '';
        //用户输入的姓名
        _this.rankName = '';
        //用户选择的头像
        _this.rankAvatar = '';
        //用户历史最高通关的排名
        _this.bestLevelRank = 0;
        //用户历史打的分数排名
        _this.bestScoreRank = 0;
        //用户今年打的分数排名
        _this.yearScoreRank = 0;
        //用户本月打的分数排名
        _this.monthScoreRank = 0;
        //用户本周打的分数排名
        _this.weekScoreRank = 0;
        //用户今天打的分数排名
        _this.todayScoreRank = 0;
        //用户当天消除分数
        _this.todayScore = 100;
        //用户周消除分数
        _this.weekScore = 200;
        //用户月消除分数
        _this.monthScore = 1000;
        //用户年消除分数
        _this.yearScore = 10000;
        //用户历史消除分数
        _this.bestScore = 10000;
        _this.loadBestRankData();
        return _this;
    }
    RankInfoData_1 = RankInfoData;
    RankInfoData.prototype.init = function () {
    };
    RankInfoData.prototype.loadBestRankData = function () {
        var str = localStorage.getItem("RankInfoData.bestDatas");
        if (str) {
            var bestDatas = JSON.parse(str);
            if (bestDatas["bestLevelRank"] != null) {
                this.bestLevelRank = Number(bestDatas["bestLevelRank"]);
            }
            if (bestDatas["yearScoreRank"] != null) {
                this.yearScoreRank = Number(bestDatas["yearScoreRank"]);
            }
            if (bestDatas["monthScoreRank"] != null) {
                this.monthScoreRank = Number(bestDatas["monthScoreRank"]);
            }
            if (bestDatas["weekScoreRank"] != null) {
                this.weekScoreRank = Number(bestDatas["weekScoreRank"]);
            }
            if (bestDatas["todayScoreRank"] != null) {
                this.todayScoreRank = Number(bestDatas["todayScoreRank"]);
            }
            if (bestDatas["todayScore"] != null) {
                this.todayScore = Number(bestDatas["todayScore"]);
            }
            if (bestDatas["weekScore"] != null) {
                this.weekScore = Number(bestDatas["weekScore"]);
            }
            if (bestDatas["monthScore"] != null) {
                this.monthScore = Number(bestDatas["monthScore"]);
            }
            if (bestDatas["yearScore"] != null) {
                this.yearScore = Number(bestDatas["yearScore"]);
            }
            if (bestDatas["bestScore"] != null) {
                this.bestScore = Number(bestDatas["bestScore"]);
            }
        }
    };
    RankInfoData.prototype.saveBestRankData = function () {
        var bestDatas = {};
        bestDatas["bestLevelRank"] = this.bestLevelRank;
        bestDatas["yearScoreRank"] = this.yearScoreRank;
        bestDatas["monthScoreRank"] = this.monthScoreRank;
        bestDatas["weekScoreRank"] = this.weekScoreRank;
        bestDatas["todayScoreRank"] = this.todayScoreRank;
        bestDatas["todayScore"] = this.todayScore;
        bestDatas["weekScore"] = this.weekScore;
        bestDatas["monthScore"] = this.monthScore;
        bestDatas["yearScore"] = this.yearScore;
        bestDatas["bestScore"] = this.bestScore;
        var l4 = JSON.stringify(bestDatas);
        localStorage.setItem("RankInfoData.bestDatas", l4);
    };
    RankInfoData.prototype.getRankData = function (rankType) {
        var rankListClass = new RankLisClasst_1.default();
        var strInfo = '';
        if (rankType == Constants_1.default.RankType.TODAY && this.todayRankInfo != '') {
            strInfo = this.todayRankInfo;
        }
        else if (rankType == Constants_1.default.RankType.WEEK && this.weekRankInfo != '') {
            strInfo = this.weekRankInfo;
        }
        else if (rankType == Constants_1.default.RankType.MONTH && this.monthRankInfo != '') {
            strInfo = this.monthRankInfo;
        }
        else if (rankType == Constants_1.default.RankType.YEAR && this.yearRankInfo != '') {
            strInfo = this.yearRankInfo;
        }
        else if (rankType == Constants_1.default.RankType.ALL && this.bestRankInfo != '') {
            strInfo = this.bestRankInfo;
        }
        else if (rankType == Constants_1.default.RankType.LEVEL && this.bestRankInfo != '') {
            strInfo = this.bestRankLevelInfo;
        }
        if (strInfo != '') {
            var rankInfo = JSON.parse(strInfo);
            rankListClass.isRank = rankInfo._isRank;
            rankListClass.rankType = rankInfo._rankType;
            if (rankInfo != null && rankInfo._firstRank) {
                var firstRank = new Rank_1.default();
                firstRank.name = rankInfo._firstRank._name;
                firstRank.rankNumber = rankInfo._firstRank._rankNumber;
                firstRank.score = rankInfo._firstRank._score;
                firstRank.avatar = rankInfo._firstRank._avatar;
                rankListClass.firstRank = firstRank;
            }
            if (rankInfo != null && rankInfo._secondRank) {
                var secondRank = new Rank_1.default();
                secondRank.name = rankInfo._secondRank._name;
                secondRank.rankNumber = rankInfo._secondRank._rankNumber;
                secondRank.score = rankInfo._secondRank._score;
                secondRank.avatar = rankInfo._secondRank._avatar;
                rankListClass.secondRank = secondRank;
            }
            if (rankInfo != null && rankInfo._thirdRank) {
                var thirdRank = new Rank_1.default();
                thirdRank.name = rankInfo._thirdRank._name;
                thirdRank.rankNumber = rankInfo._thirdRank._rankNumber;
                thirdRank.score = rankInfo._thirdRank._score;
                thirdRank.avatar = rankInfo._thirdRank._avatar;
                rankListClass.thirdRank = thirdRank;
            }
            if (rankInfo != null && rankInfo._currentRank) {
                var currentRank = new Rank_1.default();
                currentRank.name = rankInfo._currentRank._name;
                currentRank.rankNumber = rankInfo._currentRank._rankNumber;
                currentRank.score = rankInfo._currentRank._score;
                currentRank.rankUp = rankInfo._currentRank._rankUp;
                currentRank.avatar = rankInfo._currentRank._avatar;
                rankListClass.currentRank = currentRank;
            }
            if (rankInfo != null && rankInfo._rankList) {
                var rankListArray = [];
                rankListArray.length = rankInfo._rankList.length;
                for (var index = 0; index < rankInfo._rankList.length; index++) {
                    var element = rankInfo._rankList[index];
                    var rank = new Rank_1.default();
                    rank.name = element._name;
                    rank.rankNumber = element._rankNumber;
                    rank.score = element._score;
                    rank.avatar = element._avatar;
                    rank.rankUp = element._rankUp;
                    rankListArray[index] = rank;
                }
                rankListClass.rankList = rankListArray;
            }
        }
        return rankListClass;
    };
    RankInfoData.prototype.saveRankData = function (rankListClass) {
        if (rankListClass == null) {
            return;
        }
        var strInfo = '';
        strInfo = JSON.stringify(rankListClass);
        if (rankListClass.rankType == Constants_1.default.RankType.TODAY) {
            this.todayRankInfo = strInfo;
            if (rankListClass.isRank) {
                if (this.todayScoreRank >= rankListClass.currentRank.rankNumber) {
                    rankListClass.currentRank.rankUp = true;
                }
                else {
                    rankListClass.currentRank.rankUp = false;
                }
                strInfo = JSON.stringify(rankListClass);
                this.todayRankInfo = strInfo;
                this.todayScoreRank = rankListClass.currentRank.rankNumber;
            }
            else {
                this.todayScoreRank = 0;
            }
        }
        if (rankListClass.rankType == Constants_1.default.RankType.WEEK) {
            this.weekRankInfo = strInfo;
            if (rankListClass.isRank) {
                if (this.weekScoreRank >= rankListClass.currentRank.rankNumber) {
                    rankListClass.currentRank.rankUp = true;
                }
                else {
                    rankListClass.currentRank.rankUp = false;
                }
                strInfo = JSON.stringify(rankListClass);
                this.weekRankInfo = strInfo;
                this.weekScoreRank = rankListClass.currentRank.rankNumber;
            }
            else {
                this.weekScoreRank = 0;
            }
        }
        if (rankListClass.rankType == Constants_1.default.RankType.MONTH) {
            this.monthRankInfo = strInfo;
            if (rankListClass.isRank) {
                if (this.monthScoreRank >= rankListClass.currentRank.rankNumber) {
                    rankListClass.currentRank.rankUp = true;
                }
                else {
                    rankListClass.currentRank.rankUp = false;
                }
                strInfo = JSON.stringify(rankListClass);
                this.monthRankInfo = strInfo;
                this.monthScoreRank = rankListClass.currentRank.rankNumber;
            }
            else {
                this.monthScoreRank = 0;
            }
        }
        if (rankListClass.rankType == Constants_1.default.RankType.YEAR) {
            this.yearRankInfo = strInfo;
            if (rankListClass.isRank) {
                if (this.yearScoreRank >= rankListClass.currentRank.rankNumber) {
                    rankListClass.currentRank.rankUp = true;
                }
                else {
                    rankListClass.currentRank.rankUp = false;
                }
                strInfo = JSON.stringify(rankListClass);
                this.yearRankInfo = strInfo;
                this.yearScoreRank = rankListClass.currentRank.rankNumber;
            }
            else {
                this.yearScoreRank = 0;
            }
        }
        if (rankListClass.rankType == Constants_1.default.RankType.ALL) {
            this.bestRankInfo = strInfo;
            if (rankListClass.isRank) {
                if (this.bestScoreRank >= rankListClass.currentRank.rankNumber) {
                    rankListClass.currentRank.rankUp = true;
                }
                else {
                    rankListClass.currentRank.rankUp = false;
                }
                strInfo = JSON.stringify(rankListClass);
                this.bestRankInfo = strInfo;
                this.bestScoreRank = rankListClass.currentRank.rankNumber;
            }
            else {
                this.bestScoreRank = 0;
            }
            this.firstRankInfo = JSON.stringify(rankListClass.firstRank);
            this.secondRankInfo = JSON.stringify(rankListClass.secondRank);
            this.thirdRankInfo = JSON.stringify(rankListClass.thirdRank);
            //   console.log('firstRankInfo',this.firstRankInfo);
        }
        if (rankListClass.rankType == Constants_1.default.RankType.LEVEL) {
            this.bestRankLevelInfo = strInfo;
            if (rankListClass.isRank) {
                if (this.bestLevelRank >= rankListClass.currentRank.rankNumber) {
                    rankListClass.currentRank.rankUp = true;
                }
                else {
                    rankListClass.currentRank.rankUp = false;
                }
                strInfo = JSON.stringify(rankListClass);
                this.bestRankLevelInfo = strInfo;
                this.bestLevelRank = rankListClass.currentRank.rankNumber;
            }
            else {
                this.bestLevelRank = 0;
            }
        }
    };
    //重新进行模拟排名
    RankInfoData.prototype.initRankInfo = function () {
        //如果当天已经生成过排名，用户排名不降，用户排名只有在第二天第一次生成排名是降低
        var isReduce = true;
        if (exports.rankInfoData.todayIsRank) {
            isReduce = false;
        }
        if (this.isRankList) {
            var allRankListClass = RankInfoData_1.cacluateNormalRank(Constants_1.default.RankType.ALL, this.bestScore, isReduce);
            this.saveRankData(allRankListClass);
            var yearRankListClass = RankInfoData_1.cacluateNormalRank(Constants_1.default.RankType.YEAR, this.yearScore, isReduce);
            this.saveRankData(yearRankListClass);
            var monthRankListClass = RankInfoData_1.cacluateNormalRank(Constants_1.default.RankType.MONTH, this.monthScore, isReduce);
            this.saveRankData(monthRankListClass);
            var weekRankListClass = RankInfoData_1.cacluateNormalRank(Constants_1.default.RankType.WEEK, this.weekScore, isReduce);
            this.saveRankData(weekRankListClass);
            var todayRankListClass = RankInfoData_1.cacluateNormalRank(Constants_1.default.RankType.TODAY, this.todayScore, isReduce);
            this.saveRankData(todayRankListClass);
            var levelRankListClass = RankInfoData_1.cacluateNormalRank(Constants_1.default.RankType.LEVEL, DataManager_1.default.instance.levelData.level, isReduce);
            this.saveRankData(levelRankListClass);
            this.isRankList = false;
        }
        this.saveData();
    };
    //计算模拟排名
    //每日统计前300名，最佳统计20000. senceType:排名使用场景   rank 用户直接查看排名,game 游戏过程中重新计算排名，用户一定在榜上，用户排名一定比上一次有进步，取用户的后10名数据。
    //rankNumber 传入的名次，
    RankInfoData.cacluateNormalRank = function (rankType, scoreNumber, isReduce, senceType, rankNumber) {
        //   console.log("enter cacluateEndlessRank");
        if (senceType == null) {
            senceType = 'rank';
        }
        if (rankNumber == null) {
            rankNumber = 0;
        }
        //最高分增长间隔
        var intervalArray = [25, 28, 32, 56, 102, 135, 221];
        var intervalCount = CommonTool_1.default.getRandomByArray(intervalArray);
        //排名上升间隔
        var intervalLevelArray = [1, 2, 2, 2, 3, 3, 4, 5, 6];
        var rankListArray = [];
        //当前分数的排名
        var currRankNum = 0;
        var rankListClass = new RankLisClasst_1.default();
        //第一名分数
        var bestScore = Constants_1.default.RankStartBest.TODAY;
        //总共统计多少名
        var rankCount = Constants_1.default.RankTypeCount.TODAY;
        //上榜最低分数
        var rankScoreLine = 10;
        //最高分数，不能超过
        var maxScore = Constants_1.default.RankBest.TODAY;
        //间隔系数
        var intervalTime = 1;
        //上一次的排名
        var lastRank = exports.rankInfoData.todayScoreRank;
        //名字数组
        var nameArray = Constants_1.default.rankNameArray1;
        var lastFirseRank = null;
        var lastSecondRank = null;
        var lastThirdRank = null;
        if (rankType == Constants_1.default.RankType.TODAY) {
            if (scoreNumber > 2000 && scoreNumber <= 5000) {
                rankCount = rankCount / 2.5 + intervalCount;
            }
            if (scoreNumber > 5000 && scoreNumber <= 10000) {
                rankCount = rankCount / 3 + intervalCount;
            }
            if (scoreNumber > 10000 && scoreNumber <= 30000) {
                rankCount = rankCount / 4 + intervalCount;
            }
            if (scoreNumber > 30000) {
                rankCount = rankCount / 6 + intervalCount;
            }
        }
        if (rankType == Constants_1.default.RankType.WEEK) {
            bestScore = Constants_1.default.RankStartBest.WEEK;
            rankCount = Constants_1.default.RankTypeCount.WEEK;
            rankScoreLine = 10;
            intervalTime = 10;
            intervalCount = intervalCount * intervalTime;
            maxScore = Constants_1.default.RankBest.WEEK;
            nameArray = Constants_1.default.rankNameArray1;
            lastRank = exports.rankInfoData.weekScoreRank;
            if (scoreNumber > 5000 && scoreNumber <= 10000) {
                rankCount = rankCount / 2.5 + intervalCount;
            }
            if (scoreNumber > 10000 && scoreNumber <= 20000) {
                rankCount = rankCount / 3 + intervalCount;
            }
            if (scoreNumber > 20000 && scoreNumber <= 50000) {
                rankCount = rankCount / 4 + intervalCount;
            }
            if (scoreNumber > 50000) {
                rankCount = rankCount / 6 + intervalCount;
            }
        }
        if (rankType == Constants_1.default.RankType.MONTH) {
            bestScore = Constants_1.default.RankStartBest.MONTH;
            rankCount = Constants_1.default.RankTypeCount.MONTH;
            rankScoreLine = 10;
            intervalTime = 20;
            intervalCount = intervalCount * intervalTime;
            maxScore = Constants_1.default.RankBest.MONTH;
            nameArray = Constants_1.default.rankNameArray1;
            lastRank = exports.rankInfoData.monthScoreRank;
            if (scoreNumber > 10000 && scoreNumber <= 20000) {
                rankCount = rankCount / 2.5 + intervalCount;
            }
            if (scoreNumber > 20000 && scoreNumber <= 50000) {
                rankCount = rankCount / 3 + intervalCount;
            }
            if (scoreNumber > 50000 && scoreNumber <= 100000) {
                rankCount = rankCount / 4 + intervalCount;
            }
            if (scoreNumber > 100000) {
                rankCount = rankCount / 6 + intervalCount;
            }
        }
        if (rankType == Constants_1.default.RankType.YEAR) {
            bestScore = Constants_1.default.RankStartBest.YEAR;
            rankCount = Constants_1.default.RankTypeCount.YEAR;
            rankScoreLine = 10;
            intervalTime = 30;
            intervalCount = intervalCount * intervalTime;
            maxScore = Constants_1.default.RankBest.YEAR;
            nameArray = Constants_1.default.rankNameArray1;
            lastRank = exports.rankInfoData.yearScoreRank;
            if (scoreNumber > 200000 && scoreNumber <= 500000) {
                rankCount = rankCount / 2.5 + intervalCount;
            }
            if (scoreNumber > 500000 && scoreNumber <= 1000000) {
                rankCount = rankCount / 3 + intervalCount;
            }
            if (scoreNumber > 100000 && scoreNumber <= 2000000) {
                rankCount = rankCount / 4 + intervalCount;
            }
            if (scoreNumber > 2000000) {
                rankCount = rankCount / 6 + intervalCount;
            }
        }
        if (rankType == Constants_1.default.RankType.ALL) {
            if (exports.rankInfoData.firstRankInfo != '') {
                lastFirseRank = new Rank_1.default();
                var rankInfo = JSON.parse(exports.rankInfoData.firstRankInfo);
                lastFirseRank.name = rankInfo._name;
                lastFirseRank.rankNumber = rankInfo._rankNumber;
                lastFirseRank.score = rankInfo._score;
                lastFirseRank.avatar = rankInfo._avatar;
            }
            if (exports.rankInfoData.secondRankInfo != '') {
                var rankInfo = JSON.parse(exports.rankInfoData.secondRankInfo);
                lastSecondRank = new Rank_1.default();
                lastSecondRank.name = rankInfo._name;
                lastSecondRank.rankNumber = rankInfo._rankNumber;
                lastSecondRank.score = rankInfo._score;
                lastSecondRank.avatar = rankInfo._avatar;
            }
            if (exports.rankInfoData.thirdRankInfo != '') {
                var rankInfo = JSON.parse(exports.rankInfoData.thirdRankInfo);
                lastThirdRank = new Rank_1.default();
                lastThirdRank.name = rankInfo._name;
                lastThirdRank.rankNumber = rankInfo._rankNumber;
                lastThirdRank.score = rankInfo._score;
                lastThirdRank.avatar = rankInfo._avatar;
            }
            bestScore = Constants_1.default.RankStartBest.ALL;
            rankCount = Constants_1.default.RankTypeCount.ALL;
            rankScoreLine = 10;
            intervalTime = 50;
            intervalCount = intervalCount * intervalTime;
            maxScore = Constants_1.default.RankBest.ALL;
            nameArray = Constants_1.default.rankNameArray1;
            lastRank = exports.rankInfoData.bestScoreRank;
            if (scoreNumber > 200000 && scoreNumber <= 500000) {
                rankCount = rankCount / 2.5 + intervalCount;
            }
            if (scoreNumber > 500000 && scoreNumber <= 1000000) {
                rankCount = rankCount / 3 + intervalCount;
            }
            if (scoreNumber > 100000 && scoreNumber <= 2000000) {
                rankCount = rankCount / 4 + intervalCount;
            }
            if (scoreNumber > 2000000) {
                rankCount = rankCount / 6 + intervalCount;
            }
        }
        if (rankType == Constants_1.default.RankType.LEVEL) {
            var intervalArray_1 = [0, 1, 1, 1, 2, 2, 2, 3, 3, 4, 5];
            var intervalCount_1 = CommonTool_1.default.getRandomByArray(intervalArray_1);
            bestScore = Constants_1.default.RankStartBest.LEVEL;
            rankCount = Constants_1.default.RankTypeCount.LEVEL;
            rankScoreLine = 2;
            intervalTime = 2;
            intervalCount_1 = intervalCount_1 * intervalTime;
            maxScore = Constants_1.default.RankBest.LEVEL;
            nameArray = Constants_1.default.rankNameArray1;
            lastRank = exports.rankInfoData.bestLevelRank;
            if (scoreNumber > 10 && scoreNumber <= 50) {
                rankCount = rankCount / 2.5 + intervalCount_1;
            }
            if (scoreNumber > 50 && scoreNumber <= 100) {
                rankCount = rankCount / 3 + intervalCount_1;
            }
            if (scoreNumber > 100 && scoreNumber <= 200) {
                rankCount = rankCount / 4 + intervalCount_1;
            }
            if (scoreNumber > 200) {
                rankCount = rankCount / 6 + intervalCount_1;
            }
        }
        var days = DateUtil_1.DateUtil.getDiffDay(DateUtil_1.DateUtil.formatDate(new Date()), Constants_1.default.StartRankDate);
        //    console.log('intervalCount',intervalCount);
        //    console.log('days',days);
        //     console.log('rankScoreLine',rankScoreLine);
        if (days > 1) {
            if (days > 30) {
                days = 30;
            }
            bestScore = bestScore + days * intervalCount;
            if (rankType == Constants_1.default.RankType.ALL) {
                rankScoreLine = rankScoreLine + Math.round(days * intervalCount) / intervalTime;
            }
            if (bestScore > maxScore) {
                bestScore = maxScore;
            }
        }
        //   console.log('rankScoreLine2',rankScoreLine);
        //   console.log('lastRank',lastRank);
        //   console.log('bestScore',bestScore);
        //每个名次相差分数
        var todayInterval = (bestScore - rankScoreLine) / rankCount;
        currRankNum = Math.floor(rankCount - (scoreNumber / (todayInterval)));
        //   console.log('currRankNump00',currRankNum);
        //如果是每天日常更新，需要降低名次
        /*if(lastRank>0){
            if(isReduce){
                if(currRankNum<=lastRank){
                    currRankNum=lastRank+CommonTool.getRandomByArray(intervalLevelArray);
                }
            }else{
                if(currRankNum>=lastRank){
                    currRankNum=lastRank-CommonTool.getRandomByArray(intervalLevelArray);
                 //   console.log('currRankNump111',currRankNum);
                }
            }
        }*/
        if (rankNumber > 0) {
            currRankNum = rankNumber;
        }
        if (currRankNum < 1)
            currRankNum = 1;
        //  console.log('currRankNump11',currRankNum);
        //  console.log('currRankNump  rankInfoData',lastFirseRank);
        //console.log('currRankNump  rankInfoData222',lastFirseRank.score);
        //如果当前分数在前三名，需要和当天前面计算的前三名比较
        if (currRankNum <= 3 && exports.rankInfoData.todayIsRank && rankType == Constants_1.default.RankType.ALL) {
            if (currRankNum == 1 && exports.rankInfoData.firstRankInfo != '' && lastFirseRank != null) {
                if (scoreNumber < lastFirseRank.score) {
                    currRankNum = 2;
                }
            }
            if (currRankNum == 2 && exports.rankInfoData.secondRankInfo != '' && lastSecondRank != null) {
                if (scoreNumber < lastSecondRank.score) {
                    currRankNum = 3;
                }
            }
            if (currRankNum == 3 && exports.rankInfoData.thirdRankInfo != '' && lastThirdRank != null) {
                if (scoreNumber < lastThirdRank.score) {
                    currRankNum = 4;
                }
            }
        }
        //  console.log('currRankNump22',currRankNum);
        //需要显示的后面排名个数，默认5个
        var prevIndexs = 5;
        if (currRankNum < 5) {
            prevIndexs = 15 - currRankNum;
        }
        //需要显示的前面排名个数，
        var nextIndexs = 15 - prevIndexs;
        //前面不足5个，少显示一个
        if (currRankNum <= 5) {
            nextIndexs = nextIndexs - 1;
        }
        //排名未上榜 不在前15名
        if (currRankNum > 15) {
            //currRankNum=rankCount+1;
            nextIndexs = 15;
            prevIndexs = 0;
        }
        if (senceType == 'game') {
            nextIndexs = 0;
            prevIndexs = 10;
        }
        //长度10或者9
        rankListArray.length = prevIndexs + nextIndexs;
        //  console.log('todayInterval',todayInterval);
        //   console.log('currRankNum',currRankNum);
        //  console.log('nextIndexs',nextIndexs);
        //   console.log('prevIndexs',prevIndexs);
        //上一个排名的分数
        var prevScore = scoreNumber;
        var lastName = '';
        if (scoreNumber < rankScoreLine) {
            prevScore = rankScoreLine;
        }
        if (scoreNumber > bestScore || currRankNum > 15) {
            prevScore = bestScore;
        }
        //如果当前分数小于最高分数的5分之一，间隔系数减少一半。大于5分之4，间隔分数增加一倍。
        if (scoreNumber < bestScore / 20) {
            intervalTime = intervalTime / 4;
        }
        else if (scoreNumber < bestScore / 5) {
            intervalTime = intervalTime / 2;
        }
        else if (scoreNumber > bestScore * 4 / 5) {
            intervalTime = intervalTime * 2;
        }
        //这里循环取出前面nextIndexs个的排名
        for (var index = nextIndexs - 1; index >= 0; index--) {
            intervalCount = CommonTool_1.default.getRandomByArray(intervalArray);
            var rank = new Rank_1.default();
            var nameStr = CommonTool_1.default.getRandomByArray(nameArray).split('-');
            if (nameStr[0] == lastName) {
                nameStr = CommonTool_1.default.getRandomByArray(Constants_1.default.rankNameArray1).split('-');
            }
            lastName = nameStr[0];
            rank.name = nameStr[0];
            if (nameStr.length > 1) {
                rank.avatar = nameStr[1];
            }
            rank.rankUp = CommonTool_1.default.getRandomByArray([true, false]);
            if (currRankNum > 15) {
                rank.rankNumber = 15 - nextIndexs + index + 1;
            }
            else {
                rank.rankNumber = currRankNum - nextIndexs + index;
            }
            var score = prevScore + (intervalCount * intervalTime) + CommonTool_1.default.getRandomByArray(intervalArray);
            if (score < scoreNumber) {
                score = scoreNumber + intervalTime;
            }
            score = Math.round(score);
            rank.score = score;
            prevScore = score;
            rankListClass.setTopThreeRanks(rank);
            rankListArray[index] = rank;
        }
        //这里循环取出后面prevIndexs的排名
        for (var index = 0; index < prevIndexs; index++) {
            intervalCount = CommonTool_1.default.getRandomByArray(intervalArray);
            var rank = new Rank_1.default();
            var nameStr = CommonTool_1.default.getRandomByArray(nameArray).split('-');
            if (nameStr[0] == lastName) {
                nameStr = CommonTool_1.default.getRandomByArray(Constants_1.default.rankNameArray1).split('-');
            }
            lastName = nameStr[0];
            rank.name = nameStr[0];
            if (nameStr.length > 1) {
                rank.avatar = nameStr[1];
            }
            rank.rankUp = CommonTool_1.default.getRandomByArray([true, false]);
            rank.rankNumber = currRankNum + index + 1;
            var score = prevScore - intervalCount * intervalTime - CommonTool_1.default.getRandomByArray(intervalArray);
            if (score < rankScoreLine) {
                score = rankScoreLine + (prevIndexs - index);
            }
            if (score > scoreNumber) {
                score = scoreNumber - intervalTime;
            }
            score = Math.round(score);
            rank.score = score;
            prevScore = score;
            if ((nextIndexs + index) >= rankListArray.length) {
                break;
            }
            rankListClass.setTopThreeRanks(rank);
            rankListArray[nextIndexs + index] = rank;
        }
        // console.log('rank.score000000000',rankListArray[9].score);
        //打包返回对象
        rankListClass.rankList = rankListArray;
        var currRank = new Rank_1.default();
        currRank.rankNumber = currRankNum;
        currRank.score = scoreNumber;
        if (exports.rankInfoData.rankName != '') {
            currRank.name = exports.rankInfoData.rankName;
        }
        else {
            currRank.name = 'Me';
        }
        if (exports.rankInfoData.rankAvatar != '') {
            currRank.avatar = exports.rankInfoData.rankAvatar;
        }
        else {
            var nameStr = CommonTool_1.default.getRandomByArray(nameArray).split('-');
            if (nameStr.length > 1) {
                currRank.avatar = nameStr[1];
            }
        }
        //   console.log('rank.score111111111111',rankListArray[9].score);
        if (senceType == 'game' || lastRank > currRankNum) {
            currRank.rankUp = true;
        }
        else {
            currRank.rankUp = false;
        }
        rankListClass.currentRank = currRank;
        rankListClass.setTopThreeRanks(currRank);
        rankListClass.rankType = rankType;
        rankListClass.rankScoreLine = rankScoreLine;
        rankListClass.isRank = true;
        //    console.log('rankScoreLine',rankScoreLine);
        //  console.log('rank.score11111111111111',rankListArray[9].score);
        //未上榜
        if (scoreNumber < rankScoreLine) {
            if (rankListClass.rankList[rankListClass.rankList.length - 1] != null) {
                rankListClass.rankList[rankListClass.rankList.length - 1].score = rankScoreLine;
            }
            rankListClass.isRank = false;
        }
        //生成前三名
        if (rankListClass.firstRank == null) {
            var firstRank = new Rank_1.default();
            if (exports.rankInfoData.todayIsRank && lastFirseRank != null) {
                firstRank = lastFirseRank;
            }
            else {
                var nameStr = CommonTool_1.default.getRandomByArray(nameArray).split('-');
                if (nameStr[0] == lastName) {
                    nameStr = CommonTool_1.default.getRandomByArray(Constants_1.default.rankNameArray1).split('-');
                }
                lastName = nameStr[0];
                firstRank.name = nameStr[0];
                if (nameStr.length > 1) {
                    firstRank.avatar = nameStr[1];
                }
                firstRank.rankUp = true;
                firstRank.rankNumber = 1;
                firstRank.score = bestScore;
            }
            rankListClass.firstRank = firstRank;
        }
        //增加前几名分数间隔
        if (rankType == Constants_1.default.RankType.TODAY) {
            intervalTime = intervalTime * 2;
        }
        else if (rankType == Constants_1.default.RankType.WEEK) {
            intervalTime = intervalTime * 5;
        }
        else if (rankType == Constants_1.default.RankType.MONTH) {
            intervalTime = intervalTime * 10;
        }
        else if (rankType == Constants_1.default.RankType.YEAR) {
            intervalTime = intervalTime * 50;
        }
        else if (rankType == Constants_1.default.RankType.ALL) {
            intervalTime = intervalTime * 50;
        }
        else if (rankType == Constants_1.default.RankType.LEVEL) {
            intervalTime = intervalTime * 2;
        }
        //   console.log('firstRank',rankListClass.firstRank);
        if (rankListClass.secondRank == null) {
            var secondRank = new Rank_1.default();
            if (exports.rankInfoData.todayIsRank && lastSecondRank != null) {
                secondRank = lastSecondRank;
            }
            else {
                var nameStr = CommonTool_1.default.getRandomByArray(nameArray).split('-');
                if (nameStr[0] == lastName) {
                    nameStr = CommonTool_1.default.getRandomByArray(Constants_1.default.rankNameArray1).split('-');
                }
                lastName = nameStr[0];
                secondRank.name = nameStr[0];
                if (nameStr.length > 1) {
                    secondRank.avatar = nameStr[1];
                }
                secondRank.rankNumber = 2;
                secondRank.score = rankListClass.firstRank.score - CommonTool_1.default.getRandomByArray(intervalArray) * (intervalTime + 1) - CommonTool_1.default.getRandomByArray(intervalArray);
            }
            rankListClass.secondRank = secondRank;
        }
        //  console.log('secondRank',rankListClass.secondRank);
        if (rankListClass.thirdRank == null) {
            var thirdRank = new Rank_1.default();
            if (exports.rankInfoData.todayIsRank && lastThirdRank != null) {
                thirdRank = lastThirdRank;
            }
            else {
                var nameStr = CommonTool_1.default.getRandomByArray(nameArray).split('-');
                if (nameStr[0] == lastName) {
                    nameStr = CommonTool_1.default.getRandomByArray(Constants_1.default.rankNameArray1).split('-');
                }
                lastName = nameStr[0];
                thirdRank.name = nameStr[0];
                if (nameStr.length > 1) {
                    thirdRank.avatar = nameStr[1];
                }
                thirdRank.rankNumber = 3;
                thirdRank.score = rankListClass.secondRank.score - CommonTool_1.default.getRandomByArray(intervalArray) * (intervalTime) - CommonTool_1.default.getRandomByArray(intervalArray);
            }
            //如果第四名的分数比第三名高，修改第三名的分数
            var forthRank = rankListArray[0];
            if (forthRank.rankNumber == 4 && forthRank.score > thirdRank.score) {
                rankListClass.thirdRank.score = forthRank.score + CommonTool_1.default.getRandomByArray(intervalArray);
            }
            //如果第三名的分数比第二名高，修改第二名的分数
            if (rankListClass.secondRank.score < thirdRank.score) {
                rankListClass.secondRank.score = thirdRank.score + CommonTool_1.default.getRandomByArray(intervalArray) * 2;
            }
            rankListClass.thirdRank = thirdRank;
        }
        //   console.log('thirdRank',rankListClass.thirdRank);
        //  console.log('rankListClass',rankListClass);
        exports.rankInfoData.todayIsRank = true;
        return rankListClass;
    };
    var RankInfoData_1;
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "isRankList", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "todayIsRank", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "firstRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "secondRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "thirdRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "bestRankLevelInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "bestRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "todayRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "weekRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "monthRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "yearRankInfo", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "rankName", void 0);
    __decorate([
        SystemData_1.field()
    ], RankInfoData.prototype, "rankAvatar", void 0);
    RankInfoData = RankInfoData_1 = __decorate([
        SystemData_1.dc("RankInfoData")
    ], RankInfoData);
    return RankInfoData;
}(SystemData_1.default));
exports.default = RankInfoData;
exports.rankInfoData = SystemData_1.default.register(RankInfoData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGFjZW50ZXIvUmFua0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQyxzREFBZ0U7QUFDaEUsNERBQXVEO0FBQ3ZELHdEQUF1RDtBQUN2RCxzREFBaUQ7QUFDakQscUNBQWdDO0FBQ2hDLHVEQUFrRDtBQUlsRDtJQUEyQyxnQ0FBVTtJQXNGakQ7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFuRkQsdUJBQXVCO1FBRXZCLGdCQUFVLEdBQVcsS0FBSyxDQUFDO1FBRTNCLGFBQWE7UUFFYixpQkFBVyxHQUFDLEtBQUssQ0FBQztRQUVsQixZQUFZO1FBRVosbUJBQWEsR0FBUSxFQUFFLENBQUM7UUFFeEIsWUFBWTtRQUVaLG9CQUFjLEdBQVEsRUFBRSxDQUFDO1FBRXpCLFlBQVk7UUFFWixtQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUV4QixVQUFVO1FBRVYsdUJBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRzVCLGNBQWM7UUFFZCxrQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUV2QixnQkFBZ0I7UUFFaEIsbUJBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsT0FBTztRQUVQLGtCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLE9BQU87UUFFUixtQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN2QixPQUFPO1FBRVAsa0JBQVksR0FBUSxFQUFFLENBQUM7UUFFdEIsU0FBUztRQUVWLGNBQVEsR0FBUSxFQUFFLENBQUM7UUFFbkIsU0FBUztRQUVULGdCQUFVLEdBQVEsRUFBRSxDQUFDO1FBR3JCLGFBQWE7UUFDYixtQkFBYSxHQUFVLENBQUMsQ0FBQztRQUV6QixZQUFZO1FBQ1osbUJBQWEsR0FBVSxDQUFDLENBQUM7UUFDekIsWUFBWTtRQUNaLG1CQUFhLEdBQVUsQ0FBQyxDQUFDO1FBQ3pCLFlBQVk7UUFDWixvQkFBYyxHQUFVLENBQUMsQ0FBQztRQUMx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QUNyRCxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUMzQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxhQUFhLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQzthQUNyQztZQUNELElBQUcsUUFBUSxJQUFFLElBQUksSUFBRSxRQUFRLENBQUMsV0FBVyxFQUFDO2dCQUNwQyxJQUFJLFVBQVUsR0FBTSxJQUFJLGNBQUksRUFBRSxDQUFDO2dCQUMvQixVQUFVLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxVQUFVLENBQUMsVUFBVSxHQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUN2RCxVQUFVLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUM3QyxVQUFVLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUMvQyxhQUFhLENBQUMsVUFBVSxHQUFDLFVBQVUsQ0FBQzthQUN2QztZQUNELElBQUcsUUFBUSxJQUFFLElBQUksSUFBRSxRQUFRLENBQUMsVUFBVSxFQUFDO2dCQUNuQyxJQUFJLFNBQVMsR0FBTSxJQUFJLGNBQUksRUFBRSxDQUFDO2dCQUM5QixTQUFTLENBQUMsSUFBSSxHQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUN6QyxTQUFTLENBQUMsVUFBVSxHQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2dCQUNyRCxTQUFTLENBQUMsS0FBSyxHQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUMzQyxTQUFTLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxhQUFhLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQzthQUNyQztZQUNELElBQUcsUUFBUSxJQUFF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Y0FBYyxDQUFDO09BQ0UsWUFBWSxDQTQzQmhDO0lBQUQsbUJBQUM7Q0E1M0JELEFBNDNCQyxDQTUzQjBDLG9CQUFVLEdBNDNCcEQ7a0JBNTNCb0IsWUFBWTtBQTgzQnRCLFFBQUEsWUFBWSxHQUFnQixvQkFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgU3lzdGVtRGF0YSwgeyBkYywgZmllbGQgfSBmcm9tIFwiLi4vZnJhbWV3b3JrL1N5c3RlbURhdGFcIjtcclxuaW1wb3J0IENvbW1vblRvb2wgZnJvbSBcIi4uL2ZyYW1ld29yay91dGlscy9Db21tb25Ub29sXCI7XHJcbmltcG9ydCB7IERhdGVVdGlsIH0gZnJvbSBcIi4uL2ZyYW1ld29yay91dGlscy9EYXRlVXRpbFwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFJhbmsgZnJvbSBcIi4uL3JhbmsvUmFua1wiO1xyXG5pbXBvcnQgUmFua0xpc3RDbGFzcyBmcm9tIFwiLi4vcmFuay9SYW5rTGlzQ2xhc3N0XCI7XHJcblxyXG5cclxuQGRjKFwiUmFua0luZm9EYXRhXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtJbmZvRGF0YSAgZXh0ZW5kcyBTeXN0ZW1EYXRhe1xyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+aYr+WQpumcgOimgemHjeaWsOeUn+aIkOaOkuWQje+8jOmAmui/h+S4gOWFs+mHjeaWsOeUn+aIkOaOkuWQjVxyXG4gICAgQGZpZWxkKClcclxuICAgIGlzUmFua0xpc3Q6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v5b2T5aSp5piv5ZCm6YeN5paw55Sf5oiQ6L+H5o6S5ZCNXHJcbiAgICBAZmllbGQoKVxyXG4gICAgdG9kYXlJc1Jhbms9ZmFsc2U7XHJcblxyXG4gICAgLy/ljoblj7LmnIDpq5jliIbnrKzkuIDlkI3mlbDmja5cclxuICAgIEBmaWVsZCgpXHJcbiAgICBmaXJzdFJhbmtJbmZvOnN0cmluZz0nJztcclxuXHJcbiAgICAvL+WOhuWPsuacgOmrmOWIhuesrOS6jOWQjeaVsOaNrlxyXG4gICAgQGZpZWxkKClcclxuICAgIHNlY29uZFJhbmtJbmZvOnN0cmluZz0nJztcclxuXHJcbiAgICAvL+WOhuWPsuacgOmrmOWIhuesrOS4ieWQjeaVsOaNrlxyXG4gICAgQGZpZWxkKClcclxuICAgIHRoaXJkUmFua0luZm86c3RyaW5nPScnO1xyXG5cclxuICAgIC8v55So5oi357qn5Yir5o6S5ZCN5pWw5o2uXHJcbiAgICBAZmllbGQoKVxyXG4gICAgYmVzdFJhbmtMZXZlbEluZm86c3RyaW5nPScnO1xyXG5cclxuXHJcbiAgICAvL+eUqOaIt+WOhuWPsuacgOmrmOWIhueahOaOkuWQjeaVsOaNrlxyXG4gICAgQGZpZWxkKClcclxuICAgIGJlc3RSYW5rSW5mbzpzdHJpbmc9Jyc7XHJcblxyXG4gICAgLy/nlKjmiLfku4rlpKnmiZPliLDnmoTmnIDpq5jliIbmjpLlkI3mlbDmja5cclxuICAgIEBmaWVsZCgpXHJcbiAgICB0b2RheVJhbmtJbmZvOnN0cmluZz0nJzsgICAgIFxyXG4gICAgLy/lkajmjpLlkI3mlbDmja5cclxuICAgIEBmaWVsZCgpXHJcbiAgICB3ZWVrUmFua0luZm86c3RyaW5nPScnOyAgIFxyXG4gICAgLy/mnIjmjpLlkI3mlbDmja5cclxuICAgIEBmaWVsZCgpXHJcbiAgIG1vbnRoUmFua0luZm86c3RyaW5nPScnOyAgXHJcbiAgICAvL+W5tOaOkuWQjeaVsOaNrlxyXG4gICAgQGZpZWxkKClcclxuICAgIHllYXJSYW5rSW5mbzpzdHJpbmc9Jyc7ICBcclxuXHJcbiAgICAgLy/nlKjmiLfovpPlhaXnmoTlp5PlkI1cclxuICAgICBAZmllbGQoKVxyXG4gICAgcmFua05hbWU6c3RyaW5nPScnO1xyXG5cclxuICAgIC8v55So5oi36YCJ5oup55qE5aS05YOPXHJcbiAgICBAZmllbGQoKVxyXG4gICAgcmFua0F2YXRhcjpzdHJpbmc9Jyc7XHJcblxyXG5cclxuICAgIC8v55So5oi35Y6G5Y+y5pyA6auY6YCa5YWz55qE5o6S5ZCNXHJcbiAgICBiZXN0TGV2ZWxSYW5rOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy/nlKjmiLfljoblj7LmiZPnmoTliIbmlbDmjpLlkI1cclxuICAgIGJlc3RTY29yZVJhbms6bnVtYmVyID0gMDtcclxuICAgIC8v55So5oi35LuK5bm05omT55qE5YiG5pWw5o6S5ZCNXHJcbiAgICB5ZWFyU2NvcmVSYW5rOm51bWJlciA9IDA7XHJcbiAgICAvL+eUqOaIt+acrOaciOaJk+eahOWIhuaVsOaOkuWQjVxyXG4gICAgbW9udGhTY29yZVJhbms6bnVtYmVyID0gMDtcclxuICAgIC8v55So5oi35pys5ZGo5omT55qE5YiG5pWw5o6S5ZCNXHJcbiAgICB3ZWVrU2NvcmVSYW5rOm51bWJlciA9IDA7XHJcbiAgICAvL+eUqOaIt+S7iuWkqeaJk+eahOWIhuaVsOaOkuWQjVxyXG4gICAgdG9kYXlTY29yZVJhbms6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvL+eUqOaIt+W9k+Wkqea2iOmZpOWIhuaVsFxyXG4gICAgdG9kYXlTY29yZTpudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgLy/nlKjmiLflkajmtojpmaTliIbmlbBcclxuICAgIHdlZWtTY29yZTpudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgLy/nlKjmiLfmnIjmtojpmaTliIbmlbBcclxuICAgIG1vbnRoU2NvcmU6bnVtYmVyID0gMTAwMDtcclxuXHJcbiAgICAvL+eUqOaIt+W5tOa2iOmZpOWIhuaVsFxyXG4gICAgeWVhclNjb3JlOm51bWJlciA9IDEwMDAwO1xyXG5cclxuICAgIC8v55So5oi35Y6G5Y+y5raI6Zmk5YiG5pWwXHJcbiAgICBiZXN0U2NvcmU6bnVtYmVyID0gMTAwMDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxvYWRCZXN0UmFua0RhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQmVzdFJhbmtEYXRhKCl7XHJcbiAgICAgICAgbGV0IHN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUmFua0luZm9EYXRhLmJlc3REYXRhc1wiKTtcclxuICAgICAgICBpZiAoc3RyKXtcclxuICAgICAgICAgICAgbGV0ICBiZXN0RGF0YXM9IEpTT04ucGFyc2Uoc3RyKTsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGJlc3REYXRhc1tcImJlc3RMZXZlbFJhbmtcIl0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXN0TGV2ZWxSYW5rID0gIE51bWJlcihiZXN0RGF0YXNbXCJiZXN0TGV2ZWxSYW5rXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihiZXN0RGF0YXNbXCJ5ZWFyU2NvcmVSYW5rXCJdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMueWVhclNjb3JlUmFuayA9ICBOdW1iZXIoYmVzdERhdGFzW1wieWVhclNjb3JlUmFua1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYmVzdERhdGFzW1wibW9udGhTY29yZVJhbmtcIl0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aFNjb3JlUmFuayA9ICBOdW1iZXIoYmVzdERhdGFzW1wibW9udGhTY29yZVJhbmtcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJlc3REYXRhc1tcIndlZWtTY29yZVJhbmtcIl0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrU2NvcmVSYW5rID0gIE51bWJlcihiZXN0RGF0YXNbXCJ3ZWVrU2NvcmVSYW5rXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihiZXN0RGF0YXNbXCJ0b2RheVNjb3JlUmFua1wiXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5U2NvcmVSYW5rID0gIE51bWJlcihiZXN0RGF0YXNbXCJ0b2RheVNjb3JlUmFua1wiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYmVzdERhdGFzW1widG9kYXlTY29yZVwiXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5U2NvcmUgPSAgTnVtYmVyKGJlc3REYXRhc1tcInRvZGF5U2NvcmVcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJlc3REYXRhc1tcIndlZWtTY29yZVwiXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtTY29yZSA9ICBOdW1iZXIoYmVzdERhdGFzW1wid2Vla1Njb3JlXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihiZXN0RGF0YXNbXCJtb250aFNjb3JlXCJdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhTY29yZSA9ICBOdW1iZXIoYmVzdERhdGFzW1wibW9udGhTY29yZVwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYmVzdERhdGFzW1wieWVhclNjb3JlXCJdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMueWVhclNjb3JlID0gIE51bWJlcihiZXN0RGF0YXNbXCJ5ZWFyU2NvcmVcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJlc3REYXRhc1tcImJlc3RTY29yZVwiXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlc3RTY29yZSA9ICBOdW1iZXIoYmVzdERhdGFzW1wiYmVzdFNjb3JlXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUJlc3RSYW5rRGF0YSgpe1xyXG4gICAgICAgIGxldCAgYmVzdERhdGFzPSB7fTsgIFxyXG4gICAgICAgIGJlc3REYXRhc1tcImJlc3RMZXZlbFJhbmtcIl09dGhpcy5iZXN0TGV2ZWxSYW5rO1xyXG4gICAgICAgIGJlc3REYXRhc1tcInllYXJTY29yZVJhbmtcIl09dGhpcy55ZWFyU2NvcmVSYW5rO1xyXG4gICAgICAgIGJlc3REYXRhc1tcIm1vbnRoU2NvcmVSYW5rXCJdPXRoaXMubW9udGhTY29yZVJhbms7XHJcbiAgICAgICAgYmVzdERhdGFzW1wid2Vla1Njb3JlUmFua1wiXT10aGlzLndlZWtTY29yZVJhbms7ICBcclxuICAgICAgICBiZXN0RGF0YXNbXCJ0b2RheVNjb3JlUmFua1wiXT10aGlzLnRvZGF5U2NvcmVSYW5rOyBcclxuICAgICAgICBiZXN0RGF0YXNbXCJ0b2RheVNjb3JlXCJdPXRoaXMudG9kYXlTY29yZTsgIFxyXG4gICAgICAgIGJlc3REYXRhc1tcIndlZWtTY29yZVwiXT10aGlzLndlZWtTY29yZTsgIFxyXG4gICAgICAgIGJlc3REYXRhc1tcIm1vbnRoU2NvcmVcIl09dGhpcy5tb250aFNjb3JlOyAgXHJcbiAgICAgICAgYmVzdERhdGFzW1wieWVhclNjb3JlXCJdPXRoaXMueWVhclNjb3JlOyAgXHJcbiAgICAgICAgYmVzdERhdGFzW1wiYmVzdFNjb3JlXCJdPXRoaXMuYmVzdFNjb3JlOyAgICAgICBcclxuICAgICAgICBsZXQgbDQgPSBKU09OLnN0cmluZ2lmeShiZXN0RGF0YXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUmFua0luZm9EYXRhLmJlc3REYXRhc1wiLGw0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5rRGF0YShyYW5rVHlwZTpzdHJpbmcpOlJhbmtMaXN0Q2xhc3N7XHJcbiAgICAgICAgbGV0IHJhbmtMaXN0Q2xhc3M6UmFua0xpc3RDbGFzcz1uZXcgUmFua0xpc3RDbGFzcygpO1xyXG4gICAgICAgIGxldCBzdHJJbmZvPScnO1xyXG4gICAgICAgIGlmKHJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuVE9EQVkmJnRoaXMudG9kYXlSYW5rSW5mbyE9Jycpe1xyXG4gICAgICAgICAgICBzdHJJbmZvPXRoaXMudG9kYXlSYW5rSW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLldFRUsmJnRoaXMud2Vla1JhbmtJbmZvIT0nJyl7XHJcbiAgICAgICAgICAgIHN0ckluZm89dGhpcy53ZWVrUmFua0luZm87XHJcbiAgICAgICAgfWVsc2UgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5NT05USCYmdGhpcy5tb250aFJhbmtJbmZvIT0nJyl7XHJcbiAgICAgICAgICAgIHN0ckluZm89dGhpcy5tb250aFJhbmtJbmZvO1xyXG4gICAgICAgIH1lbHNlIGlmKHJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuWUVBUiYmdGhpcy55ZWFyUmFua0luZm8hPScnKXtcclxuICAgICAgICAgICAgc3RySW5mbz10aGlzLnllYXJSYW5rSW5mbztcclxuICAgICAgICB9ZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkFMTCYmdGhpcy5iZXN0UmFua0luZm8hPScnKXtcclxuICAgICAgICAgICAgc3RySW5mbz10aGlzLmJlc3RSYW5rSW5mbztcclxuICAgICAgICB9ZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkxFVkVMJiZ0aGlzLmJlc3RSYW5rSW5mbyE9Jycpe1xyXG4gICAgICAgICAgICBzdHJJbmZvPXRoaXMuYmVzdFJhbmtMZXZlbEluZm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0ckluZm8hPScnKXtcclxuICAgICAgICAgICAgbGV0IHJhbmtJbmZvPUpTT04ucGFyc2Uoc3RySW5mbyk7XHJcbiAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuaXNSYW5rPXJhbmtJbmZvLl9pc1Jhbms7XHJcbiAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MucmFua1R5cGU9cmFua0luZm8uX3JhbmtUeXBlO1xyXG4gICAgICAgICAgICBpZihyYW5rSW5mbyE9bnVsbCYmcmFua0luZm8uX2ZpcnN0UmFuayl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmlyc3RSYW5rOlJhbms9bmV3IFJhbmsoKTtcclxuICAgICAgICAgICAgICAgIGZpcnN0UmFuay5uYW1lPXJhbmtJbmZvLl9maXJzdFJhbmsuX25hbWU7XHJcbiAgICAgICAgICAgICAgICBmaXJzdFJhbmsucmFua051bWJlcj1yYW5rSW5mby5fZmlyc3RSYW5rLl9yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgZmlyc3RSYW5rLnNjb3JlPXJhbmtJbmZvLl9maXJzdFJhbmsuX3Njb3JlO1xyXG4gICAgICAgICAgICAgICAgZmlyc3RSYW5rLmF2YXRhcj1yYW5rSW5mby5fZmlyc3RSYW5rLl9hdmF0YXI7XHJcbiAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLmZpcnN0UmFuaz1maXJzdFJhbms7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmFua0luZm8hPW51bGwmJnJhbmtJbmZvLl9zZWNvbmRSYW5rKXtcclxuICAgICAgICAgICAgICAgIGxldCBzZWNvbmRSYW5rOlJhbms9bmV3IFJhbmsoKTtcclxuICAgICAgICAgICAgICAgIHNlY29uZFJhbmsubmFtZT1yYW5rSW5mby5fc2Vjb25kUmFuay5fbmFtZTtcclxuICAgICAgICAgICAgICAgIHNlY29uZFJhbmsucmFua051bWJlcj1yYW5rSW5mby5fc2Vjb25kUmFuay5fcmFua051bWJlcjtcclxuICAgICAgICAgICAgICAgIHNlY29uZFJhbmsuc2NvcmU9cmFua0luZm8uX3NlY29uZFJhbmsuX3Njb3JlO1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kUmFuay5hdmF0YXI9cmFua0luZm8uX3NlY29uZFJhbmsuX2F2YXRhcjtcclxuICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3Muc2Vjb25kUmFuaz1zZWNvbmRSYW5rO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJhbmtJbmZvIT1udWxsJiZyYW5rSW5mby5fdGhpcmRSYW5rKXtcclxuICAgICAgICAgICAgICAgIGxldCB0aGlyZFJhbms6UmFuaz1uZXcgUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcmRSYW5rLm5hbWU9cmFua0luZm8uX3RoaXJkUmFuay5fbmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXJkUmFuay5yYW5rTnVtYmVyPXJhbmtJbmZvLl90aGlyZFJhbmsuX3JhbmtOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlyZFJhbmsuc2NvcmU9cmFua0luZm8uX3RoaXJkUmFuay5fc2NvcmU7XHJcbiAgICAgICAgICAgICAgICB0aGlyZFJhbmsuYXZhdGFyPXJhbmtJbmZvLl90aGlyZFJhbmsuX2F2YXRhcjtcclxuICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MudGhpcmRSYW5rPXRoaXJkUmFuaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihyYW5rSW5mbyE9bnVsbCYmcmFua0luZm8uX2N1cnJlbnRSYW5rKXtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmFuazpSYW5rPW5ldyBSYW5rKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFuay5uYW1lPXJhbmtJbmZvLl9jdXJyZW50UmFuay5fbmFtZTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYW5rLnJhbmtOdW1iZXI9cmFua0luZm8uX2N1cnJlbnRSYW5rLl9yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJhbmsuc2NvcmU9cmFua0luZm8uX2N1cnJlbnRSYW5rLl9zY29yZTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYW5rLnJhbmtVcD1yYW5rSW5mby5fY3VycmVudFJhbmsuX3JhbmtVcDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYW5rLmF2YXRhcj1yYW5rSW5mby5fY3VycmVudFJhbmsuX2F2YXRhcjtcclxuICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbms9Y3VycmVudFJhbms7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJhbmtJbmZvIT1udWxsJiZyYW5rSW5mby5fcmFua0xpc3Qpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmtMaXN0QXJyYXk6UmFua1tdPVtdO1xyXG4gICAgICAgICAgICAgICAgcmFua0xpc3RBcnJheS5sZW5ndGg9cmFua0luZm8uX3JhbmtMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByYW5rSW5mby5fcmFua0xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJhbmtJbmZvLl9yYW5rTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbms6UmFuaz1uZXcgUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmsubmFtZT1lbGVtZW50Ll9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmsucmFua051bWJlcj1lbGVtZW50Ll9yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmsuc2NvcmU9ZWxlbWVudC5fc2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuay5hdmF0YXI9ZWxlbWVudC5fYXZhdGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmsucmFua1VwPWVsZW1lbnQuX3JhbmtVcDtcclxuICAgICAgICAgICAgICAgICAgICByYW5rTGlzdEFycmF5W2luZGV4XT1yYW5rO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5yYW5rTGlzdD1yYW5rTGlzdEFycmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbmtMaXN0Q2xhc3M7XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVJhbmtEYXRhKHJhbmtMaXN0Q2xhc3M6UmFua0xpc3RDbGFzcyl7XHJcblxyXG4gICAgICAgIGlmKHJhbmtMaXN0Q2xhc3M9PW51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RySW5mbz0nJztcclxuICAgICAgICBzdHJJbmZvPUpTT04uc3RyaW5naWZ5KHJhbmtMaXN0Q2xhc3MpO1xyXG4gICAgICAgIGlmKHJhbmtMaXN0Q2xhc3MucmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5UT0RBWSl7XHJcbiAgICAgICAgICAgIHRoaXMudG9kYXlSYW5rSW5mbz1zdHJJbmZvO1xyXG4gICAgICAgICAgICBpZihyYW5rTGlzdENsYXNzLmlzUmFuayl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRvZGF5U2NvcmVSYW5rPj1yYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtOdW1iZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua1VwPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtVcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0ckluZm89SlNPTi5zdHJpbmdpZnkocmFua0xpc3RDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5UmFua0luZm89c3RySW5mbztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kYXlTY29yZVJhbms9cmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kYXlTY29yZVJhbms9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmFua0xpc3RDbGFzcy5yYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLldFRUspe1xyXG4gICAgICAgICAgICB0aGlzLndlZWtSYW5rSW5mbz1zdHJJbmZvO1xyXG4gICAgICAgICAgICBpZihyYW5rTGlzdENsYXNzLmlzUmFuayl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndlZWtTY29yZVJhbms+PXJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua051bWJlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rVXA9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua1VwPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3RySW5mbz1KU09OLnN0cmluZ2lmeShyYW5rTGlzdENsYXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vla1JhbmtJbmZvPXN0ckluZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtTY29yZVJhbms9cmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vla1Njb3JlUmFuaz0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyYW5rTGlzdENsYXNzLnJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuTU9OVEgpe1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoUmFua0luZm89c3RySW5mbztcclxuICAgICAgICAgICAgaWYocmFua0xpc3RDbGFzcy5pc1Jhbmspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5tb250aFNjb3JlUmFuaz49cmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtVcD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rVXA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJJbmZvPUpTT04uc3RyaW5naWZ5KHJhbmtMaXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aFJhbmtJbmZvPXN0ckluZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoU2NvcmVSYW5rPXJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua051bWJlcjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoU2NvcmVSYW5rPTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJhbmtMaXN0Q2xhc3MucmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5ZRUFSKXtcclxuICAgICAgICAgICAgdGhpcy55ZWFyUmFua0luZm89c3RySW5mbztcclxuICAgICAgICAgICAgaWYocmFua0xpc3RDbGFzcy5pc1Jhbmspe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy55ZWFyU2NvcmVSYW5rPj1yYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtOdW1iZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua1VwPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtVcD1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0ckluZm89SlNPTi5zdHJpbmdpZnkocmFua0xpc3RDbGFzcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJSYW5rSW5mbz1zdHJJbmZvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyU2NvcmVSYW5rPXJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua051bWJlcjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnllYXJTY29yZVJhbms9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmFua0xpc3RDbGFzcy5yYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkFMTCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmVzdFJhbmtJbmZvPXN0ckluZm87XHJcbiAgICAgICAgICAgIGlmKHJhbmtMaXN0Q2xhc3MuaXNSYW5rKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYmVzdFNjb3JlUmFuaz49cmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtVcD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rVXA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJJbmZvPUpTT04uc3RyaW5naWZ5KHJhbmtMaXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXN0UmFua0luZm89c3RySW5mbztcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVzdFNjb3JlUmFuaz1yYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtOdW1iZXI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXN0U2NvcmVSYW5rPTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maXJzdFJhbmtJbmZvPUpTT04uc3RyaW5naWZ5KHJhbmtMaXN0Q2xhc3MuZmlyc3RSYW5rKTtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRSYW5rSW5mbz1KU09OLnN0cmluZ2lmeShyYW5rTGlzdENsYXNzLnNlY29uZFJhbmspO1xyXG4gICAgICAgICAgICB0aGlzLnRoaXJkUmFua0luZm89SlNPTi5zdHJpbmdpZnkocmFua0xpc3RDbGFzcy50aGlyZFJhbmspO1xyXG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdmaXJzdFJhbmtJbmZvJyx0aGlzLmZpcnN0UmFua0luZm8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyYW5rTGlzdENsYXNzLnJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuTEVWRUwpe1xyXG4gICAgICAgICAgICB0aGlzLmJlc3RSYW5rTGV2ZWxJbmZvPXN0ckluZm87XHJcbiAgICAgICAgICAgIGlmKHJhbmtMaXN0Q2xhc3MuaXNSYW5rKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYmVzdExldmVsUmFuaz49cmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLmN1cnJlbnRSYW5rLnJhbmtVcD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5jdXJyZW50UmFuay5yYW5rVXA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHJJbmZvPUpTT04uc3RyaW5naWZ5KHJhbmtMaXN0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXN0UmFua0xldmVsSW5mbz1zdHJJbmZvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZXN0TGV2ZWxSYW5rPXJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbmsucmFua051bWJlcjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlc3RMZXZlbFJhbms9MDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+mHjeaWsOi/m+ihjOaooeaLn+aOkuWQjVxyXG4gICAgaW5pdFJhbmtJbmZvKCl7XHJcbiAgICAgICAgIC8v5aaC5p6c5b2T5aSp5bey57uP55Sf5oiQ6L+H5o6S5ZCN77yM55So5oi35o6S5ZCN5LiN6ZmN77yM55So5oi35o6S5ZCN5Y+q5pyJ5Zyo56ys5LqM5aSp56ys5LiA5qyh55Sf5oiQ5o6S5ZCN5piv6ZmN5L2OXHJcbiAgICAgICAgIGxldCBpc1JlZHVjZT10cnVlO1xyXG4gICAgICAgICBpZihyYW5rSW5mb0RhdGEudG9kYXlJc1Jhbmspe1xyXG4gICAgICAgICAgICBpc1JlZHVjZT1mYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaXNSYW5rTGlzdCl7XHJcbiAgICAgICAgICAgbGV0ICBhbGxSYW5rTGlzdENsYXNzOlJhbmtMaXN0Q2xhc3M9UmFua0luZm9EYXRhLmNhY2x1YXRlTm9ybWFsUmFuayhDb25zdGFudHMuUmFua1R5cGUuQUxMLHRoaXMuYmVzdFNjb3JlLGlzUmVkdWNlKTtcclxuICAgICAgICAgICB0aGlzLnNhdmVSYW5rRGF0YShhbGxSYW5rTGlzdENsYXNzKTsgIFxyXG4gICAgICAgICAgIGxldCAgeWVhclJhbmtMaXN0Q2xhc3M6UmFua0xpc3RDbGFzcz1SYW5rSW5mb0RhdGEuY2FjbHVhdGVOb3JtYWxSYW5rKENvbnN0YW50cy5SYW5rVHlwZS5ZRUFSLHRoaXMueWVhclNjb3JlLGlzUmVkdWNlKTtcclxuICAgICAgICAgICB0aGlzLnNhdmVSYW5rRGF0YSh5ZWFyUmFua0xpc3RDbGFzcyk7IFxyXG4gICAgICAgICAgIGxldCAgbW9udGhSYW5rTGlzdENsYXNzOlJhbmtMaXN0Q2xhc3M9UmFua0luZm9EYXRhLmNhY2x1YXRlTm9ybWFsUmFuayhDb25zdGFudHMuUmFua1R5cGUuTU9OVEgsdGhpcy5tb250aFNjb3JlLGlzUmVkdWNlKTtcclxuICAgICAgICAgICB0aGlzLnNhdmVSYW5rRGF0YShtb250aFJhbmtMaXN0Q2xhc3MpOyAgICBcclxuICAgICAgICAgICBsZXQgIHdlZWtSYW5rTGlzdENsYXNzOlJhbmtMaXN0Q2xhc3M9UmFua0luZm9EYXRhLmNhY2x1YXRlTm9ybWFsUmFuayhDb25zdGFudHMuUmFua1R5cGUuV0VFSyx0aGlzLndlZWtTY29yZSxpc1JlZHVjZSk7XHJcbiAgICAgICAgICAgdGhpcy5zYXZlUmFua0RhdGEod2Vla1JhbmtMaXN0Q2xhc3MpOyAgIFxyXG4gICAgICAgICAgIGxldCAgdG9kYXlSYW5rTGlzdENsYXNzOlJhbmtMaXN0Q2xhc3M9UmFua0luZm9EYXRhLmNhY2x1YXRlTm9ybWFsUmFuayhDb25zdGFudHMuUmFua1R5cGUuVE9EQVksdGhpcy50b2RheVNjb3JlLGlzUmVkdWNlKTtcclxuICAgICAgICAgICB0aGlzLnNhdmVSYW5rRGF0YSh0b2RheVJhbmtMaXN0Q2xhc3MpOyAgICAgICAgICAgICBcclxuICAgICAgICAgICBsZXQgIGxldmVsUmFua0xpc3RDbGFzczpSYW5rTGlzdENsYXNzPVJhbmtJbmZvRGF0YS5jYWNsdWF0ZU5vcm1hbFJhbmsoQ29uc3RhbnRzLlJhbmtUeXBlLkxFVkVMLERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCxpc1JlZHVjZSk7XHJcbiAgICAgICAgICAgdGhpcy5zYXZlUmFua0RhdGEobGV2ZWxSYW5rTGlzdENsYXNzKTsgXHJcbiAgICAgICAgICAgdGhpcy5pc1JhbmtMaXN0PWZhbHNlOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVEYXRhKClcclxuICAgIH1cclxuXHJcbiAgICAgICAvL+iuoeeul+aooeaLn+aOkuWQjVxyXG4gICAgLy/mr4/ml6Xnu5/orqHliY0zMDDlkI3vvIzmnIDkvbPnu5/orqEyMDAwMC4gc2VuY2VUeXBlOuaOkuWQjeS9v+eUqOWcuuaZryAgIHJhbmsg55So5oi355u05o6l5p+l55yL5o6S5ZCNLGdhbWUg5ri45oiP6L+H56iL5Lit6YeN5paw6K6h566X5o6S5ZCN77yM55So5oi35LiA5a6a5Zyo5qac5LiK77yM55So5oi35o6S5ZCN5LiA5a6a5q+U5LiK5LiA5qyh5pyJ6L+b5q2l77yM5Y+W55So5oi355qE5ZCOMTDlkI3mlbDmja7jgIJcclxuICAgIC8vcmFua051bWJlciDkvKDlhaXnmoTlkI3mrKHvvIxcclxuICAgIHB1YmxpYyBzdGF0aWMgY2FjbHVhdGVOb3JtYWxSYW5rKHJhbmtUeXBlOnN0cmluZyxzY29yZU51bWJlcjpudW1iZXIsaXNSZWR1Y2U6Ym9vbGVhbixzZW5jZVR5cGU/OnN0cmluZyxyYW5rTnVtYmVyPzpudW1iZXIpOlJhbmtMaXN0Q2xhc3N7XHJcblxyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJlbnRlciBjYWNsdWF0ZUVuZGxlc3NSYW5rXCIpO1xyXG4gICAgICAgICAgIGlmKHNlbmNlVHlwZT09bnVsbCl7XHJcbiAgICAgICAgICAgICAgIHNlbmNlVHlwZT0ncmFuayc7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGlmKHJhbmtOdW1iZXI9PW51bGwpe1xyXG4gICAgICAgICAgICAgICByYW5rTnVtYmVyPTA7XHJcbiAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAvL+acgOmrmOWIhuWinumVv+mXtOmalFxyXG4gICAgICAgICAgIGxldCBpbnRlcnZhbEFycmF5ID0gWzI1LDI4LDMyLDU2LDEwMiwxMzUsMjIxXTtcclxuICAgICAgICAgICBsZXQgaW50ZXJ2YWxDb3VudD0gQ29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KGludGVydmFsQXJyYXkpO1xyXG4gICAgICAgICAgIC8v5o6S5ZCN5LiK5Y2H6Ze06ZqUXHJcbiAgICAgICAgICAgbGV0IGludGVydmFsTGV2ZWxBcnJheSA9IFsxLDIsMiwyLDMsMyw0LDUsNl07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgbGV0IHJhbmtMaXN0QXJyYXk6UmFua1tdPVtdO1xyXG4gICAgICAgICAgIC8v5b2T5YmN5YiG5pWw55qE5o6S5ZCNXHJcbiAgICAgICAgICAgbGV0IGN1cnJSYW5rTnVtOm51bWJlcj0wO1xyXG4gICBcclxuICAgICAgICAgICBsZXQgcmFua0xpc3RDbGFzczpSYW5rTGlzdENsYXNzPW5ldyBSYW5rTGlzdENsYXNzKCk7XHJcbiAgICAgICAgICAgLy/nrKzkuIDlkI3liIbmlbBcclxuICAgICAgICAgICBsZXQgIGJlc3RTY29yZT1Db25zdGFudHMuUmFua1N0YXJ0QmVzdC5UT0RBWTtcclxuICAgICAgICAgICAvL+aAu+WFsee7n+iuoeWkmuWwkeWQjVxyXG4gICAgICAgICAgIGxldCAgIHJhbmtDb3VudDpudW1iZXI9Q29uc3RhbnRzLlJhbmtUeXBlQ291bnQuVE9EQVk7XHJcbiAgICAgICAgICAgLy/kuIrmppzmnIDkvY7liIbmlbBcclxuICAgICAgICAgICBsZXQgIHJhbmtTY29yZUxpbmU9MTA7XHJcbiAgICAgICAgICAgLy/mnIDpq5jliIbmlbDvvIzkuI3og73otoXov4dcclxuICAgICAgICAgICBsZXQgbWF4U2NvcmU9Q29uc3RhbnRzLlJhbmtCZXN0LlRPREFZO1xyXG4gICAgICAgICAgIC8v6Ze06ZqU57O75pWwXHJcbiAgICAgICAgICAgbGV0IGludGVydmFsVGltZT0xO1xyXG4gICAgICAgICAgIC8v5LiK5LiA5qyh55qE5o6S5ZCNXHJcbiAgICAgICAgICAgbGV0ICBsYXN0UmFuaz1yYW5rSW5mb0RhdGEudG9kYXlTY29yZVJhbms7XHJcblxyXG4gICAgICAgICAgIC8v5ZCN5a2X5pWw57uEXHJcbiAgICAgICAgICAgbGV0IG5hbWVBcnJheT1Db25zdGFudHMucmFua05hbWVBcnJheTE7XHJcbiAgIFxyXG4gICAgICAgICAgIGxldCBsYXN0Rmlyc2VSYW5rOlJhbms9bnVsbDtcclxuICAgICAgICAgICBsZXQgbGFzdFNlY29uZFJhbms6UmFuaz1udWxsO1xyXG4gICAgICAgICAgIGxldCBsYXN0VGhpcmRSYW5rOlJhbms9bnVsbDtcclxuICAgXHJcbiAgICAgICAgICAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5UT0RBWSl7XHJcbiAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPjIwMDAmJnNjb3JlTnVtYmVyPD01MDAwKXtcclxuICAgICAgICAgICAgICAgICAgIHJhbmtDb3VudD1yYW5rQ291bnQvMi41K2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+NTAwMCYmc2NvcmVOdW1iZXI8PTEwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgIHJhbmtDb3VudD1yYW5rQ291bnQvMytpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPjEwMDAwJiZzY29yZU51bWJlcjw9MzAwMDApe1xyXG4gICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC80K2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MzAwMDApe1xyXG4gICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC82K2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5XRUVLKXtcclxuICAgICAgICAgICAgICAgIGJlc3RTY29yZT1Db25zdGFudHMuUmFua1N0YXJ0QmVzdC5XRUVLO1xyXG4gICAgICAgICAgICAgICAgcmFua0NvdW50PUNvbnN0YW50cy5SYW5rVHlwZUNvdW50LldFRUs7XHJcbiAgICAgICAgICAgICAgICByYW5rU2NvcmVMaW5lPTEwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxUaW1lPTEwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxDb3VudD1pbnRlcnZhbENvdW50KmludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgIG1heFNjb3JlPUNvbnN0YW50cy5SYW5rQmVzdC5XRUVLO1xyXG4gICAgICAgICAgICAgICAgbmFtZUFycmF5PUNvbnN0YW50cy5yYW5rTmFtZUFycmF5MTtcclxuICAgICAgICAgICAgICAgIGxhc3RSYW5rPXJhbmtJbmZvRGF0YS53ZWVrU2NvcmVSYW5rO1xyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+NTAwMCYmc2NvcmVOdW1iZXI8PTEwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzIuNStpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MTAwMDAmJnNjb3JlTnVtYmVyPD0yMDAwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC8zK2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj4yMDAwMCYmc2NvcmVOdW1iZXI8PTUwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzQraW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPjUwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzYraW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5NT05USCl7XHJcbiAgICAgICAgICAgICAgICBiZXN0U2NvcmU9Q29uc3RhbnRzLlJhbmtTdGFydEJlc3QuTU9OVEg7XHJcbiAgICAgICAgICAgICAgICByYW5rQ291bnQ9Q29uc3RhbnRzLlJhbmtUeXBlQ291bnQuTU9OVEg7XHJcbiAgICAgICAgICAgICAgICByYW5rU2NvcmVMaW5lPTEwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxUaW1lPTIwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxDb3VudD1pbnRlcnZhbENvdW50KmludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgIG1heFNjb3JlPUNvbnN0YW50cy5SYW5rQmVzdC5NT05USDtcclxuICAgICAgICAgICAgICAgIG5hbWVBcnJheT1Db25zdGFudHMucmFua05hbWVBcnJheTE7XHJcbiAgICAgICAgICAgICAgICBsYXN0UmFuaz1yYW5rSW5mb0RhdGEubW9udGhTY29yZVJhbms7XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj4xMDAwMCYmc2NvcmVOdW1iZXI8PTIwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzIuNStpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MjAwMDAmJnNjb3JlTnVtYmVyPD01MDAwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC8zK2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj41MDAwMCYmc2NvcmVOdW1iZXI8PTEwMDAwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC80K2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj4xMDAwMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtDb3VudD1yYW5rQ291bnQvNitpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5ZRUFSKXtcclxuICAgICAgICAgICAgICAgIGJlc3RTY29yZT1Db25zdGFudHMuUmFua1N0YXJ0QmVzdC5ZRUFSO1xyXG4gICAgICAgICAgICAgICAgcmFua0NvdW50PUNvbnN0YW50cy5SYW5rVHlwZUNvdW50LllFQVI7XHJcbiAgICAgICAgICAgICAgICByYW5rU2NvcmVMaW5lPTEwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxUaW1lPTMwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxDb3VudD1pbnRlcnZhbENvdW50KmludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgIG1heFNjb3JlPUNvbnN0YW50cy5SYW5rQmVzdC5ZRUFSO1xyXG4gICAgICAgICAgICAgICAgbmFtZUFycmF5PUNvbnN0YW50cy5yYW5rTmFtZUFycmF5MTtcclxuICAgICAgICAgICAgICAgIGxhc3RSYW5rPXJhbmtJbmZvRGF0YS55ZWFyU2NvcmVSYW5rO1xyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MjAwMDAwJiZzY29yZU51bWJlcjw9NTAwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzIuNStpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+NTAwMDAwJiZzY29yZU51bWJlcjw9MTAwMDAwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC8zK2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj4xMDAwMDAmJnNjb3JlTnVtYmVyPD0yMDAwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzQraW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPjIwMDAwMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtDb3VudD1yYW5rQ291bnQvNitpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgaWYocmFua1R5cGU9PUNvbnN0YW50cy5SYW5rVHlwZS5BTEwpe1xyXG4gICAgICAgICAgICAgICBpZihyYW5rSW5mb0RhdGEuZmlyc3RSYW5rSW5mbyE9Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgbGFzdEZpcnNlUmFuaz1uZXcgUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJhbmtJbmZvPUpTT04ucGFyc2UocmFua0luZm9EYXRhLmZpcnN0UmFua0luZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgbGFzdEZpcnNlUmFuay5uYW1lPXJhbmtJbmZvLl9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgbGFzdEZpcnNlUmFuay5yYW5rTnVtYmVyPXJhbmtJbmZvLl9yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgbGFzdEZpcnNlUmFuay5zY29yZT1yYW5rSW5mby5fc2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICBsYXN0Rmlyc2VSYW5rLmF2YXRhcj1yYW5rSW5mby5fYXZhdGFyO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmKHJhbmtJbmZvRGF0YS5zZWNvbmRSYW5rSW5mbyE9Jycpe1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJhbmtJbmZvPUpTT04ucGFyc2UocmFua0luZm9EYXRhLnNlY29uZFJhbmtJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgIGxhc3RTZWNvbmRSYW5rPW5ldyBSYW5rKCk7XHJcbiAgICAgICAgICAgICAgICAgICBsYXN0U2Vjb25kUmFuay5uYW1lPXJhbmtJbmZvLl9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgbGFzdFNlY29uZFJhbmsucmFua051bWJlcj1yYW5rSW5mby5fcmFua051bWJlcjtcclxuICAgICAgICAgICAgICAgICAgIGxhc3RTZWNvbmRSYW5rLnNjb3JlPXJhbmtJbmZvLl9zY29yZTtcclxuICAgICAgICAgICAgICAgICAgIGxhc3RTZWNvbmRSYW5rLmF2YXRhcj1yYW5rSW5mby5fYXZhdGFyO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgaWYocmFua0luZm9EYXRhLnRoaXJkUmFua0luZm8hPScnKXsgICBcclxuICAgICAgICAgICAgICAgICAgIGxldCByYW5rSW5mbz1KU09OLnBhcnNlKHJhbmtJbmZvRGF0YS50aGlyZFJhbmtJbmZvKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICBsYXN0VGhpcmRSYW5rPW5ldyBSYW5rKCk7ICAgICBcclxuICAgICAgICAgICAgICAgICAgIGxhc3RUaGlyZFJhbmsubmFtZT1yYW5rSW5mby5fbmFtZTtcclxuICAgICAgICAgICAgICAgICAgIGxhc3RUaGlyZFJhbmsucmFua051bWJlcj1yYW5rSW5mby5fcmFua051bWJlcjtcclxuICAgICAgICAgICAgICAgICAgIGxhc3RUaGlyZFJhbmsuc2NvcmU9cmFua0luZm8uX3Njb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgbGFzdFRoaXJkUmFuay5hdmF0YXI9cmFua0luZm8uX2F2YXRhcjtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgIGJlc3RTY29yZT1Db25zdGFudHMuUmFua1N0YXJ0QmVzdC5BTEw7XHJcbiAgICAgICAgICAgICAgIHJhbmtDb3VudD1Db25zdGFudHMuUmFua1R5cGVDb3VudC5BTEw7XHJcbiAgICAgICAgICAgICAgIHJhbmtTY29yZUxpbmU9MTA7XHJcbiAgICAgICAgICAgICAgIGludGVydmFsVGltZT01MDtcclxuICAgICAgICAgICAgICAgaW50ZXJ2YWxDb3VudD1pbnRlcnZhbENvdW50KmludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgbWF4U2NvcmU9Q29uc3RhbnRzLlJhbmtCZXN0LkFMTDtcclxuICAgICAgICAgICAgICAgbmFtZUFycmF5PUNvbnN0YW50cy5yYW5rTmFtZUFycmF5MTtcclxuICAgICAgICAgICAgICAgbGFzdFJhbms9cmFua0luZm9EYXRhLmJlc3RTY29yZVJhbms7XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MjAwMDAwJiZzY29yZU51bWJlcjw9NTAwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC8yLjUraW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPjUwMDAwMCYmc2NvcmVOdW1iZXI8PTEwMDAwMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtDb3VudD1yYW5rQ291bnQvMytpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MTAwMDAwJiZzY29yZU51bWJlcjw9MjAwMDAwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC80K2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj4yMDAwMDAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzYraW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIGlmKHJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuTEVWRUwpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVydmFsQXJyYXkgPSBbMCwxLDEsMSwyLDIsMiwzLDMsNCw1XTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbENvdW50PSBDb21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoaW50ZXJ2YWxBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBiZXN0U2NvcmU9Q29uc3RhbnRzLlJhbmtTdGFydEJlc3QuTEVWRUw7XHJcbiAgICAgICAgICAgICAgICByYW5rQ291bnQ9Q29uc3RhbnRzLlJhbmtUeXBlQ291bnQuTEVWRUw7XHJcbiAgICAgICAgICAgICAgICByYW5rU2NvcmVMaW5lPTI7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbFRpbWU9MjtcclxuICAgICAgICAgICAgICAgIGludGVydmFsQ291bnQ9aW50ZXJ2YWxDb3VudCppbnRlcnZhbFRpbWU7XHJcbiAgICAgICAgICAgICAgICBtYXhTY29yZT1Db25zdGFudHMuUmFua0Jlc3QuTEVWRUw7XHJcbiAgICAgICAgICAgICAgICBuYW1lQXJyYXk9Q29uc3RhbnRzLnJhbmtOYW1lQXJyYXkxO1xyXG4gICAgICAgICAgICAgICAgbGFzdFJhbms9cmFua0luZm9EYXRhLmJlc3RMZXZlbFJhbms7XHJcbiAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcj4xMCYmc2NvcmVOdW1iZXI8PTUwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzIuNStpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+NTAmJnNjb3JlTnVtYmVyPD0xMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmtDb3VudD1yYW5rQ291bnQvMytpbnRlcnZhbENvdW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+MTAwJiZzY29yZU51bWJlcjw9MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICByYW5rQ291bnQ9cmFua0NvdW50LzQraW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua0NvdW50PXJhbmtDb3VudC82K2ludGVydmFsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCBkYXlzPSBEYXRlVXRpbC5nZXREaWZmRGF5KERhdGVVdGlsLmZvcm1hdERhdGUobmV3IERhdGUoKSksQ29uc3RhbnRzLlN0YXJ0UmFua0RhdGUpO1xyXG4gICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2ludGVydmFsQ291bnQnLGludGVydmFsQ291bnQpO1xyXG4gICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2RheXMnLGRheXMpO1xyXG4gICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JhbmtTY29yZUxpbmUnLHJhbmtTY29yZUxpbmUpO1xyXG4gICAgICAgICAgICAgIGlmKGRheXM+MSl7XHJcbiAgICAgICAgICAgICAgICAgaWYoZGF5cz4zMCl7XHJcbiAgICAgICAgICAgICAgICAgICBkYXlzPTMwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBiZXN0U2NvcmU9YmVzdFNjb3JlK2RheXMqaW50ZXJ2YWxDb3VudDtcclxuICAgICAgICAgICAgICAgICBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkFMTCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFua1Njb3JlTGluZT1yYW5rU2NvcmVMaW5lK01hdGgucm91bmQoZGF5cyppbnRlcnZhbENvdW50KS9pbnRlcnZhbFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgaWYoYmVzdFNjb3JlPm1heFNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICBiZXN0U2NvcmU9bWF4U2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgfSAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygncmFua1Njb3JlTGluZTInLHJhbmtTY29yZUxpbmUpO1xyXG4gICAgICAgICAgIC8vICAgY29uc29sZS5sb2coJ2xhc3RSYW5rJyxsYXN0UmFuayk7XHJcbiAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnYmVzdFNjb3JlJyxiZXN0U2NvcmUpO1xyXG4gICAgICAgICAgICAgIC8v5q+P5Liq5ZCN5qyh55u45beu5YiG5pWwXHJcbiAgICAgICAgICAgICAgbGV0IHRvZGF5SW50ZXJ2YWw9KGJlc3RTY29yZS1yYW5rU2NvcmVMaW5lKS9yYW5rQ291bnQ7XHJcbiAgIFxyXG4gICAgICAgICAgICAgIGN1cnJSYW5rTnVtPU1hdGguZmxvb3IocmFua0NvdW50LShzY29yZU51bWJlci8odG9kYXlJbnRlcnZhbCkpKTtcclxuICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdjdXJyUmFua051bXAwMCcsY3VyclJhbmtOdW0pO1xyXG4gICBcclxuICAgICAgICAgICAvL+WmguaenOaYr+avj+WkqeaXpeW4uOabtOaWsO+8jOmcgOimgemZjeS9juWQjeasoVxyXG4gICAgICAgICAgIC8qaWYobGFzdFJhbms+MCl7XHJcbiAgICAgICAgICAgICAgIGlmKGlzUmVkdWNlKXtcclxuICAgICAgICAgICAgICAgICAgIGlmKGN1cnJSYW5rTnVtPD1sYXN0UmFuayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY3VyclJhbmtOdW09bGFzdFJhbmsrQ29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KGludGVydmFsTGV2ZWxBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgaWYoY3VyclJhbmtOdW0+PWxhc3RSYW5rKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBjdXJyUmFua051bT1sYXN0UmFuay1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoaW50ZXJ2YWxMZXZlbEFycmF5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdjdXJyUmFua051bXAxMTEnLGN1cnJSYW5rTnVtKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH0qL1xyXG4gICBcclxuICAgICAgICAgICBpZihyYW5rTnVtYmVyPjApe1xyXG4gICAgICAgICAgICAgICBjdXJyUmFua051bT1yYW5rTnVtYmVyO1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgaWYoY3VyclJhbmtOdW08MSljdXJyUmFua051bT0xO1xyXG4gICAgICAgICAvLyAgY29uc29sZS5sb2coJ2N1cnJSYW5rTnVtcDExJyxjdXJyUmFua051bSk7XHJcbiAgICAgICAgIC8vICBjb25zb2xlLmxvZygnY3VyclJhbmtOdW1wICByYW5rSW5mb0RhdGEnLGxhc3RGaXJzZVJhbmspO1xyXG4gICAgICAgICAgIC8vY29uc29sZS5sb2coJ2N1cnJSYW5rTnVtcCAgcmFua0luZm9EYXRhMjIyJyxsYXN0Rmlyc2VSYW5rLnNjb3JlKTtcclxuICAgICAgICAgICAvL+WmguaenOW9k+WJjeWIhuaVsOWcqOWJjeS4ieWQje+8jOmcgOimgeWSjOW9k+WkqeWJjemdouiuoeeul+eahOWJjeS4ieWQjeavlOi+g1xyXG4gICAgICAgICAgIGlmKGN1cnJSYW5rTnVtPD0zJiZyYW5rSW5mb0RhdGEudG9kYXlJc1JhbmsmJnJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuQUxMKXtcclxuICAgICAgICAgICAgICAgaWYoY3VyclJhbmtOdW09PTEmJnJhbmtJbmZvRGF0YS5maXJzdFJhbmtJbmZvIT0nJyYmbGFzdEZpcnNlUmFuayE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcjxsYXN0Rmlyc2VSYW5rLnNjb3JlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBjdXJyUmFua051bT0yO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGlmKGN1cnJSYW5rTnVtPT0yJiZyYW5rSW5mb0RhdGEuc2Vjb25kUmFua0luZm8hPScnJiZsYXN0U2Vjb25kUmFuayE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICBpZihzY29yZU51bWJlcjxsYXN0U2Vjb25kUmFuay5zY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgY3VyclJhbmtOdW09MztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBpZihjdXJyUmFua051bT09MyYmcmFua0luZm9EYXRhLnRoaXJkUmFua0luZm8hPScnJiZsYXN0VGhpcmRSYW5rIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgIGlmKHNjb3JlTnVtYmVyPGxhc3RUaGlyZFJhbmsuc2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGN1cnJSYW5rTnVtPTQ7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIC8vICBjb25zb2xlLmxvZygnY3VyclJhbmtOdW1wMjInLGN1cnJSYW5rTnVtKTtcclxuICAgICAgICAgICAgICAvL+mcgOimgeaYvuekuueahOWQjumdouaOkuWQjeS4quaVsO+8jOm7mOiupDXkuKpcclxuICAgICAgICAgICAgICBsZXQgcHJldkluZGV4cz01O1xyXG4gICAgICAgICAgICAgIGlmKGN1cnJSYW5rTnVtPDUpe1xyXG4gICAgICAgICAgICAgICAgIHByZXZJbmRleHM9MTUtY3VyclJhbmtOdW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy/pnIDopoHmmL7npLrnmoTliY3pnaLmjpLlkI3kuKrmlbDvvIxcclxuICAgICAgICAgICAgICBsZXQgbmV4dEluZGV4cz0xNS1wcmV2SW5kZXhzO1xyXG4gICAgICAgICAgICAgIC8v5YmN6Z2i5LiN6LazNeS4qu+8jOWwkeaYvuekuuS4gOS4qlxyXG4gICAgICAgICAgICAgIGlmKGN1cnJSYW5rTnVtPD01KXtcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleHM9bmV4dEluZGV4cy0xO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgICAgICAgIC8v5o6S5ZCN5pyq5LiK5qacIOS4jeWcqOWJjTE15ZCNXHJcbiAgICAgICAgICAgICAgaWYoY3VyclJhbmtOdW0+MTUpe1xyXG4gICAgICAgICAgICAgICAgLy9jdXJyUmFua051bT1yYW5rQ291bnQrMTtcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleHM9MTU7XHJcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXhzPTA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZihzZW5jZVR5cGU9PSdnYW1lJyl7XHJcbiAgICAgICAgICAgICAgIG5leHRJbmRleHM9MDsgXHJcbiAgICAgICAgICAgICAgIHByZXZJbmRleHM9MTA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAgICAvL+mVv+W6pjEw5oiW6ICFOVxyXG4gICAgICAgICAgICAgIHJhbmtMaXN0QXJyYXkubGVuZ3RoPXByZXZJbmRleHMrbmV4dEluZGV4cztcclxuICAgXHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZygndG9kYXlJbnRlcnZhbCcsdG9kYXlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnY3VyclJhbmtOdW0nLGN1cnJSYW5rTnVtKTtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCduZXh0SW5kZXhzJyxuZXh0SW5kZXhzKTtcclxuICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdwcmV2SW5kZXhzJyxwcmV2SW5kZXhzKTtcclxuICAgXHJcbiAgICAgICAgICAgICAgLy/kuIrkuIDkuKrmjpLlkI3nmoTliIbmlbBcclxuICAgICAgICAgICAgICBsZXQgcHJldlNjb3JlPXNjb3JlTnVtYmVyO1xyXG4gICAgICAgICAgICAgIGxldCBsYXN0TmFtZT0nJztcclxuICAgICAgICAgICAgICBpZihzY29yZU51bWJlcjxyYW5rU2NvcmVMaW5lKXtcclxuICAgICAgICAgICAgICAgICBwcmV2U2NvcmU9cmFua1Njb3JlTGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI+YmVzdFNjb3JlfHxjdXJyUmFua051bT4xNSl7XHJcbiAgICAgICAgICAgICAgICAgIHByZXZTY29yZT1iZXN0U2NvcmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAgICAgLy/lpoLmnpzlvZPliY3liIbmlbDlsI/kuo7mnIDpq5jliIbmlbDnmoQ15YiG5LmL5LiA77yM6Ze06ZqU57O75pWw5YeP5bCR5LiA5Y2K44CC5aSn5LqONeWIhuS5izTvvIzpl7TpmpTliIbmlbDlop7liqDkuIDlgI3jgIJcclxuICAgICAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI8YmVzdFNjb3JlLzIwKXtcclxuICAgICAgICAgICAgICAgICAgIGludGVydmFsVGltZT1pbnRlcnZhbFRpbWUvNDtcclxuICAgICAgICAgICAgICAgfWVsc2UgaWYoc2NvcmVOdW1iZXI8YmVzdFNjb3JlLzUpe1xyXG4gICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxUaW1lPWludGVydmFsVGltZS8yO1xyXG4gICAgICAgICAgICAgICB9ZWxzZSBpZihzY29yZU51bWJlcj5iZXN0U2NvcmUqNC81KXtcclxuICAgICAgICAgICAgICAgICAgIGludGVydmFsVGltZT1pbnRlcnZhbFRpbWUqMjtcclxuICAgICAgICAgICAgICAgfSBcclxuICAgXHJcbiAgICAgICAgICAgICAgIC8v6L+Z6YeM5b6q546v5Y+W5Ye65YmN6Z2ibmV4dEluZGV4c+S4queahOaOkuWQjVxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gbmV4dEluZGV4cy0xOyBpbmRleD49MDsgaW5kZXgtLSkge1xyXG4gICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxDb3VudD0gQ29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KGludGVydmFsQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHJhbms6UmFuaz1uZXcgUmFuaygpO1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IG5hbWVTdHI9Q29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KG5hbWVBcnJheSkuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG5hbWVTdHJbMF09PWxhc3ROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lU3RyPUNvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShDb25zdGFudHMucmFua05hbWVBcnJheTEpLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT1uYW1lU3RyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgcmFuay5uYW1lPW5hbWVTdHJbMF07XHJcbiAgICAgICAgICAgICAgICAgICBpZihuYW1lU3RyLmxlbmd0aD4xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICByYW5rLmF2YXRhcj1uYW1lU3RyWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgcmFuay5yYW5rVXA9Q29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KFt0cnVlLGZhbHNlXSk7XHJcbiAgICAgICAgICAgICAgICAgICBpZihjdXJyUmFua051bT4xNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmsucmFua051bWJlcj0xNS1uZXh0SW5kZXhzK2luZGV4KzE7XHJcbiAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuay5yYW5rTnVtYmVyPWN1cnJSYW5rTnVtLW5leHRJbmRleHMraW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlPXByZXZTY29yZSsoaW50ZXJ2YWxDb3VudCppbnRlcnZhbFRpbWUpK0NvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShpbnRlcnZhbEFycmF5KTtcclxuICAgICAgICAgICAgICAgICAgIGlmKHNjb3JlPHNjb3JlTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBzY29yZT1zY29yZU51bWJlcitpbnRlcnZhbFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBzY29yZT1NYXRoLnJvdW5kKHNjb3JlKTtcclxuICAgXHJcbiAgICAgICAgICAgICAgICAgICByYW5rLnNjb3JlPXNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgcHJldlNjb3JlPXNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5zZXRUb3BUaHJlZVJhbmtzKHJhbmspO1xyXG4gICAgICAgICAgICAgICAgICAgcmFua0xpc3RBcnJheVtpbmRleF09cmFuaztcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgIFxyXG4gICAgICAgICAgICAgICAvL+i/memHjOW+queOr+WPluWHuuWQjumdonByZXZJbmRleHPnmoTmjpLlkI1cclxuICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDxwcmV2SW5kZXhzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICBpbnRlcnZhbENvdW50PSBDb21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoaW50ZXJ2YWxBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgcmFuazpSYW5rPW5ldyBSYW5rKCk7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgbmFtZVN0cj1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkobmFtZUFycmF5KS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgaWYobmFtZVN0clswXT09bGFzdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWVTdHI9Q29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KENvbnN0YW50cy5yYW5rTmFtZUFycmF5MSkuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPW5hbWVTdHJbMF07XHJcbiAgICAgICAgICAgICAgICAgICByYW5rLm5hbWU9bmFtZVN0clswXTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG5hbWVTdHIubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJhbmsuYXZhdGFyPW5hbWVTdHJbMV07XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICByYW5rLnJhbmtVcD1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoW3RydWUsZmFsc2VdKTtcclxuICAgICAgICAgICAgICAgICAgIHJhbmsucmFua051bWJlcj1jdXJyUmFua051bStpbmRleCsxO1xyXG4gICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlPXByZXZTY29yZS1pbnRlcnZhbENvdW50KmludGVydmFsVGltZS1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoaW50ZXJ2YWxBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAgICBpZihzY29yZTxyYW5rU2NvcmVMaW5lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBzY29yZT1yYW5rU2NvcmVMaW5lKyhwcmV2SW5kZXhzLWluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGlmKHNjb3JlPnNjb3JlTnVtYmVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBzY29yZT1zY29yZU51bWJlci1pbnRlcnZhbFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBzY29yZT1NYXRoLnJvdW5kKHNjb3JlKTtcclxuICAgICAgICAgICAgICAgICAgIHJhbmsuc2NvcmU9c2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICBwcmV2U2NvcmU9c2NvcmU7XHJcbiAgICAgICAgICAgICAgICAgICBpZigobmV4dEluZGV4cytpbmRleCk+PXJhbmtMaXN0QXJyYXkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3Muc2V0VG9wVGhyZWVSYW5rcyhyYW5rKTtcclxuICAgICAgICAgICAgICAgICAgIHJhbmtMaXN0QXJyYXlbbmV4dEluZGV4cytpbmRleF09cmFuaztcclxuICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYW5rLnNjb3JlMDAwMDAwMDAwJyxyYW5rTGlzdEFycmF5WzldLnNjb3JlKTtcclxuICAgXHJcbiAgICAgICAgICAgLy/miZPljIXov5Tlm57lr7nosaFcclxuICAgICAgICAgICByYW5rTGlzdENsYXNzLnJhbmtMaXN0PXJhbmtMaXN0QXJyYXk7XHJcbiAgICAgICAgICAgbGV0IGN1cnJSYW5rOlJhbms9bmV3IFJhbmsoKTtcclxuICAgICAgICAgICBjdXJyUmFuay5yYW5rTnVtYmVyPWN1cnJSYW5rTnVtO1xyXG4gICAgICAgICAgIGN1cnJSYW5rLnNjb3JlPXNjb3JlTnVtYmVyO1xyXG4gICAgICAgICAgIGlmKHJhbmtJbmZvRGF0YS5yYW5rTmFtZSE9Jycpe1xyXG4gICAgICAgICAgICAgICBjdXJyUmFuay5uYW1lPXJhbmtJbmZvRGF0YS5yYW5rTmFtZTtcclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgY3VyclJhbmsubmFtZT0nTWUnO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBpZihyYW5rSW5mb0RhdGEucmFua0F2YXRhciE9Jycpe1xyXG4gICAgICAgICAgICAgICBjdXJyUmFuay5hdmF0YXI9cmFua0luZm9EYXRhLnJhbmtBdmF0YXI7XHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIGxldCBuYW1lU3RyPUNvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShuYW1lQXJyYXkpLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgIGlmKG5hbWVTdHIubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgICAgICAgICAgY3VyclJhbmsuYXZhdGFyPW5hbWVTdHJbMV07XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygncmFuay5zY29yZTExMTExMTExMTExMScscmFua0xpc3RBcnJheVs5XS5zY29yZSk7XHJcbiAgICAgXHJcbiAgICAgICAgICAgaWYoc2VuY2VUeXBlPT0nZ2FtZSd8fGxhc3RSYW5rPmN1cnJSYW5rTnVtKXtcclxuICAgICAgICAgICAgICAgY3VyclJhbmsucmFua1VwPXRydWU7XHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIGN1cnJSYW5rLnJhbmtVcD1mYWxzZTtcclxuICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuY3VycmVudFJhbms9Y3VyclJhbms7XHJcbiAgICAgICAgICAgcmFua0xpc3RDbGFzcy5zZXRUb3BUaHJlZVJhbmtzKGN1cnJSYW5rKTtcclxuICAgICAgICAgICByYW5rTGlzdENsYXNzLnJhbmtUeXBlPXJhbmtUeXBlO1xyXG4gICAgICAgICAgIHJhbmtMaXN0Q2xhc3MucmFua1Njb3JlTGluZT1yYW5rU2NvcmVMaW5lO1xyXG4gICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuaXNSYW5rPXRydWU7XHJcbiAgICAgICAgICAgXHJcbiAgICAgIC8vICAgIGNvbnNvbGUubG9nKCdyYW5rU2NvcmVMaW5lJyxyYW5rU2NvcmVMaW5lKTtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKCdyYW5rLnNjb3JlMTExMTExMTExMTExMTEnLHJhbmtMaXN0QXJyYXlbOV0uc2NvcmUpO1xyXG4gICAgICAgICAgIC8v5pyq5LiK5qacXHJcbiAgICAgICAgICAgaWYoc2NvcmVOdW1iZXI8cmFua1Njb3JlTGluZSl7XHJcbiAgICAgICAgICAgICAgIGlmKCByYW5rTGlzdENsYXNzLnJhbmtMaXN0W3JhbmtMaXN0Q2xhc3MucmFua0xpc3QubGVuZ3RoLTFdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MucmFua0xpc3RbcmFua0xpc3RDbGFzcy5yYW5rTGlzdC5sZW5ndGgtMV0uc2NvcmU9cmFua1Njb3JlTGluZTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy5pc1Jhbms9ZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAvL+eUn+aIkOWJjeS4ieWQjVxyXG4gICAgICAgICAgIGlmKHJhbmtMaXN0Q2xhc3MuZmlyc3RSYW5rPT1udWxsKXtcclxuICAgICAgICAgICAgICAgbGV0IGZpcnN0UmFuazpSYW5rPW5ldyBSYW5rKCk7XHJcbiAgICAgICAgICAgICAgIGlmKHJhbmtJbmZvRGF0YS50b2RheUlzUmFuayYmbGFzdEZpcnNlUmFuayE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICBmaXJzdFJhbms9bGFzdEZpcnNlUmFuaztcclxuICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgICAgbGV0IG5hbWVTdHI9Q29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KG5hbWVBcnJheSkuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG5hbWVTdHJbMF09PWxhc3ROYW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICBuYW1lU3RyPUNvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShDb25zdGFudHMucmFua05hbWVBcnJheTEpLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT1uYW1lU3RyWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgZmlyc3RSYW5rLm5hbWU9bmFtZVN0clswXTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG5hbWVTdHIubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UmFuay5hdmF0YXI9bmFtZVN0clsxXTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGZpcnN0UmFuay5yYW5rVXA9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgIGZpcnN0UmFuay5yYW5rTnVtYmVyPTE7XHJcbiAgICAgICAgICAgICAgICAgICBmaXJzdFJhbmsuc2NvcmU9YmVzdFNjb3JlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MuZmlyc3RSYW5rPWZpcnN0UmFuaztcclxuICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgIC8v5aKe5Yqg5YmN5Yeg5ZCN5YiG5pWw6Ze06ZqUXHJcbiAgICAgICAgICAgIGlmKHJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuVE9EQVkpe1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxUaW1lPWludGVydmFsVGltZSoyO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLldFRUspe1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxUaW1lPWludGVydmFsVGltZSo1O1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLk1PTlRIKXtcclxuICAgICAgICAgICAgICAgIGludGVydmFsVGltZT1pbnRlcnZhbFRpbWUqMTA7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJhbmtUeXBlPT1Db25zdGFudHMuUmFua1R5cGUuWUVBUil7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbFRpbWU9aW50ZXJ2YWxUaW1lKjUwO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkFMTCl7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbFRpbWU9aW50ZXJ2YWxUaW1lKjUwO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihyYW5rVHlwZT09Q29uc3RhbnRzLlJhbmtUeXBlLkxFVkVMKXtcclxuICAgICAgICAgICAgICAgIGludGVydmFsVGltZT1pbnRlcnZhbFRpbWUqMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ2ZpcnN0UmFuaycscmFua0xpc3RDbGFzcy5maXJzdFJhbmspO1xyXG4gICBcclxuICAgICAgICAgICBpZihyYW5rTGlzdENsYXNzLnNlY29uZFJhbms9PW51bGwpe1xyXG4gICAgICAgICAgICAgICBsZXQgc2Vjb25kUmFuazpSYW5rPW5ldyBSYW5rKCk7XHJcbiAgICAgICAgICAgICAgIGlmKHJhbmtJbmZvRGF0YS50b2RheUlzUmFuayYmbGFzdFNlY29uZFJhbmshPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgc2Vjb25kUmFuaz1sYXN0U2Vjb25kUmFuaztcclxuICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICBsZXQgbmFtZVN0cj1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkobmFtZUFycmF5KS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgaWYobmFtZVN0clswXT09bGFzdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIG5hbWVTdHI9Q29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KENvbnN0YW50cy5yYW5rTmFtZUFycmF5MSkuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPW5hbWVTdHJbMF07XHJcbiAgICAgICAgICAgICAgICAgICBzZWNvbmRSYW5rLm5hbWU9bmFtZVN0clswXTtcclxuICAgICAgICAgICAgICAgICAgIGlmKG5hbWVTdHIubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHNlY29uZFJhbmsuYXZhdGFyPW5hbWVTdHJbMV07XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICBzZWNvbmRSYW5rLnJhbmtOdW1iZXI9MjtcclxuICAgICAgICAgICAgICAgICAgIHNlY29uZFJhbmsuc2NvcmU9cmFua0xpc3RDbGFzcy5maXJzdFJhbmsuc2NvcmUtQ29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KGludGVydmFsQXJyYXkpKihpbnRlcnZhbFRpbWUrMSktQ29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KGludGVydmFsQXJyYXkpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3Muc2Vjb25kUmFuaz1zZWNvbmRSYW5rO1xyXG4gICAgICAgICAgIH1cclxuICAgXHJcbiAgICAgICAgIC8vICBjb25zb2xlLmxvZygnc2Vjb25kUmFuaycscmFua0xpc3RDbGFzcy5zZWNvbmRSYW5rKTtcclxuICAgXHJcbiAgICAgICAgICAgaWYocmFua0xpc3RDbGFzcy50aGlyZFJhbms9PW51bGwpe1xyXG4gICAgICAgICAgICAgICBsZXQgdGhpcmRSYW5rOlJhbms9bmV3IFJhbmsoKTtcclxuICAgICAgICAgICAgICAgaWYocmFua0luZm9EYXRhLnRvZGF5SXNSYW5rJiZsYXN0VGhpcmRSYW5rIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgIHRoaXJkUmFuaz1sYXN0VGhpcmRSYW5rO1xyXG4gICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgIGxldCBuYW1lU3RyPUNvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShuYW1lQXJyYXkpLnNwbGl0KCctJyk7XHJcbiAgICAgICAgICAgICAgICAgICBpZihuYW1lU3RyWzBdPT1sYXN0TmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbmFtZVN0cj1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoQ29uc3RhbnRzLnJhbmtOYW1lQXJyYXkxKS5zcGxpdCgnLScpO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9bmFtZVN0clswXTtcclxuICAgICAgICAgICAgICAgICAgIHRoaXJkUmFuay5uYW1lPW5hbWVTdHJbMF07XHJcbiAgICAgICAgICAgICAgICAgICBpZihuYW1lU3RyLmxlbmd0aD4xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICB0aGlyZFJhbmsuYXZhdGFyPW5hbWVTdHJbMV07XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB0aGlyZFJhbmsucmFua051bWJlcj0zO1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcmRSYW5rLnNjb3JlPXJhbmtMaXN0Q2xhc3Muc2Vjb25kUmFuay5zY29yZS1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoaW50ZXJ2YWxBcnJheSkqKGludGVydmFsVGltZSktQ29tbW9uVG9vbC5nZXRSYW5kb21CeUFycmF5KGludGVydmFsQXJyYXkpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC8v5aaC5p6c56ys5Zub5ZCN55qE5YiG5pWw5q+U56ys5LiJ5ZCN6auY77yM5L+u5pS556ys5LiJ5ZCN55qE5YiG5pWwXHJcbiAgICAgICAgICAgICAgIGxldCBmb3J0aFJhbms9cmFua0xpc3RBcnJheVswXTtcclxuICAgICAgICAgICAgICAgaWYoZm9ydGhSYW5rLnJhbmtOdW1iZXI9PTQmJmZvcnRoUmFuay5zY29yZT50aGlyZFJhbmsuc2NvcmUpe1xyXG4gICAgICAgICAgICAgICAgICAgcmFua0xpc3RDbGFzcy50aGlyZFJhbmsuc2NvcmU9Zm9ydGhSYW5rLnNjb3JlK0NvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShpbnRlcnZhbEFycmF5KTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAgICAgLy/lpoLmnpznrKzkuInlkI3nmoTliIbmlbDmr5TnrKzkuozlkI3pq5jvvIzkv67mlLnnrKzkuozlkI3nmoTliIbmlbBcclxuICAgICAgICAgICAgICAgaWYocmFua0xpc3RDbGFzcy5zZWNvbmRSYW5rLnNjb3JlPHRoaXJkUmFuay5zY29yZSl7XHJcbiAgICAgICAgICAgICAgICAgICByYW5rTGlzdENsYXNzLnNlY29uZFJhbmsuc2NvcmU9dGhpcmRSYW5rLnNjb3JlK0NvbW1vblRvb2wuZ2V0UmFuZG9tQnlBcnJheShpbnRlcnZhbEFycmF5KSoyO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIHJhbmtMaXN0Q2xhc3MudGhpcmRSYW5rPXRoaXJkUmFuaztcclxuICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3RoaXJkUmFuaycscmFua0xpc3RDbGFzcy50aGlyZFJhbmspO1xyXG4gICBcclxuICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdyYW5rTGlzdENsYXNzJyxyYW5rTGlzdENsYXNzKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgcmFua0luZm9EYXRhLnRvZGF5SXNSYW5rPXRydWU7XHJcbiAgICAgICAgICAgcmV0dXJuIHJhbmtMaXN0Q2xhc3M7XHJcbiAgIFxyXG4gICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIHJhbmtJbmZvRGF0YTpSYW5rSW5mb0RhdGEgPSBTeXN0ZW1EYXRhLnJlZ2lzdGVyKFJhbmtJbmZvRGF0YSkiXX0=