///<reference types="Cypress"/>

import * as Login from "../helpers/Login/login"

describe('login tests', function(){
it('invalid login', function(){
//den här felar men inte på sätt jag vill!
    Login.invalidLogin(cy)
})

})