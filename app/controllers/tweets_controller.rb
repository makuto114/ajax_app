class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all.order(id: "DESC")
  end

  def create
    @tweet = Tweet.create(text: params[:content])
    redirect_to action: :index
  end
end
