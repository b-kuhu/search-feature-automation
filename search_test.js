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
  const result = await I.grabTextFrom('(//a[@title])[3]');
  console.log(result.match('Chocolate Cake'));
  I.see('Chocolate Cake','(//a[@title])[3]');
  
});