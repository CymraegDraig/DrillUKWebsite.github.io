const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Drill-UK", /*Server name*/
        serverIp: "fivem.drilluk.uk", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        serverIp2: "DrillUK | Afterdark", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        discordServerID: "1033780064996827227" /*Yourver ID (if you want to add online user counter, you must have enabled Discord server widget)*/
    },

    atGroupsDefaultColors: {
        Leadership:  "rgba(255, 3, 3, 1)",
        Developers: "rgba(230, 83, 0, 0.5)",
        Managers: "rgba(0, 255, 145, 0.5)",
        SeniorAdmins: "rgba(11, 175, 255, 0.5)",
        Admins: "rgba(11, 175, 255, 0.5)",
        SeniorModerators: "rgba(11, 175, 255, 0.5)",
        Moderators: "rgba(11, 175, 255, 0.5)",
        TrialModerators: "rgba(11, 175, 255, 0.5)",
    },
    staffTeamPage: {
        Leadership: [
            {
                inGameName: "MB Playz",
                rank: "Founder",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/MB.png",
                rankColor: "rgba(255, 3, 3, 1)"
            },
            {
                inGameName: "Spartan",
                rank: "Co-Founder",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Spartan.png",
                rankColor: ""
            },
            {
                inGameName: "Stevie",
                rank: "Co-Founder",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Stevie.png",
                rankColor: ""
            },
            {
                inGameName: "UKTriggs",
                rank: "General Manager",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/UKTriggs.png",
                rankColor: ""
            },
            {
                inGameName: "SL0TH",
                rank: "Head of Development",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Sloth.png",
                rankColor: ""
            },
        ],
        Developers: [
            {
                inGameName: "Ghost",
                rank: "Full-time Developer",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Ghost.png",
                rankColor: ""
            },
            {
                inGameName: "Ross",
                rank: "Full-time Developer",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Ross.png",
                rankColor: ""
            },
            {
                inGameName: "Clarky",
                rank: "Learning Developer",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Clarky.png",
                rankColor: ""
            },
        ],
        Managers: [
            {
                inGameName: "Malia ",
                rank: "Head of Staff",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Malia.png",
                rankColor: ""
            },
            {
                inGameName: "AlmightyBizzle",
                rank: "Head of Staff",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Bizzle.png",
                rankColor: ""
            },
            {
                inGameName: "DavidUGUK",
                rank: "Head of Organisation",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/David.png",
                rankColor: ""
            },
            {
                inGameName: "Tommy",
                rank: "Community Manager",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Tommy.png",
                rankColor: ""
            },
            {
                inGameName: "Vexuix",
                rank: "Community Manager",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Vexuix.png",
                rankColor: ""
            },
        ],
        SeniorAdmins: [
            {
                inGameName: "Alpha Demon",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Alpha.png",
                rankColor: ""
            },
            {
                inGameName: "Hodges",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Hodges.png",
                rankColor: ""
            },
            {
                inGameName: "Jeffries",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Jeffries.png",
                rankColor: ""
            },
            {
                inGameName: "Joeyy",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Joeyy.png",
                rankColor: ""
            },
            {
                inGameName: "JS",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/JS.png",
                rankColor: ""
            },
        ],
        Admins: [
            {
                inGameName: "Baldy P",
                rank: "Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Baldy.png",
                rankColor: ""
            },
            {
                inGameName: "Draig",
                rank: "Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Draig.gif",
                rankColor: ""
            },
            {
                inGameName: "Tobs",
                rank: "Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Tobs.png",
                rankColor: ""
            },
            {
                inGameName: "Kuzii",
                rank: "Admin",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Kuzii.png",
                rankColor: ""
            },
        ],
        SeniorModerators: [
            {
                inGameName: "Turkey Teef",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Kev.png",
                rankColor: ""
            },
            {
                inGameName: "General",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/General.png",
                rankColor: ""
            },
            {
                inGameName: "Silckz",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Lewis.png",
                rankColor: ""
            },
        ],
        Moderators: [
            {
                inGameName: "CP",
                rank: "Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/CP.png",
                rankColor: ""
            },
            {
                inGameName: "Burk",
                rank: "Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/placeholder.png",
                rankColor: ""
            },
            {
                inGameName: "Rylie",
                rank: "Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Rylie.png",
                rankColor: ""
            },
        ],
        TrialModerators: [
            {
                inGameName: "Coin Flip",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Coinflip.png",
                rankColor: ""
            },
            {
                inGameName: "Ethan",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/placeholder.png",
                rankColor: ""
            },
            {
                inGameName: "Lewis",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Brickham.png",
                rankColor: ""
            },
            {
                inGameName: "AlexisTexas",
                rank: "Discord Support",
                skinUrlOrPathToFile: "images/Staff/FiveM/Semi/Alexis.png",
                rankColor: ""
            },
        ]
    },
}


/*Mobile navbar (open, close)*/
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

/*FAQs*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        else accordionItemBody.style.maxHeight = "0px";
    });
});

/*Config navbar*/
const serverName = document.querySelector(".server-name");
const serverLogo = document.querySelector(".logo-img");
/*Config header*/
const serverIp = document.querySelector(".fivem-server-ip");
const serverLogoHeader = document.querySelector(".logo-img-header");
const discordOnlineUsers = document.querySelector(".discord-online-users");
const fivemOnlinePlayers = document.querySelector(".fivem-online-players");
/*Config contact*/
const contactForm = document.querySelector(".contact-form");
const inputWithLocationAfterSubmit = document.querySelector(".location-after-submit");

const getDiscordOnlineUsers = async () => {
    try {
        const discordServerId = config.serverInfo.discordServerID;

        const apiWidgetUrl = `https://discord.com/api/guilds/${discordServerId}/widget.json`;
        let response = await fetch(apiWidgetUrl);
        let data = await response.json();

        if(!data.presence_count) return "None";
        else return (await data.presence_count);
    } catch (e) {
        return "None";
    }
}

const getfivemOnlinePlayer = async () => {
    try {
        const serverIp = config.serverInfo.serverIp;

        const apiUrl = `https://api.mcsrvstat.us/2/${serverIp}`;
        let response = await fetch(apiUrl);
        let data = await response.json();

        return data.players.online;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const getUuidByUsername = async (username) => {
    try {
        const usernameToUuidApi = `https://api.minetools.eu/uuid/${username}`;
        let response = await fetch(usernameToUuidApi);
        let data = await response.json();

        return data.id;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const getSkinByUuid = async (username) => {
    try {
        const skinByUuidApi = `https://visage.surgeplay.com/${config.userSKinTypeInStaffTeam}/512/${await getUuidByUsername(username)}`;
        let response = await fetch(skinByUuidApi);

        if(response.status === 400) return `https://visage.surgeplay.com/${config.userSKinTypeInStaffTeam}/512/ec561538f3fd461daff5086b22154bce`;
        else return skinByUuidApi;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

/*IP copy only works if you have HTTPS on your website*/
const copyIp = () => {
    const copyIpButton = document.querySelector(".copy-ip");
    const copyIpAlert = document.querySelector(".ip-copied");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIp);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const setDataFromConfigToHtml = async () => {
    /*Set config data to navbar*/
    serverName.innerHTML = config.serverInfo.serverName;
    serverLogo.src = `images/` + config.serverInfo.serverLogoImageFileName;

    /*Set config data to header*/
    serverIp.innerHTML = config.serverInfo.serverIp;

    let locationPathname = location.pathname;

    if(locationPathname == "/" || locationPathname.includes("fivem-semi")) {
        copyIp();
        /*Set config data to header*/
        serverLogoHeader.src = `images/` + config.serverInfo.serverLogoImageFileName;
        discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();
        fivemOnlinePlayers.innerHTML = await getfivemOnlinePlayer();
    } else if(locationPathname.includes("rules")) {
        copyIp();
    }
    else if(locationPathname.includes("semi-staff")) {
        for (let team in config.staffTeamPage) {
            const atContent = document.querySelector(".at-content");
            
            const group = document.createElement("div");
            group.classList.add("group");
            group.classList.add(team);

            const groupSchema = `
                <h2 class="rank-title">${team.charAt(0).toUpperCase() + team.slice(1)}</h2>
                <div class="users">
                </div>
            `;

            group.innerHTML = groupSchema;

            atContent.appendChild(group);

            for (let j = 0; j < config.staffTeamPage[team].length; j++) {
                let user = config.staffTeamPage[team][j];
                const group = document.querySelector("." + team + " .users");

                const userDiv = document.createElement("div");
                userDiv.classList.add("user");

                let userSkin = config.staffTeamPage[team][j].skinUrlOrPathToFile;

                if(userSkin == "") userSkin = await getSkinByUuid(user.inGameName);
                let rankColor = config.atGroupsDefaultColors[team];

                if(user.rankColor != "") {
                    rankColor = user.rankColor;
                }

                const userDivSchema = `
                    <img src="${await (userSkin)}" alt="${user.inGameName}">
                    <h5 class="name">${user.inGameName}</h5>
                    <p class="rank ${team}" style="background: ${rankColor}">${user.rank}</p>  
                `;

                userDiv.innerHTML = userDivSchema;
                group.appendChild(userDiv);
            }
        }
    } else if(locationPathname.includes("contact")) {
        contactForm.action = `https://formsubmit.co/${config.contactPage.email}`;
        discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();
        inputWithLocationAfterSubmit.value = location.href;
    }
}

setDataFromConfigToHtml();
