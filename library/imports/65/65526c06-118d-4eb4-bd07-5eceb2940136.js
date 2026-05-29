"use strict";
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