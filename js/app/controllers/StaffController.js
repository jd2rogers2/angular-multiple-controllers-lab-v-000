function StaffController(){
  var vm = this;
  vm.name = "different name";
  vm.email = "email2@email.com";
  vm.phone = 98769876;
}

angular
  .module('app')
  .controller('StaffController', StaffController)