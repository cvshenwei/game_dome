
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ccc3Pa3fdGUJUnDiya6JDg', 'Utils');
// scripts/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = exports.wxAvatar = exports.toXY = exports.getAngle = exports.getDistance = exports.formatSeconds = exports.sortSpriteNameByNum = exports.splitArray = exports.shuffle = exports.random = void 0;
// 随机整数
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
exports.random = random;
// 数组打乱
function shuffle(arr) {
    var length = arr.length, randomIndex, temp;
    while (length) {
        randomIndex = Math.floor(Math.random() * (length--));
        temp = arr[randomIndex];
        arr[randomIndex] = arr[length];
        arr[length] = temp;
    }
    return arr;
}
exports.shuffle = shuffle;
function splitArray(arr, n, m) {
    var result = [];
    var subArray = [];
    for (var i = 0; i < arr.length; i++) {
        subArray.push(arr[i]);
        if (subArray.length === m) {
            result.push(subArray);
            subArray = [];
        }
        if (result.length === n) {
            break;
        }
    }
    // 补充空数组
    while (result.length < n) {
        result.push([]);
    }
    return result;
}
exports.splitArray = splitArray;
// 字符串中包含数字，提取数字进行排序
function sortSpriteNameByNum(frames) {
    var getNumberInSpriteName = function (name) {
        var reg = /\d+/g;
        return parseInt(name.match(reg)[0] || '0');
    };
    return frames.sort(function (a, b) { return getNumberInSpriteName(a.name) - getNumberInSpriteName(b.name); });
}
exports.sortSpriteNameByNum = sortSpriteNameByNum;
// 秒数转换
function formatSeconds(seconds, dateFormat) {
    if (dateFormat === void 0) { dateFormat = 'h:i:s'; }
    seconds = Number(seconds);
    var obj = {};
    obj.h = Number.parseInt(String(seconds / 3600));
    obj.i = Number.parseInt(String((seconds - obj.h * 3600) / 60));
    obj.s = Number.parseInt(String(seconds - obj.h * 3600 - obj.i * 60));
    if (obj.h < 10)
        obj.h = '0' + obj.h;
    if (obj.i < 10)
        obj.i = '0' + obj.i;
    if (obj.s < 10)
        obj.s = '0' + obj.s;
    // 3.解析
    var rs = dateFormat.replace('h', obj.h).replace('i', obj.i).replace('s', obj.s);
    return rs;
}
exports.formatSeconds = formatSeconds;
// 两点距离
function getDistance(start, end) {
    var pos = cc.v2(start.x - end.x, start.y - end.y);
    var dis = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
    return dis;
}
exports.getDistance = getDistance;
// 两点角度
function getAngle(start, end) {
    //计算出朝向
    var dx = end.x - start.x;
    var dy = end.y - start.y;
    var dir = cc.v2(dx, dy);
    //根据朝向计算出夹角弧度
    var angle = dir.signAngle(cc.v2(1, 0));
    //将弧度转换为欧拉角
    var degree = angle / Math.PI * 180;
    return -degree;
}
exports.getAngle = getAngle;
// 把节点1转节点2坐标
function toXY(node1, node2) {
    var wpos = node1.convertToWorldSpaceAR(cc.v2(0, 0));
    var pos = node2.convertToNodeSpaceAR(wpos);
    return pos;
}
exports.toXY = toXY;
// 微信头像链接
function wxAvatar(avatarUrl, isCached) {
    if (isCached === void 0) { isCached = true; }
    if (isCached) {
        avatarUrl += "?sail.jpg";
    }
    else {
        var time = new Date().getTime();
        avatarUrl += "?sail=" + time + ".jpg";
    }
    return new Promise(function (resolve, reject) {
        cc.loader.load(avatarUrl, function (err, texture) {
            if (err)
                reject && reject();
            resolve && resolve(texture);
        });
    });
}
exports.wxAvatar = wxAvatar;
// 生成uuid
function uuid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
exports.uuid = uuid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU87QUFDUCxTQUFnQixNQUFNLENBQUMsS0FBYSxFQUFFLEtBQWE7SUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDbkUsQ0FBQztBQUZELHdCQUVDO0FBRUQsT0FBTztBQUNQLFNBQWdCLE9BQU8sQ0FBQyxHQUFVO0lBQzlCLElBQUksTUFBTSxHQUFXLEdBQUcsQ0FBQyxNQUFNLEVBQzNCLFdBQW1CLEVBQ25CLElBQVMsQ0FBQztJQUNkLE9BQU8sTUFBTSxFQUFFO1FBQ1gsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFBO0tBQ3JCO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBWEQsMEJBV0M7QUFFRCxTQUFnQixVQUFVLENBQUMsR0FBYSxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQzFELElBQU0sTUFBTSxHQUFlLEVBQUUsQ0FBQztJQUU5QixJQUFJLFFBQVEsR0FBYSxFQUFFLENBQUM7SUFFNUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0QixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDckIsTUFBTTtTQUNUO0tBQ0o7SUFFRCxRQUFRO0lBQ1IsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25CO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQXhCRCxnQ0F3QkM7QUFFRCxvQkFBb0I7QUFDcEIsU0FBZ0IsbUJBQW1CLENBQUMsTUFBd0I7SUFDeEQsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLElBQVk7UUFDdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFBO1FBQ2xCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7SUFDOUMsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQTdELENBQTZELENBQUMsQ0FBQTtBQUMvRixDQUFDO0FBTkQsa0RBTUM7QUFHRCxPQUFPO0FBQ1AsU0FBZ0IsYUFBYSxDQUFDLE9BQXdCLEVBQUUsVUFBb0I7SUFBcEIsMkJBQUEsRUFBQSxvQkFBb0I7SUFDeEUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN6QixJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUE7SUFDakIsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRCxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRCxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsT0FBTztJQUNQLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7QUFaRCxzQ0FZQztBQUVELE9BQU87QUFDUCxTQUFnQixXQUFXLENBQUMsS0FBYyxFQUFFLEdBQVk7SUFDcEQsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBSkQsa0NBSUM7QUFFRCxPQUFPO0FBQ1AsU0FBZ0IsUUFBUSxDQUFDLEtBQWMsRUFBRSxHQUFZO0lBQ2pELE9BQU87SUFDUCxJQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLGFBQWE7SUFDYixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsV0FBVztJQUNYLElBQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNyQyxPQUFPLENBQUMsTUFBTSxDQUFBO0FBQ2xCLENBQUM7QUFWRCw0QkFVQztBQUVELGFBQWE7QUFDYixTQUFnQixJQUFJLENBQUMsS0FBYyxFQUFFLEtBQWM7SUFDL0MsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckQsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzVDLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQztBQUpELG9CQUlDO0FBRUQsU0FBUztBQUNULFNBQWdCLFFBQVEsQ0FBQyxTQUFpQixFQUFFLFFBQXdCO0lBQXhCLHlCQUFBLEVBQUEsZUFBd0I7SUFDaEUsSUFBSSxRQUFRLEVBQUU7UUFDVixTQUFTLElBQUksV0FBVyxDQUFBO0tBQzNCO1NBQU07UUFDSCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQ2pDLFNBQVMsSUFBSSxXQUFTLElBQUksU0FBTSxDQUFBO0tBQ25DO0lBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3JDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLEdBQVEsRUFBRSxPQUFZO1lBQ3RELElBQUksR0FBRztnQkFBRSxNQUFNLElBQUksTUFBTSxFQUFFLENBQUE7WUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQWJELDRCQWFDO0FBRUQsU0FBUztBQUNULFNBQWdCLElBQUk7SUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixJQUFJLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQVJELG9CQVFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8g6ZqP5py65pW05pWwXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obG93ZXI6IG51bWJlciwgdXBwZXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIgKyAxKSkgKyBsb3dlcjtcclxufVxyXG5cclxuLy8g5pWw57uE5omT5LmxXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlKGFycjogYW55W10pIHtcclxuICAgIGxldCBsZW5ndGg6IG51bWJlciA9IGFyci5sZW5ndGgsXHJcbiAgICAgICAgcmFuZG9tSW5kZXg6IG51bWJlcixcclxuICAgICAgICB0ZW1wOiBhbnk7XHJcbiAgICB3aGlsZSAobGVuZ3RoKSB7XHJcbiAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGVuZ3RoLS0pKTtcclxuICAgICAgICB0ZW1wID0gYXJyW3JhbmRvbUluZGV4XTtcclxuICAgICAgICBhcnJbcmFuZG9tSW5kZXhdID0gYXJyW2xlbmd0aF07XHJcbiAgICAgICAgYXJyW2xlbmd0aF0gPSB0ZW1wXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEFycmF5KGFycjogbnVtYmVyW10sIG46IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyW11bXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcclxuXHJcbiAgICBsZXQgc3ViQXJyYXk6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdWJBcnJheS5wdXNoKGFycltpXSk7XHJcblxyXG4gICAgICAgIGlmIChzdWJBcnJheS5sZW5ndGggPT09IG0pIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goc3ViQXJyYXkpO1xyXG4gICAgICAgICAgICBzdWJBcnJheSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IG4pIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOihpeWFheepuuaVsOe7hFxyXG4gICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBuKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goW10pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWtl+espuS4suS4reWMheWQq+aVsOWtl++8jOaPkOWPluaVsOWtl+i/m+ihjOaOkuW6j1xyXG5leHBvcnQgZnVuY3Rpb24gc29ydFNwcml0ZU5hbWVCeU51bShmcmFtZXM6IGNjLlNwcml0ZUZyYW1lW10pIHtcclxuICAgIGNvbnN0IGdldE51bWJlckluU3ByaXRlTmFtZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCByZWcgPSAvXFxkKy9nXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5hbWUubWF0Y2gocmVnKVswXSB8fCAnMCcpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhbWVzLnNvcnQoKGEsIGIpID0+IGdldE51bWJlckluU3ByaXRlTmFtZShhLm5hbWUpIC0gZ2V0TnVtYmVySW5TcHJpdGVOYW1lKGIubmFtZSkpXHJcbn1cclxuXHJcblxyXG4vLyDnp5LmlbDovazmjaJcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNlY29uZHMoc2Vjb25kczogbnVtYmVyIHwgc3RyaW5nLCBkYXRlRm9ybWF0ID0gJ2g6aTpzJyk6IHN0cmluZyB7XHJcbiAgICBzZWNvbmRzID0gTnVtYmVyKHNlY29uZHMpXHJcbiAgICBsZXQgb2JqOiBhbnkgPSB7fVxyXG4gICAgb2JqLmggPSBOdW1iZXIucGFyc2VJbnQoU3RyaW5nKHNlY29uZHMgLyAzNjAwKSk7XHJcbiAgICBvYmouaSA9IE51bWJlci5wYXJzZUludChTdHJpbmcoKHNlY29uZHMgLSBvYmouaCAqIDM2MDApIC8gNjApKTtcclxuICAgIG9iai5zID0gTnVtYmVyLnBhcnNlSW50KFN0cmluZyhzZWNvbmRzIC0gb2JqLmggKiAzNjAwIC0gb2JqLmkgKiA2MCkpO1xyXG4gICAgaWYgKG9iai5oIDwgMTApIG9iai5oID0gJzAnICsgb2JqLmg7XHJcbiAgICBpZiAob2JqLmkgPCAxMCkgb2JqLmkgPSAnMCcgKyBvYmouaTtcclxuICAgIGlmIChvYmoucyA8IDEwKSBvYmoucyA9ICcwJyArIG9iai5zO1xyXG4gICAgLy8gMy7op6PmnpBcclxuICAgIHZhciBycyA9IGRhdGVGb3JtYXQucmVwbGFjZSgnaCcsIG9iai5oKS5yZXBsYWNlKCdpJywgb2JqLmkpLnJlcGxhY2UoJ3MnLCBvYmoucyk7XHJcbiAgICByZXR1cm4gcnM7XHJcbn1cclxuXHJcbi8vIOS4pOeCuei3neemu1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2Uoc3RhcnQ6IGNjLlZlYzIsIGVuZDogY2MuVmVjMikge1xyXG4gICAgY29uc3QgcG9zID0gY2MudjIoc3RhcnQueCAtIGVuZC54LCBzdGFydC55IC0gZW5kLnkpO1xyXG4gICAgY29uc3QgZGlzID0gTWF0aC5zcXJ0KHBvcy54ICogcG9zLnggKyBwb3MueSAqIHBvcy55KTtcclxuICAgIHJldHVybiBkaXM7XHJcbn1cclxuXHJcbi8vIOS4pOeCueinkuW6plxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUoc3RhcnQ6IGNjLlZlYzIsIGVuZDogY2MuVmVjMikge1xyXG4gICAgLy/orqHnrpflh7rmnJ3lkJFcclxuICAgIGNvbnN0IGR4ID0gZW5kLnggLSBzdGFydC54O1xyXG4gICAgY29uc3QgZHkgPSBlbmQueSAtIHN0YXJ0Lnk7XHJcbiAgICBjb25zdCBkaXIgPSBjYy52MihkeCwgZHkpO1xyXG4gICAgLy/moLnmja7mnJ3lkJHorqHnrpflh7rlpLnop5LlvKfluqZcclxuICAgIGNvbnN0IGFuZ2xlID0gZGlyLnNpZ25BbmdsZShjYy52MigxLCAwKSk7XHJcbiAgICAvL+WwhuW8p+W6pui9rOaNouS4uuasp+aLieinklxyXG4gICAgY29uc3QgZGVncmVlID0gYW5nbGUgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgcmV0dXJuIC1kZWdyZWVcclxufVxyXG5cclxuLy8g5oqK6IqC54K5Mei9rOiKgueCuTLlnZDmoIdcclxuZXhwb3J0IGZ1bmN0aW9uIHRvWFkobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKSB7XHJcbiAgICBjb25zdCB3cG9zID0gbm9kZTEuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKVxyXG4gICAgY29uc3QgcG9zID0gbm9kZTIuY29udmVydFRvTm9kZVNwYWNlQVIod3BvcylcclxuICAgIHJldHVybiBwb3NcclxufVxyXG5cclxuLy8g5b6u5L+h5aS05YOP6ZO+5o6lXHJcbmV4cG9ydCBmdW5jdGlvbiB3eEF2YXRhcihhdmF0YXJVcmw6IHN0cmluZywgaXNDYWNoZWQ6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBpZiAoaXNDYWNoZWQpIHtcclxuICAgICAgICBhdmF0YXJVcmwgKz0gYD9zYWlsLmpwZ2BcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgYXZhdGFyVXJsICs9IGA/c2FpbD0ke3RpbWV9LmpwZ2BcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoYXZhdGFyVXJsLCBmdW5jdGlvbiAoZXJyOiBhbnksIHRleHR1cmU6IGFueSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QgJiYgcmVqZWN0KClcclxuICAgICAgICAgICAgcmVzb2x2ZSAmJiByZXNvbHZlKHRleHR1cmUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIOeUn+aIkHV1aWRcclxuZXhwb3J0IGZ1bmN0aW9uIHV1aWQoKSB7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgbGV0IHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XHJcbiAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KSkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXVpZDtcclxufSJdfQ==