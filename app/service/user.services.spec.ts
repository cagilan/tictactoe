/*     import * as angular from "angular";
    import 'angular-mocks';
    import { GameDataService } from "./user.services";
    
    describe("App Service", () => {
    
        let GameDataService = {
            getAll() {

            }
        };
        let $http: ng.IHttpBackendService;
        const httpMock = {
            get() {
                return {
                    then() {
                        // ignore this
                    }
                };
            }
        };
    
        beforeEach(() => {
            angular.mock.module('app', ($provide) => {
                $provide.value('$http', httpMock);
            });
    
            inject(($injector) => {
                $http = $injector.get('$http');
            });
        });
    
        it("should get message", () => {
            spyOn(GameDataService, 'getAll').and.callThrough();
            GameDataService.getAll();
            expect(GameDataService.getAll).toHaveBeenCalled();
           
        });
    });
 */