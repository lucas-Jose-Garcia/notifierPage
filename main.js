const opcoes = {
  body: "Beba água, respire e pisque",
  icon: "./garrafa-de-agua.png"
}

function notifyMe() {
        
    if (!("Notification" in window)) {
      alert("Este browser não suporta notificações de Desktop");
    } else if (Notification.permission === "granted") {

      var notification = new Notification("Cuide-se", opcoes);

    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {

          var notification = new Notification("Cuide-se!", opcoes);

        }
      });
    }

}

function agendar() {
  setTimeout( () => {
    notifyMe()
  }, 60000 * 30)

}