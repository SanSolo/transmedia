"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var email_component_1 = require("./email/email.component");
var scene_component_1 = require("./scene/scene.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_toaster_1 = require("angular2-toaster");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ng_bootstrap_1.NgbModule.forRoot(), app_routing_1.appRouting, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule, angular2_toaster_1.ToasterModule],
        declarations: [app_component_1.AppComponent, email_component_1.EmailComponent, scene_component_1.SceneComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map