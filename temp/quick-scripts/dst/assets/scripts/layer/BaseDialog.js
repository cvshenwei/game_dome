
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/BaseDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81839rP+EpIUJ57N1pyG8/t', 'BaseDialog');
// scripts/layer/BaseDialog.ts

"use strict";
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
var BaseDialog = /** @class */ (function (_super) {
    __extends(BaseDialog, _super);
    function BaseDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseDialog.prototype.show = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        this.node.active = true;
        this.onShown.apply(this, params);
    };
    BaseDialog.prototype.hide = function () {
        this.node.active = false;
        this.onHide();
    };
    BaseDialog.prototype.onShown = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    BaseDialog.prototype.onHide = function () {
    };
    BaseDialog.prototype.zoomIn = function (node, scale, speed) {
        if (scale === void 0) { scale = 1.5; }
        if (speed === void 0) { speed = 0.3; }
        node.setScale(scale);
        var act = cc.scaleTo(speed, 1);
        cc.tween(node).then(act).start();
    };
    BaseDialog.prototype.zoomOut = function (node, scale, speed) {
        if (scale === void 0) { scale = 0.5; }
        if (speed === void 0) { speed = 0.3; }
        node.setScale(scale);
        var act = cc.scaleTo(speed, 1);
        cc.tween(node).then(act).start();
    };
    BaseDialog = __decorate([
        ccclass
    ], BaseDialog);
    return BaseDialog;
}(cc.Component));
exports.default = BaseDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0Jhc2VEaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBaUNBLENBQUM7SUEvQkcseUJBQUksR0FBSjtRQUFLLGdCQUFTO2FBQVQsVUFBUyxFQUFULHFCQUFTLEVBQVQsSUFBUztZQUFULDJCQUFTOztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxPQUFaLElBQUksRUFBWSxNQUFNLEVBQUU7SUFDNUIsQ0FBQztJQUlELHlCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQVEsZ0JBQVM7YUFBVCxVQUFTLEVBQVQscUJBQVMsRUFBVCxJQUFTO1lBQVQsMkJBQVM7O0lBRWpCLENBQUM7SUFFRCwyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELDJCQUFNLEdBQU4sVUFBTyxJQUFhLEVBQUUsS0FBbUIsRUFBRSxLQUFtQjtRQUF4QyxzQkFBQSxFQUFBLFdBQW1CO1FBQUUsc0JBQUEsRUFBQSxXQUFtQjtRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3BDLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsSUFBYSxFQUFFLEtBQW1CLEVBQUUsS0FBbUI7UUFBeEMsc0JBQUEsRUFBQSxXQUFtQjtRQUFFLHNCQUFBLEVBQUEsV0FBbUI7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNwQixJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNoQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNwQyxDQUFDO0lBaENnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBaUM5QjtJQUFELGlCQUFDO0NBakNELEFBaUNDLENBakN1QyxFQUFFLENBQUMsU0FBUyxHQWlDbkQ7a0JBakNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZURpYWxvZyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc2hvdyguLi5wYXJhbXMpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uU2hvd24oLi4ucGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uSGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvd24oLi4ucGFyYW1zKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHpvb21Jbihub2RlOiBjYy5Ob2RlLCBzY2FsZTogbnVtYmVyID0gMS41LCBzcGVlZDogbnVtYmVyID0gMC4zKSB7XHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShzY2FsZSlcclxuICAgICAgICBjb25zdCBhY3QgPSBjYy5zY2FsZVRvKHNwZWVkLCAxKVxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRoZW4oYWN0KS5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgem9vbU91dChub2RlOiBjYy5Ob2RlLCBzY2FsZTogbnVtYmVyID0gMC41LCBzcGVlZDogbnVtYmVyID0gMC4zKSB7XHJcbiAgICAgICAgbm9kZS5zZXRTY2FsZShzY2FsZSlcclxuICAgICAgICBjb25zdCBhY3QgPSBjYy5zY2FsZVRvKHNwZWVkLCAxKVxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpLnRoZW4oYWN0KS5zdGFydCgpXHJcbiAgICB9XHJcbn1cclxuIl19