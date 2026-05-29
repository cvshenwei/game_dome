
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/i18n/i18nLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e480X7ld5NqbZufD2480Yc', 'i18nLabel');
// scripts/i18n/i18nLabel.ts

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
exports.i18nLabel = void 0;
var i18nManage_1 = require("./i18nManage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, disallowMultiple = _a.disallowMultiple, requireComponent = _a.requireComponent, menu = _a.menu;
var i18nLabel = /** @class */ (function (_super) {
    __extends(i18nLabel, _super);
    function i18nLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.i18n_string = "";
        _this.i18n_params = [];
        return _this;
    }
    i18nLabel.prototype.start = function () {
        i18nManage_1.i18nManage._addOrDelLabel(this, true);
        this._resetValue();
    };
    Object.defineProperty(i18nLabel.prototype, "string", {
        get: function () {
            return this.i18n_string;
        },
        set: function (value) {
            this.i18n_string = value;
            this.setEndValue();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(i18nLabel.prototype, "params", {
        get: function () {
            return this.i18n_params;
        },
        set: function (value) {
            this.i18n_params = value;
            this.setEndValue();
        },
        enumerable: false,
        configurable: true
    });
    i18nLabel.prototype.init = function (string, params) {
        this.i18n_string = string;
        this.i18n_params = params;
        this.setEndValue();
    };
    i18nLabel.prototype.setEndValue = function () {
        var label = this.getComponent(cc.Label);
        if (cc.isValid(label)) {
            // console.log('this.i18n_string:',this.i18n_string);
            // console.log('_getLabel:',i18nManage._getLabel(this.i18n_string, this.i18n_params));
            label.string = i18nManage_1.i18nManage._getLabel(this.i18n_string, this.i18n_params);
        }
    };
    i18nLabel.prototype._resetValue = function () {
        this.string = this.i18n_string;
    };
    i18nLabel.prototype.onDestroy = function () {
        i18nManage_1.i18nManage._addOrDelLabel(this, false);
    };
    __decorate([
        property({ visible: false })
    ], i18nLabel.prototype, "i18n_string", void 0);
    __decorate([
        property({ visible: false })
    ], i18nLabel.prototype, "i18n_params", void 0);
    __decorate([
        property({ type: cc.String })
    ], i18nLabel.prototype, "string", null);
    __decorate([
        property({ type: [cc.String] })
    ], i18nLabel.prototype, "params", null);
    i18nLabel = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Label),
        disallowMultiple,
        menu("多语言/i18nLabel")
    ], i18nLabel);
    return i18nLabel;
}(cc.Component));
exports.i18nLabel = i18nLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2kxOG4vaTE4bkxhYmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEM7QUFDcEMsSUFBQSxLQUFxRixFQUFFLENBQUMsVUFBVSxFQUFoRyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFPekc7SUFBK0IsNkJBQVk7SUFBM0M7UUFBQSxxRUEwREM7UUF2RFcsaUJBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsaUJBQVcsR0FBYSxFQUFFLENBQUM7O0lBb0R2QyxDQUFDO0lBbERHLHlCQUFLLEdBQUw7UUFDSSx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFXLEtBQWE7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFFekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3RCLENBQUM7OztPQU5BO0lBU0Qsc0JBQUksNkJBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBVyxLQUFlO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN0QixDQUFDOzs7T0FOQTtJQVFELHdCQUFJLEdBQUosVUFBSyxNQUFjLEVBQUUsTUFBZ0I7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFFMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQixxREFBcUQ7WUFDckQsc0ZBQXNGO1lBQ3JGLEtBQUssQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0U7SUFDTCxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLHVCQUFVLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2tEQUNJO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2tEQUNNO0lBUW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzsyQ0FHN0I7SUFTRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzJDQUcvQjtJQTNCUSxTQUFTO1FBTHJCLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQztPQUNULFNBQVMsQ0EwRHJCO0lBQUQsZ0JBQUM7Q0ExREQsQUEwREMsQ0ExRDhCLEVBQUUsQ0FBQyxTQUFTLEdBMEQxQztBQTFEWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGkxOG5NYW5hZ2UgfSBmcm9tIFwiLi9pMThuTWFuYWdlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCBkaXNhbGxvd011bHRpcGxlLCByZXF1aXJlQ29tcG9uZW50LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuQGV4ZWN1dGVJbkVkaXRNb2RlXHJcbkByZXF1aXJlQ29tcG9uZW50KGNjLkxhYmVsKVxyXG5AZGlzYWxsb3dNdWx0aXBsZVxyXG5AbWVudShcIuWkmuivreiogC9pMThuTGFiZWxcIilcclxuZXhwb3J0IGNsYXNzIGkxOG5MYWJlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogZmFsc2UgfSlcclxuICAgIHByaXZhdGUgaTE4bl9zdHJpbmc6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdmlzaWJsZTogZmFsc2UgfSlcclxuICAgIHByaXZhdGUgaTE4bl9wYXJhbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaTE4bk1hbmFnZS5fYWRkT3JEZWxMYWJlbCh0aGlzLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9yZXNldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3RyaW5nIH0pXHJcbiAgICBnZXQgc3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmkxOG5fc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHJpbmcodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaTE4bl9zdHJpbmcgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRFbmRWYWx1ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLlN0cmluZ10gfSlcclxuICAgIGdldCBwYXJhbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bl9wYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHBhcmFtcyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLmkxOG5fcGFyYW1zID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RW5kVmFsdWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoc3RyaW5nOiBzdHJpbmcsIHBhcmFtczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLmkxOG5fc3RyaW5nID0gc3RyaW5nO1xyXG4gICAgICAgIHRoaXMuaTE4bl9wYXJhbXMgPSBwYXJhbXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RW5kVmFsdWUoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RW5kVmFsdWUoKSB7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGxhYmVsKSkge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmkxOG5fc3RyaW5nOicsdGhpcy5pMThuX3N0cmluZyk7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ19nZXRMYWJlbDonLGkxOG5NYW5hZ2UuX2dldExhYmVsKHRoaXMuaTE4bl9zdHJpbmcsIHRoaXMuaTE4bl9wYXJhbXMpKTtcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gaTE4bk1hbmFnZS5fZ2V0TGFiZWwodGhpcy5pMThuX3N0cmluZywgdGhpcy5pMThuX3BhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9yZXNldFZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMuc3RyaW5nID0gdGhpcy5pMThuX3N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaTE4bk1hbmFnZS5fYWRkT3JEZWxMYWJlbCh0aGlzLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuIl19