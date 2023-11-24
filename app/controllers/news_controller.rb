class NewsController < ApplicationController
  include ApplicationHelper
  before_action :set_news, only: %i[ show ]
  layout 'news_popup_layout'

  # GET /news
  def index
    Rails.logger.warn params
    Rails.logger.warn I18n.locale
    Rails.logger.warn request.original_url
    Rails.logger.warn '******************************'

    load_data
    @news = News.items_by_locale
  end

  # GET /news/1
  def show
    load_data
  end

  private

  def set_news
    Rails.logger.warn params
    Rails.logger.warn I18n.locale
    Rails.logger.warn '******************************'
    @news = News.find(params[:id])
  end
end
