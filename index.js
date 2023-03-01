/** 
 * Vector2 Library
 * See more at the github page: https://github.com/LeanLibDeveloper/vector2-Library
*/

$(document).ready(function(){
    export function vector2Set(object,newX,newY,newDir){
        object.element.css('left', `${newX}px`);
        object.element.css('top', `${newY}px`);
        object.element.css('transform', `rotate(${newDir}deg)`);
    }

    export function vector2GoTo(object,newX,newY){
        object.element.css('left', `${newX}px`);
        object.element.css('top', `${newY}px`);
    }
    
    export function vector2Follow(object, newObject){
        object.element.css('left', `${vector2Get(newObject, x)}`)
        object.element.css('top', `${vector2Get(newObject, y)}`)
    }

    export function vector2Add(object,addX,addY,addDir){
        object.element.css('left', (vector2Get(object, x) + addX) + 'px')
        object.element.css('top', (vector2Get(object, y) + addY) + 'px')
        object.element.css('transform', 'rotate(' + (vector2Get(object, dir) + addDir) + 'deg)');
    }
    
    export function vector2Get(object,e){
        if(e === 'x' || e === 'X'){
            return(parseInt(object.element.css('left')))
        }else if(e === 'y'|| e=== 'Y'){
            return(parseInt(object.element.css('top')))
        }else if(e === 'dir' || e === 'Dir' || e === 'direction' || e === 'Direction'){
            return parseInt(object.element.css("transform").match(/rotate\((\d+)deg\)/)[1]);
        }else{
            console.error(`'${e}' is not a dimensional position, use instead 'x' or 'y'`)
        }
    }

    export function vector2SetX(object, newX){
        object.element.css('left', `${newX}px`)
    }

    export function vector2AddX(object, addX){
        object.element.css('left', `${(vector2Get(object, x) + addX)}px`)
    }

    export function vector2SetY(object, newY){
        object.element.css('top', `${newY}px`)
    }

    export function vector2AddY(object, addY){
        object.element.css('top', `${(vector2Get(object, y) + addY)}px`)
    }
    
    export function vector2SetDir(object, newDir){
        object.element.css('transform', `rotate(${newDir}deg)`);
    }

    export function vector2AddDir(object, addDir){
        object.element.css('transform', `rotate(${(vector2Get(object, dir) + addDir)}deg)`);
    }

    export function vector2Move(object, distance){
        object.element.css('left', `${vector2AddX(object, (distance * (Math.sin(vector2Get(object, dir)))))}px`)
        object.element.css('top', `${vector2AddY(object, (distance * (Math.cos(vector2Get(object, dir)))))}px`)
    }
})