
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/datacenter/SettingData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88bfeO/5A5Mh4CXlRKGLQcw', 'SettingData');
// scripts/datacenter/SettingData.ts

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
exports.settingData = void 0;
var SystemData_1 = require("../framework/SystemData");
var SettingData = /** @class */ (function (_super) {
    __extends(SettingData, _super);
    function SettingData() {
        var _this = _super.call(this) || this;
        //是否播放音效
        _this.isPlaySfx = true;
        //是否播放背景音乐
        _this.isPlayBgm = true;
        //是否开启振动提示
        _this.isVibrateEnabled = true;
        //选择的语言，默认英语;
        _this.currLanguage = 'en';
        //语言是否已锁定
        _this.lockLanguage = false;
        //debug相关
        _this.isDebug = false;
        _this.uiDebug = false;
        _this.version = "V1.1.9";
        _this.gdprFlag = false;
        return _this;
        // onexit game =>save
    }
    SettingData.prototype.init = function () {
    };
    __decorate([
        SystemData_1.field()
    ], SettingData.prototype, "isPlaySfx", void 0);
    __decorate([
        SystemData_1.field()
    ], SettingData.prototype, "isPlayBgm", void 0);
    __decorate([
        SystemData_1.field()
    ], SettingData.prototype, "isVibrateEnabled", void 0);
    __decorate([
        SystemData_1.field()
    ], SettingData.prototype, "currLanguage", void 0);
    __decorate([
        SystemData_1.field()
    ], SettingData.prototype, "lockLanguage", void 0);
    __decorate([
        SystemData_1.field() //是否开启debug
    ], SettingData.prototype, "isDebug", void 0);
    __decorate([
        SystemData_1.field() //是否开启uidebug
    ], SettingData.prototype, "uiDebug", void 0);
    __decorate([
        SystemData_1.field() //当前版本号
    ], SettingData.prototype, "version", void 0);
    __decorate([
        SystemData_1.field() //gpdr是否已确认
    ], SettingData.prototype, "gdprFlag", void 0);
    SettingData = __decorate([
        SystemData_1.dc("SettingData")
    ], SettingData);
    return SettingData;
}(SystemData_1.default));
exports.default = SettingData;
exports.settingData = SystemData_1.default.register(SettingData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2RhdGFjZW50ZXIvU2V0dGluZ0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHNEQUFnRTtBQUloRTtJQUF5QywrQkFBVTtJQW9DL0M7UUFBQSxZQUVJLGlCQUFPLFNBRVY7UUFoQ0QsQUFDQSxRQURRO1FBQ1IsZUFBUyxHQUFXLElBQUksQ0FBQztRQUN6QixVQUFVO1FBRVYsZUFBUyxHQUFXLElBQUksQ0FBQztRQUN6QixVQUFVO1FBRVYsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRWpDLGFBQWE7UUFFYixrQkFBWSxHQUFTLElBQUksQ0FBQztRQUMxQixTQUFTO1FBRVQsa0JBQVksR0FBVSxLQUFLLENBQUM7UUFFNUIsU0FBUztRQUVULGFBQU8sR0FBUyxLQUFLLENBQUM7UUFFdEIsYUFBTyxHQUFTLEtBQUssQ0FBQztRQUd0QixhQUFPLEdBQVEsUUFBUSxDQUFDO1FBR3hCLGNBQVEsR0FBUyxLQUFLLENBQUM7O1FBS25CLHFCQUFxQjtJQUN6QixDQUFDO0lBdENELDBCQUFJLEdBQUo7SUFFQSxDQUFDO0lBS0Q7UUFGQyxrQkFBSyxFQUFFO2tEQUVpQjtJQUd6QjtRQURDLGtCQUFLLEVBQUU7a0RBQ2lCO0lBR3pCO1FBREMsa0JBQUssRUFBRTt5REFDeUI7SUFJakM7UUFEQyxrQkFBSyxFQUFFO3FEQUNrQjtJQUcxQjtRQURDLGtCQUFLLEVBQUU7cURBQ29CO0lBSTVCO1FBREMsa0JBQUssRUFBRSxDQUFDLFdBQVc7Z0RBQ0U7SUFFdEI7UUFEQyxrQkFBSyxFQUFFLENBQUMsYUFBYTtnREFDQTtJQUd0QjtRQURDLGtCQUFLLEVBQUUsQ0FBQyxPQUFPO2dEQUNRO0lBR3hCO1FBREMsa0JBQUssRUFBRSxDQUFDLFdBQVc7aURBQ0c7SUFsQ04sV0FBVztRQUQvQixlQUFFLENBQUMsYUFBYSxDQUFDO09BQ0csV0FBVyxDQTBDL0I7SUFBRCxrQkFBQztDQTFDRCxBQTBDQyxDQTFDd0Msb0JBQVUsR0EwQ2xEO2tCQTFDb0IsV0FBVztBQTRDckIsUUFBQSxXQUFXLEdBQWUsb0JBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFN5c3RlbURhdGEsIHsgZGMsIGZpZWxkIH0gZnJvbSBcIi4uL2ZyYW1ld29yay9TeXN0ZW1EYXRhXCI7XHJcblxyXG5cclxuQGRjKFwiU2V0dGluZ0RhdGFcIilcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ0RhdGEgZXh0ZW5kcyBTeXN0ZW1EYXRhe1xyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgQGZpZWxkKClcclxuICAgIC8v5piv5ZCm5pKt5pS+6Z+z5pWIXHJcbiAgICBpc1BsYXlTZng6Ym9vbGVhbiA9IHRydWU7XHJcbiAgICAvL+aYr+WQpuaSreaUvuiDjOaZr+mfs+S5kFxyXG4gICAgQGZpZWxkKClcclxuICAgIGlzUGxheUJnbTpib29sZWFuID0gdHJ1ZTtcclxuICAgIC8v5piv5ZCm5byA5ZCv5oyv5Yqo5o+Q56S6XHJcbiAgICBAZmllbGQoKVxyXG4gICAgaXNWaWJyYXRlRW5hYmxlZDpib29sZWFuICA9IHRydWU7XHJcblxyXG4gICAgLy/pgInmi6nnmoTor63oqIDvvIzpu5jorqToi7Hor607XHJcbiAgICBAZmllbGQoKVxyXG4gICAgY3Vyckxhbmd1YWdlOnN0cmluZyA9J2VuJztcclxuICAgIC8v6K+t6KiA5piv5ZCm5bey6ZSB5a6aXHJcbiAgICBAZmllbGQoKVxyXG4gICAgbG9ja0xhbmd1YWdlOmJvb2xlYW4gPWZhbHNlO1xyXG5cclxuICAgIC8vZGVidWfnm7jlhbNcclxuICAgIEBmaWVsZCgpIC8v5piv5ZCm5byA5ZCvZGVidWdcclxuICAgIGlzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIEBmaWVsZCgpIC8v5piv5ZCm5byA5ZCvdWlkZWJ1Z1xyXG4gICAgdWlEZWJ1Zzpib29sZWFuPWZhbHNlOyAgXHJcbiAgICBcclxuICAgIEBmaWVsZCgpIC8v5b2T5YmN54mI5pys5Y+3XHJcbiAgICB2ZXJzaW9uOnN0cmluZz1cIlYxLjEuOVwiOyAgICAgIFxyXG5cclxuICAgIEBmaWVsZCgpIC8vZ3BkcuaYr+WQpuW3suehruiupFxyXG4gICAgZ2RwckZsYWc6Ym9vbGVhbj1mYWxzZTsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gb25leGl0IGdhbWUgPT5zYXZlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgdmFyIHNldHRpbmdEYXRhOlNldHRpbmdEYXRhID0gU3lzdGVtRGF0YS5yZWdpc3RlcihTZXR0aW5nRGF0YSkiXX0=