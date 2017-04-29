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
        this.scene = null;
        this.choix = '';
        this.toasterconfig = new angular2_toaster_1.ToasterConfig({
            showCloseButton: false,
            tapToDismiss: false,
            timeout: 15000
        });
        this.toasterService = toasterService;
    }
    SceneComponent.prototype.ngOnInit = function () { this.getScenesById('1'); };
    //ngAfterViewInit() {this.popToast();}
    SceneComponent.prototype.nextScene = function (choix) {
        window.scrollTo(0, 0);
        this.getScenesById(choix);
    };
    SceneComponent.prototype.popToast = function (scene) {
        this.toasterService.clear();
        this.toasterService.pop('warning', 'Denis', this.scene.acf.eracom);
        this.toasterService.pop('success', 'Emilie', this.scene.acf.comem);
    };
    SceneComponent.prototype.getScenesById = function (sceneId) {
        var _this = this;
        this.sceneService.getScenesById(sceneId)
            .subscribe(function (value) { return _this.scene = value; }, function (error) { return _this.errorMessage = error; }, function () { return _this.popToast(_this.scene); });
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
        providers: [scene_service_1.SceneService]
    }),
    __metadata("design:paramtypes", [scene_service_1.SceneService, angular2_toaster_1.ToasterService])
], SceneComponent);
exports.SceneComponent = SceneComponent;
var SceneComponent_1;
//# sourceMappingURL=scene.component.js.map