"use strict";
cc._RF.push(module, '486a1SFiFFC27CBM2GwpI1c', 'i18nManage');
// scripts/i18n/i18nManage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18nManage = void 0;
var Constants_1 = require("../Constants");
var i18nManage = /** @class */ (function () {
    function i18nManage() {
    }
    //private static defaultLabelData: { [key: string]: string } = {};   // 文字配置
    i18nManage.checkInit = function () {
        if (!this.language) {
            this.setLanguage("en");
        }
    };
    /**
     * 设置语言
     */
    i18nManage.setLanguage = function (language) {
        if (this.language === language) {
            return;
        }
        if (language == null || language.length != 2) {
            language = 'en';
        }
        for (var index = 0; index < Constants_1.default.SupportLangugae.length; index++) {
            var str = Constants_1.default.SupportLangugae[index];
            if (str == language) {
                this.language = language;
                this.reloadLabel();
                break;
            }
        }
    };
    /**
     * 添加或移除 i18nLabel
     */
    i18nManage._addOrDelLabel = function (label, isAdd) {
        if (isAdd) {
            this.labelArr.push(label);
        }
        else {
            var index = this.labelArr.indexOf(label);
            if (index !== -1) {
                this.labelArr.splice(index, 1);
            }
        }
    };
    i18nManage._getLabel = function (opt, params) {
        this.checkInit();
        if (params == null || params.length === 0) {
            // console.log('_getLabel222:',this.labelData[opt]);
            return this.labelData[opt] || opt;
        }
        var str = this.labelData[opt] || opt;
        for (var i = 0; i < params.length; i++) {
            var reg = new RegExp("#" + i, "g");
            str = str.replace(reg, params[i]);
        }
        return str;
    };
    i18nManage.reloadLabel = function () {
        var _this = this;
        var url = "language/label/i18n_" + this.language;
        cc.resources.load(url, function (err, data) {
            if (err) {
                console.error(err);
                _this.labelData = {};
            }
            else {
                _this.labelData = data.json;
            }
            for (var _i = 0, _a = _this.labelArr; _i < _a.length; _i++) {
                var one = _a[_i];
                one._resetValue();
            }
        });
    };
    i18nManage.language = null; // 当前语言
    i18nManage.labelArr = []; // i18nLabel 列表
    i18nManage.labelData = {}; // 文字配置
    return i18nManage;
}());
exports.i18nManage = i18nManage;

cc._RF.pop();