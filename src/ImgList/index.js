import compose from "../compose";
import createImgListTag from "./createImgListTag";
import appendStyle from "../appendStyle";
import imgListTagStyle from './imgListTagStyle.json'

export default compose(createImgListTag, appendStyle(imgListTagStyle))