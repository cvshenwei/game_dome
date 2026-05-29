
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rank/RankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c12665jiPlGR5CAIFRXoJrc', 'RankItem');
// scripts/rank/RankItem.ts

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
var i18nManage_1 = require("../i18n/i18nManage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RankItem = /** @class */ (function (_super) {
    __extends(RankItem, _super);
    function RankItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.meNode = null;
        _this.playerNode = null;
        _this.topNode = null;
        _this.scoreLabel = null;
        //排名
        _this.numberLabel = null;
        //箭头
        _this.arrow = null;
        _this.nameLabel = null;
        _this.scoreNode = null;
        _this.isMe = false;
        //level score
        _this.rankType = "";
        return _this;
    }
    RankItem.prototype.onLoad = function () {
        this.meNode = cc.find('meNode', this.node);
        this.playerNode = cc.find('playerNode', this.node);
        this.topNode = cc.find('topNode', this.node);
        this.numberLabel = cc.find('rankNum', this.node).getComponent(cc.Label);
        this.arrow = cc.find('arrow', this.node);
        this.nameLabel = cc.find('name', this.node).getComponent(cc.Label);
        this.scoreNode = cc.find('scoreNode', this.node);
        this.scoreLabel = cc.find('num', this.scoreNode).getComponent(cc.Label);
        this.node.stopAllActions();
        this.arrow.active = false;
        this.topNode.active = false;
    };
    RankItem.prototype.initItem = function (name, rank, score, isMe, rankType) {
        this.nameLabel.string = name;
        this.numberLabel.string = rank.toString();
        this.scoreLabel.string = score.toString();
        this.isMe = isMe;
        if (this.isMe) {
            this.meNode.active = true;
            this.playerNode.active = false;
        }
        else {
            this.meNode.active = false;
            this.playerNode.active = true;
        }
        if (rank <= 3) {
            this.topNode.active = true;
            this.numberLabel.node.active = false;
            if (rank == 1) {
                this.topNode.getChildByName('one').active = true;
                this.topNode.getChildByName('two').active = false;
                this.topNode.getChildByName('three').active = false;
            }
            if (rank == 2) {
                this.topNode.getChildByName('one').active = false;
                this.topNode.getChildByName('two').active = true;
                this.topNode.getChildByName('three').active = false;
            }
            if (rank == 3) {
                this.topNode.getChildByName('one').active = false;
                this.topNode.getChildByName('two').active = false;
                this.topNode.getChildByName('three').active = true;
            }
        }
        var toggle = this.node.getComponent(cc.Toggle);
        this.setRankType(rankType);
    };
    RankItem.prototype.setArrow = function (flag) {
        this.arrow.active = true;
        if (flag) {
            this.arrow.getChildByName('up').active = true;
            this.arrow.getChildByName('down').active = false;
        }
        else {
            this.arrow.getChildByName('up').active = false;
            this.arrow.getChildByName('down').active = true;
        }
    };
    RankItem.prototype.noRank = function (rankNum) {
        this.meNode.getChildByName("bg").width = 680;
        this.meNode.getChildByName("bg").height = 100;
        this.numberLabel.string = rankNum;
        this.numberLabel.node.scale = 1.1;
    };
    RankItem.prototype.setRankType = function (rankType) {
        this.rankType = rankType;
        if (this.rankType == "level") {
            this.scoreNode.getChildByName("title").getComponent(cc.Label).string = i18nManage_1.i18nManage._getLabel('title_level', []);
        }
        else {
            this.scoreNode.getChildByName("title").getComponent(cc.Label).string = i18nManage_1.i18nManage._getLabel('title_score', []);
        }
    };
    RankItem = __decorate([
        ccclass
    ], RankItem);
    return RankItem;
}(cc.Component));
exports.default = RankItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JhbmsvUmFua0l0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsaURBQWdEO0FBRTFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBeUdDO1FBdkdXLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUNwQyxJQUFJO1FBQ0ksaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFckMsSUFBSTtRQUNJLFdBQUssR0FBVyxJQUFJLENBQUM7UUFFckIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBUyxLQUFLLENBQUM7UUFFM0IsYUFBYTtRQUNMLGNBQVEsR0FBUSxFQUFFLENBQUM7O0lBbUYvQixDQUFDO0lBaEZHLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFD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QUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxDQUFDO0lBRXBDLENBQUM7SUFFTSw4QkFBVyxHQUFsQixVQUFtQixRQUFlO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDO1FBQ3ZCLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBRSxPQUFPLEVBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9HO2FBQUk7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0c7SUFFTCxDQUFDO0lBdkdnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUc1QjtJQUFELGVBQUM7Q0F6R0QsQUF5R0MsQ0F6R3FDLEVBQUUsQ0FBQyxTQUFTLEdBeUdqRDtrQkF6R29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IFNwcml0ZUZyYW1lQ2FjaGUgZnJvbSBcIi4uL2ZyYW1ld29yay9TcHJpdGVGcmFtZUNhY2hlXCI7XHJcbmltcG9ydCB7IGkxOG5NYW5hZ2UgfSBmcm9tIFwiLi4vaTE4bi9pMThuTWFuYWdlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBtZU5vZGU6IGNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBwcml2YXRlIHBsYXllck5vZGU6IGNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBwcml2YXRlIHRvcE5vZGU6IGNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBwcml2YXRlIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDsgXHJcbiAgICAvL+aOkuWQjVxyXG4gICAgcHJpdmF0ZSBudW1iZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsOyBcclxuXHJcbiAgICAvL+eureWktFxyXG4gICAgcHJpdmF0ZSBhcnJvdzpjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG5hbWVMYWJlbDpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZU5vZGU6IGNjLk5vZGUgPSBudWxsOyBcclxuXHJcbiAgICBwcml2YXRlIGlzTWU6Ym9vbGVhbj1mYWxzZTtcclxuXHJcbiAgICAvL2xldmVsIHNjb3JlXHJcbiAgICBwcml2YXRlIHJhbmtUeXBlOnN0cmluZz1cIlwiO1xyXG5cclxuXHJcbiAgICBvbkxvYWQgKCl7XHJcbiAgICAgICAgdGhpcy5tZU5vZGUgPSBjYy5maW5kKCdtZU5vZGUnLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGNjLmZpbmQoJ3BsYXllck5vZGUnLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMudG9wTm9kZSA9IGNjLmZpbmQoJ3RvcE5vZGUnLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyTGFiZWwgPSBjYy5maW5kKCdyYW5rTnVtJywgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuYXJyb3cgPSBjYy5maW5kKCdhcnJvdycsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwgPSBjYy5maW5kKCduYW1lJywgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVOb2RlID0gY2MuZmluZCgnc2NvcmVOb2RlJywgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwgPSBjYy5maW5kKCdudW0nLCB0aGlzLnNjb3JlTm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmFycm93LmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLnRvcE5vZGUuYWN0aXZlPWZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0SXRlbShuYW1lOnN0cmluZyxyYW5rOm51bWJlcixzY29yZTpudW1iZXIsaXNNZTpib29sZWFuLHJhbmtUeXBlOnN0cmluZyl7ICAgIFxyXG4gICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZz1uYW1lO1xyXG4gICAgICAgIHRoaXMubnVtYmVyTGFiZWwuc3RyaW5nPXJhbmsudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nPXNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5pc01lPWlzTWU7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmlzTWUpe1xyXG4gICAgICAgICAgICB0aGlzLm1lTm9kZS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOb2RlLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5tZU5vZGUuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJhbms8PTMpe1xyXG4gICAgICAgICAgICB0aGlzLnRvcE5vZGUuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyTGFiZWwubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKHJhbms9PTEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BOb2RlLmdldENoaWxkQnlOYW1lKCdvbmUnKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wTm9kZS5nZXRDaGlsZEJ5TmFtZSgndHdvJykuYWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BOb2RlLmdldENoaWxkQnlOYW1lKCd0aHJlZScpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgfWlmKHJhbms9PTIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BOb2RlLmdldENoaWxkQnlOYW1lKCdvbmUnKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3R3bycpLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BOb2RlLmdldENoaWxkQnlOYW1lKCd0aHJlZScpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgfWlmKHJhbms9PTMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BOb2RlLmdldENoaWxkQnlOYW1lKCdvbmUnKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3R3bycpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wTm9kZS5nZXRDaGlsZEJ5TmFtZSgndGhyZWUnKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRvZ2dsZT10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSk7XHJcbiAgICAgICAgdGhpcy5zZXRSYW5rVHlwZShyYW5rVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEFycm93KGZsYWc6Ym9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5hcnJvdy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICBpZihmbGFnKXtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDaGlsZEJ5TmFtZSgndXAnKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDaGlsZEJ5TmFtZSgnZG93bicpLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDaGlsZEJ5TmFtZSgndXAnKS5hY3RpdmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cuZ2V0Q2hpbGRCeU5hbWUoJ2Rvd24nKS5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBub1JhbmsocmFua051bTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMubWVOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikud2lkdGg9NjgwO1xyXG4gICAgICAgIHRoaXMubWVOb2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuaGVpZ2h0PTEwMDtcclxuICAgICAgICB0aGlzLm51bWJlckxhYmVsLnN0cmluZz1yYW5rTnVtO1xyXG4gICAgICAgIHRoaXMubnVtYmVyTGFiZWwubm9kZS5zY2FsZT0xLjE7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFJhbmtUeXBlKHJhbmtUeXBlOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5yYW5rVHlwZT1yYW5rVHlwZTtcclxuICAgICAgICBpZih0aGlzLnJhbmtUeXBlPT1cImxldmVsXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWkxOG5NYW5hZ2UuX2dldExhYmVsKCd0aXRsZV9sZXZlbCcsW10pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWkxOG5NYW5hZ2UuX2dldExhYmVsKCd0aXRsZV9zY29yZScsW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==