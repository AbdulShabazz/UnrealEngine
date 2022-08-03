/*

  Copyright (c) 2022 - AbdulShabazz -  All rights reserved.

  TITLE
    Scene Heading Validation Tool

  AUTHOR
    AbdulShabazz https://github.com/AbdulShabazz

  VERSION
    Major.Minor.Bugfix.Patch
    1.0.0.0

  DESCRIPTION
    Validation Tool for Screenplay Scene Headings

  INPUT
    **EXT. VALLEY - DAY**
    .
    .
    .
    FADE OUT

  OUTPUT
    **EXT. VALLEY - DAY**
    **EXT. SOUTHERN VALLEY - DAY**
    **EXT. NORTHERN VALLEY - DAY**

  NOTES
    N/A

*/
let __DEBUG__ = true
let __msg__ = console.log
let __info__ = function(u) { Result.value = u }
if(Data.value.length){
    let src = Data.value.match(/\*\*\w+\.[\s\w-]+\*\*/g).map
    (
        (u,i,me)=>
        {
            return u
        }
    ).join('\n') ;
    __info__(src)
}