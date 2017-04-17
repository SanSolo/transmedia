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
var SceneComponent = (function () {
    function SceneComponent(sceneService) {
        this.sceneService = sceneService;
        this.mode = 'Observable';
        this.sceneId = '1';
    }
    SceneComponent.prototype.ngOnInit = function () { this.getScenesById('1'); };
    SceneComponent.prototype.getScenes = function () {
        var _this = this;
        this.sceneService.getScenes()
            .subscribe(function (scenes) { return _this.scenes = scenes; }, function (error) { return _this.errorMessage = error; });
    };
    SceneComponent.prototype.getScenesById = function (sceneId) {
        var _this = this;
        this.sceneService.getScenesById(sceneId)
            .subscribe(function (scene) { return _this.scene = scene; }, function (error) { return _this.errorMessage = error; });
    };
    return SceneComponent;
}());
SceneComponent = __decorate([
    core_1.Component({
        selector: 'scene-page',
        templateUrl: './scene.template.html',
        providers: [scene_service_1.SceneService]
    }),
    __metadata("design:paramtypes", [scene_service_1.SceneService])
], SceneComponent);
exports.SceneComponent = SceneComponent;
//# sourceMappingURL=scene.component.js.map