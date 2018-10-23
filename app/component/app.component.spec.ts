/*     import * as angular from "angular";
    import 'angular-mocks/ngMock';
    import { gameController } from "./app.component";
    
    describe("Twitter feed component", () => {
    
        let controller: gameController;
        let $componentController: angular.IComponentControllerService;
        let $rootScope: angular.IRootScopeService;
        let $q;
        const appService = jasmine.createSpyObj('app', ['getAll']);
        const filter = jasmine.createSpyObj('filter', ['filter']);
        const sce = jasmine.createSpyObj('sce', ['trustAsHtml']);

        const stub = {};
    
        beforeEach(() => {
            angular.mock.module('app', ($provide) => {
            $provide.value('app', appService);
            $provide.value('filter', filter);
            $provide.value('sce', sce);
        });
    
        beforeEach(inject(($controller, $q) => {
           controller = $controller("controller", {
               service: appService
           });
        }));

        function createController(): gameController {
            return $componentController('app', { $scope: $rootScope.$new() }, {}) as gameController;
        }
    
        it("should get data from service", () => {
            appService.getAll.and.returnValue($q.resolve());
            const ctrl = createController();       
            controller.initData();
            $rootScope.$apply();
            expect(ctrl.boardsize).toEqual(3);
        });

        it('getNumberOfPages method should be called', () => {
            const ctrl = createController();
            spyOn(ctrl, 'evaluateTurn').and.callThrough();
            ctrl.evaluateTurn();
            $rootScope.$apply();
            expect(ctrl.evaluateTurn).toHaveBeenCalled();
        });

        it('getPageNumber method should be triggered', () => {
            const ctrl = createController();
            spyOn(ctrl, 'changePlayer').and.callThrough();
            ctrl.changePlayer();
            $rootScope.$apply();
            expect(ctrl.changePlayer).toHaveBeenCalled();
        });

        it('convertTrusted method should be triggered', () => {
            const ctrl = createController();
            spyOn(ctrl, 'playTurn').and.callThrough();
            ctrl.playTurn('event','2');
            $rootScope.$apply();
            expect(ctrl.playTurn).toEqual('html bind');;
        });
    });
});

 */