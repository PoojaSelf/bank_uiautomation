@all
Feature: Updating Profile Information

@profilephoto
Scenario Outline: Updating profile picture
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
And Go to Edit profile page of user "<Username>"
When Update profile picture
Then Verify if profile picture is updated
And Close browser
   	
Examples:
|Username|Password|
|Pooja84315062|Qwerty@123|

@bio
Scenario Outline: Updating Bio
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
And Go to Edit profile page of user "<Username>"
When Update Bio
Then Verify if Bio is updated
And Close browser
   	
Examples:
|Username|Password|
|Pooja84315062|Qwerty@123|


@location
Scenario Outline: Updating Location
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
And Go to Edit profile page of user "<Username>"
When Update Location
Then Verify if Location is updated
And Close browser
   	
Examples:
|Username|Password|
|Pooja84315062|Qwerty@123|

@website
Scenario Outline: Updating Website
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
And Go to Edit profile page of user "<Username>"
When Update Website
Then Verify if Website is updated
And Close browser
   	
Examples:
|Username|Password|
|Pooja84315062|Qwerty@123|
