const dayjs = require('dayjs');
const fs = require('fs');

/**
 * @description 格式化时间为字符串
 * @param {Date} date 需要格式化的时间
 * @param {String} str 格式化格式
 * @return {String} 返回格式化后的日期字符串
 */
const formatDate = (date, str = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(date).format(str);
}

/**
 * @description 生成 start 到 end 的随机整数，两个都包含：[start, end]
 * @param {Number} start 开始
 * @param {Number} end 结束
 * @return {Number} 随机数
 */
const randomNum = (start, end) => {
    const muit = end - start;
    return Math.round(Math.random() * muit + start)
}

/**
 * @description 同步读取文件方法，返回读取到的数据，用于读取知识库文件下的数据文件
 * @param {String} fileName 文件名
 * @return {Object} 文件数据对象
 */
const readJsonFile = (fileName) => {
    return JSON.parse(fs.readFileSync(`${process.cwd()}/knowledge/${fileName}.json`, { encoding:'utf-8' }));
}

/**
 * @description 获取路径下的数据
 * @param {String} path 路径
 * @return {Array} 文件列表数组
 */
const readDirData = (path) => {
    return fs.readdirSync(path, { encoding:'utf-8' });
}

/**
 * @description 判断一个用户是否在提及列表中
 * @param {Array<MentionInfo>} list 提及对象的信息列表
 * @param {String} name 需要判断的对象名字
 * @return {Boolean} 返回是否被提及
 */
const mentioned = (list, name) => {
    let result = false;
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) {
            result = true;
            break;
        }
    }
    return result;
}

// 判断是否是 @ 机器人
const checkAtRobot = (username, content) => {
    let flag = false;
    const isAt = /\@/g.test(content);
    if (isAt) {
        const _space = returnSpace(content);
        const _username = (content.split('@')[1]).split(_space)[0];
        if (username === _username) {
            flag = true;
        }
    }
    return flag;
}

/**
 * 
 * @param {*} con 
 */
const returnSpace = (con) => {
    const _str = con.split('@')[1];
    return _str.indexOf(' ') > -1 ? ' ' : ' ';
}

module.exports = {
    formatDate,
    randomNum,
    readJsonFile,
    readDirData,
    mentioned,
};