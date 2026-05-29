"use strict";
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