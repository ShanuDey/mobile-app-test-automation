import Page from "../Page";

class TodoListPage extends Page {
  constructor() {
    super("~tTodoPageView");
  }

  get todoTextInput() {
    return $("~AddTodoTextInput");
  }
  get todoAddButton() {
    return $("~TodoFooterAddButton");
  }
  get todoContainer() {
    return $("~TodoListContainer");
  }
  get todoComponents() {
    return $$("~tTodoComponentView");
  }

  get latestTodoBody() {
    return $('*//android.view.ViewGroup[@content-desc="TodoBodyView"][1]/android.widget.TextView');
  }

  get latestTodoCloseButton() {
    return $('(//android.widget.Button[@content-desc="TodoHeaderDeleteButton"])[1]/android.widget.TextView');
  }
}

export default new TodoListPage();
