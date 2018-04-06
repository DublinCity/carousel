const createImgTag = (src) => {
    const imgContainer = document.createElement("img");
    imgContainer.src = src;
    return imgContainer;
};

export default createImgTag