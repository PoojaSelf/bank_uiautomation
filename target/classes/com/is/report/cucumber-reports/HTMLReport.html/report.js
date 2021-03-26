$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Login",
  "description": "",
  "id": "validate-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Valid login function",
  "description": "",
  "id": "validate-login;valid-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
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
  "name": "Verify if Home page is opened with \"\u003cUsername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validate-login;valid-login-function;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "validate-login;valid-login-function;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 12,
      "id": "validate-login;valid-login-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9148033400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Valid login function",
  "description": "",
  "id": "validate-login;valid-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
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
  "name": "Verify if Home page is opened with \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
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
  "duration": 6529184700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1673167900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 36
    }
  ],
  "location": "stepdef.verify_if_Home_page_is_opened_with(String)"
});
