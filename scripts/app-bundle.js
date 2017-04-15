define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUlFO1FBQWdCLENBQUM7UUFFakIsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQU0sUUFBUSxFQUFFLFVBQVUsRUFBSyxLQUFLLEVBQUUsYUFBYSxFQUFDO2dCQUN6RSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVEsUUFBUSxFQUFFLFlBQVksRUFBTyxLQUFLLEVBQUUsY0FBYyxFQUFDO2dCQUM5RSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVEsUUFBUSxFQUFFLGFBQWEsRUFBSSxLQUFLLEVBQUUsYUFBYSxFQUFDO2FBQzVFLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFSCxVQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgdGl0bGU6IGFueTtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcil7XG4gICAgY29uZmlnLnRpdGxlID0gdGhpcy50aXRsZTtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6IFsnJywgJ3BldHMnXSwgICAgIG1vZHVsZUlkOiAncGV0L2xpc3QnLCAgICB0aXRsZTogJ1BldCBXZWF0aGVyJ30sXG4gICAgICB7IHJvdXRlOiAncGV0cy9uZXcnLCAgICAgICBtb2R1bGVJZDogJ3BldC9jcmVhdGUnLCAgICAgIHRpdGxlOiAnUGV0IENyZWF0aW9uJ30sXG4gICAgICB7IHJvdXRlOiAncGV0cy86aWQnLCAgICAgICBtb2R1bGVJZDogJ3BldC9kZXRhaWxzJywgICB0aXRsZTogJ1BldCBEZXRhaWxzJ31cbiAgICBdKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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
    var PetCreateView = (function () {
        function PetCreateView(api, router) {
            this.api = api;
            this.router = router;
            this.heading = 'Add your pet';
        }
        PetCreateView.prototype.attached = function () {
            var _this = this;
            this.pet = {};
            this.autocomplete = new google.maps.places.Autocomplete(this.location);
            this.api.getTypes().then(function (types) {
                _this.types = types;
                $(_this.typeName).select2({
                    data: types.map(function (t) { return { id: t.name, text: t.name }; }),
                    placeholder: 'Select a type of pet...'
                });
            }).catch(function (err) {
                alertify.error(err);
            });
        };
        PetCreateView.prototype.addMyPet = function () {
            var _this = this;
            if ($(this.typeName).val()) {
                this.pet.typeName = $(this.typeName).val();
            }
            if (!!this.pet.location) {
                this.pet.lat = this.autocomplete.getPlace().geometry.location.lat();
                this.pet.long = this.autocomplete.getPlace().geometry.location.lng();
            }
            if (!!this.pet.name && !!this.pet.typeName && !!this.pet.breedName &&
                !!this.pet.location && !!this.pet.lat && !!this.pet.long) {
                this.toggleButtons('loading');
                this.api.create(this.pet).then(function () {
                    _this.toggleButtons('reset');
                    _this.router.navigate('');
                }).catch(function (err) {
                    _this.toggleButtons('reset');
                    alertify.error(err);
                });
            }
            else {
                alertify.warning('Your pet is not valid!');
            }
        };
        PetCreateView.prototype.toggleButtons = function (options) {
            $(this.cancel).toggle();
            $(this.save).button(options);
        };
        return PetCreateView;
    }());
    PetCreateView = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService, aurelia_router_1.Router),
        __metadata("design:paramtypes", [pet_service_1.PetService, aurelia_router_1.Router])
    ], PetCreateView);
    exports.PetCreateView = PetCreateView;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9jcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsSUFBYSxhQUFhO1FBVXhCLHVCQUFvQixHQUFlLEVBQVUsTUFBYztZQUF2QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQVQzRCxZQUFPLEdBQUcsY0FBYyxDQUFDO1FBU3FDLENBQUM7UUFFL0QsZ0NBQVEsR0FBUjtZQUFBLGlCQVlDO1lBWEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQVc7Z0JBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQU0sTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUQsV0FBVyxFQUFFLHlCQUF5QjtpQkFDdkMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGdDQUFRLEdBQVI7WUFBQSxpQkFxQkM7WUFwQkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0MsQ0FBQztZQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZFLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVM7Z0JBQy9ELENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDN0IsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sUUFBUSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDSCxDQUFDO1FBRUQscUNBQWEsR0FBYixVQUFjLE9BQU87WUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQXJEQSxBQXFEQyxJQUFBO0lBckRZLGFBQWE7UUFEekIsMEJBQU0sQ0FBQyx3QkFBVSxFQUFFLHVCQUFNLENBQUM7eUNBV0Esd0JBQVUsRUFBa0IsdUJBQU07T0FWaEQsYUFBYSxDQXFEekI7SUFyRFksc0NBQWEiLCJmaWxlIjoicGV0L2NyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVkaXJlY3QsIFJvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtQZXRTZXJ2aWNlfSBmcm9tICcuL3BldC1zZXJ2aWNlJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmRlY2xhcmUgdmFyICQ7XG5kZWNsYXJlIHZhciBnb29nbGU7XG5kZWNsYXJlIHZhciBhbGVydGlmeTtcblxuQGluamVjdChQZXRTZXJ2aWNlLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgUGV0Q3JlYXRlVmlldyB7XG4gIGhlYWRpbmcgPSAnQWRkIHlvdXIgcGV0JztcbiAgcGV0OiBhbnk7XG4gIGNhbmNlbDtcbiAgc2F2ZTtcbiAgbG9jYXRpb247XG4gIHR5cGVOYW1lO1xuICBhdXRvY29tcGxldGU7XG4gIHR5cGVzOiBhbnlbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaTogUGV0U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7IH1cblxuICBhdHRhY2hlZCgpe1xuICAgIHRoaXMucGV0ID0ge307XG4gICAgdGhpcy5hdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSh0aGlzLmxvY2F0aW9uKTtcbiAgICB0aGlzLmFwaS5nZXRUeXBlcygpLnRoZW4oKHR5cGVzOmFueVtdKSA9PiB7XG4gICAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgICAkKHRoaXMudHlwZU5hbWUpLnNlbGVjdDIoe1xuICAgICAgICBkYXRhOiB0eXBlcy5tYXAodCA9PiB7IHJldHVybiB7aWQ6IHQubmFtZSwgdGV4dDogdC5uYW1lfTsgfSksXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgdHlwZSBvZiBwZXQuLi4nXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgYWxlcnRpZnkuZXJyb3IoZXJyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE15UGV0KCkge1xuICAgIGlmKCQodGhpcy50eXBlTmFtZSkudmFsKCkpIHtcbiAgICAgIHRoaXMucGV0LnR5cGVOYW1lID0gJCh0aGlzLnR5cGVOYW1lKS52YWwoKTtcbiAgICB9XG4gICAgaWYoISF0aGlzLnBldC5sb2NhdGlvbikge1xuICAgICAgdGhpcy5wZXQubGF0ID0gdGhpcy5hdXRvY29tcGxldGUuZ2V0UGxhY2UoKS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcbiAgICAgIHRoaXMucGV0LmxvbmcgPSB0aGlzLmF1dG9jb21wbGV0ZS5nZXRQbGFjZSgpLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xuICAgIH1cbiAgICBpZighIXRoaXMucGV0Lm5hbWUgJiYgISF0aGlzLnBldC50eXBlTmFtZSAmJiAhIXRoaXMucGV0LmJyZWVkTmFtZSAmJlxuICAgICAgISF0aGlzLnBldC5sb2NhdGlvbiAmJiAhIXRoaXMucGV0LmxhdCAmJiAhIXRoaXMucGV0LmxvbmcpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9ucygnbG9hZGluZycpO1xuICAgICAgdGhpcy5hcGkuY3JlYXRlKHRoaXMucGV0KS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25zKCdyZXNldCcpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnJyk7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9ucygncmVzZXQnKTtcbiAgICAgICAgYWxlcnRpZnkuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydGlmeS53YXJuaW5nKCdZb3VyIHBldCBpcyBub3QgdmFsaWQhJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQnV0dG9ucyhvcHRpb25zKSB7XG4gICAgJCh0aGlzLmNhbmNlbCkudG9nZ2xlKCk7XG4gICAgJCh0aGlzLnNhdmUpLmJ1dHRvbihvcHRpb25zKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
    var PetDetailsView = (function () {
        function PetDetailsView(petApi, forecastApi) {
            this.petApi = petApi;
            this.forecastApi = forecastApi;
            this.isLoading = false;
        }
        PetDetailsView.prototype.activate = function (params) {
            var _this = this;
            this.isLoading = true;
            this.petApi.get(params.id).then(function (pet) {
                _this.pet = pet;
                _this.forecastApi.get(pet.lat, pet.long).then(function (forecast) {
                    _this.isLoading = false;
                    _this.isRaining = forecast.currently.icon === 'rain';
                }).catch(function (err) {
                    _this.isLoading = false;
                    alertify.error(err);
                });
            }).catch(function (err) {
                _this.isLoading = false;
                alertify.error(err);
            });
        };
        Object.defineProperty(PetDetailsView.prototype, "heading", {
            get: function () {
                if (typeof this.isRaining === 'undefined')
                    return '';
                return this.isRaining ? 'Yes' : 'Nope';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PetDetailsView.prototype, "message", {
            get: function () {
                if (!this.pet)
                    return '';
                return "It looks like " + this.pet.name + " is " + (this.isRaining ? '' : 'not ') + "going to need one in " + this.pet.location + ".";
            },
            enumerable: true,
            configurable: true
        });
        return PetDetailsView;
    }());
    PetDetailsView = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService, forecast_service_1.ForecastService),
        __metadata("design:paramtypes", [pet_service_1.PetService, forecast_service_1.ForecastService])
    ], PetDetailsView);
    exports.PetDetailsView = PetDetailsView;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BLElBQWEsY0FBYztRQUt6Qix3QkFBb0IsTUFBa0IsRUFBVSxXQUE0QjtZQUF4RCxXQUFNLEdBQU4sTUFBTSxDQUFZO1lBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1lBRnBFLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFNEMsQ0FBQztRQUVoRixpQ0FBUSxHQUFSLFVBQVMsTUFBTTtZQUFmLGlCQWVDO1lBZEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQU87Z0JBQ3RDLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVk7b0JBQ3hELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDVixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNWLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHNCQUFJLG1DQUFPO2lCQUFYO2dCQUNFLEVBQUUsQ0FBQSxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUM7b0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN6QyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLG1DQUFPO2lCQUFYO2dCQUNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUMsbUJBQWlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxhQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLE1BQU0sOEJBQXdCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxNQUFHLENBQUM7WUFDdkgsQ0FBQzs7O1dBQUE7UUFDSCxxQkFBQztJQUFELENBakNBLEFBaUNDLElBQUE7SUFqQ1ksY0FBYztRQUQxQiwwQkFBTSxDQUFDLHdCQUFVLEVBQUUsa0NBQWUsQ0FBQzt5Q0FNTix3QkFBVSxFQUF1QixrQ0FBZTtPQUxqRSxjQUFjLENBaUMxQjtJQWpDWSx3Q0FBYyIsImZpbGUiOiJwZXQvZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9yZWNhc3RTZXJ2aWNlfSBmcm9tICcuLi9mb3JlY2FzdC9mb3JlY2FzdC1zZXJ2aWNlJztcbmltcG9ydCB7UGV0U2VydmljZX0gZnJvbSAnLi9wZXQtc2VydmljZSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5kZWNsYXJlIHZhciBhbGVydGlmeTtcblxuQGluamVjdChQZXRTZXJ2aWNlLCBGb3JlY2FzdFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgUGV0RGV0YWlsc1ZpZXcge1xuICBwcml2YXRlIHBldDogYW55O1xuICBwcml2YXRlIGlzUmFpbmluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBldEFwaTogUGV0U2VydmljZSwgcHJpdmF0ZSBmb3JlY2FzdEFwaTogRm9yZWNhc3RTZXJ2aWNlKXsgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcyl7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wZXRBcGkuZ2V0KHBhcmFtcy5pZCkudGhlbigocGV0OmFueSkgPT4ge1xuICAgICAgICB0aGlzLnBldCA9IHBldDtcbiAgICAgICAgdGhpcy5mb3JlY2FzdEFwaS5nZXQocGV0LmxhdCwgcGV0LmxvbmcpLnRoZW4oKGZvcmVjYXN0OmFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1JhaW5pbmcgPSBmb3JlY2FzdC5jdXJyZW50bHkuaWNvbiA9PT0gJ3JhaW4nO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgYWxlcnRpZnkuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBhbGVydGlmeS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXQgaGVhZGluZygpIHtcbiAgICBpZih0eXBlb2YgdGhpcy5pc1JhaW5pbmcgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHRoaXMuaXNSYWluaW5nID8gJ1llcycgOiAnTm9wZSc7XG4gIH1cblxuICBnZXQgbWVzc2FnZSgpIHtcbiAgICBpZighdGhpcy5wZXQpIHJldHVybiAnJztcbiAgICByZXR1cm4gYEl0IGxvb2tzIGxpa2UgJHt0aGlzLnBldC5uYW1lfSBpcyAke3RoaXMuaXNSYWluaW5nID8gJycgOiAnbm90ICd9Z29pbmcgdG8gbmVlZCBvbmUgaW4gJHt0aGlzLnBldC5sb2NhdGlvbn0uYDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
    var PetListView = (function () {
        function PetListView(api) {
            this.api = api;
            this.heading = 'Does my pet need an umbrella?';
            this.subheading = 'Select a pet to find out.';
            this.isLoading = false;
            this.displayBy = 'card';
        }
        PetListView.prototype.created = function () {
            this.getAllPets();
        };
        PetListView.prototype.getAllPets = function () {
            var _this = this;
            this.isLoading = true;
            this.api.getAll().then(function (pets) {
                _this.isLoading = false;
                _this.pets = pets;
            }).catch(function (err) {
                alertify.error(err);
            });
        };
        PetListView.prototype.remove = function (id) {
            var _this = this;
            this.api.destroy(id).then(function () {
                _this.pets = _this.pets.filter(function (p) { return p.id !== id; });
            }).catch(function (err) {
                alertify.error(err);
            });
        };
        Object.defineProperty(PetListView.prototype, "filteredPets", {
            get: function () {
                var _this = this;
                return this.search.value ?
                    this.pets.filter(function (p) { return p.name.toLowerCase().includes(_this.search.value.toLowerCase()); }) :
                    this.pets;
            },
            enumerable: true,
            configurable: true
        });
        return PetListView;
    }());
    PetListView = __decorate([
        aurelia_framework_1.inject(pet_service_1.PetService),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], PetListView);
    exports.PetListView = PetListView;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BLElBQWEsV0FBVztRQVF0QixxQkFBb0IsR0FBZTtZQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7WUFQbkMsWUFBTyxHQUFHLCtCQUErQixDQUFDO1lBQzFDLGVBQVUsR0FBRywyQkFBMkIsQ0FBQztZQUN6QyxjQUFTLEdBQVksS0FBSyxDQUFDO1lBQzNCLGNBQVMsR0FBVSxNQUFNLENBQUM7UUFJWSxDQUFDO1FBRXZDLDZCQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVELGdDQUFVLEdBQVY7WUFBQSxpQkFRQztZQVBDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVTtnQkFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ1YsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCw0QkFBTSxHQUFOLFVBQU8sRUFBRTtZQUFULGlCQU1DO1lBTEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELHNCQUFJLHFDQUFZO2lCQUFoQjtnQkFBQSxpQkFJQztnQkFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQTlELENBQThELENBQUM7b0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDOzs7V0FBQTtRQUNILGtCQUFDO0lBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtJQXJDWSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsd0JBQVUsQ0FBQzt5Q0FTUSx3QkFBVTtPQVJ4QixXQUFXLENBcUN2QjtJQXJDWSxrQ0FBVyIsImZpbGUiOiJwZXQvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGV0U2VydmljZX0gZnJvbSAnLi9wZXQtc2VydmljZSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5kZWNsYXJlIHZhciBhbGVydGlmeTtcblxuQGluamVjdChQZXRTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIFBldExpc3RWaWV3IHtcbiAgaGVhZGluZyA9ICdEb2VzIG15IHBldCBuZWVkIGFuIHVtYnJlbGxhPyc7XG4gIHN1YmhlYWRpbmcgPSAnU2VsZWN0IGEgcGV0IHRvIGZpbmQgb3V0Lic7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBkaXNwbGF5Qnk6c3RyaW5nID0gJ2NhcmQnO1xuICBwZXRzOiBhbnlbXTtcbiAgc2VhcmNoO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBQZXRTZXJ2aWNlKXsgfVxuXG4gIGNyZWF0ZWQoKXtcbiAgICB0aGlzLmdldEFsbFBldHMoKTtcbiAgfVxuXG4gIGdldEFsbFBldHMoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXBpLmdldEFsbCgpLnRoZW4oKHBldHM6YW55W10pID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnBldHMgPSBwZXRzO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBhbGVydGlmeS5lcnJvcihlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKGlkKSB7XG4gICAgdGhpcy5hcGkuZGVzdHJveShpZCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBldHMgPSB0aGlzLnBldHMuZmlsdGVyKHAgPT4gcC5pZCAhPT0gaWQpO1xuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBhbGVydGlmeS5lcnJvcihlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkUGV0cygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWFyY2gudmFsdWUgP1xuICAgICAgdGhpcy5wZXRzLmZpbHRlcihwID0+IHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoLnZhbHVlLnRvTG93ZXJDYXNlKCkpKSA6XG4gICAgICB0aGlzLnBldHM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('pet/pet-service',["require", "exports", "aurelia-http-client", "../endpoints", "../resources/types"], function (require, exports, aurelia_http_client_1, endpoints_1, types_1) {
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
        PetService.prototype.getTypes = function () {
            return new Promise(function (resolve, reject) {
                resolve(types_1.default);
            });
        };
        return PetService;
    }());
    exports.PetService = PetService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7Z0JBRTlCLE1BQU0sQ0FBQyxNQUFNLENBQUksbUJBQVMsQ0FBQyxhQUFhLGNBQVMsRUFBSSxDQUFDO3FCQUNyRCxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsNkJBQVEsR0FBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNqQyxPQUFPLENBQUMsZUFBUSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsaUJBQUM7SUFBRCxDQS9FQSxBQStFQyxJQUFBO0lBL0VZLGdDQUFVIiwiZmlsZSI6InBldC9wZXQtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IEVuZHBvaW50cyBmcm9tICcuLi9lbmRwb2ludHMnO1xuaW1wb3J0IFBldFR5cGVzIGZyb20gJy4uL3Jlc291cmNlcy90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBQZXRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpeyB9XG5cbiAgY3JlYXRlKHBldCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICBjbGllbnQucG9zdChgJHtFbmRwb2ludHMuUGV0U2hlbHRlckFQSX0vcGV0c2AsIHBldClcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcC5yZXNwb25zZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldChpZCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICBjbGllbnQuZ2V0KGAke0VuZHBvaW50cy5QZXRTaGVsdGVyQVBJfS9wZXRzLyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcC5yZXNwb25zZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsbCgpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuICAgICAgY2xpZW50LmdldChgJHtFbmRwb2ludHMuUGV0U2hlbHRlckFQSX0vcGV0c2ApXG4gICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3AucmVzcG9uc2UpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUocGV0KXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGNsaWVudCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICAgIGNsaWVudC5wdXQoYCR7RW5kcG9pbnRzLlBldFNoZWx0ZXJBUEl9L3BldHMvJHtwZXQuaWR9YCwgcGV0KVxuICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXNwLnJlc3BvbnNlKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveShpZCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgICBjbGllbnQuZGVsZXRlKGAke0VuZHBvaW50cy5QZXRTaGVsdGVyQVBJfS9wZXRzLyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcC5yZXNwb25zZSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFR5cGVzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKFBldFR5cGVzKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/types',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PetTypes = [
        {
            "id": "1",
            "name": "Bearded Dragon"
        },
        {
            "id": "2",
            "name": "Bird"
        },
        {
            "id": "3",
            "name": "Burro"
        },
        {
            "id": "4",
            "name": "Cat"
        },
        {
            "id": "5",
            "name": "Chameleon"
        },
        {
            "id": "6",
            "name": "Chicken"
        },
        {
            "id": "7",
            "name": "Chinchilla"
        },
        {
            "id": "8",
            "name": "Chinese Water Dragon"
        },
        {
            "id": "9",
            "name": "Cow"
        },
        {
            "id": "10",
            "name": "Dog"
        },
        {
            "id": "11",
            "name": "Donkey"
        },
        {
            "id": "12",
            "name": "Duck"
        },
        {
            "id": "13",
            "name": "Ferret"
        },
        {
            "id": "14",
            "name": "Fish"
        },
        {
            "id": "15",
            "name": "Gecko"
        },
        {
            "id": "16",
            "name": "Goose"
        },
        {
            "id": "17",
            "name": "Gerbil"
        },
        {
            "id": "18",
            "name": "Goat"
        },
        {
            "id": "19",
            "name": "Guinea Fowl"
        },
        {
            "id": "20",
            "name": "Guinea Pig"
        },
        {
            "id": "21",
            "name": "Hamster"
        },
        {
            "id": "22",
            "name": "Horse"
        },
        {
            "id": "23",
            "name": "Iguana"
        },
        {
            "id": "24",
            "name": "Llama"
        },
        {
            "id": "25",
            "name": "Lizard"
        },
        {
            "id": "26",
            "name": "Mice"
        },
        {
            "id": "27",
            "name": "Mule"
        },
        {
            "id": "28",
            "name": "Peafowl"
        },
        {
            "id": "29",
            "name": "Pig or Hog"
        },
        {
            "id": "30",
            "name": "Pigeon"
        },
        {
            "id": "31",
            "name": "Ponie"
        },
        {
            "id": "32",
            "name": "Pot Bellied Pig"
        },
        {
            "id": "33",
            "name": "Rabbit"
        },
        {
            "id": "34",
            "name": "Rat"
        },
        {
            "id": "35",
            "name": "Sheep"
        },
        {
            "id": "36",
            "name": "Skink"
        },
        {
            "id": "37",
            "name": "Snake"
        },
        {
            "id": "38",
            "name": "Stick Insect"
        },
        {
            "id": "39",
            "name": "Sugar Glider"
        },
        {
            "id": "40",
            "name": "Tarantula"
        },
        {
            "id": "41",
            "name": "Turkey"
        },
        {
            "id": "42",
            "name": "Turtle"
        }
    ];
    exports.default = PetTypes;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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VixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxjQUFjO1NBQ3ZCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxjQUFjO1NBQ3ZCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxXQUFXO1NBQ3BCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxRQUFRO1NBQ2pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxRQUFRO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLGtCQUFlLFFBQVEsQ0FBQyIsImZpbGUiOiJyZXNvdXJjZXMvdHlwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUGV0VHlwZXMgPSBbXG4gIHtcbiAgICBcImlkXCI6IFwiMVwiLFxuICAgIFwibmFtZVwiOiBcIkJlYXJkZWQgRHJhZ29uXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIyXCIsXG4gICAgXCJuYW1lXCI6IFwiQmlyZFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiM1wiLFxuICAgIFwibmFtZVwiOiBcIkJ1cnJvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCI0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2F0XCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCI1XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2hhbWVsZW9uXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCI2XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2hpY2tlblwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiN1wiLFxuICAgIFwibmFtZVwiOiBcIkNoaW5jaGlsbGFcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjhcIixcbiAgICBcIm5hbWVcIjogXCJDaGluZXNlIFdhdGVyIERyYWdvblwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiOVwiLFxuICAgIFwibmFtZVwiOiBcIkNvd1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMTBcIixcbiAgICBcIm5hbWVcIjogXCJEb2dcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjExXCIsXG4gICAgXCJuYW1lXCI6IFwiRG9ua2V5XCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIxMlwiLFxuICAgIFwibmFtZVwiOiBcIkR1Y2tcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjEzXCIsXG4gICAgXCJuYW1lXCI6IFwiRmVycmV0XCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIxNFwiLFxuICAgIFwibmFtZVwiOiBcIkZpc2hcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjE1XCIsXG4gICAgXCJuYW1lXCI6IFwiR2Vja29cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjE2XCIsXG4gICAgXCJuYW1lXCI6IFwiR29vc2VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjE3XCIsXG4gICAgXCJuYW1lXCI6IFwiR2VyYmlsXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIxOFwiLFxuICAgIFwibmFtZVwiOiBcIkdvYXRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjE5XCIsXG4gICAgXCJuYW1lXCI6IFwiR3VpbmVhIEZvd2xcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjIwXCIsXG4gICAgXCJuYW1lXCI6IFwiR3VpbmVhIFBpZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMjFcIixcbiAgICBcIm5hbWVcIjogXCJIYW1zdGVyXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIyMlwiLFxuICAgIFwibmFtZVwiOiBcIkhvcnNlXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIyM1wiLFxuICAgIFwibmFtZVwiOiBcIklndWFuYVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMjRcIixcbiAgICBcIm5hbWVcIjogXCJMbGFtYVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMjVcIixcbiAgICBcIm5hbWVcIjogXCJMaXphcmRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjI2XCIsXG4gICAgXCJuYW1lXCI6IFwiTWljZVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMjdcIixcbiAgICBcIm5hbWVcIjogXCJNdWxlXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIyOFwiLFxuICAgIFwibmFtZVwiOiBcIlBlYWZvd2xcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjI5XCIsXG4gICAgXCJuYW1lXCI6IFwiUGlnIG9yIEhvZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMzBcIixcbiAgICBcIm5hbWVcIjogXCJQaWdlb25cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjMxXCIsXG4gICAgXCJuYW1lXCI6IFwiUG9uaWVcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjMyXCIsXG4gICAgXCJuYW1lXCI6IFwiUG90IEJlbGxpZWQgUGlnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIzM1wiLFxuICAgIFwibmFtZVwiOiBcIlJhYmJpdFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiMzRcIixcbiAgICBcIm5hbWVcIjogXCJSYXRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjM1XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hlZXBcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjM2XCIsXG4gICAgXCJuYW1lXCI6IFwiU2tpbmtcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjM3XCIsXG4gICAgXCJuYW1lXCI6IFwiU25ha2VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjM4XCIsXG4gICAgXCJuYW1lXCI6IFwiU3RpY2sgSW5zZWN0XCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCIzOVwiLFxuICAgIFwibmFtZVwiOiBcIlN1Z2FyIEdsaWRlclwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiNDBcIixcbiAgICBcIm5hbWVcIjogXCJUYXJhbnR1bGFcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIjQxXCIsXG4gICAgXCJuYW1lXCI6IFwiVHVya2V5XCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCI0MlwiLFxuICAgIFwibmFtZVwiOiBcIlR1cnRsZVwiXG4gIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IFBldFR5cGVzO1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n  <footer class=\"text-center\">\n    <span>\n      © David Crossman | <a href=\"https://github.com/DJCrossman/pet-shelter-application\"><i class=\"fa fa-github\"></i> View on GitHub</a>\n    </span>\n  </footer>\n</template>\n"; });
define('text!pet/create.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <h2>${heading}</h2>\n        </div>\n        <div class=\"col-md-6 col-md-offset-3\">\n          <div class=\"pet-create panel panel-default\">\n            <div class=\"panel-body\">\n              <form class=\"form\" autocomplete=\"off\">\n                <div class=\"form-group required\">\n                  <label for=\"name\" class=\"control-label\">Name</label>\n                  <input type=\"text\" class=\"form-control\" id=\"name\" value.bind=\"pet.name\" placeholder=\"Enter a name...\">\n                </div>\n                <div class=\"form-group required\">\n                  <label for=\"typeName\" class=\"control-label\">Type</label>\n                  <input type=\"text\" class=\"form-control\" id=\"typeName\" ref=\"typeName\" value.bind=\"pet.typeName\" placeholder=\"Enter a type...\">\n                </div>\n                <div class=\"form-group required\">\n                  <label for=\"breedName\" class=\"control-label\">Breed</label>\n                  <input type=\"text\" class=\"form-control\" id=\"breedName\" value.bind=\"pet.breedName\" placeholder=\"Enter a breed...\">\n                </div>\n                <div class=\"form-group required\">\n                  <label for=\"location\" class=\"control-label\">Location</label>\n                  <input type=\"text\" class=\"form-control\" id=\"location\" ref=\"location\" value.bind=\"pet.location\" placeholder=\"Enter a location...\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"text-right\">\n                    <a href=\"#pets\" class=\"btn btn-link\" ref=\"cancel\">Go back</a>\n                    <a class=\"btn btn-default\" click.delegate=\"addMyPet()\" ref=\"save\" data-loading-text=\"Adding your pet...\">Add my pet!</a>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!pet/details.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\" if.bind=\"isLoading\">\n          <div class=\"text-center margin-top\">\n            <i class=\"fa fa-paw fa-spin fa-3x fa-fw\"></i>\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\" if.bind=\"!isLoading\">\n          <img src=\"${isRaining ? 'assets/img/dog-rain.png' : 'assets/img/dog-sun.png'}\" alt=\"${isRaining ? 'Wet Pupper' : 'Dry Pupper'}\" class=\"img-responsive\">\n        </div>\n        <div class=\"col-md-6 margin-top\" if.bind=\"!isLoading\">\n          <h2>${heading}</h2>\n          <p>${message}</p>\n          <p><a href=\"#\">Lookup a different pet</a></p>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
define('text!pet/list.html', ['module'], function(module) { module.exports = "<template>\n  <section class=\"au-animate level\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <h2>${heading}</h2>\n          <h3>${subheading}</h3>\n        </div>\n      </div>\n      <div class=\"row\" if.bind=\"!isLoading\">\n        <div class=\"input-group col-md-6 col-md-offset-3\">\n          <div class=\"input-group-addon\"><i class=\"fa fa-search\"></i></div>\n          <input type=\"text\" name=\"search\" ref=\"search\" placeholder=\"Search...\" class=\"form-control\">\n          <div class=\"input-group-addon\">\n            <a href=\"\" click.delegate=\"displayBy = 'list'\">\n              <i class=\"fa fa-list\" if.bind=\"displayBy !== 'list'\"></i>\n            </a>\n            <a href=\"\" click.delegate=\"displayBy = 'card'\">\n              <i class=\"fa fa-list-alt\" if.bind=\"displayBy !== 'card'\"></i>\n            </a>\n          </div>\n          <div class=\"input-group-addon\">\n            <a href=\"\" click.delegate=\"getAllPets()\">\n              <i class=\"fa fa-refresh\" if.bind=\"!isLoading\"></i>\n              <i class=\"fa fa-refresh fa-spin\" if.bind=\"isLoading\"></i>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" if.bind=\"isLoading\">\n        <div class=\"col-md-12 text-center margin-top\">\n          <i class=\"fa fa-paw fa-spin fa-3x fa-fw\"></i>\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"row\" if.bind=\"displayBy === 'card' && !isLoading\">\n        <div class=\"col-md-3\" repeat.for=\"pet of filteredPets\">\n          <div class=\"pet-card panel panel-default\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">\n                <span>${pet.name}</span>\n                <a class=\"btn btn-link pull-right no-padding\" click.delegate=\"remove(pet.id)\"><i class=\"fa fa-times\"></i></a>\n              </h3>\n            </div>\n            <div class=\"panel-body\">\n              <div>\n                <b>Type: </b>\n                <span>${pet.typeName}</span>\n              </div>\n              <div>\n                <b>Breed: </b>\n                <span>${pet.breedName}</span>\n              </div>\n              <div class=\"text-right\">\n                <a href=\"#pets/${pet.id}\">View <i class=\"fa fa-paw\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"text-center col-md-12\" if.bind=\"!pets.length\">\n          No pets to be found.\n        </div>\n        <div class=\"col-md-12\">\n          <a href=\"#pets/new\" class=\"pull-right\"><i class=\"fa fa-plus\"></i> Add a new pet</a>\n        </div>\n      </div>\n      <div class=\"row\" if.bind=\"displayBy === 'list' && !isLoading\">\n        <div class=\"col-md-12\">\n          <div class=\"pet-table panel panel-default\">\n            <div class=\"panel-body\">\n              <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Type</th>\n                  <th>Breed</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr repeat.for=\"pet of filteredPets\">\n                  <td>${pet.name}</td>\n                  <td>${pet.typeName}</td>\n                  <td>${pet.breedName}</td>\n                  <td class=\"text-right\">\n                    <a href=\"#pets/${pet.id}\">View <i class=\"fa fa-paw\"></i></a>\n                    <button class=\"btn btn-link\" click.delegate=\"remove(pet.id)\"><i class=\"fa fa-times\"></i></button>\n                  </td>\n                </tr>\n                <tr if.bind=\"!pets.length\">\n                  <td colspan=\"4\">No pets to be found.</td>\n                </tr>\n              </tbody>\n              <tfoot>\n                <th colspan=\"4\"><a href=\"#pets/new\" class=\"pull-right\"><i class=\"fa fa-plus\"></i> Add a new pet</a></th>\n              </tfoot>\n            </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map