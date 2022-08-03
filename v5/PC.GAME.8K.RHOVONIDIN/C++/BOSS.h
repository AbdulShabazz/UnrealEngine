/*

AUTHOR
    AbdulShabazz ( www.github.com/AbdulShabazz )

DESCRIPTION
    BOSS.h

VERSION ( Major.Minor.Bugfix.Patch )
    0.0.0.0
    + Init

STYLEGUIDE
    https://code.google.com/styleguide

NOTES
    This class implements the BOSS (BattleOS) class

    REM: Duplicate MSGs create lag !

    A Player filtering N [R]Responses for each [C]Challenge grows LINEARLY w/
    the # of Players issuing Responses; however, the # of messages the 
    Operating System must process grows EXPONENTIALLY, thus a *Router* is required . 

    The MSG Router pairs [C]Challenges with [R]Responses so that the correct animations
    are triggered . 

    ROUTER
    ======
    1. Timestamp expire codes and enqueue incoming message[s]; challenge.timer = 0
    2. Who sent the [R]Response ? 
    3. Who can accept this [C]Challenge ?
    4. Disable message propogation
    5. Dispatch event
    6. challenge.timer += DeltaTick
    7. Search: (Unmet [C]Challenges => Instant Win!)
    8. Flush queue of expired [C]Challenge timers 

*/

// Pragmas
#pragma once
// Class Declaration[s]
class BattleOS {
    public:
        BattleOS();
       ~BattleOS();

        /** GET BP_Timeline() / SET BP_Timeline() event access */
        UFUNCTION( BlueprintsCallable, Category = "Battle OS & Scheduler - Timeline" )
        void BP_Timeline();

    private:
        /** */
        static BP_Battle_SEQ[10e3];
        static int32 Router( THREADPLAYER_MSG );

    protected:
};