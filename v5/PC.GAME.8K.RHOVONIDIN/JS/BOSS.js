/*

AUTHOR
    Seagat2011 (https://github.com/Seagat2011)
    AbdulShabazz (https://github.com/AbdulShabazz)

COPYRIGHT
    Copyright (c) 2022 - AbdulShabazz - All rights reserved.

DESCRIPTION
    Battle Operating System & Scheduler (BOSS) - Prototyped in JavaScript!
    All Animation frames are contiguous and absolute addressable
    The BOSS coordinates actions during gameplay, for smoother combat animations
    
    Each NPC and player has a builtin state-machine which monitors their combat state, and membership group
    The BOSS receives updates from these state-machines, and synchronizes if/when/how animations are displayed

    STEPS
    1. Who in which group wants to respond
    2. Available responses, based on Momentum(p) (P [kg m/s] = MassInt64 [kg] * Velocity3VecInt16 [m/s])
    2. Available slots
    3. Response (enqueued)
    4. Render

    AVAILABLE APIs
    GLOBAL_ANIMATION_SEQUENCE.Play()
    GLOBAL_ANIMATION_SEQUENCE.Pause()
    GLOBAL_ANIMATION_SEQUENCE.Resume()
    GLOBAL_ANIMATION_SEQUENCE.PauseAt()
    GLOBAL_ANIMATION_SEQUENCE.ResumeAt()

INPUT
    BOSS + GameState + UserInput >> BOSS

OUTPUT
    [ PLAYER_N_ANIM_FRAME_K, ...], ..., where N,K are Integers

BROWSER
    Firefox 101+

EXAMPLE
    (FPS) TIMELINE: [] [] [] ... [] [] []

*/

// CLASS DEFINITION
let animationFRAME = new Event('animationFRAME')
let animationSEQUENCE = new Event('animationSEQUENCE')
let GLOBAL_ANIMATION_SEQUENCE = function()
{
    let self = this
    self.frmIDX = self.length
    self.seqIDX = self.length
    self.NextSequence = 0x0
    self.CurrentSequence = 0x0
    // Private
    self._ProcessSequence = function()
    {
        
    }
    self._ProcessFrame = function()
    {
        if
        (
            self.CurrentSequence && 
           (self.CurrentSequence != self.NextSequence)
        )
        {
            // swap sequences
        }
        else
        {
            // grab next frame
        }
    }
    // public
    self.Current = function()
    {
        
    }
    self.Next = function()
    {
        let self = this
    }
    self.Resume = function()
    {
        self.frmID = SetInterval(self.ProcessFrame,10)
    }
    self.ResumeAt = function(i)
    {
        
    }
    self.Suspend = function()
    {
        clearInterval( self.frmID )
    }
    self.frmID = SetInterval(self.ProcessFrame,16)
    self.ANIMATION_SEQUENCE = []
}
GLOBAL_ANIMATION_SEQUENCE.prototype = []

function __GLOBAL_ANIMATION_SEQUENCE__()
{
    let self = this
    self.__global__ = new GLOBAL_ANIMATION_SEQUENCE()
    self.addEventListener('UpdateFrame', false)
    self.addEventListener('UpdateSequence', false)
}
__GLOBAL_ANIMATION_SEQUENCE__.prototype = Data

// TEST
let frmIDX = 0
let seqIDX = 0
let bIsInterruptable = false
let BOSS = function(e)
{
    if
    (
        e && 
        e.target && 
        e.target.data.flags.match(/animation/)
    )
    {
        let CharacterName = e.target.data.PC
        GLOBAL_ANIMATION_SEQUENCE.Suspend() // GLOBAL_ANIMATION_SEQUENCE always shifts (plays) queued (FIFO) animations off stack
        GLOBAL_ANIMATION_SEQUENCE.Current( bIsInterruptable ) ? GLOBAL_ANIMATION_SEQUENCE.Next().push( CharacterName ) : GLOBAL_ANIMATION_SEQUENCE.push([ CharacterName.Animations.AllSelected,CharacterName.InventoryStruct.AllSelected ]) ;
        frmIDX = GLOBAL_ANIMATION_SEQUENCE.length
        GLOBAL_ANIMATION_SEQUENCE.Invalidate()
        GLOBAL_ANIMATION_SEQUENCE.Resume()
    }
}

let Lance = new ActorObject({ CharacterNameString:"Lance" })

let Technique = PC['Rhovonidin'].Animations.DamageReceivedAnimStruct.Knees_RollLeftwards
Lance.dispatchEvent(new CustomEvent("animationSEQUENCE", { AnimationSequenceAddressInt64: Technique, frmIDX:0, Location3VecInt64: { x y z }, Direction3VecInt64: { x y z }, CalculateMomentum3VecInt64:{ x y z }, Acceleration3VecInt64:{ x y z }, Velocity3VecInt64:{ x y z } }) )