Feature('search');

Scenario('search for chocolate cake', async({ I }) => {
  I.amOnPage('https://www.fnp.com');
  I.click('Select Delivery Location','.jss7');
  I.click('Select Delivery Location','.jss7');
  I.fillField('Enter Pincode','201001');
  I.click('/ul/li/div');
  I.click('(//button[@type="button"])[8]'); 
  I.fillField('Search flowers, cakes, gifts, etc.','Chocolate Cake');
  I.pressKey('Enter');
  I.waitForNavigation();
  const url = await I.grabCurrentUrl();
  I.seeCurrentUrlEquals(url);
  const result = await I.grabTextFrom('//div/a[@title]');
  console.log(result.match(["Chocolate"]));
});
