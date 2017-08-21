class DiscussionsController < ApplicationController
  # index
  def index
    @discussions = Discussion.all
  end

  # new
  def new
    @discussion = Discussion.new
  end

  # create
  def create
    @discussion = Discussion.create!(discussion_params)
    redirect_to discussion_path(@discussion), notice: "Be the first person to comment on this date!"
  end

  #show
  def show
    @discussion = Discussion.find(params[:id])
  end

  # edit
  def edit
    @discussion = Discussion.find(params[:id])
  end


  # update
  def update
    @discussion = discussion.find(params[:id])
    @discussion.update(discussion_params)

    redirect_to discussion_path(@discussion), notice: "Discussion was successfully updated."
  end

  # destroy
  def destroy
    @discussion = discussion.find(params[:id])
    @discussion.destroy

    redirect_to discussions_path
  end

  private
  def discussion_params
    params.require(:discussion).permit(:content, :is_published)
  end
end
