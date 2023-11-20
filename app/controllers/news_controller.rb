class NewsController < ApplicationController
  include ApplicationHelper
  before_action :set_news, only: %i[ show, destroy_attach ]
  layout 'news_popup_layout'

  # GET /news
  def index
    load_data
    @news = News.items_by_locale
  end

  # GET /news/1
  def show
    load_data
  end

  private
    def set_news
      @news = News.find(params[:id])
    end
end
