if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', afterDOMLoaded);
} else {
    afterDOMLoaded();
}

async function afterDOMLoaded() {
    await waitForElm("#basket-content-list");

    try {
        var products = Array.from(document.getElementById("basket-content-list").querySelectorAll("lsp-product-subtitle.ng-star-inserted"))
            .map(x => x.innerText.split("•")[0].trim().split(" ").last());
    } catch (ex) {
        alert("Failed scraping products: " + ex);
        return;
    }

    if (products) {
        let recipies = readRecipies();

        let filtered = recipies.filter(x => x.Zutaten.some(y => y.containsAny(products)));

        document.cookie = "recipie=" + JSON.stringify(filtered) + ";secure";
    }


    //get products on page

    //filter recipies by products

    //dislay recipies
}