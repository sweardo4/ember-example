import { helper } from '@ember/component/helper';

export function slicePart(params/*, hash*/) {
  let part = params[0]
  console.log(part);
  let temp = part.split('_');
  
  return temp[1];
}

export default helper(slicePart);
