///<reference types="Cypress"/>

import * as Login from "../helpers/Login/Login"

describe('login tests', function(){
it('valid login', function(){

    Login.validLogin(cy)
})

})