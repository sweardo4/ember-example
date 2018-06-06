import { helper } from '@ember/component/helper';
/**
 * @param {元组} params (string int)
 * 截取前num个字符 并在末尾加上... 
 */
export function sliceStr(params) {
  let str = params[0];
  let num = params[1];
  if(str){
    let temp = str.slice(0,num)+'...';
    return temp;
  }
  return null;
}

export default helper(sliceStr);
