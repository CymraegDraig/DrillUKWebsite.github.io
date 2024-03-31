const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Drill-UK", /*Server name*/
        serverIp: "fivem.drilluk.uk", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        discordServerID: "1033780064996827227" /*Your server ID (if you want to add online user counter, you must have enabled Discord server widget)*/
    },

    atGroupsDefaultColors: {
        Leaders: "rgba(255, 3, 3, 1)",
        Developers: "rgba(230, 83, 0, 0.5)",
        Management: "rgba(0, 255, 145, 0.5)",
        SnrAdmin: "rgba(11, 175, 255, 0.5)",
        Admin: "rgba(11, 175, 255, 0.5)",
        SnrModerator: "rgba(11, 175, 255, 0.5)",
        Moderator: "rgba(11, 175, 255, 0.5)",
        trialMod: "rgba(11, 175, 255, 0.5)",
    },
    staffTeamPage: {
        Leaders: [
            {
                inGameName: "MB Playz",
                rank: "Founder",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223729806563217478/btaGp2m.png?ex=661aea31&is=66087531&hm=c70cd515c4f5da792b274dd23fd3a83c62c2db1d3c1961143f7ef3d7a5087498&",
                rankColor: "rgba(255, 3, 3, 1)"
            },
            {
                inGameName: "Spartan",
                rank: "Co-Founder",
                skinUrlOrPathToFile: "https://media.discordapp.net/attachments/656919561785966644/1223729807137706044/KUcUzDc.png?ex=661aea31&is=66087531&hm=cc200d4d5e7d37606205c08953fd89d2bd3e6a381dc01c382b89865c7c783886&=&format=webp&quality=lossless&width=182&height=182",
                rankColor: ""
            },
            {
                inGameName: "Stevie",
                rank: "Co-Founder",
                skinUrlOrPathToFile: "https://media.discordapp.net/attachments/656919561785966644/1223729806869528606/KExfMTw.png?ex=661aea31&is=66087531&hm=fed26b09b854922e3dc36c19ef27de82fd28291bb9431ca58a118cb19cb2bc0f&=&format=webp&quality=lossless&width=448&height=448",
                rankColor: ""
            },
            {
                inGameName: "UKTriggs",
                rank: "General Manager",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223732824541237278/g4pZacg.png?ex=661aed01&is=66087801&hm=79f98bb3633b803f290f39e59a072cfcfc3128e8b3d1ac7161d0256df45b17a1&",
                rankColor: ""
            },
            {
                inGameName: "SL0TH",
                rank: "Head of Development",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223730447637282918/z2TiU4g.png?ex=661aeaca&is=660875ca&hm=6604702186e64e7f7ed2fd34ec0e762cef604553425bff5a321c37cb587d4c14&",
                rankColor: ""
            },
        ],
        Developers: [
            {
                inGameName: "Ghost",
                rank: "Developer",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223731269632917564/tTFocOo.gif?ex=661aeb8e&is=6608768e&hm=2580e73153957f4d2a5cab4b921fab2f75c6df676d81a78582320982593da611&",
                rankColor: ""
            },
            {
                inGameName: "ST4R_OPTIC",
                rank: "Learning Developer",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223731436448911490/QEeILeG.png?ex=661aebb6&is=660876b6&hm=e0817cb13a38ae366692ba3550120151610ec1d9ae9dd2f765efefedd2a42ef5&",
                rankColor: ""
            },
            {
                inGameName: "Clarky",
                rank: "Learning Developer",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223731819170500648/Mp9QLrC.png?ex=661aec11&is=66087711&hm=1a659378bf139a4da613c61b56297fe35fbcb49f17ab2ea56a721908bf15ac6b&",
                rankColor: ""
            },
            {
                inGameName: "Trix",
                rank: "Learning Developer",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223732304732622941/1HzyWGG.gif?ex=661aec85&is=66087785&hm=bf86663404cab0dfd623a3dcce48f20f3c2a2e304396aabbbdcda10e3b2ec6d0&",
                rankColor: ""
            }
        ],
        Management: [
            {
                inGameName: "DavidUGUK",
                rank: "Head of Organisation",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223733825696436334/VrQn00a.png?ex=661aedef&is=660878ef&hm=dcbb7b26796b0ed583d26298bc8fb2bf2c08c9a8da2bb1727f4baef189ca04e9&",
                rankColor: ""
            },
            {
                inGameName: "Malia",
                rank: "Head of Staff",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223733827608907826/IzCPgEl.png?ex=661aedf0&is=660878f0&hm=b3203513a960a0a1027080f291823437b5901c2246590077aa707d7149f0a3bc&",
                rankColor: ""
            },
            {
                inGameName: "AlmightyBizzle",
                rank: "Head of Staff",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223733827378352158/BhF8Uue.png?ex=661aedf0&is=660878f0&hm=436c2b18d23093d872249b23f886201a708942354b759c9f7a91e0cdd9af5d64&",
                rankColor: ""
            },
            {
                inGameName: "Momo",
                rank: "Community Manager",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223733826887487558/pWHfbnn.png?ex=661aedf0&is=660878f0&hm=2a2e7f9a36efc47bd845b0d711d8be6b6d77da599963ee74ad9023b89ae91446&",
                rankColor: ""
            },
            {
                inGameName: "Jacob Drazo",
                rank: "Community Manager",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223733825981386954/UUhtTm6.png?ex=661aedef&is=660878ef&hm=29b976d6b5551d9d14649396f81db0be0cdaf1837538dc63a289e5ec2581cd93&",
                rankColor: ""
            },
            {
                inGameName: "Slaxie",
                rank: "Community Manager",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223734110741332149/55Q6lyf.png?ex=661aee33&is=66087933&hm=bed01dfe1798e5f4bd066cc499cdc138f612c0650ce9d1118e29a76345577fa7&",
                rankColor: ""
            },
        ],
        SnrAdmin: [
            {
                inGameName: "Trix",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "https://cdn.discordapp.com/attachments/656919561785966644/1223732304732622941/1HzyWGG.gif?ex=661aec85&is=66087785&hm=bf86663404cab0dfd623a3dcce48f20f3c2a2e304396aabbbdcda10e3b2ec6d0&",
                rankColor: ""
            },
            {
                inGameName: "Alpha Demon",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "https://lh3.googleusercontent.com/H2PL1kxL1-hkzGxdNb8K7D1P9xzOVdaf1AdAezpM90p28iTy3A0BoQqAs6M23u8K_pH5HzBVUwVBflSlKiXBJsk=w1280",
                rankColor: ""
            },
            {
                inGameName: "Hodges",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "https://lh6.googleusercontent.com/vbdwwLZKGjqBWG3Vy_BTIFXesZ19BSqsvPgMM6sTcrkp8g3F5b9rf5cJv8_SbQkFihkfb9Ai_XmSx-ZiixMbByc=w1280",
                rankColor: ""
            },
            {
                inGameName: "Kyzerr",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "https://lh6.googleusercontent.com/_AwkuycmRZFw5l8XAcUQTIbgu3hYScPGh_8EzTP1OuRSHAsiHav0Ma8Yx6EtSwEgGhkrexO2tV5lBkSGGI9VQRk=w1280",
                rankColor: ""
            },
            {
                inGameName: "Kitty",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "https://lh5.googleusercontent.com/wz9wHfxvuVGn1AHLSNygjwR4OYv528egCPLd2rWByvwBU_26KMUWnhsnotOLW7YNVi99E1LP59dyXbHYOUxuLvw=w1280",
                rankColor: ""
            },
            {
                inGameName: "Vexuix",
                rank: "Senior Admin",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/vTcDmGRWVTSmoSDi_1sf2Gk1ClcZs6680AW-EpkG1x03kzqaY-QRBnTU39pSqXhq82wbNF2_spSmMyzy7wVZdx0=w1280",
                rankColor: ""
            }
        ],
        Admin: [
            {
                inGameName: "Baldy P",
                rank: "Admin",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/hn5Md4hH6_bAO2kPMHMcCgPVqkXaGw32Y7opPYv3Z8b_kWUkDOYYwzZ7kV615LGusByCOhcEp9eKk5Mg5y3efVY=w1280",
                rankColor: ""
            },
            {
                inGameName: "Jeffries",
                rank: "Admin",
                skinUrlOrPathToFile: "https://lh6.googleusercontent.com/alWzDxELQuoSek5gmklZxU0OijiELbVqAyQANy9ET3mB-dekCHOa4cQWdaDOdsKigElN5C3Q5u6hlydbJ1g48S4=w1280",
                rankColor: ""
            },
            {
                inGameName: "SK",
                rank: "Admin",
                skinUrlOrPathToFile: "https://lh6.googleusercontent.com/Gk4bOWyyTcmr8zjlYSszxwwXTAHJnxaEpdt6SfrKomtkci2pvqI2wM-VWDVk89dqvA3Th1gGP_w7z1KdTWEAiVg=w1280",
                rankColor: ""
            },
        ],
        SnrModerator: [
            {
                inGameName: "Banksy",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/hRGu20QruCzsF8FNmWa7snVrrbGFi-gQWQy-v6QWCWg3ijkp3GBI0qtlzrfzpm2nZFL61iB2UbGnYDMiPO6xzjk=w1280",
                rankColor: ""
            },
            {
                inGameName: "Hitchy",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "https://lh3.googleusercontent.com/UIpiOfgWoA-G7XgI13z24UJbc6z1n2xGlsAvmAYWWfdh85w8G-UEUJ1n9lkcuTF5GjDnGk6pM8V2tg4r0wG9StU=w1280",
                rankColor: ""
            },
            {
                inGameName: "Joeyy",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/PeJ5CogKinN0PTjxhF2KCOWOcqUEZVmzrSbKACnjozxBJuLzByHb8wwPzOHOzM2ql2tc1UmAap2q3fzEZuXNzPU=w1280",
                rankColor: ""
            },
            {
                inGameName: "JS",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "https://lh6.googleusercontent.com/sk7N-Q_4KZqBXxJQoVgS8yzf6yyDLP_HyYW14qbjG2LzwUl7ONPy2oQN8Phlqxag9fOfTSlZEkNNyJAejUYKzxQ=w1280",
                rankColor: ""
            },
            {
                inGameName: "Tommy",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/bFV4pEqjMZcviL_DV-ZcUJgaz-B36IdrguVynpvUVAIr0EsXiwOhDX4gkShrajHwC8cd4dC25TQ_U3w1K_4ZeQ4=w1280",
                rankColor: ""
            },
            {
                inGameName: "X",
                rank: "Senior Moderator",
                skinUrlOrPathToFile: "https://lh5.googleusercontent.com/CkfRnqZKIMWSY6pMFP9LEmWwEVsFI2A2CpWmokWjME0542ZIsr0oK-lDQ95dp4B8w7pnGUzp86rLM0upWufl2LA=w1280",
                rankColor: ""
            },
        ],
        Moderator: [
            {
                inGameName: "Draig",
                rank: "Moderator",
                skinUrlOrPathToFile: "https://lh5.googleusercontent.com/ExxBKCnsxZL9cvjgnVf5tXPd9npfWbrpRc2zbVmlWPrLOYEAabYDzfnw_KwRW-c_d2hxDR4UyoCBvPhR6oqJZwo=w1280",
                rankColor: ""
            },
            {
                inGameName: "ST4R_OPTIC",
                rank: "Moderator",
                skinUrlOrPathToFile: "https://lh5.googleusercontent.com/G5fRrSuYxP72et5TH8uVbMdjOaROWV8AJzpz0gItk0DdiOrv4Ljq-HRTEod9M9hzr3K57juv7UgMumwGFuXulHc=w1280",
                rankColor: ""
            },
            {
                inGameName: "KC",
                rank: "Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/aFx5T6SS1Z1JyJfHggU_bgXPXZ8Nnif7r8C4UTz9jgPehOTjpara2aqXIH9VrzE359Kfp-hSCBI5EigVITHr9yw=w1280",
                rankColor: ""
            },
            {
                inGameName: "Spicy",
                rank: "Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/DtlsJ1Ykhd1w4F-n7rCje2yYdDGZrW-yVEM4Uw9Jg7C2igqdJ9io8NOV-lZbi5CuCLwPkPtLLtUQcYaYnMttqWI=w1280",
                rankColor: ""
            },
            {
                inGameName: "Young Prodigy",
                rank: "Moderator",
                skinUrlOrPathToFile: "https://lh6.googleusercontent.com/Ft52cP5qrwOBKE-QtwuzrTdcuFMNOqOEhx1J2hbGfgsxRSdPjINgpRZTZ7yusTgk55jkMYb1R3fah2ilKEzNNkM=w1280",
                rankColor: ""
            },
        ],
        trialMod: [
            {
                inGameName: "Wheelybin",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/Sh7P8bz0gcAOkPsOdftDRc_2jOLbLuQnwREBFZK9JPCXRZNAObKTyDIMlxk6AmJ0RvfkQeheOhsfRLuA5aZ_vr8=w1280",
                rankColor: ""
            },
            {
                inGameName: "Tobs",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/TPyBkSfTtr9HN2gdw7Xr7QlAhCcD49YbZU-wL2A4CRq6KzSWrpRtuYUzmrpSl95cxWA3R7vMfYtHBmNg9OQSUcM=w1280",
                rankColor: ""
            },
            {
                inGameName: "Coin Flip",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "https://lh4.googleusercontent.com/E-jYf4LhpAKituyJjMS11z3nJo7jt6Nt8L-vvmL0ea99FWBj-czctcm9KBhbLUA9BajkEvEitt9qMntPlmcXhY0=w1280",
                rankColor: ""
            },
            {
                inGameName: "Kev",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "https://lh5.googleusercontent.com/c74EEJTVrZhaRwEBrfb1vsGQwK3doZttEe916MG1UH12hlwQF-Hcxk7c5dIq2XjcaRK0xi27bLSMRZdbzBVuUhA=w1280",
                rankColor: ""
            },
            {
                inGameName: "Welshboy",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "https://lh3.googleusercontent.com/cDI3wB7iFDk60BGnwcVAY_zwDisVez5_42xo-xAo-Ai4jpclPWOtI1Jl65EbJUa1Lt2ZoXgcbcqadSkWABcnCQk=w1280",
                rankColor: ""
            },
            {
                inGameName: "Bonesy",
                rank: "Trial Moderator",
                skinUrlOrPathToFile: "https://lh5.googleusercontent.com/WW4KlHzpzYQKyWND7e2Ei2N9KqR4AlI1rbW48bncFwmBcsp-t0K6_zikYKaRq6kb6N2lHm38P8LujHAANf7TzZg=w1280",
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

    if(locationPathname == "/" || locationPathname.includes("index")) {
        copyIp();
        /*Set config data to header*/
        serverLogoHeader.src = `images/` + config.serverInfo.serverLogoImageFileName;
        discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();
        fivemOnlinePlayers.innerHTML = await getfivemOnlinePlayer();
    } else if(locationPathname.includes("rules")) {
        copyIp();
    }
    else if(locationPathname.includes("staff-team")) {
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