const {Given, When, Then} = require('cucumber');

const ConfirmTktPage = require('./../pages/confirmTkt.page');

const confirmTktPage = new ConfirmTktPage();

        Given("^Launch the Confirmtkt app$", () -> {
            confirmTktPage.launchTheConfirmtktApp();
        });

        And("^Select from address as (.*)$", (String fromAddress) -> {
            confirmTktPage.selectFromAddress(fromAddress);
        });

        And("^Select to address as (.*)$", (String toAddress) -> {
            confirmTktPage.selectToAddress(toAddress);
        });

        And("^User able to Select date as (.*)$", (String selectDate) -> {
            confirmTktPage.selectDate(selectDate);
        });

        When("^Tap on Search Train$", () -> {
            confirmTktPage.tapOnSearchTrain();
        });

        Then("^Validate search results$", () -> {
            confirmTktPage.validateSearchResults();
        });