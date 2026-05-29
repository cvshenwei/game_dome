"use strict";
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