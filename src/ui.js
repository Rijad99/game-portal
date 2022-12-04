class UI {
    constructor() {
        this._followingList = ".following-list";
        this._slides = ".slide";
        this._sliderBar = ".slider-bar";
        this._activeBar = ".active-bar";
    }

    showLessFollowers(data) {
        const followingList = document.querySelector(this._followingList);
        let followersLimit = 4
        let newData;

        if (data.length !== 0 && data.length === followersLimit) {
            newData = data.slice(0, followersLimit);

            for (let i = 0; i < newData.length; i++) {
                const li = document.createElement("li");
                li.className = "follower";
    
                li.innerHTML = `
                    <a href="#">
                        <div class="avatar-box">
                            <img src="${data[i].avatarPath}" class="avatar">
                        </div>
                        <small class="following-user">${data[i].followerName} ${data[i].followerLastName}</small>
                        <div class="status ${data[i].status}">
                            ${data[i].status === "live" ? data[i].liveSvgIcon : ""}
                        </div>
                    </a>
                `;
    
                followingList.appendChild(li);
            }
        } else if (data.length > 4) {
            newData = data.slice(0, followersLimit);

            for (let i = 0; i < newData.length; i++) {
                const li = document.createElement("li");
                li.className = "follower";
    
                li.innerHTML = `
                    <a href="#">
                        <div class="avatar-box">
                            <img src="${data[i].avatarPath}" class="avatar">
                        </div>
                        <small class="following-user">${data[i].followerName} ${data[i].followerLastName}</small>
                        <div class="status ${data[i].status}">
                            ${data[i].status === "live" ? data[i].liveSvgIcon : ""}
                        </div>
                    </a>
                `;
    
                followingList.appendChild(li);
            }
        }
    }

    showAllFollowers(data) {
        if (data.length !== 0 && data.length > 4) {
            const followingList = document.querySelector(this._followingList);

            for (let i = 0; i < data.length; i++) {
                const li = document.createElement("li");
                li.className = "follower";
    
                li.innerHTML = `
                    <a href="#">
                        <div class="avatar-box">
                            <img src="${data[i].avatarPath}" class="avatar">
                        </div>
                        <small class="following-user">${data[i].followerName} ${data[i].followerLastName}</small>
                        <div class="status ${data[i].status}">
                            ${data[i].status === "live" ? data[i].liveSvgIcon : ""}
                        </div>
                    </a>
                `;
    
                followingList.appendChild(li);
            }
        }
    }

    slideTracker() {
        const slides = document.querySelectorAll(this._slides);
        const sliderBarWidth = document.querySelector(this._sliderBar).clientWidth;
        const activeBar = document.querySelector(this._activeBar);

        let activeBarWidth =  sliderBarWidth / slides.length;
        activeBar.style.width = `${activeBarWidth}px`

        slides.forEach((slide, slideIndex) => {

            if (slide.classList.contains("slide-active")) {
                activeBarWidth *= slideIndex;

                activeBar.style.left = `${activeBarWidth}px`;
            }
        });
    }

    openCloseSidebar(sidebar) {
        sidebar.classList.toggle("show-side-nav-mobile");
    }
}



export const ui = new UI();