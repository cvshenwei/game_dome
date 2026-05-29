"use strict";
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