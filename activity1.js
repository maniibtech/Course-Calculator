const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
 
(async function loginAutomation() {
 
  // Chrome options
  let options = new chrome.Options();
  options.addArguments('--start-maximized');
 
  // Initialize WebDriver
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
 
  try {
    // Open Login Page
    await driver.get('https://softwaretestingv1.praesignis.com/softwaretestingv1/Login_Page.html');
 
    // Wait for email field
    let emailField = await driver.wait(
      until.elementLocated(By.id('email')),
      10000
    );
 
    await emailField.sendKeys('bridget.mahlangu@praesignis.com');
 
    // Wait for password field
    let passwordField = await driver.findElement(By.id('password'));
    await passwordField.sendKeys('Bridget1994@');
 
    // Wait for login button to be clickable
    let loginButton = await driver.wait(
      until.elementLocated(By.css('button[type="submit"]')),
      10000
    );
 
    await driver.wait(until.elementIsVisible(loginButton), 5000);
    await loginButton.click();
 
    // Wait for successful redirect
    await driver.wait(until.urlContains('Home'), 10000);
 
    console.log('Login successful!');
    console.log('Current URL:', await driver.getCurrentUrl());
 
  } catch (error) {
    console.error('Error during login automation:', error);
  } finally {
    await driver.quit();
  }
 
})();