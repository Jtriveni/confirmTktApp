Feature: Sample feature file to illustrate app and browser tests

  @androidApp
  Scenario: Validate Search Ticket
    Given Launch the Confirmtkt app
    And Select from address as Hyderabad
    And Select to address as Guntur
    And User able to Select date as Tomorrow
    When Tap on Search Train
    Then Validate search results

  @iosApp
  Scenario: Validate Search Ticket
    Given Launch the Confirmtkt app
    And Select from address as Hyderabad
    And Select to address as Guntur
    And User able to Select date as Tomorrow
    When Tap on Search Train
    Then Validate search results

