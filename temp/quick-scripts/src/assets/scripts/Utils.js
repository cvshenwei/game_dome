"use strict";
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