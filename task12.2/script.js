class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeDiv(text) {
        document.body.innerHTML = `<div class = "div">${text}</div>`;
        let div = document.querySelector('.div');
        div.style.cssText = `height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        text-align: ${this.textAlign};`;
    }
}

let obj = new Options('800px','900px','red','24px','center');
obj.makeDiv("test");
