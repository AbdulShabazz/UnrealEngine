/* 

AUTHOR
    Seagat2011 (https://github.com/Seagat2011)
    AbdulShabazz (https://github.com/AbdulShabazz)

DESCRIPTION
    Battle Operating System & Scheduler (BOSS.js), Character utility
    Prototyped in JavaScript.

INPUT
    Registered PCs (Playable characters, multiplayer included)
    Registered NPCs (Non-Playable characters, multiplayer included)
    Registered A's (Non-Playable character Actors, multiplayer included)

OUTPUT
    Return attributes between PC-PC, PC-NPC, PC-A

NOTES
    Animations: 240fps * 8MB/f * [ 0.2 - 1.0 ]s

    PC['Agrippa']
    PC['BarHades']
    PC['Sheeran']
    PC['Hennethica']

    NPC['Shinoba']
    NPC['Kawamura']
    NPC['Kayman']
    NPC['Ericmain']
    NPC['AHole']
    NPC['ShardArcher']
    NPC['FedArcher']
    NPC['ShardCapt']
    NPC['FedCapt']
    NPC['ShardGuard']
    NPC['FedGuard']

    A['XFighter']

BROWSER
    Firefox 101+

*/

/*
    frameRenderTick:function()
    {
        Sleep( 120 )//for(let i = 0; i < 1e6; i++){ // NOP // }
    }
}
*/

// GameEngineStruct["Object.Attribute.etc"]: "Setting" 
// USAGE: GameEngineStruct["PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Distance3VecDouble.x"]
let GameEngineStruct = 
{
    // Playable Character Struct
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Ibra-lim'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['A-Hole'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Chibble'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Draz Ghoul'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Black Mountain Bear'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Brown Mountain Grizzly'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Mountain Polar Bear'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Desert Vulture'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Evergreen Eagle'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Black Crow'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Deer'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Mountain Elk'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Moose'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Moose'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Guard'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Captain'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation Archer'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Federation M60 Gunner'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Guard'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Captain'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard Archer'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shard M60 Gunner'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['XFighter'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Sky Copter'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Taiga Stone'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Stone Kiln'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Cedar Log home plans'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['White Pine Log home plans'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Agrippa'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Sheeran'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Hennethica'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Bar-Hades'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Shinoba'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Leviathan'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Kraken'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Ericmain'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Kayman'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Dr Meade'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Distance3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Distance3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Distance3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].AsDistanceScalarDouble
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].AsRangeEnumerated // VVCLOSE|VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR, where V- Very
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Position3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Position3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Position3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Direction3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Direction3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Direction3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecDouble.x
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecDouble.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecDouble.z
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].RangeToActorStruct['Cork Wood'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].Position3VecDouble.x
    PC['Rhovonidin'].Position3VecDouble.y
    PC['Rhovonidin'].Position3VecDouble.z
    PC['Rhovonidin'].Direction3VecDouble.x
    PC['Rhovonidin'].Direction3VecDouble.y
    PC['Rhovonidin'].Direction3VecDouble.z
    PC['Rhovonidin'].Velocity3VecDouble.x
    PC['Rhovonidin'].Velocity3VecDouble.y
    PC['Rhovonidin'].Velocity3VecDouble.z
    PC['Rhovonidin'].Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].Velocity3VecEnumerated.y
    PC['Rhovonidin'].Velocity3VecEnumerated.z
    PC['Rhovonidin'].Acceleration3VecDouble.x
    PC['Rhovonidin'].Acceleration3VecDouble.y
    PC['Rhovonidin'].Acceleration3VecDouble.z
    PC['Rhovonidin'].Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    PC['Rhovonidin'].Acceleration3VecEnumerated.y
    PC['Rhovonidin'].Acceleration3VecEnumerated.z
    PC['Rhovonidin'].Momentum3Vec3Bit.x // Reserve 1-Bit for sign
    PC['Rhovonidin'].Momentum3Vec3Bit.y
    PC['Rhovonidin'].Momentum3Vec3Bit.z
    PC['Rhovonidin'].Momentum3VecEnumerated.x // _[0|[1|2|3|4|5][N]?]G
    PC['Rhovonidin'].Momentum3VecEnumerated.y
    PC['Rhovonidin'].Momentum3VecEnumerated.z
    PC['Rhovonidin'].WeaponStruct.AllWeaponsAllowedUInt8
    PC['Rhovonidin'].WeaponStruct.AllWeaponsTotalUInt8
    PC['Rhovonidin'].WeaponStruct.Increment1Bit()
    PC['Rhovonidin'].WeaponStruct.Decrement1Bit()
    PC['Rhovonidin'].WeaponStruct.Enable()
    PC['Rhovonidin'].WeaponStruct.Disable()
    PC['Rhovonidin'].InventoryStruct.AllInventoryAllowedUInt16
    PC['Rhovonidin'].InventoryStruct.AllInventoryTotalUInt16
    PC['Rhovonidin'].InventoryStruct.Increment1Bit()
    PC['Rhovonidin'].InventoryStruct.Decrement1Bit()
    PC['Rhovonidin'].InventoryStruct.Enable()
    PC['Rhovonidin'].InventoryStruct.Disable()
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Select()
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Selected()
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Deselect()
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Lock()
    PC['Rhovonidin'].InventoryStruct['SubZeroGear'].Unlock()
    PC['Rhovonidin'].InventoryStruct['XFighter'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['XFighter'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['XFighter'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['XFighter'].Select()
    PC['Rhovonidin'].InventoryStruct['XFighter'].Selected()
    PC['Rhovonidin'].InventoryStruct['XFighter'].Deselect()
    PC['Rhovonidin'].InventoryStruct['XFighter'].Lock()
    PC['Rhovonidin'].InventoryStruct['XFighter'].Unlock()
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Select()
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Selected()
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Deselect()
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Lock()
    PC['Rhovonidin'].InventoryStruct['Crystal Silica'].Unlock()
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Select()
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Selected()
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Deselect()
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Lock()
    PC['Rhovonidin'].InventoryStruct['Taiga Stone'].Unlock()
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Select()
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Selected()
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Deselect()
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Lock()
    PC['Rhovonidin'].InventoryStruct['White Cedar'].Unlock()
    PC['Rhovonidin'].InventoryStruct['White Pine'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['White Pine'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['White Pine'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['White Pine'].Select()
    PC['Rhovonidin'].InventoryStruct['White Pine'].Selected()
    PC['Rhovonidin'].InventoryStruct['White Pine'].Deselect()
    PC['Rhovonidin'].InventoryStruct['White Pine'].Lock()
    PC['Rhovonidin'].InventoryStruct['White Pine'].Unlock()
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Select()
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Selected()
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Deselect()
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Lock()
    PC['Rhovonidin'].InventoryStruct['Kiln Oven Plans'].Unlock()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Select()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Selected()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Deselect()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Lock()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Unlock() 
    PC['Rhovonidin'].InventoryStruct['White Pine Log home plans'].Equip() // Add to inventory
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Equipped() // Added to inventory?
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Unequip() // Drop from inventory
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Select()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Selected()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Deselect()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Lock()
    PC['Rhovonidin'].InventoryStruct['White Cedar Log home plans'].Unlock()
    PC['Rhovonidin'].InventoryStruct.AllSelected.Play()
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Unlock() // Return True, iff item was locked
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Lock() // Return True, iff item was unlocked
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Locked() // Return True, iff item is locked
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Unequip() // Return True, iff item was- and is no longer, equipped
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Unequipped() // Return True, iff item is equipped
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Equip() // Return True, iff equip threshold not yet exceeded
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Select() // Return True, iff item is equipped and dis-armed
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Selected() // Return True, iff item is equipped and armed
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Deselect() // Return True, iff equipped item was armed
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Florish() // Return True, iff equipped & armed. Florish animation durations [ 0.5 brief - 2.5 extended ]s
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].FlorishBrief() // Return True, iff equipped
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].FlorishExtended() // Return True, iff equipped
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Target['Agrippa'].Deselect() // Return True, iff target was- and is no longer, selected
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Target['Agrippa'].Select() // Requires: Target,Distance3VecEnumStruct,Velocity3VecEnumStruct,Acceleration3VecEnumStruct,Momentum3Vec3BitStruct. Duplicate entries ignored
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].Target['Agrippa'].Play() // Requires: Target,Distance3VecEnumStruct,Velocity3VecEnumStruct,Acceleration3VecEnumStruct,Momentum3Bit3VecStruct
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].AllSelected.Play() // Requires: Target[s],Distance3VecEnumStruct,Velocity3VecEnumStruct,Acceleration3VecEnumStruct,Momentum3Bit3VecStruct // Requires: Target,Distance3VecEnumStruct,Velocity3VecEnumStruct,Acceleration3VecEnumStruct,Momentum3Vec3BitStruct
    PC['Rhovonidin'].Animations.WeaponAnimStruct['BO'].AllSelected.Resume() // Utilize blendspace to interrupt animations iff necessary
    PC['Rhovonidin'].Animations.WeaponAnimStruct.AllEquipped.Play() // Requires: Target[s],Distance3VecEnumStruct,Velocity3VecEnumStruct,Acceleration3VecEnumStruct,Momentum3Bit3VecStruct
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Body_ForceForwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Body_ForceForwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Body_ForceBackwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Body_ForceBackwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_ImpactAnimation.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_ImpactAnimation.Select() // Animations can be combined into a blendspace
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_LightImpactAnimation.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_LightImpactAnimation.Select() // Animations can be combined into a blendspace
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_MildImpactAnimation.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_MildImpactAnimation.Select() // Animations can be combined into a blendspace
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_StrongImpactAnimation.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_StrongImpactAnimation.Select() // Animations can be combined into a blendspace
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_RollRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_RollRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_RollLeftforwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_RollLeftforwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_PitchRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_PitchRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_PitchLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_PitchLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Face_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_RollLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_RollLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_RollRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_RollRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_PitchForwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_PitchForwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_PitchBackwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_PitchBackwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_RollLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_RollLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_RollRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_RollRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_PitchForwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_PitchForwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_PitchBackwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_PitchBackwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftKnee_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftShoulder_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftShoulder_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftShoulder_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.LeftShoulder_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_RollLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_RollLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_RollRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_RollRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_PitchForwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_PitchForwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_PitchBackwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_PitchBackwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightKnee_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightShoulder_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightShoulder_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightShoulder_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.RightShoulder_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Shoulders_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Shoulders_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Shoulders_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Shoulders_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.SingleFoot_LeftWallBound.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.SingleFoot_LeftWallBound.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.SingleFoot_RightWallBound.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.SingleFoot_RightWallBound.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Leftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Leftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Rightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Rightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Forwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Forwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Backwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Swept_Backwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Leftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Leftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Rightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Rightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Forwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Forwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Backwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Thrown_Backwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_RollLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_RollLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_RollRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_RollRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_PitchForwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_PitchForwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_PitchBackwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_PitchBackwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_YawLeftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_YawLeftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_YawRightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Torso_YawRightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Leftwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Leftwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Rightwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Rightwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Forwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Forwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Backwards.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Trip_Backwards.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.TwoFoot_LeftWallBound.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.TwoFoot_LeftWallBound.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.TwoFoot_RightWallBound.Deselect()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.TwoFoot_RightWallBound.Select()
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.AllSelected.Play() // Requires atleast (1) One DamageReceivedAnimStruct selection
    PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.AllSelected.Resume() // Utilize blendspace to interrupt animations iff necessary. Requires atleast (1) One DamageReceivedAnimStruct selection
    PC['Rhovonidin'].Animations.BlockAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockHighAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockHighAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockMidAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockMidAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockLowAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockLowAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockGroundAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockGroundAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingLeftHighAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingLeftHighAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingLeftMidAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingLeftMidAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingLeftLowAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingLeftLowAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingLeftGroundAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingLeftGroundAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingRightHighAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingRightHighAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingRightMidAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingRightMidAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingRightLowAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingRightLowAnimStruct.Select()
    PC['Rhovonidin'].Animations.BlockKneelingRightGroundAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.BlockKneelingRightGroundAnimStruct.Select()
    PC['Rhovonidin'].Animations.ClimbUpAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.ClimbUpAnimStruct.Select()
    PC['Rhovonidin'].Animations.ClimbDownAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.ClimbDownAnimStruct.Select()
    PC['Rhovonidin'].Animations.ClimbLeftAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.ClimbLeftAnimStruct.Select()
    PC['Rhovonidin'].Animations.ClimbRightAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.ClimbRightAnimStruct.Select()
    PC['Rhovonidin'].Animations.DashAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DashAnimStruct.Select()
    PC['Rhovonidin'].Animations.DashDoubleAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DashDoubleAnimStruct.Select()
    PC['Rhovonidin'].Animations.DeathRattleAnimStructArray[0].Deselect()
    PC['Rhovonidin'].Animations.DeathRattleAnimStructArray[0].Select()
    PC['Rhovonidin'].Animations.DiveForwardAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DiveForwardAnimStruct.Select()
    PC['Rhovonidin'].Animations.DiveBackwardAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DiveBackwardAnimStruct.Select()
    PC['Rhovonidin'].Animations.DiveRollForwardAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DiveRollForwardAnimStruct.Select()
    PC['Rhovonidin'].Animations.DiveRollBackwardAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DiveRollBackwardAnimStruct.Select()
    PC['Rhovonidin'].Animations.DodgeAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DodgeAnimStruct.Select()
    PC['Rhovonidin'].Animations.DuckAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.DuckAnimStruct.Select()
    PC['Rhovonidin'].Animations.FallAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.FallAnimStruct.Select()
    PC['Rhovonidin'].Animations.IdleAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.IdleAnimStruct.Select()
    PC['Rhovonidin'].Animations.KickShoveLeftAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.KickShoveLeftAnimStruct.Select()
    PC['Rhovonidin'].Animations.KickShoveRightAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.KickShoveRightAnimStruct.Select()
    PC['Rhovonidin'].Animations.LeapAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.LeapAnimStruct.Select()
    PC['Rhovonidin'].Animations.LeapForwardAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.LeapForwardAnimStruct.Select()
    PC['Rhovonidin'].Animations.LeapBackwardsAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.LeapBackwardsAnimStruct.Select()
    PC['Rhovonidin'].Animations.LeapLeftAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.LeapLeftAnimStruct.Select()
    PC['Rhovonidin'].Animations.LeapRightAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.LeapRightAnimStruct.Select()
    PC['Rhovonidin'].Animations.PeerLeftAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.PeerLeftAnimStruct.Select()
    PC['Rhovonidin'].Animations.PeerRightAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.PeerRightAnimStruct.Select()
    PC['Rhovonidin'].Animations.PeerBehindAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.PeerBehindAnimStruct.Select()
    PC['Rhovonidin'].Animations.PeerUpwardsAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.PeerDownwardsAnimStruct.Select()
    PC['Rhovonidin'].Animations.PeerDownwardsAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.PounceAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.PounceAnimStruct.Select()
    PC['Rhovonidin'].Animations.PeerUpAnimStruct.Select()
    PC['Rhovonidin'].Animations.RollAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.RollAnimStruct.Select()
    PC['Rhovonidin'].Animations.SideRollLeftAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.SideRollLeftAnimStruct.Select()
    PC['Rhovonidin'].Animations.SideRollRightAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.SideRollRightAnimStruct.Select()
    PC['Rhovonidin'].Animations.SneakAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.SneakAnimStruct.Select()
    PC['Rhovonidin'].Animations.SquatAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.SquatAnimStruct.Select()
    PC['Rhovonidin'].Animations.SquatIdleAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.SquatIdleAnimStruct.Select()
    PC['Rhovonidin'].Animations.SlideAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.SlideAnimStruct.Select()
    PC['Rhovonidin'].Animations.VerticalLadderSlideAnimStruct.Deselect()
    PC['Rhovonidin'].Animations.VerticalLadderSlideAnimStruct.Select()
    PC['Rhovonidin'].Animations.AllSelected.Play() // Play all (selected) animations. Duplicates and (preceeding) conflicts are ignored. Animations can be combined into a blendspace
    PC['Rhovonidin'].Animations.AllSelected.Resume() // Play all (selected) animations. Duplicates and (preceeding) conflicts are ignored. Use blendspace to interrupt animations iff necessary
}