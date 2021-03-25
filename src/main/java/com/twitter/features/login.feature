@all
Feature: Validate Login

@login
Scenario Outline: Valid login function
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
Then Verify if Home page is opened with "<Username>"
And Close browser
   	
Examples:
|Username|Password|
|Pooja84315062|Qwerty@123|

@mandatory
Scenario Outline: Mandatory check to login function
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
Then Verify if Login Button is disabled
And Close browser
   	
Examples:
|Username|Password|
|||
|Pooja84315062||
||Qwerty@123|

