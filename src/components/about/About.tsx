import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  titleContainer: {
    marginTop: theme.spacing(5),
  },
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  row: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    flex: 1,
    height: '100%',
  },
  imageContainer: {
    maxHeight: '250px',
    display: 'flex',
    justifyContent: 'center',
  },
  descriptionContainer: {},
  '@media (max-width: 600px)': {
    imageContainer: {
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      marginBottom: `-${theme.spacing(2)}px`,
    },
    descriptionContainer: {
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
    },
  },
  mainTitle: {
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: '6px',
    borderBottomStyle: 'solid',
    lineHeight: 1.3,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    paddingLeft: '10px',
    borderLeftColor: theme.palette.primary.main,
    borderLeftWidth: '10px',
    borderLeftStyle: 'solid',
  },
}));

interface Props {
  id: string;
}

const About: React.FC<Props> = ({ id }) => {
  const classes = useStyles(undefined);

  return (
    <StaticQuery
      query={graphql`
        query About {
          services: file(relativePath: { eq: "services-icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 640) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          iot: file(relativePath: { eq: "iot-icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 640) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
          consulting: file(relativePath: { eq: "consulting-icon.png" }) {
            childImageSharp {
              fluid(maxHeight: 640) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <section className={classes.root} id={id}>
          <Typography variant="h3" component="h1" align={'center'}
                      className={classes.titleContainer}>
            <span className={classes.mainTitle}>What we can do for you?</span>
          </Typography>
          <Container className={classes.container}>
            <Grid container={true} spacing={5} className={classes.row}>
              <Grid
                item={true}
                xs={12}
                md={4}
                className={classes.imageContainer}
              >
                <img
                  className={classes.image}
                  src="/web-icon.svg"
                  alt="services"
                />
              </Grid>
              <Grid
                item={true}
                xs={12}
                md={8}
                className={classes.descriptionContainer}
              >
                <Typography variant="h4" className={classes.title}>
                  Web Applications
                </Typography>
                <Typography variant="h6">
                  {`Need a whole application? No problem, we're specialising in state of the art web applications. `}
                  {`It doesn't matter if it's big or small, we can find right solution for you.`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container={true} spacing={5} className={classes.row}>
              <Grid
                item={true}
                xs={12}
                md={4}
                className={classes.imageContainer}
              >
                <Img
                  className={classes.image}
                  fluid={data.services.childImageSharp.fluid}
                  alt="web"
                />
              </Grid>
              <Grid
                item={true}
                xs={12}
                md={8}
                className={classes.descriptionContainer}
              >
                <Typography variant="h4" className={classes.title}>
                  Services
                </Typography>
                <Typography variant="h6">
                  {`If you want to extend your service's functionality without reimplementing whole thing`}
                  {`, there is a solution for that. We can implement external services to provide extra functionality to your existing application.`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container={true} spacing={5} className={classes.row}>
              <Grid
                item={true}
                xs={12}
                md={4}
                className={classes.imageContainer}
              >
                <Img
                  className={classes.image}
                  fluid={data.iot.childImageSharp.fluid}
                  alt="web"
                />
              </Grid>
              <Grid
                item={true}
                xs={12}
                md={8}
                className={classes.descriptionContainer}
              >
                <Typography variant="h4" className={classes.title}>
                  IoT Solutions
                </Typography>
                <Typography variant="h6">
                  {`More and more things are connected to the internet. That opens the door to solutions like smart buildings/cities. `}
                  {`We can prototype your idea and help deploying it in the real world.`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container={true} spacing={5} className={classes.row}>
              <Grid
                item={true}
                xs={12}
                md={4}
                className={classes.imageContainer}
              >
                <img
                  className={classes.image}
                  src="/brain-icon.svg"
                  alt="machine learning"
                />
              </Grid>
              <Grid
                item={true}
                xs={12}
                md={8}
                className={classes.descriptionContainer}
              >
                <Typography variant="h4" className={classes.title}>
                  Machine Learning
                </Typography>
                <Typography variant="h6">
                  {`We're entering times when AI is a real thing. It could help our clients and provide services that weren't available until now. `}
                  {`We can help you bringing your application to the next level with smart data processing.`}
                </Typography>
              </Grid>
            </Grid>
            <Grid container={true} spacing={5} className={classes.row}>
              <Grid
                item={true}
                xs={12}
                md={4}
                className={classes.imageContainer}
              >
                <Img
                  className={classes.image}
                  fluid={data.consulting.childImageSharp.fluid}
                  alt="web"
                />
              </Grid>
              <Grid
                item={true}
                xs={12}
                md={8}
                className={classes.descriptionContainer}
              >
                <Typography variant="h4" className={classes.title}>
                  IT Consulting
                </Typography>
                <Typography variant="h6">
                  {`You have an issue to solve? Want to improve your processes? `}
                  {`You're in the right place. We can help you with your problem, find proper technology and solution. `}
                  {`We can even provide workshop for your team.`}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </section>
      )}
    />
  );
};

export default About;
