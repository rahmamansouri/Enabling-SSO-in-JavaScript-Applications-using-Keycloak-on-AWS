var keycloak = new Keycloak();

function initKeycloak(){
   keycloak.init({onLoad: 'login-required'}).then(function() {
        constructTableRows(keycloak.idTokenParsed);
        pasteToken(keycloak.token);
    });
}

function constructTableRows(keycloakToken) {
    document.getElementById('row-username').innerHTML = keycloakToken.preferred_username;
    document.getElementById('row-firstName').innerHTML = keycloakToken.given_name;
    document.getElementById('row-lastName').innerHTML = keycloakToken.family_name;
    document.getElementById('row-name').innerHTML = keycloakToken.name;
    document.getElementById('row-email').innerHTML = keycloakToken.email;
}

function pasteToken(token){
    document.getElementById('ta-token').value = token;
    document.getElementById('ta-refreshToken').value = keycloak.refreshToken;
}

var refreshToken = function() {
    keycloak.updateToken(-1)
    .then(function(){
        document.getElementById('ta-token').value = keycloak.token;
        document.getElementById('ta-refreshToken').value = keycloak.refreshToken;
    });
}


var logout = function() {
   
    keycloak.logout({"redirectUri":"http://127.0.0.1:5500/JavaScriptApp1/logout.html"});
}




