import ImgList from "../imgList.json";
// import createImgListTag from './ImgList/createImgListTag'

import createImgListTag from "./ImgList";
const container = document.getElementById("app");

const ImgListTag = createImgListTag(ImgList)
container.appendChild(ImgListTag)

setTimeout(() => {
    ImgListTag.nextImg()
}, 500);


// const carousel = createImgListTag(ImgList)

// appendCarousel(container, carousel)

// pure function