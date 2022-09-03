import { When, Then } from "@wdio/cucumber-framework";
import AndroidAlertPage from "../supports/Common/AndroidAlert.page";
import TodoListPage from "../supports/TodoList/TodoList.page";

When(/^I click on "(.*)" button in alert window$/, async(buttonText:string) => {
    await AndroidAlertPage.selectButton(buttonText).click();
});

Then(/^I verify TodoList view is opened$/, async() => {
    expect(await TodoListPage.todoContainer).toBeDisplayed();
});

When(/^I add "(.*)" in todo list$/, async(todoText: string) => {
    await TodoListPage.todoTextInput.setValue(todoText);
    await TodoListPage.todoAddButton.click();
});

Then(/^I verify "(.*)" added successfully$/, async(todoText: string) => {
    expect(await TodoListPage.latestTodoBody.getText()).toEqual(todoText);
});

When(/^I delete latest todo from the todo list$/, async() => {
    await TodoListPage.latestTodoCloseButton.click();
});

Then(/^I verify "(.*)" not present as latest todo$/, async(todoText:string) => {
    if(await TodoListPage.latestTodoBody.isDisplayed()) {
        expect(await TodoListPage.latestTodoBody.getText()).not.toEqual(todoText);
    }
});
