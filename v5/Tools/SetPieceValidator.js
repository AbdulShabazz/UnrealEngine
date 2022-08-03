/*

  Copyright (c) 2022 - AbdulShabazz -  All rights reserved.

  TITLE
    SetPiece Validation Tool

  AUTHOR
    AbdulShabazz https://github.com/AbdulShabazz

  DESCRIPTION
    Validation Tool for Screenplay Sequence Outlines

  INPUT
    PINCH [0.0.3] Bar Hades is defeated at The UltraDam (45)  
    PINCH [0.1.3] Bar Hades defends The UltraDam! He defeats Bar Hades,  and the UltraDam is destroyed (45)  
    CRISIS [1.1.4] Lance defeats Meade, then Bar Hades and the UltraDam is destroyed  
    CRISIS [2.0.4] Bar Hades is defeated at UltraDam  
    PINCH [2.1.3] Lt. Sheeran destroys the UltraDam (45)  
    PINCH [3.1.3] The UltraDam is destroyed  

  OUTPUT
    Validated!

  VERSION
    Major.Minor.Bugfix.Patch
    1.0.0.0

  NOTES
    N/A

*/
let __DEBUG__ = true
let __msg__ = console.log
let __info__ = function(u){ Result.value =  u }
if(Data.value.length){
    let tmp = {} ;
    let err = [] ;
    let src = Data.value.match( /\[([\d+\.])+\]/g ) ;
    src.map((u,i,me)=>{
        if(u in tmp){
            err.push( `Error: ${u} occurrences (${ ++tmp[u] })` )
        } else {
            tmp[u] = true ;
        }
        let idc = u.match(/\d+/g) ;
        const jj = idc.length - 1;
        let _myTest_ = `[${ idc.map((v,j,metoo)=>{ 
            switch(j){
                case jj: ++v
            }
            return v
        }).join('.') }]`
        if (_myTest_ in tmp){
            err.push(`Error: ${_myTest_} occurs before ${u}; ${u} must occur before ${_myTest_}`)
        }
        return u
    }) ;
    let ret = err.join('\n');
    __info__( ret || 'Validated!' )
}