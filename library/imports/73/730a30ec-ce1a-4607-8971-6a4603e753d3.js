"use strict";
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