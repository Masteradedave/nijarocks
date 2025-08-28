const dateDisplay = document.getElementById("current-date");
const lightMode = document.getElementById("light");
const darkMode = document.getElementById("dark");
const body = document.getElementById("body");
const search = document.getElementById("search");
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");
const hotContent = document.getElementById("hot-content");
const staffPicked = document.getElementById("staff-pick");
const adsNotification = document.getElementById("content-notice");
const closeNotification = document.getElementById("close-notice");
const nollyWoodMovies = document.getElementById("nollyWood-Movies");
const nollyseries = document.getElementById("nolly-series");
const hollyWoodMovies = document.getElementById("hollywood-movies");
const hollyWoodSeries = document.getElementById("Hollywood-series");
const foreignMovies = document.getElementById("ForeignMovies");
const koreanDrama = document.getElementById("k-drama");
const animationShows = document.getElementById("anime");
const otherSeries = document.getElementById("otherSeries");
const monthDisplay = document.getElementById("month");
const yearDispaly = document.getElementById("year");
const timeline = document.getElementById("auto-timeline");
const showMore = document.getElementById("showmore");

const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

dateDisplay.innerHTML = new Intl.DateTimeFormat("en-US", options).format(date);

monthDisplay.innerText = date.toLocaleString("default", { month: "short" });
yearDispaly.innerText = `- ${date.getFullYear()} -`;

let isLight = false;

const toggleDarkMode = () => {
  isLight = !isLight;
  if (isLight) {
    darkMode.style.display = "none";
    lightMode.style.display = "block";
    body.style.backgroundColor = "#fff";
    body.style.color = "#1f2024";
  } else {
    darkMode.style.display = "block";
    lightMode.style.display = "none";
    body.style.backgroundColor = "#27292d";
    body.style.color = "#fff";
  }
};

search.addEventListener("click", () => {
  modal.style.display = "block";
});

cancel.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

lightMode.addEventListener("click", toggleDarkMode);
darkMode.addEventListener("click", toggleDarkMode);

if (isLight) {
  lightMode.style.display = "block";
  darkMode.style.display = "none";
} else {
  lightMode.style.display = "none";
  darkMode.style.display = "block";
}

closeNotification.addEventListener("click", () => {
  alert("This is to notify you that this page allow pop in advertisment");
  adsNotification.style.display = "none";
});

let getGridClass = (index) => {
  let classes = ["one", "two", "three", "four", "five"];
  return classes[index % classes.length];
};

let getNollywoodGridClass = (index) => {
  let classes = ["n-one", "n-two", "n-three", "n-four", "n-five"];
  return classes[index % classes.length];
};

let getnollyseriesClass = (index) => {
  let classes = [
    "nseries-one",
    "nseries-two",
    "nseries-three",
    "nseries-four",
    "nseries-five",
  ];
  return classes[index % classes.length];
};

let getForignClasses = (index) => {
  let classes = ["foriegn1", "foriegn2", "foriegn3", "foriegn4"];
  return classes[index % classes.length];
};

function renderMovieSections(movieData) {
  const hotContentMovies = movieData.filter(
    (movie) => movie.category === "hot-content"
  );
  hotContent.innerHTML = hotContentMovies
    .map(({ title, year, poster_url, note }, index) => {
      return `
        <div class="content ${getGridClass(index)}">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
        </div>
  `;
    })
    .join("");

  const staffPickMovies = movieData.filter(
    (movie) => movie.category === "staff-pick"
  );
  staffPicked.innerHTML = staffPickMovies
    .map(({ title, year, poster_url, note }) => {
      return `
        <div class="content">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
          <h4 class="sPick"  > <i class="fa-solid fa-bolt-lightning bolt"></i>  ${year}</h4>
          <h4>${title}</h4>
          <p class="movie-info">${note}</p>
          </div>
        </div>
      `;
    })
    .join("");

  // for the nollywood movie
  const nollyWoodMovie = movieData.filter(
    (movie) => movie.category === "nollywood-movies"
  );
  nollyWoodMovies.innerHTML = nollyWoodMovie
    .map(({ title, year, poster_url, note }, index) => {
      return `
       <div class="content ${getNollywoodGridClass(index)}">
        <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
       </div>
      `;
    })
    .join("");

  const nollywoodSeriesMovies = movieData.filter(
    (movie) => movie.category === "nollywood-series"
  );
  nollyseries.innerHTML = nollywoodSeriesMovies
    .map(({ title, year, poster_url, note }, index) => {
      return `
        <div class="content ${getnollyseriesClass(index)}">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
        </div>
  `;
    })
    .join("");

  let hollWOODSERIES = movieData.filter(
    (movie) => movie.category === "hollywood-series"
  );
  hollyWoodSeries.innerHTML = hollWOODSERIES
    .map(({ title, year, poster_url, note }) => {
      return `
        <div class="content">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
          <h4> ${year}</h4>
          <h4>${title}</h4>
          <p class="movie-info">${note}</p>
          </div>
        </div>
      `;
    })
    .join("");

  let hollyMovies = movieData.filter(
    (movie) => movie.category === "hollywood-movies"
  );
  hollyWoodMovies.innerHTML = hollyMovies
    .map(({ title, year, poster_url, note }, index) => {
      return `
        <div class="content ">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
        </div>
  `;
    })
    .join("");

  let foriegnsMovies = movieData.filter(
    (movie) => movie.category === "foreign-movies"
  );
  foreignMovies.innerHTML = foriegnsMovies
    .map(({ title, year, poster_url, note }, index) => {
      return `
        <div class="content ${getForignClasses(index)}">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
        </div>
  `;
    })
    .join("");

  // kdrama
  let koreanseries = movieData.filter(
    (movie) => movie.category === "korean-drama"
  );
  koreanDrama.innerHTML = koreanseries
    .map(({ title, year, poster_url, note }, index) => {
      return `
        <div class="content ${getnollyseriesClass(index)}">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
        </div>
  `;
    })
    .join("");

  // anime
  const anime = movieData.filter((movie) => movie.category === "anime");
  animationShows.innerHTML = anime
    .map(({ title, year, poster_url, note }, index) => {
      return `
       <div class="content ${getNollywoodGridClass(index)}">
        <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
       </div>
      `;
    })
    .join("");

  // other series
  let others = movieData.filter((movie) => movie.category === "others");
  otherSeries.innerHTML = others
    .map(({ title, year, poster_url, note }, index) => {
      return `
        <div class="content ${getForignClasses(index)}">
          <img src="${poster_url}" alt="${title}" />
          <div class="text-content">
            <h4>${year}</h4>
            <h4>${title}</h4>
            <p class="movie-info">${note}</p>
          </div>
        </div>
  `;
    })
    .join("");

  // timeline
  let currentIndex = 5;
  let secondIndex = 10;
  let timing = movieData.slice(0, 5);
  timeline.innerHTML = timing
    .map(({ year, title }) => {
      return `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <p>${year}</p>
              <h3>${title}</h3>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  // show more

  let showingMore = () => {
    let show = movieData.slice(currentIndex, secondIndex);
    timeline.innerHTML += show
      .map(({ year, title }) => {
        return `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <p>${year}</p>
              <h3>${title}</h3>
            </div>
          </div>
        </div>
      `;
      })
      .join("");
    currentIndex += 5;
    secondIndex += 5;

    if(currentIndex >= 15) {
      showMore.innerText = "You are up to date";
      showMore.disabled = true;
      showMore.style.color = "red"
    }


  };
  showMore.addEventListener("click", showingMore);
}

fetch("movie.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("This is not working");
    }
    return res.json();
  })
  .then((movieData) => {
    renderMovieSections(movieData);
  })
  .catch((err) => {
    console.error("Error loading this json file", err);
    hotContent.innerHTML = `<p>There is an error loading this json</p>`;
    staffPicked.innerHTML = `<p>There is an error loading this json</p>`;
  });
