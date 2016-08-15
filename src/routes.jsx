var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = require('react-router').IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var History = ReactRouter.hashHistory;

var Base = require('./components/common/Base');
var ImgurTopicsPage = require('./components/ImgurTopics/ImgurTopicsPage');
var ImgurGalleriesByTopicPage = require('./components/ImgurGalleries/ImgurGalleriesByTopicPage');
var NotFoundRoute = require('./components/NotFoundRoute/NotFoundRoute');
var Page2 = require('./components/Page2');
var PageTwoSub = require('./components/PageTwoSub');

//redirect 404s to home (if you want)... currently displaying a 404 page
//<Redirect from="*" to="/" />

var Routes = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <IndexRoute component={ImgurTopicsPage} />
            <Route path="galleries/:topicId" component={ImgurGalleriesByTopicPage} />
            <Route path="page2" component={Page2}>
              <Route path="sub" component={PageTwoSub} />
            </Route>
            <Route path='*' component={NotFoundRoute} />
        </Route>
    </Router>
);

module.exports = Routes;
