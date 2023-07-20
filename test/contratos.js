const {Builder, By, Key} = require ("selenium-webdriver");
const ltCapabilities     = require("../capabilities.js");
const {Select} = require('selenium-webdriver')

var assert = require('assert');

describe("practica", function(){
    // const USERNAME = "jonathancervants";
    // const KEY = "nZrIT9eKN87DoElDO24Vipt9Wz856Zf1k2b1tT4fRFui6Woq4G";
    // const GRID_HOST = "hub.lambdatest.com/wd/hub";
    // const gridUrl = "https://" + USERNAME + ":" + KEY + "@" +GRID_HOST;
    

// Configurar opciones de Chrome
// const options = new chrome.Options();
// options.addArguments('--user-data-dir=selenium-session'); // Directorio de datos del perfil del navegador
// options.addArguments('--profile-directory=Default'); // Directorio del perfil por defecto
// options.addArguments('--disable-popup-blocking'); // Desactivar bloqueo de ventanas emergentes

// Crear instancia del navegador Chrome con las opciones configuradas
// const driver = new webdriver.Builder()
//   .forBrowser('chrome')
    beforeEach(function(){
        driver = new Builder().forBrowser("chrome")
        .build();
        //withCapabilities(ltCapabilities.capabilities).build();
        driver.get("https://gestion.apuestatotal.dev/")
        driver.findElement(By.id("username")).sendKeys("jesus.cervantes")
        driver.findElement(By.id("password")).sendKeys("Kurax2023$$", Key.RETURN)
    })
   
    it("Contratos", async function(){
        try{
            await driver.get("https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=nueva_programacion")         
        }finally{
         
        }       
    })
   
    it.only("Program. pagos - provisiones", async function(){
            await driver.get("https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=nueva_programacion")
           //driver.findElement(By.id('btn_buscar_acreedores_pendiente_de_pago')).click()
           driver.findElement(By.id("passwossrd")).sendKeys("Kurax2023$$", Key.RETURN)
            // https://gestion.apuestatotal.dev/?sec_id=contrato&sub_sec_id=tesoreria
            
            //mainWindowHandle = driver.mainWindowHandle
            //console.log(mainWindowHandle)
            //await driver.switchTo().window(mainWindowHandle);
             
    })      

    it("permisos jesus", async function(){
        try{
            await driver.get("https://gestion.apuestatotal.com/?sec_id=usuarios&sub_sec_id=usuarios")
            await driver.sleep(1000)

            await driver.findElement(By.id("txtSearchUser")).sendKeys("angie.flores")
            await driver.sleep(2000)
            await driver.findElement(By.xpath("//table[@id='tbl_usuarios']//td[@class='text-center']//button[contains(@class, 'btn_permisos_ususarios_usuario_selecionado_table')]")).click();
        }finally{
           
        }       
    })

    it("sol. kasnet", async function(){
        try{
            await driver.get("https://gestion.apuestatotal.com/?sec_id=kasnet&sub_sec_id=solicitud")
            await driver.sleep(1000)
            await driver.get("https://gestion.apuestatotal.com/?sec_id=kasnet&sub_sec_id=solicitud_detalle&id=1")
            //await driver.findElement(By.id("ext-78")).click()
        }finally{
           
        }       
    })
})

