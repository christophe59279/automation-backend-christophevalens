///<reference types="Cypress"/>



function viewAllClients(cy){
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/api/clients',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
    }).then((resp => {
        expect(resp.status).to.eq(200)
        let lastId=resp.body[resp.body.length -1].id
        cy.log(lastId)//last index in the array
        
    }))
}





function createClient(cy){
    cy.request({
        method:'POST',
        url:'http://localhost:3000/api/client/new',
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        body:{
            "name":"Christophe",
            "email":"christophe@email.com",
            "telephone":"0738989898"
        }

    }).then((resp=>{
        cy.log(resp.body)
        expect(resp.body.name).to.eq('Christophe')
        
        //Cypress.env({billID:resp.body.id})
        //Cypress.env({billValue:resp.body.value})
        //cy.log(Cypress.env().billID)
    }))
   
}






function editClientAfterGet(cy){
    const editURL='http://localhost:3000/api/client/'
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/api/clients',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            "Content-Type": "application/json"
        },
        
    }).then((resp => {
        expect(resp.status).to.eq(200)
        let lastClientId= resp.body[resp.body.length -1].id
        cy.log(lastClientId)
        
        cy.request({
            method:'PUT',
            url:editURL+lastClientId,
            headers: {
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                "Content-Type": "application/json"
            },
            body:{
                "id":lastClientId,
                "name":"Selma",
                "email":"Selma@email.com",
                "telephone":"0737272721"
            }
        }).then((resp=>{
            expect(resp.status).to.eq(200)
            expect(resp.body.name).to.eq('Selma')
        }))
       
    }))


}


module.exports=
{
    viewAllClients,
    createClient,
    editClientAfterGet
}