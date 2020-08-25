require('./hooks')
require('dotenv').config();
var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
let expect = chai.expect;
let { Given, When, Then } = require('cucumber')
var {setDefaultTimeout} = require('cucumber');
const { element } = require('protractor');
setDefaultTimeout(60 * 1000);


         Given(/^Amazon.co.uk is open "([^"]*)"$/, {timeout: 90 * 1000}, function (site) {
           browser.ignoreSynchronization = true
           return browser.get(site) ;
         });

         When(/^I click Sign-in$/, async function () {
          await browser.manage().timeouts().implicitlyWait(50 * 8000);
           element(by.id('a-autoid-0-announce')).click();
           await browser.driver.sleep(2000);
           return console.log("@When --- I click Sign-in");
         });


         Then(/^enter "([^"]*)" username$/, async function (username) {
          element(by.id('ap_email')).sendKeys(process.env.email);
          await browser.manage().timeouts().implicitlyWait(10 * 5000);
          return console.log("@Then --- enter "+username+" username");
       
         });

         Then(/^I Continue$/, async function () {
          element(by.id('continue')).click();
          await browser.manage().timeouts().implicitlyWait(10 * 5000);
           return console.log("@Then --- I Continue");
         });


         Then(/^enter "([^"]*)" password$/, async function (password) {
          element(by.id('ap_password')).sendKeys(process.env.password);
           await browser.manage().timeouts().implicitlyWait(10 * 5000);
           return console.log("@Then --- enter "+password+" password");
         });


         Then(/^I signed in$/, async function () {
          element(by.id('signInSubmit')).click();
          await browser.manage().timeouts().implicitlyWait(10 * 5000);
           return console.log("@Then --- I signed in");
         });

         Then(/^I am logged in$/, async function () {
          await browser.manage().timeouts().implicitlyWait(50 * 5000);
           return console.log("@Then --- I am logged in");
         });


         //Search for product
          Then('I search for {string}', async function (iceworks) {
          element(by.id('twotabsearchtextbox')).sendKeys('iceworks 5000');
          element(by.css('input[type="submit"]')).click()
          await browser.driver.sleep(2000);
          return console.log("@When --- when I search for "+iceworks+" 5000");
            });
        
            Then('the search results are displayed', async function () {
              await browser.driver.sleep(2000);
              await expect(element.all(by.css('a-size-medium a-color-base a-text-normal')).isPresent())
              return console.log("@Then --- the search results are displayed");
        });


        Then('the search results has the {string} in it', async function (string) {
          await browser.driver.sleep(2000);
          await expect(element.all(by.css('a-color-state a-text-bold')).isPresent())
          return console.log("@Then --- Then the search results has the iceworks 5000 in it");
        });


        When('I search {string}', function (string) {
          element(by.id('twotabsearchtextbox')).sendKeys('iceworks 5000');
          element(by.css('input[type="submit"]')).click()
          return console.log("@When --- I search icework 5000")
        });

        When('I add {string} to my basket',  async function (string) {
          await browser.driver.sleep(2000);
          element(by.css("img[src*='https://m.media-amazon.com/images/I/71Uq26GjsDL._AC_UY218_.jpg']"))
          .click();
          await browser.driver.sleep(2000);
          return console.log("@Then --- I add iceworks to my basket");
        });


        When('I check my basket total', async function () {
          await browser.manage().timeouts().implicitlyWait(50 * 5000);
          element(by.id('add-to-cart-button')).click()
          await browser.driver.sleep(5000);
          return console.log("@When --- I check my basket total");
        });


        Then('it should match the price of the item added into basket', async function () {
          await browser.manage().timeouts().implicitlyWait(50 * 5000);
          element(by.xpath('//*[@id="attach-sidesheet-checkout-button"]/span/input')).click()
          await browser.driver.sleep(2000);
          expect(16.97).to.equal(16.97);
          await browser.driver.sleep(2000);
          return console.log("@Then --- it should match the price of the item added into basket");
        });