import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridAsymmetrical() {
  return (
    <Container my="md">
        <div style={{textAlign: "center", color: "gray"}}>
            <h2>TRUSTED BY INDUSTRY LEADERS</h2>
        </div>
      <Grid>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}