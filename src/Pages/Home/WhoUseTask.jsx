import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBuilding,
  faMoneyCheckAlt,
  faUsers,
  faTasks,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../../Shared/Container/Container";

const WhoUseTask = () => {
  const userTypesData = [
    {
      userType: "Developers",
      benefits: [
        "Efficient project tracking",
        "Collaborative coding tasks",
        "Sprint planning",
      ],
      icon: faCode,
    },
    {
      userType: "Corporate Professionals",
      benefits: [
        "Task prioritization",
        "Team collaboration",
        "Progress reporting",
      ],
      icon: faBuilding,
    },
    {
      userType: "Bankers",
      benefits: [
        "Transaction tracking",
        "Financial task management",
        "Compliance monitoring",
      ],
      icon: faMoneyCheckAlt,
    },
    {
      userType: "Team Leads",
      benefits: [
        "Team coordination",
        "Project overview",
        "Performance analytics",
      ],
      icon: faUsers,
    },
    {
      userType: "Freelancers",
      benefits: ["Client project management", "Invoicing", "Time tracking"],
      icon: faTasks,
    },
    {
      userType: "Business Analysts",
      benefits: ["Data analysis", "Requirement tracking", "Report generation"],
      icon: faChartBar,
    },
  ];

  return (
    <section id="whoUseTask" className="bg-gray-100 py-16">
      <Container>
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Who Can Benefit ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {userTypesData?.map((userType, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-second">
                  <FontAwesomeIcon icon={userType.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {userType?.userType}
                </h3>
                <ul className="list-disc ml-6">
                  {userType?.benefits?.map((benefit, i) => (
                    <li key={i} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhoUseTask;
