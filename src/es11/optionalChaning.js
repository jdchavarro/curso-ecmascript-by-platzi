const user = {};
// console.log(user.profile.email); // TypeError: Cannot read properties of undefined
console.log(user?.profile?.email); // undefined

if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail'); // fail
}



