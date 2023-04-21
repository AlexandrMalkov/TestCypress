import { ROUTES } from '../constants'


class BasketPopupHelper{



    clearAllButtonClick()
    {
    cy.get('.actionClearBasket').contains('Очистить корзину').click()
    //cypress do not support Xpath by default so here just an example of selector //a[text()='Очистить корзину']
    
    }


    checkProductTitles(productsAmount)
    {


for (let i=0;i<productsAmount;i++)
{

    cy.get('.basket-item ')
    .eq(i).within(() => {
        cy.get('.basket-item-title').invoke('text').should('not.be.empty');
        
    });
    
   
}
    }


    productTitles()
    {

    return(cy.get('.basket-item ').find('.basket-item-title'))

    
   
}

checkProductPrices()
{

    cy.get('.basket-item ').find('.basket-item-price').each(($ele) => {
        let price = $ele.text().trim().replace(/[^0-9]/g, '')
        cy.expect(parseInt(price)).to.be.greaterThan(0)
      })


}


productPrices()
{

return(cy.get('.basket-item ').find('.basket-item-price'))

}

checkTotalPriceIsPresent()
{

    cy.get('.basket_price').then(($ele) => {
        let price = $ele.text().trim().replace(/[^0-9]/g, '')
        cy.expect(parseInt(price)).to.be.greaterThan(0)
      })


}

goToBasket()
{
    cy.get(`[href="${ROUTES.BASKET}"]`).click()
    cy.request('https://enotes.pointschool.ru/basket').then((response) => {
        expect(response.status).to.eq(200)
cy.get('.site-error').should('not.exist')


})
    
}


}

export const basketPopupHelper = new BasketPopupHelper();