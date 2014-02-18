var data = require("../users.json");

exports.viewMatchPage = function(req, res){
	// Look up user in data JSON. 
	

	// get occupation
	console.log(req.session)
	if (req.session.user) 
		occupation = req.session.user.occupation
	else
		occupation = ''
	// console.log('occupation' + occupation)

	// find users with matching occupation
	matching_occupation_users = []
	var numberOfUsers = data["users"].length;
	for (i = 0; i < numberOfUsers; i++) {
		user = data['users'][i]
		// if (user.occupation == occupation) -> eventually check this
		matching_occupation_users.push(user)
	}
	// console.log(matching_occupation_users)
	
	num_matching = matching_occupation_users.length
	rand_index = Math.floor(Math.random() * num_matching)
	matched_user = matching_occupation_users[rand_index]
	// console.log('matched user: ')
	// console.log(matched_user.firstname) 

	var curr_user = req.params.uname
	console.log('curr user:')
	console.log(curr_user)

	res.render('matchInterviewee', {
		'match': matched_user,
		'curr_user': curr_user
	});

};