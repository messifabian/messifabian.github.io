// VScode automatically uses copilot for inline code generation and used ChatGPT for the innerHTML, querySelectorAll, and button functionality.

function showFilter() {
    let filter = document.getElementById("filterContent");
    let form = document.getElementById("newContent");
    form.style.display = "none";

    if (filter.style.display == "none") {
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}

function showAddNew() {
    let form = document.getElementById("newContent");
    let filter = document.getElementById("filterContent");
    filter.style.display = "none";

    if (form.style.display == "none") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
}

function addNewArticle() {
    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;

    let type = "";
    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        type = "update";
    }

    let label = "";
    if (type == "opinion") {
        label = "Opinion";
    } else if (type == "recipe") {
        label = "Recipe";
    } else if (type == "update") {
        label = "Update";
    }

    let newArticle = document.createElement("article");
    newArticle.classList.add(type);
    newArticle.innerHTML = "<span class='marker'>" + label + "</span>" +
                           "<h2>" + title + "</h2>" +
                           "<p>" + text + "</p>";

    document.getElementById("articleList").appendChild(newArticle);


    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;
}

function filterArticles() {
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;
    let articles = document.querySelectorAll("article");

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];

        if (article.classList.contains("opinion") && showOpinion) {
            article.style.display = "block";
        } else if (article.classList.contains("recipe") && showRecipe) {
            article.style.display = "block";
        } else if (article.classList.contains("update") && showUpdate) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    }
}