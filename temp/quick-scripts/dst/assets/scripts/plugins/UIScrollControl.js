
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/plugins/UIScrollControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6235MOwRpI+bzS2hVblkfN', 'UIScrollControl');
// scripts/plugins/UIScrollControl.ts

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
exports.ENUM_SCROLL_DIR = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ENUM_SCROLL_DIR;
(function (ENUM_SCROLL_DIR) {
    ENUM_SCROLL_DIR[ENUM_SCROLL_DIR["V"] = 0] = "V";
    ENUM_SCROLL_DIR[ENUM_SCROLL_DIR["H"] = 1] = "H";
})(ENUM_SCROLL_DIR = exports.ENUM_SCROLL_DIR || (exports.ENUM_SCROLL_DIR = {}));
var UIScrollControl = /** @class */ (function (_super) {
    __extends(UIScrollControl, _super);
    function UIScrollControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.contentSize = null;
        _this.scrollDirection = ENUM_SCROLL_DIR.V;
        _this.totalCount = 0;
        _this.itemCount = 0;
        _this.childrenList = [];
        _this.itemDistance = 0;
        _this.contentSizeStart = null;
        _this.isStartFlag = false;
        _this.theMaxID = 0;
        _this.refreshCB = null;
        return _this;
    }
    UIScrollControl.prototype.init = function (_tempNode, _totalCount, _size, _dir, callBack, scrollTo) {
        if (callBack)
            this.refreshCB = callBack;
        if (this.isStartFlag == false) {
            this.scrollView = this.node.getComponent(cc.ScrollView);
            if (this.scrollView == null || this.scrollView.content == null)
                return;
            this.scrollView.content.parent.setAnchorPoint(cc.v2(0.5, 0.5));
            var _maskWidget = this.scrollView.content.parent.getComponent(cc.Widget);
            if (_maskWidget == null)
                _maskWidget = this.scrollView.content.parent.addComponent(cc.Widget);
            _maskWidget.isAlignLeft = true;
            _maskWidget.left = 0;
            _maskWidget.isAlignRight = true;
            _maskWidget.right = 0;
            _maskWidget.isAlignTop = true;
            _maskWidget.top = 0;
            _maskWidget.isAlignBottom = true;
            _maskWidget.bottom = 0;
            this.contentSize = new cc.Size(this.scrollView.node.getContentSize());
            this.scrollView.content.setContentSize(this.contentSize);
            this.contentSizeStart = this.scrollView.content.getContentSize();
        }
        if (_tempNode == null)
            return;
        this.scrollView.content.setContentSize(this.contentSizeStart);
        this.clear();
        this.totalCount = _totalCount;
        this.scrollDirection = _dir;
        if (_dir == ENUM_SCROLL_DIR.V) {
            this.scrollView.content.setAnchorPoint(cc.v2(0.5, 1));
            this.scrollView.content.setContentSize(cc.size(this.contentSizeStart.width, this.totalCount * _size.height));
            this.scrollView.content.setPosition(cc.v2(0, -this.totalCount * _size.height / 2));
            var _tempCount = Math.floor(this.contentSizeStart.height / _size.height);
            this.itemCount = _tempCount + 2;
            if (this.totalCount <= this.itemCount)
                this.itemCount = this.totalCount;
            this.itemDistance = _size.height;
        }
        else if (_dir == ENUM_SCROLL_DIR.H) {
            this.scrollView.content.setAnchorPoint(cc.v2(0, 0.5));
            this.scrollView.content.setContentSize(cc.size(this.totalCount * _size.width, this.contentSizeStart.height));
            this.scrollView.content.setPosition(cc.v2(this.totalCount * _size.width / 2, 0));
            var _tempCount = Math.floor(this.contentSizeStart.width / _size.width);
            this.itemCount = _tempCount + 2;
            if (this.totalCount <= this.itemCount) {
                this.itemCount = this.totalCount;
            }
            this.itemDistance = _size.width;
        }
        if (this.scrollView.scrollEvents.length <= 0) {
            var eventHandler = new cc.Component.EventHandler();
            eventHandler.target = this.node;
            eventHandler.component = "UIScrollControl";
            eventHandler.handler = "OnScroll";
            this.scrollView.scrollEvents.push(eventHandler);
        }
        this.isStartFlag == true;
        this.theMaxID = 0;
        this.initShowAreaItems(_tempNode, scrollTo);
    };
    UIScrollControl.prototype.clear = function () {
        this.scrollView.content.removeAllChildren();
        this.childrenList = [];
    };
    /**初始化可见的item */
    UIScrollControl.prototype.initShowAreaItems = function (_temp_node, scrollTo) {
        for (var i = 0; i < this.itemCount; i++) {
            //cc.log(" i = " + i)
            var curPos = cc.v2(0, 0);
            var node = cc.instantiate(_temp_node);
            this.scrollView.content.addChild(node);
            node.active = true;
            node.opacity = 255;
            if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
                curPos.y = -this.itemDistance / 2 - this.itemDistance * i;
            }
            else if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
                curPos.x = this.itemDistance / 2 + this.itemDistance * i;
            }
            node.name = "cell_" + i;
            node.setAnchorPoint(cc.v2(0.5, 0.5));
            node.setPosition(curPos);
            this.onRefresh(node, i, i);
            this.childrenList.push(node);
        }
        // this.scrollView.scrollToTop()
        scrollTo && scrollTo(this.scrollView);
    };
    /**滑动事件 */
    UIScrollControl.prototype.OnScroll = function () {
        //获取滚动视图相对于左上角原点的当前滚动偏移
        var scrollOffset = this.scrollView.getScrollOffset();
        var offset = 0;
        if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
            offset = scrollOffset.y;
        }
        else if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
            //水平的offset是负数，为什么会有这么sb的设计，将它取反和垂直方向的统一一下
            offset = -scrollOffset.x;
        }
        this.refreshLayout(offset);
    };
    /** 强行刷新布局 */
    UIScrollControl.prototype.refreshLayout = function (_curOffset) {
        var offset = _curOffset;
        //最大高度，超过该高度，不刷新
        var _max_rect_size = this.totalCount * this.itemDistance;
        if (offset < 0 || offset + this.contentSize.height >= _max_rect_size)
            return;
        var _index = 0; //从0开始
        var _min_index = Math.floor(offset / this.itemDistance);
        //miniIdx到theMaxID都会刷新
        for (var i = 0; i < this.itemCount; i++) {
            var node = this.childrenList[i];
            _index = _min_index + i;
            this.refreshItem(_index, i, node);
        }
        this.theMaxID = _min_index + this.itemCount;
    };
    /**
     *
     * @param _index UI该刷新的第几个元素
     * @param _node_index
     * @param node
     */
    UIScrollControl.prototype.refreshItem = function (_index, _node_index, node) {
        if (_index < 0 || _index >= this.totalCount) {
            // cc.log("索引越界, _index = " + _index + ", this.total_count = " + this.total_count)
            return;
        }
        if (node == null) {
            // cc.log("node == null");
            return;
        }
        var curPosition = cc.Vec2.ZERO;
        if (this.scrollDirection == ENUM_SCROLL_DIR.H) {
            curPosition.x = this.itemDistance / 2 + this.itemDistance * _index;
        }
        else if (this.scrollDirection == ENUM_SCROLL_DIR.V) {
            curPosition.y = -this.itemDistance / 2 - this.itemDistance * _index;
        }
        node.setPosition(curPosition);
        this.onRefresh(node, _index, _node_index);
    };
    /**
     *
     * @param node
     * @param _index
     * @param nodeIndex
     */
    UIScrollControl.prototype.onRefresh = function (node, _index, nodeIndex) {
        //cc.log("--------------- _index = " + _index)
        if (this.refreshCB != null) {
            this.refreshCB(node, _index, nodeIndex);
        }
    };
    UIScrollControl = __decorate([
        ccclass
    ], UIScrollControl);
    return UIScrollControl;
}(cc.Component));
exports.default = UIScrollControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BsdWdpbnMvVUlTY3JvbGxDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFZLGVBQXdCO0FBQXBDLFdBQVksZUFBZTtJQUFHLCtDQUFDLENBQUE7SUFBRSwrQ0FBQyxDQUFBO0FBQUMsQ0FBQyxFQUF4QixlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUFTO0FBR3BDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBa05DO1FBak5XLGdCQUFVLEdBQWtCLElBQUksQ0FBQTtRQUNoQyxpQkFBVyxHQUFZLElBQUksQ0FBQTtRQUMzQixxQkFBZSxHQUFvQixlQUFlLENBQUMsQ0FBQyxDQUFBO1FBQ3BELGdCQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsa0JBQVksR0FBYyxFQUFFLENBQUE7UUFDNUIsa0JBQVksR0FBVyxDQUFDLENBQUE7UUFDeEIsc0JBQWdCLEdBQVksSUFBSSxDQUFBO1FBQ2hDLGlCQUFXLEdBQVksS0FBSyxDQUFBO1FBQzVCLGNBQVEsR0FBVyxDQUFDLENBQUE7UUFDcEIsZUFBUyxHQUFhLElBQUksQ0FBQTs7SUF1TXRDLENBQUM7SUFwTUcsOEJBQUksR0FBSixVQUFLLFNBQWtCLEVBQUUsV0FBbUIsRUFBRSxLQUFjLEVBQUUsSUFBcUIsRUFBRSxRQUFrQixFQUFFLFFBQW1CO1FBQ3hILElBQUksUUFBUTtZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBRXZDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFF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QUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCwwQkFBMEI7WUFDMUIsT0FBTztTQUNWO1FBRUQsSUFBSSxXQUFXLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7UUFFdkMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLGVBQWUsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztTQUN0RTthQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxlQUFlLENBQUMsQ0FBQyxFQUFFO1lBQ2hELFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztTQUN4RTtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLG1DQUFTLEdBQWpCLFVBQWtCLElBQWEsRUFBRSxNQUFjLEVBQUUsU0FBaUI7UUFDOUQsOENBQThDO1FBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1NBQzFDO0lBQ0wsQ0FBQztJQWpOZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWtObkM7SUFBRCxzQkFBQztDQWxORCxBQWtOQyxDQWxONEMsRUFBRSxDQUFDLFNBQVMsR0FrTnhEO2tCQWxOb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgZW51bSBFTlVNX1NDUk9MTF9ESVIgeyBWLCBIIH1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU2Nyb2xsQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcgPSBudWxsXHJcbiAgICBwcml2YXRlIGNvbnRlbnRTaXplOiBjYy5TaXplID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBzY3JvbGxEaXJlY3Rpb246IEVOVU1fU0NST0xMX0RJUiA9IEVOVU1fU0NST0xMX0RJUi5WXHJcbiAgICBwcml2YXRlIHRvdGFsQ291bnQ6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgaXRlbUNvdW50OiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIGNoaWxkcmVuTGlzdDogY2MuTm9kZVtdID0gW11cclxuICAgIHByaXZhdGUgaXRlbURpc3RhbmNlOiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIGNvbnRlbnRTaXplU3RhcnQ6IGNjLlNpemUgPSBudWxsXHJcbiAgICBwcml2YXRlIGlzU3RhcnRGbGFnOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgdGhlTWF4SUQ6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgcmVmcmVzaENCOiBGdW5jdGlvbiA9IG51bGxcclxuXHJcblxyXG4gICAgaW5pdChfdGVtcE5vZGU6IGNjLk5vZGUsIF90b3RhbENvdW50OiBudW1iZXIsIF9zaXplOiBjYy5TaXplLCBfZGlyOiBFTlVNX1NDUk9MTF9ESVIsIGNhbGxCYWNrOiBGdW5jdGlvbiwgc2Nyb2xsVG8/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYWxsQmFjaykgdGhpcy5yZWZyZXNoQ0IgPSBjYWxsQmFja1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0RmxhZyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxWaWV3ID09IG51bGwgfHwgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQgPT0gbnVsbCkgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5wYXJlbnQuc2V0QW5jaG9yUG9pbnQoY2MudjIoMC41LCAwLjUpKVxyXG4gICAgICAgICAgICBsZXQgX21hc2tXaWRnZXQ6IGNjLldpZGdldCA9IHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnBhcmVudC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KVxyXG5cclxuICAgICAgICAgICAgaWYgKF9tYXNrV2lkZ2V0ID09IG51bGwpIF9tYXNrV2lkZ2V0ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucGFyZW50LmFkZENvbXBvbmVudChjYy5XaWRnZXQpXHJcblxyXG4gICAgICAgICAgICBfbWFza1dpZGdldC5pc0FsaWduTGVmdCA9IHRydWVcclxuICAgICAgICAgICAgX21hc2tXaWRnZXQubGVmdCA9IDBcclxuXHJcbiAgICAgICAgICAgIF9tYXNrV2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWVcclxuICAgICAgICAgICAgX21hc2tXaWRnZXQucmlnaHQgPSAwXHJcblxyXG4gICAgICAgICAgICBfbWFza1dpZGdldC5pc0FsaWduVG9wID0gdHJ1ZVxyXG4gICAgICAgICAgICBfbWFza1dpZGdldC50b3AgPSAwXHJcblxyXG4gICAgICAgICAgICBfbWFza1dpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZVxyXG4gICAgICAgICAgICBfbWFza1dpZGdldC5ib3R0b20gPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTaXplID0gbmV3IGNjLlNpemUodGhpcy5zY3JvbGxWaWV3Lm5vZGUuZ2V0Q29udGVudFNpemUoKSlcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUodGhpcy5jb250ZW50U2l6ZSlcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50U2l6ZVN0YXJ0ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfdGVtcE5vZGUgPT0gbnVsbCkgcmV0dXJuXHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnNldENvbnRlbnRTaXplKHRoaXMuY29udGVudFNpemVTdGFydClcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhcigpXHJcblxyXG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IF90b3RhbENvdW50XHJcbiAgICAgICAgdGhpcy5zY3JvbGxEaXJlY3Rpb24gPSBfZGlyIGFzIEVOVU1fU0NST0xMX0RJUlxyXG5cclxuICAgICAgICBpZiAoX2RpciA9PSBFTlVNX1NDUk9MTF9ESVIuVikge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRBbmNob3JQb2ludChjYy52MigwLjUsIDEpKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLmNvbnRlbnRTaXplU3RhcnQud2lkdGgsIHRoaXMudG90YWxDb3VudCAqIF9zaXplLmhlaWdodCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRQb3NpdGlvbihjYy52MigwLCAtdGhpcy50b3RhbENvdW50ICogX3NpemUuaGVpZ2h0IC8gMikpXHJcblxyXG4gICAgICAgICAgICBsZXQgX3RlbXBDb3VudDogbnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLmNvbnRlbnRTaXplU3RhcnQuaGVpZ2h0IC8gX3NpemUuaGVpZ2h0KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pdGVtQ291bnQgPSBfdGVtcENvdW50ICsgMlxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxDb3VudCA8PSB0aGlzLml0ZW1Db3VudCkgdGhpcy5pdGVtQ291bnQgPSB0aGlzLnRvdGFsQ291bnRcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURpc3RhbmNlID0gX3NpemUuaGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF9kaXIgPT0gRU5VTV9TQ1JPTExfRElSLkgpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0QW5jaG9yUG9pbnQoY2MudjIoMCwgMC41KSlcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLnRvdGFsQ291bnQgKiBfc2l6ZS53aWR0aCwgdGhpcy5jb250ZW50U2l6ZVN0YXJ0LmhlaWdodCkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5zZXRQb3NpdGlvbihjYy52Mih0aGlzLnRvdGFsQ291bnQgKiBfc2l6ZS53aWR0aCAvIDIsIDApKVxyXG4gICAgICAgICAgICBsZXQgX3RlbXBDb3VudDogbnVtYmVyID0gTWF0aC5mbG9vcih0aGlzLmNvbnRlbnRTaXplU3RhcnQud2lkdGggLyBfc2l6ZS53aWR0aClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUNvdW50ID0gX3RlbXBDb3VudCArIDJcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsQ291bnQgPD0gdGhpcy5pdGVtQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUNvdW50ID0gdGhpcy50b3RhbENvdW50XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURpc3RhbmNlID0gX3NpemUud2lkdGhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsRXZlbnRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJVSVNjcm9sbENvbnRyb2xcIjtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIk9uU2Nyb2xsXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxFdmVudHMucHVzaChldmVudEhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0RmxhZyA9PSB0cnVlXHJcbiAgICAgICAgdGhpcy50aGVNYXhJRCA9IDBcclxuXHJcbiAgICAgICAgdGhpcy5pbml0U2hvd0FyZWFJdGVtcyhfdGVtcE5vZGUsIHNjcm9sbFRvKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKVxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW11cclxuICAgIH1cclxuXHJcbiAgICAvKirliJ3lp4vljJblj6/op4HnmoRpdGVtICovXHJcbiAgICBwcml2YXRlIGluaXRTaG93QXJlYUl0ZW1zKF90ZW1wX25vZGU6IGNjLk5vZGUsIHNjcm9sbFRvOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIiBpID0gXCIgKyBpKVxyXG4gICAgICAgICAgICBsZXQgY3VyUG9zOiBjYy5WZWMyID0gY2MudjIoMCwgMClcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShfdGVtcF9ub2RlKVxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChub2RlKVxyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMjU1XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxEaXJlY3Rpb24gPT0gRU5VTV9TQ1JPTExfRElSLlYpIHtcclxuICAgICAgICAgICAgICAgIGN1clBvcy55ID0gLXRoaXMuaXRlbURpc3RhbmNlIC8gMiAtIHRoaXMuaXRlbURpc3RhbmNlICogaVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uID09IEVOVU1fU0NST0xMX0RJUi5IKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJQb3MueCA9IHRoaXMuaXRlbURpc3RhbmNlIC8gMiArIHRoaXMuaXRlbURpc3RhbmNlICogaVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSBgY2VsbF8ke2l9YFxyXG4gICAgICAgICAgICBub2RlLnNldEFuY2hvclBvaW50KGNjLnYyKDAuNSwgMC41KSlcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjdXJQb3MpXHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaChub2RlLCBpLCBpKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QucHVzaChub2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgICAgIHNjcm9sbFRvICYmIHNjcm9sbFRvKHRoaXMuc2Nyb2xsVmlldylcclxuICAgIH1cclxuXHJcbiAgICAvKirmu5Hliqjkuovku7YgKi9cclxuICAgIHByaXZhdGUgT25TY3JvbGwoKSB7XHJcbiAgICAgICAgLy/ojrflj5bmu5rliqjop4blm77nm7jlr7nkuo7lt6bkuIrop5Lljp/ngrnnmoTlvZPliY3mu5rliqjlgY/np7tcclxuICAgICAgICBsZXQgc2Nyb2xsT2Zmc2V0OiBjYy5WZWMyID0gdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpO1xyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbERpcmVjdGlvbiA9PSBFTlVNX1NDUk9MTF9ESVIuVikge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSBzY3JvbGxPZmZzZXQueVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnNjcm9sbERpcmVjdGlvbiA9PSBFTlVNX1NDUk9MTF9ESVIuSCkge1xyXG4gICAgICAgICAgICAvL+awtOW5s+eahG9mZnNldOaYr+i0n+aVsO+8jOS4uuS7gOS5iOS8muaciei/meS5iHNi55qE6K6+6K6h77yM5bCG5a6D5Y+W5Y+N5ZKM5Z6C55u05pa55ZCR55qE57uf5LiA5LiA5LiLXHJcbiAgICAgICAgICAgIG9mZnNldCA9IC1zY3JvbGxPZmZzZXQueFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZnJlc2hMYXlvdXQob2Zmc2V0KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiDlvLrooYzliLfmlrDluIPlsYAgKi9cclxuICAgIHByaXZhdGUgcmVmcmVzaExheW91dChfY3VyT2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSBfY3VyT2Zmc2V0XHJcblxyXG4gICAgICAgIC8v5pyA5aSn6auY5bqm77yM6LaF6L+H6K+l6auY5bqm77yM5LiN5Yi35pawXHJcbiAgICAgICAgbGV0IF9tYXhfcmVjdF9zaXplOiBudW1iZXIgPSB0aGlzLnRvdGFsQ291bnQgKiB0aGlzLml0ZW1EaXN0YW5jZVxyXG5cclxuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyB0aGlzLmNvbnRlbnRTaXplLmhlaWdodCA+PSBfbWF4X3JlY3Rfc2l6ZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGxldCBfaW5kZXg6IG51bWJlciA9IDAgLy/ku44w5byA5aeLXHJcbiAgICAgICAgbGV0IF9taW5faW5kZXg6IG51bWJlciA9IE1hdGguZmxvb3Iob2Zmc2V0IC8gdGhpcy5pdGVtRGlzdGFuY2UpO1xyXG5cclxuICAgICAgICAvL21pbmlJZHjliLB0aGVNYXhJROmDveS8muWIt+aWsFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IHRoaXMuY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBfaW5kZXggPSBfbWluX2luZGV4ICsgaTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShfaW5kZXgsIGksIG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRoZU1heElEID0gX21pbl9pbmRleCArIHRoaXMuaXRlbUNvdW50XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBfaW5kZXggVUnor6XliLfmlrDnmoTnrKzlh6DkuKrlhYPntKBcclxuICAgICAqIEBwYXJhbSBfbm9kZV9pbmRleCBcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICovXHJcbiAgICByZWZyZXNoSXRlbShfaW5kZXg6IG51bWJlciwgX25vZGVfaW5kZXg6IG51bWJlciwgbm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGlmIChfaW5kZXggPCAwIHx8IF9pbmRleCA+PSB0aGlzLnRvdGFsQ291bnQpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwi57Si5byV6LaK55WMLCBfaW5kZXggPSBcIiArIF9pbmRleCArIFwiLCB0aGlzLnRvdGFsX2NvdW50ID0gXCIgKyB0aGlzLnRvdGFsX2NvdW50KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIm5vZGUgPT0gbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1clBvc2l0aW9uOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbERpcmVjdGlvbiA9PSBFTlVNX1NDUk9MTF9ESVIuSCkge1xyXG4gICAgICAgICAgICBjdXJQb3NpdGlvbi54ID0gdGhpcy5pdGVtRGlzdGFuY2UgLyAyICsgdGhpcy5pdGVtRGlzdGFuY2UgKiBfaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uID09IEVOVU1fU0NST0xMX0RJUi5WKSB7XHJcbiAgICAgICAgICAgIGN1clBvc2l0aW9uLnkgPSAtIHRoaXMuaXRlbURpc3RhbmNlIC8gMiAtIHRoaXMuaXRlbURpc3RhbmNlICogX2luZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjdXJQb3NpdGlvbilcclxuICAgICAgICB0aGlzLm9uUmVmcmVzaChub2RlLCBfaW5kZXgsIF9ub2RlX2luZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKiBAcGFyYW0gX2luZGV4IFxyXG4gICAgICogQHBhcmFtIG5vZGVJbmRleCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblJlZnJlc2gobm9kZTogY2MuTm9kZSwgX2luZGV4OiBudW1iZXIsIG5vZGVJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCItLS0tLS0tLS0tLS0tLS0gX2luZGV4ID0gXCIgKyBfaW5kZXgpXHJcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaENCICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ0Iobm9kZSwgX2luZGV4LCBub2RlSW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==