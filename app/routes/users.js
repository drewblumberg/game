'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.login = (req, res)=>{
  var user = new User(req.body);
  user.login(u=>{
    if(u){
      req.session.userId = u._id;
      req.session.email = u.email;
    }else{
      req.session.userId = null;
      req.session.email = null;
    }
    res.send({user: user});
  });
};

exports.logout = function(req, res){
  req.session = null;
  res.redirect('/');
};
