// import article from 'data/article.json';
// import data from 'data/data.json';
import {
  // BlogCard,
  // Container,
  Section,
  // Heading,
  // Statistics,
  // ForbesList,
  // CryptoHistory,
} from 'components';
import Phonebook from 'components/Phonebook/Phonebook';

// const { poster, tag, title, description, name, avatar, postedAt } = article;

export const App = () => {
  return (
    <Section>
      {/* <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          name={name}
          postedAt={postedAt}
          poster={poster}
          tag={tag}
          title={title}
          description={description}
          avatar={avatar}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title={'Main Statistics'} stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container> */}
      <Phonebook />
    </Section>
  );
};
