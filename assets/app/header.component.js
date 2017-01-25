"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        template: "\n      <header class=\"row\">\n        <nav class=\"col-md-8 col-md-offset-2\">\n          <ul class=\"nav nav-pills\">\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['/messages']\">Messenger</a></li>\n            <li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Authentication</a></li>\n          </ul>\n        </nav>\n      </header>\n    "
    })
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
