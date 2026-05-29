"use strict";
cc._RF.push(module, '4e825UhkpNFqZTN/jWkVgSM', 'RankLisClasst');
// scripts/rank/RankLisClasst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//排名对象集合
var RankListClass = /** @class */ (function () {
    function RankListClass() {
        this._rankList = [];
    }
    Object.defineProperty(RankListClass.prototype, "isRank", {
        get: function () {
            return this._isRank;
        },
        set: function (value) {
            this._isRank = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "rankType", {
        get: function () {
            return this._rankType;
        },
        set: function (value) {
            this._rankType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "rankScoreLine", {
        get: function () {
            return this._rankScoreLine;
        },
        set: function (value) {
            this._rankScoreLine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "firstRank", {
        get: function () {
            return this._firstRank;
        },
        set: function (value) {
            this._firstRank = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "secondRank", {
        get: function () {
            return this._secondRank;
        },
        set: function (value) {
            this._secondRank = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "thirdRank", {
        get: function () {
            return this._thirdRank;
        },
        set: function (value) {
            this._thirdRank = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "rankList", {
        get: function () {
            return this._rankList;
        },
        set: function (value) {
            this._rankList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankListClass.prototype, "currentRank", {
        get: function () {
            return this._currentRank;
        },
        set: function (value) {
            this._currentRank = value;
        },
        enumerable: false,
        configurable: true
    });
    RankListClass.prototype.setTopThreeRanks = function (value) {
        if (value == null || value.rankNumber > 3) {
            return;
        }
        if (value.rankNumber == 1) {
            this.firstRank = value;
        }
        else if (value.rankNumber == 2) {
            this.secondRank = value;
        }
        if (value.rankNumber == 3) {
            this.thirdRank = value;
        }
    };
    return RankListClass;
}());
exports.default = RankListClass;

cc._RF.pop();