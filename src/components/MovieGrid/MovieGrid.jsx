import React from 'react';
import { Link } from 'react-router-dom';
import './MovieGrid.css';
import { Grid, Row, Col } from 'react-bootstrap'

const MovieGrid = (props) => (
  <Grid>
    <Row>
      {
        props.movies ? props.movies.map((movie, idx) =>
          <Col md={6} key={idx} id="movieSpot">
            {!movie.poster_path ? <img className="moviePic" src='https://i.imgur.com/sBgAE8f.jpg' alt="Movie Poster" /> : <img className="moviePic" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie Poster" />}
            <br />
            <Link className="movieLink" to={`/movies/${movie.id}`}>{movie.title}</Link>
          </Col>)
          :
          <div>
          </div>
      }
    </Row>
  </Grid>

)

export default MovieGrid;




