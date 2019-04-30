import React from "react";

import UnspecifiedNodeComponent from "../components/UnspecifiedNodeComponent";

function formatKey(key) {
  return key.split("_").map(function (piece) {
    return piece.charAt(0).toUpperCase() + piece.slice(1);
  }).join(" ");
}

function prettyPrint(object) {
  if (typeof object === "object" && !!object) {
    return <code>{JSON.stringify(object, null, " ")}</code>;
  } else if (typeof object === "boolean") {
    return <code>{object.toString()}</code>;
  } else {
    return object.toString();
  }
}

var ObjectDlComponent = React.createClass({
  displayName: "ObjectDlComponent",
  propTypes: {
    // Can be `null` or `undefined` since the data is likely fetched
    // asynchronously.
    object: React.PropTypes.object
  },

  render: function () {
    var dlNodes;
    if (this.props.object != null) {
      dlNodes = [];
      Object.keys(this.props.object).sort().forEach(function (key) {
        var ddElement = this.props.object[key] == null
          ? <UnspecifiedNodeComponent tag="span" />
          : prettyPrint(this.props.object[key]);

        dlNodes.push(
          <dt key={key} title={key}>{formatKey(key)}</dt>
        );
        dlNodes.push(
          <dd key={key + "_val"}>{ddElement}</dd>
        );
      }, this);
    }

    return (
      <dl className="dl-horizontal dl-horizontal-lg">
        {dlNodes}
      </dl>
    );
  }
});

export default ObjectDlComponent;
