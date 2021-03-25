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
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify if Home page is opened with \"\u003cUsername\u003e\"",
  "keyword": "Then "
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
  "id": "validate-login;valid-login-function;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "validate-login;valid-login-function;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 14,
      "id": "validate-login;valid-login-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
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
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify if Home page is opened with \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
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
  "duration": 5630304100,
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
  "duration": 5751436400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1399107299,
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
formatter.result({
  "duration": 6661755500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 4902220200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@mandatory"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 25,
      "id": "validate-login;mandatory-check-to-login-function;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 26,
      "id": "validate-login;mandatory-check-to-login-function;;2"
    },
    {
      "cells": [
        "Pooja84315062",
        ""
      ],
      "line": 27,
      "id": "validate-login;mandatory-check-to-login-function;;3"
    },
    {
      "cells": [
        "",
        "Qwerty@123"
      ],
      "line": 28,
      "id": "validate-login;mandatory-check-to-login-function;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@mandatory"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter valid \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 4651145100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "stepdef.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 6053398799,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 66286999,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 620701699,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 1255109400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@mandatory"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Enter valid \"Pooja84315062\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 4612954300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 13
    },
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "stepdef.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 6262560599,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 53917299,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 583734900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
