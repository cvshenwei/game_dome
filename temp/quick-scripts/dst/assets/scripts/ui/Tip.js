
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/Tip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1RpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQXFFQztRQWpFUyxtQkFBYSxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsaUJBQVcsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFLcEMsVUFBSSxHQUFDLENBQUMsQ0FBQzs7UUF5REwsaUJBQWlCO0lBQ3JCLENBQUM7SUF6REcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixvQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELGtCQUFJLEdBQUo7UUFDRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRCxzQkFBUSxHQUFSLFVBQVMsSUFBVztRQUFwQixpQkE2QkM7UUE1QkcsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7UUFFMUIsSUFBRyxJQUFJLElBQUUsQ0FBQyxFQUFDO1lBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUUvQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNwQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQzthQUNyQyxJQUFJLENBQUM7WUFDTiwwREFBMEQ7WUFDdEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFFLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0MsQ0FBQyxDQUFDO2FBRUQsSUFBSSxDQUFDO1lBQ0oscUVBQXFFO1lBQ25FLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVoQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ2hCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEIsQ0FBQztJQUVELHFCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQWxFZ0IsR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQXFFdkI7SUFBRCxVQUFDO0NBckVELEFBcUVDLENBckVnQyxFQUFFLENBQUMsU0FBUyxHQXFFNUM7a0JBckVvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgYmVnaW5Qb3NpdGlvbj1jYy52MygtNDAsMTYwKTtcclxuXHJcbiAgcHJpdmF0ZSBlbmRQb3NpdGlvbj1jYy52MygtMjIwLC0yMCk7XHJcblxyXG4gIGhhbmROb2RlOmNjLk5vZGU7XHJcbiAgYmdOb2RlOmNjLk5vZGU7XHJcblxyXG4gIHN0ZXA9MTtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kTm9kZT1jYy5maW5kKFwiaGFuZE5vZGVcIix0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuYmdOb2RlPWNjLmZpbmQoXCJiZ05vZGVcIix0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuaGFuZE5vZGUueD10aGlzLmJlZ2luUG9zaXRpb24ueDtcclxuICAgICAgICB0aGlzLmhhbmROb2RlLnk9dGhpcy5iZWdpblBvc2l0aW9uLnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgIHRoaXMuaGFuZE5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICB0aGlzLmJnTm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgIHRoaXMuc3RlcD0xO1xyXG4gICAgICAgdGhpcy5iZWdpblBvc2l0aW9uPWNjLnYzKC00MCwxNjApO1xyXG4gICAgICAgdGhpcy5lbmRQb3NpdGlvbj1jYy52MygtMjIwLC0yMCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRUaXAoc3RlcDpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuc3RlcD1zdGVwO1xyXG4gICAgICAgIHRoaXMuaGFuZE5vZGUuYWN0aXZlPXRydWU7XHJcblxyXG4gICAgICAgIGlmKHN0ZXA9PTIpe1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luUG9zaXRpb249Y2MudjMoMzAsMTYwKTtcclxuICAgICAgICAgICAgdGhpcy5lbmRQb3NpdGlvbj1jYy52MygxMzAsLTIwKTtcclxuICAgICAgICAgICAgdGhpcy5iZ05vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmROb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaGFuZE5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kTm9kZSlcclxuICAgICAgICAgICAgICAgICAgLnRvKDEuMywge3Bvc2l0aW9uOiB0aGlzLmVuZFBvc2l0aW9ufSlcclxuICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwic3RhcnQwXCIsIHRoaXMuZ3VpZGVGaW5nZXJUaXBOb2RlLmFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kTm9kZS5wb3NpdGlvbiA9dGhpcy5iZWdpblBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4geyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJzdGFydDFcIiwgdGhpcy5ndWlkZUZpbmdlclRpcE5vZGUuYWN0aXZlKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXHJcbiAgICAgICAgICAgICkuc3RhcnQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGlwKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==