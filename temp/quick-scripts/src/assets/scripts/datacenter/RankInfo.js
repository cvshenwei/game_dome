"use strict";
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