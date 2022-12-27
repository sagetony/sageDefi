import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={false} />;

export function ICObanner() {
  return (
    <Container my="md">
        
      <Grid>
        <Grid.Col xs={12}>{child}</Grid.Col>
      </Grid>
    </Container>
  );
}