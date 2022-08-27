type NameTagsProps = {
  name: string;
};

const NameTags = (props: NameTagsProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{props.name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTags name="dani" />;

export default Application;
