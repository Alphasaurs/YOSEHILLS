import React from "react";
import Jobs from "../jobs/jobs.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: "1",
          title: "UI UX Designer",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt recusandae repudiandae.",
          location: "Bengaluru",
        },
        {
          id: "2",
          title: "Front-end Designer",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt recusandae repudiandae.",
          location: "Gurgaon",
        },
        {
          id: "3",
          title: "Java Developer",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem incidunt recusandae repudiandae.",
          location: "Bengaluru",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-jobs">
        {this.state.sections.map(({ id, title, description, location }) => (
          <Jobs
            key={id}
            title={title}
            description={description}
            location={location}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
