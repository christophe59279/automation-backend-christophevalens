///<reference types="Cypress"/>

import * as Room from "../helpers/Room/room"
import * as Login from "../helpers/Login/login"

describe('room tests', function(){
    it('Login and view all room, assert for one room', function(){

    Login.validLogin(cy)
    cy.then((resp =>
        {
        Room.viewAllRooms(cy)
        }))
    })

    it('login an create a room', function(){

        Login.validLogin(cy)
        cy.then((resp=>{
            Room.createRoom(cy)
        }))
    })

})