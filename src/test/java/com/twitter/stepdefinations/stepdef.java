package com.twitter.stepdefinations;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.twitter.commonutils.datautil;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdef extends datautil{
	
	 @Before
	    public void beforeScenario(){
	        setUp();
	    } 
	 
	 @After
	    public void afterScenario(){
		 	driver.close();
			driver.quit();
	    }
	
	@Given("^Enter valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_valid_and(String username, String password) throws Throwable {
		
		waitForElement(login.getLoginButton(), 10000, "");
	    login.getLoginButton().click();
	    
	    waitForElement(login.getUsername(), 10000, "");
	    login.getUsername().sendKeys(username);
	    login.getPassword().sendKeys(password);
	}

	@Given("^Click submit$")
	public void click_submit() throws Throwable {
	    login.getLoginButton().click();
	}
	
	@Then("^Verify if Home page is opened with \"([^\"]*)\"$")
	public void verify_if_Home_page_is_opened_with(String username) throws Throwable {
		
		waitForElement(login.getAccounticon(), 10000, "");
		login.getAccounticon().click();
		
		Thread.sleep(5000);
		
		assertTrue(driver.findElement(By.xpath("//div[@dir='ltr']/span[contains(text(),'"+username+"')]")).isEnabled());
	}
	
	@Then("^Verify if Login Button is disabled$")
	public void verify_if_Login_Button_is_disabled() throws Throwable {
		waitForElement(login.getLoginButton(), 10000, "");
		assertTrue(login.getLoginButton().isEnabled());
		
	}
	
	@Given("^Go to Edit profile page of user \"([^\"]*)\"$")
	public void go_to_Edit_profile_page_of_user(String username) throws Throwable {
		Thread.sleep(5000);
	    driver.findElement(By.cssSelector("main[role='main'] a[href*='"+username+"']")).click();
	    waitForElement(profile.getEditprofileButton(), 10000, "");
	    profile.getEditprofileButton().click();
	}

	@When("^Update profile picture$")
	public void update_profile_picture() throws Throwable {
		waitForElement(profile.getAddphoto(), 10000, "");
	    profile.getAddphoto().click();
	    profile.addPhoto();
	    waitForElement(profile.getApplyButton(), 10000, "");
	    profile.getApplyButton().click();
	    waitForElement(profile.getSaveButton(), 10000, "");
	    profile.getSaveButton().click();
	    Thread.sleep(3000);
	}

	@Then("^Verify if profile picture is updated$")
	public void verify_if_profile_picture_is_updated() throws Throwable {
	  
	}

	@When("^Update Bio$")
	public void update_Bio() throws Throwable {
	waitForElement(profile.getBioTB(), 10000, "");
	   profile.getBioTB().click();
	   profile.getBioTB().clear();
	   profile.getBioTB().sendKeys(properties.getProperty("profile_bio"));
	   waitForElement(profile.getSaveButton(), 10000, "");
	    profile.getSaveButton().click();
	    Thread.sleep(3000);
	}

	@Then("^Verify if Bio is updated$")
	public void verify_if_Bio_is_updated() throws Throwable {
		waitForElement(profile.getEditprofileButton(), 10000, "");
		 profile.getEditprofileButton().click();
		 waitForElement(profile.getBioTB(), 10000, "");
		 profile.getBioTB().click();
		 
		 assertEquals(profile.getBioTB().getAttribute("value"), (properties.getProperty("profile_bio")));
	}

	@When("^Update Location$")
	public void update_Location() throws Throwable {
		waitForElement(profile.getLocationTB(), 10000, "");
		profile.getLocationTB().click();
		   profile.getLocationTB().clear();
		   profile.getLocationTB().sendKeys(properties.getProperty("profile_location"));
		   waitForElement(profile.getSaveButton(), 10000, "");
		    profile.getSaveButton().click();
		    Thread.sleep(3000);
	}

	@Then("^Verify if Location is updated$")
	public void verify_if_Location_is_updated() throws Throwable {
		waitForElement(profile.getEditprofileButton(), 10000, "");
		 profile.getEditprofileButton().click();
		 waitForElement(profile.getLocationTB(), 10000, "");
		 profile.getLocationTB().click();
		 
		 assertEquals(profile.getLocationTB().getAttribute("value"), (properties.getProperty("profile_location")));
		 
	}

	@When("^Update Website$")
	public void update_Website() throws Throwable {
		waitForElement(profile.getWebsiteTB(), 10000, "");
		profile.getWebsiteTB().click();
		   profile.getWebsiteTB().clear();
		   profile.getWebsiteTB().sendKeys(properties.getProperty("profile_website"));
		   waitForElement(profile.getSaveButton(), 10000, "");
		    profile.getSaveButton().click();
		    Thread.sleep(3000);
	}

	@Then("^Verify if Website is updated$")
	public void verify_if_Website_is_updated() throws Throwable {
		 waitForElement(profile.getEditprofileButton(), 10000, "");
		 profile.getEditprofileButton().click();
		 waitForElement(profile.getWebsiteTB(), 10000, "");
		 profile.getWebsiteTB().click();
		 
		 assertTrue(profile.getWebsiteTB().getAttribute("value").contains(properties.getProperty("profile_website")));
		 
	}

	@Given("^Go to Times Of India \"([^\"]*)\" tweeter page$")
	public void go_to_Times_Of_India_tweeter_page(String name) throws Throwable {
		waitForElement(tweets.getSearchTB(), 10000, "");
		tweets.getSearchTB().click();
		tweets.getSearchTB().sendKeys(name);
		tweets.scrollToBottomOfSearchFrame();
		try {
		tweets.getGotoTweeterpage().click();
		}
		catch(StaleElementReferenceException e)
		{
		String url = properties.getProperty("URL");
		driver.navigate().to(url+name);
		}
		String url = properties.getProperty("URL");
		driver.navigate().to(url+name);
	}

	@When("^Retrive tweets for last (\\d+) hours and split it$")
	public void retrive_tweets_for_last_hours_and_split_it(int arg1) throws Throwable {
		Thread.sleep(3000);
		tweets.RetrieveTweets();
	}
}
