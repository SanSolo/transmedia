"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Scene = (function () {
    function Scene() {
    }
    return Scene;
}());
exports.Scene = Scene;
var SCENES = [
    { id: 1, sceneTitle: 'Première scène', scenePlotText: 'Petit texte pour mettre bien', scenePlotImgUrl: './img/scene1.jpg' },
    { id: 2, sceneTitle: 'Première scène', scenePlotText: 'Petit texte pour mettre bien', scenePlotImgUrl: './img/scene2.jpg' }
];
var SceneComponent = (function () {
    function SceneComponent() {
        this.scene = {
            id: 1,
            sceneTitle: 'Ceci un est autre test',
            scenePlotText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper, neque posuere ornare auctor, ante libero hendrerit tortor, a vulputate magna augue ut orci. Nullam vitae interdum ante. Phasellus eu eros sit amet lectus egestas molestie. Aenean iaculis, dolor nec tincidunt ultrices, ex nibh semper dui, sit amet malesuada mauris neque venenatis risus. Praesent eu neque erat. Nulla imperdiet porta augue, bibendum rhoncus ante sollicitudin sit amet. Etiam pellentesque congue arcu, id condimentum mauris rutrum at. Nullam porttitor mauris eu massa pretium, at dignissim enim consectetur. Aliquam tincidunt neque leo, et bibendum justo volutpat et. Suspendisse nec ultrices tortor. Cras sollicitudin ipsum est, ut auctor diam placerat vitae. Nunc in dolor ex. Ut eu eros malesuada, consectetur libero vel, pellentesque nunc. Vestibulum elit velit, tempus at lacinia at, varius quis turpis. Vestibulum ut placerat erat. Ut velit ex, pretium eget ante ut, aliquet rhoncus magna. Integer iaculis elit id gravida auctor. Donec ultricies tincidunt ante, ac faucibus ipsum elementum eget. Donec ac finibus justo. In nisl ante, pulvinar vel augue vitae, scelerisque efficitur nulla. ',
            scenePlotImgUrl: './img/scene1.jpg'
        };
    }
    return SceneComponent;
}());
SceneComponent = __decorate([
    core_1.Component({
        selector: 'scene-page',
        templateUrl: './scene.template.html'
    })
], SceneComponent);
exports.SceneComponent = SceneComponent;
//# sourceMappingURL=scene.component.js.map