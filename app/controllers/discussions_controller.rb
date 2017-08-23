class DiscussionsController < ApplicationController
  # index
  def index
    @discussions = Discussion.all
    render json: @discussions, include: :comments
  end
  
  # create
  def create
    @discussion = Discussion.create!(discussion_params)
    render json: @discussion, status: :created, location: @discussion
  end

  #show
  def show
    @discussion = Discussion.find_or_create_by(day: params[:day], year: params[:year], month: params[:month])
    render json: @discussion, include: :comments
  end

  private
  def discussion_params
    params.require(:discussion).permit(:date, :year, :month, :id)
  end
end
