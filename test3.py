from selenium import webdriver
from selenium.webdriver.common.by import By
import time

# Define the function
def test_signup_popup(driver):
    driver.get("https://softwaretestingv1.praesignis.com/softwaretestingv1/Sign_Up_Page.html")
    time.sleep(1)

    # Fill in the email and password
    driver.find_element(By.ID, "name").send_keys("Bree M")
    driver.find_element(By.ID, "email").send_keys("bridget.mahlangu@praesignis.com")
    driver.find_element(By.ID, "password").send_keys("Bridget1994@")

    # Submit the form by clicking the Sign Up button
    driver.find_element(By.XPATH, "//form[@id='signupForm']//button[text()='Sign Up']").click()
    time.sleep(2)

    # Verify the popup
    popup = driver.find_element(By.ID, "promo-popup")
    popup_message = driver.find_element(By.ID, "promo-popup-message").text

    assert popup.is_displayed(), "Sign-UP popup did not display."
    assert "success" in popup_message.lower(), f"Unexpected message: {popup_message}"

    print("Sign-Up popup test passed on", driver.name)

# Run the test
chrome_driver = webdriver.Chrome()
test_signup_popup(chrome_driver)
chrome_driver.quit()