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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var email_1 = require("./model/email");
var email_service_1 = require("./email.service");
var EmailComponent = (function () {
    function EmailComponent(fb, myService, router) {
        this.myService = myService;
        this.router = router;
        this.emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
        this.errorMessage = '';
        this.model = new email_1.Email('', '', '');
        this.complexForm = fb.group({
            'email': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern(this.emailRegex)])],
            'nom': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])],
            'prenom': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(3)])]
        });
    }
    EmailComponent.prototype.submitForm = function (value) {
        var emailOperation;
        this.model.nom = value.nom;
        this.model.prenom = value.prenom;
        this.model.email = value.email;
        this.addEmail(this.model.email, this.model.prenom, this.model.nom);
        //console.log(this.myService.addComment(this.model));
        console.log('Reactive Form Data: ');
        console.log(value);
    };
    EmailComponent.prototype.addEmail = function (adresse, prenom, nom) {
        var _this = this;
        if (!adresse) {
            return;
        }
        if (!nom) {
            return;
        }
        if (!prenom) {
            return;
        }
        this.myService.registerEmail(adresse, prenom, nom)
            .subscribe(function (test) { return _this.results = test; }, function (error) { return _this.errorMessage = error; }, function () { return _this.goToScene(); });
    };
    EmailComponent.prototype.goToScene = function () {
        console.log('goToScene');
        this.router.navigate(["/scene"]);
    };
    return EmailComponent;
}());
EmailComponent = __decorate([
    core_1.Component({
        selector: 'email-page',
        templateUrl: './email.template.html',
        providers: [email_service_1.EmailService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, email_service_1.EmailService, router_1.Router])
], EmailComponent);
exports.EmailComponent = EmailComponent;
//# sourceMappingURL=email.component.js.map