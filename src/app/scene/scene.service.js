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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var SceneService = (function () {
    function SceneService(http) {
        this.http = http;
        this.mainUrl = 'http://daro.kietumedia.ch/wp-json/wp/v2/posts'; // URL to web API
        this.scenesUrl = '';
    }
    SceneService.prototype.getScenes = function () {
        return this.http.get(this.scenesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SceneService.prototype.getScenesById = function (sceneId) {
        this.scenesUrl = '';
        this.scenesUrl = this.mainUrl + '/' + sceneId + '?_embed';
        return this.http.get(this.scenesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SceneService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SceneService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return SceneService;
}());
SceneService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SceneService);
exports.SceneService = SceneService;
/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/
//# sourceMappingURL=scene.service.js.map