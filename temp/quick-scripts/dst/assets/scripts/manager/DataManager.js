
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/DataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '730a3DszhpGB4lxakYD51PT', 'DataManager');
// scripts/manager/DataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TIP_TIME = void 0;
var GameData_1 = require("../datacenter/GameData");
var ItemData_1 = require("../datacenter/ItemData");
var LevelData_1 = require("../datacenter/LevelData");
var RankInfo_1 = require("../datacenter/RankInfo");
var SettingData_1 = require("../datacenter/SettingData");
var Enum_1 = require("../Enum");
var CommonTool_1 = require("../framework/utils/CommonTool");
var STORAGE_KEY = 'CC_MATCH_CONTAINER';
exports.DEFAULT_TIP_TIME = 5;
var DataManager = /** @class */ (function () {
    function DataManager() {
        // 游戏状态
        this.status = Enum_1.ENUM_GAME_STATUS.UNRUNING;
        // 加载进度
        this.loadingRate = 0;
        //是否开始计时
        this.isSchedule = false;
        //提示是否开始计时
        this.isTip = false;
        this.tipTime = 5;
        //死局失败时是否已提示使用刷新道具
        this.isTipRefresh = false;
        // 选中
        this.current = null;
        // 入柜商品数据，三维数组  1维：几个货架、2维：几层 、3维：几个商品、
        this.goodsData = [];
        // 前排容器
        this.frontContainers = [];
        // 后排容器
        this.backContainers = [];
        // 红心和能量
        this.hearts = 5;
        this.heartCollectByVideo = 1;
        //用户剩余星星数
        this.collectStarCount = 0;
        this.powerCollectByVideo = 50;
        // 红心恢复
        this.heartRefreshTime = 1800; // 间隔刷新
        this.lastHeartRefreshTime = 0; // 每次刷新纪录点
        this.lastHeartUpdateTime = 0; // 后续离开游戏返回补充红心
        // 洗牌递归树
        this.shuffleLoopNum = 0;
        // 洗牌中
        this.isShuffling = false;
        // 生成起始点
        this.starStartPosArr = [];
    }
    DataManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(DataManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "settingData", {
        get: function () {
            return SettingData_1.settingData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "levelData", {
        get: function () {
            return LevelData_1.levelData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "itemData", {
        get: function () {
            return ItemData_1.itemData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "gameData", {
        get: function () {
            return GameData_1.gameData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataManager.prototype, "rankInfoData", {
        get: function () {
            return RankInfo_1.rankInfoData;
        },
        enumerable: false,
        configurable: true
    });
    DataManager.prototype.reset = function () {
        this.status = Enum_1.ENUM_GAME_STATUS.UNRUNING;
        this.current = null;
        this.backContainers = [];
        this.frontContainers = [];
        this.goodsData = [];
        this.shuffleLoopNum = 0;
        this.isShuffling = false;
        this.starStartPosArr = [];
        this.isSchedule = false;
        this.isTip = false;
        this.tipTime = exports.DEFAULT_TIP_TIME;
        this.isTipRefresh = false;
    };
    DataManager.prototype.save = function () {
        cc.sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            hearts: this.hearts,
            collectStarCount: this.collectStarCount,
            lastHeartRefreshTime: this.lastHeartRefreshTime,
            lastHeartUpdateTime: this.lastHeartUpdateTime,
        }));
    };
    DataManager.prototype.restore = function () {
        RankInfo_1.rankInfoData.isRankList = true;
        RankInfo_1.rankInfoData.initRankInfo();
        DataManager.instance.itemData.loadItemData();
        //每天数据初始化
        if (CommonTool_1.default.isNextDay(DataManager.instance.gameData.lastOpenTime)) {
            var week = CommonTool_1.default.theWeekOfYear(new Date());
            var month = new Date().getMonth();
            var year = new Date().getFullYear();
            var lastWeek = CommonTool_1.default.theWeekOfYear(new Date(DataManager.instance.gameData.lastOpenTime));
            if (week != lastWeek) {
                DataManager.instance.rankInfoData.weekScore = 0;
            }
            var lastMonth = new Date(DataManager.instance.gameData.lastOpenTime).getMonth();
            if (month != lastMonth) {
                DataManager.instance.rankInfoData.monthScore = 0;
            }
            var lastYear = new Date(DataManager.instance.gameData.lastOpenTime).getFullYear();
            if (year != lastYear) {
                DataManager.instance.rankInfoData.yearScore = 0;
            }
            DataManager.instance.levelData.todayPlayCount = 0;
            DataManager.instance.levelData.todayPlayFailCount = 0;
            DataManager.instance.levelData.todayPlayLevels = 0;
            DataManager.instance.levelData.saveCurrData();
            DataManager.instance.gameData.lastOpenTime = new Date().getTime();
            DataManager.instance.gameData.loginAllDays++;
            DataManager.instance.rankInfoData.todayScore = 0;
            DataManager.instance.rankInfoData.saveBestRankData();
        }
        DataManager.instance.gameData.loginCounts++;
        DataManager.instance.gameData.loginTodayCounts++;
        DataManager.instance.gameData.saveData();
        // let rankListClass:RankListClass= rankInfoData.getRankData(Constants.RankType.TODAY);
        //  console.log("rankListClass",rankListClass);
        var _data = cc.sys.localStorage.getItem(STORAGE_KEY);
        try {
            var data = JSON.parse(_data);
            this.hearts = typeof data.hearts == 'number' ? data.hearts : 5;
            this.collectStarCount = typeof data.collectStarCount == 'number' ? data.collectStarCount : 5;
            this.lastHeartRefreshTime = typeof data.lastHeartRefreshTime == 'number' ? data.lastHeartRefreshTime : 0;
            this.lastHeartUpdateTime = typeof data.lastHeartUpdateTime == 'number' ? data.lastHeartUpdateTime : 0;
        }
        catch (_a) {
            this.hearts = 5;
            this.collectStarCount = 0;
            this.lastHeartRefreshTime = 0;
            this.lastHeartUpdateTime = 0;
        }
    };
    DataManager._instance = null;
    return DataManager;
}());
exports.default = DataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvRGF0YU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCxxREFBb0Q7QUFDcEQsbURBQXNEO0FBQ3RELHlEQUF3RDtBQUN4RCxnQ0FBMkM7QUFDM0MsNERBQXVEO0FBRXZELElBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFBO0FBRTNCLFFBQUEsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDO0FBRWhDO0lBQUE7UUFtQ0ksT0FBTztRQUNQLFdBQU0sR0FBcUIsdUJBQWdCLENBQUMsUUFBUSxDQUFBO1FBQ3BELE9BQU87UUFDUCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixRQUFRO1FBQ1IsZUFBVSxHQUFTLEtBQUssQ0FBQztRQUV6QixVQUFVO1FBQ1YsVUFBSyxHQUFTLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQVEsQ0FBQyxDQUFDO1FBRWpCLGtCQUFrQjtRQUNsQixpQkFBWSxHQUFTLEtBQUssQ0FBQztRQUUzQixLQUFLO1FBQ0wsWUFBTyxHQUFZLElBQUksQ0FBQTtRQUN2Qix1Q0FBdUM7UUFDdkMsY0FBUyxHQUFlLEVBQUUsQ0FBQTtRQUMxQixPQUFPO1FBQ1Asb0JBQWUsR0FBYyxFQUFFLENBQUE7UUFDL0IsT0FBTztRQUNQLG1CQUFjLEdBQWMsRUFBRSxDQUFBO1FBQzlCLFFBQVE7UUFDUixXQUFNLEdBQVcsQ0FBQyxDQUFBO1FBQ2xCLHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQUVoQyxTQUFTO1FBQ1QscUJBQWdCLEdBQVUsQ0FBQyxDQUFBO1FBRTNCLHdCQUFtQixHQUFXLEVBQUUsQ0FBQTtRQUVoQyxPQUFPO1FBQ1AscUJBQWdCLEdBQVcsSUFBSSxDQUFBLENBQUMsT0FBTztRQUN2Qyx5QkFBb0IsR0FBVyxDQUFDLENBQUEsQ0FBQyxVQUFVO1FBQzNDLHdCQUFtQixHQUFXLENBQUMsQ0FBQSxDQUFDLGVBQWU7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LENBQUMsQ0FBQyxDQUFBO1NBQ3hHO1FBQUMsV0FBTTtZQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQTtZQUN6QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFBO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUE7U0FDL0I7SUFDTCxDQUFDO0lBekpjLHFCQUFTLEdBQVEsSUFBSSxDQUFBO0lBMEp4QyxrQkFBQztDQTVKRCxBQTRKQyxJQUFBO2tCQTVKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tICcuLi9kYXRhY2VudGVyL0dhbWVEYXRhJztcclxuaW1wb3J0IHsgaXRlbURhdGEgfSBmcm9tICcuLi9kYXRhY2VudGVyL0l0ZW1EYXRhJztcclxuaW1wb3J0IHsgbGV2ZWxEYXRhIH0gZnJvbSAnLi4vZGF0YWNlbnRlci9MZXZlbERhdGEnO1xyXG5pbXBvcnQgeyByYW5rSW5mb0RhdGEgfSBmcm9tICcuLi9kYXRhY2VudGVyL1JhbmtJbmZvJztcclxuaW1wb3J0IHsgc2V0dGluZ0RhdGEgfSBmcm9tICcuLi9kYXRhY2VudGVyL1NldHRpbmdEYXRhJztcclxuaW1wb3J0IHsgRU5VTV9HQU1FX1NUQVRVUyB9IGZyb20gJy4uL0VudW0nO1xyXG5pbXBvcnQgQ29tbW9uVG9vbCBmcm9tICcuLi9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVG9vbCc7XHJcblxyXG5jb25zdCBTVE9SQUdFX0tFWSA9ICdDQ19NQVRDSF9DT05UQUlORVInXHJcblxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVBfVElNRT01O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlPERhdGFNYW5hZ2VyPigpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNldHRpbmdEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiAgc2V0dGluZ0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxldmVsRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gIGxldmVsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXRlbURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuICBpdGVtRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2FtZURhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuICBnYW1lRGF0YTtcclxuICAgIH1cclxuICAgIGdldCByYW5rSW5mb0RhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuICByYW5rSW5mb0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45oiP54q25oCBXHJcbiAgICBzdGF0dXM6IEVOVU1fR0FNRV9TVEFUVVMgPSBFTlVNX0dBTUVfU1RBVFVTLlVOUlVOSU5HXHJcbiAgICAvLyDliqDovb3ov5vluqZcclxuICAgIGxvYWRpbmdSYXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v5piv5ZCm5byA5aeL6K6h5pe2XHJcbiAgICBpc1NjaGVkdWxlOmJvb2xlYW49ZmFsc2U7XHJcblxyXG4gICAgLy/mj5DnpLrmmK/lkKblvIDlp4vorqHml7ZcclxuICAgIGlzVGlwOmJvb2xlYW49ZmFsc2U7ICBcclxuICAgIHRpcFRpbWU6bnVtYmVyPTU7XHJcblxyXG4gICAgLy/mrbvlsYDlpLHotKXml7bmmK/lkKblt7Lmj5DnpLrkvb/nlKjliLfmlrDpgZPlhbdcclxuICAgIGlzVGlwUmVmcmVzaDpib29sZWFuPWZhbHNlO1xyXG5cclxuICAgIC8vIOmAieS4rVxyXG4gICAgY3VycmVudDogY2MuTm9kZSA9IG51bGxcclxuICAgIC8vIOWFpeafnOWVhuWTgeaVsOaNru+8jOS4iee7tOaVsOe7hCAgMee7tO+8muWHoOS4qui0p+aetuOAgTLnu7TvvJrlh6DlsYIg44CBM+e7tO+8muWHoOS4quWVhuWTgeOAgVxyXG4gICAgZ29vZHNEYXRhOiBudW1iZXJbXVtdID0gW11cclxuICAgIC8vIOWJjeaOkuWuueWZqFxyXG4gICAgZnJvbnRDb250YWluZXJzOiBjYy5Ob2RlW10gPSBbXVxyXG4gICAgLy8g5ZCO5o6S5a655ZmoXHJcbiAgICBiYWNrQ29udGFpbmVyczogY2MuTm9kZVtdID0gW11cclxuICAgIC8vIOe6ouW/g+WSjOiDvemHj1xyXG4gICAgaGVhcnRzOiBudW1iZXIgPSA1XHJcbiAgICBoZWFydENvbGxlY3RCeVZpZGVvOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8v55So5oi35Ymp5L2Z5pif5pif5pWwXHJcbiAgICBjb2xsZWN0U3RhckNvdW50OiBudW1iZXIgPTBcclxuXHJcbiAgICBwb3dlckNvbGxlY3RCeVZpZGVvOiBudW1iZXIgPSA1MFxyXG5cclxuICAgIC8vIOe6ouW/g+aBouWkjVxyXG4gICAgaGVhcnRSZWZyZXNoVGltZTogbnVtYmVyID0gMTgwMCAvLyDpl7TpmpTliLfmlrBcclxuICAgIGxhc3RIZWFydFJlZnJlc2hUaW1lOiBudW1iZXIgPSAwIC8vIOavj+asoeWIt+aWsOe6quW9leeCuVxyXG4gICAgbGFzdEhlYXJ0VXBkYXRlVGltZTogbnVtYmVyID0gMCAvLyDlkI7nu63nprvlvIDmuLjmiI/ov5Tlm57ooaXlhYXnuqLlv4NcclxuICAgIC8vIOa0l+eJjOmAkuW9kuagkVxyXG4gICAgc2h1ZmZsZUxvb3BOdW06IG51bWJlciA9IDBcclxuICAgIC8vIOa0l+eJjOS4rVxyXG4gICAgaXNTaHVmZmxpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgLy8g55Sf5oiQ6LW35aeL54K5XHJcbiAgICBzdGFyU3RhcnRQb3NBcnI6IGFueVtdID0gW11cclxuXHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLlVOUlVOSU5HXHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuYmFja0NvbnRhaW5lcnMgPSBbXVxyXG4gICAgICAgIHRoaXMuZnJvbnRDb250YWluZXJzID0gW11cclxuICAgICAgICB0aGlzLmdvb2RzRGF0YSA9IFtdXHJcbiAgICAgICAgdGhpcy5zaHVmZmxlTG9vcE51bSA9IDBcclxuICAgICAgICB0aGlzLmlzU2h1ZmZsaW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLnN0YXJTdGFydFBvc0FyciA9IFtdXHJcbiAgICAgICAgdGhpcy5pc1NjaGVkdWxlPWZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNUaXA9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aXBUaW1lPURFRkFVTFRfVElQX1RJTUU7XHJcbiAgICAgICAgdGhpcy5pc1RpcFJlZnJlc2g9ZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgaGVhcnRzOiB0aGlzLmhlYXJ0cyxcclxuICAgICAgICAgICAgY29sbGVjdFN0YXJDb3VudDogdGhpcy5jb2xsZWN0U3RhckNvdW50LFxyXG4gICAgICAgICAgICBsYXN0SGVhcnRSZWZyZXNoVGltZTogdGhpcy5sYXN0SGVhcnRSZWZyZXNoVGltZSxcclxuICAgICAgICAgICAgbGFzdEhlYXJ0VXBkYXRlVGltZTogdGhpcy5sYXN0SGVhcnRVcGRhdGVUaW1lLFxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmUoKSB7XHJcbiAgICAgICAgcmFua0luZm9EYXRhLmlzUmFua0xpc3Q9dHJ1ZTtcclxuICAgICAgICByYW5rSW5mb0RhdGEuaW5pdFJhbmtJbmZvKCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXRlbURhdGEubG9hZEl0ZW1EYXRhKCk7XHJcblxyXG4gICAgICAgIC8v5q+P5aSp5pWw5o2u5Yid5aeL5YyWXHJcbiAgICAgICAgaWYoQ29tbW9uVG9vbC5pc05leHREYXkoRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2FtZURhdGEubGFzdE9wZW5UaW1lKSl7IFxyXG4gICAgICAgICAgICBsZXQgd2Vlaz1Db21tb25Ub29sLnRoZVdlZWtPZlllYXIobmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGxldCBtb250aD1uZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyPW5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgbGV0IGxhc3RXZWVrPUNvbW1vblRvb2wudGhlV2Vla09mWWVhcihuZXcgRGF0ZShEYXRhTWFuYWdlci5pbnN0YW5jZS5nYW1lRGF0YS5sYXN0T3BlblRpbWUpKTtcclxuICAgICAgICAgICAgaWYod2VlayE9bGFzdFdlZWspe1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLndlZWtTY29yZT0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXN0TW9udGg9bmV3IERhdGUoRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2FtZURhdGEubGFzdE9wZW5UaW1lKS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICBpZihtb250aCE9bGFzdE1vbnRoKXtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJhbmtJbmZvRGF0YS5tb250aFNjb3JlPTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxhc3RZZWFyPW5ldyBEYXRlKERhdGFNYW5hZ2VyLmluc3RhbmNlLmdhbWVEYXRhLmxhc3RPcGVuVGltZSkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgaWYoeWVhciE9bGFzdFllYXIpe1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnllYXJTY29yZT0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS50b2RheVBsYXlDb3VudD0wO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEudG9kYXlQbGF5RmFpbENvdW50PTA7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS50b2RheVBsYXlMZXZlbHM9MDtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnNhdmVDdXJyRGF0YSgpO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nYW1lRGF0YS5sYXN0T3BlblRpbWU9bmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdhbWVEYXRhLmxvZ2luQWxsRGF5cysrO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yYW5rSW5mb0RhdGEudG9kYXlTY29yZT0wO1xyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5yYW5rSW5mb0RhdGEuc2F2ZUJlc3RSYW5rRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nYW1lRGF0YS5sb2dpbkNvdW50cysrO1xyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdhbWVEYXRhLmxvZ2luVG9kYXlDb3VudHMrKztcclxuXHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuZ2FtZURhdGEuc2F2ZURhdGEoKTtcclxuICAgICAgIC8vIGxldCByYW5rTGlzdENsYXNzOlJhbmtMaXN0Q2xhc3M9IHJhbmtJbmZvRGF0YS5nZXRSYW5rRGF0YShDb25zdGFudHMuUmFua1R5cGUuVE9EQVkpO1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coXCJyYW5rTGlzdENsYXNzXCIscmFua0xpc3RDbGFzcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IF9kYXRhID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSBhcyBhbnlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShfZGF0YSlcclxuICAgICAgICAgICAgdGhpcy5oZWFydHMgPSB0eXBlb2YgZGF0YS5oZWFydHMgPT0gJ251bWJlcicgPyBkYXRhLmhlYXJ0cyA6IDVcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0U3RhckNvdW50ID0gdHlwZW9mIGRhdGEuY29sbGVjdFN0YXJDb3VudCA9PSAnbnVtYmVyJyA/IGRhdGEuY29sbGVjdFN0YXJDb3VudCA6IDVcclxuICAgICAgICAgICAgdGhpcy5sYXN0SGVhcnRSZWZyZXNoVGltZSA9IHR5cGVvZiBkYXRhLmxhc3RIZWFydFJlZnJlc2hUaW1lID09ICdudW1iZXInID8gZGF0YS5sYXN0SGVhcnRSZWZyZXNoVGltZSA6IDBcclxuICAgICAgICAgICAgdGhpcy5sYXN0SGVhcnRVcGRhdGVUaW1lID0gdHlwZW9mIGRhdGEubGFzdEhlYXJ0VXBkYXRlVGltZSA9PSAnbnVtYmVyJyA/IGRhdGEubGFzdEhlYXJ0VXBkYXRlVGltZSA6IDBcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFydHMgPSA1XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdFN0YXJDb3VudCA9IDBcclxuICAgICAgICAgICAgdGhpcy5sYXN0SGVhcnRSZWZyZXNoVGltZSA9IDBcclxuICAgICAgICAgICAgdGhpcy5sYXN0SGVhcnRVcGRhdGVUaW1lID0gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=