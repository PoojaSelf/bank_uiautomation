package com.twitter.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class loginpage {

	
	@FindBy(xpath="//span[(text()='Log in')]")
	private WebElement loginButton;
	
	@FindBy(name="session[username_or_email]")
	private WebElement username;
	
	@FindBy(name="session[password]")
	private WebElement password;

	@FindBy(css="div[aria-label='Account menu'] div div[role='presentation'] div[class='css-1dbjc4n r-1twgtwe r-sdzlij r-rs99b7 r-1p0dtai r-1mi75qu r-1d2f490 r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af']")
	private WebElement accounticon;
	
	public WebElement getLoginButton() {
		return loginButton;
	}

	public void setLoginButton(WebElement loginButton) {
		this.loginButton = loginButton;
	}

	public WebElement getUsername() {
		return username;
	}

	public void setUsername(WebElement username) {
		this.username = username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getAccounticon() {
		return accounticon;
	}

	public void setAccounticon(WebElement accounticon) {
		this.accounticon = accounticon;
	}

	public void setPassword(WebElement password) {
		this.password = password;
	}
	
}
