// 保存项目的一些配置信息，方便修改
module.exports = {
    // 限制群名，只在特定群内回复
    groupList: ["一个人的群聊", "年轻人"],
    // 机器人回复前缀
    robotSuffix: '🤖',
    // 数据库地址
    mongoDB: 'mongodb://localhost:20217/wechatrobot',
    // log4js 配置
    log4js: {
        "appenders": [{
            "type": "clustered",
            "appenders": [{
                "type": "console"
            }, {
                "type": "dateFile",
                "filename": "logs/access.log",
                "pattern": "-yyyy-MM-dd",
            }, {
                "type": "file",
                "filename": "logs/app.log",
                "maxLogSize": 10485760,
                "numBackups": 3
            }, {
                "type": "logLevelFilter",
                "level": "ERROR",
                "appender": {
                    "type": "file",
                    "filename": "logs/errors.log"
                }
            }]
        }]
    },
    // 心知天气API密钥
    weatherAPIKey: 'rjpchbvb5bdfx0yo',
    // 百度AI应用 API Key
    baiduApiKey: 'foOxXrjISvpgbv3zkhwstjVu',
    // 百度AI应用 Secret Key
    baiduSecretKey: 'jLFMLuZ4yZHykZgqGC8kDeHbuGcABi7x',
    // 聚合数据，获取笑话的key
    jokeKey: 'f465821c2906a83971b89619b59ff5fb',
    // 聚合数据，问答类的key
    qAndAKey: '1dde1252284a744543bb50b90b1b1f02'
};