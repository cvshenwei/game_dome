"use strict";
cc._RF.push(module, '42d77+piHNDzaMLxefuS7iX', 'Tip');
// scripts/ui/Tip.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tip = /** @class */ (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.beginPosition = cc.v3(-40, 160);
        _this.endPosition = cc.v3(-220, -20);
        _this.step = 1;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Tip.prototype.onLoad = function () {
        this.handNode = cc.find("handNode", this.node);
        this.bgNode = cc.find("bgNode", this.node);
        this.handNode.x = this.beginPosition.x;
        this.handNode.y = this.beginPosition.y;
    };
    Tip.prototype.init = function () {
        this.handNode.active = true;
        this.bgNode.active = true;
        this.step = 1;
        this.beginPosition = cc.v3(-40, 160);
        this.endPosition = cc.v3(-220, -20);
    };
    Tip.prototype.startTip = function (step) {
        var _this = this;
        this.step = step;
        this.handNode.active = true;
        if (step == 2) {
            this.beginPosition = cc.v3(30, 160);
            this.endPosition = cc.v3(130, -20);
            this.bgNode.active = false;
        }
        this.handNode.stopAllActions();
        cc.tween(this.handNode)
            .repeatForever(cc.tween(this.handNode)
            .to(1.3, { position: this.endPosition })
            .call(function () {
            //  console.log("start0", this.guideFingerTipNode.active);
            _this.handNode.active = false;
            _this.handNode.position = _this.beginPosition;
        })
            .call(function () {
            //  console.log("start1", this.guideFingerTipNode.active);           
            _this.handNode.active = true;
        })
            .delay(0.3)).start();
    };
    Tip.prototype.hideTip = function () {
        this.node.active = false;
    };
    Tip = __decorate([
        ccclass
    ], Tip);
    return Tip;
}(cc.Component));
exports.default = Tip;

cc._RF.pop();