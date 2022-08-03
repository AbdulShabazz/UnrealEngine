/* 

AUTHOR
    Seagat2011 (https://github.com/Seagat2011)
    AbdulShabazz (https://github.com/AbdulShabazz)

DESCRIPTION
    Camera utility. Prototyped in JavaScript.

BROWSER
    Firefox 101+

*/

// GameEngineStruct["Object.Attribute.etc"]: "Setting" //
let GameEngineStruct = 
{
    // Camera
    CameraStruct.Position3VecDouble.x
    CameraStruct.Position3VecDouble.y
    CameraStruct.Position3VecDouble.z
    CameraStruct.Direction3VecDouble.x
    CameraStruct.Direction3VecDouble.y
    CameraStruct.Direction3VecDouble.z
    CameraStruct.Velocity3VecDouble.x
    CameraStruct.Velocity3VecDouble.y
    CameraStruct.Velocity3VecDouble.z
    CameraStruct.Acceleration3VecDouble.x
    CameraStruct.Acceleration3VecDouble.y
    CameraStruct.Acceleration3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._Distance3VecDouble.x
    CameraStruct.RangeToActorStruct['Agrippa']._Distance3VecDouble.y
    CameraStruct.RangeToActorStruct['Agrippa']._Distance3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._AsDistanceScalarDouble
    CameraStruct.RangeToActorStruct['Agrippa']._AsRangeEnumerated // VCLOSE|CLOSE|NEAR|FAR|VFAR|VVFAR
    CameraStruct.RangeToActorStruct['Agrippa']._Position3VecDouble.x
    CameraStruct.RangeToActorStruct['Agrippa']._Position3VecDouble.y
    CameraStruct.RangeToActorStruct['Agrippa']._Position3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._Direction3VecDouble.x
    CameraStruct.RangeToActorStruct['Agrippa']._Direction3VecDouble.y
    CameraStruct.RangeToActorStruct['Agrippa']._Direction3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._Velocity3VecDouble.x
    CameraStruct.RangeToActorStruct['Agrippa']._Velocity3VecDouble.y
    CameraStruct.RangeToActorStruct['Agrippa']._Velocity3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._Velocity3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    CameraStruct.RangeToActorStruct['Agrippa']._Velocity3VecEnumerated.y
    CameraStruct.RangeToActorStruct['Agrippa']._Velocity3VecEnumerated.z
    CameraStruct.RangeToActorStruct['Agrippa']._Acceleration3VecDouble.x
    CameraStruct.RangeToActorStruct['Agrippa']._Acceleration3VecDouble.y
    CameraStruct.RangeToActorStruct['Agrippa']._Acceleration3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._Acceleration3VecEnumerated.x // [V+]?LOW[LS|RS]?[R]?|[V+]?MEDIUM[LS|RS]?[R]?|[V+]?FAST[LS|RS]?[R]?, where V- Very, R- Rear(Opposite Direction), LS- LeftSide, RS- RightSide
    CameraStruct.RangeToActorStruct['Agrippa']._Acceleration3VecEnumerated.y
    CameraStruct.RangeToActorStruct['Agrippa']._Acceleration3VecEnumerated.z
    CameraStruct.RangeToActorStruct['Agrippa']._Momentum3VecDouble.x
    CameraStruct.RangeToActorStruct['Agrippa']._Momentum3VecDouble.y
    CameraStruct.RangeToActorStruct['Agrippa']._Momentum3VecDouble.z
    CameraStruct.RangeToActorStruct['Agrippa']._Momentum3VecEnumerated.x // _([0G|[1|2|3|4|5][N]?G])
    CameraStruct.RangeToActorStruct['Agrippa']._Momentum3VecEnumerated.y
    CameraStruct.RangeToActorStruct['Agrippa']._Momentum3VecEnumerated.z
}