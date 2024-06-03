// hexadecimal to RGB
function hex2RGB(hex){
    hex = hex.replace(/^#/, '');
    let bgInt = parseInt(hex, 16);
    let r = (bgInt >> 16) & 255;
    let g = (bgInt >> 8) & 255;
    let b = bgInt & 255;
    return[r, g, b];
  }
  console.log(hex2RGB('#696969'))