//默认导出
export default 1; 
//默认导入
import xx from './x.js';

//命名导出
export const a = 1;

const b = 2;
export {
    b
}
//命名导入
import {a, b} from '../js';