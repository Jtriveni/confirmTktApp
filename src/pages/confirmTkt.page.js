const ActionHelper = require('./../helpers/actionHelpers');
require('chai').should();

class ConfirmTktPage {

    getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/native/${platform}/confirmTkt.screen.js`);
    }

    dismissAppRatingIfPresent() {
        if (ActionHelper.isVisible(this.getObjectLocator().rateAppMessage)) {
            ActionHelper.click(this.getObjectLocator().laterButton);
        }
    }

    public void launchTheConfirmtktApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
        assertBoolean(ActionHelper.performClick(allowNotification), this.getClass().getName(), new Object() {
        }.getClass().getEnclosingMethod().getName(), "Tap on allow Notification");
        assertBoolean(ActionHelper.performClick(selectLanguage), this.getClass().getName(), new Object() {
        }.getClass().getEnclosingMethod().getName(), "Tap on select Language");
    }

     public void selectFromAddress(String fromAddress) {
            assertBoolean(ActionHelper.performClick(byContainResourceIDElement.replace("textValue", "LayoutFrom")), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Tap on LayoutFrom");
            assertBoolean(ActionHelper.performSetText(byContainResourceIDElement.replace("textValue", "filter_city_tv"), fromAddress), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Enter From address");
            assertBoolean(ActionHelper.performClick(selectAddressTkt), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Tap on from addres");
        }

        public void selectToAddress(String toAddress) {
            assertBoolean(ActionHelper.performClick(byContainResourceIDElement.replace("textValue", "LayoutTo")), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Tap on LayoutTo");
            assertBoolean(ActionHelper.performSetText(byContainResourceIDElement.replace("textValue", "filter_city_tv"), toAddress), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Enter To address");
            assertBoolean(ActionHelper.performClick(selectAddressTkt), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Tap on To addres");
        }

        public void selectDate(String selectDate) {
            assertBoolean(ActionHelper.performClick(byContainResourceIDElement.replace("textValue", isIOS()?"Tomorrow":"radioTommro")), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Select Date");
        }

        public void tapOnSearchTrain() {
            assertBoolean(ActionHelper.performClick(byContainResourceIDElement.replace("textValue", "ticketSearchButton")), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Tap on Search Train button");
        }

        public void validateSearchResults() {
            assertBoolean(ActionHelper.performClick(byContainResourceIDElement.replace("textValue", "btn_negative")), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Tap on Cancel button");
            assertBoolean(ActionHelper.isDisplayed(byContainResourceIDElement.replace("textValue", "ticketSearchButton")), this.getClass().getName(), new Object() {
            }.getClass().getEnclosingMethod().getName(), "Navigate back to Search Train page");
        }
}

module.exports = ConfirmTktPage;
