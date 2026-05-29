"use strict";
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