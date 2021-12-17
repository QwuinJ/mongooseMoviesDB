# mongooseMoviesDB

This is my CLI MongoDB / Mongoose project, allowing to add to two different collections within my database.

# Commands:
## Movie Specific:
- Add movie to db: --addMovie --title="title" --actor="actor" --rating=5 --genre="genre" --released=2001 --director="director" --award:true
- Remove movie from db: --removeMovie --title="title"
- View one movie entry: --readMovie --title="title"
- List all movies: --listAllMovies
- Update movie: --updateOneMovie --title="title" --key="key to be updated" --value="value to be set"
- View all movies with a specific actor: --listMovieActor --actor="actor"
- View all movies in a specific genre: --listGenreMovie --genre="genre"
- View all movies with awards: --listAwardsMovie
- List all movies in order of rating: --listByRatingMovie 

## TV Specific:
- Add TV show to db: --addTV --title="title" --actor="actor" --rating=5 --genre="genre" --released=2001 --director="director" --award:true
- Remove TV show from db: --removeTV --title="title"
- List all TV shows: --listAllTV
- View one TV entry: --readTV --title="title"
- Update TV entry: --updateTV --title="title" --key="key to be updated" --value="value to be set"
- List TV shows with a specific actor: --listActorTV --actor="actor"
- List TV shows in a specific genre: --listGenreTV --genre="genre"
- View all TV shows with awards: --listAwardsTV 
- List all TV shows in order of rating: --listByRatingTV

## Other: 
- List all TV and Movie entries: --listAll

