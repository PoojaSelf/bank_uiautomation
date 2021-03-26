@all
Feature: Verifying tweets

@tweets
Scenario Outline: Retriving tweets and splitting it
Given Enter valid "<Username>" and "<Password>"
And Click submit
And Go to Times Of India "timesofindia" tweeter page
When Retrive tweets for last 2 hours and split it

Examples:
|Username | Password |
|Pooja84315062|Qwerty@123|

