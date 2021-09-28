clickToStartGame = function () {
  var percent = 0
  var _this = this
  $("button").hide()
  $("h1").hide()
  $(".loadingNone").addClass("loading")
  $(".barNone").addClass("bar")
  var timer = setInterval(function () {
    $(".bar").css("width", percent + "%")
    percent += 1
    if (percent > 100) {
      clearInterval(timer)
      setTimeout(() => {
        $(".pageloading").hide()
        _this.startLevel()
      }, 500)
    }
  }, 30)
}