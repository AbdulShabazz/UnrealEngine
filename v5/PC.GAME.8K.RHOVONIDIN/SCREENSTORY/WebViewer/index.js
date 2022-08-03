
let bOpenScope = false

Object.prototype.entag = function( u, bDialogueScope, v ){
    let ret = u
    if( !bDialogueScope && !bOpenScope )
        ret = `<${ u }>${ this }</${ u }>`
    else if ( bDialogueScope && !bOpenScope ){
        let u_close = `</${u}>`
        let v_open = `<${v}>`
        ret = `<${ u }>${ this.replace( /\r/, u_close + v_open ) }`
        bOpenScope = true
    } else if( bDialogueScope && bOpenScope ) {
        ret = this + `</${ v }>`
        bOpenScope = false
    }
    return ret
}

Object.prototype.formatSTREAM = function(){
    return this
        .split(/\n/g)
        .map(
            function(u,i,me){
                if( u.match(/\*\*/) ){
                    u = u.replace(/\*\*/g,'').entag('SCENE')
                } else if ( u.match(/\*/) ){
                    u = u.replace(/\*/g,'').entag('CHARACTER', true, 'DIALOGUE')
                } else if( !bOpenScope ) {
                    u = u.entag('BEAT')
                } 
                return u
            })
        .join(' ')
}

function cb_load( data ){
    Story.innerHTML = data.formatSTREAM()
}
function cb_progress( stat ){
    Story.innerText = "SUCCESS"
}
function cb_error( e ){
    Story.innerText += `\nAn error has occurred ${e}`
}
function Main( fn ){
    
    Title.innerText = fn.replace(/\..*$/,'')
    Story.innerText = "Loading file..."
    WebTools.loadFile( fn, null, cb_load, cb_progress, cb_error )
}