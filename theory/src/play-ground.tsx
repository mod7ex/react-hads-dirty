let Welcome = (props: { name: string }) => {
  return <h3>{props.name}</h3>;
};

const comp = () => {
  return (
    <div>
      <Welcome name={"MOURAD"} />
    </div>
  );
};
