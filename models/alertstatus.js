////////////////////////////////////////
// emergencyalerts-lambda
//
// Copyright (c) 2018 Jonathan Hardison
// /models/gamestatus.js
///////////////////////////////////////

'use strict';
class AlertStatus{

 constructor(inStatus, inName, inAlertDescription){
    this.status = inStatus;
    this.alertname = inName;
    this.alertdescription = inAlertDescription; //used for when alt mapping is not same. baseline and make them respond the same.
 }
}

module.exports = AlertStatus;