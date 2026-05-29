
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d970VZoPFL/L9/Lg/KHxlp', 'GameManager');
// scripts/manager/GameManager.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Enum_1 = require("../Enum");
var StaticInstance_1 = require("../StaticInstance");
var Utils_1 = require("../Utils");
var Goods_1 = require("../game/Goods");
var Container_1 = require("../game/Container");
var AudioManager_1 = require("./AudioManager");
var DataManager_1 = require("./DataManager");
var PoolManager_1 = require("./PoolManager");
var LevelsConfig_1 = require("../config/LevelsConfig");
var Levels_1 = require("../game/Levels");
var Tip_1 = require("../ui/Tip");
var CommonTool_1 = require("../framework/utils/CommonTool");
var EffectManager_1 = require("./EffectManager");
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stage = null;
        //  containers: cc.Node[] = [];
        _this.levels = null;
        _this.tipNode = null;
        return _this;
    }
    GameManager.prototype.onLoad = function () {
        StaticInstance_1.StaticInstance.setGameManager(this);
        this.stage = cc.find('Stage', this.node);
    };
    GameManager.prototype.onDestroy = function () { };
    // 开始游戏
    GameManager.prototype.onGameStart = function () {
        DataManager_1.default.instance.reset();
        this.initGame();
    };
    // 获取牌面状态
    GameManager.prototype.getGameStatus = function () {
        var count = 0;
        var indexs = new Map();
        var frontContainers = DataManager_1.default.instance.frontContainers.filter(function (frontContainer) { return !frontContainer.parent.parent.getComponent(Container_1.default).isLock; });
        for (var i = 0; i < frontContainers.length; i++) {
            var goods = frontContainers[i].getChildByName('Goods');
            if (!goods) {
                count++;
            }
            else {
                var goodsComponent = goods.getComponent(Goods_1.default);
                var key = goodsComponent.id;
                if (indexs.has(key)) {
                    indexs.set(key, indexs.get(key) + 1);
                }
                else {
                    indexs.set(key, 1);
                }
            }
        }
        // console.log("count",count);
        // console.log("indexs",indexs);
        var max;
        indexs.forEach(function (value) {
            if (max === undefined || value > max) {
                max = value;
            }
        });
        // console.log("max",max);
        return { isGameLose: count == 0, isGameShuffle: (max < 3 && (count <= 2)) };
    };
    // 洗牌
    GameManager.prototype.onGameShuffle = function (deletePairs) {
        var _this = this;
        if (deletePairs === void 0) { deletePairs = 0; }
        var handleRefresh = function () {
            DataManager_1.default.instance.isShuffling = true;
            console.log('开始洗牌:', DataManager_1.default.instance.shuffleLoopNum, deletePairs);
            var goodsIndexArr = [];
            _this.levels.containers.forEach(function (container) {
                var backContainers = container.node.getChildByName('back').children;
                backContainers.forEach(function (back) {
                    var goods = back.getChildByName('Goods');
                    if (goods) {
                        goodsIndexArr.push(goods.getComponent(Goods_1.default).id);
                        goods.destroy();
                    }
                });
                var frontContainer = container.node.getChildByName('front').children;
                frontContainer.forEach(function (front) {
                    var goods = front.getChildByName('Goods');
                    if (goods) {
                        goodsIndexArr.push(goods.getComponent(Goods_1.default).id);
                        goods.destroy();
                    }
                });
            });
            DataManager_1.default.instance.goodsData.forEach(function (data) {
                data.forEach(function (d) {
                    if (d && d.length > 0)
                        goodsIndexArr.push.apply(goodsIndexArr, d);
                });
            });
            // 删除deletePairs对数据
            if (deletePairs > 0) {
                var deleteIndexArr_1 = [];
                for (var d = 0; d < goodsIndexArr.length; d++) {
                    var tempIndex = goodsIndexArr[d];
                    if (deleteIndexArr_1.length >= deletePairs) {
                        break;
                    }
                    else {
                        if (deleteIndexArr_1.indexOf(tempIndex) >= 0) {
                            continue;
                        }
                        else {
                            deleteIndexArr_1.push(tempIndex);
                        }
                    }
                }
                // 解锁
                _this.levels.locks.forEach(function (lock, index) {
                    lock.updateLockNum();
                });
                // 取消时停技能
                if (StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE)) {
                    StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
                    StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                    StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
                }
                // 效果
                _this.levels.containers.forEach(function (container) {
                    var collect = PoolManager_1.default.instance.getNode('Collect', container.node);
                    // 收集星星起始点
                    var starStartPos = Utils_1.toXY(container.node, _this.stage);
                    DataManager_1.default.instance.starStartPosArr.push(starStartPos);
                });
                //差集
                goodsIndexArr = goodsIndexArr.filter(function (v) { return deleteIndexArr_1.indexOf(v) == -1; });
                DataManager_1.default.instance.levelData.currentClearNums += deleteIndexArr_1.length;
                DataManager_1.default.instance.levelData.clearAllNums += deleteIndexArr_1.length;
            }
            // 数据为空，判断胜利
            if (goodsIndexArr.length <= 0) {
                _this.onGameOver(true, null);
                return;
            }
            // 随机重组数据
            goodsIndexArr = Utils_1.shuffle(goodsIndexArr);
            _this.generateGroupData(goodsIndexArr);
            // 重新生成牌局
            for (var i_1 = 0; i_1 < _this.levels.containers.length; i_1++) {
                var container = _this.levels.containers[i_1];
                var containerComponent = container.getComponent(Container_1.default);
                containerComponent.initFront();
                containerComponent.initBack();
            }
            var allGoodsList = [];
            _this.levels.containers.forEach(function (container) {
                var backContainers = container.node.getChildByName('back').children;
                backContainers.forEach(function (back) {
                    var goods = back.getChildByName('Goods');
                    if (goods) {
                        goods.opacity = 0;
                        allGoodsList.push(goods.getComponent(Goods_1.default));
                    }
                });
                var frontContainer = container.node.getChildByName('front').children;
                frontContainer.forEach(function (front) {
                    var goods = front.getChildByName('Goods');
                    if (goods) {
                        goods.opacity = 0;
                        allGoodsList.push(goods.getComponent(Goods_1.default));
                    }
                });
            });
            console.log("allGoodsList数量。。。。", allGoodsList);
            for (var index = 0; index < allGoodsList.length; index++) {
                var element = allGoodsList[index];
                element.backFrontEffect(function () { });
            }
            console.log("this.getGameStatus().isGameShuffle", _this.getGameStatus().isGameShuffle);
            // 判断洗牌是否成功
            _this.scheduleOnce(function () {
                if (_this.getGameStatus().isGameShuffle) {
                    DataManager_1.default.instance.shuffleLoopNum += 1;
                    if (DataManager_1.default.instance.shuffleLoopNum < 1000) {
                        _this.onGameShuffle();
                    }
                    else {
                        // console.log('洗牌无解')
                        DataManager_1.default.instance.isShuffling = false;
                        _this.onGameOver(false, Enum_1.ENUM_GAME_LOSE_TYPE.CLEAR);
                    }
                }
                else {
                    // console.log('洗牌成功')
                    DataManager_1.default.instance.isShuffling = false;
                }
            }, 0.01);
        };
        //开始刷新动画
        var allGoodsList = [];
        this.levels.containers.forEach(function (container) {
            var backContainers = container.node.getChildByName('back').children;
            backContainers.forEach(function (back) {
                var goods = back.getChildByName('Goods');
                if (goods) {
                    allGoodsList.push(goods.getComponent(Goods_1.default));
                }
            });
            var frontContainer = container.node.getChildByName('front').children;
            frontContainer.forEach(function (front) {
                var goods = front.getChildByName('Goods');
                if (goods) {
                    allGoodsList.push(goods.getComponent(Goods_1.default));
                }
            });
        });
        console.log("allGoodsList数量。。。。", allGoodsList);
        var s = StaticInstance_1.StaticInstance.gameManager.stage.getContentSize();
        var targetWPos = cc.v2(s.width / 2, s.height / 2);
        var i = 0;
        var _loop_1 = function (index) {
            var element = allGoodsList[index];
            element.node.active = false;
            var wpos = Utils_1.toXY(element.node, StaticInstance_1.StaticInstance.gameManager.stage);
            var flyNode = cc.instantiate(element.node);
            flyNode.active = true;
            flyNode.parent = StaticInstance_1.StaticInstance.gameManager.stage;
            flyNode.stopAllActions();
            flyNode.setPosition(wpos);
            var goodsComponent = flyNode.getComponent(Goods_1.default);
            goodsComponent.toFrontEffect(function () {
                var pos = flyNode.parent.convertToNodeSpaceAR(targetWPos);
                var dist = cc.Vec2.distance(flyNode.position, cc.v3(pos));
                var time = dist / 500;
                var action = cc.sequence(cc.delayTime(0.1), cc.moveTo(time, cc.v2(pos)).easing(cc.easeIn(1)), cc.callFunc(function () {
                    i++;
                    EffectManager_1.default.instance.play('Collect', flyNode.parent, { pos: flyNode.position });
                    if (i >= allGoodsList.length) {
                        console.log("飞完收集一个星星.");
                        //收集星星
                        DataManager_1.default.instance.starStartPosArr.push(flyNode.position);
                        _this.scheduleOnce(function () {
                            handleRefresh();
                        }, 0.5);
                    }
                }), cc.destroySelf());
                cc.tween(flyNode).then(action).start();
            });
        };
        for (var index = 0; index < allGoodsList.length; index++) {
            _loop_1(index);
        }
    };
    // 游戏检测
    GameManager.prototype.onGameCheck = function () {
        // 两种情况
        var goodsCount = 0;
        for (var index = 0; index < this.levels.containers.length; index++) {
            var count = this.levels.containers[index].goodsCount;
            console.log(this.levels.containers[index].col, this.levels.containers[index].row, count);
            goodsCount = goodsCount + count;
        }
        console.log("goodsCount", goodsCount);
        // const level = Math.min(DataManager.instance.levelData.level, LEVEL_DATA.length)
        //  const total = LEVEL_DATA[level - 1]['pairs'] * 3
        //if (DataManager.instance.clearNums >= total) {
        if (goodsCount <= 0) {
            // 其一，已全部消除，判定了挑战成功
            this.onGameOver(true, null);
        }
        else {
            // 其二，不存在可消除的情况，失败或提示
            var status = this.getGameStatus();
            console.log("status", status);
            if (status.isGameLose) {
                this.onGameOver(false, Enum_1.ENUM_GAME_LOSE_TYPE.CLEAR);
            }
            else if (status.isGameShuffle) {
                //提示用户使用刷新道具,下一版本实现
                /* if(DataManager.instance.levelData.level>6&&!DataManager.instance.isTipRefresh){
                     DataManager.instance.isTipRefresh=true;
                     if (status.isGameShuffle) {
                         AudioManager.instance.playSound(ENUM_AUDIO_CLIP.SHUFFLE)
                         this.onGameShuffle()
                     }*/
                //  }else{
                this.onGameOver(false, Enum_1.ENUM_GAME_LOSE_TYPE.CLEAR);
                // }
            }
        }
    };
    // 游戏结算  loseTye,失败类型 
    GameManager.prototype.onGameOver = function (iswin, loseTye) {
        if (StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE))
            StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
        StaticInstance_1.StaticInstance.uiManager.setMainTimer(false);
        StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(false);
        /* if (!iswin&& DataManager.instance.status==ENUM_GAME_STATUS.RUNING) {
             DataManager.instance.status = ENUM_GAME_STATUS.UNRUNING;
             this.scheduleOnce(() => {
                 StaticInstance.uiManager.toggle(ENUM_UI_TYPE.LOSE)
             }, 0.5);
             return;
         }   */
        if (iswin) {
            DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.WIN;
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.WIN);
            this.scheduleOnce(function () {
                var level = DataManager_1.default.instance.levelData.level;
                level += 1;
                DataManager_1.default.instance.levelData.level = level;
                if (level > DataManager_1.default.instance.levelData.levelMax) {
                    DataManager_1.default.instance.levelData.levelMax = level;
                }
                DataManager_1.default.instance.rankInfoData.isRankList = true;
                DataManager_1.default.instance.rankInfoData.initRankInfo();
                DataManager_1.default.instance.levelData.succCount++;
                DataManager_1.default.instance.levelData.failCount = 0;
                DataManager_1.default.instance.levelData.revivewCount = 0;
                DataManager_1.default.instance.levelData.restartCount = 0;
                DataManager_1.default.instance.levelData.todayPlayCount++;
                DataManager_1.default.instance.levelData.todayPlayLevels++;
                DataManager_1.default.instance.levelData.saveCurrData();
                DataManager_1.default.instance.levelData.saveData();
                DataManager_1.default.instance.rankInfoData.todayScore += DataManager_1.default.instance.levelData.currentStarScore;
                DataManager_1.default.instance.rankInfoData.todayScore += DataManager_1.default.instance.levelData.currentStarScore;
                DataManager_1.default.instance.rankInfoData.todayScore += DataManager_1.default.instance.levelData.currentStarScore;
                DataManager_1.default.instance.rankInfoData.todayScore += DataManager_1.default.instance.levelData.currentStarScore;
                DataManager_1.default.instance.rankInfoData.todayScore += DataManager_1.default.instance.levelData.currentStarScore;
                DataManager_1.default.instance.rankInfoData.saveBestRankData();
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.WIN);
            }, 0.8);
        }
        else {
            DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.LOSE;
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.LOSE);
            this.scheduleOnce(function () {
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.LOSE, true, loseTye);
            }, 0.8);
        }
    };
    // 初始化游戏
    GameManager.prototype.initGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var level, levelData, type, prefabName, levelNode, goodsIndexArr, isRandom, i, container, tip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.UNRUNING;
                        // this.containers = []
                        this.stage.removeAllChildren();
                        if (this.levels) {
                            this.levels.release();
                        }
                        this.levels = null;
                        level = Math.min(DataManager_1.default.instance.levelData.level, LevelsConfig_1.LEVEL_CONFIG.length);
                        levelData = LevelsConfig_1.LEVEL_CONFIG[level - 1];
                        type = levelData.type;
                        prefabName = "NormalLevel";
                        if (level == 1) {
                            prefabName = "Level1";
                        }
                        else if (type == Enum_1.ENUM_LEVEL_TYPE.NORMAL) {
                            prefabName = "NormalLevel";
                        }
                        else if (type == Enum_1.ENUM_LEVEL_TYPE.MOVE) {
                            prefabName = "MoveLevel" + levelData.move;
                        }
                        levelNode = PoolManager_1.default.instance.getNode(prefabName, this.stage);
                        this.levels = levelNode.getComponent(Levels_1.default);
                        goodsIndexArr = this.levels.initLevel(level);
                        isRandom = false;
                        // 初始化货柜
                        /* const levelNode = PoolManager.instance.getNode(prefab, this.stage)
                         const containers = levelNode.children
                         this.containers = containers
                         for (let i = 0; i < containers.length; i++) {
                             const container = containers[i]
                             container.getComponent(Container).init(i, isRandom)
                         }*/
                        //  if (isRandom) {
                        /*   if (this.levels.goodsCount > 60) return
                           // 60个图
                           let spriteIndexArr = []
                           for (let s = 1; s <= 60; s++) {
                               spriteIndexArr.push(s)
                           }
                           spriteIndexArr = shuffle(spriteIndexArr)
                           
                          // let goodsIndexArr = []
                           for (let p = 0; p < this.levels.goodsCount; p++) {
                               const index = spriteIndexArr.pop()
                               goodsIndexArr.push(index, index, index)
                           }
                           goodsIndexArr = shuffle(goodsIndexArr)*/
                        // 分组数据
                        this.generateGroupData(goodsIndexArr);
                        for (i = 0; i < this.levels.containers.length; i++) {
                            container = this.levels.containers[i];
                            container.initFront();
                            container.initBack();
                        }
                        //}
                        // console.log("getGameStatus",this.getGameStatus());
                        // 初始化洗牌
                        if (this.getGameStatus().isGameShuffle) {
                            this.onGameShuffle();
                        }
                        // ui渲染
                        StaticInstance_1.StaticInstance.uiManager.setMainLevel();
                        StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                        StaticInstance_1.StaticInstance.uiManager.setMainProgress(true);
                        StaticInstance_1.StaticInstance.uiManager.setMainPowerCollect();
                        DataManager_1.default.instance.status = Enum_1.ENUM_GAME_STATUS.RUNING;
                        // 第一关加载tip手势
                        if (DataManager_1.default.instance.levelData.level == 1) {
                            this.tipNode = PoolManager_1.default.instance.getNode('Tip', this.stage);
                            tip = this.tipNode.addComponent(Tip_1.default);
                            tip.init();
                            tip.startTip(1);
                        }
                        return [4 /*yield*/, StaticInstance_1.StaticInstance.fadeManager.fadeOut()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 生成分组数据
    GameManager.prototype.generateGroupData = function (goodsIndexArr) {
        // 结果集
        var res = [];
        // 按照容器分组
        for (var i = 0; i < this.levels.containers.length; i++) {
            res[i] = [];
        }
        console.log("goodsIndexArr", goodsIndexArr);
        // 分组入柜  index=0代表留空
        for (var j = 0; j < goodsIndexArr.length; j++) {
            var index = goodsIndexArr[j];
            var arr = res[j % this.levels.containers.length]; //第几个容器的数组
            if (arr.length) {
                var last = arr[arr.length - 1]; //last为货架最上面一层的商品数组，长度为3
                if (last.length == 1) {
                    last.push(index);
                }
                else if (last.length == 2) {
                    if (index != 0 && last[0] == index && last[1] == index) { //如果该层前两个商品和第三个商品一致，将该商品放到更上一层
                        arr.push([index]);
                    }
                    else {
                        if (DataManager_1.default.instance.levelData.level == 1) {
                            last.push(index);
                        }
                        else {
                            // 随机
                            if (Utils_1.random(0, 1)) {
                                arr.push([index]);
                            }
                            else {
                                // 最后一组数据留空位
                                if ((j == goodsIndexArr.length - 1) && DataManager_1.default.instance.levelData.level != 1) {
                                    arr.push([index]);
                                }
                                else {
                                    last.push(index);
                                }
                            }
                        }
                    }
                }
                else {
                    arr.push([index]);
                }
            }
            else {
                arr.push([index]); //放了一个数组进去
            }
        }
        for (var i = 0; i < this.levels.containers.length; i++) {
            var arry = res[i];
            //console.log("res"+i,res[i]);
            for (var j = 0; j < res[i].length; j++) {
                var element = res[i][j];
                //console.log("res"+i+j,element);
            }
        }
        DataManager_1.default.instance.goodsData = res;
    };
    //时间暂停
    GameManager.prototype.onSkillTime = function () {
        if (StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE)) {
            return;
        }
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL_TIME);
        StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE);
        StaticInstance_1.StaticInstance.uiManager.setMainPauseTimer(15);
        StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(false);
    };
    //刷新
    GameManager.prototype.onSkillShuffle = function () {
        if (DataManager_1.default.instance.isShuffling)
            return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SHUFFLE);
        this.onGameShuffle();
    };
    //获得当前关卡的所有商品信息
    GameManager.prototype.getAllGoods = function () {
        var oldGoodsIsdMap = new Map();
        //对front进行遍历
        this.levels.containers.forEach(function (container) {
            var frontContainers = container.node.getChildByName('front').children;
            for (var j = 0; j < frontContainers.length; j++) {
                var front = frontContainers[j];
                var goods = front.getChildByName('Goods');
                if (goods) {
                    var goodsComponent = goods.getComponent(Goods_1.default);
                    var key = goodsComponent.id;
                    var oldGoods = { goodsId: key, containerId: goodsComponent.container.index, layer: 1 };
                    if (oldGoodsIsdMap.has(key)) {
                        var s = oldGoodsIsdMap.get(key);
                        s.push(oldGoods);
                        oldGoodsIsdMap.set(key, s);
                    }
                    else {
                        oldGoodsIsdMap.set(key, [oldGoods]);
                    }
                }
            }
        });
        //对back层进行遍历
        this.levels.containers.forEach(function (container) {
            var backContainers = container.node.getChildByName('back').children;
            for (var j = 0; j < backContainers.length; j++) {
                var back = backContainers[j];
                var goods = back.getChildByName('Goods');
                if (goods) {
                    var goodsComponent = goods.getComponent(Goods_1.default);
                    var key = goodsComponent.id;
                    var oldGoods = { goodsId: key, containerId: goodsComponent.container.index, layer: 2 };
                    if (oldGoodsIsdMap.has(key)) {
                        var s = oldGoodsIsdMap.get(key);
                        s.push(oldGoods);
                        oldGoodsIsdMap.set(key, s);
                    }
                    else {
                        oldGoodsIsdMap.set(key, [oldGoods]);
                    }
                }
            }
        });
        //对第三层以后的进行遍历
        for (var i = 0; i < this.levels.containers.length; i++) {
            var index = this.levels.containers[i].index;
            var arr = DataManager_1.default.instance.goodsData[index]; //取得货架暂存的所有商品
            if (!arr || arr.length <= 0) {
                continue;
            }
            else {
                for (var k = arr.length - 1; k >= 0; k--) { //从上往下一层一层取
                    var data = arr[k];
                    if (!data || data.length <= 0) {
                        continue;
                    }
                    for (var l = 0; l < data.length; l++) {
                        var key = data[l];
                        var oldGoods = { goodsId: key, containerId: index, layer: 2 + (arr.length - k) };
                        if (oldGoodsIsdMap.has(key)) {
                            var s = oldGoodsIsdMap.get(key);
                            s.push(oldGoods);
                            oldGoodsIsdMap.set(key, s);
                        }
                        else {
                            oldGoodsIsdMap.set(key, [oldGoods]);
                        }
                    }
                }
            }
        }
        console.log("oldGoodsIsdMap", oldGoodsIsdMap);
        return oldGoodsIsdMap;
    };
    GameManager.prototype.onSkillMagic = function () {
        var _this = this;
        this.getAllGoods();
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.SKILL_DELETE);
        // 优先找牌面数据变身
        // 牌面数据
        var goodsfrontContainers = [];
        //back数据
        var goodsbackContainers = [];
        for (var i = 0; i < DataManager_1.default.instance.frontContainers.length; i++) {
            var goods = DataManager_1.default.instance.frontContainers[i].getChildByName('Goods');
            if (goods) {
                goodsfrontContainers.push(goods);
            }
        }
        for (var i = 0; i < DataManager_1.default.instance.backContainers.length; i++) {
            var goods = DataManager_1.default.instance.backContainers[i].getChildByName('Goods');
            if (goods) {
                goodsbackContainers.push(goods);
                var goodsComponent = goods.getComponent(Goods_1.default);
                var key = goodsComponent.id;
            }
        }
        var indexs = new Map();
        var count = 9;
        if (goodsfrontContainers.length < count) {
            count = goodsfrontContainers.length;
        }
        var count2 = 10;
        //1.从front层随机找9个商品，不够9个按最多的找
        for (var i = 0; i < count; i++) {
            var goods = CommonTool_1.default.getRandomByArray(goodsfrontContainers);
            if (goods) {
                var goodsComponent = goods.getComponent(Goods_1.default);
                var key = goodsComponent.id + goodsComponent.container.index;
                while (indexs.has(key) && count2 > 0) {
                    goods = CommonTool_1.default.getRandomByArray(goodsfrontContainers);
                    goodsComponent = goods.getComponent(Goods_1.default);
                    key = goodsComponent.id + goodsComponent.container.index;
                    count2--;
                }
                indexs.set(key, goodsComponent);
                count2 = 10;
            }
        }
        var handlerChangeGood = function () {
            //2.将这9个商品替换为统一的商品
            var oldGoodsIsdMap = new Map();
            var changeId = null;
            var index = 0;
            indexs.forEach(function (v, k) {
                var key = v.id;
                if (oldGoodsIsdMap.has(key)) {
                    //如果=3，代表不需要从back层替换
                    if (oldGoodsIsdMap.get(key) == 2) {
                        oldGoodsIsdMap.delete(key);
                    }
                    else {
                        oldGoodsIsdMap.set(key, oldGoodsIsdMap.get(key) + 1);
                    }
                }
                else {
                    oldGoodsIsdMap.set(key, 1);
                }
                if (index == 0) {
                    changeId = v.id;
                }
                else {
                    v.setId(changeId);
                }
                index++;
            });
            //3.获取当前所有的商品，对不是3的倍数的商品进行修正
            var allGoodsIdsMap = _this.getAllGoods();
            //存放只有一个商品的商品数组
            var oldGoodsArray1 = [];
            //存放有2个商品的商品数组
            var oldGoodsArray2 = [];
            if (allGoodsIdsMap) {
                allGoodsIdsMap.forEach(function (v, k) {
                    if (v.length % 3 == 1) {
                        var value = v[v.length - 1];
                        oldGoodsArray1.push([value]);
                    }
                    if (v.length % 3 == 2) {
                        oldGoodsArray2.push([v[v.length - 2], v[v.length - 1]]);
                    }
                });
            }
            console.log("oldGoodsArray1", oldGoodsArray1);
            console.log("oldGoodsArray2", oldGoodsArray2);
            //还没有矫正数量的商品集合
            var noSetOldGoodsArray = [];
            //需要矫正的数量的商品集合里商品是1个还是2个。有1个需要矫正2个同样的商品。有2个需要矫正一个同样的商品。
            var noSetOldGoodsType = 1;
            if (oldGoodsArray1 == null || oldGoodsArray1.length == 0 || oldGoodsArray2 == null || oldGoodsArray2.length == 0) {
                if (oldGoodsArray1 != null && oldGoodsArray1.length > 0) {
                    noSetOldGoodsArray = oldGoodsArray1;
                    noSetOldGoodsType = 1;
                }
                else {
                    noSetOldGoodsArray = oldGoodsArray2;
                    noSetOldGoodsType = 2;
                }
                if (noSetOldGoodsArray && noSetOldGoodsArray.length > 0) {
                    for (var index_1 = 0; index_1 < noSetOldGoodsArray.length; index_1++) {
                        var element = noSetOldGoodsArray[index_1];
                        var goodsInfo = noSetOldGoodsArray[index_1][0];
                        if (element.length == 1) {
                            console.log("this.addGoodsById000", _this.addGoodsById(goodsInfo.goodsId, goodsInfo.containerId));
                            console.log("this.addGoodsById222", _this.addGoodsById(goodsInfo.goodsId, goodsInfo.containerId));
                        }
                        if (element.length == 2) {
                            console.log("this.addGoodsById111", _this.addGoodsById(goodsInfo.goodsId, goodsInfo.containerId));
                        }
                    }
                }
            }
            else {
                var count_1 = oldGoodsArray1.length;
                if (oldGoodsArray1.length > oldGoodsArray2.length) {
                    count_1 = oldGoodsArray2.length;
                    for (var index_2 = count_1; index_2 < oldGoodsArray1.length; index_2++) {
                        noSetOldGoodsArray.push(oldGoodsArray1[index_2]);
                    }
                    noSetOldGoodsType = 1;
                }
                else if (oldGoodsArray2.length > oldGoodsArray1.length) {
                    for (var index_3 = count_1; index_3 < oldGoodsArray2.length; index_3++) {
                        noSetOldGoodsArray.push(oldGoodsArray2[index_3]);
                    }
                    noSetOldGoodsType = 2;
                }
                //3.1. 对 1和2配对成功的商品进行数量矫正，将商品1的id改为商品2的id
                for (var index_4 = 0; index_4 < count_1; index_4++) {
                    var goods2 = oldGoodsArray2[index_4][0];
                    var goods1 = oldGoodsArray1[index_4][0];
                    //将goods1换为goods2
                    var container = _this.levels.getContainerByIndex(goods1.containerId);
                    container.updateGoodsById(goods1.layer, goods1.goodsId, goods2.goodsId);
                }
                _this.getAllGoods();
                console.log("noSetOldGoodsArray", noSetOldGoodsArray);
                //3.2. 没有1-2匹配的商品重新矫正
                if (noSetOldGoodsArray && noSetOldGoodsArray.length > 0) {
                    //3.3. 以3为倍数进行数据矫正
                    var noSetLastGoodsArray = [];
                    while (noSetOldGoodsArray.length % 3 > 0) {
                        noSetLastGoodsArray.push(noSetOldGoodsArray.pop);
                    }
                    if (noSetOldGoodsArray && noSetOldGoodsArray.length > 0) {
                        for (var index_5 = 0; index_5 < noSetOldGoodsArray.length; index_5 = index_5 + 3) {
                            var goodsInfo1 = noSetOldGoodsArray[index_5][0];
                            var goodsInfo2 = noSetOldGoodsArray[index_5 + 1][0];
                            var goodsInfo3 = noSetOldGoodsArray[index_5 + 2][0];
                            if (noSetOldGoodsType == 1) {
                                //将2和3换成1的商品id
                                var container2 = _this.levels.getContainerByIndex(goodsInfo2.containerId);
                                container2.updateGoodsById(goodsInfo2.layer, goodsInfo2.goodsId, goodsInfo1.goodsId);
                                var container3 = _this.levels.getContainerByIndex(goodsInfo3.containerId);
                                container3.updateGoodsById(goodsInfo3.layer, goodsInfo3.goodsId, goodsInfo1.goodsId);
                            }
                            if (noSetOldGoodsType == 2) {
                                //将2个3的商品分别换成一个1和一个2的商品id                        
                                var container30 = _this.levels.getContainerByIndex(goodsInfo3.containerId);
                                container30.updateGoodsById(goodsInfo3.layer, goodsInfo3.goodsId, goodsInfo1.goodsId);
                                var goodsInfo31 = noSetOldGoodsArray[index_5 + 2][1];
                                var container31 = _this.levels.getContainerByIndex(goodsInfo31.containerId);
                                container31.updateGoodsById(goodsInfo31.layer, goodsInfo31.goodsId, goodsInfo2.goodsId);
                            }
                        }
                    }
                    //3.4. 对剩下的商品新生成商品来配对
                    for (var index_6 = 0; index_6 < noSetLastGoodsArray.length; index_6++) {
                        var element = noSetLastGoodsArray[index_6];
                        var goodsInfo = noSetLastGoodsArray[index_6][0];
                        if (element.length == 1) {
                            _this.addGoodsById(goodsInfo.goodsId, goodsInfo.containerId);
                            _this.addGoodsById(goodsInfo.goodsId, goodsInfo.containerId);
                        }
                        if (element.length == 2) {
                            _this.addGoodsById(goodsInfo.goodsId, goodsInfo.containerId);
                        }
                    }
                }
            }
        };
        //开始播放魔法动画
        var bHandler = false;
        var lightEffect = function (startPos) {
            indexs.forEach(function (v, k) {
                var wpos = Utils_1.toXY(v.node, StaticInstance_1.StaticInstance.gameManager.stage);
                var dist = cc.Vec2.distance(wpos, startPos);
                var effNode = PoolManager_1.default.instance.getNode("light", _this.stage);
                effNode.position = cc.v3(startPos);
                effNode.setContentSize(effNode.width, dist);
                effNode.angle = -_this.calculateAngle(startPos, wpos);
                v.toMagicFrontEffect(null);
                var action = cc.sequence(cc.delayTime(0.4), cc.callFunc(function () {
                    var effNode2 = PoolManager_1.default.instance.getNode("light2", _this.stage);
                    effNode2.position = cc.v3(wpos);
                }), cc.delayTime(0.5), cc.callFunc(function () {
                    EffectManager_1.default.instance.play('Collect', v.node.parent);
                    v.backMagicFrontEffect(function () {
                        if (!bHandler) {
                            bHandler = true;
                            console.log("魔法效果播放完了。。。");
                            handlerChangeGood();
                        }
                    });
                    var anim = effNode.getComponent(cc.Animation);
                    anim.stop();
                    effNode.removeFromParent();
                }));
                cc.tween(effNode).then(action).start();
            });
        };
        var magicPosNode = cc.find('magicPos', this.node);
        var effNode = PoolManager_1.default.instance.getNode("magic", StaticInstance_1.StaticInstance.uiManager.getMainLayer().node);
        effNode.setPosition(magicPosNode.position);
        effNode.x = 700;
        var action = cc.sequence(cc.moveTo(0.5, cc.v2(magicPosNode.position.x - 60, magicPosNode.position.y)).easing(cc.easeIn(1)), cc.moveTo(0.2, cc.v2(magicPosNode.position.x, magicPosNode.position.y)).easing(cc.easeIn(1)), cc.callFunc(function () {
            lightEffect(cc.v2(effNode.position));
        }), cc.delayTime(1), cc.destroySelf());
        cc.tween(effNode).then(action).start();
        this.getAllGoods();
    };
    // 角度
    GameManager.prototype.calculateAngle = function (first, second) {
        var len_y = second.y - first.y;
        var len_x = second.x - first.x;
        var tan_yx = Math.abs(len_y / len_x);
        var temp = Math.atan(tan_yx) * 180 / Math.PI;
        var angle = 0;
        if (len_y > 0 && len_x < 0) {
            angle = temp - 90;
        }
        else if (len_y > 0 && len_x > 0) {
            angle = -temp + 90;
        }
        else if (len_y < 0 && len_x < 0) {
            angle = -temp - 90;
        }
        else if (len_y < 0 && len_x > 0) {
            angle = temp + 90;
        }
        else if (len_y == 0 && len_x != 0) {
            angle = len_x < 0 ? -90 : 90;
        }
        else if (len_x == 0 && len_y != 0) {
            angle = len_y < 0 ? 180 : 0;
        }
        //console.log('Temp', temp);
        //console.log('Angle ', angle)
        return angle;
    };
    //添加商品到货架上，优先添加到第2层以后 startContainerId从这个货架开始查找位置
    GameManager.prototype.addGoodsById = function (goodsId, startContainerId) {
        var containerId = startContainerId + 1;
        var containerLength = this.levels.containers.length;
        if (containerId >= containerLength) {
            containerId = 0;
        }
        var container = this.levels.containers[containerId];
        var layer = container.getEmptyLayer(goodsId);
        //判断货架的第2或者第3层是否有空位
        while (layer == 0 && startContainerId != containerId) {
            containerId++;
            if (containerId >= containerLength) {
                containerId = 0;
            }
            container = this.levels.containers[containerId];
            layer = container.getEmptyLayer();
        }
        if (startContainerId == containerId || layer == 0) {
            console.log("找不到合适位置:", goodsId, startContainerId, containerId, layer);
            return false;
        }
        //将商品加入
        return container.addGoodsById(layer, goodsId);
    };
    //消除
    GameManager.prototype.onSkillDelete = function () {
        var _this = this;
        // 优先找牌面数据消除
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.CLEAR);
        // 牌面数据
        var backIds = new Map();
        var frontIds = new Map();
        this.levels.containers.forEach(function (container) {
            var backContainers = container.node.getChildByName('back').children;
            for (var j = 0; j < backContainers.length; j++) {
                var back = backContainers[j];
                var goods = back.getChildByName('Goods');
                if (goods) {
                    var goodsComponent = goods.getComponent(Goods_1.default);
                    var key_1 = goodsComponent.id;
                    if (backIds.has(key_1)) {
                        backIds.set(key_1, backIds.get(key_1) + 1);
                    }
                    else {
                        backIds.set(key_1, 1);
                    }
                }
            }
        });
        this.levels.containers.forEach(function (container) {
            var frontContainers = container.node.getChildByName('front').children;
            for (var j = 0; j < frontContainers.length; j++) {
                var front = frontContainers[j];
                var goods = front.getChildByName('Goods');
                if (goods) {
                    var goodsComponent = goods.getComponent(Goods_1.default);
                    var key_2 = goodsComponent.id;
                    if (frontIds.has(key_2)) {
                        frontIds.set(key_2, frontIds.get(key_2) + 1);
                    }
                    else {
                        frontIds.set(key_2, 1);
                    }
                }
            }
        });
        console.log("frontIds=============:", frontIds);
        console.log("backIds=============:", backIds);
        // 先在前排找到第一个满足3消的
        var key = -1;
        var flag = -1;
        frontIds.forEach(function (v, k) {
            if (v >= 3) {
                key = k;
                flag = 3;
            }
        });
        if (key < 0) {
            //前排和后排一起找满足3消的
            frontIds.forEach(function (v, k) {
                if (v >= 2 && backIds.get(k) >= 1) {
                    key = k;
                    flag = 2;
                }
            });
            if (key < 0) {
                frontIds.forEach(function (v, k) {
                    if (v >= 1 && backIds.get(k) >= 2) {
                        key = k;
                        flag = 1;
                    }
                });
            }
        }
        // 牌面删除，若不足则魔棒刷新
        console.log("key =========", key, flag);
        if (key < 0) {
            this.onGameShuffle(1);
            this.checkGame();
        }
        else {
            console.log("走这里了。。。。");
            // 解锁
            if (this.levels.locks && this.levels.locks.length > 0) {
                this.levels.locks[0].updateLockNum();
            }
            // 取消时停技能
            if (StaticInstance_1.StaticInstance.uiManager.isActive(Enum_1.ENUM_UI_TYPE.ICE)) {
                StaticInstance_1.StaticInstance.uiManager.toggle(Enum_1.ENUM_UI_TYPE.ICE, false);
                StaticInstance_1.StaticInstance.uiManager.setMainTimer(true);
                StaticInstance_1.StaticInstance.uiManager.setMainTimerSound(true);
            }
            var frontGoodsList_1 = [];
            this.levels.containers.forEach(function (container) {
                var frontContainers = container.node.getChildByName('front').children;
                for (var j = 0; j < frontContainers.length; j++) {
                    var front = frontContainers[j];
                    var goods = front.getChildByName('Goods');
                    if (goods) {
                        var goodsComponent = goods.getComponent(Goods_1.default);
                        if (goodsComponent.id == key) {
                            frontGoodsList_1.push(goodsComponent);
                        }
                    }
                }
            });
            console.log("frontGoodsList数量。。。。", frontGoodsList_1);
            // 删除
            var delList = [];
            if (flag === 3) {
                for (var index = 0; index < 3; index++) {
                    var e = frontGoodsList_1[index];
                    if (e) {
                        delList.push(e);
                    }
                }
            }
            else {
                var backGoodsList_1 = [];
                this.levels.containers.forEach(function (container) {
                    var backContainers = container.node.getChildByName('back').children;
                    for (var j = 0; j < backContainers.length; j++) {
                        var back = backContainers[j];
                        var goods = back.getChildByName('Goods');
                        if (goods) {
                            var goodsComponent = goods.getComponent(Goods_1.default);
                            if (goodsComponent.id == key) {
                                backGoodsList_1.push(goodsComponent);
                            }
                        }
                    }
                });
                console.log("backGoodsList数量。。。。", backGoodsList_1);
                for (var index = 0; index < frontGoodsList_1.length; index++) {
                    var e = frontGoodsList_1[index];
                    if (e) {
                        delList.push(e);
                    }
                }
                for (var index = 0; index < 3 - frontGoodsList_1.length; index++) {
                    var e = backGoodsList_1[index];
                    if (e) {
                        delList.push(e);
                    }
                }
            }
            console.log("消除队列：", delList);
            //删除效果:往位置最高的商品往下50那里飞
            var t = [];
            for (var index = 0; index < delList.length; index++) {
                var element = delList[index];
                var wpos = element.node.convertToWorldSpaceAR(cc.v2(0, 0));
                t.push(wpos);
            }
            console.log(t);
            var targetWPos_1 = cc.v2(0, 0);
            t.sort(function (a, b) {
                return b.y - a.y;
            });
            targetWPos_1 = t[0];
            targetWPos_1.y -= 150;
            console.log("目标位置：", targetWPos_1);
            var i_2 = 0;
            var _loop_2 = function (index) {
                var element = delList[index];
                element.node.active = false;
                var wpos = Utils_1.toXY(element.node, StaticInstance_1.StaticInstance.gameManager.stage);
                var flyNode = cc.instantiate(element.node);
                flyNode.active = true;
                flyNode.parent = StaticInstance_1.StaticInstance.gameManager.stage;
                flyNode.stopAllActions();
                flyNode.setPosition(wpos);
                var goodsComponent = flyNode.getComponent(Goods_1.default);
                goodsComponent.toFrontEffect(function () {
                    element.setClear(false);
                    var pos = flyNode.parent.convertToNodeSpaceAR(targetWPos_1);
                    var action = cc.sequence(cc.delayTime(0.1), cc.moveTo(0.2, pos).easing(cc.easeIn(1)), cc.callFunc(function () {
                        i_2++;
                        EffectManager_1.default.instance.play('Collect', flyNode.parent, { pos: flyNode.position });
                        if (i_2 >= 3) {
                            console.log("飞完收集一个星星.");
                            //收集星星
                            DataManager_1.default.instance.starStartPosArr.push(flyNode.position);
                            _this.item1FlyCallBack();
                        }
                    }), cc.delayTime(0.1), cc.destroySelf());
                    cc.tween(flyNode).then(action).start();
                });
            };
            for (var index = 0; index < delList.length; index++) {
                _loop_2(index);
            }
        }
    };
    GameManager.prototype.checkGame = function () {
        // 连击进度
        StaticInstance_1.StaticInstance.uiManager.setMainProgress();
        // 如果死局则刷新,否则检测是否获胜
        /*const status = this.getGameStatus()
        if (status.isGameShuffle) {
            this.onGameShuffle()
        } else {
            
        }*/
        this.onGameCheck();
    };
    GameManager.prototype.item1FlyCallBack = function () {
        // 判空
        this.levels.containers.forEach(function (container) {
            var frontContainers = container.node.getChildByName('front').children;
            var isEmpty = true;
            for (var j = 0; j < frontContainers.length; j++) {
                var goodsContainer = frontContainers[j];
                if (goodsContainer.getChildByName('Goods')) {
                    isEmpty = false;
                    break;
                }
            }
            if (isEmpty) {
                // console.log('back to front')
                container.getComponent(Container_1.default).backToFront();
            }
            else {
                var backContainers = container.node.getChildByName('back').children;
                var isEmpty_1 = true;
                for (var j = 0; j < backContainers.length; j++) {
                    var goodsContainer = backContainers[j];
                    if (goodsContainer.getChildByName('Goods')) {
                        isEmpty_1 = false;
                        break;
                    }
                }
                if (isEmpty_1) {
                    // console.log('int back')
                    container.getComponent(Container_1.default).initBack();
                }
            }
        });
        this.checkGame();
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21hbmFnZXIvR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsZ0NBQWdIO0FBQ2hILG9EQUFtRDtBQUNuRCxrQ0FBaUQ7QUFDakQsdUNBQWtDO0FBQ2xDLCtDQUEwQztBQUMxQywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLDZDQUF3QztBQUN4Qyx1REFBc0Q7QUFDdEQseUNBQW9DO0FBQ3BDLGlDQUE0QjtBQUM1Qiw0REFBdUQ7QUFDdkQsaURBQTRDO0FBUzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNG5DQztRQTNuQ0csV0FBSyxHQUFZLElBQUksQ0FBQTtRQUN2QiwrQkFBK0I7UUFDN0IsWUFBTSxHQUFRLElBQUksQ0FBQztRQUNuQixhQUFPLEdBQVksSUFBSSxDQUFBOztJQXduQzNCLENBQUM7SUF0bkNHLDRCQUFNLEdBQU47UUFDSSwrQkFBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsK0JBQVMsR0FBVCxjQUFjLENBQUM7SUFFZixPQUFPO0lBQ1AsaUNBQVcsR0FBWDtRQUNJLHFCQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsU0FBUztJQUNULG1DQUFhLEdBQWI7UUFDSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDYixJQUFJLE1BQU0sR0FB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RUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUMsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUN4QyxJQUFJLGNBQWMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ3hDLFNBQU8sR0FBRyxLQUFLLENBQUE7d0JBQ2YsTUFBSztxQkFDUjtpQkFDSjtnQkFDRCxJQUFJLFNBQU8sRUFBRTtvQkFDVCwwQkFBMEI7b0JBQzFCLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO2lCQUMvQzthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTFuQ2dCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0bkMvQjtJQUFELGtCQUFDO0NBNW5DRCxBQTRuQ0MsQ0E1bkN3QyxFQUFFLENBQUMsU0FBUyxHQTRuQ3BEO2tCQTVuQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5pbXBvcnQgeyBFTlVNX0FVRElPX0NMSVAsIEVOVU1fR0FNRV9MT1NFX1RZUEUsIEVOVU1fR0FNRV9TVEFUVVMsIEVOVU1fTEVWRUxfVFlQRSwgRU5VTV9VSV9UWVBFIH0gZnJvbSBcIi4uL0VudW1cIjtcclxuaW1wb3J0IHsgU3RhdGljSW5zdGFuY2UgfSBmcm9tIFwiLi4vU3RhdGljSW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgc2h1ZmZsZSwgcmFuZG9tLCB0b1hZIH0gZnJvbSBcIi4uL1V0aWxzXCI7XHJcbmltcG9ydCBHb29kcyBmcm9tIFwiLi4vZ2FtZS9Hb29kc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9nYW1lL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQXVkaW9NYW5hZ2VyIGZyb20gXCIuL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgRGF0YU1hbmFnZXIgZnJvbSBcIi4vRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IFBvb2xNYW5hZ2VyIGZyb20gXCIuL1Bvb2xNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IExFVkVMX0NPTkZJRyB9IGZyb20gXCIuLi9jb25maWcvTGV2ZWxzQ29uZmlnXCI7XHJcbmltcG9ydCBMZXZlbHMgZnJvbSBcIi4uL2dhbWUvTGV2ZWxzXCI7XHJcbmltcG9ydCBUaXAgZnJvbSBcIi4uL3VpL1RpcFwiO1xyXG5pbXBvcnQgQ29tbW9uVG9vbCBmcm9tIFwiLi4vZnJhbWV3b3JrL3V0aWxzL0NvbW1vblRvb2xcIjtcclxuaW1wb3J0IEVmZmVjdE1hbmFnZXIgZnJvbSBcIi4vRWZmZWN0TWFuYWdlclwiO1xyXG5cclxudHlwZSBPbGRHb29kcyA9IHtcclxuICAgIGdvb2RzSWQ6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lcklkOiBudW1iZXI7ICAvL+aJgOWcqOi0p+aetmlkXHJcbiAgICBsYXllcjogbnVtYmVyOyAgICAgICAgLy/miYDlnKjotKfmnrblsYLnuqcgMS0yLTMtNC0144CC44CC44CC44CC44CCXHJcbiAgfTtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YWdlOiBjYy5Ob2RlID0gbnVsbFxyXG4gIC8vICBjb250YWluZXJzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIGxldmVsczpMZXZlbHM9bnVsbDtcclxuICAgIHRpcE5vZGU6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnNldEdhbWVNYW5hZ2VyKHRoaXMpXHJcbiAgICAgICAgdGhpcy5zdGFnZSA9IGNjLmZpbmQoJ1N0YWdlJywgdGhpcy5ub2RlKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHsgfVxyXG5cclxuICAgIC8vIOW8gOWni+a4uOaIj1xyXG4gICAgb25HYW1lU3RhcnQoKSB7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmVzZXQoKVxyXG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueJjOmdoueKtuaAgVxyXG4gICAgZ2V0R2FtZVN0YXR1cygpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwXHJcbiAgICAgICAgbGV0IGluZGV4cyA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyb250Q29udGFpbmVycyA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmZyb250Q29udGFpbmVycy5maWx0ZXIoZnJvbnRDb250YWluZXIgPT4gIWZyb250Q29udGFpbmVyLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KENvbnRhaW5lcikuaXNMb2NrKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJvbnRDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gZnJvbnRDb250YWluZXJzW2ldLmdldENoaWxkQnlOYW1lKCdHb29kcycpO1xyXG4gICAgICAgICAgICBpZiAoIWdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGdvb2RzQ29tcG9uZW50LmlkXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhzLnNldChrZXksIGluZGV4cy5nZXQoa2V5KSArIDEpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4cy5zZXQoa2V5LCAxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY291bnRcIixjb3VudCk7XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2coXCJpbmRleHNcIixpbmRleHMpO1xyXG5cclxuICAgICAgICBsZXQgbWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgaW5kZXhzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG1heCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heFwiLG1heCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IGlzR2FtZUxvc2U6IGNvdW50ID09IDAsIGlzR2FtZVNodWZmbGU6IChtYXggPCAzICYmIChjb3VudCA8PSAyKSkgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOa0l+eJjFxyXG4gICAgb25HYW1lU2h1ZmZsZShkZWxldGVQYWlyczogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVSZWZyZXNoID0gKCk9PnsgICAgXHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzU2h1ZmZsaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5rSX54mMOicsIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNodWZmbGVMb29wTnVtLCBkZWxldGVQYWlycylcclxuICAgICAgICAgICAgbGV0IGdvb2RzSW5kZXhBcnIgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLmxldmVscy5jb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tDb250YWluZXJzID0gY29udGFpbmVyLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ2JhY2snKS5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgYmFja0NvbnRhaW5lcnMuZm9yRWFjaChiYWNrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGJhY2suZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ29vZHNJbmRleEFyci5wdXNoKGdvb2RzLmdldENvbXBvbmVudChHb29kcykuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvb2RzLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmcm9udENvbnRhaW5lciA9IGNvbnRhaW5lci5ub2RlLmdldENoaWxkQnlOYW1lKCdmcm9udCcpLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICBmcm9udENvbnRhaW5lci5mb3JFYWNoKGZyb250ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGZyb250LmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvb2RzSW5kZXhBcnIucHVzaChnb29kcy5nZXRDb21wb25lbnQoR29vZHMpLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29kcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5nb29kc0RhdGEuZm9yRWFjaChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZC5sZW5ndGggPiAwKSBnb29kc0luZGV4QXJyLnB1c2goLi4uZClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIOWIoOmZpGRlbGV0ZVBhaXJz5a+55pWw5o2uXHJcbiAgICAgICAgICAgIGlmIChkZWxldGVQYWlycyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxldGVJbmRleEFycjogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCBnb29kc0luZGV4QXJyLmxlbmd0aDsgZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEluZGV4ID0gZ29vZHNJbmRleEFycltkXVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVJbmRleEFyci5sZW5ndGggPj0gZGVsZXRlUGFpcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlSW5kZXhBcnIuaW5kZXhPZih0ZW1wSW5kZXgpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbmRleEFyci5wdXNoKHRlbXBJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOino+mUgVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbHMubG9ja3MuZm9yRWFjaCgobG9jaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NrLnVwZGF0ZUxvY2tOdW0oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOaXtuWBnOaKgOiDvVxyXG4gICAgICAgICAgICAgICAgaWYgKFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5pc0FjdGl2ZShFTlVNX1VJX1RZUEUuSUNFKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLklDRSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5pWI5p6cXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVscy5jb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xsZWN0ID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZSgnQ29sbGVjdCcsIGNvbnRhaW5lci5ub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaUtumbhuaYn+aYn+i1t+Wni+eCuVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJTdGFydFBvcyA9IHRvWFkoY29udGFpbmVyLm5vZGUsIHRoaXMuc3RhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhclN0YXJ0UG9zQXJyLnB1c2goc3RhclN0YXJ0UG9zKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8v5beu6ZuGXHJcbiAgICAgICAgICAgICAgICBnb29kc0luZGV4QXJyID0gZ29vZHNJbmRleEFyci5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGRlbGV0ZUluZGV4QXJyLmluZGV4T2YodikgPT0gLTEgfSlcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50Q2xlYXJOdW1zKz0gZGVsZXRlSW5kZXhBcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmNsZWFyQWxsTnVtcys9ZGVsZXRlSW5kZXhBcnIubGVuZ3RoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDmlbDmja7kuLrnqbrvvIzliKTmlq3og5zliKlcclxuICAgICAgICAgICAgaWYgKGdvb2RzSW5kZXhBcnIubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKHRydWUsbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDpmo/mnLrph43nu4TmlbDmja5cclxuICAgICAgICAgICAgZ29vZHNJbmRleEFyciA9IHNodWZmbGUoZ29vZHNJbmRleEFycilcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUdyb3VwRGF0YShnb29kc0luZGV4QXJyKVxyXG5cclxuICAgICAgICAgICAgLy8g6YeN5paw55Sf5oiQ54mM5bGAXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbHMuY29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5sZXZlbHMuY29udGFpbmVyc1tpXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyQ29tcG9uZW50ID0gY29udGFpbmVyLmdldENvbXBvbmVudChDb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJDb21wb25lbnQuaW5pdEZyb250KClcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNvbXBvbmVudC5pbml0QmFjaygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYWxsR29vZHNMaXN0OiBHb29kc1tdID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFja0NvbnRhaW5lcnMgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmFjaycpLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICBiYWNrQ29udGFpbmVycy5mb3JFYWNoKGJhY2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gYmFjay5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29kcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR29vZHNMaXN0LnB1c2goZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbnRDb250YWluZXIgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZnJvbnQnKS5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgZnJvbnRDb250YWluZXIuZm9yRWFjaChmcm9udCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBmcm9udC5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29kcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsR29vZHNMaXN0LnB1c2goZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbGxHb29kc0xpc3TmlbDph4/jgILjgILjgILjgIJcIiwgYWxsR29vZHNMaXN0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFsbEdvb2RzTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhbGxHb29kc0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5iYWNrRnJvbnRFZmZlY3QoKCk9Pnt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZ2V0R2FtZVN0YXR1cygpLmlzR2FtZVNodWZmbGVcIix0aGlzLmdldEdhbWVTdGF0dXMoKS5pc0dhbWVTaHVmZmxlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIpOaWrea0l+eJjOaYr+WQpuaIkOWKn1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRHYW1lU3RhdHVzKCkuaXNHYW1lU2h1ZmZsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnNodWZmbGVMb29wTnVtICs9IDFcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc2h1ZmZsZUxvb3BOdW0gPCAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25HYW1lU2h1ZmZsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ+a0l+eJjOaXoOinoycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmlzU2h1ZmZsaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVPdmVyKGZhbHNlLEVOVU1fR0FNRV9MT1NFX1RZUEUuQ0xFQVIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn5rSX54mM5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5pc1NodWZmbGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAuMDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+W8gOWni+WIt+aWsOWKqOeUu1xyXG4gICAgICAgIGNvbnN0IGFsbEdvb2RzTGlzdDogR29vZHNbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYWNrQ29udGFpbmVycyA9IGNvbnRhaW5lci5ub2RlLmdldENoaWxkQnlOYW1lKCdiYWNrJykuY2hpbGRyZW5cclxuICAgICAgICAgICAgYmFja0NvbnRhaW5lcnMuZm9yRWFjaChiYWNrID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gYmFjay5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsR29vZHNMaXN0LnB1c2goZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgZnJvbnRDb250YWluZXIgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZnJvbnQnKS5jaGlsZHJlblxyXG4gICAgICAgICAgICBmcm9udENvbnRhaW5lci5mb3JFYWNoKGZyb250ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gZnJvbnQuZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJylcclxuICAgICAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbEdvb2RzTGlzdC5wdXNoKGdvb2RzLmdldENvbXBvbmVudChHb29kcykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhbGxHb29kc0xpc3TmlbDph4/jgILjgILjgILjgIJcIiwgYWxsR29vZHNMaXN0KTtcclxuICAgICAgICBsZXQgcyA9IFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLnN0YWdlLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0V1BvcyA9IGNjLnYyKHMud2lkdGgvMiwgcy5oZWlnaHQvMik7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbGxHb29kc0xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhbGxHb29kc0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3cG9zID0gdG9YWShlbGVtZW50Lm5vZGUsIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLnN0YWdlKTtcclxuICAgICAgICAgICAgY29uc3QgZmx5Tm9kZSA9IGNjLmluc3RhbnRpYXRlKGVsZW1lbnQubm9kZSk7XHJcbiAgICAgICAgICAgIGZseU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZmx5Tm9kZS5wYXJlbnQgPSBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5zdGFnZTtcclxuICAgICAgICAgICAgZmx5Tm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBmbHlOb2RlLnNldFBvc2l0aW9uKHdwb3MpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29tcG9uZW50ID0gZmx5Tm9kZS5nZXRDb21wb25lbnQoR29vZHMpXHJcbiAgICAgICAgICAgIGdvb2RzQ29tcG9uZW50LnRvRnJvbnRFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGZseU5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldFdQb3MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc3QgPSBjYy5WZWMyLmRpc3RhbmNlKGZseU5vZGUucG9zaXRpb24sIGNjLnYzKHBvcykpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBkaXN0LzUwMDtcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8odGltZSwgY2MudjIocG9zKSkuZWFzaW5nKGNjLmVhc2VJbigxKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmluc3RhbmNlLnBsYXkoJ0NvbGxlY3QnLCBmbHlOb2RlLnBhcmVudCwge3BvczogZmx5Tm9kZS5wb3NpdGlvbn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+PSBhbGxHb29kc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumjnuWujOaUtumbhuS4gOS4quaYn+aYny5cIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pS26ZuG5pif5pifXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGFyU3RhcnRQb3NBcnIucHVzaChmbHlOb2RlLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVzdHJveVNlbGYoKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZseU5vZGUpLnRoZW4oYWN0aW9uKS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDmuLjmiI/mo4DmtYtcclxuICAgIG9uR2FtZUNoZWNrKCkge1xyXG4gICAgICAgIC8vIOS4pOenjeaDheWGtVxyXG4gICAgICAgIGxldCBnb29kc0NvdW50PTA7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMubGV2ZWxzLmNvbnRhaW5lcnNbaW5kZXhdLmdvb2RzQ291bnQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWxzLmNvbnRhaW5lcnNbaW5kZXhdLmNvbCx0aGlzLmxldmVscy5jb250YWluZXJzW2luZGV4XS5yb3csY291bnQpO1xyXG4gICAgICAgICAgICBnb29kc0NvdW50PWdvb2RzQ291bnQrY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ29vZHNDb3VudFwiLGdvb2RzQ291bnQpO1xyXG4gICAgICAgLy8gY29uc3QgbGV2ZWwgPSBNYXRoLm1pbihEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWwsIExFVkVMX0RBVEEubGVuZ3RoKVxyXG4gICAgICAvLyAgY29uc3QgdG90YWwgPSBMRVZFTF9EQVRBW2xldmVsIC0gMV1bJ3BhaXJzJ10gKiAzXHJcbiAgICAgICAgLy9pZiAoRGF0YU1hbmFnZXIuaW5zdGFuY2UuY2xlYXJOdW1zID49IHRvdGFsKSB7XHJcbiAgICAgICAgaWYoZ29vZHNDb3VudDw9MCl7XHJcbiAgICAgICAgICAgIC8vIOWFtuS4gO+8jOW3suWFqOmDqOa2iOmZpO+8jOWIpOWumuS6huaMkeaImOaIkOWKn1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZU92ZXIodHJ1ZSxudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlhbbkuozvvIzkuI3lrZjlnKjlj6/mtojpmaTnmoTmg4XlhrXvvIzlpLHotKXmiJbmj5DnpLpcclxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5nZXRHYW1lU3RhdHVzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdHVzXCIsc3RhdHVzKTtcclxuICAgICAgICAgICAgaWYgKHN0YXR1cy5pc0dhbWVMb3NlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2FtZU92ZXIoZmFsc2UsRU5VTV9HQU1FX0xPU0VfVFlQRS5DTEVBUilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHN0YXR1cy5pc0dhbWVTaHVmZmxlKXtcclxuICAgICAgICAgICAgICAgIC8v5o+Q56S655So5oi35L2/55So5Yi35paw6YGT5YW3LOS4i+S4gOeJiOacrOWunueOsFxyXG4gICAgICAgICAgICAgICAvKiBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWw+NiYmIURhdGFNYW5hZ2VyLmluc3RhbmNlLmlzVGlwUmVmcmVzaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UuaXNUaXBSZWZyZXNoPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5pc0dhbWVTaHVmZmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLlNIVUZGTEUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25HYW1lU2h1ZmZsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgLy8gIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25HYW1lT3ZlcihmYWxzZSxFTlVNX0dBTUVfTE9TRV9UWVBFLkNMRUFSKTtcclxuICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5ri45oiP57uT566XICBsb3NlVHllLOWksei0peexu+WeiyBcclxuICAgIG9uR2FtZU92ZXIoaXN3aW46Ym9vbGVhbixsb3NlVHllOkVOVU1fR0FNRV9MT1NFX1RZUEUpIHtcclxuICAgICAgICBpZiAoU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLmlzQWN0aXZlKEVOVU1fVUlfVFlQRS5JQ0UpKSBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIudG9nZ2xlKEVOVU1fVUlfVFlQRS5JQ0UsIGZhbHNlKTtcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblRpbWVyKGZhbHNlKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZChmYWxzZSlcclxuICAgICAgIC8qIGlmICghaXN3aW4mJiBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXM9PUVOVU1fR0FNRV9TVEFUVVMuUlVOSU5HKSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9IEVOVU1fR0FNRV9TVEFUVVMuVU5SVU5JTkc7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLkxPU0UpXHJcbiAgICAgICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9ICAgKi9cclxuICAgICAgICBpZiAoaXN3aW4pIHtcclxuICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5XSU5cclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuV0lOKVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWwgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWxcclxuICAgICAgICAgICAgICAgIGxldmVsICs9IDFcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCA9IGxldmVsXHJcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWwgPiBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWxNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWxNYXggPSBsZXZlbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLmlzUmFua0xpc3Q9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnJhbmtJbmZvRGF0YS5pbml0UmFua0luZm8oKTtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5zdWNjQ291bnQrKztcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5mYWlsQ291bnQ9MDtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5yZXZpdmV3Q291bnQ9MDtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5yZXN0YXJ0Q291bnQ9MDtcclxuICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS50b2RheVBsYXlDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnRvZGF5UGxheUxldmVscysrO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnNhdmVDdXJyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLnNhdmVEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnRvZGF5U2NvcmUrPURhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnRvZGF5U2NvcmUrPURhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnRvZGF5U2NvcmUrPURhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnRvZGF5U2NvcmUrPURhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnRvZGF5U2NvcmUrPURhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5jdXJyZW50U3RhclNjb3JlO1xyXG4gICAgICAgICAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2UucmFua0luZm9EYXRhLnNhdmVCZXN0UmFua0RhdGEoKTtcclxuICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLldJTilcclxuICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXR1cyA9IEVOVU1fR0FNRV9TVEFUVVMuTE9TRVxyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UucGxheVNvdW5kKEVOVU1fQVVESU9fQ0xJUC5MT1NFKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuTE9TRSx0cnVlLGxvc2VUeWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC44KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW5ri45oiPXHJcbiAgICBhc3luYyBpbml0R2FtZSgpIHtcclxuICAgICAgICBEYXRhTWFuYWdlci5pbnN0YW5jZS5zdGF0dXMgPSBFTlVNX0dBTUVfU1RBVFVTLlVOUlVOSU5HXHJcbiAgICAgICAvLyB0aGlzLmNvbnRhaW5lcnMgPSBbXVxyXG4gICAgICAgIHRoaXMuc3RhZ2UucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBpZih0aGlzLmxldmVscyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxzLnJlbGVhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sZXZlbHM9bnVsbDtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBsZXZlbCA9IE1hdGgubWluKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCwgTEVWRUxfREFUQS5sZW5ndGgpXHJcbiAgICAgICAgY29uc3QgeyBwcmVmYWIsIHBhaXJzLCBpc1JhbmRvbSB9ID0gTEVWRUxfREFUQVtsZXZlbCAtIDFdO1xyXG4gICAgICAgICovXHJcbiAgICAgICAgbGV0IGxldmVsID0gTWF0aC5taW4oRGF0YU1hbmFnZXIuaW5zdGFuY2UubGV2ZWxEYXRhLmxldmVsLCBMRVZFTF9DT05GSUcubGVuZ3RoKTtcclxuICAgICAgICBsZXQgbGV2ZWxEYXRhPUxFVkVMX0NPTkZJR1tsZXZlbCAtIDFdO1xyXG5cclxuICAgICAgICAvL+WIneWni+WMluWFs+WNoVxyXG4gICAgICAgICBsZXQgdHlwZT1sZXZlbERhdGEudHlwZTtcclxuICAgICAgICBsZXQgcHJlZmFiTmFtZT1cIk5vcm1hbExldmVsXCI7XHJcbiAgICAgICAgaWYobGV2ZWw9PTEpe1xyXG4gICAgICAgICAgICBwcmVmYWJOYW1lPVwiTGV2ZWwxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZT09RU5VTV9MRVZFTF9UWVBFLk5PUk1BTCl7XHJcbiAgICAgICAgICAgIHByZWZhYk5hbWU9XCJOb3JtYWxMZXZlbFwiO1xyXG4gICAgICAgIH1lbHNlIGlmKHR5cGU9PUVOVU1fTEVWRUxfVFlQRS5NT1ZFKXtcclxuICAgICAgICAgICAgcHJlZmFiTmFtZT1cIk1vdmVMZXZlbFwiK2xldmVsRGF0YS5tb3ZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsZXZlbE5vZGUgPSBQb29sTWFuYWdlci5pbnN0YW5jZS5nZXROb2RlKHByZWZhYk5hbWUsIHRoaXMuc3RhZ2UpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxzPWxldmVsTm9kZS5nZXRDb21wb25lbnQoTGV2ZWxzKTtcclxuXHJcbiAgICAgICAgLy8g5omA5pyJZ29vZHNcclxuICAgICAgICBsZXQgZ29vZHNJbmRleEFycj10aGlzLmxldmVscy5pbml0TGV2ZWwobGV2ZWwpO1xyXG4gICAgICAgIGxldCBpc1JhbmRvbT1mYWxzZTtcclxuXHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlui0p+afnFxyXG4gICAgICAgLyogY29uc3QgbGV2ZWxOb2RlID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZShwcmVmYWIsIHRoaXMuc3RhZ2UpXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVycyA9IGxldmVsTm9kZS5jaGlsZHJlblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IGNvbnRhaW5lcnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyc1tpXVxyXG4gICAgICAgICAgICBjb250YWluZXIuZ2V0Q29tcG9uZW50KENvbnRhaW5lcikuaW5pdChpLCBpc1JhbmRvbSlcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgIC8vICBpZiAoaXNSYW5kb20pIHtcclxuICAgICAgICAgLyogICBpZiAodGhpcy5sZXZlbHMuZ29vZHNDb3VudCA+IDYwKSByZXR1cm5cclxuICAgICAgICAgICAgLy8gNjDkuKrlm75cclxuICAgICAgICAgICAgbGV0IHNwcml0ZUluZGV4QXJyID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgcyA9IDE7IHMgPD0gNjA7IHMrKykge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlSW5kZXhBcnIucHVzaChzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwcml0ZUluZGV4QXJyID0gc2h1ZmZsZShzcHJpdGVJbmRleEFycilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgLy8gbGV0IGdvb2RzSW5kZXhBcnIgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHRoaXMubGV2ZWxzLmdvb2RzQ291bnQ7IHArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzcHJpdGVJbmRleEFyci5wb3AoKVxyXG4gICAgICAgICAgICAgICAgZ29vZHNJbmRleEFyci5wdXNoKGluZGV4LCBpbmRleCwgaW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ29vZHNJbmRleEFyciA9IHNodWZmbGUoZ29vZHNJbmRleEFycikqL1xyXG5cclxuICAgICAgICAgICAgLy8g5YiG57uE5pWw5o2uXHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVHcm91cERhdGEoZ29vZHNJbmRleEFycik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMubGV2ZWxzLmNvbnRhaW5lcnNbaV07XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5pdEZyb250KCk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5pdEJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0R2FtZVN0YXR1c1wiLHRoaXMuZ2V0R2FtZVN0YXR1cygpKTtcclxuICAgICAgICAvLyDliJ3lp4vljJbmtJfniYxcclxuICAgICAgICBpZiAodGhpcy5nZXRHYW1lU3RhdHVzKCkuaXNHYW1lU2h1ZmZsZSkgeyAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5vbkdhbWVTaHVmZmxlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVp5riy5p+TXHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5MZXZlbCgpO1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXIodHJ1ZSk7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5Qcm9ncmVzcyh0cnVlKVxyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluUG93ZXJDb2xsZWN0KCk7XHJcbiAgICAgICAgRGF0YU1hbmFnZXIuaW5zdGFuY2Uuc3RhdHVzID0gRU5VTV9HQU1FX1NUQVRVUy5SVU5JTkdcclxuXHJcbiAgICAgICAgLy8g56ys5LiA5YWz5Yqg6L29dGlw5omL5Yq/XHJcbiAgICAgICAgaWYgKERhdGFNYW5hZ2VyLmluc3RhbmNlLmxldmVsRGF0YS5sZXZlbCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlwTm9kZSA9IFBvb2xNYW5hZ2VyLmluc3RhbmNlLmdldE5vZGUoJ1RpcCcsIHRoaXMuc3RhZ2UpO1xyXG4gICAgICAgICAgICBsZXQgdGlwPXRoaXMudGlwTm9kZS5hZGRDb21wb25lbnQoVGlwKTtcclxuICAgICAgICAgICAgdGlwLmluaXQoKTtcclxuICAgICAgICAgICAgdGlwLnN0YXJ0VGlwKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXdhaXQgU3RhdGljSW5zdGFuY2UuZmFkZU1hbmFnZXIuZmFkZU91dCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g55Sf5oiQ5YiG57uE5pWw5o2uXHJcbiAgICBnZW5lcmF0ZUdyb3VwRGF0YShnb29kc0luZGV4QXJyOiBudW1iZXJbXSkge1xyXG4gICAgICAgIC8vIOe7k+aenOmbhlxyXG4gICAgICAgIGxldCByZXMgPSBbXVxyXG4gICAgICAgIC8vIOaMieeFp+WuueWZqOWIhue7hFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZXZlbHMuY29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXNbaV0gPSBbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnb29kc0luZGV4QXJyXCIsZ29vZHNJbmRleEFycik7XHJcbiAgICAgICAgLy8g5YiG57uE5YWl5p+cICBpbmRleD0w5Luj6KGo55WZ56m6XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnb29kc0luZGV4QXJyLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGdvb2RzSW5kZXhBcnJbal1cclxuICAgICAgICAgICAgY29uc3QgYXJyID0gcmVzW2ogJSB0aGlzLmxldmVscy5jb250YWluZXJzLmxlbmd0aF0gLy/nrKzlh6DkuKrlrrnlmajnmoTmlbDnu4RcclxuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBhcnJbYXJyLmxlbmd0aCAtIDFdICAvL2xhc3TkuLrotKfmnrbmnIDkuIrpnaLkuIDlsYLnmoTllYblk4HmlbDnu4TvvIzplb/luqbkuLozXHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdC5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3QucHVzaChpbmRleClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGFzdC5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCE9MCYmbGFzdFswXSA9PSBpbmRleCAmJiBsYXN0WzFdID09IGluZGV4KSB7ICAvL+WmguaenOivpeWxguWJjeS4pOS4quWVhuWTgeWSjOesrOS4ieS4quWVhuWTgeS4gOiHtO+8jOWwhuivpeWVhuWTgeaUvuWIsOabtOS4iuS4gOWxglxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWw9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdC5wdXNoKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpmo/mnLpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJhbmRvbSgwLCAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKFtpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacgOWQjuS4gOe7hOaVsOaNrueVmeepuuS9jVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoaiA9PSBnb29kc0luZGV4QXJyLmxlbmd0aCAtIDEpJiZEYXRhTWFuYWdlci5pbnN0YW5jZS5sZXZlbERhdGEubGV2ZWwhPTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goW2luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0LnB1c2goaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goW2luZGV4XSk7ICAvL+aUvuS6huS4gOS4quaVsOe7hOi/m+WOu1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFycnk9cmVzW2ldO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicmVzXCIraSxyZXNbaV0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc1tpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlc1tpXVtqXTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJyZXNcIitpK2osZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLmdvb2RzRGF0YSA9IHJlc1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pe26Ze05pqC5YGcXHJcbiAgICBvblNraWxsVGltZSgpIHtcclxuICAgICAgICBpZiAoU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLmlzQWN0aXZlKEVOVU1fVUlfVFlQRS5JQ0UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU0tJTExfVElNRSk7XHJcbiAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnRvZ2dsZShFTlVNX1VJX1RZUEUuSUNFKTtcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblBhdXNlVGltZXIoMTUpO1xyXG4gICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/liLfmlrBcclxuICAgIG9uU2tpbGxTaHVmZmxlKCkge1xyXG4gICAgICAgIGlmIChEYXRhTWFuYWdlci5pbnN0YW5jZS5pc1NodWZmbGluZykgcmV0dXJuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnBsYXlTb3VuZChFTlVNX0FVRElPX0NMSVAuU0hVRkZMRSlcclxuICAgICAgICB0aGlzLm9uR2FtZVNodWZmbGUoKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6I635b6X5b2T5YmN5YWz5Y2h55qE5omA5pyJ5ZWG5ZOB5L+h5oGvXHJcbiAgICBnZXRBbGxHb29kcygpe1xyXG4gICAgICAgIGxldCAgb2xkR29vZHNJc2RNYXA9bmV3IE1hcDxudW1iZXIsIE9sZEdvb2RzW10+KCk7XHJcblxyXG5cclxuICAgICAgICAvL+WvuWZyb2506L+b6KGM6YGN5Y6GXHJcbiAgICAgICAgdGhpcy5sZXZlbHMuY29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb250Q29udGFpbmVycyA9IGNvbnRhaW5lci5ub2RlLmdldENoaWxkQnlOYW1lKCdmcm9udCcpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyb250Q29udGFpbmVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnJvbnQgPSBmcm9udENvbnRhaW5lcnNbal07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGZyb250LmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBnb29kc0NvbXBvbmVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRHb29kczpPbGRHb29kcz17Z29vZHNJZDprZXksY29udGFpbmVySWQ6Z29vZHNDb21wb25lbnQuY29udGFpbmVyLmluZGV4LGxheWVyOjF9O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRHb29kc0lzZE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcz0gb2xkR29vZHNJc2RNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucHVzaChvbGRHb29kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEdvb2RzSXNkTWFwLnNldChrZXksIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEdvb2RzSXNkTWFwLnNldChrZXksIFtvbGRHb29kc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v5a+5YmFja+Wxgui/m+ihjOmBjeWOhlxyXG4gICAgICAgIHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYWNrQ29udGFpbmVycyA9IGNvbnRhaW5lci5ub2RlLmdldENoaWxkQnlOYW1lKCdiYWNrJykuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmFja0NvbnRhaW5lcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2sgPSBiYWNrQ29udGFpbmVyc1tqXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gYmFjay5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ29vZHNDb21wb25lbnQgPSBnb29kcy5nZXRDb21wb25lbnQoR29vZHMpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZ29vZHNDb21wb25lbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEdvb2RzOk9sZEdvb2RzPXtnb29kc0lkOmtleSxjb250YWluZXJJZDpnb29kc0NvbXBvbmVudC5jb250YWluZXIuaW5kZXgsbGF5ZXI6Mn07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRHb29kc0lzZE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcz0gb2xkR29vZHNJc2RNYXAuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHMucHVzaChvbGRHb29kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEdvb2RzSXNkTWFwLnNldChrZXksIHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZEdvb2RzSXNkTWFwLnNldChrZXksIFtvbGRHb29kc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8v5a+556ys5LiJ5bGC5Lul5ZCO55qE6L+b6KGM6YGN5Y6GXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVscy5jb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMubGV2ZWxzLmNvbnRhaW5lcnNbaV0uaW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmdvb2RzRGF0YVtpbmRleF07IC8v5Y+W5b6X6LSn5p625pqC5a2Y55qE5omA5pyJ5ZWG5ZOBXHJcbiAgICAgICAgICAgIGlmICghYXJyIHx8IGFyci5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IGFyci5sZW5ndGgtMTsgaz49MDsgay0tKSB7ICAgICAgICAvL+S7juS4iuW+gOS4i+S4gOWxguS4gOWxguWPllxyXG4gICAgICAgICAgICAgICAgICAgIGxldCAgZGF0YTogYW55ID0gYXJyW2tdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgZGF0YS5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGxldCAga2V5PWRhdGFbbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEdvb2RzOk9sZEdvb2RzPXtnb29kc0lkOmtleSxjb250YWluZXJJZDppbmRleCxsYXllcjoyKyhhcnIubGVuZ3RoLWspfTtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkR29vZHNJc2RNYXAuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHM9IG9sZEdvb2RzSXNkTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzLnB1c2gob2xkR29vZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRHb29kc0lzZE1hcC5zZXQoa2V5LCBzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRHb29kc0lzZE1hcC5zZXQoa2V5LCBbb2xkR29vZHNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9sZEdvb2RzSXNkTWFwXCIsb2xkR29vZHNJc2RNYXApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgb2xkR29vZHNJc2RNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ta2lsbE1hZ2ljKCl7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxHb29kcygpO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLlNLSUxMX0RFTEVURSk7XHJcbiAgICAgICAgLy8g5LyY5YWI5om+54mM6Z2i5pWw5o2u5Y+Y6LqrXHJcbiAgICAgICAgLy8g54mM6Z2i5pWw5o2uXHJcbiAgICAgICAgY29uc3QgZ29vZHNmcm9udENvbnRhaW5lcnMgPSBbXTtcclxuICAgICAgICAvL2JhY2vmlbDmja5cclxuICAgICAgICBjb25zdCBnb29kc2JhY2tDb250YWluZXJzID0gW107XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERhdGFNYW5hZ2VyLmluc3RhbmNlLmZyb250Q29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBnb29kcyA9IERhdGFNYW5hZ2VyLmluc3RhbmNlLmZyb250Q29udGFpbmVyc1tpXS5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzZnJvbnRDb250YWluZXJzLnB1c2goZ29vZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGF0YU1hbmFnZXIuaW5zdGFuY2UuYmFja0NvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBEYXRhTWFuYWdlci5pbnN0YW5jZS5iYWNrQ29udGFpbmVyc1tpXS5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgIGdvb2RzYmFja0NvbnRhaW5lcnMucHVzaChnb29kcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcyApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5PWdvb2RzQ29tcG9uZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleHMgPSBuZXcgTWFwPG51bWJlciwgR29vZHM+KCk7XHJcbiAgICAgICAgbGV0IGNvdW50PTk7XHJcbiAgICAgICAgaWYoZ29vZHNmcm9udENvbnRhaW5lcnMubGVuZ3RoPGNvdW50KXtcclxuICAgICAgICAgICAgY291bnQ9Z29vZHNmcm9udENvbnRhaW5lcnMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQyPTEwO1xyXG4gICAgICAgIC8vMS7ku45mcm9udOWxgumaj+acuuaJvjnkuKrllYblk4HvvIzkuI3lpJ855Liq5oyJ5pyA5aSa55qE5om+XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBnb29kcz1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoZ29vZHNmcm9udENvbnRhaW5lcnMpO1xyXG4gICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGdvb2RzQ29tcG9uZW50LmlkK2dvb2RzQ29tcG9uZW50LmNvbnRhaW5lci5pbmRleDtcclxuICAgICAgICAgICAgICAgIHdoaWxlKGluZGV4cy5oYXMoa2V5KSYmY291bnQyPjApIHtcclxuICAgICAgICAgICAgICAgICAgICBnb29kcz1Db21tb25Ub29sLmdldFJhbmRvbUJ5QXJyYXkoZ29vZHNmcm9udENvbnRhaW5lcnMpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcyk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZ29vZHNDb21wb25lbnQuaWQrZ29vZHNDb21wb25lbnQuY29udGFpbmVyLmluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Mi0tO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGluZGV4cy5zZXQoa2V5LCBnb29kc0NvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb3VudDI9MTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGVyQ2hhbmdlR29vZCA9ICgpPT57XHJcbiAgICAgICAgICAgIC8vMi7lsIbov5k55Liq5ZWG5ZOB5pu/5o2i5Li657uf5LiA55qE5ZWG5ZOBXHJcbiAgICAgICAgICAgIGxldCBvbGRHb29kc0lzZE1hcD1uZXcgTWFwPG51bWJlcixudW1iZXI+KCk7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VJZD1udWxsO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXg9MDtcclxuICAgICAgICAgICAgaW5kZXhzLmZvckVhY2goKHYsIGspID0+IHsgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSB2LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRHb29kc0lzZE1hcC5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WmguaenD0z77yM5Luj6KGo5LiN6ZyA6KaB5LuOYmFja+Wxguabv+aNolxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvbGRHb29kc0lzZE1hcC5nZXQoa2V5KT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRHb29kc0lzZE1hcC5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRHb29kc0lzZE1hcC5zZXQoa2V5LCBvbGRHb29kc0lzZE1hcC5nZXQoa2V5KSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkR29vZHNJc2RNYXAuc2V0KGtleSwgMSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VJZD12LmlkO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdi5zZXRJZChjaGFuZ2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8zLuiOt+WPluW9k+WJjeaJgOacieeahOWVhuWTge+8jOWvueS4jeaYrzPnmoTlgI3mlbDnmoTllYblk4Hov5vooYzkv67mraNcclxuICAgICAgICAgICAgbGV0IGFsbEdvb2RzSWRzTWFwPXRoaXMuZ2V0QWxsR29vZHMoKTtcclxuICAgICAgICAgICAgLy/lrZjmlL7lj6rmnInkuIDkuKrllYblk4HnmoTllYblk4HmlbDnu4RcclxuICAgICAgICAgICAgbGV0IG9sZEdvb2RzQXJyYXkxPVtdO1xyXG4gICAgICAgICAgICAvL+WtmOaUvuaciTLkuKrllYblk4HnmoTllYblk4HmlbDnu4RcclxuICAgICAgICAgICAgbGV0IG9sZEdvb2RzQXJyYXkyPVtdO1xyXG4gICAgICAgICAgICBpZihhbGxHb29kc0lkc01hcCl7XHJcbiAgICAgICAgICAgICAgICBhbGxHb29kc0lkc01hcC5mb3JFYWNoKCh2LCBrKSA9PiB7ICBcclxuICAgICAgICAgICAgICAgICAgICBpZih2Lmxlbmd0aCUzPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWU9dlt2Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICBvbGRHb29kc0FycmF5MS5wdXNoKFt2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih2Lmxlbmd0aCUzPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkR29vZHNBcnJheTIucHVzaChbdlt2Lmxlbmd0aC0yXSx2W3YubGVuZ3RoLTFdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2xkR29vZHNBcnJheTFcIixvbGRHb29kc0FycmF5MSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2xkR29vZHNBcnJheTJcIixvbGRHb29kc0FycmF5Mik7XHJcbiAgICAgICAgICAgIC8v6L+Y5rKh5pyJ55+r5q2j5pWw6YeP55qE5ZWG5ZOB6ZuG5ZCIXHJcbiAgICAgICAgICAgIGxldCBub1NldE9sZEdvb2RzQXJyYXk9W107XHJcbiAgICAgICAgICAgIC8v6ZyA6KaB55+r5q2j55qE5pWw6YeP55qE5ZWG5ZOB6ZuG5ZCI6YeM5ZWG5ZOB5pivMeS4qui/mOaYrzLkuKrjgILmnIkx5Liq6ZyA6KaB55+r5q2jMuS4quWQjOagt+eahOWVhuWTgeOAguaciTLkuKrpnIDopoHnn6vmraPkuIDkuKrlkIzmoLfnmoTllYblk4HjgIJcclxuICAgICAgICAgICAgbGV0IG5vU2V0T2xkR29vZHNUeXBlPTE7XHJcbiAgICAgICAgICAgIGlmKG9sZEdvb2RzQXJyYXkxPT1udWxsfHxvbGRHb29kc0FycmF5MS5sZW5ndGg9PTB8fG9sZEdvb2RzQXJyYXkyPT1udWxsfHxvbGRHb29kc0FycmF5Mi5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICAgICAgaWYob2xkR29vZHNBcnJheTEhPW51bGwmJm9sZEdvb2RzQXJyYXkxLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICBub1NldE9sZEdvb2RzQXJyYXk9b2xkR29vZHNBcnJheTE7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9TZXRPbGRHb29kc1R5cGU9MTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5vU2V0T2xkR29vZHNBcnJheT1vbGRHb29kc0FycmF5MjtcclxuICAgICAgICAgICAgICAgICAgICBub1NldE9sZEdvb2RzVHlwZT0yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYobm9TZXRPbGRHb29kc0FycmF5JiZub1NldE9sZEdvb2RzQXJyYXkubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub1NldE9sZEdvb2RzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBub1NldE9sZEdvb2RzQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ29vZHNJbmZvPW5vU2V0T2xkR29vZHNBcnJheVtpbmRleF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQubGVuZ3RoPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5hZGRHb29kc0J5SWQwMDBcIix0aGlzLmFkZEdvb2RzQnlJZChnb29kc0luZm8uZ29vZHNJZCxnb29kc0luZm8uY29udGFpbmVySWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5hZGRHb29kc0J5SWQyMjJcIix0aGlzLmFkZEdvb2RzQnlJZChnb29kc0luZm8uZ29vZHNJZCxnb29kc0luZm8uY29udGFpbmVySWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50Lmxlbmd0aD09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuYWRkR29vZHNCeUlkMTExXCIsdGhpcy5hZGRHb29kc0J5SWQoZ29vZHNJbmZvLmdvb2RzSWQsZ29vZHNJbmZvLmNvbnRhaW5lcklkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgY291bnQ9b2xkR29vZHNBcnJheTEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYob2xkR29vZHNBcnJheTEubGVuZ3RoPm9sZEdvb2RzQXJyYXkyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ9b2xkR29vZHNBcnJheTIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gY291bnQ7IGluZGV4IDwgb2xkR29vZHNBcnJheTEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vU2V0T2xkR29vZHNBcnJheS5wdXNoKG9sZEdvb2RzQXJyYXkxW2luZGV4XSk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub1NldE9sZEdvb2RzVHlwZT0xO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYob2xkR29vZHNBcnJheTIubGVuZ3RoPm9sZEdvb2RzQXJyYXkxLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSBjb3VudDsgaW5kZXggPCBvbGRHb29kc0FycmF5Mi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9TZXRPbGRHb29kc0FycmF5LnB1c2gob2xkR29vZHNBcnJheTJbaW5kZXhdKTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vU2V0T2xkR29vZHNUeXBlPTI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLzMuMS4g5a+5IDHlkowy6YWN5a+55oiQ5Yqf55qE5ZWG5ZOB6L+b6KGM5pWw6YeP55+r5q2j77yM5bCG5ZWG5ZOBMeeahGlk5pS55Li65ZWG5ZOBMueahGlkXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDxjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnb29kczIgPSBvbGRHb29kc0FycmF5MltpbmRleF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdvb2RzMT1vbGRHb29kc0FycmF5MVtpbmRleF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIZnb29kczHmjaLkuLpnb29kczJcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyPXRoaXMubGV2ZWxzLmdldENvbnRhaW5lckJ5SW5kZXgoZ29vZHMxLmNvbnRhaW5lcklkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudXBkYXRlR29vZHNCeUlkKGdvb2RzMS5sYXllcixnb29kczEuZ29vZHNJZCxnb29kczIuZ29vZHNJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbEdvb2RzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJub1NldE9sZEdvb2RzQXJyYXlcIixub1NldE9sZEdvb2RzQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vMy4yLiDmsqHmnIkxLTLljLnphY3nmoTllYblk4Hph43mlrDnn6vmraNcclxuICAgICAgICAgICAgICAgIGlmKG5vU2V0T2xkR29vZHNBcnJheSYmbm9TZXRPbGRHb29kc0FycmF5Lmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgICAgICAvLzMuMy4g5LulM+S4uuWAjeaVsOi/m+ihjOaVsOaNruefq+ato1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub1NldExhc3RHb29kc0FycmF5PVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5vU2V0T2xkR29vZHNBcnJheS5sZW5ndGglMz4wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9TZXRMYXN0R29vZHNBcnJheS5wdXNoKG5vU2V0T2xkR29vZHNBcnJheS5wb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihub1NldE9sZEdvb2RzQXJyYXkmJm5vU2V0T2xkR29vZHNBcnJheS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub1NldE9sZEdvb2RzQXJyYXkubGVuZ3RoOyBpbmRleD1pbmRleCszKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ29vZHNJbmZvMT1ub1NldE9sZEdvb2RzQXJyYXlbaW5kZXhdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdvb2RzSW5mbzI9bm9TZXRPbGRHb29kc0FycmF5W2luZGV4KzFdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdvb2RzSW5mbzM9bm9TZXRPbGRHb29kc0FycmF5W2luZGV4KzJdWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobm9TZXRPbGRHb29kc1R5cGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5bCGMuWSjDPmjaLmiJAx55qE5ZWG5ZOBaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGFpbmVyMj10aGlzLmxldmVscy5nZXRDb250YWluZXJCeUluZGV4KGdvb2RzSW5mbzIuY29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjIudXBkYXRlR29vZHNCeUlkKGdvb2RzSW5mbzIubGF5ZXIsZ29vZHNJbmZvMi5nb29kc0lkLGdvb2RzSW5mbzEuZ29vZHNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lcjM9dGhpcy5sZXZlbHMuZ2V0Q29udGFpbmVyQnlJbmRleChnb29kc0luZm8zLmNvbnRhaW5lcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIzLnVwZGF0ZUdvb2RzQnlJZChnb29kc0luZm8zLmxheWVyLGdvb2RzSW5mbzMuZ29vZHNJZCxnb29kc0luZm8xLmdvb2RzSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobm9TZXRPbGRHb29kc1R5cGU9PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5bCGMuS4qjPnmoTllYblk4HliIbliKvmjaLmiJDkuIDkuKox5ZKM5LiA5LiqMueahOWVhuWTgWlkICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lcjMwPXRoaXMubGV2ZWxzLmdldENvbnRhaW5lckJ5SW5kZXgoZ29vZHNJbmZvMy5jb250YWluZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyMzAudXBkYXRlR29vZHNCeUlkKGdvb2RzSW5mbzMubGF5ZXIsZ29vZHNJbmZvMy5nb29kc0lkLGdvb2RzSW5mbzEuZ29vZHNJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnb29kc0luZm8zMT1ub1NldE9sZEdvb2RzQXJyYXlbaW5kZXgrMl1bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRhaW5lcjMxPXRoaXMubGV2ZWxzLmdldENvbnRhaW5lckJ5SW5kZXgoZ29vZHNJbmZvMzEuY29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjMxLnVwZGF0ZUdvb2RzQnlJZChnb29kc0luZm8zMS5sYXllcixnb29kc0luZm8zMS5nb29kc0lkLGdvb2RzSW5mbzIuZ29vZHNJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8zLjQuIOWvueWJqeS4i+eahOWVhuWTgeaWsOeUn+aIkOWVhuWTgeadpemFjeWvuVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub1NldExhc3RHb29kc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9TZXRMYXN0R29vZHNBcnJheVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnb29kc0luZm89bm9TZXRMYXN0R29vZHNBcnJheVtpbmRleF1bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQubGVuZ3RoPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR29vZHNCeUlkKGdvb2RzSW5mby5nb29kc0lkLGdvb2RzSW5mby5jb250YWluZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEdvb2RzQnlJZChnb29kc0luZm8uZ29vZHNJZCxnb29kc0luZm8uY29udGFpbmVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQubGVuZ3RoPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR29vZHNCeUlkKGdvb2RzSW5mby5nb29kc0lkLGdvb2RzSW5mby5jb250YWluZXJJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/lvIDlp4vmkq3mlL7prZTms5XliqjnlLtcclxuICAgICAgICBsZXQgYkhhbmRsZXIgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbGlnaHRFZmZlY3QgPSAoc3RhcnRQb3M6IGNjLlZlYzIpPT57XHJcbiAgICAgICAgICAgIGluZGV4cy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3cG9zID0gdG9YWSh2Lm5vZGUsIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLnN0YWdlKTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXN0ID0gY2MuVmVjMi5kaXN0YW5jZSh3cG9zLCBzdGFydFBvcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlZmZOb2RlID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZShgbGlnaHRgLCB0aGlzLnN0YWdlKTtcclxuICAgICAgICAgICAgICAgIGVmZk5vZGUucG9zaXRpb24gPSBjYy52MyhzdGFydFBvcyk7XHJcbiAgICAgICAgICAgICAgICBlZmZOb2RlLnNldENvbnRlbnRTaXplKGVmZk5vZGUud2lkdGgsIGRpc3QpO1xyXG4gICAgICAgICAgICAgICAgZWZmTm9kZS5hbmdsZSA9IC10aGlzLmNhbGN1bGF0ZUFuZ2xlKHN0YXJ0UG9zLCB3cG9zKTtcclxuICAgICAgICAgICAgICAgIHYudG9NYWdpY0Zyb250RWZmZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjQpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVmZk5vZGUyID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZShgbGlnaHQyYCwgdGhpcy5zdGFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZk5vZGUyLnBvc2l0aW9uID0gY2MudjMod3Bvcyk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmluc3RhbmNlLnBsYXkoJ0NvbGxlY3QnLCB2Lm5vZGUucGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmJhY2tNYWdpY0Zyb250RWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYkhhbmRsZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6a2U5rOV5pWI5p6c5pKt5pS+5a6M5LqG44CC44CC44CCXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJDaGFuZ2VHb29kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbSA9IGVmZk5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbS5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZk5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGVmZk5vZGUpLnRoZW4oYWN0aW9uKS5zdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtYWdpY1Bvc05vZGUgPSBjYy5maW5kKCdtYWdpY1BvcycsIHRoaXMubm9kZSlcclxuICAgICAgICBjb25zdCBlZmZOb2RlID0gUG9vbE1hbmFnZXIuaW5zdGFuY2UuZ2V0Tm9kZShgbWFnaWNgLCBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuZ2V0TWFpbkxheWVyKCkubm9kZSk7XHJcbiAgICAgICAgZWZmTm9kZS5zZXRQb3NpdGlvbihtYWdpY1Bvc05vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIGVmZk5vZGUueCA9IDcwMDtcclxuICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIGNjLnYyKG1hZ2ljUG9zTm9kZS5wb3NpdGlvbi54IC0gNjAsIG1hZ2ljUG9zTm9kZS5wb3NpdGlvbi55KSkuZWFzaW5nKGNjLmVhc2VJbigxKSksXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIGNjLnYyKG1hZ2ljUG9zTm9kZS5wb3NpdGlvbi54LCBtYWdpY1Bvc05vZGUucG9zaXRpb24ueSkpLmVhc2luZyhjYy5lYXNlSW4oMSkpLFxyXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgbGlnaHRFZmZlY3QoY2MudjIoZWZmTm9kZS5wb3NpdGlvbikpOyAgICAgICAgXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXHJcbiAgICAgICAgICAgIGNjLmRlc3Ryb3lTZWxmKClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNjLnR3ZWVuKGVmZk5vZGUpLnRoZW4oYWN0aW9uKS5zdGFydCgpO1xyXG5cclxuICAgICAgICB0aGlzLmdldEFsbEdvb2RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6KeS5bqmXHJcbiAgICBjYWxjdWxhdGVBbmdsZShmaXJzdDpjYy5WZWMyLCBzZWNvbmQ6Y2MuVmVjMil7XHJcbiAgICAgICAgbGV0IGxlbl95ID0gc2Vjb25kLnkgLSBmaXJzdC55O1xyXG4gICAgICAgIGxldCBsZW5feCA9IHNlY29uZC54IC0gZmlyc3QueDtcclxuICAgICAgICBsZXQgdGFuX3l4ID0gTWF0aC5hYnMobGVuX3kgLyBsZW5feCk7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBNYXRoLmF0YW4odGFuX3l4KSAqIDE4MC9NYXRoLlBJO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IDA7XHJcbiAgICAgICAgaWYobGVuX3kgPiAwICYmIGxlbl94IDwgMCl7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gdGVtcCAtIDkwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGxlbl95ID4gMCAmJiBsZW5feCA+IDApe1xyXG4gICAgICAgICAgICBhbmdsZSA9IC10ZW1wICsgOTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobGVuX3kgPCAwICYmIGxlbl94IDwgMCl7XHJcbiAgICAgICAgICAgIGFuZ2xlID0gLXRlbXAgLSA5MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihsZW5feSA8IDAgJiYgbGVuX3ggPiAwKXtcclxuICAgICAgICAgICAgYW5nbGUgPSB0ZW1wICsgOTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobGVuX3kgPT0gMCAmJiBsZW5feCAhPSAwKXtcclxuICAgICAgICAgICAgYW5nbGUgPSBsZW5feCA8IDAgPyAtOTAgOiA5MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihsZW5feCA9PSAwICYmIGxlbl95ICE9IDApe1xyXG4gICAgICAgICAgICBhbmdsZSA9IGxlbl95IDwgMCA/IDE4MCA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1RlbXAnLCB0ZW1wKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdBbmdsZSAnLCBhbmdsZSlcclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mt7vliqDllYblk4HliLDotKfmnrbkuIrvvIzkvJjlhYjmt7vliqDliLDnrKwy5bGC5Lul5ZCOIHN0YXJ0Q29udGFpbmVySWTku47ov5nkuKrotKfmnrblvIDlp4vmn6Xmib7kvY3nva5cclxuICAgIGFkZEdvb2RzQnlJZChnb29kc0lkLHN0YXJ0Q29udGFpbmVySWQpe1xyXG4gICAgICAgIGxldCBjb250YWluZXJJZD1zdGFydENvbnRhaW5lcklkKzE7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lckxlbmd0aD10aGlzLmxldmVscy5jb250YWluZXJzLmxlbmd0aFxyXG4gICAgICAgIGlmKGNvbnRhaW5lcklkPj1jb250YWluZXJMZW5ndGgpe1xyXG4gICAgICAgICAgICBjb250YWluZXJJZD0wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29udGFpbmVyPXRoaXMubGV2ZWxzLmNvbnRhaW5lcnNbY29udGFpbmVySWRdO1xyXG4gICAgICAgIGxldCBsYXllcj1jb250YWluZXIuZ2V0RW1wdHlMYXllcihnb29kc0lkKTtcclxuICAgICAgICAvL+WIpOaWrei0p+aetueahOesrDLmiJbogIXnrKwz5bGC5piv5ZCm5pyJ56m65L2NXHJcbiAgICAgICAgd2hpbGUobGF5ZXI9PTAmJnN0YXJ0Q29udGFpbmVySWQhPWNvbnRhaW5lcklkKXtcclxuICAgICAgICAgICAgY29udGFpbmVySWQrKztcclxuICAgICAgICAgICAgaWYoY29udGFpbmVySWQ+PWNvbnRhaW5lckxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJJZD0wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcj10aGlzLmxldmVscy5jb250YWluZXJzW2NvbnRhaW5lcklkXTtcclxuICAgICAgICAgICAgbGF5ZXI9Y29udGFpbmVyLmdldEVtcHR5TGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhcnRDb250YWluZXJJZD09Y29udGFpbmVySWR8fGxheWVyPT0wKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmib7kuI3liLDlkIjpgILkvY3nva46XCIsZ29vZHNJZCxzdGFydENvbnRhaW5lcklkLGNvbnRhaW5lcklkLGxheWVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WwhuWVhuWTgeWKoOWFpVxyXG4gICAgICAgIHJldHVybiBjb250YWluZXIuYWRkR29vZHNCeUlkKGxheWVyLGdvb2RzSWQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL+a2iOmZpFxyXG4gICAgb25Ta2lsbERlbGV0ZSgpIHtcclxuICAgICAgICAgICAgLy8g5LyY5YWI5om+54mM6Z2i5pWw5o2u5raI6ZmkXHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5wbGF5U291bmQoRU5VTV9BVURJT19DTElQLkNMRUFSKVxyXG4gICAgICAgICAgICAvLyDniYzpnaLmlbDmja5cclxuICAgICAgICAgICAgbGV0IGJhY2tJZHMgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpXHJcbiAgICAgICAgICAgIGxldCBmcm9udElkcyA9IG5ldyBNYXA8bnVtYmVyLCBudW1iZXI+KClcclxuICAgICAgICAgICAgdGhpcy5sZXZlbHMuY29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYWNrQ29udGFpbmVycyA9IGNvbnRhaW5lci5ub2RlLmdldENoaWxkQnlOYW1lKCdiYWNrJykuY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJhY2tDb250YWluZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFjayA9IGJhY2tDb250YWluZXJzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzID0gYmFjay5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbXBvbmVudCA9IGdvb2RzLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZ29vZHNDb21wb25lbnQuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tJZHMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tJZHMuc2V0KGtleSwgYmFja0lkcy5nZXQoa2V5KSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrSWRzLnNldChrZXksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxldmVscy5jb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb250Q29udGFpbmVycyA9IGNvbnRhaW5lci5ub2RlLmdldENoaWxkQnlOYW1lKCdmcm9udCcpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcm9udENvbnRhaW5lcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9udCA9IGZyb250Q29udGFpbmVyc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGZyb250LmdldENoaWxkQnlOYW1lKCdHb29kcycpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdvb2RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29tcG9uZW50ID0gZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBnb29kc0NvbXBvbmVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbnRJZHMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250SWRzLnNldChrZXksIGZyb250SWRzLmdldChrZXkpICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250SWRzLnNldChrZXksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJvbnRJZHM9PT09PT09PT09PT09OlwiLCBmcm9udElkcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFja0lkcz09PT09PT09PT09PT06XCIsIGJhY2tJZHMpO1xyXG5cclxuICAgICAgICAgICAgLy8g5YWI5Zyo5YmN5o6S5om+5Yiw56ys5LiA5Liq5ruh6LazM+a2iOeahFxyXG4gICAgICAgICAgICBsZXQga2V5ID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gLTE7XHJcbiAgICAgICAgICAgIGZyb250SWRzLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2ID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGtleSA8IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5YmN5o6S5ZKM5ZCO5o6S5LiA6LW35om+5ruh6LazM+a2iOeahFxyXG4gICAgICAgICAgICAgICAgZnJvbnRJZHMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2ID49IDIgJiYgYmFja0lkcy5nZXQoaykgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbnRJZHMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodiA+PSAxICYmIGJhY2tJZHMuZ2V0KGspID49IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIOeJjOmdouWIoOmZpO+8jOiLpeS4jei2s+WImemtlOajkuWIt+aWsFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleSA9PT09PT09PT1cIiwga2V5LCBmbGFnKTtcclxuICAgICAgICAgICAgaWYgKGtleSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lU2h1ZmZsZSgxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0dhbWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LWw6L+Z6YeM5LqG44CC44CC44CC44CCXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8g6Kej6ZSBXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxldmVscy5sb2NrcyYmdGhpcy5sZXZlbHMubG9ja3MubGVuZ3RoPjApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxzLmxvY2tzWzBdLnVwZGF0ZUxvY2tOdW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOWPlua2iOaXtuWBnOaKgOiDvVxyXG4gICAgICAgICAgICAgICAgaWYgKFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5pc0FjdGl2ZShFTlVNX1VJX1RZUEUuSUNFKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci50b2dnbGUoRU5VTV9VSV9UWVBFLklDRSwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgU3RhdGljSW5zdGFuY2UudWlNYW5hZ2VyLnNldE1haW5UaW1lcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIFN0YXRpY0luc3RhbmNlLnVpTWFuYWdlci5zZXRNYWluVGltZXJTb3VuZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZyb250R29vZHNMaXN0OiBHb29kc1tdID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVscy5jb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9udENvbnRhaW5lcnMgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZnJvbnQnKS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZyb250Q29udGFpbmVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9udCA9IGZyb250Q29udGFpbmVyc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ29vZHMgPSBmcm9udC5nZXRDaGlsZEJ5TmFtZSgnR29vZHMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ29vZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29tcG9uZW50ID0gZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdvb2RzQ29tcG9uZW50LmlkID09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb250R29vZHNMaXN0LnB1c2goZ29vZHNDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZnJvbnRHb29kc0xpc3TmlbDph4/jgILjgILjgILjgIJcIiwgZnJvbnRHb29kc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxMaXN0OiBHb29kc1tdID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoZmxhZyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBmcm9udEdvb2RzTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxMaXN0LnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tHb29kc0xpc3Q6IEdvb2RzW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVscy5jb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja0NvbnRhaW5lcnMgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmFjaycpLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJhY2tDb250YWluZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrID0gYmFja0NvbnRhaW5lcnNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kcyA9IGJhY2suZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnb29kcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29tcG9uZW50ID0gZ29vZHMuZ2V0Q29tcG9uZW50KEdvb2RzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnb29kc0NvbXBvbmVudC5pZCA9PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja0dvb2RzTGlzdC5wdXNoKGdvb2RzQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFja0dvb2RzTGlzdOaVsOmHj+OAguOAguOAguOAglwiLCBiYWNrR29vZHNMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZnJvbnRHb29kc0xpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBmcm9udEdvb2RzTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxMaXN0LnB1c2goZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDMgLSBmcm9udEdvb2RzTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZSA9IGJhY2tHb29kc0xpc3RbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsTGlzdC5wdXNoKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmtojpmaTpmJ/liJfvvJpcIiwgZGVsTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAvL+WIoOmZpOaViOaenDrlvoDkvY3nva7mnIDpq5jnmoTllYblk4HlvoDkuIs1MOmCo+mHjOmjnlxyXG4gICAgICAgICAgICAgICAgbGV0IHQ6IGNjLlZlYzIgW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkZWxMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEdvb2RzID0gZGVsTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd3BvcyA9IGVsZW1lbnQubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdC5wdXNoKHdwb3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0V1BvcyA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgdC5zb3J0KChhLCBiKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnkgLSBhLnk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFdQb3MgPSB0WzBdO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0V1Bvcy55IC09IDE1MDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55uu5qCH5L2N572u77yaXCIsdGFyZ2V0V1Bvcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGVsTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGVsTGlzdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3cG9zID0gdG9YWShlbGVtZW50Lm5vZGUsIFN0YXRpY0luc3RhbmNlLmdhbWVNYW5hZ2VyLnN0YWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbHlOb2RlID0gY2MuaW5zdGFudGlhdGUoZWxlbWVudC5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmbHlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmx5Tm9kZS5wYXJlbnQgPSBTdGF0aWNJbnN0YW5jZS5nYW1lTWFuYWdlci5zdGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBmbHlOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmx5Tm9kZS5zZXRQb3NpdGlvbih3cG9zKTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ29vZHNDb21wb25lbnQgPSBmbHlOb2RlLmdldENvbXBvbmVudChHb29kcylcclxuICAgICAgICAgICAgICAgICAgICBnb29kc0NvbXBvbmVudC50b0Zyb250RWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0Q2xlYXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBmbHlOb2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0YXJnZXRXUG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIHBvcykuZWFzaW5nKGNjLmVhc2VJbigxKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3RNYW5hZ2VyLmluc3RhbmNlLnBsYXkoJ0NvbGxlY3QnLCBmbHlOb2RlLnBhcmVudCwge3BvczogZmx5Tm9kZS5wb3NpdGlvbn0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID49IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLpo57lrozmlLbpm4bkuIDkuKrmmJ/mmJ8uXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pS26ZuG5pif5pifXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGFNYW5hZ2VyLmluc3RhbmNlLnN0YXJTdGFydFBvc0Fyci5wdXNoKGZseU5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW0xRmx5Q2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVzdHJveVNlbGYoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihmbHlOb2RlKS50aGVuKGFjdGlvbikuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0dhbWUoKXtcclxuICAgICAgICAvLyDov57lh7vov5vluqZcclxuICAgICAgICBTdGF0aWNJbnN0YW5jZS51aU1hbmFnZXIuc2V0TWFpblByb2dyZXNzKClcclxuICAgICAgICAvLyDlpoLmnpzmrbvlsYDliJnliLfmlrAs5ZCm5YiZ5qOA5rWL5piv5ZCm6I636IOcXHJcbiAgICAgICAgLypjb25zdCBzdGF0dXMgPSB0aGlzLmdldEdhbWVTdGF0dXMoKVxyXG4gICAgICAgIGlmIChzdGF0dXMuaXNHYW1lU2h1ZmZsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uR2FtZVNodWZmbGUoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHRoaXMub25HYW1lQ2hlY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbTFGbHlDYWxsQmFjaygpe1xyXG4gICAgICAgIC8vIOWIpOepulxyXG4gICAgICAgIHRoaXMubGV2ZWxzLmNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmcm9udENvbnRhaW5lcnMgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZnJvbnQnKS5jaGlsZHJlblxyXG4gICAgICAgICAgICBsZXQgaXNFbXB0eSA9IHRydWVcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBmcm9udENvbnRhaW5lcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdvb2RzQ29udGFpbmVyID0gZnJvbnRDb250YWluZXJzW2pdXHJcbiAgICAgICAgICAgICAgICBpZiAoZ29vZHNDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoJ0dvb2RzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmFjayB0byBmcm9udCcpXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZ2V0Q29tcG9uZW50KENvbnRhaW5lcikuYmFja1RvRnJvbnQoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFja0NvbnRhaW5lcnMgPSBjb250YWluZXIubm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmFjaycpLmNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXNFbXB0eSA9IHRydWVcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYmFja0NvbnRhaW5lcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnb29kc0NvbnRhaW5lciA9IGJhY2tDb250YWluZXJzW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdvb2RzQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKCdHb29kcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ludCBiYWNrJylcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuZ2V0Q29tcG9uZW50KENvbnRhaW5lcikuaW5pdEJhY2soKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNoZWNrR2FtZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=