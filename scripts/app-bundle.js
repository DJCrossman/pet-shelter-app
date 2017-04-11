define('app',["require", "exports", "aurelia-http-client"], function (require, exports, aurelia_http_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            var _this = this;
            var client = new aurelia_http_client_1.HttpClient();
            client.get('../package.json').then(function (http) {
                var data = JSON.parse(http.response);
                if (data) {
                    _this.appVersion = data.version;
                    _this.appName = data.name;
                }
            });
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = this.title;
            config.map([
                { route: ['', 'pets'], moduleId: 'pet/list', title: 'Pet Weather' },
                { route: 'pets/new', moduleId: 'pet/create', title: 'Pet Creation' },
                { route: 'pets/:id', moduleId: 'pet/details', title: 'Pet Details' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQU1FO1lBQUEsaUJBU0M7WUFSQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGdDQUFVLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBTSxRQUFRLEVBQUUsVUFBVSxFQUFLLEtBQUssRUFBRSxhQUFhLEVBQUM7Z0JBQ3pFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBUSxRQUFRLEVBQUUsWUFBWSxFQUFPLEtBQUssRUFBRSxjQUFjLEVBQUM7Z0JBQzlFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBUSxRQUFRLEVBQUUsYUFBYSxFQUFJLEtBQUssRUFBRSxhQUFhLEVBQUM7YUFDNUUsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUVILFVBQUM7SUFBRCxDQTNCQSxBQTJCQyxJQUFBO0lBM0JZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHRpdGxlOiBhbnk7XG4gIGFwcE5hbWU6IGFueTtcbiAgYXBwVmVyc2lvbjogYW55O1xuICByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcbiAgICBjbGllbnQuZ2V0KCcuLi9wYWNrYWdlLmpzb24nKS50aGVuKGh0dHAgPT4ge1xuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGh0dHAucmVzcG9uc2UpO1xuICAgICAgaWYoZGF0YSkge1xuICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSBkYXRhLnZlcnNpb247XG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IGRhdGEubmFtZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKXtcbiAgICBjb25maWcudGl0bGUgPSB0aGlzLnRpdGxlO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAncGV0cyddLCAgICAgbW9kdWxlSWQ6ICdwZXQvbGlzdCcsICAgIHRpdGxlOiAnUGV0IFdlYXRoZXInfSxcbiAgICAgIHsgcm91dGU6ICdwZXRzL25ldycsICAgICAgIG1vZHVsZUlkOiAncGV0L2NyZWF0ZScsICAgICAgdGl0bGU6ICdQZXQgQ3JlYXRpb24nfSxcbiAgICAgIHsgcm91dGU6ICdwZXRzLzppZCcsICAgICAgIG1vZHVsZUlkOiAncGV0L2RldGFpbHMnLCAgIHRpdGxlOiAnUGV0IERldGFpbHMnfVxuICAgIF0pO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('endpoints',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Endpoints = {
        PetShelterAPI: 'https://pet-shelter-services.herokuapp.com'
    };
    exports.default = Endpoints;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxJQUFNLFNBQVMsR0FBRztRQUNkLGFBQWEsRUFBRSw0Q0FBNEM7S0FDOUQsQ0FBQztJQUNGLGtCQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiJlbmRwb2ludHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbmRwb2ludHMgPSB7XG4gICAgUGV0U2hlbHRlckFQSTogJ2h0dHBzOi8vcGV0LXNoZWx0ZXItc2VydmljZXMuaGVyb2t1YXBwLmNvbSdcbn07XG5leHBvcnQgZGVmYXVsdCBFbmRwb2ludHM7XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment", "fetch"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQgJ2ZldGNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('pet/create',["require", "exports", "./pet-service", "aurelia-framework"], function (require, exports, pet_service_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pet = (function () {
        function Pet(api) {
            this.api = api;
            this.heading = 'Add your pet';
        }
        return Pet;
    }());
    Pet = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], Pet);
    exports.Pet = Pet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9jcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUEsSUFBYSxHQUFHO1FBR2QsYUFBb0IsR0FBZTtZQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7WUFGNUIsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQUVNLENBQUM7UUFDekMsVUFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksR0FBRztRQURmLDBCQUFNLENBQUMsd0JBQVUsQ0FBQzt5Q0FJUSx3QkFBVTtPQUh4QixHQUFHLENBSWY7SUFKWSxrQkFBRyIsImZpbGUiOiJwZXQvY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXRTZXJ2aWNlfSBmcm9tICcuL3BldC1zZXJ2aWNlJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoUGV0U2VydmljZSlcbmV4cG9ydCBjbGFzcyBQZXQge1xuICBwdWJsaWMgaGVhZGluZyA9ICdBZGQgeW91ciBwZXQnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBQZXRTZXJ2aWNlKXsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('pet/details',["require", "exports", "./pet-service", "aurelia-framework"], function (require, exports, pet_service_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pet = (function () {
        function Pet(api) {
            this.api = api;
        }
        Pet.prototype.activate = function (params) {
            var _this = this;
            this.api.get(params.id).then(function (pet) { return _this.pet = pet; });
        };
        Object.defineProperty(Pet.prototype, "heading", {
            get: function () {
                return 'Yup';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pet.prototype, "message", {
            get: function () {
                if (!this.pet)
                    return '';
                return "It looks like " + this.pet.name + " is going to need one in " + this.pet.location + ".";
            },
            enumerable: true,
            configurable: true
        });
        return Pet;
    }());
    Pet = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], Pet);
    exports.Pet = Pet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsR0FBRztRQUdkLGFBQW9CLEdBQWU7WUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQUcsQ0FBQztRQUV2QyxzQkFBUSxHQUFSLFVBQVMsTUFBTTtZQUFmLGlCQUVDO1lBREcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxzQkFBSSx3QkFBTztpQkFBWDtnQkFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSx3QkFBTztpQkFBWDtnQkFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLG1CQUFpQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksaUNBQTRCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxNQUFHLENBQUM7WUFDeEYsQ0FBQzs7O1dBQUE7UUFDSCxVQUFDO0lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtJQWpCWSxHQUFHO1FBRGYsMEJBQU0sQ0FBQyx3QkFBVSxDQUFDO3lDQUlRLHdCQUFVO09BSHhCLEdBQUcsQ0FpQmY7SUFqQlksa0JBQUciLCJmaWxlIjoicGV0L2RldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BldFNlcnZpY2V9IGZyb20gJy4vcGV0LXNlcnZpY2UnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChQZXRTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIFBldCB7c1xuICBwcml2YXRlIHBldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBQZXRTZXJ2aWNlKXsgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcyl7XG4gICAgICB0aGlzLmFwaS5nZXQocGFyYW1zLmlkKS50aGVuKChwZXQ6YW55KSA9PiB0aGlzLnBldCA9IHBldCk7XG4gIH1cblxuICBnZXQgaGVhZGluZygpIHtcbiAgICByZXR1cm4gJ1l1cCc7XG4gIH1cblxuICBnZXQgbWVzc2FnZSgpIHtcbiAgICBpZighdGhpcy5wZXQpIHJldHVybiAnJztcbiAgICByZXR1cm4gYEl0IGxvb2tzIGxpa2UgJHt0aGlzLnBldC5uYW1lfSBpcyBnb2luZyB0byBuZWVkIG9uZSBpbiAke3RoaXMucGV0LmxvY2F0aW9ufS5gO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('pet/list',["require", "exports", "./pet-service", "aurelia-framework"], function (require, exports, pet_service_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pet = (function () {
        function Pet(api) {
            this.api = api;
            this.heading = 'Does my pet need an umbrella?';
            this.subheading = 'Select a pet to find out.';
        }
        Pet.prototype.created = function () {
            var _this = this;
            this.api.getAll().then(function (pets) { return _this.pets = pets; });
        };
        return Pet;
    }());
    Pet = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], Pet);
    exports.Pet = Pet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsR0FBRztRQUtkLGFBQW9CLEdBQWU7WUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBSjVCLFlBQU8sR0FBRywrQkFBK0IsQ0FBQztZQUMxQyxlQUFVLEdBQUcsMkJBQTJCLENBQUM7UUFHVixDQUFDO1FBRXZDLHFCQUFPLEdBQVA7WUFBQSxpQkFFQztZQURHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0gsVUFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksR0FBRztRQURmLDBCQUFNLENBQUMsd0JBQVUsQ0FBQzt5Q0FNUSx3QkFBVTtPQUx4QixHQUFHLENBVWY7SUFWWSxrQkFBRyIsImZpbGUiOiJwZXQvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGV0U2VydmljZX0gZnJvbSAnLi9wZXQtc2VydmljZSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KFBldFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgUGV0IHtcbiAgcHVibGljIGhlYWRpbmcgPSAnRG9lcyBteSBwZXQgbmVlZCBhbiB1bWJyZWxsYT8nO1xuICBwdWJsaWMgc3ViaGVhZGluZyA9ICdTZWxlY3QgYSBwZXQgdG8gZmluZCBvdXQuJztcbiAgcHVibGljIHBldHM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBQZXRTZXJ2aWNlKXsgfVxuXG4gIGNyZWF0ZWQoKXtcbiAgICAgIHRoaXMuYXBpLmdldEFsbCgpLnRoZW4oKHBldHM6YW55W10pID0+IHRoaXMucGV0cyA9IHBldHMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('pet/pet-service',["require", "exports", "aurelia-http-client", "../endpoints"], function (require, exports, aurelia_http_client_1, endpoints_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PetService = (function () {
        function PetService() {
        }
        PetService.prototype.create = function (pet) {
            return new Promise(function (resolve, reject) {
                var client = new aurelia_http_client_1.HttpClient();
                client.post(endpoints_1.default.PetShelterAPI + "/pets", pet)
                    .then(function (resp) {
                    resolve(JSON.parse(resp.response));
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        PetService.prototype.get = function (id) {
            return new Promise(function (resolve, reject) {
                var client = new aurelia_http_client_1.HttpClient();
                client.get(endpoints_1.default.PetShelterAPI + "/pets/" + id)
                    .then(function (resp) {
                    resolve(JSON.parse(resp.response));
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        PetService.prototype.getAll = function () {
            return new Promise(function (resolve, reject) {
                var client = new aurelia_http_client_1.HttpClient();
                client.get(endpoints_1.default.PetShelterAPI + "/pets")
                    .then(function (resp) {
                    resolve(JSON.parse(resp.response));
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        PetService.prototype.update = function (pet) {
            return new Promise(function (resolve, reject) {
                var client = new aurelia_http_client_1.HttpClient();
                client.put(endpoints_1.default.PetShelterAPI + "/pets/" + pet.id, pet)
                    .then(function (resp) {
                    resolve(JSON.parse(resp.response));
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        PetService.prototype.destroy = function (id) {
            return new Promise(function (resolve, reject) {
                var client = new aurelia_http_client_1.HttpClient();
                client.delete(endpoints_1.default.PetShelterAPI + "/pets/" + id)
                    .then(function (resp) {
                    resolve(JSON.parse(resp.response));
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        return PetService;
    }());
    exports.PetService = PetService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9wZXQtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUVFO1FBQWUsQ0FBQztRQUVoQiwyQkFBTSxHQUFOLFVBQU8sR0FBRztZQUNSLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLGdDQUFVLEVBQUUsQ0FBQztnQkFFOUIsTUFBTSxDQUFDLElBQUksQ0FBSSxtQkFBUyxDQUFDLGFBQWEsVUFBTyxFQUFFLEdBQUcsQ0FBQztxQkFDbEQsSUFBSSxDQUFDLFVBQUEsSUFBSTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELHdCQUFHLEdBQUgsVUFBSSxFQUFFO1lBQ0osTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksZ0NBQVUsRUFBRSxDQUFDO2dCQUU5QixNQUFNLENBQUMsR0FBRyxDQUFJLG1CQUFTLENBQUMsYUFBYSxjQUFTLEVBQUksQ0FBQztxQkFDbEQsSUFBSSxDQUFDLFVBQUEsSUFBSTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELDJCQUFNLEdBQU47WUFDRSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQ0FBVSxFQUFFLENBQUM7Z0JBRTlCLE1BQU0sQ0FBQyxHQUFHLENBQUksbUJBQVMsQ0FBQyxhQUFhLFVBQU8sQ0FBQztxQkFDNUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELDJCQUFNLEdBQU4sVUFBTyxHQUFHO1lBQ1IsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksZ0NBQVUsRUFBRSxDQUFDO2dCQUU5QixNQUFNLENBQUMsR0FBRyxDQUFJLG1CQUFTLENBQUMsYUFBYSxjQUFTLEdBQUcsQ0FBQyxFQUFJLEVBQUUsR0FBRyxDQUFDO3FCQUMzRCxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsNEJBQU8sR0FBUCxVQUFRLEVBQUU7WUFDUixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsSUFBSSxNQUFNLEdBQUcsSUFBSSxnQ0FBVSxFQUFFLENBQUM7Z0JBRTlCLE1BQU0sQ0FBQyxNQUFNLENBQUksbUJBQVMsQ0FBQyxhQUFhLGNBQVMsRUFBSSxDQUFDO3FCQUNyRCxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQXpFQSxBQXlFQyxJQUFBO0lBekVZLGdDQUFVIiwiZmlsZSI6InBldC9wZXQtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IEVuZHBvaW50cyBmcm9tICcuLi9lbmRwb2ludHMnO1xuXG5leHBvcnQgY2xhc3MgUGV0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKXsgfVxuXG4gIGNyZWF0ZShwZXQpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LnBvc3QoYCR7RW5kcG9pbnRzLlBldFNoZWx0ZXJBUEl9L3BldHNgLCBwZXQpXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQoaWQpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LmdldChgJHtFbmRwb2ludHMuUGV0U2hlbHRlckFQSX0vcGV0cy8ke2lkfWApXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGwoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICAgIGNsaWVudC5nZXQoYCR7RW5kcG9pbnRzLlBldFNoZWx0ZXJBUEl9L3BldHNgKVxuICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXNwLnJlc3BvbnNlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKHBldCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICBjbGllbnQucHV0KGAke0VuZHBvaW50cy5QZXRTaGVsdGVyQVBJfS9wZXRzLyR7cGV0LmlkfWAsIHBldClcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcC5yZXNwb25zZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koaWQpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LmRlbGV0ZShgJHtFbmRwb2ludHMuUGV0U2hlbHRlckFQSX0vcGV0cy8ke2lkfWApXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!pet/create.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>${heading}</h2>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!pet/details.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>${heading}</h2>\n            <p>${message}</p>\n            <p><a href=\"#\">Lookup a different pet</a></p>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!pet/list.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>${heading}</h2>\n            <h3>${subheading}</h3>\n        </div>\n        <div class=\"col-md-8 col-md-offset-2\">\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Breed</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr repeat.for=\"pet of pets\">\n                <td>${pet.name}</td>\n                <td>${pet.typeName}</td>\n                <td>${pet.breedName}</td>\n                <td><a href=\"#pets/${pet.id}\" class=\"pull-right\">View <i class=\"fa fa-paw\"></i></a></td>\n              </tr>\n              <tr if.bind=\"!pets.length\">\n                <td colspan=\"4\">No pets to be found.</td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <th colspan=\"4\"><a href=\"#pets/new\" class=\"pull-right\"><i class=\"fa fa-plus\"></i> Add a new pet</a></th>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map