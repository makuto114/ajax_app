class TweetsController < ApplicationController
  
  def index
    @tweets = Tweet.all.order(id: "DESC")
  end

  def create
    @tweet = Tweet.create(content: params[:content], checked: false)
    render json:{ tweet: tweet}
  end

  def checked
    tweet = Tweet.find(params[:id])
    if tweet.checked
      tweet.update(checked: false)
    else
      tweet.update(checked: true)
    end

    item = Tweet.find(params[:id])
    render json: { tweet: item }
  end
end
