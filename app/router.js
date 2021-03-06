import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("index", { path: "/users" });
  this.route("post", { path: "/users/:id" });
});

export default Router;
