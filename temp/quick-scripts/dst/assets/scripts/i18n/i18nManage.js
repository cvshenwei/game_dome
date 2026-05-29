
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/i18n/i18nManage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2kxOG4vaTE4bk1hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwQ0FBdUM7QUFDdkM7SUFBQTtJQWdGQSxDQUFDO0lBNUVHLDRFQUE0RTtJQUU3RCxvQkFBUyxHQUF4QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDVyxzQkFBVyxHQUF6QixVQUEwQixRQUFnQjtRQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU87U0FDVjtRQUNELElBQUksUUFBUSxJQUFFLElBQUksSUFBRSxRQUFRLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBRTtZQUNwQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1NBQ2pCO1FBQ0QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRSxJQUFJLEdBQUcsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFHLEdBQUcsSUFBRSxRQUFRLEVBQUM7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTthQUNUO1NBRUo7SUFFTCxDQUFDO0lBRUQ7O09BRUc7SUFDVyx5QkFBYyxHQUE1QixVQUE2QixLQUEwQixFQUFFLEtBQWM7UUFDbkUsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7SUFDTCxDQUFDO0lBRWEsb0JBQVMsR0FBdkIsVUFBd0IsR0FBVyxFQUFFLE1BQWlCO1FBQ2xELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLE1BQU0sSUFBRSxJQUFJLElBQUUsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEMsb0RBQW9EO1lBQ25ELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDckM7UUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2xDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUdhLHNCQUFXLEdBQXpCO1FBQUEsaUJBZUM7UUFiRyxJQUFJLEdBQUcsR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pELEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFrQjtZQUMzQyxJQUFJLEdBQUcsRUFBRTtnQkFFTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUI7WUFDRCxLQUFnQixVQUFhLEVBQWIsS0FBQSxLQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhLEVBQUU7Z0JBQTFCLElBQUksR0FBRyxTQUFBO2dCQUNSLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNyQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdFYyxtQkFBUSxHQUFHLElBQUksQ0FBQyxDQUFLLE9BQU87SUFDNUIsbUJBQVEsR0FBMEIsRUFBRSxDQUFDLENBQVEsZUFBZTtJQUM1RCxvQkFBUyxHQUE4QixFQUFFLENBQUMsQ0FBRyxPQUFPO0lBNkV2RSxpQkFBQztDQWhGRCxBQWdGQyxJQUFBO0FBaEZZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaTE4bkxhYmVsIGZyb20gXCIuL2kxOG5MYWJlbFwiO1xyXG5pbXBvcnQgIENvbnN0YW50cyAgZnJvbSBcIi4uL0NvbnN0YW50c1wiO1xyXG5leHBvcnQgY2xhc3MgaTE4bk1hbmFnZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBsYW5ndWFnZSA9IG51bGw7ICAgICAvLyDlvZPliY3or63oqIBcclxuICAgIHByaXZhdGUgc3RhdGljIGxhYmVsQXJyOiBpMThuTGFiZWwuaTE4bkxhYmVsW10gPSBbXTsgICAgICAgIC8vIGkxOG5MYWJlbCDliJfooahcclxuICAgIHByaXZhdGUgc3RhdGljIGxhYmVsRGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9OyAgIC8vIOaWh+Wtl+mFjee9rlxyXG4gICAgLy9wcml2YXRlIHN0YXRpYyBkZWZhdWx0TGFiZWxEYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307ICAgLy8g5paH5a2X6YWN572uXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hlY2tJbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sYW5ndWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldExhbmd1YWdlKFwiZW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6+572u6K+t6KiAXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0TGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmxhbmd1YWdlID09PSBsYW5ndWFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsYW5ndWFnZT09bnVsbHx8bGFuZ3VhZ2UubGVuZ3RoIT0yKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlPSdlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBDb25zdGFudHMuU3VwcG9ydExhbmd1Z2FlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgc3RyID0gQ29uc3RhbnRzLlN1cHBvcnRMYW5ndWdhZVtpbmRleF07XHJcbiAgICAgICAgICAgIGlmKHN0cj09bGFuZ3VhZ2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRMYWJlbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5oiW56e76ZmkIGkxOG5MYWJlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIF9hZGRPckRlbExhYmVsKGxhYmVsOiBpMThuTGFiZWwuaTE4bkxhYmVsLCBpc0FkZDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChpc0FkZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsQXJyLnB1c2gobGFiZWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubGFiZWxBcnIuaW5kZXhPZihsYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxBcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIF9nZXRMYWJlbChvcHQ6IHN0cmluZywgcGFyYW1zPzogc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMuY2hlY2tJbml0KCk7XHJcbiAgICAgICAgaWYgKHBhcmFtcz09bnVsbHx8cGFyYW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdfZ2V0TGFiZWwyMjI6Jyx0aGlzLmxhYmVsRGF0YVtvcHRdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxEYXRhW29wdF0gfHwgb3B0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RyID0gdGhpcy5sYWJlbERhdGFbb3B0XSB8fCBvcHQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoXCIjXCIgKyBpLCBcImdcIilcclxuICAgICAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocmVnLCBwYXJhbXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbG9hZExhYmVsKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHVybCA9IFwibGFuZ3VhZ2UvbGFiZWwvaTE4bl9cIiArIHRoaXMubGFuZ3VhZ2U7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCAoZXJyLCBkYXRhOiBjYy5Kc29uQXNzZXQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxEYXRhID0ge307XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsRGF0YSA9IGRhdGEuanNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBvbmUgb2YgdGhpcy5sYWJlbEFycikge1xyXG4gICAgICAgICAgICAgICAgb25lLl9yZXNldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=