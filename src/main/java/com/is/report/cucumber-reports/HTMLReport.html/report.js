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
  "duration": 5349027800,
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
  "duration": 5729172699,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 2381988501,
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
  "duration": 6231582300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 1039196599,
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
  "duration": 4695600600,
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
  "duration": 5495151200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 46662000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 583050900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 4691808600,
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
  "duration": 4222292801,
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
  "duration": 5607284899,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 46665100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 588734500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 4678017701,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;;4",
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
  "name": "Enter valid \"\" and \"Qwerty@123\"",
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
  "duration": 4267164301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "Qwerty@123",
      "offset": 20
    }
  ],
  "location": "stepdef.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 2446549300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 48488600,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 583662000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 4720295601,
  "status": "passed"
});
formatter.uri("profileinfo.feature");
formatter.feature({
  "line": 2,
  "name": "Updating Profile Information",
  "description": "",
  "id": "updating-profile-information",
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
  "name": "Updating profile picture",
  "description": "",
  "id": "updating-profile-information;updating-profile-picture",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@profilephoto"
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
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Update profile picture",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify if profile picture is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-profile-picture;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "updating-profile-information;updating-profile-picture;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 16,
      "id": "updating-profile-information;updating-profile-picture;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Updating profile picture",
  "description": "",
  "id": "updating-profile-information;updating-profile-picture;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@profilephoto"
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
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Update profile picture",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify if profile picture is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 4221314500,
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
  "duration": 6177975700,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1293171200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 33
    }
  ],
  "location": "stepdef.go_to_Edit_profile_page_of_user(String)"
});
formatter.result({
  "duration": 5885336200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_profile_picture()"
});
formatter.result({
  "duration": 13555892501,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_profile_picture_is_updated()"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 1110618299,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Updating Bio",
  "description": "",
  "id": "updating-profile-information;updating-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@bio"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Update Bio",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Verify if Bio is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-bio;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 29,
      "id": "updating-profile-information;updating-bio;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 30,
      "id": "updating-profile-information;updating-bio;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Updating Bio",
  "description": "",
  "id": "updating-profile-information;updating-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@bio"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Update Bio",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Verify if Bio is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 6160845199,
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
  "duration": 7536149901,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1542005900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 33
    }
  ],
  "location": "stepdef.go_to_Edit_profile_page_of_user(String)"
});
formatter.result({
  "duration": 6322938201,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_Bio()"
});
formatter.result({
  "duration": 4713579800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Bio_is_updated()"
});
formatter.result({
  "duration": 1282805100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 1399426099,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Updating Location",
  "description": "",
  "id": "updating-profile-information;updating-location",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@location"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Update Location",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify if Location is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-location;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 44,
      "id": "updating-profile-information;updating-location;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 45,
      "id": "updating-profile-information;updating-location;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Updating Location",
  "description": "",
  "id": "updating-profile-information;updating-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@location"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Update Location",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Verify if Location is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 5026660200,
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
  "duration": 5923054200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 2441067799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 33
    }
  ],
  "location": "stepdef.go_to_Edit_profile_page_of_user(String)"
});
formatter.result({
  "duration": 6433546001,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_Location()"
});
formatter.result({
  "duration": 5010222401,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Location_is_updated()"
});
formatter.result({
  "duration": 1291853800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 4965785400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Updating Website",
  "description": "",
  "id": "updating-profile-information;updating-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@website"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Update Website",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Verify if Website is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-website;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 58,
      "id": "updating-profile-information;updating-website;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 59,
      "id": "updating-profile-information;updating-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 59,
  "name": "Updating Website",
  "description": "",
  "id": "updating-profile-information;updating-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@website"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "Go to website",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Update Website",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "Verify if Website is updated",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 4835423600,
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
  "duration": 5484327800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1732449000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pooja84315062",
      "offset": 33
    }
  ],
  "location": "stepdef.go_to_Edit_profile_page_of_user(String)"
});
formatter.result({
  "duration": 5807813100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_Website()"
});
formatter.result({
  "duration": 5525234201,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Website_is_updated()"
});
formatter.result({
  "duration": 1325461899,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 2235585801,
  "status": "passed"
});
formatter.uri("tweets.feature");
formatter.feature({
  "line": 2,
  "name": "Verifying tweets",
  "description": "",
  "id": "verifying-tweets",
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
  "name": "Updating profile picture",
  "description": "",
  "id": "verifying-tweets;updating-profile-picture",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tweets"
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
  "name": "Go to Times Of India \"timesofindia\" tweeter page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Retrive tweets for last 2 hours",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verifying-tweets;updating-profile-picture;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "verifying-tweets;updating-profile-picture;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 15,
      "id": "verifying-tweets;updating-profile-picture;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Updating profile picture",
  "description": "",
  "id": "verifying-tweets;updating-profile-picture;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@all"
    },
    {
      "line": 4,
      "name": "@tweets"
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
  "name": "Go to Times Of India \"timesofindia\" tweeter page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Retrive tweets for last 2 hours",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepdef.go_to_website()"
});
formatter.result({
  "duration": 4735315700,
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
  "duration": 5114590000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 4364384899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "timesofindia",
      "offset": 22
    }
  ],
  "location": "stepdef.go_to_Times_Of_India_tweeter_page(String)"
});
formatter.result({
  "duration": 3087637599,
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
  "duration": 8242813300,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.close_browser()"
});
formatter.result({
  "duration": 1193938000,
  "status": "passed"
});
});