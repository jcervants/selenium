const {Builder, By, Key} = require ("selenium-webdriver");
const ltCapabilities = require("../capabilities.js");
const {Select} = require('selenium-webdriver')
const { capabilities } = require("../capabilities.js");
var assert = require('assert');
const { time } = require("console");
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

describe("anuncios", function(){
    it("successfull", async function(){
        let driver = await new Builder().forBrowser("chrome").build()
        //navigate
        await driver.get("http://192.168.12.160:8096")
        await driver.findElement(By.id("username")).sendKeys("jesus.cervantes")
        await driver.findElement(By.id("password")).sendKeys("Kurax2023$$", Key.RETURN)
       
        await driver.get("http://192.168.12.160:8096/?sec_id=anuncios&sub_sec_id=anuncios")
        await driver.findElement(By.id("anuncios_dia_6")).click() 
        await driver.findElement(By.id("anuncios_texto")).sendKeys("Lorem Ipsum @@**I=VR"); 
        
        //fechas
        let fromDateBox = driver.findElement(By.id("anuncios_fecha_desde"));
        await driver.executeScript('arguments[0].removeAttribute(\"readonly\")', fromDateBox);    
        await fromDateBox.clear();
        await fromDateBox.sendKeys("09-06-2022")

        let ToDateBox = driver.findElement(By.id("anuncios_fecha_hasta"));
        await driver.executeScript('arguments[0].removeAttribute(\"readonly\")', ToDateBox);    
        await ToDateBox.clear();
        await ToDateBox.sendKeys("09-06-2022");

            
     
        //select element type
        const selectElement = await driver.findElement(By.id('anuncios_tipo_archivo'))
        const select = new Select(selectElement)
        await select.selectByIndex(1)

       // await driver.findElement(By.id('anuncios_check_image_multiple')).click()
       // await driver.findElement(By.id('btn_buscar_anuncio_imagen')).click()

        //IWebElement elemen await driver.findElement(By.id('btn_buscar_anuncio_imagen'))t =
        //await audioAdd.sendKeys("firm.png")
        
        await driver.findElement(By.id('anuncios_tiempo_anuncio')).sendKeys('02')
        //horass
        await driver.findElement(By.id('anuncios_horario_desde')).sendKeys('1525')
        await driver.findElement(By.id('anuncios_horario_hasta')).sendKeys('1527')

        //select grupo anunicios
        const selectElement2 = await driver.findElement(By.id('anuncios_grupo_select_filtro'))
        const select2 = new Select(selectElement2)
        await select2.selectByVisibleText('at-sistemas')

        const mainWindowHandle = await driver.getWindowHandle(); // Obtener el identificador de la ventana principal
         
        // Realizar una acción que provoque la aparición del modal o ventana emergente
       await driver.findElement(By.xpath("//button[@type='submit']")).click();
        
        // Esperar a que aparezca el modal o ventana emergente
        await driver.wait(async function () { 
          const allWindowHandles = await driver.getAllWindowHandles(); // Obtener todos los identificadores de ventana
          return allWindowHandles.length > 1; // Comprobar si se abrió una nueva ventana
        }, 5000, 'El modal o ventana emergente se ha abierto');
        
        const allWindowHandles = await driver.getAllWindowHandles(); // Obtener todos los identificadores de ventana
        
        // Cambiar al identificador de ventana del modal o ventana emergente
        const modalWindowHandle = allWindowHandles.find(handle => handle !== mainWindowHandle);
        await driver.switchTo().window(modalWindowHandle);
        
        // Realizar las comprobaciones necesarias en el modal o ventana emergente
        const modalTitleElement = await driver.findElement(By.css('.modal-title'));
        const modalTitle = await modalTitleElement.getText();
        // assert.equal(modalTitle, 'Título del Modal'); // Verificar el título del modal
        
        // Cerrar el modal o ventana emergente y volver a la ventana principal
        // await driver.close();
        await driver.switchTo().window(mainWindowHandle);
      });
          



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

 //launch 
    //assert
    // let 
    // //verificamos
    //  (text,"Saldo WEB");
        //close
    //await driver.quit();
    //chai is a BDD/TDD assertions library
