Feature: Signin
    As A user I want to log on to Amazon, search out “Iceworks 5000”,
    add to basket and verify the price of the item matches the checkout total.

    Background:
        Given Amazon.co.uk is open "https://www.amazon.co.uk/gp/cart/view.html?ref_=nav_cart"
        
    
     @test
    Scenario: Sign into Amazon.co.uk
    When I click Sign-in
        And enter "username" username
        And I Continue
        And enter "password" password
        And I signed in
        Then I am logged in

    @test
    Scenario: Search for product add to basket
        When I search for "iceworks 5000"
        Then the search results are displayed
        Then the search results has the "iceworks 5000" in it

    @test
    Scenario: Check basket total
        When I add "iceworks 5000" to my basket
        When I check my basket total
        Then it should match the price of the item added into basket
      
