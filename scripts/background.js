browser.contextMenus.create({
  id: "minionize",
  title: "Minionize this page"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "minionize") {
    browser.tabs.executeScript({
      file: "scripts/minions.js"
    });
  }
});