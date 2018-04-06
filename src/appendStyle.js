const appendStyle = style => nextTag => {
    if (style) {
      Object.keys(style).forEach(key => {
        nextTag.style[key] = style[key];
      });
    }
    return nextTag;
};

export default appendStyle