package com.twitter.pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.twitter.commonutils.datautil;

public class tweetspage extends datautil{

	@FindBy(css="input[data-testid='SearchBox_Search_Input']")
	private WebElement searchTB;
	
	@FindBy(xpath="//li[@data-testid='TypeaheadUser'][1]/div/div[@class='css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci']/div")
	private WebElement firstlist;

	@FindBy(xpath="//span[contains(text(),'Go to')]")
	private WebElement gotoTweeterpage;
	
	@FindBy(css="div[data-testid='tweet'] div[class='css-901oao r-18jsvk2 r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0'] span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']")
	private WebElement tweetText;
	
	public WebElement getSearchTB() {
		return searchTB;
	}

	public void setSearchTB(WebElement searchTB) {
		this.searchTB = searchTB;
	}

	public WebElement getFirstlist() {
		return firstlist;
	}

	public void setFirstlist(WebElement firstlist) {
		this.firstlist = firstlist;
	}

	public WebElement getGotoTweeterpage() {
		return gotoTweeterpage;
	}

	public void setGotoTweeterpage(WebElement gotoTweeterpage) {
		this.gotoTweeterpage = gotoTweeterpage;
	}
	
	public WebElement getTweetText() {
		return tweetText;
	}

	public void setTweetText(WebElement tweetText) {
		this.tweetText = tweetText;
	}

	public void scrollToBottomOfSearchFrame() throws AWTException, InterruptedException
	{
		Robot robot = new Robot();
		
		/*do{
			Thread.sleep(3000);
		 robot.keyPress(KeyEvent.VK_PAGE_DOWN);
		 robot.keyRelease(KeyEvent.VK_PAGE_DOWN);
		 Thread.sleep(2000);
		}while(gotoTweeterpage.isDisplayed());*/
		
		WebDriverWait wait = new WebDriverWait(driver, 10000);
		for (int i = 0; i < 60; i++) {
			if (i <= 60) {

				 wait.until(ExpectedConditions.visibilityOf(gotoTweeterpage));
				wait.until(ExpectedConditions.elementToBeClickable(gotoTweeterpage));
				robot.keyPress(KeyEvent.VK_PAGE_DOWN);
				robot.keyRelease(KeyEvent.VK_PAGE_DOWN);
				Thread.sleep(500);
				break;
			} else {
				System.out.println("");
				Assert.fail("");
			}
		}
		  
	}

	public void RetreiveTweets() throws AWTException, InterruptedException
	{
		int counter = 1;
		
		Map map=new HashMap();
		Robot robot = new Robot();
		
		for(int i=0;i<20;i++)
		{
		robot.keyPress(KeyEvent.VK_PAGE_DOWN);
		robot.keyRelease(KeyEvent.VK_PAGE_DOWN);
		}
		Thread.sleep(5000);
		ArrayList <WebElement> alltweetlist = (ArrayList<WebElement>) driver.findElements(By.cssSelector("div[data-testid='tweet'] div[class='css-901oao r-18jsvk2 r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0'] span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']"));
		ArrayList <WebElement> alltweettime = (ArrayList<WebElement>) driver.findElements(By.cssSelector("div[data-testid='tweet'] time"));
		
		for(WebElement tweettime : alltweettime)
		{
			System.out.println(tweettime.getAttribute("datetime").toString());
			System.out.println(alltweetlist.get(counter).getText());
			
			
			map.put(tweettime.getAttribute("datetime"), alltweetlist.get(counter).getText());
			counter++;
		}
		
		
		/*for(WebElement tweetlist : alltweetlist)
		{
			System.out.println(tweetlist.getText());
			map.put(tweettime.getAttribute("datetime"), tweetlist.getText());
			
		}*/
		
		Set set=map.entrySet(); 
	    Iterator itr=set.iterator();  
	    while(itr.hasNext()){  
	        //Converting to Map.Entry so that we can get key and value separately  
	        Map.Entry entry=(Map.Entry)itr.next();  
	        System.out.println(entry.getKey()+" "+entry.getValue());
	        
	}
	}
}
