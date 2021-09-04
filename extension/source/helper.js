function readRecipies() {
    // Split data into lines and separate headers from actual data
    // using Array spread operator
    let data = "Name Rezept;Zutaten;Saison;Gang;Wein;Bilder" + "\n" +
        "Randensalat mit Rettich;Randen, Weisswein-Essig, Honig, Zwiebeln, Schnittlauch, Cr�me fraiche ;Herbst;Vorspeise;Weisswein Frisch;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/randensalat-mit-meerrettich.jpg" + "\n" +
        "Kartoffelgratin;mehligkochende Kartoffel, Rahm, Milch, Knoblauch, Gruy�re;Herbst;Hauptgang;Rotwein Barrique;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1728,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/kartoffelgratin-2560x1920.jpg" + "\n" +
        "Himbeertiramisu;Eier, Mascarpone, L�ffelbiskuit, Zitrone, Himbeeren, Zucker;Sommer, Herbst;Dessert;S�sswein weiss;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/himbeer-tiramisu.jpg" + "\n" +
        "Zucchetti s�ss-sauer;Senfpulver, Zucker, Essig, Zucchetti, Zwiebeln;Sommer;Konservieren;Weisswein Rests�sse;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2020/01/KO2020_SBLV_35_Zucchetti-s%C3%BCss-sauer-2560x1707.jpg" + "\n" +
        "gef�llte Zucchetti;Hackfleisch, Zwiebel, Petersilie, Reis, Tomaten, Bouillon, Zucchetti;Sommer;Hauptgang;Rotwein leicht;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/dulma-gefuellte-zucchetti-2014x2560.jpg" + "\n" +
        "Zucchetticake;Butter, Zucker, Eigelb, Baumn�sse, Mehl, Zucchetti;Sommer;Dessert;Schaumwein Rests�sse;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/zucchini-cake.jpg" + "\n" +
        "Zucchettisuppe;Raps�l, Zwiebel, Zucchetti, Bouillon, Frischk�se;Sommer;Vorspeise;Weisswein fruchtig;https://recipecontent.fooby.ch/18133_3-2_1920-1280.jpg" + "\n" +
        "K�rbissuppe;Zwiebel, K�rbis, Curry, Karotte, Kartoffel, Bouillon;Herbst;Vorspeise;Rotwein fruchtig;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/kuerbissuppe-2560x1707.jpg" + "\n" +
        "K�rbisw�he mit Speck;K�rbis, Speckw�rfel, Rahm, Gruy�re, Mehl, Butter, Raps�l;Herbst;Hauptgang;Rotwein Barrique;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/kuerbiswaehe-mit-speck-2560x1707.jpg" + "\n" +
        "K�rbisparfait;K�rbis, Rahm, Zimt, Ingwer, Nelkenpulver;Herbst;Dessert;Schaumwein Rests�sse;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/weihnaechtliches-kuerbisparfait.jpg" + "\n" +
        "Karottensalat mit Himbeeren;Karotten, Himbeeren, Frischk�se;Sommer;Vorspeise;Weisswein fruchtig;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/rueeblisalat-mit-himbeeren-2560x2560.jpg" + "\n" +
        "R�eblir�sti;Karotten, Kartoffeln, Petersilie;Sommer;Hauptgang;Rotwein leicht;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/rueebliroesti.jpg" + "\n" +
        "R�eblitorte;Butter, Ei, Zucker, Zitrone, Baumn�sse, Karotten, Mehl, Puderzucker;Sommer;Dessert;Schaumwein Rests�sse;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2020/02/LM201205_60_Aargauer_Rueblitorte.jpg" + "\n" +
        "Radieschenbr�tchen;Mehl, Hefe, Milch, Radieschen, Butter;Fr�hling;Vorspeise;Weisswein leicht;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/radieschen-broetchen.jpg" + "\n" +
        "Spaghetti mit Kohlrabi;Zwiebel, Knoblauch, Kohlrabi, Bouillon, Rahm, Schnittlauch, Spaghetti;Fr�hling;Hauptgang;Weisswein leicht;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/spaghetti-mit-kohlrabisauce.jpg" + "\n" +
        "Rhabarberg�tterspeise;Rhabarber, Zucker, Zitronen, Milch, St�rke, Eier, Vanillest�ngel, L�ffelbiskuit;Fr�hling;Dessert;Gew�rztraminer;https://res.cloudinary.com/swissmilk/image/fetch/ar_16:10,g_xy_center,g_auto,w_1080,c_fill,f_auto,q_auto,fl_progressive/https://api.swissmilk.ch/wp-content/uploads/2019/06/goetterspeise-im-glas-mit-rhabarberkompott-2560x1707.jpg";

    const [headerLine, ...lines] = data.split('\n');

    // Split headers line into an array
    // `valueSeparator` may come from some kind of argument
    // You may want to transform header strings into something more
    // usable, like `camelCase` or `lowercase-space-to-dash`
    const valueSeparator = ';';
    const headers = headerLine.split(valueSeparator);

    // Create objects from parsing lines
    // There will be as much objects as lines
    let objects = lines
        .map((line, index) =>
            line
                // Split line with value separators
                .split(valueSeparator)

                // Reduce values array into an object like: { [header]: value }
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
                .reduce(

                    // Reducer callback 
                    (object, value, index) => ({
                        ...object,
                        [headers[index]]: value,
                    }),

                    // Initial value (empty JS object)
                    {}
                )
        );

    objects.forEach(element => {
        element.Zutaten = element.Zutaten.split(",");
    });

    return objects;
}

String.prototype.containsAny = String.prototype.containsAny || function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (this.indexOf(arr[i]) > -1) {
            return true;
        }
    }
    return false;
};

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
};

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}