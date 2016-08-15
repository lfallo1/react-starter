var React = require('react');
var Header = require('./Header');
var ImgurActions = require('../flux/actions/ImgurActions');

var Base = React.createClass({

  componentWillMount : function(){
    ImgurActions.getTopics();
  },

    render: function(){
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }

});

module.exports = Base;
