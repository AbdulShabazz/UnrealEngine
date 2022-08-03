/*

AUTHOR
    AbdulShabazz ( www.github.com/AbdulShabazz )

DESCRIPTION
    Global_Anim_Sequence_Skel.h

VERSION ( Major.Minor.Bugfix.Patch )
    0.0.0.0
    + Init

STYLEGUIDE
    https://code.google.com/styleguide

NOTES
    This class implements the Global_Anim_Sequence_Skel class . The Global_Anim_Sequence_Skel 
    is an extended animation sequence with sync markers (sm) to denote possibe entry/exit points 
    for player animations as well as when players should take damage .
    The Global_Anim_Sequence_Skel class coordinates ALL player animations .

    Additive Animations
    Lance's reaction animations are rendered as additive (Interpolative) animations, allowing him to
    parry opponents, smoothly frame-by-frame, while their animations are rendered .

*/

// Pragmas
#pragma once

class Global_Anim_Sequence_Skel {
    public:
        Global_Anim_Sequence_Skel();
       ~Global_Anim_Sequence_Skel();

        /** Context dependant Global_Animation_Sequence used to animate the player[s] */
        //UPROPERTY( EditInstanceOnly, BlueprintReadWrite, Category = "Global Animation Sequence" )
        static struct ANIM_SEQ {  
            int32 iPLAYER_ANIM_SEQ_IDX : 0; // context (Weapon[s]) dependant //
            int32 iPLAYER_DAMAGE_LVL : 0; // Calculated (Timer) dependant //
            bool bChallengeFlag : true; // default : Response == false && Challenge == true //
        } GLOBAL_ANIMATION_SEQUENCE[ iPLAYER_COUNT ]; // TOTAL Players (BSSC) //

    private:
        const int32 iPLAYER_COUNT = 1e3;

    protected:
        // TODO //
}
