const getWidthAndMultiply = (tag, times) => {
    return parseInt(tag.style.width, 10) * times;
};

export default getWidthAndMultiply