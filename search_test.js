const { output } = require("codeceptjs");

Feature('search');

Scenario('search for chocolate cake', async({ I }) => {
  I.amOnPage('https://www.fnp.com');
  I.click('Select Delivery Location','.jss7');
  I.click('Select Delivery Location','.jss7');
  I.fillField('Enter Pincode','201001');
  I.click('(//ul/li/div)[1]');
  I.click('(//button[@type="button"])[6]'); 
  I.fillField('Search flowers, cakes, gifts, etc.','Chocolate Cake');
  I.pressKey('Enter');
  I.waitForNavigation();
  const url = await I.grabCurrentUrl();
  I.seeCurrentUrlEquals(url);
  const nextPage= await I.grabAttributeFrom('(//a[@title])[2]','href');
  I.amOnPage(nextPage);
  I.see('Chocolate','//h1[@title]');
  I.see('Select Delivery Date');
  I.click('//div[@title="You can select date and time of delivery after providing valid pincode"]');
  I.see('Select Delivery Date');
  I.click('//div[@aria-label="Thu Sep 29 2022"]');
  I.wait(3);
  I.see('Select Shipping Method');
  I.click('//input[@value="FIXTIME_DELIVERY"]');
  I.wait(3);
  I.see('Select Time Slot');
  I.click('//input[@data-testid="time-slot-1"]');
  I.wait(5);
  I.see('ADD TO CART');
  I.click('//button[@data-testid="addToCartBtn"]');
  I.wait(5);
  I.see('PROCEED TO CHECKOUT');
  I.wait(2);
  I.click('(//button[@type="button"])[4]');
  I.waitForNavigation();
  I.see('LOGIN / REGISTER');
});