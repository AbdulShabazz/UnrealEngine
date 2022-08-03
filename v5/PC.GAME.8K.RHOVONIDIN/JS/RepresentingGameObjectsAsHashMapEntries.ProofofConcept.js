/*

AUTHOR
    Seagat2011 (https://github.com/Seagat2011)
    AbdulShabazz (https://github.com/AbdulShabazz)

DESCRIPTION
    Representing objects as hash map entries (A Performant proof-of-concept)

    Objects are convenient for the distillation and categorization of data, 
    for representation and later data-retrieval, however object attribute and methods, 
    represented at the assembly-lanugage level, as relative addresses, is not an optimal 
    memory access, when compared to direct-access -- which facilited the introduction of 
    hash maps! In most cases, hash maps and caching assignments reduce this performance impact!

BROWSER
    Firefox 101+

*/

Result.value = ""
function Clock()
{
    return new Date().getTime()
}
let currval = 0
let lastval = Clock()
let GameEngine = { CharacterAnimationLibrary: { RhovonidinAbilitiesStruct: { DamageAnimStruct:null }}}
for(let i = 0; i < 10e6; i++)
{
    GameEngine.CharacterAnimationLibrary.RhovonidinAbilitiesStruct.DamageAnimStruct = { index:0, data:0x1324fe }
}
currval = Clock()
Result.value += `${ (currval  - lastval) }\n`
lastval = currval
let Setting = { index:0, data:0x1324fe }
// cache assignments for up to 3.5x speedup //
for(let i = 0; i < 10e6; i++)
{
    GameEngine["CharacterAnimationLibrary.RhovonidinAbilitiesStruct.DamageAnimStruct"] = Setting
}
currval = Clock()
Result.value += `${ (currval  - lastval) }\n`
lastval = currval
let GameEngineSetting = GameEngine["CharacterAnimationLibrary.RhovonidinAbilitiesStruct.DamageAnimStruct"]
// Cache Object and assignments for up to 6x speedup //
for(let i = 0; i < 10e6; i++)
{
    GameEngineSetting = Setting
}
currval = Clock()
Result.value += `${ (currval  - lastval) }\n`