class CommentsController < ApplicationController

  # create
  def create
    @discussion = Discussion.find(params[:discussion_id])
    @comment = @discussion.comments.create!(comment_params)

    render json: @comments, include: :discussions
  end

  private
  def comment_params
    params.require(:comment).permit(:text, :discussion_id)
  end
end
