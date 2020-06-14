///<reference types="Cypress"/>

import * as Login from "../helpers/Login/login"

describe('login tests', function(){
it('valid login', function(){

    Login.validLogin(cy)
})

})