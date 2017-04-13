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
        PetShelterAPI: 'https://pet-shelter-services.herokuapp.com',
        ForecastAPI: 'https://crossorigin.me/https://api.darksky.net/forecast'
    };
    exports.default = Endpoints;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxJQUFNLFNBQVMsR0FBRztRQUNkLGFBQWEsRUFBRSw0Q0FBNEM7UUFDM0QsV0FBVyxFQUFFLHlEQUF5RDtLQUN6RSxDQUFDO0lBQ0Ysa0JBQWUsU0FBUyxDQUFDIiwiZmlsZSI6ImVuZHBvaW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVuZHBvaW50cyA9IHtcbiAgICBQZXRTaGVsdGVyQVBJOiAnaHR0cHM6Ly9wZXQtc2hlbHRlci1zZXJ2aWNlcy5oZXJva3VhcHAuY29tJyxcbiAgICBGb3JlY2FzdEFQSTogJ2h0dHBzOi8vY3Jvc3NvcmlnaW4ubWUvaHR0cHM6Ly9hcGkuZGFya3NreS5uZXQvZm9yZWNhc3QnXG59O1xuZXhwb3J0IGRlZmF1bHQgRW5kcG9pbnRzO1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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

define('forecast/forecast-service',["require", "exports", "aurelia-http-client", "../endpoints"], function (require, exports, aurelia_http_client_1, endpoints_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SECRET_KEY = 'a6801e5f483f73ded1f064aa1b7df331';
    var ForecastService = (function () {
        function ForecastService() {
        }
        ForecastService.prototype.get = function (lat, long) {
            return new Promise(function (resolve, reject) {
                var client = new aurelia_http_client_1.HttpClient();
                client.get(endpoints_1.default.ForecastAPI + "/" + SECRET_KEY + "/" + lat + "," + long)
                    .then(function (resp) {
                    resolve(JSON.parse(resp.response));
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        };
        return ForecastService;
    }());
    exports.ForecastService = ForecastService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0L2ZvcmVjYXN0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsSUFBTSxVQUFVLEdBQUcsa0NBQWtDLENBQUM7SUFFdEQ7UUFFRTtRQUFlLENBQUM7UUFDaEIsNkJBQUcsR0FBSCxVQUFJLEdBQUcsRUFBRSxJQUFJO1lBQ1gsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksZ0NBQVUsRUFBRSxDQUFDO2dCQUU5QixNQUFNLENBQUMsR0FBRyxDQUFJLG1CQUFTLENBQUMsV0FBVyxTQUFJLFVBQVUsU0FBSSxHQUFHLFNBQUksSUFBTSxDQUFDO3FCQUNsRSxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsc0JBQUM7SUFBRCxDQWhCQSxBQWdCQyxJQUFBO0lBaEJZLDBDQUFlIiwiZmlsZSI6ImZvcmVjYXN0L2ZvcmVjYXN0LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCBFbmRwb2ludHMgZnJvbSAnLi4vZW5kcG9pbnRzJztcblxuY29uc3QgU0VDUkVUX0tFWSA9ICdhNjgwMWU1ZjQ4M2Y3M2RlZDFmMDY0YWExYjdkZjMzMSc7XG5cbmV4cG9ydCBjbGFzcyBGb3JlY2FzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCl7IH1cbiAgZ2V0KGxhdCwgbG9uZyl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICBjbGllbnQuZ2V0KGAke0VuZHBvaW50cy5Gb3JlY2FzdEFQSX0vJHtTRUNSRVRfS0VZfS8ke2xhdH0sJHtsb25nfWApXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('pet/create',["require", "exports", "aurelia-router", "./pet-service", "aurelia-framework"], function (require, exports, aurelia_router_1, pet_service_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pet = (function () {
        function Pet(api, router) {
            this.api = api;
            this.router = router;
            this.heading = 'Add your pet';
            this.pet = {};
        }
        Pet.prototype.addMyPet = function () {
            var _this = this;
            if (this.pet.name && this.pet.typeName && this.pet.breedName &&
                this.pet.location && this.pet.lat && this.pet.long) {
                this.toggleButtons('loading');
                this.api.create(this.pet).then(function () {
                    _this.toggleButtons('reset');
                    _this.router.navigate('');
                }).catch(function (err) {
                    _this.toggleButtons('reset');
                    throw err;
                });
            }
            else {
                console.log('Your pet is not valid!');
            }
        };
        Pet.prototype.toggleButtons = function (options) {
            $(this.cancel).toggle();
            $(this.save).button(options);
        };
        return Pet;
    }());
    Pet = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService, aurelia_router_1.Router),
        __metadata("design:paramtypes", [pet_service_1.PetService, aurelia_router_1.Router])
    ], Pet);
    exports.Pet = Pet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9jcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0EsSUFBYSxHQUFHO1FBTWQsYUFBb0IsR0FBZSxFQUFVLE1BQWM7WUFBdkMsUUFBRyxHQUFILEdBQUcsQ0FBWTtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7WUFMcEQsWUFBTyxHQUFHLGNBQWMsQ0FBQztZQU05QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBRUQsc0JBQVEsR0FBUjtZQUFBLGlCQWNDO1lBYkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO2dCQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNYLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sR0FBRyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQztRQUVELDJCQUFhLEdBQWIsVUFBYyxPQUFPO1lBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNILFVBQUM7SUFBRCxDQTlCQSxBQThCQyxJQUFBO0lBOUJZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLHdCQUFVLEVBQUUsdUJBQU0sQ0FBQzt5Q0FPQSx3QkFBVSxFQUFrQix1QkFBTTtPQU5oRCxHQUFHLENBOEJmO0lBOUJZLGtCQUFHIiwiZmlsZSI6InBldC9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZGlyZWN0LCBSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7UGV0U2VydmljZX0gZnJvbSAnLi9wZXQtc2VydmljZSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5kZWNsYXJlIHZhciAkO1xuXG5AaW5qZWN0KFBldFNlcnZpY2UsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBQZXQge1xuICBwdWJsaWMgaGVhZGluZyA9ICdBZGQgeW91ciBwZXQnO1xuICBwdWJsaWMgcGV0OiBhbnk7XG4gIHB1YmxpYyBjYW5jZWw7XG4gIHB1YmxpYyBzYXZlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBQZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcbiAgICB0aGlzLnBldCA9IHt9O1xuICB9XG5cbiAgYWRkTXlQZXQoKSB7XG4gICAgaWYodGhpcy5wZXQubmFtZSAmJiB0aGlzLnBldC50eXBlTmFtZSAmJiB0aGlzLnBldC5icmVlZE5hbWUgJiZcbiAgICAgIHRoaXMucGV0LmxvY2F0aW9uICYmIHRoaXMucGV0LmxhdCAmJiB0aGlzLnBldC5sb25nKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvbnMoJ2xvYWRpbmcnKTtcbiAgICAgIHRoaXMuYXBpLmNyZWF0ZSh0aGlzLnBldCkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9ucygncmVzZXQnKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJycpO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbnMoJ3Jlc2V0Jyk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnWW91ciBwZXQgaXMgbm90IHZhbGlkIScpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJ1dHRvbnMob3B0aW9ucykge1xuICAgICQodGhpcy5jYW5jZWwpLnRvZ2dsZSgpO1xuICAgICQodGhpcy5zYXZlKS5idXR0b24ob3B0aW9ucyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('pet/details',["require", "exports", "../forecast/forecast-service", "./pet-service", "aurelia-framework"], function (require, exports, forecast_service_1, pet_service_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pet = (function () {
        function Pet(petApi, forecastApi) {
            this.petApi = petApi;
            this.forecastApi = forecastApi;
            this.isLoading = false;
        }
        Pet.prototype.activate = function (params) {
            var _this = this;
            this.isLoading = true;
            this.petApi.get(params.id).then(function (pet) {
                _this.pet = pet;
                _this.forecastApi.get(pet.lat, pet.long).then(function (forecast) {
                    _this.isLoading = false;
                    _this.isRaining = forecast.currently.icon === 'rain';
                }).catch(function (err) {
                    _this.isLoading = false;
                });
            }).catch(function (err) {
                _this.isLoading = false;
            });
        };
        Object.defineProperty(Pet.prototype, "heading", {
            get: function () {
                if (typeof this.isRaining === 'undefined')
                    return '';
                return this.isRaining ? 'Yes' : 'Nope';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pet.prototype, "message", {
            get: function () {
                if (!this.pet)
                    return '';
                return "It looks like " + this.pet.name + " is " + (this.isRaining ? '' : 'not ') + "going to need one in " + this.pet.location + ".";
            },
            enumerable: true,
            configurable: true
        });
        return Pet;
    }());
    Pet = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService, forecast_service_1.ForecastService),
        __metadata("design:paramtypes", [pet_service_1.PetService, forecast_service_1.ForecastService])
    ], Pet);
    exports.Pet = Pet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsR0FBRztRQUtkLGFBQW9CLE1BQWtCLEVBQVUsV0FBNEI7WUFBeEQsV0FBTSxHQUFOLE1BQU0sQ0FBWTtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtZQUZwRSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTRDLENBQUM7UUFFaEYsc0JBQVEsR0FBUixVQUFTLE1BQU07WUFBZixpQkFhQztZQVpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO2dCQUN0QyxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDZixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFZO29CQUN4RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUM7Z0JBQ3RELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ1YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDVixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxzQkFBSSx3QkFBTztpQkFBWDtnQkFDRSxFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDekMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSx3QkFBTztpQkFBWDtnQkFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLG1CQUFpQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksYUFBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxNQUFNLDhCQUF3QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsTUFBRyxDQUFDO1lBQ3ZILENBQUM7OztXQUFBO1FBQ0gsVUFBQztJQUFELENBL0JBLEFBK0JDLElBQUE7SUEvQlksR0FBRztRQURmLDBCQUFNLENBQUMsd0JBQVUsRUFBRSxrQ0FBZSxDQUFDO3lDQU1OLHdCQUFVLEVBQXVCLGtDQUFlO09BTGpFLEdBQUcsQ0ErQmY7SUEvQlksa0JBQUciLCJmaWxlIjoicGV0L2RldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvcmVjYXN0U2VydmljZX0gZnJvbSAnLi4vZm9yZWNhc3QvZm9yZWNhc3Qtc2VydmljZSc7XG5pbXBvcnQge1BldFNlcnZpY2V9IGZyb20gJy4vcGV0LXNlcnZpY2UnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChQZXRTZXJ2aWNlLCBGb3JlY2FzdFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgUGV0IHtcbiAgcHJpdmF0ZSBwZXQ6IGFueTtcbiAgcHJpdmF0ZSBpc1JhaW5pbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXRBcGk6IFBldFNlcnZpY2UsIHByaXZhdGUgZm9yZWNhc3RBcGk6IEZvcmVjYXN0U2VydmljZSl7IH1cblxuICBhY3RpdmF0ZShwYXJhbXMpe1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGV0QXBpLmdldChwYXJhbXMuaWQpLnRoZW4oKHBldDphbnkpID0+IHtcbiAgICAgICAgdGhpcy5wZXQgPSBwZXQ7XG4gICAgICAgIHRoaXMuZm9yZWNhc3RBcGkuZ2V0KHBldC5sYXQsIHBldC5sb25nKS50aGVuKChmb3JlY2FzdDphbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNSYWluaW5nID0gZm9yZWNhc3QuY3VycmVudGx5Lmljb24gPT09ICdyYWluJztcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldCBoZWFkaW5nKCkge1xuICAgIGlmKHR5cGVvZiB0aGlzLmlzUmFpbmluZyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcbiAgICByZXR1cm4gdGhpcy5pc1JhaW5pbmcgPyAnWWVzJyA6ICdOb3BlJztcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCkge1xuICAgIGlmKCF0aGlzLnBldCkgcmV0dXJuICcnO1xuICAgIHJldHVybiBgSXQgbG9va3MgbGlrZSAke3RoaXMucGV0Lm5hbWV9IGlzICR7dGhpcy5pc1JhaW5pbmcgPyAnJyA6ICdub3QgJ31nb2luZyB0byBuZWVkIG9uZSBpbiAke3RoaXMucGV0LmxvY2F0aW9ufS5gO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
            this.isLoading = false;
        }
        Pet.prototype.created = function () {
            var _this = this;
            this.isLoading = true;
            this.api.getAll().then(function (pets) {
                _this.isLoading = false;
                _this.pets = pets;
            });
        };
        Pet.prototype.remove = function (id) {
            var _this = this;
            this.api.destroy(id).then(function () {
                _this.pets = _this.pets.filter(function (p) { return p.id !== id; });
            });
        };
        return Pet;
    }());
    Pet = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], Pet);
    exports.Pet = Pet;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsR0FBRztRQU1kLGFBQW9CLEdBQWU7WUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1lBTDVCLFlBQU8sR0FBRywrQkFBK0IsQ0FBQztZQUMxQyxlQUFVLEdBQUcsMkJBQTJCLENBQUM7WUFFeEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUVHLENBQUM7UUFFdkMscUJBQU8sR0FBUDtZQUFBLGlCQU1DO1lBTEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFVO2dCQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsb0JBQU0sR0FBTixVQUFPLEVBQUU7WUFBVCxpQkFJQztZQUhDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILFVBQUM7SUFBRCxDQXJCQSxBQXFCQyxJQUFBO0lBckJZLEdBQUc7UUFEZiwwQkFBTSxDQUFDLHdCQUFVLENBQUM7eUNBT1Esd0JBQVU7T0FOeEIsR0FBRyxDQXFCZjtJQXJCWSxrQkFBRyIsImZpbGUiOiJwZXQvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGV0U2VydmljZX0gZnJvbSAnLi9wZXQtc2VydmljZSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AaW5qZWN0KFBldFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgUGV0IHtcbiAgcHVibGljIGhlYWRpbmcgPSAnRG9lcyBteSBwZXQgbmVlZCBhbiB1bWJyZWxsYT8nO1xuICBwdWJsaWMgc3ViaGVhZGluZyA9ICdTZWxlY3QgYSBwZXQgdG8gZmluZCBvdXQuJztcbiAgcHVibGljIHBldHM6IGFueVtdO1xuICBwcml2YXRlIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBQZXRTZXJ2aWNlKXsgfVxuXG4gIGNyZWF0ZWQoKXtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5hcGkuZ2V0QWxsKCkudGhlbigocGV0czphbnlbXSkgPT4ge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucGV0cyA9IHBldHM7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoaWQpIHtcbiAgICB0aGlzLmFwaS5kZXN0cm95KGlkKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGV0cyA9IHRoaXMucGV0cy5maWx0ZXIocCA9PiBwLmlkICE9PSBpZCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7Z0JBRTlCLE1BQU0sQ0FBQyxNQUFNLENBQUksbUJBQVMsQ0FBQyxhQUFhLGNBQVMsRUFBSSxDQUFDO3FCQUNyRCxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQXpFQSxBQXlFQyxJQUFBO0lBekVZLGdDQUFVIiwiZmlsZSI6InBldC9wZXQtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IEVuZHBvaW50cyBmcm9tICcuLi9lbmRwb2ludHMnO1xuXG5leHBvcnQgY2xhc3MgUGV0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKXsgfVxuXG4gIGNyZWF0ZShwZXQpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LnBvc3QoYCR7RW5kcG9pbnRzLlBldFNoZWx0ZXJBUEl9L3BldHNgLCBwZXQpXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQoaWQpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LmdldChgJHtFbmRwb2ludHMuUGV0U2hlbHRlckFQSX0vcGV0cy8ke2lkfWApXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGwoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICAgIGNsaWVudC5nZXQoYCR7RW5kcG9pbnRzLlBldFNoZWx0ZXJBUEl9L3BldHNgKVxuICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXNwLnJlc3BvbnNlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKHBldCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICBjbGllbnQucHV0KGAke0VuZHBvaW50cy5QZXRTaGVsdGVyQVBJfS9wZXRzLyR7cGV0LmlkfWAsIHBldClcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcC5yZXNwb25zZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koaWQpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LmRlbGV0ZShgJHtFbmRwb2ludHMuUGV0U2hlbHRlckFQSX0vcGV0cy8ke2lkfWApXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('text!pet/create.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h2>${heading}</h2>\n        </div>\n        <div class=\"col-md-12\">\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-sm-offset-2 col-sm-2 control-label\">Name</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" value.bind=\"pet.name\" placeholder=\"Enter a name...\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"typeName\" class=\"col-sm-offset-2 col-sm-2 control-label\">Type</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"typeName\" value.bind=\"pet.typeName\" placeholder=\"Enter a type...\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"breedName\" class=\"col-sm-offset-2 col-sm-2 control-label\">Breed</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"breedName\" value.bind=\"pet.breedName\" placeholder=\"Enter a breed...\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"location\" class=\"col-sm-offset-2 col-sm-2 control-label\">Location</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"location\" value.bind=\"pet.location\" placeholder=\"Enter a location...\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lat\" class=\"col-sm-offset-2 col-sm-2 control-label\">Latitude</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"lat\" value.bind=\"pet.lat\" placeholder=\"Enter a latitude...\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"long\" class=\"col-sm-offset-2 col-sm-2 control-label\">Longitude</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" id=\"long\" value.bind=\"pet.long\" placeholder=\"Enter a longitude...\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-10 text-right\">\n                <a href=\"#pets\" class=\"btn btn-link\" ref=\"cancel\">Go back</a>\n                <button class=\"btn btn-default\" click.delegate=\"addMyPet()\" ref=\"save\" data-loading-text=\"Adding your pet...\">Add my pet!</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!pet/details.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\" if.bind=\"isLoading\">\n          <i class=\"fa fa-paw fa-spin fa-3x fa-fw\"></i>\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <div class=\"col-md-12\" if.bind=\"!isLoading\">\n          <h2>${heading}</h2>\n          <p>${message}</p>\n          <p><a href=\"#\">Lookup a different pet</a></p>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!pet/list.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>${heading}</h2>\n            <h3>${subheading}</h3>\n        </div>\n        <div class=\"col-md-12 text-center\" if.bind=\"isLoading\">\n          <i class=\"fa fa-paw fa-spin fa-3x fa-fw\"></i>\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n        <div class=\"col-md-8 col-md-offset-2\" if.bind=\"!isLoading\">\n          <table class=\"table table-hover\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Breed</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr repeat.for=\"pet of pets\">\n                <td>${pet.name}</td>\n                <td>${pet.typeName}</td>\n                <td>${pet.breedName}</td>\n                <td class=\"text-right\">\n                  <a href=\"#pets/${pet.id}\">View <i class=\"fa fa-paw\"></i></a>\n                  <button class=\"btn btn-link\" click.delegate=\"remove(pet.id)\"><i class=\"fa fa-times\"></i></button>\n                </td>\n              </tr>\n              <tr if.bind=\"!pets.length\">\n                <td colspan=\"4\">No pets to be found.</td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <th colspan=\"4\"><a href=\"#pets/new\" class=\"pull-right\"><i class=\"fa fa-plus\"></i> Add a new pet</a></th>\n            </tfoot>\n          </table>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map