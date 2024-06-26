import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test
{
    public static void main(String args[])
    {
        // ChromeDriverのパスを設定
        System.setProperty("webdriver.chrome.driver", "chromeDriver/chromedriver.exe");

        // WebDriverのインスタンスを作成
        WebDriver driver = new ChromeDriver();

        // 開きたいサイトのURLを引数に指定
	// ロル
        driver.get("https://atom.eplus.jp/sys/main.jsp?prm=U=82:P2=412236:P5=0001:P3=0001:P21=001:P7=1:P6=001:P1=1221:P0=GGWC01:P55=//eplus.jp%2Fsf%2Fdetail%2F4122360001-P0030001P021001%3FP1%2a1221");


	// 日時選択
        // driver.findElement(By.xpath("//*[@id="kouenMsg"]")).click();
	Select dropdown = new Select(driver.findElement(By.id("uji.model.41637.combo")));
	dropdown.selectByValue("001");

	// 座種選択
        // driver.findElement(By.xpath("//*[@id="kouenMsg"]")).click();
	Select dropdown = new Select(driver.findElement(By.id("uji.model.41645.combo")));
	dropdown.selectByValue("40M3/999/03");

	// 枚数選択
        // driver.findElement(By.xpath("//*[@id="kouenMsg"]")).click();
	Select dropdown = new Select(driver.findElement(By.id("uji.model.41646.combo")));
	dropdown.selectByValue("648/1");

        // ログインボタンをクリック
        driver.findElement(By.xpath("//*[@id="login-bt"]")).click();

        // ログインID入力
        driver.findElement(By.xpath("//*[@id="loginId"]")).sendKeys("Hgcll_26@yahoo.co.jp");

        // パスワード入力
        driver.findElement(By.xpath("//*[@id="loginPassword"]")).sendKeys("Occupy123");

        // 申込ボタンを押下する。
        driver.findElement(By.xpath("//*[@id="enter-bt-zumi"]")).click();

	// 支払方法選択
	WebElement radio_b1 = driver.findElement(By.xpath("//*[@id="i14"]"));
	radio_b1.click();

	// 受取方法選択
	WebElement radio_b2 = driver.findElement(By.xpath("//*[@id="cpskt"]"));
	radio_b2.click();

	// 次へボタン押下
	driver.execute_script("clearToken('GB1112_TORIKESI')");

	// 購入ボタン押下
	driver.execute_script("return sChangeURL('GB1104_ENTORI','https://gesicht.eplus.jp/sys/main.jsp')");

    }
}
