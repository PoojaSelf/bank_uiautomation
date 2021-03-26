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
  "duration": 7902628600,
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
  "duration": 5644571100,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1630389500,
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
  "duration": 7074742400,
  "status": "passed"
});
formatter.after({
  "duration": 2328321400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@mandatory"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 21,
      "id": "validate-login;mandatory-check-to-login-function;;1"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 22,
      "id": "validate-login;mandatory-check-to-login-function;;2"
    },
    {
      "cells": [
        "Pooja84315062",
        ""
      ],
      "line": 23,
      "id": "validate-login;mandatory-check-to-login-function;;3"
    },
    {
      "cells": [
        "",
        "Qwerty@123"
      ],
      "line": 24,
      "id": "validate-login;mandatory-check-to-login-function;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5511312900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@mandatory"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
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
  "duration": 7520648200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 183982800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 698849400,
  "status": "passed"
});
formatter.after({
  "duration": 2732239300,
  "status": "passed"
});
formatter.before({
  "duration": 6157400900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@mandatory"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"Pooja84315062\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
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
  "duration": 7200950200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 123033000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 714949000,
  "status": "passed"
});
formatter.after({
  "duration": 1114263400,
  "status": "passed"
});
formatter.before({
  "duration": 10993568700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Mandatory check to login function",
  "description": "",
  "id": "validate-login;mandatory-check-to-login-function;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@mandatory"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Enter valid \"\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify if Login Button is disabled",
  "keyword": "Then "
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
  "duration": 2036715200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 110955800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Login_Button_is_disabled()"
});
formatter.result({
  "duration": 774852100,
  "status": "passed"
});
formatter.after({
  "duration": 3145625800,
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
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update profile picture",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify if profile picture is updated",
  "keyword": "Then "
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
formatter.before({
  "duration": 12027411800,
  "status": "passed"
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
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Update profile picture",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify if profile picture is updated",
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
  "duration": 2204320000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1886450300,
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
  "duration": 6596725200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_profile_picture()"
});
formatter.result({
  "duration": 14043197900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_profile_picture_is_updated()"
});
formatter.result({
  "duration": 139400,
  "status": "passed"
});
formatter.after({
  "duration": 1882990200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Updating Bio",
  "description": "",
  "id": "updating-profile-information;updating-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@bio"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Update Bio",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify if Bio is updated",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-bio;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 25,
      "id": "updating-profile-information;updating-bio;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 26,
      "id": "updating-profile-information;updating-bio;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6387959600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Updating Bio",
  "description": "",
  "id": "updating-profile-information;updating-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@bio"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Update Bio",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify if Bio is updated",
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
  "duration": 5557211400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1884040500,
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
  "duration": 7386438800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_Bio()"
});
formatter.result({
  "duration": 6519832500,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Bio_is_updated()"
});
formatter.result({
  "duration": 2047746100,
  "status": "passed"
});
formatter.after({
  "duration": 3219899800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Updating Location",
  "description": "",
  "id": "updating-profile-information;updating-location",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@location"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Update Location",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Verify if Location is updated",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-location;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 38,
      "id": "updating-profile-information;updating-location;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 39,
      "id": "updating-profile-information;updating-location;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6253951800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Updating Location",
  "description": "",
  "id": "updating-profile-information;updating-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@location"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Update Location",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Verify if Location is updated",
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
  "duration": 6328878400,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 1817304800,
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
  "duration": 6554792900,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_Location()"
});
formatter.result({
  "duration": 5937253000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Location_is_updated()"
});
formatter.result({
  "duration": 2026810200,
  "status": "passed"
});
formatter.after({
  "duration": 2694094000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Updating Website",
  "description": "",
  "id": "updating-profile-information;updating-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@website"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Enter valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Go to Edit profile page of user \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Update Website",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify if Website is updated",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "updating-profile-information;updating-website;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 50,
      "id": "updating-profile-information;updating-website;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 51,
      "id": "updating-profile-information;updating-website;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6097920800,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Updating Website",
  "description": "",
  "id": "updating-profile-information;updating-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@website"
    },
    {
      "line": 1,
      "name": "@all"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Enter valid \"Pooja84315062\" and \"Qwerty@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Click submit",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Go to Edit profile page of user \"Pooja84315062\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Update Website",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify if Website is updated",
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
  "duration": 6312878800,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 2153937200,
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
  "duration": 6714721000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.update_Website()"
});
formatter.result({
  "duration": 6020286000,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.verify_if_Website_is_updated()"
});
formatter.result({
  "duration": 1868666300,
  "status": "passed"
});
formatter.after({
  "duration": 1561638400,
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
  "name": "Retriving tweets and splitting it",
  "description": "",
  "id": "verifying-tweets;retriving-tweets-and-splitting-it",
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
  "name": "Go to Times Of India \"timesofindia\" tweeter page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Retrive tweets for last 2 hours and split it",
  "keyword": "When "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verifying-tweets;retriving-tweets-and-splitting-it;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 12,
      "id": "verifying-tweets;retriving-tweets-and-splitting-it;;1"
    },
    {
      "cells": [
        "Pooja84315062",
        "Qwerty@123"
      ],
      "line": 13,
      "id": "verifying-tweets;retriving-tweets-and-splitting-it;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7302446000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Retriving tweets and splitting it",
  "description": "",
  "id": "verifying-tweets;retriving-tweets-and-splitting-it;;2",
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
  "name": "Go to Times Of India \"timesofindia\" tweeter page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Retrive tweets for last 2 hours and split it",
  "keyword": "When "
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
  "duration": 7592555200,
  "status": "passed"
});
formatter.match({
  "location": "stepdef.click_submit()"
});
formatter.result({
  "duration": 2032235700,
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
  "duration": 6730434300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1991560000,
  "status": "passed"
});
});