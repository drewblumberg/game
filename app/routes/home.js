'use strict';

exports.index = (req, res)=>{
  var currentUserId = req.session.userId;
  var currentUserEmail = req.session.email;
  res.render('home/index', {title: 'Node.js: Home', currentUserEmail: currentUserEmail, currentUserId: currentUserId});
};
