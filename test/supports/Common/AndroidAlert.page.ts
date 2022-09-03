import Page from '../Page';

class AndroidAlertPage extends Page {
    constructor(){
        super('*//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    }

    get title() { return $('*//android.widget.TextView[@resource-id="android:id/alertTitle"]'); }
    selectButton(buttonText:string) {
        return $(`*//android.widget.Button[@text="${buttonText}"]`);
    }
}   

export default new AndroidAlertPage();
