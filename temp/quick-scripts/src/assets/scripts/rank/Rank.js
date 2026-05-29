"use strict";
cc._RF.push(module, '11df5iG6dtIG4zYbAIrk2zD', 'Rank');
// scripts/rank/Rank.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//排名对象
var Rank = /** @class */ (function () {
    function Rank() {
        this._rankUp = true;
    }
    Object.defineProperty(Rank.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rank.prototype, "rankUp", {
        get: function () {
            return this._rankUp;
        },
        set: function (value) {
            this._rankUp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rank.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rank.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rank.prototype, "rankNumber", {
        get: function () {
            return this._rankNumber;
        },
        set: function (value) {
            this._rankNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rank.prototype, "avatar", {
        get: function () {
            return this._avatar;
        },
        set: function (value) {
            this._avatar = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rank;
}());
exports.default = Rank;

cc._RF.pop();