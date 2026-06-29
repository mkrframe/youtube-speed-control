// Icon is always clickable — opens the options page from any tab.
browser.action.onClicked.addListener(function () {
  browser.runtime.openOptionsPage()
})
