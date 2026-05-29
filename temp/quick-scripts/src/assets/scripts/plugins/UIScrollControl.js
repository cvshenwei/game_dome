"use strict";
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