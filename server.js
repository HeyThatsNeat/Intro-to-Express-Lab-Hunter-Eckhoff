// import modules

import express from 'express'

// import the arianaSongs data

import { arianaSongs } from './data/favorite-ariana-songs-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set('view engine', 'ejs')

// mount Middleware (app.use)



// mount routes

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/arianaSongs', function(req, res) {
    res.render('arianaSongs/index', {
        arianaSongs: arianaSongs
    })
})

app.get('/', function(req, res) {
    res.redirect('/home')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
    console.log('Listening on port 3000')
})