function gtagEvent(event_name, object) {
  gtag("event", event_name, object);
}

gtag("event", "screen_view", {
  app_name: "SampleGTag",
  screen_name: "Home",
});

function addResult() {
  gtagEvent("add_risk_result", {
    userID: "123",
    weight: 70,
    age:18,
    gender: 1,
    sys:100,
    dia:200,
    pm:200,
    "Absolute 10 year stroke risk":'50%',
    "10-year stroke risk* is increased in": "50%",
    "Absolute 5-year stroke risk" : "30%",
    "5-year stroke risk* is increased in" : "10%"
  });
}
