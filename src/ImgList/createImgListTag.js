import ImgTag from './ImgTag'
import getWidthAndMultiply from '../getWidthAndMultiply'

const createImgListTag = (imgSrcArray) => {
    
    const fragment = document.createDocumentFragment();
    let imgListTag = document.createElement("div");
    
    
    for (let i = 0; i < imgSrcArray.length && i < 5; i++) {
      fragment.appendChild(ImgTag(imgSrcArray[i]));
    }
    
    imgListTag.appendChild(fragment);
    imgListTag.style.width = getWidthAndMultiply(
        imgListTag.childNodes[0],
        imgListTag.children.length
    )+10+'px';

    imgListTag.style.transition = "transform 2s"
    imgListTag.status = ""
    imgListTag.style.transform = `translateX(-${getWidthAndMultiply(imgListTag.childNodes[0],2)}px)`
    imgListTag.nextImg = () => {
        imgListTag.status = "next"
        imgListTag.style.transform = `translateX(-${getWidthAndMultiply(imgListTag.childNodes[0],3)}px)`
    }
    imgListTag.previousImg = () => {
        imgListTag.status = "previous"
        imgListTag.style.transform = `translateX(-${getWidthAndMultiply(imgListTag.childNodes[0],1)}px)`
    }

    imgListTag.addEventListener('transitionend',(e)=> {
        if(imgListTag.status === "next"){
            imgListTag.status = "";
            imgListTag.style.transition = ""
            imgListTag.style.transform = `translateX(-${getWidthAndMultiply(imgListTag.childNodes[0],2)}px)`
            imgListTag.removeChild(imgListTag.childNodes[0])
        }else if(imgListTag.status === "previous") {
            imgListTag.status = "";
            imgListTag.style.transition = ""
            imgListTag.style.transform = `translateX(${getWidthAndMultiply(imgListTag.childNodes[0],2)}px)`
            imgListTag.removeChild(imgListTag.childNodes[0])
        }
    })

    return imgListTag
};

export default createImgListTag
