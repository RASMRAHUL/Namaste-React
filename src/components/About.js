import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render");
    return (
      <div className="about-section">
        <h1>About Class Component</h1>
        <h2>This is Namaste React Webseries</h2>
        {/* <User name={"Rahul Singh (Function)"} /> */}
        <UserClass name={"Rahul Singh (Class)"} location={"Greater Noida"} />
      </div>
    );
  }
}

// Function Based Components
// const About = () => {
//   return (
//     <div className="about-section">
//       <h1>About</h1>
//       <h2>This is Namaste React Webseries</h2>
//       {/* <User name={"Rahul Singh (Function)"} /> */}
//       <UserClass name={"Rahul Singh (Class)"} location={"Greater Noida"} />
//     </div>
//   );
// };

export default About;
