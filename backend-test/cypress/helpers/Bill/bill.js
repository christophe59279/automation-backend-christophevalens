///<reference types="Cypress"/>

function createUnpaidBill(cy){
    cy.request({
        method:'POST',
        url:'http://localhost:3000/api/bill/new',
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body:{"value":"3000"}

    }).then((resp=>{
        cy.log(resp.body)
        expect(resp.body.value).to.eq(3000)
        Cypress.env({billID:resp.body.id})
        Cypress.env({billValue:resp.body.value})
        cy.log(Cypress.env().billID)
    }))
}


function payBill(cy){
    let editBillURL='http://localhost:3000/api/bill/'

cy.request({
    method:'PUT',
    url:editBillURL+JSON.stringify(Cypress.env().billID),
    headers:{
        'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
        "Content-Type": "application/json"
    },
    body:{
        'value':JSON.stringify(Cypress.env().billValue),
        'id':JSON.stringify(Cypress.env().billID),
        "paid":true
    }
}).then((resp=>{
    cy.log(resp.body)
    expect(resp.body.value).to.eq(3000)
    expect(resp.body.paid).to.eq(true)
    
}))



    
}



module.exports=
{
    createUnpaidBill,
    payBill
}