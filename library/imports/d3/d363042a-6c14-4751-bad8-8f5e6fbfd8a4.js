"use strict";
cc._RF.push(module, 'd3630QqbBRHUbrYj15vv9ik', 'LevelData');
// scripts/datacenter/LevelData.ts

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
exports.levelData = void 0;
var SystemData_1 = require("../framework/SystemData");
var LevelDataClass = /** @class */ (function (_super) {
    __extends(LevelDataClass, _super);
    function LevelDataClass() {
        var _this = _super.call(this) || this;
        //当前关卡
        _this.level = 1;
        //最大关卡
        _this.levelMax = 0;
        //当前关卡计时器
        _this.timer = 0;
        //当前关卡开始次数（包括进入、失败、重新开始）   
        _this.startCount = 0;
        //当前连续通过的关卡数  
        _this.succCount = 0;
        //当前连续失败的次数 
        _this.failCount = 0;
        //当前关卡复活次数
        _this.revivewCount = 0;
        //当前关卡重玩次数   
        _this.restartCount = 0;
        //看广告前连续玩的次数
        _this.playCount = 0;
        //今天玩了多少关
        _this.todayPlayLevels = 0;
        //今天玩了多少次
        _this.todayPlayCount = 0;
        //今天失败多少次
        _this.todayPlayFailCount = 0;
        //当前关卡是否复活过
        _this.isRevivew = false;
        //总删除物品统计：消除一组记一次
        _this.clearAllNums = 0;
        //用户当前关卡消除品统计    消除一组记一次
        _this.currentClearNums = 0;
        //用户当前关卡消除分数    //计算方式 消除1个三分，有combo + comb数。
        _this.currentStarScore = 0;
        //新手引导关卡走到第几步，总共2步
        _this.newGuideStep = 1;
        // 连击数
        _this.combo = 0;
        // 连击倒计时
        _this.comboTimer = 20;
        //格式  1:lose: 0 sec: 23.1
        _this.levels = {};
        _this.loadCurrData();
        _this.loadProgress();
        return _this;
    }
    LevelDataClass.prototype.init = function () {
    };
    LevelDataClass.prototype.initData = function () {
        this.currentClearNums = 0;
        this.currentStarScore = 0;
        this.isRevivew = false;
        this.timer = 0;
        this.combo = 0;
        this.comboTimer = 20;
    };
    LevelDataClass.prototype.loadCurrData = function () {
        var str = localStorage.getItem("LevelData.currData");
        if (str) {
            var coinDatas = JSON.parse(str);
            if (coinDatas["succCount"] != null) {
                this.succCount = Number(coinDatas["succCount"]);
            }
            if (coinDatas["failCount"] != null) {
                this.failCount = Number(coinDatas["failCount"]);
            }
            if (coinDatas["revivewCount"] != null) {
                this.revivewCount = Number(coinDatas["revivewCount"]);
            }
            if (coinDatas["restartCount"] != null) {
                this.restartCount = Number(coinDatas["restartCount"]);
            }
            if (coinDatas["playCount"] != null) {
                this.playCount = Number(coinDatas["playCount"]);
            }
            if (coinDatas["todayPlayCount"] != null) {
                this.todayPlayCount = Number(coinDatas["todayPlayCount"]);
            }
            if (coinDatas["todayPlayLevels"] != null) {
                this.todayPlayLevels = Number(coinDatas["todayPlayLevels"]);
            }
            if (coinDatas["todayPlayFailCount"] != null) {
                this.todayPlayFailCount = Number(coinDatas["todayPlayFailCount"]);
            }
        }
    };
    LevelDataClass.prototype.saveCurrData = function () {
        var coinDatas = {};
        coinDatas["succCount"] = this.succCount;
        coinDatas["failCount"] = this.failCount;
        coinDatas["revivewCount"] = this.revivewCount;
        coinDatas["restartCount"] = this.restartCount;
        coinDatas["playCount"] = this.playCount;
        coinDatas["todayPlayCount"] = this.todayPlayCount;
        coinDatas["todayPlayLevels"] = this.todayPlayLevels;
        coinDatas["todayPlayFailCount"] = this.todayPlayFailCount;
        var l4 = JSON.stringify(coinDatas);
        localStorage.setItem("LevelData.currData", l4);
    };
    LevelDataClass.prototype.loadProgress = function () {
        var s = localStorage.getItem("leveldata.levels");
        if (s) {
            this.levels = JSON.parse(s);
        }
    };
    LevelDataClass.prototype.prepareLevel = function (lv) {
        if (!this.levels[lv])
            this.levels[lv] = { sec: 0, lose: 0 };
    };
    LevelDataClass.prototype.setLevelInfo = function (lv, key, value) {
        this.levels[lv.toString()][key] = value;
    };
    LevelDataClass.prototype.getLevelInfo = function (lv, key) {
        var lvInfo = this.levels[lv.toString()];
        if (lvInfo) {
            return lvInfo[key] || 0;
        }
        else {
            return 0;
        }
    };
    LevelDataClass.prototype.saveProgress = function () {
        var s = JSON.stringify(this.levels);
        localStorage.setItem("leveldata.levels", s);
    };
    __decorate([
        SystemData_1.field()
    ], LevelDataClass.prototype, "level", void 0);
    __decorate([
        SystemData_1.field()
    ], LevelDataClass.prototype, "levelMax", void 0);
    __decorate([
        SystemData_1.field()
    ], LevelDataClass.prototype, "timer", void 0);
    LevelDataClass = __decorate([
        SystemData_1.dc("LevelData")
    ], LevelDataClass);
    return LevelDataClass;
}(SystemData_1.default));
exports.default = LevelDataClass;
exports.levelData = SystemData_1.default.register(LevelDataClass);

cc._RF.pop();