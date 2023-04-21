class HomePageHelper{

    basketCountItems(itemsAmount)
    {

    cy.get('#basketContainer .basket-count-items').contains(itemsAmount)
    
    }

    basketIconClick()
    {
    cy.get('#dropdownBasket').click()
    
    }

    addDiscontItemsToCart(itemsAmount,areDifferent)
    {

        if (areDifferent == true)
            {
                for (let i=0;i<itemsAmount;i++)
            {

                cy.get('.note-list').find('.hasDiscount')
                .eq(i).within(() => {
                cy.get('.actionBuyProduct').contains('Купить').click();
                });
            }

            }
        else if (areDifferent == false)
            {
                for (let i=0;i<itemsAmount;i++)
            {
    
            cy.get('.note-list').find('.hasDiscount')
            .first().within(() => {
            cy.get('.actionBuyProduct').contains('Купить').click();
                });
                }
            }    
    }

    addRegularPriceItemsToCart(itemsAmount,areDifferent)
    {

if (areDifferent == true)
{
for (let i=0;i<itemsAmount;i++)
{

    cy.get('.note-list .note-item').not('.hasDiscount')
    .eq(i).within(() => {
        cy.get('.actionBuyProduct').contains('Купить').click();
    });
    
   
}

}
else if (areDifferent == false)
{
    for (let i=0;i<itemsAmount;i++)
    {
    
        cy.get('.note-list .note-item').not('.hasDiscount')
        .first().within(() => {
            cy.get('.actionBuyProduct').contains('Купить').click();
        });
        
       
    }

}
    
    }
    amountOfItemsInBasketIsCorrect(expectedAmount)
    {
    
        cy.get('.basket-count-items').then(($ele) => {
            let amount = $ele.text().trim()
            cy.expect(parseInt(amount)).to.equal(expectedAmount)
          })
    
    
    }

    switchPage(pageNumber)
    {
    cy.get(`[data-page-number="${pageNumber}"]`).click()
    
    }
    


    
}

export const homePageHelper = new HomePageHelper();