import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faFileAlt,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../../Shared/Container/Container";

const ExtraSec = () => {
  const FeaturedIntegration = () => {
    const featuresData = [
      {
        name: "Calendar Sync",
        description: "Sync tasks with your favorite calendar app.",
        icon: faCalendarAlt,
      },
      {
        name: "Create Tasks",
        description: "Create new tasks and added to To-do list.",
        icon: faFileAlt,
      },
      {
        name: "To-do List",
        description: "Manage checklists for each task in To-do.",
        icon: faCheckSquare,
      },
    ];

    return (
      <section id="features" className="bg-gray-200 py-16">
        <Container>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              Featured Integrations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
              {featuresData.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4 text-first">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  };

  return (
    <div>
      <FeaturedIntegration />
    </div>
  );
};

export default ExtraSec;
