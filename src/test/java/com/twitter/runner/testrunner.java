package com.twitter.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(features = {"src/main/java/com/twitter/features" }, glue = { "com/twitter/stepdefinations" }, 
			tags = {"@all" },																											
			monochrome = true,																								
			dryRun = false,
			
			plugin = {"html:src/main/java/com/is/report/cucumber-reports/HTMLReport.html" }

			)

	 public class testrunner {
	
	}
