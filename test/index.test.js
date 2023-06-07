const {Builder, By, Key} = require ("selenium-webdriver");
const ltCapabilities = require("../capabilities.js");
var assert = require('assert');
const {Select} = require('selenium-webdriver')
const {IWebElement} = require('selenium-webelement')
const { capabilities } = require("../capabilities");
var should = require("chai").should();

//usr
const USERNAME = ltCapabilities.capabilities.username;

//pas-key
const KEY = ltCapabilities.capabilities.accessKey;

//host
const GRID_HOST = "hub.lambdatest.com/wd/hub";

const gridUrl = "https://" + USERNAME + ":" + KEY + "@" +GRID_HOST;

// beforeEach(function(){
//     driver = new Builder().usingServer(gridUrl)
// })
//describe the block
describe("jc", function(){
    it("successfull", async function(){
        let driver = await new Builder().forBrowser("chrome").build()

        //navigate
        await driver.get("https://gestion.apuestatotal.dev/")
        await driver.findElement(By.id("username")).sendKeys("jesus.cervantes")
        await driver.findElement(By.id("password")).sendKeys("Kurax2023$$", Key.RETURN)
       
        await driver.get("https://gestion.apuestatotal.dev/?sec_id=anuncios&sub_sec_id=anuncios")
        await driver.findElement(By.id("anuncios_texto")).sendKeys("Lorem Ipsum"); 
        
        //fechas
        let fromDateBox = driver.findElement(By.id("anuncios_fecha_desde"));
        await driver.executeScript('arguments[0].removeAttribute(\"readonly\")', fromDateBox);    
        await fromDateBox.clear();
        await fromDateBox.sendKeys("06-06-2022")

        let ToDateBox = driver.findElement(By.id("anuncios_fecha_hasta"));
        await driver.executeScript('arguments[0].removeAttribute(\"readonly\")', ToDateBox);    
        await ToDateBox.clear();
        await ToDateBox.sendKeys("06-06-2022")

        // await driver.findElement(By.id('anuncios_dia_4')).click()       

        //select element type
        const selectElement = await driver.findElement(By.id('anuncios_tipo_archivo'))
        const select = new Select(selectElement)
        await select.selectByIndex(0)

        IWebElement element = driver.findElement(By.id('btn_buscar_anuncio_imagen'))
        await audioAdd.sendKeys("firm.png")
        
        await driver.findElement(By.id('anuncios_tiempo_anuncio')).sendKeys('00')
      
        //horass
        await driver.findElement(By.id('anuncios_horario_desde')).sendKeys('0948')
        await driver.findElement(By.id('anuncios_horario_hasta')).sendKeys('0949')

        //select grupo anunicios
        const selectElement2 = await driver.findElement(By.id('anuncios_grupo_select_filtro'))
        const select2 = new Select(selectElement2)
        await select2.selectByVisibleText('at-sistemas')

        await driver.findElement(By.xpath("//button[@type='submit']")).click();



        //*[@id="anuncios_formulario_anuncios"]/div[19]/button
        // await driver.executeScript('arguments[0].setAttribute("value", 22")', fromDateBox);
        // await fromDateBox.sendKeys('01-01-1999'); //Enter date in required format

        // await driver.findElement(By.xpath("//a[@class='sidebar-collapse']")).click()
        // await driver.findElement(By.xpath("//*[@title='mkt']//descendant::ul/li[2]/a")).click()
        // await driver.findElement(By.xpath("[//li[title='mkt']//descendant::ul/li[3]")).click();

        // await driver.findElement(By.xpath("//text()[contains(.,'Anuncios')]/ancestor::li[self::li].click()")).click()
        //await driver.findElement(By.xpath("//li[@contains='Auditoria']")).click()

        // await driver.findElement(By.xpath("//span[@text('Reporte de apuestas')]")).sendKeys("Reportes", Key.RETURN)

        // let text = await driver.findElement(By.xpath("//input[@placeholder='Busqueda...']")).getText().then(
        //     function(value){
        //         return value;
        //  });
        //  assert.strictEqual(text,"Busqueda...");
    });
})

 //launch 
    //assert
    // let 
    // //verificamos
    // assert.strictEqual(text,"Saldo WEB");
        //close
    //await driver.quit();
    //chai is a BDD/TDD assertions library
