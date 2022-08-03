

function WebTools()
{
    // PROTO //
}

WebTools.prototype = {}

WebTools.loadFile = function( fname, sync, onLoad, onProgress, onError )
{
    sync = (sync && (sync.toString() == 'true')) ? true : false ;

    var file = new XMLHttpRequest();
    file.overrideMimeType("application/octet-stream");
    file.open("GET", fname, sync);

    if(onLoad !== undefined)
    {
        file.onload = function()
        {
            onLoad(file.response)
        }
    }

    (onProgress !== undefined) && ( file.onprogress = onProgress )
    (onError !== undefined) && ( file.onerror = onError )

    file.send(null);

    return sync === true ? file.response : null ;
}

WebTools.unloadFile = function( fname, sync, data, onLoad, onProgress, onError )
{
    sync = (sync && (sync.toString() == 'true')) ? true : false ;

    var file = new XMLHttpRequest()
    file.overrideMimeType("text/plain")
    file.open("PUT", fname, sync)

    if(onLoad !== undefined)
    {
        file.onload = function()
        {
            onLoad(file.response)
        }
    }

    (onProgress !== undefined) && ( file.onprogress = onProgress )
    (onError !== undefined) && ( file.onerror = onError )

    file.send(data);

    return sync === true ? file.response : null ;
}

WebTools.loadJSON = function( fname, body )
{
    this.loadFile( fname, false,
        function(res)
        {
            var _
            OBJ = JSON.parse( res )
            var arr = [ '<table><tbody>' ] ;
            var textDESC = [] ;
            var textAMT = [] ;
            var textGPS = [] ;
            arr.push( 
                `<tr><td>version: </td><td>${ OBJ.version }</td></tr>`,
                
                `<tr><td>application-name: </td>
                <td>${ OBJ['application-name'] }</td></tr>`,
                
                `<tr><td><b>Inventory</b></td>
                <td><b>Amounts</b></td>
                <td><b>Location</b></td>
                <td><input type=button onclick="WebTools.unloadJSON( '${FNAME}', OBJ )" value='Save & Close' /></td></tr>`,
                
                '</tbody></table><hr>' )
            OBJ.inventory.map(
                function( u,i,me )
                {
                    textDESC.push( u[ SCHEMA.item ] )
                    textAMT.push( u[ SCHEMA.count ] )
                    textGPS.push( u[ SCHEMA.gps ] )
                    return u
                }
            )
            arr.push( `<div onmousemove="update( 'editor' )">
                <textarea id=_desc>${textDESC.join('\n')}</textarea> 
                <textarea id=_amt>${textAMT.join('\n')}</textarea> 
                <textarea id=_gps>${textGPS.join('\n')}</textarea></div>` )
            body.innerHTML = arr.join( '' )
        } )
}

WebTools.unloadJSON = function( fname, obj )
{
    var blob = new Blob([ JSON.prettystringify( obj ) ], {type:"octet/stream"});

    var download = document.createElement("a");
    download.download = fname;
    download.href = window.URL.createObjectURL(blob);
    download.style.display = "none";
    download.onclick = function()
    {
        document.body.removeChild(this);
    }
    document.body.appendChild(download);
    download.click();
}