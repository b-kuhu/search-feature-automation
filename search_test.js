const { output } = require("codeceptjs");

Feature('search');

Scenario('search for chocolate cake', async({ I }) => {
  I.amOnPage('https://www.fnp.com');
  I.click('Select Delivery Location','.jss7');
  I.click('Select Delivery Location','.jss7');
  I.fillField('Enter Pincode','201001');
  I.click('//ul[@class="location-popup_menu__IUQjd"]/li[1]');
  I.click('(//button[@type="button"])[8]'); 
  I.fillField('Search flowers, cakes, gifts, etc.','Chocolate Cake');
  I.pressKey('Enter');
  I.waitForNavigation();
  const url = await I.grabCurrentUrl();
  I.seeCurrentUrlEquals(url);
  const result = await I.grabTextFrom('//div[@class="product-card_product-title__32LFp"]');
  console.log(result);
  I.see('Chocolate Cake','.product-card_product-title__32LFp');
});