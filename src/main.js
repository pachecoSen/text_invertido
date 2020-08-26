"use strict"

class Main{
    constructor(){
        this.text = "";
    }

    setText(strText){
        this.text = strText;

        return this;
    }

    process(){
        let cadenas = [this.text], est = true;

        while(true === est){
            const cadena = cadenas[cadenas.length-1];
            const ids = this.indexString(cadena, '(');
            est = 0 < ids.length;
            if(true === est){
                const seg = cadena.slice(ids[ids.length-1]);
                const fin = seg.indexOf(')');
                const original = seg.slice(1, fin);
                const inverso = original.split('').reverse().join('');
                const newSeg = seg.replace(`(${original})`, inverso);
                cadenas.push(cadena.replace(seg, newSeg));
            }
        }

        return cadenas;
    }

    indexString(cadena, elemento){
        let index = [];
        let refIndex = cadena.indexOf(elemento);
        while(refIndex != -1){
            index.push(refIndex);
            refIndex = cadena.indexOf(elemento, refIndex+1);
        }

        return index;
    }
}

module.exports = Main;