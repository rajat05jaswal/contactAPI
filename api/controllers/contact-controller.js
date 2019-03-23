'use strict';
const contactService = require('../services/contact-service');

exports.list=function(req,res){
    const resolve=(contacts) =>{
        res.status(200);
        res.json(contacts);
    }

    contactService.search({})
        .then(resolve)
        .catch(renderErrorResponse(res));
}

exports.get=function(req,res){
    const resolve=(contact) =>{
        res.status(200);
        res.json(contact);
    }

    contactService.get(req.params.contactId)
        .then(resolve)
        .catch(renderErrorResponse(res));
}

exports.post=function(req,res){
    console.log(req.body);
    const newContact= Object.assign({},req.body);
    const resolve= (contact)=>{
        res.status(200);
        res.json(contact);
    };
    contactService.save(newContact)
        .then(resolve)
        .catch(renderErrorResponse)
}

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};