package steps;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Base {
    public String url = "https://pt.wikipedia.org";
    public WebDriver driver;

    @Before
    public void iniciar(){

        System.setProperty("webdriver.chrome.driver", "drivers/chrome/88/chromedriver");
        driver = new ChromeDriver();

        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(6000, TimeUnit.MILLISECONDS);
    }

    @After
    public void finalizar(){
        driver.quit();
    }
}
