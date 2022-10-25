const users = [
    { id: 1, gender: "male", name: "david", contact: "089847", address: "Saltburn", PhotoUrl: "" },
    { id: 2, gender: "male", name: "david", contact: "089847", address: "Saltburn", PhotoUrl: "" },
    { id: 3, gender: "female", name: "Lizz", contact: "089847", address: "Manchester", PhotoUrl: "" },
    { id: 4, gender: "male", name: "root", contact: "5089741", address: "Bradford", PhotoUrl: "" },
    { id: 5, gender: "male", name: "david", contact: "089847", address: "Saltburn", PhotoUrl: "" },
    { id: 6, gender: "female", name: "penny", contact: "089847", address: "Leeds", PhotoUrl: "" },
    { id: 7, gender: "male", name: "Leonard", contact: "98985647", address: "Middelesborough", PhotoUrl: "" },
    { id: 8, gender: "male", name: "david", contact: "089847", address: "Saltburn", PhotoUrl: "" },
]



module.exports.getAllUsers = ((req, res,) => {
    res.json(users);
});

module.exports.saveAUser = ((req, res) => {

})
module.exports.getUserDetail = ((req, res) => {
    res.send("tools detail")
})