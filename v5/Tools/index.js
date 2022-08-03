
let winID = null
let __msg__ = console.log
function __input__(){ return Data.value }
function __output__(u){ Result.value = u }
function __progress__(e)
{
    winID = requestIdleCallback(()=>{ ProgressBar.value = ProgressBar.title = e.toFixed(2) || ProgressBar.value })
}
async function myEval(e)
{
    //myWorker.postMessage(e)
    Result.value = "Working..."
    try
    {
        await eval(Code.value)
    }
    catch (e)
    {
        Result.value += e
    }
    finally
    {
        Result.value.match(/^Working/) && (Result.value = "Q.E.D.")
    }
}
// let myWorker = new Worker(URL.createObjectURL(new Blob([myEval.toString(),{type:'text/plain'}])))
Data.addEventListener('keyup',myEval,false)
Code.addEventListener('keyup',myEval,false)