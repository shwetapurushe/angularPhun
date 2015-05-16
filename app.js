/**
 * Created by Shweta on 5/10/15.
 */

var fun_App = angular.module('app', []);

fun_App.controller("parentController", function(){
    this.stats = "Hello Shweta";
});

fun_App.controller("babyController", function(){
    this.stats = "Hello Baby Shweta";
});