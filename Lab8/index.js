

//get data
var xhr = new XMLHttpRequest()
xhr.open("GET", "rockbands.json")
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        bandsData = JSON.parse(xhr.responseText)
        getBands()
    }
}
xhr.send()

// get bands name
function getBands() {
    var bandSelect = document.getElementById("band");
    bandSelect.innerHTML = '<option value="">Select Band</option>'

    for (var band in bandsData) {
        var option = document.createElement("option")
        option.value = band
        option.textContent = band
        bandSelect.appendChild(option)
    }
}

//add members
function bandMembers() {
    var bandSelect = document.getElementById("band")
    var membersSelect = document.getElementById("members")
    var selectedBand = bandSelect.value

    membersSelect.innerHTML = '<option value="">Select member</option>'

    if (selectedBand && bandsData[selectedBand]) {
        var members = bandsData[selectedBand]
        for (var i = 0; i < members.length; i++) {
            var option = document.createElement("option")
            option.value = members[i].value
            option.textContent = members[i].name
            membersSelect.appendChild(option)
        }
    }
}

function openUrl() {
    var membersSelect = document.getElementById("members")
    var selectedURL = membersSelect.value;
    if (selectedURL) {
        window.open(selectedURL, "_blank")
    }
}

document.getElementById("band").onchange = bandMembers
document.getElementById("members").onchange = openUrl



