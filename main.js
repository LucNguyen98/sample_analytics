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
    age: 18,
    gender: 1,
    sys: 100,
    dia: 200,
    pm: 200,
    "Absolute 10 year stroke risk": "50%",
    "10-year stroke risk* is increased in": "50%",
    "Absolute 5-year stroke risk": "30%",
    "5-year stroke risk* is increased in": "10%",
  });
}

async function handleDownloadClick() {
  // Đường dẫn URL của ảnh bạn muốn tải
  var imageUrl =
    "https://i.pinimg.com/564x/56/1b/64/561b6478c1352784e0cd4c7030e416b4.jpg";

  const response = await fetch(imageUrl,{
    mode:"no-cors"
  });

  const blobImage = await response.blob();

  const href = URL.createObjectURL(blobImage);

  let a = document.createElement("a");
  a.href = href;
  a.download = "ten_anh.jpg"; // Tên bạn muốn đặt cho ảnh khi lưu
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(href);
}
