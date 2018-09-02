/**
 * 定义过滤器
 * @param {*} 李广杨
 * @param {*} 2018-02-02
 */


/**
 * 时间戳转换时间 
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 */
export function timeStampConversionTime(str) {
    //时间戳转换成日期
    /*
     * nS:为传进来的时间戳
     * type:时间显示模式.若传入12则为12小时制,不传入则为24小时制
     */
    // 声明 年月日时分秒
    var Y, M, D, W, H, I, S;
    //月日时分秒为单位时前面补零
    function fillZero(v) {
        if (v < 10) { v = '0' + v; }
        return v;
    }
    var d = new Date(parseInt(nS / 1000) * 1000);
    var Week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    Y = d.getFullYear();
    M = fillZero(d.getMonth() + 1);
    D = fillZero(d.getDate());
    W = Week[d.getDay()];
    H = fillZero(d.getHours());
    I = fillZero(d.getMinutes());
    S = fillZero(d.getSeconds());
    //12小时制显示模式
    if (type && type == 12) {
        //若要显示更多时间类型诸如中午凌晨可在下面添加判断
        if (H <= 12) {
            H = '上午&nbsp;' + H;
        } else if (H > 12 && H < 24) {
            H -= 12;
            H = '下午&nbsp;' + fillZero(H);
        } else if (H == 24) {
            H = '下午&nbsp;00';
        }
    }
    var localTime = Y + '年' + M + '月' + D + '日 ' + H + ':' + I + ':' + S; //获取带 年月日单位 
    var localTime1 = Y + '年' + M + '月' + D + '日 ' + H + ':' + I + ':' + S + W; //获取年月日 加 星期几
    var localTimes = Y + '-' + M + '-' + D + ' ' + H + ':' + I + ':' + S; //转换当前时间 yyyy-MM-dd hh:mm:ss
    return localTimes;
}


/**
 * 过滤 男女
 * 1 是男 
 * 2 是女
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 */
export function JudgeMenAndWomen(data) {
    if (data == '1') {
        return "男"
    }
    else if (data == '2') {
        return "女"
    }else{
        return "暂无数据"
    }
}


/**
 *  判断后台返回数据为 空 或者 null 或者 undefined  
 * 
 * @param {*} 李广杨
 * @param {*} 2018-02-27
 */
export function isNoData(data) {
    if (data == '' || data == null || data == undefined) {
        return "暂无数据"
    } else {
        return data
    }
}
