
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/framework/utils/CommonTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25Ub29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBRW5EO0lBQUE7SUFzVkEsQ0FBQztJQXBWVSxtQkFBUSxHQUFmLFVBQWdCLElBQUk7UUFFaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBQyxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLFVBQUMsU0FBUyxFQUFDLElBQUk7Z0JBQ2hELElBQUcsU0FBUyxFQUFDO29CQUFDLE1BQU0sRUFBRSxDQUFDO29CQUFBLE9BQU07aUJBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxnQkFBSyxHQUFaLFVBQWEsT0FBTztRQUVoQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDOUIsVUFBVSxDQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFFTSxxQkFBVSxHQUFqQixVQUFrQixFQUFFLEVBQUMsR0FBRztRQUVwQiwwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDOUMsVUFBQSxFQUFFO1lBQ0YsRUFBRSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBSUYsa0JBQWtCO0lBQ1gsd0JBQWEsR0FBcEIsVUFBcUIsT0FBTztRQUN2Qjs7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QUFDO1FBRTFCLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2QzthQUFNLElBQUksTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBR0wsaUJBQUM7QUFBRCxDQXRWQSxBQXNWQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZUZyYW1lQ2FjaGUgZnJvbSBcIi4uL1Nwcml0ZUZyYW1lQ2FjaGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vblRvb2xcclxue1xyXG4gICAgc3RhdGljIGxvYWRKc29uKHBhdGgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCAsY2MuSnNvbkFzc2V0LChlcnJvcmNvZGUsZGF0YSk9PntcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yY29kZSl7cmVqZWN0KCk7cmV0dXJufVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhLmpzb24pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2xlZXAodGltZW91dClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9LCB0aW1lb3V0ICogMTAwMClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXREaXNwbGF5KHNwLHVybClcclxuICAgIHtcclxuICAgICAgICBTcHJpdGVGcmFtZUNhY2hlLmluc3RhbmNlLmdldFNwcml0ZUZyYW1lKHVybCkudGhlbihcclxuICAgICAgICAgICAgc2Y9PntcclxuICAgICAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSBzZlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgXHJcbiAgIC8v6I635Y+W5LiA5Liq5qCH5YeG5pe26Ze05piv5LiA5bm05YaF55qE56ys5Yeg5ZGoXHJcbiAgIHN0YXRpYyB0aGVXZWVrT2ZZZWFyKGN1ckRhdGUpIHsgIFxyXG4gICAgICAgIC8qIFxyXG4gICAgICAgIGRhdGUx5piv5b2T5YmN5pel5pyfIFxyXG4gICAgICAgIGRhdGUy5piv5b2T5bm056ys5LiA5aSpIFxyXG4gICAgICAgIGTmmK/lvZPliY3ml6XmnJ/mmK/ku4rlubTnrKzlpJrlsJHlpKkgXHJcbiAgICAgICAg55SoZCArIOW9k+WJjeW5tOeahOesrOS4gOWkqeeahOWRqOW3rui3neeahOWSjOWcqOmZpOS7pTflsLHmmK/mnKzlubTnrKzlh6DlkaggXHJcbiAgICAgICAgKi8gIFxyXG4gICAgICAgIHZhciBhID0gY3VyRGF0ZS5nZXRGdWxsWWVhcigpOyAgXHJcbiAgICAgICAgdmFyIGIgPSBjdXJEYXRlLmdldE1vbnRoKCkgKyAxOyAgXHJcbiAgICAgICAgdmFyIGMgPSBjdXJEYXRlLmdldERhdGUoKTsgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIGRhdGUxID0gbmV3IERhdGUoYSwgcGFyc2VJbnQoYikgLSAxLCBjKSwgZGF0ZTIgPSBuZXcgRGF0ZShhLCAwLCAxKSwgIFxyXG4gICAgICAgICAgICBkID0gTWF0aC5yb3VuZCgoZGF0ZTEudmFsdWVPZigpIC0gZGF0ZTIudmFsdWVPZigpKSAvIDg2NDAwMDAwKTsgIFxyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoICBcclxuICAgICAgICAgICAgKGQgKyAoKGRhdGUyLmdldERheSgpICsgMSkgLSAxKSkgLyA3ICBcclxuICAgICAgICApOyAgXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIHNldEdsb2JhbEluc3RhbmNlKG9iaixuYW1lPyl7XHJcbiAgICAgICAgaWYobmFtZSkge1xyXG4gICAgICAgICAgICB3aW5kb3dbbmFtZV0gPSBvYmo7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmIChvYmouX19jbGFzc25hbWVfXyl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbb2JqLl9fY2xhc3NuYW1lX19dID0gb2JqO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZy5zZXRHbG9iYWxJbnN0YW5jZTpyZWdpc3RlciBmYWlsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBnZXRHbG9iYWwocyl7XHJcbiAgICAgICAgaWYocz09bnVsbHx8IHM9PXVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbc107XHJcbiAgICB9O1xyXG5cclxuc3RhdGljIGdldFJhbmRvbUJ5SW50IChtaW4sIG1heCkge1xyXG4gICAgaWYobWF4ID09IG51bGwpIHttYXggPSBtaW47IG1pbiA9IDA7fVxyXG4gICAgdmFyIHZhbCA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHZhbCkgKyBtaW47XHJcbn07XHJcblxyXG5zdGF0aWMgZ2V0UmFuZG9tQnlBcnJheShhcnIpe1xyXG4gICAgaWYoYXJyKVxyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5nZXRSYW5kb21CeUludCgwLGFyci5sZW5ndGgpXVxyXG59O1xyXG5cclxuXHJcblxyXG5zdGF0aWMgZ2V0UmFuZG9tQnlGbG9hdCAobWluLG1heCl7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59O1xyXG5cclxuICAgIC8v5qC55o2u5qaC546H5Y+W5piv5ZCm5ZG95LitIHJhdGU65ZG95Lit5qaC546HXHJcbnB1YmxpYyBzdGF0aWMgZ2V0UmF0aW9IaXQocmF0ZTpudW1iZXIpe1xyXG4gICAgbGV0IHRtcCA9IENvbW1vblRvb2wuZ2V0UmFuZG9tQnlJbnQoMCwgMTAwKTtcclxuICAgLy8gY29uc29sZS5sb2coXCJ0bXBcIix0bXApO1xyXG4gICAgaWYgKHRtcDw9cmF0ZSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbnN0YXRpYyBmb3JlYWNoTm9kZShub2RlLGNhbGxiYWNrLHRhcmdldCl7XHJcbiAgICBpZiAobm9kZSA9PSBudWxsIHx8IG5vZGUgPT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICBmb3IgKHZhciBpID0gMCA7aSA8bm9kZS5jaGlsZHJlbkNvdW50O2krKylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGFyZ2V0LGNoaWxkKTtcclxuICAgICAgICBpZiAoY2hpbGQuY2hpbGRyZW5Db3VudCA+IDAgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JlYWNoTm9kZShjaGlsZCxjYWxsYmFjayx0YXJnZXQpXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5zdGF0aWMgZXhlY1NjcmlwdChleHApe1xyXG4gICAgdmFyIHBhcnRzID0gZXhwLnNwbGl0KFwiLlwiKVxyXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+PSAyKXtcclxuICAgICAgICB2YXIgbGVmdCA9IHBhcnRzWzBdO1xyXG4gICAgICAgIC8vaWdub3JlIChleHApXHJcbiAgICAgICAgLy90b2RvOiBsb2FkIHBhcmFtcyBmcm9tIGdsb2JhbCBvYmplY3RcclxuICAgICAgICB2YXIgcmlnaHQgPSBwYXJ0c1sxXS5yZXBsYWNlKC9cXCguKlxcKS8sXCJcIilcclxuICAgICAgICB2YXIgZ29iaiA9IHdpbmRvd1tsZWZ0XVxyXG4gICAgICAgIGlmKGdvYmogKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGZ1bmMgPSBnb2JqW3JpZ2h0XTtcclxuICAgICAgICAgICAgaWYgKGZ1bmMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMuY2FsbChnb2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5zdGF0aWMgc2h1ZmZsZUFuZENvcHlUcmlwbGU8VD4oaW5wdXRBcnJheTogVFtdKTogVFtdIHtcclxuICAgIC8vIOWkjeWItuavj+S4quWAvOS4ieasoVxyXG4gICAgY29uc3QgdHJpcGxlZEFycmF5ID0gaW5wdXRBcnJheS5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MuY29uY2F0KFt2YWwsIHZhbCwgdmFsXSksIFtdIGFzIFRbXSk7XHJcblxyXG4gICAgLy8g6ZqP5py65omT5Lmx5pWw57uEXHJcbiAgICBmb3IgKGxldCBpID0gdHJpcGxlZEFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgW3RyaXBsZWRBcnJheVtpXSwgdHJpcGxlZEFycmF5W2pdXSA9IFt0cmlwbGVkQXJyYXlbal0sIHRyaXBsZWRBcnJheVtpXV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRyaXBsZWRBcnJheTtcclxufVxyXG5cclxuXHJcbnN0YXRpYyBpc05leHREYXkodGltZSl7XHJcbiAgICByZXR1cm4gdGhpcy5pc0dyZWF0ZXJEYXRlKG5ldyBEYXRlKCksbmV3IERhdGUodGltZSkpXHJcbn1cclxuXHJcbi8v5Yik5patbm935ZKMYmVmb3Jl55u45q+U5piv5ZCm6L+H5LqG5LiA5aSpXHJcbnN0YXRpYyBpc0dyZWF0ZXJEYXRlKG5vdyxiZWZvcmUpXHJcbntcclxuICAgIHZhciBkaWZmID0gbm93LmdldFRpbWUoKSAtIGJlZm9yZS5nZXRUaW1lKCkgXHJcbiAgICBpZihkaWZmID4gODY0MDAwMDApIC8vIDI0KjYwKjYwKjEwMDBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmIChkaWZmID4gMCApXHJcbiAgICAgICAgICAgIHJldHVybiBub3cuZ2V0RGF0ZSgpICE9IGJlZm9yZS5nZXREYXRlKClcclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbi8v5Yik5pat5Lik5Liq5pel5pyf55qE5aSn5bCPXHJcbnN0YXRpYyBjb21wYXJlRGF0ZShkYXRlMTpzdHJpbmcsZGF0ZTI6c3RyaW5nKXtcclxuICAgIGxldCBkMSA9IERhdGUucGFyc2UoZGF0ZTEpO1xyXG4gICAgbGV0IGQyID0gRGF0ZS5wYXJzZShkYXRlMik7XHJcbiAgICBpZihkMj5kMSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5q+U6L6DMuS4quaXtumXtOeahOWkp+Wwj++8jOi/lOWbnuebuOW3ruWkmuWwkeWkqeWSjOWwj+aXtuWIhumSn+enklxyXG4gICAgICogQHBhcmFtIGQxIFxyXG4gICAgICogQHBhcmFtIGQyIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgICBzdGF0aWMgY29tcGFyZURhdGUyKGQxLGQyKXtcclxuICAgICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZShkMSk7XHJcbiAgICAgICAgaWYoZDIpe1xyXG4gICAgICAgICAgICB2YXIgZGF0ZTIgPSBuZXcgRGF0ZShkMik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtczpudW1iZXIgPSBNYXRoLmFicyhkYXRlMi5nZXRUaW1lKCkgLSBkYXRlMS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGxldCBobT0xMDAwO1xyXG4gICAgICAgIGxldCBtaT1obSo2MDtcclxuICAgICAgICBsZXQgaGg9bWkqNjA7XHJcbiAgICAgICAgbGV0IGRkPWhoKjI0O1xyXG4gICAgICAgIGxldCBkYXk9TWF0aC5mbG9vcihtcy9kZCk7XHJcbiAgICAgICAgbGV0IGhvdXI9IE1hdGguZmxvb3IoKG1zLWRheSpkZCkvaGgpO1xyXG4gICAgICAgIGxldCBtaW51dGUgPSAobXMgLSBkYXkgKiBkZCAtIGhvdXIgKiBoaCkgLyBtaTsgIFxyXG4gICAgICAgIGxldCBzZWNvbmQgPSAobXMgLSBkYXkgKiBkZCAtIGhvdXIgKiBoaCAtIG1pbnV0ZSAqIG1pKSAvIGhtOyAgXHJcbiAgICAgICAgcmV0dXJuIFtkYXksaG91cixtaW51dGUsc2Vjb25kXTtcclxuICAgIH1cclxuXHJcblxyXG5zdGF0aWMgc2h1ZmZsZShzZWxmLGE/KSB7XHJcbiAgICBpZiAodm9pZCAwID09PSBhIHx8IDAgPj0gYSB8fCBhID4gc2VsZi5sZW5ndGgpIGEgPSBzZWxmLmxlbmd0aDtcclxuICAgIGZvciAoYSAtPSAxOyAwIDw9IGE7IGEtLSkge1xyXG4gICAgICAgIHZhciBiID0gMCB8IChNYXRoLnJhbmRvbSgpKjB4MDBmZmZmZmYpICUgKGEgKyAxKVxyXG4gICAgICAgIGxldCBjID0gc2VsZlthXTtcclxuICAgICAgICBzZWxmW2FdID0gc2VsZltiXTtcclxuICAgICAgICBzZWxmW2JdID0gY1xyXG4gICAgfVxyXG59O1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGVfYWN0aW9uKHBhcmFtcyl7XHJcbiAgICAgICAgbGV0IHNjYWxlX2FjdGlvbiA9IGNjLnNjYWxlVG8ocGFyYW1zLnRpbWUsIHBhcmFtcy5zY2FsZV94LCBwYXJhbXMuc2NhbGVfeSlcclxuICAgICAgICByZXR1cm4gc2NhbGVfYWN0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy/lvLnmgKfmlYjmnpwg5p6c5Ya75pWI5p6cIFxyXG4gICAgc3RhdGljICBqZWxseUp1bXAobm9kZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgIHNwYXduX2FjdGlvbjEgPSB0aGlzLmdlbmVyYXRlX2FjdGlvbih7dGltZSA6IDAuMDYsIHNjYWxlX3ggOiAwLjcsIHNjYWxlX3kgOiAwLjcsIHNjYWxlX3o6IDF9KVxyXG4gICAgICAgIC8vIGxldCAgc3Bhd25fYWN0aW9uMiA9IHRoaXMuZ2VuZXJhdGVfYWN0aW9uKHt0aW1lIDogMC4xMiwgc2NhbGVfeCA6IDEuMywgc2NhbGVfeSAgOjEuMywgc2NhbGVfeiA6MX0pXHJcbiAgICAgICAgbGV0ICBzcGF3bl9hY3Rpb24zID0gdGhpcy5nZW5lcmF0ZV9hY3Rpb24oe3RpbWUgOiAwLjA3LCBzY2FsZV94IDogMSwgc2NhbGVfeSAgOjEuNCwgc2NhbGVfeiA6MX0pXHJcbiAgICAgICAgLy8gbGV0ICBzcGF3bl9hY3Rpb240ID0gdGhpcy5nZW5lcmF0ZV9hY3Rpb24oe3RpbWUgOiAwLjA3LCBzY2FsZV94IDogMS4zLCBzY2FsZV95ICA6MS4zLCBzY2FsZV96OiAxfSlcclxuICAgICAgICAvLyBsZXQgIHNwYXduX2FjdGlvbjUgPSB0aGlzLmdlbmVyYXRlX2FjdGlvbih7dGltZSA6IDAuMDcsIHNjYWxlX3ggOiAxLjIsIHNjYWxlX3kgOiAxLjIsIHNjYWxlX3ogOiAxfSlcclxuICAgICAgICBsZXQgc3Bhd25fYWN0aW9uNSA9IGNjLnNjYWxlVG8oMC44LCAxLjMpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjMpKTtcclxuICAgICAgICBsZXQgIHNlcV9hY3Rpb25zID0gY2Muc2VxdWVuY2Uoc3Bhd25fYWN0aW9uMSxcclxuICAgICAgICAgICAgLy8gIHNwYXduX2FjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBzcGF3bl9hY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgLy8gc3Bhd25fYWN0aW9uNCxcclxuICAgICAgICAgICAgICAgIHNwYXduX2FjdGlvbjUpXHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oc2VxX2FjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBqZWxseUp1bXAyKG5vZGUsZnJvbSxzY2FsZSlcclxuICAgIHtcclxuICAgICAgICBub2RlLnNjYWxlID0gZnJvbTtcclxuICAgICAgICBsZXQgYWN0ID0gY2Muc2NhbGVUbygwLjgsIHNjYWxlLHNjYWxlKS5lYXNpbmcoY2MuZWFzZUVsYXN0aWNPdXQoMC4zKSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oYWN0KVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb3ZlQmV6aWVyKHByZWZhYixmcm9tLHRvLGNhbGxiYWNrID0gbnVsbCxkdXIgPSAxLGRlbGF5ID0gMCl7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICBzcHJpdGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICBzcHJpdGUuc2V0UG9zaXRpb24oZnJvbSlcclxuXHJcbiAgICAgICAgbGV0IGJlemllciA9IFtdXHJcbiAgICAgICAgbGV0IHggPSBmcm9tLngsIHkgPSBmcm9tLnlcclxuICAgICAgICBsZXQgZXggPSB0by54LCBleSA9IHRvLnk7XHJcbiAgICAgICAgYmV6aWVyWzBdID0gY2MudjIoeCwgeSlcclxuICAgICAgICBiZXppZXJbMV0gPSBjYy52Mih4ICsgTWF0aC5hYnMoZXggLSB4KyAxMDApICogMC41LCB5ICsgTWF0aC5hYnMoZXkgLSB5KzEwMCkgKiAwLjUpXHJcbiAgICAgICAgYmV6aWVyWzJdID0gY2MudjIoZXgsIGV5KVxyXG5cclxuICAgICAgICBzcHJpdGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheSksY2MuYmV6aWVyVG8oZHVyLCBiZXppZXIpICwgY2MuZmFkZU91dCgwLjMpLGNjLmNhbGxGdW5jKGNhbGxiYWNrKSkpXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy/pgILphY3lsY/luZVcclxuICAgIHN0YXRpYyAgIGZpdFNjcmVlbihub2RlKXtcclxuICAgICAgICBpZihub2RlPT1udWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mAgumFjeWIhui+qOeOh1xyXG4gICAgICAgIGxldCB3aW5TaXplUGl4ZWxzPWNjLndpblNpemU7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcbiAgICAgICAgaWYod2luU2l6ZVBpeGVscy53aWR0aD53aW5TaXplUGl4ZWxzLmhlaWdodCl7ICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5piv5ZCm5YWo6Z2i5bGP5omL5py6XHJcbiAgICBzdGF0aWMgIGlzRnVsbFNjcmVlbigpe1xyXG4gICAgICAgICAgICAvL+mAgumFjeWIhui+qOeOh1xyXG4gICAgICAgICAgICBsZXQgd2luU2l6ZVBpeGVscz1jYy53aW5TaXplO1xyXG4gICAgICAgICAgICBsZXQgbnVtPXdpblNpemVQaXhlbHMuaGVpZ2h0L3dpblNpemVQaXhlbHMud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc0Z1bGxTY3JlZW4nLG51bSk7XHJcbiAgICAgICAgICAgIGlmKG51bT4xLjk2KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5pi+56S65YiG5pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jICBzaG93U2NvcmUoc2NvcmVMYWJlbDpjYy5MYWJlbCxhZGRTY29yZTpudW1iZXIsaW50ZXJ2YWxUaW1lPzpudW1iZXIpeyBcclxuICAgICAgICAgICAgaWYoc2NvcmVMYWJlbD09bnVsbHx8YWRkU2NvcmU8PTApe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGludGVydmFsVGltZT09bnVsbHx8aW50ZXJ2YWxUaW1lPT0wKXtcclxuICAgICAgICAgICAgICAgIGludGVydmFsVGltZT0wLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoYWRkU2NvcmU+Myl7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbFRpbWU9KGludGVydmFsVGltZSo0KS9hZGRTY29yZTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIGxldCBzdGFydFNjb3JlPSBwYXJzZUludChzY29yZUxhYmVsLnN0cmluZyk7ICAgICBcclxuICAgICAgICAgICAgbGV0IGVuZFNjb3JlPSBzdGFydFNjb3JlK2FkZFNjb3JlOyAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IHN0YXJ0U2NvcmU7IGluZGV4IDw9ZW5kU2NvcmU7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHNjb3JlTGFiZWwuc3RyaW5nID0gaW5kZXgudG9TdHJpbmcoKTsgXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKGludGVydmFsVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNjb3JlTGFiZWwuc3RyaW5nPShzdGFydFNjb3JlK2FkZFNjb3JlKSsnJzsgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/kvb/nlKjprZTms5XpgZPlhbfml7bosIPnlKjvvIznm67moIfmmK/lr7nlt7Lnu4/mlLnlj5jkuoZpZOeahGdvb2Rz6L+b6KGM6YeN5paw5pW055CG77yM56Gu5L+d6YO95pivMzPmiJDlr7lcclxuICAgIC8v5YWl5Y+CIGNoYW5nZUlk77yM6L+Z5qyh6a2U5rOV6YGT5YW35pS55Y+Y55qE55uu5qCHaWTvvIxhcnLvvJrljp/mnaXnmoTllYblk4FpZOaVsOe7hFxyXG4gICAgcHVibGljIHN0YXRpYyBwcm9jZXNzQXJyYXlXaXRoSWQoYXJyOiBudW1iZXJbXSwgY2hhbmdlSWQ6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0PVtdO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIFxyXG4gICAgICAgIGlmIChsZW5ndGggJSAzID09PSAxKSB7XHJcbiAgICAgICAgICAgIGFyci5zcGxpY2UobGVuZ3RoIC0gMSwgMCwgY2hhbmdlSWQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoICUgMyA9PT0gMikge1xyXG4gICAgICAgICAgICBhcnIuc3BsaWNlKGxlbmd0aCAtIDEsIDAsIGNoYW5nZUlkKTtcclxuICAgICAgICAgICAgYXJyLnNwbGljZShsZW5ndGggLSAyLCAwLCBjaGFuZ2VJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gYXJyW2kgKyAyXTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUxID0gYXJyW2ldO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZTIgPSBhcnJbaSArIDFdO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChrZXkrXCJfXCIrdmFsdWUxKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5K1wiX1wiK3ZhbHVlMik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSJdfQ==