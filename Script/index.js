// category button show function
function loadButton() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((json) => displayButton(json))
    .catch((error) => console.error("Error fetching users:", error));
  console.log("hjgfgdsf");
}

// category button display
function displayButton(id) {
  const buttonContainer = document.getElementById("button-container");
  id.categories.forEach((item) => {
    const buttonDiv = document.createElement("div");

    buttonDiv.innerHTML = `
                                 <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="bg-gray-200 py-2 px-4 rounded-md font-medium text-gray-700 category-btn">${item.category}</button>
                      `;
    buttonContainer.append(buttonDiv);
  });
}

// Add active button style for all-category button and button style remove for others

const all = document.getElementById("cetagory-all-btn");

all.addEventListener("click", function () {
  all.classList.add("bg-red-500", "text-white");

  const buttons = document.querySelectorAll(".category-btn");
  for (let btn of buttons) {
    btn.classList.remove("bg-red-500", "text-white");
  }
});

// Add active button style by id and button style remove for others
const removeActiveClass = (id) => {
  all.classList.remove("bg-red-500", "text-white");

  all.classList.add("bg-gray-200", "text-gray-700");

  const buttons = document.querySelectorAll(".category-btn");
  for (let btn of buttons) {
    btn.classList.remove("bg-red-500", "text-white");
  }
  const buttonColor = document.getElementById(`btn-${id}`);
  buttonColor.classList.add("bg-red-500", "text-white");
};

// video show function
function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((json) => displayVideo(json))
    .catch((error) => console.error("Error fetching users:", error));
}

function displayVideo(video) {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  video.videos.forEach((item) => {
    const videoDiv = document.createElement("div");

    if (item.authors[0].verified === "" || item.authors[0].verified === false) {
      videoDiv.innerHTML = `                        <div class=" flex flex-col gap-4 ">
                <figure class="h-[200px]">
                        <img class="rounded-xl h-full w-full object-cover"
                                src="${item.thumbnail}" />
                </figure>
                <div class="flex gap-4">
                        <div>
                                <img class="h-8 w-8 object-cover rounded-full"
                                        src="${item.authors[0].profile_picture}" alt="">
                        </div>
                        <div class=" space-y-2">
                                <h2 class="text-lg font-bold">${item.title}</h2>

                                <div class="flex items-center gap-4">
                                        <p>${item.authors[0].profile_name}</p>
                                        <img id"verified" class="h-5 hidden" src="./assat/icons8-verified-50.png" alt="">
                                </div>
                                <p>${item.others.views} Views</p>
                        </div>
                </div>

        </div> `;
      videoContainer.append(videoDiv);
    } else {
      videoDiv.innerHTML = `                        <div class=" flex flex-col gap-4 ">
                <figure class="h-[200px]">
                        <img class="rounded-xl h-full w-full object-cover"
                                src="${item.thumbnail}" />
                </figure>
                <div class="flex gap-4">
                        <div>
                                <img class="h-8 w-8 object-cover rounded-full"
                                        src="${item.authors[0].profile_picture}" alt="">
                        </div>
                        <div class=" space-y-2">
                                <h2 class="text-lg font-bold">${item.title}</h2>

                                <div class="flex items-center gap-4">
                                        <p>${item.authors[0].profile_name}</p>
                                        <img id"verified" class="h-5" src="./assat/icons8-verified-50.png" alt="">
                                </div>
                                <p>${item.others.views} Views</p>
                        </div>
                </div>

        </div> `;
      videoContainer.append(videoDiv);
    }
  });
}

// load video by category function
function loadCategoryVideos(id) {
  //   alert(id);
  removeActiveClass(id);
  const uri = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(uri)
    .then((response) => response.json())
    .then((json) => displayVideo2(json))
    .catch((error) => console.error("Error fetching users:", error));
}

// display video by category function
function displayVideo2(video) {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  video.category.forEach((item) => {
    const videoDiv = document.createElement("div");

    if (item.authors[0].verified === "" || item.authors[0].verified === false) {
      videoDiv.innerHTML = `                        <div class=" flex flex-col gap-4 ">
                      <figure class="h-[200px]">
                              <img class="rounded-xl h-full w-full object-cover"
                                      src="${item.thumbnail}" />
                      </figure>
                      <div class="flex gap-4">
                              <div>
                                      <img class="h-8 w-8 object-cover rounded-full"
                                              src="${item.authors[0].profile_picture}" alt="">
                              </div>
                              <div class=" space-y-2">
                                      <h2 class="text-lg font-bold">${item.title}</h2>
      
                                      <div class="flex items-center gap-4">
                                              <p>${item.authors[0].profile_name}</p>
                                              <img id"verified" class="h-5 hidden" src="./assat/icons8-verified-50.png" alt="">
                                      </div>
                                      <p>${item.others.views} Views</p>
                              </div>
                      </div>
      
              </div> `;
      videoContainer.append(videoDiv);
    } else {
      videoDiv.innerHTML = `                        <div class=" flex flex-col gap-4 ">
                      <figure class="h-[200px]">
                              <img class="rounded-xl h-full w-full object-cover"
                                      src="${item.thumbnail}" />
                      </figure>
                      <div class="flex gap-4">
                              <div>
                                      <img class="h-8 w-8 object-cover rounded-full"
                                              src="${item.authors[0].profile_picture}" alt="">
                              </div>
                              <div class=" space-y-2">
                                      <h2 class="text-lg font-bold">${item.title}</h2>
      
                                      <div class="flex items-center gap-4">
                                              <p>${item.authors[0].profile_name}</p>
                                              <img id"verified" class="h-5" src="./assat/icons8-verified-50.png" alt="">
                                      </div>
                                      <p>${item.others.views} Views</p>
                              </div>
                      </div>
      
              </div> `;
      videoContainer.append(videoDiv);
    }
  });
}

loadButton();
loadVideo();
