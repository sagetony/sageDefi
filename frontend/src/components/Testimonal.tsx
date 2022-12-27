import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={false} />;

export function Testimonal() {
  return (
    <Container my="md">
        <div>
            <h4>TESTIMONIALS</h4>
            <h1>Reducing development time, cost and complexity.</h1>
        </div>
      <Grid>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={9}>{child}</Grid.Col>
        <Grid.Col xs={9}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}