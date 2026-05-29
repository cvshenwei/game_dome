"use strict";
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