import { ui } from "./ui";



// DOM elements
const btnViewAll = document.querySelector(".btn-view-all");


const followersData = [
    {
        followerId: 0,
        avatarPath: "/images/avatars/avatar-3.png",
        followerName: "John",
        followerLastName: "Doe",
        status: "online"
    },
    {
        followerId: 1,
        avatarPath: "/images/avatars/avatar-5.png",
        followerName: "Jane",
        followerLastName: "Doe",
        status: "online"
    },
    {
        followerId: 2,
        avatarPath: "/images/avatars/avatar-6.png",
        followerName: "Judy",
        followerLastName: "Smith",
        status: "live",
        liveSvgIcon: `<svg version="1.1" x="0px" y="0px" width="20px" height="20px" xml:space="preserve">
                                    <path class="svg-ico live-ico" d="M18.2,5.8c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1c2.8,2.8,2.8,7.4,0,10.2c-0.3,0.3-0.3,0.8,0,1.1
                                        c0.1,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2C21.6,14.8,21.6,9.2,18.2,5.8z M15.6,8.4c-0.3-0.3-0.8-0.3-1.1,0
                                        c-0.3,0.3-0.3,0.8,0,1.1c1.3,1.3,1.4,3.6,0,4.9c-0.3,0.3-0.3,0.8,0,1.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2
                                        C17.6,13.6,17.5,10.4,15.6,8.4z M6.9,6.9c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0c-3.4,3.4-3.4,9,0,12.4c0.1,0.1,0.4,0.2,0.6,0.2
                                        c0.2,0,0.4-0.1,0.6-0.2c0.3-0.3,0.3-0.8,0-1.1C4.1,14.3,4.1,9.7,6.9,6.9z M9.5,9.5c0.3-0.3,0.3-0.8,0-1.1c-0.3-0.3-0.8-0.3-1.1,0
                                        c-2,2-2,5.2,0,7.2c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2c0.3-0.3,0.3-0.8,0-1.1C8.2,13.1,8.2,10.9,9.5,9.5z M12,10.6
                                        c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3C10.7,11.2,11.3,10.6,12,10.6z"
                                    />
                                </svg>`
    },
    {
        followerId: 3,
        avatarPath: "/images/avatars/avatar-8.png",
        followerName: "Lily",
        followerLastName: "Hash",
        status: "offline"
    },
    {
        followerId: 4,
        avatarPath: "/images/avatars/avatar-3.png",
        followerName: "Sam",
        followerLastName: "Smith",
        status: "offline"
    },
    {
        followerId: 5,
        avatarPath: "/images/avatars/avatar-4.png",
        followerName: "Brad",
        followerLastName: "Johnson",
        status: "live",
        liveSvgIcon: `<svg version="1.1" x="0px" y="0px" width="20px" height="20px" xml:space="preserve">
                                    <path class="svg-ico live-ico" d="M18.2,5.8c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1c2.8,2.8,2.8,7.4,0,10.2c-0.3,0.3-0.3,0.8,0,1.1
                                        c0.1,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2C21.6,14.8,21.6,9.2,18.2,5.8z M15.6,8.4c-0.3-0.3-0.8-0.3-1.1,0
                                        c-0.3,0.3-0.3,0.8,0,1.1c1.3,1.3,1.4,3.6,0,4.9c-0.3,0.3-0.3,0.8,0,1.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2
                                        C17.6,13.6,17.5,10.4,15.6,8.4z M6.9,6.9c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0c-3.4,3.4-3.4,9,0,12.4c0.1,0.1,0.4,0.2,0.6,0.2
                                        c0.2,0,0.4-0.1,0.6-0.2c0.3-0.3,0.3-0.8,0-1.1C4.1,14.3,4.1,9.7,6.9,6.9z M9.5,9.5c0.3-0.3,0.3-0.8,0-1.1c-0.3-0.3-0.8-0.3-1.1,0
                                        c-2,2-2,5.2,0,7.2c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2c0.3-0.3,0.3-0.8,0-1.1C8.2,13.1,8.2,10.9,9.5,9.5z M12,10.6
                                        c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3s-1.3-0.6-1.3-1.3C10.7,11.2,11.3,10.6,12,10.6z"
                                    />
                                </svg>`
    },
    {
        followerId: 6,
        avatarPath: "/images/avatars/avatar-2.png",
        followerName: "Samuel",
        followerLastName: "Simon",
        status: "offline"
    },
]



// Event listeners
btnViewAll.addEventListener("click", () => {
    let followers = document.querySelectorAll(".follower");

    followers.forEach(follower => {
        follower.remove();
    });

    ui.showAllFollowers(followersData);

    btnViewAll.querySelector("svg").style.transform = "rotate(180deg)";
    btnViewAll.querySelector("svg").style.marginLeft = "-1px";
    btnViewAll.querySelector("svg").style.marginTop = "-1px";
    btnViewAll.querySelector("small").innerText = "Show less";
});



const init = () => {
    ui.showLessFollowers(followersData);
    ui.slideTracker();
}



init();