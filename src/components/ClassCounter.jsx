import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('ClassCounter смонтирован');
  }

  componentDidUpdate() {
    console.log('ClassCounter обновился');
  }

  componentWillUnmount() {
    console.log('ClassCounter удалён');
  }

  render() {
    return (
      <div>
        <h2>Классовый компонент</h2>
        <p>Счётчик: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Увеличить
        </button>
      </div>
    );
  }
}

export default ClassCounter;