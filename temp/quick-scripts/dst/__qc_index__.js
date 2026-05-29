
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Constants');
require('./assets/scripts/Enum');
require('./assets/scripts/Index');
require('./assets/scripts/StaticInstance');
require('./assets/scripts/Utils');
require('./assets/scripts/config/LevelsConfig');
require('./assets/scripts/datacenter/GameData');
require('./assets/scripts/datacenter/ItemData');
require('./assets/scripts/datacenter/LevelData');
require('./assets/scripts/datacenter/RankInfo');
require('./assets/scripts/datacenter/SettingData');
require('./assets/scripts/framework/EffectFlyManager');
require('./assets/scripts/framework/NativeUtils');
require('./assets/scripts/framework/SpriteFrameCache');
require('./assets/scripts/framework/SystemData');
require('./assets/scripts/framework/utils/CommonTool');
require('./assets/scripts/framework/utils/DateUtil');
require('./assets/scripts/game/Container');
require('./assets/scripts/game/Goods');
require('./assets/scripts/game/Levels');
require('./assets/scripts/i18n/i18nLabel');
require('./assets/scripts/i18n/i18nManage');
require('./assets/scripts/layer/AddHeartDialog');
require('./assets/scripts/layer/BaseDialog');
require('./assets/scripts/layer/HeaderDialog');
require('./assets/scripts/layer/IceLayer');
require('./assets/scripts/layer/ItemDialog');
require('./assets/scripts/layer/ItemUnlockDialog');
require('./assets/scripts/layer/LoadingLayer');
require('./assets/scripts/layer/LoseDialog');
require('./assets/scripts/layer/MainLayer');
require('./assets/scripts/layer/MenuLayer');
require('./assets/scripts/layer/RankListDialog');
require('./assets/scripts/layer/SettingDialog');
require('./assets/scripts/layer/StartDialog');
require('./assets/scripts/layer/WinDialog');
require('./assets/scripts/manager/AudioManager');
require('./assets/scripts/manager/DataManager');
require('./assets/scripts/manager/EffectManager');
require('./assets/scripts/manager/EventManager');
require('./assets/scripts/manager/FadeManager');
require('./assets/scripts/manager/GameManager');
require('./assets/scripts/manager/PoolManager');
require('./assets/scripts/manager/ResourceManager');
require('./assets/scripts/manager/SdkManager');
require('./assets/scripts/manager/ToastManager');
require('./assets/scripts/manager/UIManager');
require('./assets/scripts/plugins/UIScrollControl');
require('./assets/scripts/rank/Rank');
require('./assets/scripts/rank/RankItem');
require('./assets/scripts/rank/RankLisClasst');
require('./assets/scripts/ui/Tip');

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