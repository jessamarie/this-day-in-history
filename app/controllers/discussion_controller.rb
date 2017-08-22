class DiscussionsController < ApplicationController
  # index
  def index
    @discussions = Discussion.all
    render json: @adiscussions, include: [:discussions, :comments]
  end

  # # new
  # def new
  #   @discussion = Discussion.new
  # end

  # create
  def create
    @discussion = Discussion.create!(discussion_params)
    render json: @discussion, status: :created, location: @discussion
  end

  #show
  def show
    @discussion = Discussion.find(params[:id])
    render json: @discussion, include: [:discussions, :comments]
  end

  # # edit
  # def edit
  #   @discussion = Discussion.find(params[:id])
  # end


  # # update
  # def update
  #   @discussion = discussion.find(params[:id])
  #   @discussion.update(discussion_params)
  #
  #   redirect_to discussion_path(@discussion), notice: "Discussion was successfully updated."
  # end

  # # destroy
  # def destroy
  #   @discussion = discussion.find(params[:id])
  #   @discussion.destroy
  #
  #   redirect_to discussions_path
  # end

  private
  def discussion_params
    params.require(:discussion).permit(:content, :is_published)
  end
end
