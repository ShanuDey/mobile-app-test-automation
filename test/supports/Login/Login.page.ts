import Page from "../Page";

class LoginPage extends Page {
    constructor() {
        super('~tLoginPageView');
    }
    get usernameInput() { return $('~tUsernameTextInput'); }
    get passwordInput() { return $('~tPasswordTextInput'); }
    get loginButton() { return $('~tLoginButton'); }
    get resetButton() { return $('~tResetButton'); }

    async submitLogin({username, password}:{username:string, password:string}) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
