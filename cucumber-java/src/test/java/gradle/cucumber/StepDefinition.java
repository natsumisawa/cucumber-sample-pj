package gradle.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static junit.framework.TestCase.assertTrue;

public class StepDefinition {

    WebDriver driver =null;

    @Given("^playアプリケーションの立ち上げ$")
    public void playアプリケーションの立ち上げ() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "Driver/chromedriver");
        driver = new ChromeDriver();
        driver.get("http://localhost:9000/");
        Thread.sleep(2000);
    }

    @Then("^トップページに遷移$")
    public void トップページに遷移() throws Throwable {
        Thread.sleep(1000);
        WebElement element = driver.findElement(By.tagName("h1"));
        String text = element.getText();
        assertTrue(text.contains("究極の選択"));
    }

    @And("^乃木坂3期生が表示される$")
    public void 乃木坂3期生が表示される() throws Throwable {
        Thread.sleep(1000);
        assertTrue(driver.findElement(By.tagName("input")).isDisplayed());
    }

    @And("^与田祐希のチェックボックスをチェックする$")
    public void 与田祐希のチェックボックスをチェックする() throws Throwable {
        WebElement element = driver.findElement(By.cssSelector("input[value='yuki']"));
        element.click();
        Thread.sleep(2000);
        assertTrue(element.isSelected());
    }

    @And("^与田祐希に投票できる$")
    public void 与田祐希に投票できる() throws Throwable {
        WebElement element = driver.findElement(By.cssSelector("input[value='投票']"));
        element.click();
    }

    @Then("^投票完了と表示される$")
    public void 投票完了と表示される() throws Throwable {
        Thread.sleep(2000);
        WebElement element = driver.findElement(By.tagName("h2"));
        assertTrue(element.getText().contains("投票完了"));
        driver.quit();
    }
}
