class ActionHelper {

    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    static getTitle() {
        return browser.getTitle();
    }

    static launchApp() {
        driver.launchApp();
    }

     public boolean performClick(String element) {
                if (isDisplayed(element)) {
                    waitUntilClickable(element);
                    wbElement.click();
                    return true;
                }
                return false;
            }

     public boolean performSetText(String element, String data) {
                    if (isDisplayed(element)) {
                        wbElement.sendKeys(data);
                        return true;
                    }
                    return false;
                }

     public boolean isIOS() {
                  boolean isIOS = false;
                  if (jvmOptions.getPlatform().equalsIgnoreCase("ios")) {
                      isIOS = true;
                  }
                  return isIOS;
              }

      public boolean isDisplayed(String element) {
                 if (isDisplayed(element)) {
                          return true;
                  }
                      return false;
                  }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static click(locator) {
        $(locator).click();
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

    static clearText(locator) {
        $(locator).clearValue();
    }

    static sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

    static getText(locator) {
        return $(locator).getText();
    }
}

module.exports = ActionHelper;
