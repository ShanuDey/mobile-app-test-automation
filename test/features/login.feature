Feature: This is for testing login feature in Todo App

    Scenario Outline: verify login with different test data
        When I login with '<username>' and '<password>'
        Then I verify login '<status>'

    Examples:
        | username  | password      | status     |
        | todouser  | todopassword  | successful |
        | notuser   | testpass      | failed     |