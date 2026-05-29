
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/layer/LoadingLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d076ynxVpJ6Ys/SGfhiZtJ', 'LoadingLayer');
// scripts/layer/LoadingLayer.ts

"use strict";
// Created by carolsail 
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
var DataManager_1 = require("../manager/DataManager");
var BaseDialog_1 = require("./BaseDialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingLayer = /** @class */ (function (_super) {
    __extends(LoadingLayer, _super);
    function LoadingLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadfill = null;
        return _this;
    }
    LoadingLayer.prototype.onEnable = function () { };
    LoadingLayer.prototype.onDisable = function () { };
    LoadingLayer.prototype.update = function (dt) {
        if (this.loadfill && this.node.active) {
            this.loadfill.fillRange = DataManager_1.default.instance.loadingRate;
            if (DataManager_1.default.instance.loadingRate >= 1) {
                // menu已加载完毕
                // if(StaticInstance.uiManager.isActive(ENUM_UI_TYPE.MENU)){
                this.hide();
                // }
            }
        }
    };
    __decorate([
        property(cc.Sprite)
    ], LoadingLayer.prototype, "loadfill", void 0);
    LoadingLayer = __decorate([
        ccclass
    ], LoadingLayer);
    return LoadingLayer;
}(BaseDialog_1.default));
exports.default = LoadingLayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xheWVyL0xvYWRpbmdMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHeEIsc0RBQWlEO0FBQ2pELDJDQUFzQztBQUdoQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBVTtJQUFwRDtRQUFBLHFFQW9CQztRQWpCRyxjQUFRLEdBQWMsSUFBSSxDQUFBOztJQWlCOUIsQ0FBQztJQWZHLCtCQUFRLEdBQVIsY0FBVyxDQUFDO0lBRVosZ0NBQVMsR0FBVCxjQUFZLENBQUM7SUFFYiw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUE7WUFDMUQsSUFBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFDO2dCQUNyQyxZQUFZO2dCQUNiLDREQUE0RDtnQkFDdkQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO2dCQUNoQixJQUFJO2FBQ047U0FDSjtJQUNMLENBQUM7SUFoQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDTTtJQUhULFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FvQmhDO0lBQUQsbUJBQUM7Q0FwQkQsQUFvQkMsQ0FwQnlDLG9CQUFVLEdBb0JuRDtrQkFwQm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVkIGJ5IGNhcm9sc2FpbCBcclxuXHJcbmltcG9ydCB7IEVOVU1fVUlfVFlQRSB9IGZyb20gXCIuLi9FbnVtXCI7XHJcbmltcG9ydCBEYXRhTWFuYWdlciBmcm9tIFwiLi4vbWFuYWdlci9EYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgQmFzZURpYWxvZyBmcm9tIFwiLi9CYXNlRGlhbG9nXCI7XHJcbmltcG9ydCB7IFN0YXRpY0luc3RhbmNlIH0gZnJvbSBcIi4uL1N0YXRpY0luc3RhbmNlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdMYXllciBleHRlbmRzIEJhc2VEaWFsb2cge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBsb2FkZmlsbDogY2MuU3ByaXRlID0gbnVsbFxyXG5cclxuICAgIG9uRW5hYmxlKCl7fVxyXG5cclxuICAgIG9uRGlzYWJsZSgpe31cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHRoaXMubG9hZGZpbGwgJiYgdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRmaWxsLmZpbGxSYW5nZSA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlXHJcbiAgICAgICAgICAgIGlmKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxvYWRpbmdSYXRlID49IDEpe1xyXG4gICAgICAgICAgICAgICAgLy8gbWVudeW3suWKoOi9veWujOavlVxyXG4gICAgICAgICAgICAgICAvLyBpZihTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuaXNBY3RpdmUoRU5VTV9VSV9UWVBFLk1FTlUpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19