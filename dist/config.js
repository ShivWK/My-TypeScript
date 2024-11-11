const user = {
    username: "Shivendra",
    email: "shivendrawk@gmail.com",
    darkMode: "light",
    language: "English / Hindi",
};
const newSetting = {
    darkMode: true,
    language: "Hindi",
};
function updateUserSetting1(partialSetting) {
    console.log(`Updating : ${partialSetting}`);
}
function updateUserSetting2(partialSetting) {
    console.log(`Updating : ${partialSetting.darkMode}`);
}
updateUserSetting2(user);
