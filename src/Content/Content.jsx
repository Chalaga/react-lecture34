const Content = ({ title, info, openinfo, SetShowContent }) => {
  return (
    <div
      style={{
        width: 250,
        height: 175,
        backgroundColor: "gray",
        borderRadius: 15,
      }}
    >
      <h1>{title}</h1>
      <p>{info}</p>
      <button onClick={() => SetShowContent(!openinfo)}>Hide Content</button>
    </div>
  );
};

export default Content;
