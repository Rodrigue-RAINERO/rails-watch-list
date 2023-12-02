class MoviesController < ApplicationController
  before_action :set_current_carousel_position, only: [:index]

  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find(params[:id])
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      redirect_to movies_path
    else
      render :new
    end
  end

  def edit
    @movie = Movie.find(params[:id])
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)
    redirect_to movie_path(@movie)
  end

  def destroy
    @movie = Movie.find(params[:id])
    @movie.destroy

    redirect_to movies_path
  end

  def update_carousel_position
    session[:current_carousel_position] = params[:position].to_i
    head :ok
  end

  private

  def set_current_carousel_position
    session[:current_carousel_position] ||= 0
    @current_carousel_position = session[:current_carousel_position].to_i
  end

  def movie_params
    params.require(:movie).permit(:title, :overview, :poster_url, :rating)
  end
end
