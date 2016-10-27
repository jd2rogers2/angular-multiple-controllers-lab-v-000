function ContactController(){
  var vm = this;
  vm.name = 'james';
  vm.email = 'email@email.com';
  vm.phone = 23452345;

  vm.changeName = function(){
    vm.name = 'Something else!';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)