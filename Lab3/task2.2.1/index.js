
data = location.search.substring(1, location.search.length).split('&')
var userData = []
for (var i = 0; i < data.length; i++) {
    userData[data[i].split('=')[0]] = data[i].split('=')[1];}

document.body.innerHTML = `
<h1>Welcome, ${userData.usrnm}!</h1>
<div>
    <p><strong>Interests:</strong> ${userData.interests}</p>
    <p><strong>Address:</strong> ${userData.address}</p>
    <p><strong>Gender:</strong> ${userData.gender}</p>
    <p><strong>Email:</strong> ${userData.email}</p>
    <p><strong>Mobile:</strong> ${userData.mobile}</p>
</div>`
