function greetUser(user) {
    if ("email" in user) {
        console.log(`Hi I'm ${user.name} and my mail is ${user.email}`);
    }
    else {
        console.log(`Hi I'm ${user.name}`);
    }
}
greetUser({ name: "Shivendra" });
greetUser({ name: "shivendra", email: "shivendrawk@gamil.com" });
