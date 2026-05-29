
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rank/Rank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JhbmsvUmFuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU07QUFDTjtJQUFBO1FBT1csWUFBTyxHQUFVLElBQUksQ0FBQztJQTBDakMsQ0FBQztJQXhDRSxzQkFBVyx1QkFBSzthQUFoQjtZQUNLLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBQ0QsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLHdCQUFNO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFrQixLQUFjO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUhBO0lBS0Ysc0JBQVcsdUJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSEE7SUFLQSxzQkFBVyxzQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUhBO0lBS0Qsc0JBQVcsNEJBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXNCLEtBQWE7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyx3QkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBQ0QsVUFBa0IsS0FBYTtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQUlMLFdBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v5o6S5ZCN5a+56LGhXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmt7XHJcbiAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBfbGV2ZWw6IG51bWJlcjtcclxuXHJcbiAgIHByaXZhdGUgX3JhbmtOdW1iZXI6IG51bWJlcjtcclxuICAgcHJpdmF0ZSBfYXZhdGFyOiBzdHJpbmc7XHJcbiAgIHByaXZhdGUgX3JhbmtVcDogYm9vbGVhbj10cnVlO1xyXG5cclxuICAgcHVibGljIGdldCBsZXZlbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sZXZlbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbGV2ZWwodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xldmVsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IHJhbmtVcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmFua1VwO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCByYW5rVXAodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9yYW5rVXAgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgIHB1YmxpYyBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuICAgICAgIHJldHVybiB0aGlzLl9zY29yZTtcclxuICAgfVxyXG4gICBwdWJsaWMgc2V0IHNjb3JlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgIHRoaXMuX3Njb3JlID0gdmFsdWU7XHJcbiAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgfSBcclxuICBcclxuICAgIHB1YmxpYyBnZXQgcmFua051bWJlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYW5rTnVtYmVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCByYW5rTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9yYW5rTnVtYmVyID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcHVibGljIGdldCBhdmF0YXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhdGFyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBhdmF0YXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2F2YXRhciA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19