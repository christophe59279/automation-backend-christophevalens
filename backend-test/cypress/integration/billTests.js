///<reference types="Cypress"/>

import * as Bill from "../helpers/Bill/bill"
import * as Login from "../helpers/Login/login"

describe('bill tests', function(){
    it('Login and create a unpaid bill', function(){

    Login.validLogin(cy)
    cy.then((resp =>
        {
        Bill.createUnpaidBill(cy)
        }))
    })

    it('Login and pay a unpaid bill', function(){

        Login.validLogin(cy)
        cy.then((resp =>
            {
            Bill.payBill(cy)
            }))
    })

    

    
})