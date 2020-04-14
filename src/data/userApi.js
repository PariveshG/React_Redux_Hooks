import axios from 'axios';
//import uuid from 'uuidv4';

export default class UserApi {
	static getAllUsers() {
		return axios.get("http://localhost:3000/users")
				.then(res => res.data);
	}

	static saveUser(user) {
		if(user.name.length < 1) {
			return new Promise((resolve, reject) => {				
				setTimeout(() => {
					reject("User name must be at least 1 character.");
				}, 1000);
			});
		}
		
		
		return axios.post("http://localhost:3000/users", user)
				.then(res => res.data);
	}

	static deleteUser(id) {
		return axios.delete("http://localhost:3000/users/" + id);
	}
}
