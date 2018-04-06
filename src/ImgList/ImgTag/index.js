import compose from "../../compose";
import createImgTag from "./createImgTag";
import appendStyle from "../../appendStyle";
import imgTagStyle from "./imgTagStyle.json"

export default compose(createImgTag, appendStyle(imgTagStyle))