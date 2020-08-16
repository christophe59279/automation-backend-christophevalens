///<reference types="Cypress"/>

import * as Room from "../helpers/Room/room"
import * as Login from "../helpers/Login/login"
import * as Logout from "../helpers/Login/logout"

describe('room tests', function(){
    it('Login and view all room, assert for one room', function(){

    Login.validLogin(cy)
    cy.then((resp =>
        {
        Room.viewAllRooms(cy)
        cy.then((resp=>
            {
            Logout.validLogout(cy)
            }))
        }))
    })

    it('login and create a room', function(){

        Login.validLogin(cy)
        cy.then((resp=>{
            Room.createRoom(cy)
            cy.then((resp=>
                {
                Logout.validLogout(cy)
                }))
        }))
    })

    it('login, create a room and delete it', function(){

        Login.validLogin(cy)
        cy.then((resp=>{
            Room.deleteroom(cy)
            cy.then((resp=>
                {
                Logout.validLogout(cy)
                }))
        }))
    })

    

})