"use strict";
cc._RF.push(module, '50f2e0oDptJt4SjWGm8di2L', 'Enum');
// scripts/Enum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_CONTAINER_POSTION = exports.ENUM_GOODS_TYPE = exports.ENUM_CONTAINER_TYPE = exports.ENUM_LEVEL_DIFFICULTY = exports.ENUM_LEVEL_TYPE = exports.ENUM_RESOURCE_TYPE = exports.ENUM_GAME_EVENT = exports.ENUM_UI_TYPE = exports.ENUM_AUDIO_CLIP = exports.ENUM_GAME_LOSE_TYPE = exports.ENUM_GAME_STATUS = void 0;
// 状态
var ENUM_GAME_STATUS;
(function (ENUM_GAME_STATUS) {
    ENUM_GAME_STATUS["UNRUNING"] = "UNRUNING";
    ENUM_GAME_STATUS["WIN"] = "WIN";
    ENUM_GAME_STATUS["LOSE"] = "LOSE";
    ENUM_GAME_STATUS["RUNING"] = "RUNING";
})(ENUM_GAME_STATUS = exports.ENUM_GAME_STATUS || (exports.ENUM_GAME_STATUS = {}));
//失败类型
var ENUM_GAME_LOSE_TYPE;
(function (ENUM_GAME_LOSE_TYPE) {
    ENUM_GAME_LOSE_TYPE["TIME"] = "TIME";
    ENUM_GAME_LOSE_TYPE["CLEAR"] = "CLEAR";
})(ENUM_GAME_LOSE_TYPE = exports.ENUM_GAME_LOSE_TYPE || (exports.ENUM_GAME_LOSE_TYPE = {}));
// 音效
var ENUM_AUDIO_CLIP;
(function (ENUM_AUDIO_CLIP) {
    ENUM_AUDIO_CLIP["BGM"] = "bgm";
    ENUM_AUDIO_CLIP["CLICK"] = "click";
    ENUM_AUDIO_CLIP["LOSE"] = "lose";
    ENUM_AUDIO_CLIP["WIN"] = "win";
    ENUM_AUDIO_CLIP["COLLECT"] = "collect";
    ENUM_AUDIO_CLIP["TIMER"] = "timer";
    ENUM_AUDIO_CLIP["COLLECT_POWER"] = "collect_power";
    ENUM_AUDIO_CLIP["LEVEL_UP"] = "level_up";
    ENUM_AUDIO_CLIP["GET_IN"] = "get_in";
    ENUM_AUDIO_CLIP["GET_OUT"] = "get_out";
    ENUM_AUDIO_CLIP["CLEAR"] = "clear";
    ENUM_AUDIO_CLIP["SHUFFLE"] = "shuffle";
    ENUM_AUDIO_CLIP["SKILL_TIME"] = "skill_time";
    ENUM_AUDIO_CLIP["SKILL_DELETE"] = "skill_delete";
    ENUM_AUDIO_CLIP["MONEY"] = "money";
    ENUM_AUDIO_CLIP["UNLOCK"] = "unlock";
})(ENUM_AUDIO_CLIP = exports.ENUM_AUDIO_CLIP || (exports.ENUM_AUDIO_CLIP = {}));
// ui层
var ENUM_UI_TYPE;
(function (ENUM_UI_TYPE) {
    ENUM_UI_TYPE["MENU"] = "MenuLayer";
    ENUM_UI_TYPE["MAIN"] = "MainLayer";
    ENUM_UI_TYPE["SETTING"] = "SettingDialog";
    ENUM_UI_TYPE["LOSE"] = "LoseDialog";
    ENUM_UI_TYPE["WIN"] = "WinDialog";
    ENUM_UI_TYPE["RANK"] = "RankListDialog";
    ENUM_UI_TYPE["ICE"] = "IceLayer";
    ENUM_UI_TYPE["START"] = "StartDialog";
    ENUM_UI_TYPE["ITEM"] = "ItemDialog";
    ENUM_UI_TYPE["ITEMUNLOCK"] = "ItemUnlockDialog";
    ENUM_UI_TYPE["ADDHEART"] = "AddHeartDialog";
})(ENUM_UI_TYPE = exports.ENUM_UI_TYPE || (exports.ENUM_UI_TYPE = {}));
// 事件
var ENUM_GAME_EVENT;
(function (ENUM_GAME_EVENT) {
})(ENUM_GAME_EVENT = exports.ENUM_GAME_EVENT || (exports.ENUM_GAME_EVENT = {}));
// 资源
exports.ENUM_RESOURCE_TYPE = ([
    { content: cc.Node, path: 'i18n', type: 'i18n', ratio: 0.1 },
    { content: cc.AudioClip, path: 'audio', type: 'audio', ratio: 0.3 },
    { content: cc.Prefab, path: 'prefab', type: 'prefab', ratio: 0.3 },
    { content: cc.SpriteFrame, path: 'sprite', type: 'sprite', ratio: 0.3 }
]);
//关卡类型
var ENUM_LEVEL_TYPE;
(function (ENUM_LEVEL_TYPE) {
    ENUM_LEVEL_TYPE[ENUM_LEVEL_TYPE["NORMAL"] = 0] = "NORMAL";
    ENUM_LEVEL_TYPE[ENUM_LEVEL_TYPE["MOVE"] = 1] = "MOVE";
    ENUM_LEVEL_TYPE[ENUM_LEVEL_TYPE["UPDOWN"] = 2] = "UPDOWN"; //上下移动
})(ENUM_LEVEL_TYPE = exports.ENUM_LEVEL_TYPE || (exports.ENUM_LEVEL_TYPE = {}));
//关卡难度
var ENUM_LEVEL_DIFFICULTY;
(function (ENUM_LEVEL_DIFFICULTY) {
    ENUM_LEVEL_DIFFICULTY[ENUM_LEVEL_DIFFICULTY["EASY"] = 0] = "EASY";
    ENUM_LEVEL_DIFFICULTY[ENUM_LEVEL_DIFFICULTY["SIMPLE"] = 1] = "SIMPLE";
    ENUM_LEVEL_DIFFICULTY[ENUM_LEVEL_DIFFICULTY["NORMAL"] = 2] = "NORMAL";
    ENUM_LEVEL_DIFFICULTY[ENUM_LEVEL_DIFFICULTY["DIFFICULT"] = 3] = "DIFFICULT";
    ENUM_LEVEL_DIFFICULTY[ENUM_LEVEL_DIFFICULTY["DEAD"] = 4] = "DEAD"; //必死
})(ENUM_LEVEL_DIFFICULTY = exports.ENUM_LEVEL_DIFFICULTY || (exports.ENUM_LEVEL_DIFFICULTY = {}));
//货架类型
var ENUM_CONTAINER_TYPE;
(function (ENUM_CONTAINER_TYPE) {
    ENUM_CONTAINER_TYPE[ENUM_CONTAINER_TYPE["NORMAL"] = 0] = "NORMAL";
    ENUM_CONTAINER_TYPE[ENUM_CONTAINER_TYPE["MOVE"] = 1] = "MOVE";
    ENUM_CONTAINER_TYPE[ENUM_CONTAINER_TYPE["REGULAR"] = 2] = "REGULAR";
    ENUM_CONTAINER_TYPE[ENUM_CONTAINER_TYPE["UP"] = 3] = "UP";
    ENUM_CONTAINER_TYPE[ENUM_CONTAINER_TYPE["DOWN"] = 4] = "DOWN";
    ENUM_CONTAINER_TYPE[ENUM_CONTAINER_TYPE["LOCK"] = 10] = "LOCK"; //普通加锁货架
})(ENUM_CONTAINER_TYPE = exports.ENUM_CONTAINER_TYPE || (exports.ENUM_CONTAINER_TYPE = {}));
//商品大类型
var ENUM_GOODS_TYPE;
(function (ENUM_GOODS_TYPE) {
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["BEVERAGE"] = 1] = "BEVERAGE";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["DAILY"] = 2] = "DAILY";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["FOOD"] = 3] = "FOOD";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["LETTER"] = 4] = "LETTER";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["PLANT"] = 5] = "PLANT";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["SNACKFOODS"] = 6] = "SNACKFOODS";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["TOY"] = 7] = "TOY";
    ENUM_GOODS_TYPE[ENUM_GOODS_TYPE["JUICE"] = 8] = "JUICE"; //果汁
})(ENUM_GOODS_TYPE = exports.ENUM_GOODS_TYPE || (exports.ENUM_GOODS_TYPE = {}));
//货架所在位置
var ENUM_CONTAINER_POSTION;
(function (ENUM_CONTAINER_POSTION) {
    ENUM_CONTAINER_POSTION[ENUM_CONTAINER_POSTION["LEFT"] = 0] = "LEFT";
    ENUM_CONTAINER_POSTION[ENUM_CONTAINER_POSTION["RIGHT"] = 1] = "RIGHT";
    ENUM_CONTAINER_POSTION[ENUM_CONTAINER_POSTION["CENTER"] = 2] = "CENTER"; //右边货架
})(ENUM_CONTAINER_POSTION = exports.ENUM_CONTAINER_POSTION || (exports.ENUM_CONTAINER_POSTION = {}));

cc._RF.pop();