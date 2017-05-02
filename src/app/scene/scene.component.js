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
var scene_service_1 = require("./scene.service");
var angular2_toaster_1 = require("angular2-toaster");
var SceneComponent = SceneComponent_1 = (function () {
    function SceneComponent(sceneService, toasterService) {
        this.sceneService = sceneService;
        this.scenes = [];
        this.sceneId = '1';
        this.cashBar = 0;
        this.prodBar = 0;
        this.popBar = 0;
        this.choix = '';
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: false,
            tapToDismiss: false,
            timeout: 15000
        });
        this.toasterService = toasterService;
    }
    SceneComponent.prototype.ngOnInit = function () { this.getScenesById('1'); };
    SceneComponent.prototype.nextScene = function (choix) {
        window.scrollTo(0, 0);
        this.getScenesById(choix);
        if (this.reponseId === 'radio1') {
            this.cashBar += parseInt(this.scene.acf.cash_1);
            this.prodBar += parseInt(this.scene.acf.production_1);
            this.popBar += parseInt(this.scene.acf.popularite_1);
        }
        if (this.reponseId === 'radio2') {
            this.cashBar += parseInt(this.scene.acf.cash_2);
            this.prodBar += parseInt(this.scene.acf.production_2);
            this.popBar += parseInt(this.scene.acf.popularite_2);
        }
        if (this.reponseId === 'radio3') {
            this.cashBar += parseInt(this.scene.acf.cash_3);
            this.prodBar += parseInt(this.scene.acf.production_3);
            this.popBar += parseInt(this.scene.acf.popularite_3);
        }
        console.log('Cashbar ' + this.cashBar);
        console.log('Prodbar ' + this.prodBar);
        console.log('Popbar ' + this.popBar);
    };
    SceneComponent.prototype.popToast = function (scene) {
        this.toasterService.clear();
        console.log(this.scene.acf.parle);
        if (this.scene.acf.parle === 'Comem') {
            this.toasterService.pop('warning', 'Denis', this.scene.acf.eracom);
            this.toasterService.pop('success', 'Emilie', this.scene.acf.comem);
        }
        else {
            this.toasterService.pop('success', 'Emilie', this.scene.acf.comem);
            this.toasterService.pop('warning', 'Denis', this.scene.acf.eracom);
        }
    };
    SceneComponent.prototype.getScenesById = function (sceneId) {
        var _this = this;
        this.sceneService.getScenesById(sceneId)
            .subscribe(function (value) { return _this.scene = value; }, function (error) { return _this.errorMessage = error; }, function () { return _this.popToast(_this.scene); });
    };
    SceneComponent.prototype.getId = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        console.log(value);
        this.reponseId = value;
    };
    SceneComponent.prototype.toggleScene = function () {
        // this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    };
    return SceneComponent;
}());
SceneComponent = SceneComponent_1 = __decorate([
    core_1.NgModule({
        imports: [angular2_toaster_1.ToasterModule],
        declarations: [SceneComponent_1],
        providers: [],
        bootstrap: [SceneComponent_1]
    }),
    core_1.Component({
        selector: 'scene-page',
        templateUrl: './scene.template.html',
        providers: [scene_service_1.SceneService] /*,
        animations: [
            trigger('hideScene', [
                state('inactive', style({
                    display: 'none'
                })),
                state('active', style({
                    display: 'block'
                })),
                transition('inactive => active', animate('100ms ease-in')),
                transition('active => inactive', animate('100ms ease-out'))
            ]),
    
        ]*/
    }),
    __metadata("design:paramtypes", [scene_service_1.SceneService, angular2_toaster_1.ToasterService])
], SceneComponent);
exports.SceneComponent = SceneComponent;
var SceneComponent_1;
//# sourceMappingURL=scene.component.js.map