chrome.runtime.onInstalled.addListener(() => {

});

const filter = {
    url: [
        {
            urlMatches: 'https://shop.migros.ch/',
        },
    ],
};
chrome.webNavigation.onCompleted.addListener(() => {
    createNotification();
}, filter);


async function createNotification() {
    await new Promise(r => setTimeout(r, 7000));

    var opt = { type: "basic", title: "Verfügbare Rezepte", message: "Zu diesen Produkten wurden passende Rezepte gefunden!", iconUrl: "../ui/icon.png" }
    chrome.notifications.create("notificationName", opt, function () {

    });

    //include this line if you want to clear the notification after 5 seconds
    setTimeout(function () { chrome.notifications.clear("notificationName", function () { }); }, 5000);
}