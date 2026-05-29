"use strict";
cc._RF.push(module, '5b274Q9tyhJ77YWhv0xx8ss', 'CommonTool');
// scripts/framework/utils/CommonTool.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteFrameCache_1 = require("../SpriteFrameCache");
var CommonTool = /** @class */ (function () {
    function CommonTool() {
    }
    CommonTool.loadJson = function (path) {
        return new Promise(function (resolve, reject) {
            cc.loader.loadRes(path, cc.JsonAsset, function (errorcode, data) {
                if (errorcode) {
                    reject();
                    return;
                }
                resolve(data.json);
            });
        });
    };
    CommonTool.sleep = function (timeout) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, timeout * 1000);
        });
    };
    CommonTool.setDisplay = function (sp, url) {
        SpriteFrameCache_1.default.instance.getSpriteFrame(url).then(function (sf) {
            sp.spriteFrame = sf;
        });
    };
    //获取一个标准时间是一年内的第几周
    CommonTool.theWeekOfYear = function (curDate) {
        /*
        date1是当前日期
        date2是当年第一天
        d是当前日期是今年第多少天
        用d + 当前年的第一天的周差距的和在除以7就是本年第几周
        */
        var a = curDate.getFullYear();
        var b = curDate.getMonth() + 1;
        var c = curDate.getDate();
        var date1 = new Date(a, parseInt(b) - 1, c), date2 = new Date(a, 0, 1), d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
        return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
    };
    ;
    CommonTool.setGlobalInstance = function (obj, name) {
        if (name) {
            window[name] = obj;
        }
        else {
            if (obj.__classname__) {
                window[obj.__classname__] = obj;
            }
            else {
                console.warn("g.setGlobalInstance:register failed");
            }
        }
    };
    ;
    CommonTool.getGlobal = function (s) {
        if (s == null || s == undefined)
            return window;
        else
            return window[s];
    };
    ;
    CommonTool.getRandomByInt = function (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        var val = Math.random() * (max - min);
        return Math.floor(val) + min;
    };
    ;
    CommonTool.getRandomByArray = function (arr) {
        if (arr)
            return arr[this.getRandomByInt(0, arr.length)];
    };
    ;
    CommonTool.getRandomByFloat = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    ;
    //根据概率取是否命中 rate:命中概率
    CommonTool.getRatioHit = function (rate) {
        var tmp = CommonTool.getRandomByInt(0, 100);
        // console.log("tmp",tmp);
        if (tmp <= rate) {
            return true;
        }
        else {
            return false;
        }
    };
    CommonTool.foreachNode = function (node, callback, target) {
        if (node == null || node == undefined)
            return;
        for (var i = 0; i < node.childrenCount; i++) {
            var child = node.children[i];
            callback.call(target, child);
            if (child.childrenCount > 0) {
                this.foreachNode(child, callback, target);
            }
        }
    };
    ;
    CommonTool.execScript = function (exp) {
        var parts = exp.split(".");
        if (parts.length >= 2) {
            var left = parts[0];
            //ignore (exp)
            //todo: load params from global object
            var right = parts[1].replace(/\(.*\)/, "");
            var gobj = window[left];
            if (gobj) {
                var func = gobj[right];
                if (func) {
                    func.call(gobj);
                }
            }
        }
    };
    ;
    CommonTool.shuffleAndCopyTriple = function (inputArray) {
        var _a;
        // 复制每个值三次
        var tripledArray = inputArray.reduce(function (acc, val) { return acc.concat([val, val, val]); }, []);
        // 随机打乱数组
        for (var i = tripledArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [tripledArray[j], tripledArray[i]], tripledArray[i] = _a[0], tripledArray[j] = _a[1];
        }
        return tripledArray;
    };
    CommonTool.isNextDay = function (time) {
        return this.isGreaterDate(new Date(), new Date(time));
    };
    //判断now和before相比是否过了一天
    CommonTool.isGreaterDate = function (now, before) {
        var diff = now.getTime() - before.getTime();
        if (diff > 86400000) // 24*60*60*1000
         {
            return true;
        }
        else {
            if (diff > 0)
                return now.getDate() != before.getDate();
            else
                return false;
        }
    };
    ;
    //判断两个日期的大小
    CommonTool.compareDate = function (date1, date2) {
        var d1 = Date.parse(date1);
        var d2 = Date.parse(date2);
        if (d2 > d1) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    /**
     *  比较2个时间的大小，返回相差多少天和小时分钟秒
     * @param d1
     * @param d2
     * @returns
     */
    CommonTool.compareDate2 = function (d1, d2) {
        var date1 = new Date(d1);
        if (d2) {
            var date2 = new Date(d2);
        }
        else {
            var date2 = new Date();
        }
        var ms = Math.abs(date2.getTime() - date1.getTime());
        var hm = 1000;
        var mi = hm * 60;
        var hh = mi * 60;
        var dd = hh * 24;
        var day = Math.floor(ms / dd);
        var hour = Math.floor((ms - day * dd) / hh);
        var minute = (ms - day * dd - hour * hh) / mi;
        var second = (ms - day * dd - hour * hh - minute * mi) / hm;
        return [day, hour, minute, second];
    };
    CommonTool.shuffle = function (self, a) {
        if (void 0 === a || 0 >= a || a > self.length)
            a = self.length;
        for (a -= 1; 0 <= a; a--) {
            var b = 0 | (Math.random() * 0x00ffffff) % (a + 1);
            var c = self[a];
            self[a] = self[b];
            self[b] = c;
        }
    };
    ;
    CommonTool.generate_action = function (params) {
        var scale_action = cc.scaleTo(params.time, params.scale_x, params.scale_y);
        return scale_action;
    };
    //弹性效果 果冻效果 
    CommonTool.jellyJump = function (node) {
        var spawn_action1 = this.generate_action({ time: 0.06, scale_x: 0.7, scale_y: 0.7, scale_z: 1 });
        // let  spawn_action2 = this.generate_action({time : 0.12, scale_x : 1.3, scale_y  :1.3, scale_z :1})
        var spawn_action3 = this.generate_action({ time: 0.07, scale_x: 1, scale_y: 1.4, scale_z: 1 });
        // let  spawn_action4 = this.generate_action({time : 0.07, scale_x : 1.3, scale_y  :1.3, scale_z: 1})
        // let  spawn_action5 = this.generate_action({time : 0.07, scale_x : 1.2, scale_y : 1.2, scale_z : 1})
        var spawn_action5 = cc.scaleTo(0.8, 1.3).easing(cc.easeElasticOut(0.3));
        var seq_actions = cc.sequence(spawn_action1, 
        //  spawn_action2,
        spawn_action3, 
        // spawn_action4,
        spawn_action5);
        node.runAction(seq_actions);
    };
    CommonTool.jellyJump2 = function (node, from, scale) {
        node.scale = from;
        var act = cc.scaleTo(0.8, scale, scale).easing(cc.easeElasticOut(0.3));
        node.runAction(act);
    };
    CommonTool.moveBezier = function (prefab, from, to, callback, dur, delay) {
        if (callback === void 0) { callback = null; }
        if (dur === void 0) { dur = 1; }
        if (delay === void 0) { delay = 0; }
        var sprite = cc.instantiate(prefab);
        sprite.opacity = 255;
        sprite.setPosition(from);
        var bezier = [];
        var x = from.x, y = from.y;
        var ex = to.x, ey = to.y;
        bezier[0] = cc.v2(x, y);
        bezier[1] = cc.v2(x + Math.abs(ex - x + 100) * 0.5, y + Math.abs(ey - y + 100) * 0.5);
        bezier[2] = cc.v2(ex, ey);
        sprite.runAction(cc.sequence(cc.delayTime(delay), cc.bezierTo(dur, bezier), cc.fadeOut(0.3), cc.callFunc(callback)));
        return sprite;
    };
    //适配屏幕
    CommonTool.fitScreen = function (node) {
        if (node == null) {
            return;
        }
        //适配分辨率
        var winSizePixels = cc.winSize;
        var canvas = node.getComponent(cc.Canvas);
        if (winSizePixels.width > winSizePixels.height) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    };
    //是否全面屏手机
    CommonTool.isFullScreen = function () {
        //适配分辨率
        var winSizePixels = cc.winSize;
        var num = winSizePixels.height / winSizePixels.width;
        console.log('isFullScreen', num);
        if (num > 1.96) {
            return true;
        }
        else {
            return false;
        }
    };
    //显示分数
    CommonTool.showScore = function (scoreLabel, addScore, intervalTime) {
        return __awaiter(this, void 0, void 0, function () {
            var startScore, endScore, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (scoreLabel == null || addScore <= 0) {
                            return [2 /*return*/];
                        }
                        if (intervalTime == null || intervalTime == 0) {
                            intervalTime = 0.1;
                        }
                        if (addScore > 3) {
                            intervalTime = (intervalTime * 4) / addScore;
                        }
                        startScore = parseInt(scoreLabel.string);
                        endScore = startScore + addScore;
                        index = startScore;
                        _a.label = 1;
                    case 1:
                        if (!(index <= endScore)) return [3 /*break*/, 4];
                        scoreLabel.string = index.toString();
                        return [4 /*yield*/, this.sleep(intervalTime)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        scoreLabel.string = (startScore + addScore) + '';
                        return [2 /*return*/];
                }
            });
        });
    };
    //使用魔法道具时调用，目标是对已经改变了id的goods进行重新整理，确保都是33成对
    //入参 changeId，这次魔法道具改变的目标id，arr：原来的商品id数组
    CommonTool.processArrayWithId = function (arr, changeId) {
        var result = [];
        var length = arr.length;
        if (length % 3 === 1) {
            arr.splice(length - 1, 0, changeId);
        }
        else if (length % 3 === 2) {
            arr.splice(length - 1, 0, changeId);
            arr.splice(length - 2, 0, changeId);
        }
        for (var i = 0; i < arr.length; i += 3) {
            var key = arr[i + 2];
            var value1 = arr[i];
            var value2 = arr[i + 1];
            result.push(key + "_" + value1);
            result.push(key + "_" + value2);
        }
        return result;
    };
    return CommonTool;
}());
exports.default = CommonTool;

cc._RF.pop();