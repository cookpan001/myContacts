angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope) {})

.controller('ContactsCtrl', function($scope, $cordovaContacts) {
  var options  = {
    fields: ['id', 'name', 'phoneNumbers'],
    multiple: true
  };
  //$scope.contacts = [{"id":1,"rawId":null,"displayName":null,"name":{"givenName":"Kate","formatted":"Kate Bell","middleName":null,"familyName":"Bell","honorificPrefix":null,"honorificSuffix":null},"nickname":null,"phoneNumbers":[{"type":"mobile","value":"(555) 564-8583","id":0,"pref":false},{"type":"other","value":"(415) 555-3695","id":1,"pref":false}],"emails":[{"type":"work","value":"kate-bell@mac.com","id":0,"pref":false},{"type":"work","value":"www.icloud.com","id":1,"pref":false}],"addresses":[{"postalCode":"94010","type":"work","id":0,"locality":"Hillsborough","pref":"false","streetAddress":"165 Davis Street","region":"CA","country":null}],"ims":null,"organizations":[{"name":"Creative Consulting","title":"Producer","type":null,"pref":"false","department":null}],"birthday":254145600000,"note":null,"photos":null,"categories":null,"urls":null},{"id":2,"rawId":null,"displayName":null,"name":{"givenName":"Daniel","formatted":"Daniel Higgins Jr.","middleName":null,"familyName":"Higgins","honorificPrefix":null,"honorificSuffix":"Jr."},"nickname":null,"phoneNumbers":[{"type":"home","value":"555-478-7672","id":0,"pref":false},{"type":"mobile","value":"(408) 555-5270","id":1,"pref":false},{"type":"fax","value":"(408) 555-3514","id":2,"pref":false}],"emails":[{"type":"home","value":"d-higgins@mac.com","id":0,"pref":false}],"addresses":[{"postalCode":"94925","type":"home","id":0,"locality":"Corte Madera","pref":"false","streetAddress":"332 Laguna Street","region":"CA","country":"USA"}],"ims":null,"organizations":null,"birthday":null,"note":"Sister: Emily","photos":null,"categories":null,"urls":null},{"id":3,"rawId":null,"displayName":null,"name":{"givenName":"John","formatted":"John Appleseed","middleName":null,"familyName":"Appleseed","honorificPrefix":null,"honorificSuffix":null},"nickname":null,"phoneNumbers":[{"type":"mobile","value":"888-555-5512","id":0,"pref":false},{"type":"home","value":"888-555-1212","id":1,"pref":false}],"emails":[{"type":"work","value":"John-Appleseed@mac.com","id":0,"pref":false}],"addresses":[{"postalCode":"30303","type":"work","id":0,"locality":"Atlanta","pref":"false","streetAddress":"3494 Kuhl Avenue","region":"GA","country":"USA"},{"postalCode":"30303","type":"home","id":1,"locality":"Atlanta","pref":"false","streetAddress":"1234 Laurel Street","region":"GA","country":"USA"}],"ims":null,"organizations":null,"birthday":330523200000,"note":"College roommate","photos":null,"categories":null,"urls":null},{"id":4,"rawId":null,"displayName":null,"name":{"givenName":"Anna","formatted":"Anna Haro","middleName":null,"familyName":"Haro","honorificPrefix":null,"honorificSuffix":null},"nickname":"Annie","phoneNumbers":[{"type":"home","value":"555-522-8243","id":0,"pref":false}],"emails":[{"type":"home","value":"anna-haro@mac.com","id":0,"pref":false}],"addresses":[{"postalCode":"94965","type":"home","id":0,"locality":"Sausalito","pref":"false","streetAddress":"1001  Leavenworth Street","region":"CA","country":"USA"}],"ims":null,"organizations":null,"birthday":494164800000,"note":null,"photos":null,"categories":null,"urls":null},{"id":5,"rawId":null,"displayName":null,"name":{"givenName":"Hank","formatted":"Hank M. Zakroff","middleName":"M.","familyName":"Zakroff","honorificPrefix":null,"honorificSuffix":null},"nickname":null,"phoneNumbers":[{"type":"work","value":"(555) 766-4823","id":0,"pref":false},{"type":"other","value":"(707) 555-1854","id":1,"pref":false}],"emails":[{"type":"work","value":"hank-zakroff@mac.com","id":0,"pref":false}],"addresses":[{"postalCode":"94901","type":"work","id":0,"locality":"San Rafael","pref":"false","streetAddress":"1741 Kearny Street","region":"CA","country":null}],"ims":null,"organizations":[{"name":"Financial Services Inc.","title":"Portfolio Manager","type":null,"pref":"false","department":null}],"birthday":null,"note":null,"photos":null,"categories":null,"urls":null},{"id":6,"rawId":null,"displayName":null,"name":{"givenName":"David","formatted":"David Taylor","middleName":null,"familyName":"Taylor","honorificPrefix":null,"honorificSuffix":null},"nickname":null,"phoneNumbers":[{"type":"home","value":"555-610-6679","id":0,"pref":false}],"emails":null,"addresses":[{"postalCode":"94920","type":"home","id":0,"locality":"Tiburon","pref":"false","streetAddress":"1747 Steuart Street","region":"CA","country":"USA"}],"ims":null,"organizations":null,"birthday":897912000000,"note":"Plays on Cole's Little League Baseball Team\n","photos":null,"categories":null,"urls":null},{"id":7,"rawId":null,"displayName":null,"name":{"givenName":"zhu","formatted":"zhu peng","middleName":null,"familyName":"peng","honorificPrefix":null,"honorificSuffix":null},"nickname":null,"phoneNumbers":[{"type":"mobile","value":"8613401199253","id":0,"pref":false}],"emails":null,"addresses":null,"ims":null,"organizations":[{"name":"kabam","title":null,"type":null,"pref":"false","department":null}],"birthday":null,"note":null,"photos":null,"categories":null,"urls":null}];
  $cordovaContacts.find(options).then(function(contacts){
    $scope.contacts = contacts;
    console.log(contacts);
  }, function(contactError){
    console.log(contactError);
  });
  $scope.remove = function(contact) {
    $scope.contacts.remove(contact);
  }
})
.controller('ContactDetailCtrl', function($scope, $stateParams, $cordovaContacts) {
  $scope.contact = null;
  var options  = {
    fields: ['id', 'name', 'phoneNumbers'],
    multiple: true
  };
  $cordovaContacts.find(options).then(function(contacts){
    for (var i = 0; i < contacts.length; i++) {
      if(contacts[i].id === parseInt($stateParams.id)){
        $scope.contact = contacts[i];
        break;
      }
    };
    console.log(contacts);
  }, function(contactError){
    console.log(contactError);
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});