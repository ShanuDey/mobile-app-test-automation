Feature: This is for Todo List View test automation

    @verifyTodoListOpening
    Scenario: Login and verify todo list is opening
        When I login with 'todouser' and 'todopassword'
        Then I verify login 'Successful'
        When I click on "OK" button in alert window
        Then I verify TodoList view is opened

    @addTodo
    Scenario: add todo and verify todo added successfully
        When I login with 'todouser' and 'todopassword'
        Then I verify login 'Successful'
        When I click on "OK" button in alert window
        Then I verify TodoList view is opened
        When I add "This is new Todo" in todo list
        Then I verify "This is new Todo" added successfully

    @deleteTodo
    Scenario: Delete todo and verify todo deleted successfully
        When I login with 'todouser' and 'todopassword'
        Then I verify login 'Successful'
        When I click on "OK" button in alert window
        Then I verify TodoList view is opened
        When I add "This is new Todo" in todo list
            And I delete latest todo from the todo list
        Then I verify "This is new Todo" not present as latest todo