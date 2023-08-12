class ConfirmTktScreen{
    constructor(){
         private String byContainResourceIDElement = LocatorBuilder.xpath("(//XCUIElementTypeStaticText[contains(@value,'textValue')])[1] | (//*[contains(@resource-id,'textValue')])[1]");

         private String allowNotification = LocatorBuilder.xpath("(//*[contains(@resource-id,'permission_allow_button')]) | (//XCUIElementTypeButton[contains(@value,'permission_allow_button')])[1]");
         private String selectLanguage = LocatorBuilder.xpath("(//*[contains(@resource-id,'btnApply')]) | (//XCUIElementTypeButton[contains(@value,'btnApply')])[1]");

         private String selectAddressTkt = LocatorBuilder.xpath("(//*[contains(@resource-id,'StationlistView')]/android.view.ViewGroup)[1]");
         private String toAddressTkt = LocatorBuilder.xpath("(//*[contains(@resource-id,'shipping_delivery_icon')]) | (//XCUIElementTypeStaticText[contains(@value,'shipping_delivery_icon')])[1]");
         private String selectDateTkt = LocatorBuilder.xpath("(//*[contains(@resource-id,'shipping_delivery_icon')])");
         private String searchTrainTkt = LocatorBuilder.xpath("(//*[contains(@resource-id,'shipping_delivery_icon')])");
         private String searchResultsTkt = LocatorBuilder.xpath("(//*[contains(@resource-id,'shipping_delivery_icon')])");
    }
}

module.exports = new ConfirmTktScreen();
