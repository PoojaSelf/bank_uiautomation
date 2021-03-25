package com.twitter.runner;

import java.io.File;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


	@RunWith(Cucumber.class)
	@CucumberOptions(features = {"src/main/java/com/twitter/features" }, glue = { "com/twitter/stepdefinations" }, 
			tags = {"@all" },																											
			monochrome = true,																								
			dryRun = false,
			
			plugin = {"html:src/main/java/com/is/report/cucumber-reports/HTMLReport.html" }

			)

	public class testrunner {

		private TestNGCucumberRunner testNGCucumberRunner;
		
		@BeforeClass(alwaysRun = true)
		public void setUpClass() throws Exception {
			testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
		}

	/*	@Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
		public void feature(CucumberFeatureWrapper cucumberFeature) {
			testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
		}*/

	/*	@DataProvider
		public Object[][] features() {
			return testNGCucumberRunner.provideFeatures();
		}*/

		/*
		 * writeExtentReport() method is used to load extent-config.xml file to generate
		 * to extent report
		 */
	/*	@AfterClass
		public static void writeExtentReport() throws InterruptedException {
			//Reporter.loadXMLConfig("src\\main\\java\\com\\is\\configFile\\extent-config.xml");
		}*/

		/*
		 * emailableReport() is used to send the extent report thorugh email after
		 * executing all test cases
		 */
		
		@AfterSuite
		public static void emailableReport() throws InterruptedException {
		//	EmailableExtentReport.emailReport();
			
			String path = System.getProperty("user.dir");
			
			rename(path+"\\src\\main\\java\\com\\is\\report\\");
			}

		@AfterClass(alwaysRun = true)
		public void tearDownClass() throws Exception {
			testNGCucumberRunner.finish();

		}
		
		public static void rename(String folder_path) {
		       
		    File myfolder = new File(folder_path);      
		    File[] file_array = myfolder.listFiles();
		    for (int i = 0; i < file_array.length; i++)
		    {
		        String long_file_name = file_array[i].getName();
		        if (file_array[i].isDirectory()&& long_file_name.equals("cucumber-reports") )
		        {
		            SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss");
		            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		            File myfile = new File(folder_path + "\\" + long_file_name);             
		            String new_file_name = "cucumber-reports"+sdf.format(timestamp);
		            myfile.renameTo(new File(folder_path + "\\" + new_file_name));
		        }
		    }
		  }
	}
