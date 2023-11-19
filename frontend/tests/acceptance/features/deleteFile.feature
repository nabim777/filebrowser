Feature: Delete a file
    As a user
    I want to manage a file
    So that I can remove it

Scenario: delete a file
    Given the user has browsed to the login page
    And the user has logged in with username "admin" and password "admin"
    And the user adds file "demo.txt" with content "hello world"
    When user has delete file "demo.txt"
    # Then for user there should contain files "demo.txt"