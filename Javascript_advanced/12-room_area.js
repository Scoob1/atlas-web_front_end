const roomDimensions = {
  width: 50,
  length: 100,
  getArea: function () {
    return this.width * this.length;
  }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Test the boundGetArea function
console.log(boundGetArea()); // Outputs: 5000
