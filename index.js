const add = document.getElementById("add");
let btn = document.getElementById("add");
let palette_ul = document.getElementById("palette-ul");
let i = 0;

class Colour{
    constructor (hex, element){
        this.hex = hex;
        this.element = element;
    }

    setHex(hex){
        this.hex = hex;
        this.element.style.backgroundColor = hex;
        this.element.querySelector('.color-input').value = hex;
    }
}

function New_Palette(){
    console.log("El boton add palette funciona");
    palette_ul.innerHTML = '';
}

function Add_Color_to_Palette(){
    let li = document.createElement("li");
    let color = document.createElement("button");

    color.className = "rect-box";
    const hex = GenerateHex();
    color.style.backgroundColor = hex;
    color.addEventListener('click', function(){
        copyToClipboard(hex);
    })
    li.appendChild(color);
    li.classList.add(`color`);
    i += 1;
    palette_ul.appendChild(li);
}

function GenerateHex(){
    const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}

function copyToClipboard(text) {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
}
