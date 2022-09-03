import { When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../supports/Login/Login.page";
import AndroidAlertPage from "../supports/Common/AndroidAlert.page";

When(/^I login with '(.*)' and '(.*)'$/, async(username : string, password : string) => {
    await LoginPage.submitLogin({username, password});
});

Then(/^I verify login '(.*)'$/, async(status : string) => {
    expect(await AndroidAlertPage.title.getText()).toEqual(`Login ${status}`);
});

Then(/^I cancel the alert window$/, async() => {
    await (await AndroidAlertPage.selectButton('CANCEL')).click();
})
