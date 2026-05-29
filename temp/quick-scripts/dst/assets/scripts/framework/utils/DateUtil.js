
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/framework/utils/DateUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1436cAlDVdJB7zQT3LJU8kf', 'DateUtil');
// scripts/framework/utils/DateUtil.ts

"use strict";
/*
 * @Author: ls
 * @Date: 2021-03-26 13:32:28
 * @LastEditTime: 2021-04-14 14:06:07
 * @LastEditors: Please set LastEditors
 * @Description: 工具
 * @FilePath: \calendar\assets\Util.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = exports.CALENDAR = exports.DAYTYPE = exports.CALENDARNAMES = void 0;
// 日历格式
exports.CALENDARNAMES = ['yyyy', 'yyyy-mm'];
// 日期类型
var DAYTYPE;
(function (DAYTYPE) {
    DAYTYPE[DAYTYPE["TODAY"] = 0] = "TODAY";
    DAYTYPE[DAYTYPE["YESTERDAY"] = 1] = "YESTERDAY";
    DAYTYPE[DAYTYPE["TOMORROW"] = 2] = "TOMORROW";
    DAYTYPE[DAYTYPE["NONE"] = 3] = "NONE";
})(DAYTYPE = exports.DAYTYPE || (exports.DAYTYPE = {}));
// 日历类型 日、月、年、周
var CALENDAR;
(function (CALENDAR) {
    CALENDAR[CALENDAR["YEAR"] = 0] = "YEAR";
    CALENDAR[CALENDAR["MONTH"] = 1] = "MONTH";
    CALENDAR[CALENDAR["DAY"] = 2] = "DAY";
    CALENDAR[CALENDAR["WEEK"] = 3] = "WEEK";
})(CALENDAR = exports.CALENDAR || (exports.CALENDAR = {}));
var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    /**
     * 是否闰年
     * @param year 年份
     * @returns
     */
    DateUtil.isLeapYear = function (year) {
        var date = new Date(year, 1, 29);
        return date.getDate() === 29;
    };
    /**
     * 深拷贝时间
     * @param date
     * @returns
     */
    DateUtil.cloneDate = function (date) {
        return new Date(date.valueOf());
    };
    /**
     * 下一日、下一周、下一月、下一年
     * @param date 待处理时间
     * @param type 类型
     * @returns
     */
    DateUtil.nextDate = function (date, type) {
        if (type === void 0) { type = CALENDAR.DAY; }
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        switch (type) {
            case CALENDAR.YEAR:
                {
                    year++;
                    date = new Date(year, month + 1, 0);
                    if (day <= date.getDate()) {
                        date = new Date(year, month, day);
                    }
                }
                break;
            case CALENDAR.MONTH:
                {
                    month++;
                    date = new Date(year, month + 1, 0);
                    if (day <= date.getDate()) {
                        date = new Date(year, month, day);
                    }
                }
                break;
            case CALENDAR.DAY:
                {
                    date = new Date(date.setDate(day + 1));
                }
                break;
            case CALENDAR.WEEK:
                {
                    date = new Date(date.setDate(day + 7));
                }
                break;
            default:
                break;
        }
        return date;
    };
    /**
     * 上一日、上一周、上一月、上一年
     * @param date 待处理时间
     * @param type 类型
     * @returns
     */
    DateUtil.lastDate = function (date, type) {
        if (type === void 0) { type = CALENDAR.DAY; }
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        switch (type) {
            case CALENDAR.YEAR:
                {
                    // 1
                    // date = new Date(date.setFullYear(year - 1));
                    // 2 优化版
                    year--;
                    date = new Date(year, month + 1, 0);
                    if (day <= date.getDate()) {
                        date = new Date(year, month, day);
                    }
                }
                break;
            case CALENDAR.MONTH:
                {
                    month--;
                    date = new Date(year, month + 1, 0);
                    if (day <= date.getDate()) {
                        date = new Date(year, month, day);
                    }
                }
                break;
            case CALENDAR.DAY:
                {
                    date = new Date(date.setDate(day - 1));
                }
                break;
            case CALENDAR.WEEK:
                {
                    date = new Date(date.setDate(day - 7));
                }
                break;
            default:
                break;
        }
        return date;
    };
    /**
 * 格式化
 * @param fmt
 * @returns
 */
    DateUtil.formatDate = function (date, fmt) {
        if (fmt === void 0) { fmt = 'yyyy-mm-dd'; }
        var _date = date ? date : new Date();
        ;
        var o = {
            'M+': _date.getMonth() + 1,
            'd+': _date.getDate(),
            'h+': _date.getHours(),
            'm+': _date.getMinutes(),
            's+': _date.getSeconds(),
            'q+': Math.floor((_date.getMonth() + 3) / 3),
            S: _date.getMilliseconds(),
        };
        //  获取年份
        // ①
        if (/(y+)/i.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            // ②
            if (new RegExp('(' + k + ')', 'i').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return fmt;
    };
    DateUtil.formatMinuteSecond = function (time) {
        var date = new Date(time);
        var fmt = "mm:ss";
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        var o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                var str = o[k] + '';
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
            }
        }
        return fmt;
    };
    ;
    DateUtil.getDiffDay = function (date_1, date_2) {
        // 计算两个日期之间的差值
        var totalDays, diffDate;
        var myDate_1 = Date.parse(date_1);
        var myDate_2 = Date.parse(date_2);
        // 将两个日期都转换为毫秒格式，然后做差
        diffDate = Math.abs(myDate_1 - myDate_2); // 取相差毫秒数的绝对值
        totalDays = Math.floor(diffDate / (1000 * 3600 * 24)); // 向下取整
        return totalDays; // 相差的天数
    };
    return DateUtil;
}());
exports.DateUtil = DateUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ZyYW1ld29yay91dGlscy9EYXRlVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7R0FPRzs7O0FBRUgsT0FBTztBQUNNLFFBQUEsYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRWpELE9BQU87QUFDUCxJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFDbEIsdUNBQVMsQ0FBQTtJQUNULCtDQUFhLENBQUE7SUFDYiw2Q0FBWSxDQUFBO0lBQ1oscUNBQVEsQ0FBQTtBQUNULENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEI7QUFFRCxlQUFlO0FBQ2YsSUFBWSxRQUtYO0FBTEQsV0FBWSxRQUFRO0lBQ25CLHVDQUFRLENBQUE7SUFDUix5Q0FBUyxDQUFBO0lBQ1QscUNBQU8sQ0FBQTtJQUNQLHVDQUFRLENBQUE7QUFDVCxDQUFDLEVBTFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFLbkI7QUFFRDtJQUFBO0lBMkxBLENBQUM7SUExTEE7Ozs7T0FJRztJQUNXLG1CQUFVLEdBQXhCLFVBQXlCLElBQVk7UUFDcEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxrQkFBUyxHQUF2QixVQUF3QixJQUFVO1FBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csaUJBQVEsR0FBdEIsVUFBdUIsSUFBVSxFQUFFLElBQTZCO1FBQTdCLHFCQUFBLEVBQUEsT0FBaUIsUUFBUSxDQUFDLEdBQUc7UUFDL0QsSUFBSSxJQUFJLEdB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LElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFBLENBQUMsYUFBYTtRQUN0RCxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxPQUFPO1FBQzdELE9BQU8sU0FBUyxDQUFBLENBQUksUUFBUTtJQUMzQixDQUFDO0lBQ0osZUFBQztBQUFELENBM0xBLEFBMkxDLElBQUE7QUEzTFksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBsc1xyXG4gKiBARGF0ZTogMjAyMS0wMy0yNiAxMzozMjoyOFxyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA0LTE0IDE0OjA2OjA3XHJcbiAqIEBMYXN0RWRpdG9yczogUGxlYXNlIHNldCBMYXN0RWRpdG9yc1xyXG4gKiBARGVzY3JpcHRpb246IOW3peWFt1xyXG4gKiBARmlsZVBhdGg6IFxcY2FsZW5kYXJcXGFzc2V0c1xcVXRpbC50c1xyXG4gKi9cclxuXHJcbi8vIOaXpeWOhuagvOW8j1xyXG5leHBvcnQgY29uc3QgQ0FMRU5EQVJOQU1FUyA9IFsneXl5eScsICd5eXl5LW1tJ107XHJcblxyXG4vLyDml6XmnJ/nsbvlnotcclxuZXhwb3J0IGVudW0gREFZVFlQRSB7XHJcblx0VE9EQVkgPSAwLFxyXG5cdFlFU1RFUkRBWSA9IDEsXHJcblx0VE9NT1JST1cgPSAyLFxyXG5cdE5PTkUgPSAzLFxyXG59XHJcblxyXG4vLyDml6Xljobnsbvlnosg5pel44CB5pyI44CB5bm044CB5ZGoXHJcbmV4cG9ydCBlbnVtIENBTEVOREFSIHtcclxuXHRZRUFSID0gMCxcclxuXHRNT05USCA9IDEsXHJcblx0REFZID0gMixcclxuXHRXRUVLID0gMywgLy8g5ZGoIOaaguacquS9v+eUqFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWwge1xyXG5cdC8qKlxyXG5cdCAqIOaYr+WQpumXsOW5tFxyXG5cdCAqIEBwYXJhbSB5ZWFyIOW5tOS7vVxyXG5cdCAqIEByZXR1cm5zXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBpc0xlYXBZZWFyKHllYXI6IG51bWJlcikge1xyXG5cdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCAxLCAyOSk7XHJcblx0XHRyZXR1cm4gZGF0ZS5nZXREYXRlKCkgPT09IDI5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog5rex5ou36LSd5pe26Ze0XHJcblx0ICogQHBhcmFtIGRhdGVcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgY2xvbmVEYXRlKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDkuIvkuIDml6XjgIHkuIvkuIDlkajjgIHkuIvkuIDmnIjjgIHkuIvkuIDlubRcclxuXHQgKiBAcGFyYW0gZGF0ZSDlvoXlpITnkIbml7bpl7RcclxuXHQgKiBAcGFyYW0gdHlwZSDnsbvlnotcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgbmV4dERhdGUoZGF0ZTogRGF0ZSwgdHlwZTogQ0FMRU5EQVIgPSBDQUxFTkRBUi5EQVkpOiBEYXRlIHtcclxuXHRcdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlIENBTEVOREFSLllFQVI6XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0eWVhcisrO1xyXG5cdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcblx0XHRcdFx0XHRpZiAoZGF5IDw9IGRhdGUuZ2V0RGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ0FMRU5EQVIuTU9OVEg6XHJcblx0XHRcdFx0e1xyXG5cclxuXHRcdFx0XHRcdG1vbnRoKys7XHJcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoZGF5IDw9IGRhdGUuZ2V0RGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ0FMRU5EQVIuREFZOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF5ICsgMSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDQUxFTkRBUi5XRUVLOlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZShkYXRlLnNldERhdGUoZGF5ICsgNykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGF0ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOS4iuS4gOaXpeOAgeS4iuS4gOWRqOOAgeS4iuS4gOaciOOAgeS4iuS4gOW5tFxyXG5cdCAqIEBwYXJhbSBkYXRlIOW+heWkhOeQhuaXtumXtFxyXG5cdCAqIEBwYXJhbSB0eXBlIOexu+Wei1xyXG5cdCAqIEByZXR1cm5zXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBsYXN0RGF0ZShkYXRlOiBEYXRlLCB0eXBlOiBDQUxFTkRBUiA9IENBTEVOREFSLkRBWSk6IERhdGUge1xyXG5cdFx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XHJcblx0XHRsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblxyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdGNhc2UgQ0FMRU5EQVIuWUVBUjpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyAxXHJcblx0XHRcdFx0XHQvLyBkYXRlID0gbmV3IERhdGUoZGF0ZS5zZXRGdWxsWWVhcih5ZWFyIC0gMSkpO1xyXG5cclxuXHRcdFx0XHRcdC8vIDIg5LyY5YyW54mIXHJcblx0XHRcdFx0XHR5ZWFyLS07XHJcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHRcdFx0XHRcdGlmIChkYXkgPD0gZGF0ZS5nZXREYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBDQUxFTkRBUi5NT05USDpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtb250aC0tO1xyXG5cdFx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRheSA8PSBkYXRlLmdldERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIENBTEVOREFSLkRBWTpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRheSAtIDEpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgQ0FMRU5EQVIuV0VFSzpcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGRheSAtIDcpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRhdGU7XHJcblx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdCAqIOagvOW8j+WMllxyXG5cdCAqIEBwYXJhbSBmbXRcclxuXHQgKiBAcmV0dXJuc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlOiBEYXRlLGZtdDogc3RyaW5nID0gJ3l5eXktbW0tZGQnKTogc3RyaW5nIHtcclxuXHRcdGxldCBfZGF0ZSA9ZGF0ZSA/IGRhdGUgOiBuZXcgRGF0ZSgpOztcclxuXHJcblx0XHR2YXIgbyA9IHtcclxuXHRcdFx0J00rJzogX2RhdGUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9XHJcblx0XHRcdCdkKyc6IF9kYXRlLmdldERhdGUoKSwgLy/ml6VcclxuXHRcdFx0J2grJzogX2RhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuXHRcdFx0J20rJzogX2RhdGUuZ2V0TWludXRlcygpLCAvL+WIhlxyXG5cdFx0XHQncysnOiBfZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXHJcblx0XHRcdCdxKyc6IE1hdGguZmxvb3IoKF9kYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG5cdFx0XHRTOiBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgLy/mr6vnp5JcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gIOiOt+WPluW5tOS7vVxyXG5cdFx0Ly8g4pGgXHJcblx0XHRpZiAoLyh5KykvaS50ZXN0KGZtdCkpIHtcclxuXHRcdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoX2RhdGUuZ2V0RnVsbFllYXIoKSArICcnKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKHZhciBrIGluIG8pIHtcclxuXHRcdFx0Ly8g4pGhXHJcblx0XHRcdGlmIChuZXcgUmVnRXhwKCcoJyArIGsgKyAnKScsICdpJykudGVzdChmbXQpKSB7XHJcblx0XHRcdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCBSZWdFeHAuJDEubGVuZ3RoID09IDEgPyBvW2tdIDogKCcwMCcgKyBvW2tdKS5zdWJzdHIoKCcnICsgb1trXSkubGVuZ3RoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmbXQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljICBmb3JtYXRNaW51dGVTZWNvbmQodGltZSkge1xyXG5cdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lKTtcclxuXHQgICAgbGV0IGZtdD1cIm1tOnNzXCI7XHJcblx0XHRpZiAoLyh5KykvLnRlc3QoZm10KSkge1xyXG5cdFx0ICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcblx0XHR9XHJcblx0XHRsZXQgbyA9IHtcclxuXHRcdCAgJ00rJzogZGF0ZS5nZXRNb250aCgpICsgMSxcclxuXHRcdCAgJ2QrJzogZGF0ZS5nZXREYXRlKCksXHJcblx0XHQgICdoKyc6IGRhdGUuZ2V0SG91cnMoKSxcclxuXHRcdCAgJ20rJzogZGF0ZS5nZXRNaW51dGVzKCksXHJcblx0XHQgICdzKyc6IGRhdGUuZ2V0U2Vjb25kcygpXHJcblx0XHR9O1xyXG5cdFx0Zm9yIChsZXQgayBpbiBvKSB7XHJcblx0XHQgIGlmIChuZXcgUmVnRXhwKGAoJHtrfSlgKS50ZXN0KGZtdCkpIHtcclxuXHRcdFx0bGV0IHN0ciA9IG9ba10gKyAnJztcclxuXHRcdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PT0gMSkgPyBzdHIgOiAoJzAwJyArIHN0cikuc3Vic3RyKHN0ci5sZW5ndGgpKTtcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZtdDtcclxuXHQgIH07XHJcblx0ICBcclxuXHJcblx0cHVibGljIHN0YXRpYyAgZ2V0RGlmZkRheShkYXRlXzEsIGRhdGVfMil7XHJcblx0XHQvLyDorqHnrpfkuKTkuKrml6XmnJ/kuYvpl7TnmoTlt67lgLxcclxuXHRcdGxldCB0b3RhbERheXMsZGlmZkRhdGVcclxuXHRcdGxldCBteURhdGVfMSA9IERhdGUucGFyc2UoZGF0ZV8xKVxyXG5cdFx0bGV0IG15RGF0ZV8yID0gRGF0ZS5wYXJzZShkYXRlXzIpXHJcblx0XHQvLyDlsIbkuKTkuKrml6XmnJ/pg73ovazmjaLkuLrmr6vnp5LmoLzlvI/vvIznhLblkI7lgZrlt65cclxuXHRcdGRpZmZEYXRlID0gTWF0aC5hYnMobXlEYXRlXzEgLSBteURhdGVfMikgLy8g5Y+W55u45beu5q+r56eS5pWw55qE57ud5a+55YC8XHJcblx0XHR0b3RhbERheXMgPSBNYXRoLmZsb29yKGRpZmZEYXRlIC8gKDEwMDAgKiAzNjAwICogMjQpKSAvLyDlkJHkuIvlj5bmlbRcclxuXHRcdHJldHVybiB0b3RhbERheXMgICAgLy8g55u45beu55qE5aSp5pWwXHJcblx0ICB9XHJcbn1cclxuIl19