var axios = require( 'axios' )
var MockAdapter = require( 'axios-mock-adapter' )

// This sets the mock adapter on the default instance
var mock = new MockAdapter( axios, {
    delayResponse: 300
} )


// Mock GET request to /basic
mock.onPost( '/basic' ).reply( function ( config ) {

    var errors = {}
    if ( config.data.get( 'name' ) === '' ) {
        errors.name = [ 'Please enter your Name!' ]
    }
    if ( config.data.get( 'password' ) === '' ) {
        errors.password = [ 'Your Password cannot be blank!' ]
    }
    if ( config.data.get( 'agree' ) === false ) {
        errors.agree = [ 'Your need to accept our terms!' ]
    }
    if ( config.data.get( 'option' ) === '' ) {
        errors.option = [ 'Your need to select one option!' ]
    }
    if ( config.data.get( 'color' ) === '' ) {
        errors.color = [ 'Your need to select a color!' ]
    }
    if ( config.data.get( 'text' ) == '' ) {
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
mock.onPost( '/uploads' ).reply( function ( config ) {
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

mock.onPost( '/get419' ).reply( function () {

    return [ 419, {

    } ]

} )

// Mock POST request to /update
// mock.onPost( '/selecterror' ).reply( function ( config ) {
//     var errors = {}
//     if ( config.data.get( 'emails' ) === '' ) {
//         errors.emails[1] = [ 'This email is not allowed!' ]
//     }
//     return [ 422, {
//         "message": "The given data was invalid.",
//         "errors": errors
//     } ]
// });

mock.onPost("/selecterror").reply(422, {
    "message": "The given data was invalid.",
    "errors": { 'emails.0': ['This email is not allowed!'] }
});

// Mock POST request to /update
mock.onPost( '/update' ).reply( function ( config ) {
    var errors = {}
    if ( config.data.get( 'fullname' ) === '' ) {
        errors.fullname = [ 'Please enter your full name!' ]
    }
    if ( config.data.get( 'bio' ) === '' ) {
        errors.bio = [ 'Please type something!' ]
    }
    if ( config.data.get( 'pet' ) === '' ) {
        errors.pet = [ 'Your need to select a pet!' ]
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

mock.onAny().passThrough()