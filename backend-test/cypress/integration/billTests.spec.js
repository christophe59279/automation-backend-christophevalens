///<reference types="Cypress"/>

import * as Bill from "../helpers/Bill/bill"
import * as Login from "../helpers/Login/login"
import * as Logout from "../helpers/Login/logout"

describe.skip('bill tests', function(){
    it('Login and create a unpaid bill', function(){

    Login.validLogin(cy)
        cy.then((resp =>
            {
            Bill.createUnpaidBill(cy)
                cy.then((resp=>
                {
                Logout.validLogout(cy)
                }))
            }))   
    })

    it('Login and pay a unpaid bill', function(){

        Login.validLogin(cy)
        cy.then((resp =>
            {
            Bill.createUnpaidBill(cy)
                cy.then((resp=>
                    {
                    Bill.payBill(cy)
                        cy.then((resp=>
                        {
                        Logout.validLogout(cy)
                        }))
                    }))
            }))
  
    })
    
})