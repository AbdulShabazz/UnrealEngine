/* Copyright 2022 - All Rights Reserved - GPL 2.0 License

AUTHOR
    Seagat2011      https://github.com/Seagat2011
    AbdulShabazz    https://github.com/AbdulShabazz

DESCRIPTION
    Rule-based Terrain Generation Tool

INPUT
    [
      "Taiga","Forest","Savannah","Forest","SeasonalForest","RainForest","\n",
      "Tundra","Taiga","Forest","SeasonalForest","Swamp","RainForest","\n",
      "Taiga","Forest","Savannah","","SeasonalForest","RainForest","\n",
      "Forest","Woods","Desert","Woods","","RainForest","\n"
    ]

OUTPUT  
    [
       "Taiga","Forest","Savannah","Forest","SeasonalForest","RainForest",
       "Tundra","Taiga","Forest","SeasonalForest","Swamp","RainForest",
       "Taiga","Forest","Savannah","Forest","SeasonalForest","RainForest",
       "Forest","Woods","Desert","Woods","Forest","RainForest"
    ]


BROWSER
    Firefox 101+

*/

function __info__(s)
{
  Result.value += `${s}\n`
}
// me.insertAt([17],["SUCCESS!"])
Array.prototype.insertAt = function(arr,fe)
{
  let ret = []
  let self = this
  let j = 0
  self.map
  (
    (u,i,me)=>
    {
      ret.push(i == arr[j] ? fe[j++] : u)
      return u
    }
  )
  return ret
}
let ValidTerrainOBJ = {}

let ValidTerrainARRAY = 
[
  "RainForest", "Swamp", "Taiga", "Tundra",
  "SeasonalForest", "Forest", "Taiga", "Tundra",
  "Savannah", "Woods", "Taiga", "Tundra",
  "Desert", "Desert", "GrassDesert", "Tundra" // Note: Desert cannot reach beyond Woods
]

ValidTerrainOBJ[ "RainForest" ] = { "Swamp":true, "SeasonalForest":true, "Forest":true}
ValidTerrainOBJ[ "Swamp" ] = { "RainForest":true, "SeasonalForest":true, "Forest":true }
ValidTerrainOBJ[ "SeasonalForest" ] = { "RainForest":true, "Swamp":true, "Forest":true }
ValidTerrainOBJ[ "Forest" ] = { "RainForest":true, "Swamp":true, "Taiga":true, "Woods":true, "Savannah":true, "SeasonalForest":true }
ValidTerrainOBJ[ "Savannah" ] = { "SeasonalForest":true, "Forest":true, "Woods":true, "Desert":true }
ValidTerrainOBJ[ "Woods" ] = { "SeasonalForest":true, "Forest":true, "Taiga":true, "GrassDesert":true, "Desert":true, "Savannah":true }
ValidTerrainOBJ[ "Taiga" ] = { "Forest":true, "Woods":true, "GrassDesert":true, "Tundra":true }
ValidTerrainOBJ[ "Desert" ] = { "Savannah":true, "Woods":true, "GrassDesert":true }
ValidTerrainOBJ[ "GrassDesert" ] = { "Desert":true, "Woods":true, "Taiga":true, "Tundra":true }
ValidTerrainOBJ[ "Tundra" ] = { "Taiga":true, "Desert":true }

let reset = "Forest"
let temp = JSON.parse(Data.value)
let me = []
let I
temp.map
(
  (u,i,my)=>
  {
    !u.match('\n') && me.push(u || reset)
    I == null && u.match('\n') && (I = i)
    return u
  }
)
let J = (me.length / I).toFixed(0) // __info__(`I:${I} J:${J} me:${me.length}`)
let K = me.length
let maxcelltraversal = Math.min(I, J)
let _9CellTraversal_ = 2 < maxcelltraversal 
let _6CellTraversal_ = 1 < maxcelltraversal 
let _3CellTraversal_ = !(_6CellTraversal_ && _9CellTraversal_)
let keys = Object.keys(ValidTerrainOBJ)
let xbuffer = me[0]
let root = me[0]
for(let i = 0; i < me.length; i++)
{
    let bit = ''
    let k = i+1
    let bumpEnd = (i % K)
    let u = me[i] || xbuffer // __info__(`u:${u},me[k]:${!bumpEnd ? me[k] : 'Unused'}`)
    (i%K == 0) && (u != root) && (u = root) ;
    if(!bumpEnd && !ValidTerrainOBJ[u][me[k]])
    {
        let err = me[k]
        let it = [] ;
        keys.map
        (
            (w,r,obj)=>
            { 
                ValidTerrainOBJ[u][w] && it.push(w)
                return w 
            }
        )
      throw __info__(`Error at index ${k}: Received "${err}"! Expected "${it}"`)
      u = xbuffer = it[0] 
    }
    me[i] = xbuffer = u || xbuffer
}
let ret = [] ;
me.map
(
  (u,i,obj)=>
  { 
    ret.push(`${i % I==0 ? '\n' :''}"${u}"`)
    return u 
  }
) // __info__(`[${me}]`)
__info__(`[${ret}\n]`)