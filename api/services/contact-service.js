'use strict';
const mongoose = require('mongoose'),
    Contact = mongoose.model('contacts');


exports.search = function (params) {
    const promise = Contact.find(params).exec()
    return promise;
};

exports.get = function (contactId){
    const promise=Contact.findById(contactId).exec();
    return promise;
}

exports.save = function (contact, callback) {
    let newContact = new Contact(contact);
    const promise= newContact.save();
    return promise;
};

