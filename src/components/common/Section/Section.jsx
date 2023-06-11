export const Section = ({ title, children, titleTag = 'h2' }) => {
  const Title = titleTag;
  return (
    <section>
      <Title>{title}</Title>
      <div>{children}</div>
    </section>
  );
};
