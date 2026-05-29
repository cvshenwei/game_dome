
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/ToastManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65526wGEY1OtL0HXs6ylAE2', 'ToastManager');
// scripts/manager/ToastManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToastManager = /** @class */ (function () {
    function ToastManager() {
    }
    ToastManager.getInstance = function () {
        if (this._instance === null) {
            this._instance = new this();
        }
        return this._instance;
    };
    Object.defineProperty(ToastManager, "instance", {
        get: function () {
            return this.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    ToastManager.prototype.show = function (text, _a) {
        if (text === void 0) { text = ''; }
        var _b = _a === void 0 ? {} : _a, _c = _b.gravity, gravity = _c === void 0 ? 'CENTER' : _c, _d = _b.duration, duration = _d === void 0 ? 1 : _d, _e = _b.bg_color, bg_color = _e === void 0 ? cc.color(102, 102, 102, 200) : _e;
        // canvas
        var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        var width = canvas.node.width;
        var height = canvas.node.height;
        // 节点
        var bgNode = new cc.Node();
        bgNode.group = 'ui';
        // Lable文本格式设置
        var textNode = new cc.Node();
        var textLabel = textNode.addComponent(cc.Label);
        textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
        textLabel.fontSize = 30;
        textLabel.string = text;
        // 当文本宽度过长时，设置为自动换行格式
        if (text.length * textLabel.fontSize > (width * 3) / 5) {
            textNode.width = (width * 3) / 5;
            textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        }
        else {
            textNode.width = text.length * textLabel.fontSize;
        }
        var lineCount = ~~((text.length * textLabel.fontSize) / ((width * 3) / 5)) + 1;
        textNode.height = textLabel.fontSize * lineCount;
        // 背景设置
        var ctx = bgNode.addComponent(cc.Graphics);
        ctx.arc(-textNode.width / 2, 0, textNode.height / 2 + 20, 0.5 * Math.PI, 1.5 * Math.PI, true);
        ctx.lineTo(textNode.width / 2, -(textNode.height / 2 + 20));
        ctx.arc(textNode.width / 2, 0, textNode.height / 2 + 20, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.lineTo(-textNode.width / 2, textNode.height / 2 + 20);
        ctx.fillColor = bg_color;
        ctx.fill();
        bgNode.addChild(textNode);
        // gravity 设置Toast显示的位置
        if (gravity === "CENTER") {
            bgNode.y = 0;
            bgNode.x = 0;
        }
        else if (gravity === "TOP") {
            bgNode.y = bgNode.y + (height / 5) * 2;
        }
        else if (gravity === "BOTTOM") {
            bgNode.y = bgNode.y - (height / 5) * 2;
        }
        canvas.node.addChild(bgNode);
        // 执行动画
        var finished = cc.callFunc(function () {
            bgNode.destroy();
        });
        var action = cc.sequence(cc.moveBy(duration, cc.v2(0, 0)), cc.fadeOut(0.3), finished);
        // bgNode.runAction(action); 
        cc.tween(bgNode).then(action).start();
    };
    ToastManager._instance = null;
    return ToastManager;
}());
exports.default = ToastManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvVG9hc3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQTZGQSxDQUFDO0lBekZVLHdCQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVELHNCQUFXLHdCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFnQixDQUFBO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsMkJBQUksR0FBSixVQUFLLElBQWlCLEVBQUUsRUFBZ0Y7UUFBbkcscUJBQUEsRUFBQSxTQUFpQjtZQUFFLHFCQUE4RSxFQUFFLEtBQUEsRUFBL0UsZUFBa0IsRUFBbEIsT0FBTyxtQkFBRyxRQUFRLEtBQUEsRUFBRSxnQkFBWSxFQUFaLFFBQVEsbUJBQUcsQ0FBQyxLQUFBLEVBQUUsZ0JBQXVDLEVBQXZDLFFBQVEsbUJBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBQTtRQUM5RixTQUFTO1FBQ1QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsS0FBSztRQUNMLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcs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LENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDO2FBQU0sSUFBSSxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixPQUFPO1FBQ1AsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUNwQixFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUNmLFFBQVEsQ0FDWCxDQUFDO1FBQ0YsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3pDLENBQUM7SUExRmMsc0JBQVMsR0FBUSxJQUFJLENBQUE7SUEyRnhDLG1CQUFDO0NBN0ZELEFBNkZDLElBQUE7a0JBN0ZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdE1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogYW55ID0gbnVsbFxyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZTxUPigpOiBUIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlPFRvYXN0TWFuYWdlcj4oKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3codGV4dDogc3RyaW5nID0gJycsIHtncmF2aXR5ID0gJ0NFTlRFUicsIGR1cmF0aW9uID0gMSwgYmdfY29sb3IgPSBjYy5jb2xvcigxMDIsIDEwMiwgMTAyLCAyMDApfSA9IHt9KXtcclxuICAgICAgICAvLyBjYW52YXNcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkNhbnZhcyk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2FudmFzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNhbnZhcy5ub2RlLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8g6IqC54K5XHJcbiAgICAgICAgbGV0IGJnTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgYmdOb2RlLmdyb3VwID0gJ3VpJ1xyXG5cclxuICAgICAgICAvLyBMYWJsZeaWh+acrOagvOW8j+iuvue9rlxyXG4gICAgICAgIGxldCB0ZXh0Tm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGV0IHRleHRMYWJlbCA9IHRleHROb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGV4dExhYmVsLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XHJcbiAgICAgICAgdGV4dExhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgICAgICB0ZXh0TGFiZWwuZm9udFNpemUgPSAzMDtcclxuICAgICAgICB0ZXh0TGFiZWwuc3RyaW5nID0gdGV4dDtcclxuXHJcbiAgICAgICAgLy8g5b2T5paH5pys5a695bqm6L+H6ZW/5pe277yM6K6+572u5Li66Ieq5Yqo5o2i6KGM5qC85byPXHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoICogdGV4dExhYmVsLmZvbnRTaXplID4gKHdpZHRoICogMykgLyA1KSB7XHJcbiAgICAgICAgICAgIHRleHROb2RlLndpZHRoID0gKHdpZHRoICogMykgLyA1O1xyXG4gICAgICAgICAgICB0ZXh0TGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHROb2RlLndpZHRoID0gdGV4dC5sZW5ndGggKiB0ZXh0TGFiZWwuZm9udFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsaW5lQ291bnQgPVxyXG4gICAgICAgICAgICB+figodGV4dC5sZW5ndGggKiB0ZXh0TGFiZWwuZm9udFNpemUpIC8gKCh3aWR0aCAqIDMpIC8gNSkpICsgMTtcclxuICAgICAgICB0ZXh0Tm9kZS5oZWlnaHQgPSB0ZXh0TGFiZWwuZm9udFNpemUgKiBsaW5lQ291bnQ7XHJcblxyXG4gICAgICAgIC8vIOiDjOaZr+iuvue9rlxyXG4gICAgICAgIGxldCBjdHggPSBiZ05vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBjdHguYXJjKFxyXG4gICAgICAgICAgICAtdGV4dE5vZGUud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB0ZXh0Tm9kZS5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAgICAgICAgIDAuNSAqIE1hdGguUEksXHJcbiAgICAgICAgICAgIDEuNSAqIE1hdGguUEksXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGV4dE5vZGUud2lkdGggLyAyLCAtKHRleHROb2RlLmhlaWdodCAvIDIgKyAyMCkpO1xyXG4gICAgICAgIGN0eC5hcmMoXHJcbiAgICAgICAgICAgIHRleHROb2RlLndpZHRoIC8gMixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgdGV4dE5vZGUuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICAgICAgICAxLjUgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgICAwLjUgKiBNYXRoLlBJLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgubGluZVRvKC10ZXh0Tm9kZS53aWR0aCAvIDIsIHRleHROb2RlLmhlaWdodCAvIDIgKyAyMCk7XHJcbiAgICAgICAgY3R4LmZpbGxDb2xvciA9IGJnX2NvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgIGJnTm9kZS5hZGRDaGlsZCh0ZXh0Tm9kZSk7XHJcblxyXG4gICAgICAgIC8vIGdyYXZpdHkg6K6+572uVG9hc3TmmL7npLrnmoTkvY3nva5cclxuICAgICAgICBpZiAoZ3Jhdml0eSA9PT0gXCJDRU5URVJcIikge1xyXG4gICAgICAgICAgICBiZ05vZGUueSA9IDA7XHJcbiAgICAgICAgICAgIGJnTm9kZS54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGdyYXZpdHkgPT09IFwiVE9QXCIpIHtcclxuICAgICAgICAgICAgYmdOb2RlLnkgPSBiZ05vZGUueSArIChoZWlnaHQgLyA1KSAqIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChncmF2aXR5ID09PSBcIkJPVFRPTVwiKSB7XHJcbiAgICAgICAgICAgIGJnTm9kZS55ID0gYmdOb2RlLnkgLSAoaGVpZ2h0IC8gNSkgKiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FudmFzLm5vZGUuYWRkQ2hpbGQoYmdOb2RlKTtcclxuICAgICAgICAvLyDmiafooYzliqjnlLtcclxuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYmdOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVCeShkdXJhdGlvbiwgY2MudjIoMCwgMCkpLFxyXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDAuMyksXHJcbiAgICAgICAgICAgIGZpbmlzaGVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBiZ05vZGUucnVuQWN0aW9uKGFjdGlvbik7IFxyXG4gICAgICAgIGNjLnR3ZWVuKGJnTm9kZSkudGhlbihhY3Rpb24pLnN0YXJ0KClcclxuICAgIH1cclxufVxyXG4iXX0=