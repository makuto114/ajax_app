class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all
  end

  def new
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.create(text: params[:text])
  end
end
