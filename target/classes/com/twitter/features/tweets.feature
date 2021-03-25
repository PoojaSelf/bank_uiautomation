@all
Feature: Verifying tweets

@tweets
Scenario Outline: Updating profile picture
Given Go to website
Given Enter valid "<Username>" and "<Password>"
And Click submit
And Go to Times Of India "timesofindia" tweeter page
When Retrive tweets for last 2 hours
And Close browser

Examples:
|Username | Password |
|Pooja84315062|Qwerty@123|

