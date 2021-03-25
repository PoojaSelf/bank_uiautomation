package com.twitter.commonutils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.function.Function;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.twitter.pages.loginpage;
import com.twitter.pages.profilepage;
import com.twitter.pages.tweetspage;

import io.github.bonigarcia.wdm.WebDriverManager;

public class datautil {

	
	public static WebDriver driver;
	public static Properties properties;
	public loginpage login;
	public profilepage profile;
	public tweetspage tweets;
	
	public void setUp() {
		
		WebDriverManager.chromedriver().version("89").setup();
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://www.twitter.com/");
		
		initializePageFactory();
		loadTestData();
	
	}
		
	public static void waitForElement(final WebElement locator,
			int waitTime, String message) throws Exception {

		WebDriverWait wait = new WebDriverWait(driver, waitTime);
		for (int i = 0; i < 60; i++) {
			if (i <= 60) {

				 wait.until(ExpectedConditions.visibilityOf(locator));
				wait.until(ExpectedConditions.elementToBeClickable(locator));
				Thread.sleep(500);
				break;
			} else {
				System.out.println(message);
				Assert.fail(message);
			}
		}
	}
	
	
	private void initializePageFactory() {
		
	login = PageFactory.initElements(driver, loginpage.class);
	profile = PageFactory.initElements(driver, profilepage.class);	
	tweets = PageFactory.initElements(driver, tweetspage.class);
	
	}
	
	public void loadTestData() {
		
		properties = loadResource(properties, "testdata"+File.separator+"testdata.properties");
		
	}
	
	public Properties loadResource(Properties prop, String resourceName) {
		ClassLoader classloader = Thread.currentThread().getContextClassLoader();
		InputStream inputStream = classloader.getResourceAsStream(resourceName);
		try {
			prop = new Properties();
			prop.load(inputStream);
			return prop;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return prop;
	}
}
