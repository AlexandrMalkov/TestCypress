import { ROUTES } from '../constants'
import {homePageHelper} from '../support/homePageHelper'
import { basketPopupHelper } from '../support/basketPopupHelper'


describe('Home', () => {
  describe('Basket', () => {

    beforeEach(() => {
      cy.visit(ROUTES.HOME)
      cy.login('test','test')
    })
      
    it('should open empty basket', () => {

      homePageHelper.basketIconClick()
        basketPopupHelper.goToBasket()


    })


    it('should add 1 regular price item to basket', () => {
      homePageHelper.basketIconClick()
      basketPopupHelper.clearAllButtonClick()
      cy.wait(1000)
      homePageHelper.addRegularPriceItemsToCart(1,true)
      cy.wait(1000)
      homePageHelper.amountOfItemsInBasketIsCorrect(1)
      homePageHelper.basketIconClick()
      basketPopupHelper.checkProductPrices()
      basketPopupHelper.productPrices().should('have.length', 1)
      basketPopupHelper.checkProductTitles(1)
      basketPopupHelper.productTitles().should('have.length', 1)
      basketPopupHelper.checkTotalPriceIsPresent()
      //basketPopupHelper.goToBasket()

  })


  it('should add 1 discount price item to basket', () => {
    homePageHelper.basketIconClick()
    basketPopupHelper.clearAllButtonClick()
    cy.wait(1000)
    homePageHelper.addDiscontItemsToCart(1,true)
    cy.wait(1000)
    homePageHelper.amountOfItemsInBasketIsCorrect(1)
    homePageHelper.basketIconClick()
    basketPopupHelper.checkProductPrices(1)
    basketPopupHelper.productPrices().should('have.length', 1)
    basketPopupHelper.checkProductTitles(1)
    basketPopupHelper.productTitles().should('have.length', 1)
    basketPopupHelper.checkTotalPriceIsPresent()
    //basketPopupHelper.goToBasket()

})


it('should add 8 different items to 1 existing discount price item to basket', () => {

  homePageHelper.addRegularPriceItemsToCart(5,true)
  homePageHelper.switchPage(2)
  cy.wait(1000)
  homePageHelper.addRegularPriceItemsToCart(1,true)
  homePageHelper.addDiscontItemsToCart(2,true)
  cy.wait(1000)
  homePageHelper.amountOfItemsInBasketIsCorrect(9)
  homePageHelper.basketIconClick()
  basketPopupHelper.checkProductPrices(9)
  basketPopupHelper.productPrices().should('have.length', 9)
  basketPopupHelper.checkProductTitles(9)
  basketPopupHelper.productTitles().should('have.length', 9)
  basketPopupHelper.checkTotalPriceIsPresent()
  //basketPopupHelper.goToBasket()

})


it('should add the same 9 items to basket', () => {
  homePageHelper.basketIconClick()
  basketPopupHelper.clearAllButtonClick()
  cy.wait(1000)
  homePageHelper.addDiscontItemsToCart(9,false)
  cy.wait(1000)
  homePageHelper.amountOfItemsInBasketIsCorrect(9)
  homePageHelper.basketIconClick()
  basketPopupHelper.checkProductPrices(1)
  basketPopupHelper.productPrices().should('have.length', 1)
  basketPopupHelper.checkProductTitles(1)
  basketPopupHelper.productTitles().should('have.length', 1)
  basketPopupHelper.checkTotalPriceIsPresent()
  //basketPopupHelper.goToBasket()

})

  })
})
