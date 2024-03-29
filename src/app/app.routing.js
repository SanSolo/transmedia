"use strict";
var router_1 = require("@angular/router");
var email_component_1 = require("./email/email.component");
var scene_component_1 = require("./scene/scene.component");
var app_component_1 = require("./app.component");
var appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'mail', component: email_component_1.EmailComponent },
    { path: 'scene', component: scene_component_1.SceneComponent },
    { path: 'mailchimp', redirectTo: '' }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map