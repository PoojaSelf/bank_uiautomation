$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tweets.feature");
formatter.feature({
  "line": 2,
  "name": "Updating Profile Information",
  "description": "",
  "id": "updating-profile-information",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tweets"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Updating profile picture",
  "description": "",
  "id": "updating-profile-information;updating-profile-picture",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Go to Times Of India \"@timesofindia\" tweeter page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Retrive tweets for last 2 hours",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-profile-picture;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "updating-profile-information;updating-profile-picture;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 14,
      "id": "updating-profile-information;updating-profile-picture;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Updating profile picture",
  "description": "",
  "id": "updating-profile-information;updating-profile-picture;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tweets"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Go to Times Of India \"@timesofindia\" tweeter page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Retrive tweets for last 2 hours",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 5101927100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 13
    },
    {
      "val": "Qwerty@123",
      "offset": 33
    }
  ],
  "location": "stepdef.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 2658167400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 3906881200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@timesofindia",
      "offset": 22
    }
  ],
  "location": "stepdef.go_to_Times_Of_India_tweeter_page(String)"
});
formatter.result({
  "duration": 3427935800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "stepdef.retrive_tweets_for_last_hours(int)"
});
formatter.result({
  "duration": 8371878500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 1156428400,
  "status": "passed"
});
});