function ConfigureFunction() {

}
function InitializeFunction() {

}
function NGuiBodyController() {

}
function NGuiItemController($scope) {
    $scope.tab = new function () {
        var _tab = this;
        this.item = [{ classes: 'active' }, { classes: '' }, { classes: '' }, { classes: '' }]
        this.content = [{ classes: 'active' }, { classes: '' }, { classes: '' }, { classes: '' }]
        this.list = ['Tab1', 'Tab2', 'Tab3', 'Tab4', 'Tab5']
        this.contents = ['Content 1', 'Content 2', 'Content 3', 'Content 4', 'Content5']
        this.shown = _tab.item[0]
        this.activated = _tab.content[0]
        this.event = new function () {
            this.onclick = function (item) {
                $scope.tab.shown.classes = ''
                $scope.tab.activated.classes = ''
                $scope.tab.item[item] = {}
                $scope.tab.item[item].classes = 'active'
                $scope.tab.content[item] = {}
                $scope.tab.content[item].classes = 'active'
                $scope.tab.shown = $scope.tab.item[item]
                $scope.tab.activated = $scope.tab.content[item]
            }
            this.onhover = function (item) {

            }

            this.onchange = function (item) {

            }
            this.onselect = function (item) {

            }
        }
    }
}

angular.module('ui', [])
.config(ConfigureFunction)
.config(InitializeFunction)
.controller('NGuiBodyController', NGuiBodyController)
.controller('NGuiItemController', NGuiItemController)