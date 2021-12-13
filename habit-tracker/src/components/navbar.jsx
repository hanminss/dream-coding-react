import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const habits = this.props.habits;
    let totalCount = 0;
    for (let i = 0; i < habits.length; i++) {
      totalCount += habits[i].count;
    }
    return (
      <div className="nav-wrap">
        <p className="title">
          Habit Tracker <span className="title-count">{totalCount}</span>
        </p>
      </div>
    );
  }
}

export default Navbar;
