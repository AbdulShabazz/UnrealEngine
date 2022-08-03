/*

  Copyright (c) 2022 - AbdulShabazz - All rights reserved.

  TITLE
    Primes Gen Tool

  AUTHOR
    AbdulShabazz https://github.com/AbdulShabazz

  DESCRIPTION
    Primes Generator (Code.value) along with progress bar animation (__progress__)

  INPUT (__input__)
    3

  OUTPUT (__output__)
    2 3 5

  VERSION
    Major.Minor.Bugfix.Patch
    1.0.0.0

  NOTES
    N/A

*/
let __DEBUG__ = true
let i = 3
let ret = [2]
let I = __input__()
while (ret.length < I)
{
    if (i % 2){
        let IncludeIDX = true
        let MidwayPoint = i / 2
        for (let u of ret)
        {
            if (u > MidwayPoint)
                break
            if (i % u == 0)
            {
                IncludeIDX = false
                break
            }
        }
        if (IncludeIDX)
        {
            ret.push(i)
            const v = ret.length / I
            __progress__(v)
        }
    }
    i++
}
__output__(ret)