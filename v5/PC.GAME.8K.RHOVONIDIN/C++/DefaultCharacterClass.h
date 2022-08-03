
/*

AUTHOR
    AbdulShabazz ( www.github.com/AbdulShabazz )

DESCRIPTION
    DefaultCharacterClass.h

VERSION ( Major.Minor.Bugfix.Patch )
    0.0.0.0
    + Init
    
STYLEGUIDE
    https://code.google.com/styleguide

NOTES
    This class implements the DefaultCharacterClass

*/

// Pragmas //
#pragma once
// Generated.h file(s) //
// Templates //
template <typename BuiltinReturnType>
template <typename GameStruct>
template <typename AttStruct>
// forward declarations //
class UPawn;
class BattleOS BOSS;
//class Global_Anim_Sequence_Skel;
// Class Declaration //
class DEFAULT_CHARACTER_API DefaultCharacterClass : public ACharacter {
    private:
        bool bEndProcess = false;
        // ACTION Key //
        int L_KeyPressed();
        // WASD Keys //
        int W_KeyPressed();
        int A_KeyPressed();
        int S_KeyPressed();
        int D_KeyPressed();
        // Arrrow Keys //
        int L_AKeyPressed();
        int R_AKeyPressed();
        int U_AKeyPressed();
        int D_AKeyPressed();
        //BattleOS BOSS; /* Add an event handler */
        //Global_Anim_Sequence_Skel GLOBAL_ANIMATION_SEQUENCE; /* Add an event dispatch handler */
        //struct [] BP_Battle_SEQ;

    public:
        DefaultCharacterClass();
       ~DefaultCharacterClass();
        int SetAttributes( AttStruct &AS );

    protected:
        struct { int32 Health; } PsiStruct;
        struct { float ActualMeasured; float Expected; } XiStruct;

        /** Translate / Rotate character inside the map */
        //UFUNCTION(BlueprintsCallable, Category = "Location")
        virtual int32 TranslateRotateCharacter( TranslateRotateVec4 TRV4 );

        /** Tooltips sent to Blueprints */
        //UFUNCTION(BlueprintsCallable, Category = "Health")
        BuiltinReturnType GetPsiMeter();

        /** */
        //UFUNCTION(BlueprintsCallable, Category = "Health")
        BuiltinReturnType SetPsiMeter();

        /** */
        //UFUNCTION(BlueprintsCallable, Category = "Xi")
        GameStruct GetXiMeter();

        /** */
        //UFUNCTION(BlueprintsCallable, Category = "Xi")
        BuiltinReturnType SetXiMeter();

        /** */
        //UFUNCTION(BlueprintsCallable, Category = "BattleOS")
        virtual void PostToTimeline();

        /** */
        //UFUNCTION(BlueprintsCallable, Category = "BattleOS")
        virtual void ReadFromTimeline();
};
