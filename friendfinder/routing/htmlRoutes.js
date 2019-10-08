var path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname) + "/..public/survey.html");
  });

  app.use("/survey", function(req, res) {
    res.sendFile(path.join(__dirname) + "/..public/survey.html");
});



routes.MapRoute(
    "Default",
    "{controller}/{action}/{id}",
    new { controller = "Home", action = "Index", id = UrlParameter.Optional },
    new { controller = "Home|Settings|General|..." } 
);
routes.MapRoute(
    "NotFound",
    "{*url}",
    new { controller = "Error", action = "PageNotFound" }
);
