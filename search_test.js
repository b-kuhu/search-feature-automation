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
  const result = await I.grabTextFrom('(//a[@title])');
  console.log(result);
  I.see('White Rose','//a[@title]');
  const nextPage= await I.grabAttributeFrom('//a[@title]','href');
  I.amOnPage(nextPage);
  I.click('//div[@title="You can select date and time of delivery after providing valid pincode"]');
  I.click('//div[@aria-label="Wed Sep 28 2022"]');
  I.wait(3);
  I.click('//input[@value="FIXTIME_DELIVERY"]');
  I.wait(3);
  I.click('//input[@data-testid="time-slot-1"]');
  I.click('//button[@data-testid="addToCartBtn"]');
  I.click('//button[@data-testid="buyNowBtn"]');
});