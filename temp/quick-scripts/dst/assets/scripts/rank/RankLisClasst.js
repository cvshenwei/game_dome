
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rank/RankLisClasst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JhbmsvUmFua0xpc0NsYXNzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFFBQVE7QUFDUjtJQUFBO1FBRVksY0FBUyxHQUFXLEVBQUUsQ0FBQztJQTBGbEMsQ0FBQztJQXpFRSxzQkFBVyxpQ0FBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBa0IsS0FBYztZQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQU1ELHNCQUFXLG1DQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBTUQsc0JBQVcsd0NBQWE7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzthQUNELFVBQXlCLEtBQWE7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxvQ0FBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBQ0QsVUFBcUIsS0FBVztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLHFDQUFVO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFDRCxVQUFzQixLQUFXO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsb0NBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQXFCLEtBQVc7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyxtQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FIQTtJQUtELHNCQUFXLHNDQUFXO2FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFDRCxVQUF1QixLQUFXO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUhBO0lBS00sd0NBQWdCLEdBQXZCLFVBQXdCLEtBQVc7UUFFL0IsSUFBRyxLQUFLLElBQUUsSUFBSSxJQUFFLEtBQUssQ0FBQyxVQUFVLEdBQUMsQ0FBQyxFQUFDO1lBQy9CLE9BQU87U0FDVjtRQUNELElBQUcsS0FBSyxDQUFDLFVBQVUsSUFBRSxDQUFDLEVBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUE7U0FDdkI7YUFBTSxJQUFHLEtBQUssQ0FBQyxVQUFVLElBQUUsQ0FBQyxFQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUMsS0FBSyxDQUFBO1NBQ3hCO1FBQUMsSUFBRyxLQUFLLENBQUMsVUFBVSxJQUFFLENBQUMsRUFBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQTtTQUN2QjtJQUVMLENBQUM7SUFFSixvQkFBQztBQUFELENBNUZELEFBNEZFLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmFuayBmcm9tIFwiLi9SYW5rXCI7XHJcblxyXG4vL+aOkuWQjeWvueixoembhuWQiFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rTGlzdENsYXNze1xyXG4gICAgIFxyXG4gICAgcHJpdmF0ZSBfcmFua0xpc3Q6IFJhbmtbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFJhbms6IFJhbms7XHJcbiAgICAvL+esrOS4gOWQjVxyXG4gICAgcHJpdmF0ZSBfZmlyc3RSYW5rOiBSYW5rO1xyXG4gICAgLy/nrKzkuozlkI1cclxuICAgIHByaXZhdGUgX3NlY29uZFJhbms6IFJhbms7XHJcbiAgICAvL+esrOS4ieWQjVxyXG4gICAgcHJpdmF0ZSBfdGhpcmRSYW5rOiBSYW5rO1xyXG5cclxuICAgIC8v5o6S5ZCN57G75Z6LXHJcbiAgICBwcml2YXRlIF9yYW5rVHlwZTogc3RyaW5nOyAgIFxyXG4gICAgLy/mnIDkvY7kuIrmppzliIbmlbBcclxuICAgIHByaXZhdGUgX3JhbmtTY29yZUxpbmU6IG51bWJlcjtcclxuICAgIC8v5piv5ZCm5LiK5qacXHJcbiAgICBwcml2YXRlIF9pc1Jhbms6IGJvb2xlYW47XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNSYW5rKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Jhbms7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGlzUmFuayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzUmFuayA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJhbmtUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmtUeXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCByYW5rVHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcmFua1R5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCByYW5rU2NvcmVMaW5lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JhbmtTY29yZUxpbmU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHJhbmtTY29yZUxpbmUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3JhbmtTY29yZUxpbmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZpcnN0UmFuaygpOiBSYW5rIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlyc3RSYW5rO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBmaXJzdFJhbmsodmFsdWU6IFJhbmspIHtcclxuICAgICAgICB0aGlzLl9maXJzdFJhbmsgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNlY29uZFJhbmsoKTogUmFuayB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlY29uZFJhbms7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IHNlY29uZFJhbmsodmFsdWU6IFJhbmspIHtcclxuICAgICAgICB0aGlzLl9zZWNvbmRSYW5rID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0aGlyZFJhbmsoKTogUmFuayB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoaXJkUmFuaztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgdGhpcmRSYW5rKHZhbHVlOiBSYW5rKSB7XHJcbiAgICAgICAgdGhpcy5fdGhpcmRSYW5rID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByYW5rTGlzdCgpOiBSYW5rW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYW5rTGlzdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgcmFua0xpc3QodmFsdWU6IFJhbmtbXSkge1xyXG4gICAgICAgIHRoaXMuX3JhbmtMaXN0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50UmFuaygpOiBSYW5rIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFJhbms7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRSYW5rKHZhbHVlOiBSYW5rKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFJhbmsgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VG9wVGhyZWVSYW5rcyh2YWx1ZTogUmFuayl7XHJcblxyXG4gICAgICAgIGlmKHZhbHVlPT1udWxsfHx2YWx1ZS5yYW5rTnVtYmVyPjMpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHZhbHVlLnJhbmtOdW1iZXI9PTEpe1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0UmFuaz12YWx1ZVxyXG4gICAgICAgIH1lbHNlICBpZih2YWx1ZS5yYW5rTnVtYmVyPT0yKXtcclxuICAgICAgICAgICAgdGhpcy5zZWNvbmRSYW5rPXZhbHVlXHJcbiAgICAgICAgfSBpZih2YWx1ZS5yYW5rTnVtYmVyPT0zKXtcclxuICAgICAgICAgICAgdGhpcy50aGlyZFJhbms9dmFsdWVcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuIH0iXX0=