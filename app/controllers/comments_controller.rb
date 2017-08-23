class CommentsController < ApplicationController


  # new
  def new
    @discussion = Discussion.find(params[:discussion_id])
    @comment = @discussion.comments.new

    render json: @comments, include: :discussions
  end

  # create
  def create
    @discussion = Discussion.find(params[:discussion_id])
    @comment = @discussion.comments.create!(comment_params)

    render json: @comments, include: :discussions
  end

  #show
  def show
    @comment = comment.find(params[:id])

    render json: @comments, include: :discussions
  end

  # # edit
  # def edit
  #   @discussion = Discussion.find(params[:discussion_id])
  #   @comment = Comment.find(params[:id])
  # end
  #
  # # update
  # def update
  #   @discussion = Discussion.find(params[:discussion_id])
  #   @comment = Comment.find(params[:id])
  #   @comment.update(comment_params)
  #
  #   redirect_to discussion_comment_path(@discussion, @comment), notice: "Update successful"
  # end
  #
  # # destroy
  # def destroy
  #   @comment = Comment.find(params[:id])
  #   @comment.destroy
  #
  #   redirect_to discussion_path(@comment.discussion)
  # end

  private
  def comment_params
    params.require(:comment).permit(:text, :discussion_id)
  end
end
