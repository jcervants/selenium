const {Builder, By, Key} = require ("selenium-webdriver");
var should = require("chai").should();

//describe the block
describe("jc", function(){
    it("successfull", async function(){
        let driver = await new Builder().forBrowser("chrome").build()

        //navigate
        await driver.get("https://gestion.apuestatotal.dev/")
        await driver.findElement(By.id("username")).sendKeys("jesus.cervantes")
        await driver.findElement(By.id("password")).sendKeys("Kurax2023$$", Key.RETURN)

         await driver.findElement(By.xpath("//*[contains(text(),'Reportes')]")).click()
        
        // text = await driver.findElement(By.xpath("")).getText().then(
        //     function(value){
        //         return value
        //     }np
        // );
    })
})
 //launch 
    //assert
    // let 
    // //verificamos
    // assert.strictEqual(text,"Saldo WEB");
        //close
    //await driver.quit();
    //chai is a BDD/TDD assertions library
