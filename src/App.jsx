import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.component';
import ListContent from './components/listContent/ListContent.component'
import CardItem from './components/cardItem/cardItem.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
      showMenu: false,
      tasks: [
        { id: "1", ticket: new Set(), checkList: [], taskName: "Read book", type: "we ll", backgroundColor: "red" },
        { id: "2", ticket: new Set(), checkList: [], taskName: "Pay bills", type: "cur rent", backgroundColor: "green" },
        { id: "4", ticket: new Set(), checkList: [], taskName: "Bien", type: "we ll", backgroundColor: "green" },
        { id: "5", ticket: new Set(), checkList: [], taskName: "Mal", type: "plani fier", backgroundColor: "green" },
        { id: "6", ticket: new Set(), checkList: [], taskName: "Regarde", type: "plani fier", backgroundColor: "yellow" },
        { id: "7", ticket: new Set(), checkList: [], taskName: "Bull ", type: "plani fier", backgroundColor: "yellow" },
        { id: "8", ticket: new Set(), checkList: [], taskName: "Pointer Exception", type: "cur rent", backgroundColor: "green" },
        { id: "9", ticket: new Set(), checkList: [], taskName: "Valeur de retour", type: "we ll", backgroundColor: "white" },
        { id: "10", ticket: new Set(), checkList: [], taskName: "Bonjour", type: "we ll", backgroundColor: "white" },
      ]
    }
  }

  render() {

    var tasks = {};

    this.state.tasks.forEach((task) => {
      if (tasks[task.type.replace(" ", "")]) {
        tasks[task.type.replace(" ", "")].push(
          <CardItem key={task.id} task={task} onDragStart={(event) => this.onDragStart(event, task.id)} />
          // <div key={task.id} style={{ backgroundColor: task.backgroundColor }}
          //   draggable
          //   onDragStart={(event) => this.onDragStart(event, task.id)}
          //   className="draggable">
          //   {task.taskName}
          //   {task.id}
          // </div>
        );
      } else {
        tasks[task.type.replace(" ", "")] = [];
        tasks[task.type.replace(" ", "")].push(
          <CardItem key={task.id} task={task} onDragStart={(event) => this.onDragStart(event, task.id)} />
          // <div key={task.id} style={{ backgroundColor: task.backgroundColor }}
          //   draggable
          //   onDragStart={(event) => this.onDragStart(event, task.id)}
          //   className="draggable">
          //   {task.taskName}
          // </div>
        );
      }
    });

    return (
      <div className="App" >
        <Header />
        <div className="board">
          {/* <h2 className="head">To DO List Drag "&" Drop <button onClick={(e) => { this.setState({ hidden: !this.state.hidden }) }}>Hidden</button></h2> */}
          {/* <div className="inProgress"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => { this.onDrop(event, "inProgress") }}>
            <span className="group-header">In Progress <button onClick={(e) => this.openCardMenu(e)} >menu</button>
              {this.state.showMenu ? (
                <div className="menu"
                  hidden={this.state.showMenu}
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button onClick={(e) => { console.log('Menu 1') }}> Menu item 1 </button>
                  <button onClick={(e) => { console.log('Menu 2') }}> Menu item 2 </button>
                  <button onClick={(e) => { console.log('Menu 3') }}> Menu item 3 </button>
                </div>
              ) : null}
            </span>
            {tasks.inProgress}
          </div>
          <div className="droppable"
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "Done")}>
            <span className="group-header">Done
            {this.state.showMenu ? (
                <div className="menu"
                  hidden={this.state.showMenu}
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button onClick={(e) => { console.log('Menu 1') }}> Menu item 1 </button>
                  <button onClick={(e) => { console.log('Menu 2') }}> Menu item 2 </button>
                  <button onClick={(e) => { console.log('Menu 3') }}> Menu item 3 </button>
                </div>
              ) : null}
            </span>
            {tasks.Done}
          </div>
          <div className="rien"
            hidden={!this.state.showMenu}
            onDragOver={(event) => this.onDragOver(event)}
            onDrop={(event) => this.onDrop(event, "Rien")}>
            <span className="group-header">Rien</span>
            {tasks.Rien}
          </div> */}
          <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='plani fier' data={tasks.planifier} />
          <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='cur rent' data={tasks.current} />
          <ListContent onDrop={this.onDrop} onDragOver={this.onDragOver} title='we ll' data={tasks.well} />
        </div>
      </div>
    );
  }

  openCardMenu = (e) => {
    e.preventDefault();
    console.log('X', e.clientX);
    console.log('Y', e.clientY);
    let menu = document.querySelector('.menu');
    console.log(menu);
    // menu.style.left = e.clientX;
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeCardMenu)
    });
  }

  closeCardMenu = (e) => {
    console.log(this.dropdownMenu);
    console.log(e.target);
    if (!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeCardMenu);
      });
    }
  }

  onDragStart = (event, id) => {
    console.log('dragstart on div: ', id);
    event.dataTransfer.setData("id", id);
  }
  onDragOver = (event) => {
    event.preventDefault();
    console.log('drag Over Bonjour');
  }

  onDrop = (event, cat) => {
    let id = event.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.id === id) {
        task.type = cat;
      }
      return task;
    });

    this.setState({
      ...this.state
    }, () => {
      console.log(this.state)
    });

  }
}

export default App;
