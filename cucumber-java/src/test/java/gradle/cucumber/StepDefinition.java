package gradle.cucumber;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import static junit.framework.TestCase.assertTrue;


public class StepDefinition {

    WebDriver driver =null;

    @Given("^playアプリケーションの立ち上げ$")
    public void playアプリケーションの立ち上げ() {
        System.setProperty("webdriver.chrome.driver", "Driver/chromedriver");
        driver = new ChromeDriver();
        driver.get("http://localhost:9000/");
    }

    @Then("^推しを投票してねと表示される")
    public void 推しを投票してねと表示される() throws Throwable {
        Thread.sleep(1000);
        WebElement element = driver.findElement(By.tagName("h1"));
        String text = element.getText();
        assertTrue(text.contains("推しを投票してね"));
        driver.quit();
    }
}
