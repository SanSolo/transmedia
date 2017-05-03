"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("../../constants.js");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var EmailService = (function () {
    // Resolve HTTP using the constructor
    function EmailService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.emailsUrl = 'https://us15.api.mailchimp.com/3.0/lists/eb7b58de02/members';
        this.apiKey = mailChimpKey;
        this.apiUser = mailChimpUser;
    }
    // Fetch all existing comments
    EmailService.prototype.getComments = function () {
        // ...using get request
        return this.http.get(this.emailsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    EmailService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    EmailService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        var err;
        var body;
        if (error instanceof http_1.Response) {
            body = error.json() || '';
            //err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(JSON.stringify(body.title));
        return Rx_1.Observable.throw(body.title);
    };
    EmailService.prototype.registerEmail = function (adresse, nom, prenom) {
        //let bodyString = JSON.stringify(body); // Stringify payload
        //console.log(bodyString);
        var data = {
            "email_address": adresse,
            "status": "subscribed",
            "merge_fields": {
                "FNAME": prenom,
                "LNAME": nom
            }
        };
        var headers = new http_1.Headers(); // ... Set content type to JSON
        headers.append("Authorization", "Basic " + btoa('prout' + ":" + this.apiKey));
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post('/mailchimp', data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    return EmailService;
}());
EmailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map