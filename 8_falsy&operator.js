function convert(user) {
    const converted_user = {}

    const copyUser = {
        name : user.name,
        age : user.age,
        address : user.address || {location : '입력없음'},
        job : user.job || '직장없음',
    }
    Object.assign(converted_user, copyUser)
    
	return converted_user
}
const result = {
	success: false,
	body: [
		{
			name: 'Aaron',
			age: 10,
			address: null,
		},
		{
			name: 'Baron',
			age: 20,
			address: {
				location: 'Earth'
			},
		},
		{
			name: 'Caron',
			age: 30,
			address: null,
			job: 'Developer',
		},
	]
}
const converted_users = []
for (var user of result.body) {
	const converted_user = convert(user)
	converted_users.push(converted_user)
}
console.log(converted_users)