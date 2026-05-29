
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/datacenter/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8255Z72CNDDo5zE9dd2MvC', 'GameData');
// scripts/datacenter/GameData.ts

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
exports.gameData = void 0;
var SystemData_1 = require("../framework/SystemData");
var GameDataClass = /** @class */ (function (_super) {
    __extends(GameDataClass, _super);
    function GameDataClass() {
        var _this = _super.call(this) || this;
        //是否播放过新手引导;
        _this.isWatchNewGuide = false;
        //上次登录时间，每24小时更新
        _this.lastOpenTime = new Date().getTime();
        //用户登录过多少天
        _this.loginAllDays = 1;
        //用户登录过多少次
        _this.loginCounts = 0;
        //用户当天登录过多少次
        _this.loginTodayCounts = 0;
        return _this;
    }
    GameDataClass.prototype.init = function () {
    };
    __decorate([
        SystemData_1.field()
    ], GameDataClass.prototype, "isWatchNewGuide", void 0);
    __decorate([
        SystemData_1.field()
    ], GameDataClass.prototype, "lastOpenTime", void 0);
    __decorate([
        SystemData_1.field()
    ], GameDataClass.prototype, "loginAllDays", void 0);
    __decorate([
        SystemData_1.field()
    ], GameDataClass.prototype, "loginCounts", void 0);
    __decorate([
        SystemData_1.field()
    ], GameDataClass.prototype, "loginTodayCounts", void 0);
    GameDataClass = __decorate([
        SystemData_1.dc("GameData")
    ], GameDataClass);
    return GameDataClass;
}(SystemData_1.default));
exports.default = GameDataClass;
exports.gameData = SystemData_1.default.register(GameDataClass);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGFjZW50ZXIvR2FtZURhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFnRTtBQUtoRTtJQUEyQyxpQ0FBVTtJQTJCakQ7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUF2QkQsWUFBWTtRQUVaLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGdCQUFnQjtRQUVoQixrQkFBWSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHMUMsQUFDQSxVQURVO1FBQ1Ysa0JBQVksR0FBVSxDQUFDLENBQUM7UUFHeEIsQUFDQSxVQURVO1FBQ1YsaUJBQVcsR0FBVSxDQUFDLENBQUM7UUFHdkIsQUFDQSxZQURZO1FBQ1osc0JBQWdCLEdBQVUsQ0FBQyxDQUFDOztJQUs1QixDQUFDO0lBM0JELDRCQUFJLEdBQUo7SUFFQSxDQUFDO0lBSUQ7UUFEQyxrQkFBSyxFQUFFOzBEQUN5QjtJQUlqQztRQURDLGtCQUFLLEVBQUU7dURBQ2tDO0lBSTFDO1FBRkMsa0JBQUssRUFBRTt1REFFZ0I7SUFJeEI7UUFGQyxrQkFBSyxFQUFFO3NEQUVlO0lBSXZCO1FBRkMsa0JBQUssRUFBRTsyREFFb0I7SUF4QlgsYUFBYTtRQURqQyxlQUFFLENBQUMsVUFBVSxDQUFDO09BQ00sYUFBYSxDQStCakM7SUFBRCxvQkFBQztDQS9CRCxBQStCQyxDQS9CMEMsb0JBQVUsR0ErQnBEO2tCQS9Cb0IsYUFBYTtBQWlDdkIsUUFBQSxRQUFRLEdBQWlCLG9CQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN5c3RlbURhdGEsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uL2ZyYW1ld29yay9TeXN0ZW1EYXRhXCI7XHJcblxyXG5cclxuXHJcbkBkYyhcIkdhbWVEYXRhXCIpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVEYXRhQ2xhc3MgZXh0ZW5kcyBTeXN0ZW1EYXRhe1xyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+aYr+WQpuaSreaUvui/h+aWsOaJi+W8leWvvDtcclxuICAgIEBmaWVsZCgpXHJcbiAgICBpc1dhdGNoTmV3R3VpZGU6Ym9vbGVhbiAgPSBmYWxzZTtcclxuXHJcbiAgICAvL+S4iuasoeeZu+W9leaXtumXtO+8jOavjzI05bCP5pe25pu05pawXHJcbiAgICBAZmllbGQoKVxyXG4gICAgbGFzdE9wZW5UaW1lOm51bWJlciA9bmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIC8v55So5oi355m75b2V6L+H5aSa5bCR5aSpXHJcbiAgICBsb2dpbkFsbERheXM6bnVtYmVyID0gMTtcclxuXHJcbiAgICBAZmllbGQoKVxyXG4gICAgLy/nlKjmiLfnmbvlvZXov4flpJrlsJHmrKFcclxuICAgIGxvZ2luQ291bnRzOm51bWJlciA9IDA7XHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIC8v55So5oi35b2T5aSp55m75b2V6L+H5aSa5bCR5qyhXHJcbiAgICBsb2dpblRvZGF5Q291bnRzOm51bWJlciA9IDA7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgdmFyIGdhbWVEYXRhOkdhbWVEYXRhQ2xhc3MgPSBTeXN0ZW1EYXRhLnJlZ2lzdGVyKEdhbWVEYXRhQ2xhc3MpIl19