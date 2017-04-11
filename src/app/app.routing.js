"use strict";
var router_1 = require("@angular/router");
var email_component_1 = require("./email/email.component");
var txt_component_1 = require("./scene/txt.component");
var app_component_1 = require("./app.component");
var appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'mail', component: email_component_1.EmailComponent },
    { path: 'txt', component: txt_component_1.TxtComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map