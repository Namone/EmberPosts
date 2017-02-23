import DS from 'ember-data';

export default DS.RESTAdapter.extend( {
    host: 'https://example.nschroader.com',
    headers: {
        Authorization: 'Basic ' + window.btoa( 'al2xnord@yahoo.com:5946b881-f7bf-11e6-9977-bb082909958a' )
    }
} );
