import React, { Component } from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  marker: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "transparent"
  }
});

class ImageItem extends Component {
  constructor(props) {
    super(props);
    let { width } = Dimensions.get("window");
    const { imageMargin, imagesPerRow, containerWidth } = props;

    if (typeof containerWidth !== "undefined") {
      width = containerWidth;
    }
    this.imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
  }

  handleClick(item) {
    this.props.onClick(item);
  }

  render() {
    const { item, selected, selectedMarker, imageMargin } = this.props;

    const marker = selectedMarker || (
      <Image
        style={[
          styles.marker,
          { width: 25, height: 25, backgroundColor: "red" }
        ]}
        // source={checkIcon}
      />
    );

    const { uri } = item;

    return (
      <TouchableOpacity
        style={{ marginBottom: imageMargin, marginRight: imageMargin }}
        onPress={() => this.handleClick(item)}
      >
        <Image
          source={{ uri }}
          style={{ height: this.imageSize, width: this.imageSize }}
        />
        {selected ? marker : null}
      </TouchableOpacity>
    );
  }
}

ImageItem.defaultProps = {
  item: {},
  selected: false
};

ImageItem.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.bool,
  selectedMarker: PropTypes.element,
  imageMargin: PropTypes.number,
  imagesPerRow: PropTypes.number,
  onClick: PropTypes.func
};

export default ImageItem;
