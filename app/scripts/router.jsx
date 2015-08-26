var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/Layout');
var Home = require('./components/Home');

var routes = (
	<Route name="layout" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
	</Route>
);

exports.start = function() {
  Router.run(routes, function(Handler) {
		React.render(<Handler />, document.getElementById('app-mount'));
	});
};
