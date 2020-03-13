const express = require('express')
const Route = express.Router()
var app = express()
// const { authentication, authorization } = require("../helpers/auth");

const {
    createAccount,
    // readAccount,
    // updateAccount,
    // deleteAccount,
    // login
} = require('../controllers/account')

const { uploadImages } = require("../controllers/upload");

Route
    .post('/', uploadImages, createAccount)
    .get('/')
    .patch('/:accountId')
    .delete('/:accountId')
    .post('/login')

module.exports = Route