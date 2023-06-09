function volume(){
    const pi = 3.141;
    let r = parseFloat(document.getElementById("radius").value);
    let h = parseFloat(document.getElementById("height").value);
    document.getElementById("volume").value=pi*r*r*h;
}