import React from "react";
import ThemeSwitcher from "../partials/ThemeSwitcher";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { darkMode: false };
  }

  changeMode = () => {
    if (this.state.darkMode)
      this.setState({
        darkMode: false,
      });
    else
      this.setState({
        darkMode: true,
      });
  };

  render() {
    return (
      <div className={this.state.darkMode && "dark-mode"}>
        <div className="app">
          <div className="level header">
            <div className="title-container">
              <div className="morningscore-avatar"></div>
              <h1 className="title">Dark Mode Challenge</h1>
            </div>
            <ThemeSwitcher
              darkMode={this.state.darkMode}
              changeMode={this.changeMode}
            />
          </div>

          <div className="columns">
            <div className="column">
              <p>
                Morningscore is the one tool you need to bring in more traffic
                from Google. Even if you're not an expert, you can focus exactly
                on the improvements that matter. And with a one-page overview,
                you don't have to go back and forth between dozens of tools. No
                need for complex, time-consuming tools. Simplifying SEO is where
                we specialize.
              </p>
            </div>
            <div className="column">
              <p>
                A SEO reporting tool built for leaders. Founded and built in
                Robo City - Odense, Denmark.
              </p>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Name" />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Email" />
            </div>
          </div>

          <section className="section">
            <div className="buttons level-right">
              <button className="button">Save</button>
              <button type="submit" className="button is-primary">
                Submit
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}