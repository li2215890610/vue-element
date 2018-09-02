/**
 * 判断是否是邮箱
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 实例:
 *  if (!isEmail(value)) {
        alert('请输入正确的合法邮箱');
    } else {
        alert("输入邮箱不合法")
    }
 */
export function isEmail(str) {
    const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str.trim());
}

/**
 * 判断密码格式 
 * 200 验证通过 
 * 500 验证不通过
 * @param {*} 李广杨
 * @param {*} 2018-02-05
 * 如下:
 * 数字 0 ~ 9  a-z 支持小写a到z  A-Z支持大写A-Z  最小6位 最大 18位
 * 实例:
 *  if(isPassword(22222222) == 200){
        alert("密码合法")
    }else{
        alert("密码不合法")
    }
 */
export function isPassword(data) {
    let buyCardName = /^[0-9a-zA-Z]{6,18}$/;
    if (buyCardName.test(data) == true) {
        return 200
    } else {
        return 500
    }
}


/**
 * 身份证号正则
 * 200 验证通过 
 * 500 验证不通过 
 * @param {*} 李广杨
 * @param {*} 2018-02-27
 * 如下:
 * 18位正则验证 
 * 实例:
 *  if(isIdBOOL(22222222) == 200){
        alert("身份证合法")
    }else{
        alert("身份证不合法")
    }
 * 
 */
export function isIdBOOL(data) {
    //身份证号（18位）正则
    var ID = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    //输出 true
    // console.log(cP.test("11010519880605371X"));
    if (ID.test(data) == true) {
        return 200
    } else {
        return 500;
    }

}

/**
 * 手机号正则
 * 200 验证通过 
 * 500 验证不通过 
 * @param {*} 李广杨
 * @param {*} 2018-02-27
 * 如下:
 * 11 位正则验证
 * 实例:
 *  if(cellPhoneNumber(15203749527) == 200){
        alert("手机号正确")
    }else{
        alert("手机号不正确")
    }
 * 字段解释如下根据需求制定格式
 * ^1[3|4|5|8][0-9]\d{4,8}$ 
 * 
 * ^1代表以1开头，现在中国的手机号没有是其它开头的，以后不一定啊 
 *  [3|4|5|8] 紧跟上面的1后面，可以是3或4或5或8的一个数字，如果以后出现190开始的手机号码了，就需要如下[3|4|5|8|9] 
 *  [0-9]表示0-9中间的任何数字，可以是0或9 
 *  \d{4,8} 这个\d跟[0-9]意思一样，都是0-9中间的数字。{4,8}表示匹配前面的最低4位数字最高8位数字。
 */
export function cellPhoneNumber(data) {
    //手机号正则
    var cellPhoneNumbers = /^1[3|4|5|8][0-9]\d{4,8}$/;
    if (cellPhoneNumbers.test(data) == true) {
        return 200
    } else {
        return 500;
    }

}


/**
 * 只能输入中文
 * 200 验证通过 
 * 500 验证不通过 
 * @param {*} 李广杨
 * @param {*} 2018-02-27
 * 如下:
 * 11 位正则验证
 * 实例:
 *  if(chinese(15203749527) == 200){
        alert("正确")
    }else{
        alert("请输入中文")
    }
 */
export function chinese(data) {
    //中文
    var Chineses = /^[\u4e00-\u9fa5]+$/;
    if (Chineses.test(data) == true) {
        return 200
    } else {
        return 500;
    }
}


/**
 * 邮编正则 （仅限中国）
 * 200 验证通过 
 * 500 验证不通过 
 * @param {*} 李广杨
 * @param {*} 2018-02-27
 * 如下:
 * 11 位正则验证
 * 实例:
 *  if(zipCode(15203749527) == 200){
        alert("正确")
    }else{
        alert("不正确")
    }
 */
export function zipCode(data) {
    //邮编正则
    var Chineses = /[1-9]\d{5}(?!\d)/;
    if (Chineses.test(data) == true) {
        return 200
    } else {
        return 500;
    }
}







