package com.twitter.pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import org.joda.time.DateTime;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.twitter.commonutils.datautil;

public class tweetspage extends datautil{

	private static DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
	
	//DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
	
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

	public void RetrieveTweets() throws AWTException, InterruptedException, ParseException
	{
		
		int counter = 1;
		int tweetsize=0;
		String tweet;
		
		Map map=new HashMap();
		Robot robot = new Robot();
		
		for(int i=0;i<3;i++)
		{
		robot.keyPress(KeyEvent.VK_PAGE_DOWN);
		robot.keyRelease(KeyEvent.VK_PAGE_DOWN);
		}
		Thread.sleep(5000);
		ArrayList <WebElement> alltweetlist = (ArrayList<WebElement>) driver.findElements(By.cssSelector("div[data-testid='tweet'] div[class='css-901oao r-18jsvk2 r-1qd0xha r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0'] span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']"));
		ArrayList <WebElement> alltweettime = (ArrayList<WebElement>) driver.findElements(By.cssSelector("div[data-testid='tweet'] time"));
		
		for(WebElement tweettime : alltweettime)
			try{
				{
			String datestring = tweettime.getAttribute("datetime").toString().replace("Z", "");
		//	System.out.println(datestring);
			String datenowstring = LocalDateTime.now(ZoneOffset.UTC).minusHours(2).toString().substring(0,19);
		//	System.out.println(datenowstring);
						
			Date date =formatter.parse(datestring);
			
			Date datenow = formatter.parse(datenowstring);
			
			if(date.after(datenow))
			{
		//	System.out.println(alltweetlist.get(counter).getText());			
			map.put(date.toString().replace("IST ", "UTC "), alltweetlist.get(counter).getText());
			
			tweetsize = alltweetlist.get(counter).getText().length();
			tweet = alltweetlist.get(counter).getText();
			System.out.println();
			System.out.println("New Tweet");
			int i=1;
			if(tweetsize>50)
			{	
				
			do{
				System.out.println(i+"/1 "+tweet.substring(0, 50));
				tweet = tweet.substring(50);
				
				tweetsize = tweet.length();
				i++;
			//	System.out.println(tweet);
			}while(tweetsize>=50);
			}
			System.out.println(i+"/1 "+tweet);
			}
			counter++;
		}
		}catch(IndexOutOfBoundsException e)
		{
			break;
			
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
