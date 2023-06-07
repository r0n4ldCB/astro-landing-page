import Component from "react";

export class ComponenTabs extends React.Component {
    constructor(props) {
      super(props);
  
      this.characters = [
        { name: "Ant-Man", img: "./b12edb92.png", color: "IndianRed", text: "white", desc: "\"I do some dumb things, and the people I love the most...they pay the price.\"" },
        { name: "Black Widow",  img: "./8926a781.png", color: "SlateGrey", text: "white", desc: "\"After everything that happened with S.H.I.E.L.D., during my little hiatus, I went back to Russia and tried to find my parents. Two little graves linked by a chain fence. I pulled some weeds and left some flowers. We have what we have when we have it.\"" },
        { name: "Captain America",  img: "./14bd1ec1.png", color: "RoyalBlue", text: "white", desc: "\"I'm not looking for forgiveness. And I'm way past asking for permission. Earth just lost their best defender. So we're here to fight. If you wanna stay in our way... we'll fight you, too.\"" },
        { name: "Director Fury",  img: "./af5d762a.png", color: "Sienna", text: "white", desc: "\"Back in the day, I had eyes everywhere, ears everywhere else. Here we all are, back on earth, with nothing but our wit, and our will to save the world. So stand. Outwit the platinum bastard.\"" },
        { name: "Hawkeye",  img: "./c9616a0d.png", color: "MediumOrchid", text: "white", desc: "\"Just can't seem to miss.\"" },
        { name: "Iron Man",  img: "./fcc6cb21.png", color: "LightCoral", text: "black", desc: "\"My armor was never a distraction or a hobby. It was a cocoon. And now I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man.\"" },
        { name: "Loki",  img: "./7b54165b.png", color: "LightGreen", text: "black", desc: "\"I, Loki, Prince of Asgard, Odinson, the rightful King of Jotunheim, God of Mischief, do hereby pledge to you, my undying fidelity.\"" },
        { name: "Thor",  img: "./2e19984b.png", color: "SkyBlue", text: "black", desc: "\"You know I’m 1500 years old. I’ve killed twice as many enemies as that. And every one of them would have rather killed me than not succeeded. I’m only alive because fate wants me alive. Thanos is just the latest of a long line of bastards, and he’ll be the latest to feel my vengeance. Fate wills it so.\"" },
        { name: "War Machine",  img: "./c9e85eb7.png", color: "LightGrey", text: "black", desc: "\"138 combat missions. That's how many I've flown, Tony. Every one of them could've been my last, but I flew 'em. Because the fight needed to be fought.\"" }
      ];
  
      this.state = {
        "Ant-Man": true,
        "Black Widow": true,
        "Captain America": true,
        "Director Fury": false,
        Loki: false,
        Hawkeye: true,
        "Iron Man": true,
        Thor: true,
        "War Machine": true,
        selectedIndex: 0
      };
  
      this.handleCheckClicked = this.handleCheckClicked.bind(this);
    }
  
    handleCheckClicked(e) {
      const state = {
        [e.target.name]: e.target.checked
      };
      if (this.characters.findIndex(({name}) => name === e.target.name) <= this.state.selectedIndex) {
        state.selectedIndex = this.state.selectedIndex + (e.target.checked ? 1 : -1);
      }
      this.setState(state);
    }
  
    render() {
      const links = [];
      const tabs = [];
      const tabPanels = [];
  
      this.characters.forEach(({ name, img, color: backgroundColor, text: color, desc }) => {
        links.push(
          <label key={name}>
            <input
              type="checkbox"
              checked={this.state[name]}
              name={name}
              onChange={this.handleCheckClicked}
            />
            {name}{" "}
          </label>
        );
  
        if (!this.state[name]) return;
  
        tabs.push(
          <Tab style={{ backgroundColor }} className="avengers-tab" key={name}>
            <img src={img} alt={name} height="32" width="32" />
          </Tab>
        );
  
        tabPanels.push(
          <TabPanel style={{ backgroundColor, color }} className="avengers-tab-panel" key={name}>
            {desc}
          </TabPanel>
        );
      });
  
      return (
        <div>
          <p>{links}</p>
          <Tabs
            selectedIndex={this.state.selectedIndex}
            onSelect={(selectedIndex) => this.setState({ selectedIndex })}
            selectedTabClassName="avengers-tab--selected"
            selectedTabPanelClassName="avengers-tab-panel--selected"
          >
            <TabList className="avengers-tab-list">{tabs}</TabList>
            {tabPanels}
          </Tabs>
        </div>
      );
    }
  }
  //render(Component);
  