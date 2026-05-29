
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/datacenter/LevelData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGFjZW50ZXIvTGV2ZWxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBZ0U7QUFLaEU7SUFBNEMsa0NBQVU7SUFzRWxEO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBbEVELEFBQ0EsTUFETTtRQUNOLFdBQUssR0FBVSxDQUFDLENBQUM7UUFHakIsQUFDQSxNQURNO1FBQ04sY0FBUSxHQUFVLENBQUMsQ0FBQztRQUdwQixBQUNBLFNBRFM7UUFDVCxXQUFLLEdBQVEsQ0FBQyxDQUFDO1FBRWQsMkJBQTJCO1FBQzNCLGdCQUFVLEdBQVEsQ0FBQyxDQUFDO1FBRXBCLGNBQWM7UUFDZCxlQUFTLEdBQVEsQ0FBQyxDQUFDO1FBRW5CLFlBQVk7UUFDWixlQUFTLEdBQVEsQ0FBQyxDQUFDO1FBRW5CLFVBQVU7UUFDVixrQkFBWSxHQUFRLENBQUMsQ0FBQztRQUV0QixhQUFhO1FBQ2Isa0JBQVksR0FBUSxDQUFDLENBQUM7UUFFdEIsWUFBWTtRQUNaLGVBQVMsR0FBUSxDQUFDLENBQUM7UUFFcEIsU0FBUztRQUNULHFCQUFlLEdBQVEsQ0FBQyxDQUFDO1FBRXpCLFNBQVM7UUFDVCxvQkFBYyxHQUFRLENBQUMsQ0FBQztRQUV4QixTQUFTO1FBQ1Qsd0JBQWtCLEdBQVEsQ0FBQyxDQUFDO1FBRTVCLFdBQVc7UUFDWCxlQUFTLEdBQVMsS0FBSyxDQUFDO1FBRXhCLGlCQUFpQjtRQUNqQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUV6Qix3QkFBd0I7UUFDeEIsc0JBQWdCLEdBQVUsQ0FBQyxDQUFDO1FBRTVCLDZDQUE2QztRQUM3QyxzQkFBZ0IsR0FBVSxDQUFDLENBQUM7UUFFNUIsa0JBQWtCO1FBQ2xCLGtCQUFZLEdBQUMsQ0FBQyxDQUFDO1FBRWYsTUFBTTtRQUNOLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsUUFBUTtRQUNSLGdCQUFVLEdBQVcs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LEVBQ1Q7WUFDSSxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBRyxDQUFDLENBQUM7U0FDMUI7YUFBSTtZQUNELE9BQU8sQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTlKRDtRQUZDLGtCQUFLLEVBQUU7aURBRVM7SUFJakI7UUFGQyxrQkFBSyxFQUFFO29EQUVZO0lBSXBCO1FBRkMsa0JBQUssRUFBRTtpREFFTztJQWpCRSxjQUFjO1FBRGxDLGVBQUUsQ0FBQyxXQUFXLENBQUM7T0FDSyxjQUFjLENBMktsQztJQUFELHFCQUFDO0NBM0tELEFBMktDLENBM0syQyxvQkFBVSxHQTJLckQ7a0JBM0tvQixjQUFjO0FBNkt4QixRQUFBLFNBQVMsR0FBa0Isb0JBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3lzdGVtRGF0YSwgeyBkYywgZmllbGQgfSBmcm9tIFwiLi4vZnJhbWV3b3JrL1N5c3RlbURhdGFcIjtcclxuXHJcblxyXG5cclxuQGRjKFwiTGV2ZWxEYXRhXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsRGF0YUNsYXNzIGV4dGVuZHMgU3lzdGVtRGF0YXtcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBmaWVsZCgpXHJcbiAgICAvL+W9k+WJjeWFs+WNoVxyXG4gICAgbGV2ZWw6bnVtYmVyID0gMTtcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgLy/mnIDlpKflhbPljaFcclxuICAgIGxldmVsTWF4Om51bWJlciA9IDA7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIC8v5b2T5YmN5YWz5Y2h6K6h5pe25ZmoXHJcbiAgICB0aW1lcjpudW1iZXI9MDtcclxuXHJcbiAgICAgLy/lvZPliY3lhbPljaHlvIDlp4vmrKHmlbDvvIjljIXmi6zov5vlhaXjgIHlpLHotKXjgIHph43mlrDlvIDlp4vvvIkgICBcclxuICAgICBzdGFydENvdW50Om51bWJlcj0wO1xyXG5cclxuICAgICAvL+W9k+WJjei/nue7remAmui/h+eahOWFs+WNoeaVsCAgXHJcbiAgICAgc3VjY0NvdW50Om51bWJlcj0wO1xyXG4gXHJcbiAgICAgLy/lvZPliY3ov57nu63lpLHotKXnmoTmrKHmlbAgXHJcbiAgICAgZmFpbENvdW50Om51bWJlcj0wO1xyXG4gXHJcbiAgICAgLy/lvZPliY3lhbPljaHlpI3mtLvmrKHmlbBcclxuICAgICByZXZpdmV3Q291bnQ6bnVtYmVyPTA7XHJcbiBcclxuICAgICAvL+W9k+WJjeWFs+WNoemHjeeOqeasoeaVsCAgIFxyXG4gICAgIHJlc3RhcnRDb3VudDpudW1iZXI9MDtcclxuIFxyXG4gICAgIC8v55yL5bm/5ZGK5YmN6L+e57ut546p55qE5qyh5pWwXHJcbiAgICAgcGxheUNvdW50Om51bWJlcj0wO1xyXG5cclxuICAgIC8v5LuK5aSp546p5LqG5aSa5bCR5YWzXHJcbiAgICB0b2RheVBsYXlMZXZlbHM6bnVtYmVyPTA7XHJcblxyXG4gICAgLy/ku4rlpKnnjqnkuoblpJrlsJHmrKFcclxuICAgIHRvZGF5UGxheUNvdW50Om51bWJlcj0wOyAgIFxyXG4gXHJcbiAgICAvL+S7iuWkqeWksei0peWkmuWwkeasoVxyXG4gICAgdG9kYXlQbGF5RmFpbENvdW50Om51bWJlcj0wOyAgXHJcblxyXG4gICAgLy/lvZPliY3lhbPljaHmmK/lkKblpI3mtLvov4dcclxuICAgIGlzUmV2aXZldzpib29sZWFuPWZhbHNlOyBcclxuICAgIFxyXG4gICAgLy/mgLvliKDpmaTnianlk4Hnu5/orqHvvJrmtojpmaTkuIDnu4TorrDkuIDmrKFcclxuICAgIGNsZWFyQWxsTnVtczogbnVtYmVyID0gMDtcclxuICAgIFxyXG4gICAgLy/nlKjmiLflvZPliY3lhbPljaHmtojpmaTlk4Hnu5/orqEgICAg5raI6Zmk5LiA57uE6K6w5LiA5qyhXHJcbiAgICBjdXJyZW50Q2xlYXJOdW1zOm51bWJlciA9IDA7XHJcblxyXG4gICAgLy/nlKjmiLflvZPliY3lhbPljaHmtojpmaTliIbmlbAgICAgLy/orqHnrpfmlrnlvI8g5raI6ZmkMeS4quS4ieWIhu+8jOaciWNvbWJvICsgY29tYuaVsOOAglxyXG4gICAgY3VycmVudFN0YXJTY29yZTpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v5paw5omL5byV5a+85YWz5Y2h6LWw5Yiw56ys5Yeg5q2l77yM5oC75YWxMuatpVxyXG4gICAgbmV3R3VpZGVTdGVwPTE7XHJcblxyXG4gICAgLy8g6L+e5Ye75pWwXHJcbiAgICBjb21ibzogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyDov57lh7vlgJLorqHml7ZcclxuICAgIGNvbWJvVGltZXI6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIC8v5qC85byPICAxOmxvc2U6IDAgc2VjOiAyMy4xXHJcbiAgICBsZXZlbHMgPSB7fVxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkQ3VyckRhdGEoKTtcclxuICAgICAgICB0aGlzLmxvYWRQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXREYXRhKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2xlYXJOdW1zPTA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhclNjb3JlPTA7XHJcbiAgICAgICAgdGhpcy5pc1Jldml2ZXc9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lcj0wO1xyXG4gICAgICAgIHRoaXMuY29tYm89MDtcclxuICAgICAgICB0aGlzLmNvbWJvVGltZXI9MjA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRDdXJyRGF0YSgpe1xyXG4gICAgICAgIGxldCBzdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkxldmVsRGF0YS5jdXJyRGF0YVwiKTtcclxuICAgICAgICBpZiAoc3RyKXtcclxuICAgICAgICAgICAgbGV0IGNvaW5EYXRhcyA9IEpTT04ucGFyc2Uoc3RyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvaW5EYXRhc1tcInN1Y2NDb3VudFwiXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2NDb3VudCA9ICBOdW1iZXIoY29pbkRhdGFzW1wic3VjY0NvdW50XCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2luRGF0YXNbXCJmYWlsQ291bnRcIl0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsQ291bnQgPSAgTnVtYmVyKGNvaW5EYXRhc1tcImZhaWxDb3VudFwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGNvaW5EYXRhc1tcInJldml2ZXdDb3VudFwiXSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldml2ZXdDb3VudCA9ICAgTnVtYmVyKGNvaW5EYXRhc1tcInJldml2ZXdDb3VudFwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY29pbkRhdGFzW1wicmVzdGFydENvdW50XCJdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydENvdW50ID0gICBOdW1iZXIoY29pbkRhdGFzW1wicmVzdGFydENvdW50XCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2luRGF0YXNbXCJwbGF5Q291bnRcIl0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q291bnQgPSAgIE51bWJlcihjb2luRGF0YXNbXCJwbGF5Q291bnRcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvaW5EYXRhc1tcInRvZGF5UGxheUNvdW50XCJdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kYXlQbGF5Q291bnQgPSAgIE51bWJlcihjb2luRGF0YXNbXCJ0b2RheVBsYXlDb3VudFwiXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY29pbkRhdGFzW1widG9kYXlQbGF5TGV2ZWxzXCJdIT1udWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9kYXlQbGF5TGV2ZWxzID0gICBOdW1iZXIoY29pbkRhdGFzW1widG9kYXlQbGF5TGV2ZWxzXCJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2luRGF0YXNbXCJ0b2RheVBsYXlGYWlsQ291bnRcIl0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RheVBsYXlGYWlsQ291bnQgPSAgIE51bWJlcihjb2luRGF0YXNbXCJ0b2RheVBsYXlGYWlsQ291bnRcIl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ3VyckRhdGEoKXtcclxuICAgICAgICBsZXQgY29pbkRhdGFzPXt9O1xyXG4gICAgICAgIGNvaW5EYXRhc1tcInN1Y2NDb3VudFwiXT10aGlzLnN1Y2NDb3VudDtcclxuICAgICAgICBjb2luRGF0YXNbXCJmYWlsQ291bnRcIl09dGhpcy5mYWlsQ291bnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29pbkRhdGFzW1wicmV2aXZld0NvdW50XCJdPXRoaXMucmV2aXZld0NvdW50OyAgICAgXHJcbiAgICAgICAgY29pbkRhdGFzW1wicmVzdGFydENvdW50XCJdPXRoaXMucmVzdGFydENvdW50OyBcclxuICAgICAgICBjb2luRGF0YXNbXCJwbGF5Q291bnRcIl09dGhpcy5wbGF5Q291bnQ7IFxyXG4gICAgICAgIGNvaW5EYXRhc1tcInRvZGF5UGxheUNvdW50XCJdPXRoaXMudG9kYXlQbGF5Q291bnQ7IFxyXG4gICAgICAgIGNvaW5EYXRhc1tcInRvZGF5UGxheUxldmVsc1wiXT10aGlzLnRvZGF5UGxheUxldmVsczsgXHJcbiAgICAgICAgY29pbkRhdGFzW1widG9kYXlQbGF5RmFpbENvdW50XCJdPXRoaXMudG9kYXlQbGF5RmFpbENvdW50OyBcclxuICAgICAgICBcclxuICAgICAgICBsZXQgbDQgPSBKU09OLnN0cmluZ2lmeShjb2luRGF0YXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiTGV2ZWxEYXRhLmN1cnJEYXRhXCIsbDQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkUHJvZ3Jlc3MoKXtcclxuICAgICAgICBsZXQgcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGV2ZWxkYXRhLmxldmVsc1wiKTtcclxuICAgICAgICBpZiAocyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzID0gSlNPTi5wYXJzZShzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZUxldmVsKGx2KSB7XHJcbiAgICAgICAgaWYoIXRoaXMubGV2ZWxzW2x2XSlcclxuICAgICAgICAgICAgdGhpcy5sZXZlbHNbbHZdID0ge3NlYzowLGxvc2U6MH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRMZXZlbEluZm8obHYsa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzLmxldmVsc1tsdi50b1N0cmluZygpXVtrZXldID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldExldmVsSW5mbyhsdixrZXkpe1xyXG4gICAgICAgIGxldCBsdkluZm8gPSB0aGlzLmxldmVsc1tsdi50b1N0cmluZygpXVxyXG4gICAgICAgIGlmKGx2SW5mbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBsdkluZm9ba2V5XSB8fDA7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlUHJvZ3Jlc3MoKXtcclxuICAgICAgICBsZXQgcyA9IEpTT04uc3RyaW5naWZ5KHRoaXMubGV2ZWxzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxldmVsZGF0YS5sZXZlbHNcIixzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHZhciBsZXZlbERhdGE6TGV2ZWxEYXRhQ2xhc3MgPSBTeXN0ZW1EYXRhLnJlZ2lzdGVyKExldmVsRGF0YUNsYXNzKSJdfQ==