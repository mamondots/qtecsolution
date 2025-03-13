import { Helmet } from "react-helmet";

const TabTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Idea_Tree - {title}</title>
    </Helmet>
  );
};

export default TabTitle;
