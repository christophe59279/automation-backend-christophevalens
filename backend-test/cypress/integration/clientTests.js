///<reference types="Cypress"/>

import * as Client from "../helpers/Client/client"
import * as Login from "../helpers/Login/login"
import * as Logout from "../helpers/Login/logout"

describe('client tests', function(){
    it('Login and view all clients, assert', function(){

    Login.validLogin(cy)
    cy.then((resp =>
        {
        Client.viewAllClients(cy)
        cy.then((resp=>
            {
            Logout.validLogout(cy)
            }))
        }))
    })

    it('login and create a client', function(){

        Login.validLogin(cy)
        cy.then((resp=>{
            Client.createClient(cy)
            cy.then((resp=>
                {
                Logout.validLogout(cy)
                }))
        }))
    })

    it('login, create a client and edit it', function(){

        Login.validLogin(cy)
        cy.then((resp=>{
            Client.createClient(cy)
            cy.then((resp=>{
                Client.editClientAfterGet(cy)
                cy.then((resp=>
                    {
                    Logout.validLogout(cy)
                    }))
            }))
        }))
            
    })

    

})