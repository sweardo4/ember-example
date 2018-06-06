import { helper } from '@ember/component/helper';
// 监测模块是否有模型
export function monitorDecideField(params/*, hash*/) {
  let field = params[0]
  if(JSON.stringify(field) === '{}')
  return "没有模型!";
}

export default helper(monitorDecideField);
