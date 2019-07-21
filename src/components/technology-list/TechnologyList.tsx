import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey['100'],
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
  },
  mainTitle: {
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: '6px',
    borderBottomStyle: 'solid',
    lineHeight: 1.3,
  },
}));

const cards = [];

interface Props {
  id: string;
}

const TechnologyList: React.FC<Props> = ({ id }) => {
  const classes = useStyles(undefined);

  return (
    <section className={classes.root} id={id}>
      <Typography
        variant="h3"
        className={classes.title}
        component="h1"
        align={'center'}
      >
        <span className={classes.mainTitle}>Our Technologies</span>
      </Typography>
      <Container className={classes.container}>
        <Grid container={true} spacing={5}>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img className={classes.image} src="node-logo.svg" alt="NodeJS" />
              <Typography variant="h6" className={classes.title}>
                NodeJS
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img className={classes.image} src="react-logo.svg" alt="React" />
              <Typography variant="h6" className={classes.title}>
                React
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="graphql-logo.svg"
                alt="GraphQL"
              />
              <Typography variant="h6" className={classes.title}>
                GraphQL
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="j5-logo.svg"
                alt="Johnny Five"
              />
              <Typography variant="h6" className={classes.title}>
                Johnny Five (IoT)
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="tensorflow-logo.svg"
                alt="TensorFlow"
              />
              <Typography variant="h6" className={classes.title}>
                TensorFlow (AI)
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="webpack-logo.svg"
                alt="Webpack"
              />
              <Typography variant="h6" className={classes.title}>
                Webpack
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="docker-logo.svg"
                alt="Docker"
              />
              <Typography variant="h6" className={classes.title}>
                Docker
              </Typography>
            </div>
          </Grid>
          <Grid item={true} xs={6} md={3}>
            <div className={classes.item}>
              <img className={classes.image} src="jest-logo.svg" alt="Jest" />
              <Typography variant="h6" className={classes.title}>
                Jest (Testing)
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TechnologyList;
