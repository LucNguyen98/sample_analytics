function gtagEvent(event_name, object) {
  window.gtag("event", event_name, object);
}

gtag("event", "screen_view", {
  app_name: "SampleGTag",
  screen_name: "Home",
});

function addResult() {
    alert(123)
  gtagEvent("add_risk_result", {
    userID: "123",
  });
}
