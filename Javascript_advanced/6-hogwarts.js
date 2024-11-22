class studentHogwarts {
  #privateScore = 0;
  #name = null;

  // Private method to change score
  #changeScoreBy(points) {
      this.#privateScore += points;
  }

  // Public methods
  setName(newName) {
      this.#name = newName;
  }

  rewardStudent() {
      this.#changeScoreBy(1);
  }

  penalizeStudent() {
      this.#changeScoreBy(-1);
  }

  getScore() {
      return `${this.#name}: ${this.#privateScore}`;
  }
}
