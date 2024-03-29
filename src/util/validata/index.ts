// 手机号正则验证
export const mobileReg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
// 身份证正则验证
export const idCardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
// 超链接正则验证
export const linkReg = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/;
// email正则验证
export const emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

export const checkMobile = (val: string) => mobileReg.test(val);
export const checkIdCard = (val: string) => idCardReg.test(val);
export const checkLink = (val: string) => linkReg.test(val);
export const checkEmail = (val: string) => emailReg.test(val);

/**
 * isObject
 * @param value
 * @returns
 */
export const isObject = (value: any) => Object.prototype.toString.call(value) === "[object Object]";

/**
 * isString
 * @param value
 * @returns
 */
export const isString = (value: any) => Object.prototype.toString.call(value) === "[object String]";

/**
 * isNumber
 * @param value
 * @returns
 */
export const isNumber = (value: any) => Object.prototype.toString.call(value) === "[object Number]";

/**
 * isArray
 * @param value
 * @returns
 */
export const isArray = (value: any) => Object.prototype.toString.call(value) === "[object Array]";
