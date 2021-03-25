package com.twitter.pages;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class profilepage {

	@FindBy(xpath="//span[contains(text(),'Edit profile')]")
	private WebElement editprofileButton;
	
	@FindBy(css="div[aria-label='Add avatar photo'] div svg")
	private WebElement addphoto;

	@FindBy(xpath="//span[contains(text(),'Apply')]")
	private WebElement applyButton;
	
	@FindBy(xpath="//span[contains(text(),'Save')]")
	private WebElement saveButton;
	
	@FindBy(css="textarea[name='description']")
	private WebElement bioTB;
	
	@FindBy(css="input[name='location']")
	private WebElement locationTB;
	
	@FindBy(css="input[name='url']")
	private WebElement websiteTB;
	
	public WebElement getEditprofileButton() {
		return editprofileButton;
	}

	public void setEditprofileButton(WebElement editprofileButton) {
		this.editprofileButton = editprofileButton;
	}

	public WebElement getAddphoto() {
		return addphoto;
	}

	public void setAddphoto(WebElement addphoto) {
		this.addphoto = addphoto;
	}
	
	public WebElement getApplyButton() {
		return applyButton;
	}

	public void setApplyButton(WebElement applyButton) {
		this.applyButton = applyButton;
	}

	public WebElement getSaveButton() {
		return saveButton;
	}

	public void setSaveButton(WebElement saveButton) {
		this.saveButton = saveButton;
	}

	public WebElement getBioTB() {
		return bioTB;
	}

	public void setBioTB(WebElement bioTB) {
		this.bioTB = bioTB;
	}

	public WebElement getLocationTB() {
		return locationTB;
	}

	public void setLocationTB(WebElement locationTB) {
		this.locationTB = locationTB;
	}

	public WebElement getWebsiteTB() {
		return websiteTB;
	}

	public void setWebsiteTB(WebElement websiteTB) {
		this.websiteTB = websiteTB;
	}

	public void addPhoto() throws AWTException, InterruptedException
	{
		String path = System.getProperty("user.dir");
		path = path.concat("\\documents\\profilephoto.jpg");
		
		Robot robot = new Robot();
		
		StringSelection stringSelection = new StringSelection(path);
		Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
		clipboard.setContents(stringSelection, stringSelection);
		
		Thread.sleep(3000);
		 robot.keyPress(KeyEvent.VK_CONTROL);
		 robot.keyPress(KeyEvent.VK_V);
		 robot.keyRelease(KeyEvent.VK_V);
		 robot.keyRelease(KeyEvent.VK_CONTROL);
		  Thread.sleep(3000);
		robot.keyPress(KeyEvent.VK_ENTER);
		robot.keyRelease(KeyEvent.VK_ENTER);
		
	}
	
}
