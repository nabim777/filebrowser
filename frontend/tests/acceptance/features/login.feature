Feature: login
    As a user
    I want to login to the system
    So that I can manage the files and folders

Background:
    Given the user has browsed to the login page


Scenario: login with valid username and valid password
    When user logs in with username "admin" and password "admin"
    Then user should redirect to the homepage


Scenario Outline: login with invalid username and invalid password
    When user logs in with username "<username>" and password "<password>"
    Then user should see the error message "<message>"
    Examples: 
    | username  | password  | message           |
    | batman    |   1234567 | Wrong credentials |
    | spiderman | 123456789 | Wrong credentials |
    | ironman   |  12345678 | Wrong credentials |