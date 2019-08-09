app.get("/survey", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;

    res.render("index", { tasks: data });
  });
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
