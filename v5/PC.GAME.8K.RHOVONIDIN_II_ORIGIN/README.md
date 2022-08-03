# RHOVONIDIN  
## Rise of A Nation  

Content for Unreal Engine 5.0  

Reference Images uploaded from the Nexus  

# Backstory  
TBD  

## Gameplay  
x | q - Action buttons ( attack; defense; fast/focused; progressive damage; well-timed, brutal/stuns; counter-offensive/multiple damage )  

## PC Control 
w - forward  
a - left/strafe  
s - jump  
d - right/strafe  
z - retreat/strafe  

## HUD & Meters  
Psi(si) - Health (0-100)  
Xi(chi) - Stamina or kinetic energy available for an attack (0-10) . Long well-timed button press & hold increases Xi . Ill-timed hasty attacks quickly deplete it . Xi will reset to acknowledge a new target or adversary that can take optimal damage and thus should be the focus of your attack .  

## Character Properties  
Health  
Weapons { .. }  
Melee ( Roll_Z, Pitch_X, Yaw_Y )  
MeleeRecipients [ char000, .. ]  
AccelerationVec3 &lt; i j k &gt;  
VelocityVec3 &lt; i j k &gt;  
DistanceVec3 &lt; i j k &gt;  
BodyPositionVec3 &lt; i j k &gt;  
Wardrobes { .. }  

## Game Menus  
Difficulty  
Gameplay  
Controller  
- Invert Y axis  
Keyboard & Mouse  
HUD  
Video  
- Video Adapter ( CPU | Available GPU Card[s] )  
- Display Resolution  
- Aspect Ratio  
- DPI  
- Refresh Rate  
- Window Mode  
Audio  
- Sound ( Enable static levels or dynamic )  
FX  
- Color  
- Black levels (Contrast)  
- Captions  
Benchmark  

## Terrain  
Mountains  
Hills  
Valleys  
Deserts  
Forest  
Beaches  
Walled City  

## Game Mechanics Rollout  
Animation ( Walk, Idle, Jump )  
Melee ( Techniques )  
Combat ( Melee, Multiple Encounter )  
Environments  
FX  
Post Processing  
Sound & FX  

## Basic Notes  
MMORPG  
Enable skip cinematics  
Seperate animations by stride for smoother frame LERP; or segment continuous frame sequence using sync markers .  
Dev (gameplay engine) in C++ then expose to Blueprints- for Animation, Level, Character, etc .  
Chain animation sequences, for smoother transitions  
Telegraph battle cutscene entry opportunities with emissive texture wraps for gestures, weapons, and scene props, so the player stays focused on the Xi meter  
Game sounds play at full initially with gradual decay to minimize listening fatigue  
Environment sounds play initially louder upon new encounters ( eg Fields of Grass =&gt; country road )  
Allow idle recuperation  
Wardrobes grant Rhovonidin certain abilities  
Enable wardobe ( enrobe ) animations  
Player chooses spawn terrain  
New animations used by the player award as unlocks for the character  
Incorporate Summon (timer-countdown) Flag Poles, which have the ability to activate summon and or disbled (adversary players)  
Terrains have their own themes  
Autosave  

## Wardrobes  
Mountains Wardrobe - Can summon ( Deep freeze, Snow Storm ) . Increases durability in the cold  
Hills Wardrobe - Unlocks mastery of weapons  
Valleys Wardrobe - Can summon ( Wolves, The Remnant )  
Deserts Wardrobe - Can summon ( Lightning, Storm Clouds ) . Increases durability in the heat  
Forest  Wardrobe - Deals fatal damage to island wolves  
Beaches  Wardrobe - Can summon ( Leviathan, Kraken, Hades, etc)  
Walled City - Increases all abilities to maximum lethality  

## Marketing  
Full-length 4K Walkthrough 2h [captioned]  
Full-length HIRES soundtrack 2h  
Full-length HIRES Gameplay soundtrack 2h [captioned]  

## DLC  
Unlock advanced in-game combinations  
Unlock advanced in-game skills w/ weaponry  

## Cast  
TBD  

## The Battle OS  
TBD  
