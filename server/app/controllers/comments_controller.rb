class CommentsController < ApplicationController


  # new
  def new
    @discussion = Discussion.find(params[:discussion_id])
    @comment = @discussion.comments.new
  end

  # create
  def create
    @discussion = Discussion.find(params[:discussion_id])
    @comment = @discussion.comments.create!(comment_params)
    redirect_to discussion_path(@discussion), notice: "comment was successfully saved."
  end

  #show
  def show
    @comment = comment.find(params[:id])
  end

  # edit
  def edit
    @discussion = Discussion.find(params[:discussion_id])
    @comment = Comment.find(params[:id])
  end

  # update
  def update
    @discussion = Discussion.find(params[:discussion_id])
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)

    redirect_to discussion_comment_path(@discussion, @comment), notice: "Update successful"
  end

  # destroy
  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    redirect_to discussion_path(@comment.discussion)
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :discussion_id)
  end
end
