var axios = require( 'axios' )
var MockAdapter = require( 'axios-mock-adapter' )

// This sets the mock adapter on the default instance
var mock = new MockAdapter( axios, {
    delayResponse: 300
} )


// Mock GET request to /basic
mock.onPost( '/basic' ).reply( function ( config ) {
    var errors = {}
    var data = JSON.parse( config.data )
    if ( data.name === '' ) {
        errors.name = [ 'Please enter your Name!' ]
    }
    if ( data.password === '' ) {
        errors.password = [ 'Your Password cannot be blank!' ]
    }
    if ( data.agree === false ) {
        errors.agree = [ 'Your need to accept our terms!' ]
    }
    if ( data.option === '' ) {
        errors.option = [ 'Your need to select one option!' ]
    }
    if ( data.color === '' ) {
        errors.color = [ 'Your need to select a color!' ]
    }
    if ( data.text === '' ) {
        errors.text = [ 'Please type something!' ]
    }

    if ( errors === {} ) {
        return [ 200, {
            "message": "All good!",
        } ]
    }
    return [ 422, {
        "message": "The given data was invalid.",
        "errors": errors
    } ]

} )

// Mock POST request to /upload
mock.onPost( '/upload' ).reply( function ( config ) {
    var errors = {}

    if ( config.data.get( 'avatar' ) === '' ) {
        errors.avatar = [ 'Please select an image!' ]
    }

    if ( errors === {} ) {
        return [ 200, {
            "message": "All good!",
        } ]
    }
    return [ 422, {
        "message": "The given data was invalid.",
        "errors": errors
    } ]
} )