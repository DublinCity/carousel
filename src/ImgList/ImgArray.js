const ImgArray = (imgSrcArr) => {
    const index = 0;
    const length = imgSrcArr.length


    const nextImg = () => (index + length) % length
    const previousImg

    return {
        nextImg,
        previousImg
    }
}