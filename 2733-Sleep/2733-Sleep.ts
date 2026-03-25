// Last updated: 25/03/2026, 21:42:12
async function sleep(millis: number): Promise<void> {
    await new Promise<void>(resolve => setTimeout(resolve, millis));
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */