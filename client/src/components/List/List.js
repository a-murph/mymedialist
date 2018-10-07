import React from "react";
import ListItem from "./ListItem"
import "./List.css";

const List = (props) => {
  return (
    <div className="list-overflow-container">
      <table>
		  <thead>
			<tr className="table-head">
				<th className="status"></th>
				<th>Image</th>
				<th>Movie Title</th>
				<th>Score</th>
				<th>Status</th>
				<th>Director</th>
				<th className="delete"></th>
			</tr>
		  </thead>
		  <tbody>
			  {props.movies.map(movie => (
				  <ListItem delete={props.delete} dropdown={props.dropdown} image={movie.image} imdb={movie.imdbId} title={movie.title} score={movie.score} status={movie.status} director={movie.director} />
			  ))}
		  </tbody>
	  </table>
    </div>
  );
};

export default List;